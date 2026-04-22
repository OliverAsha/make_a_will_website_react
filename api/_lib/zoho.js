// Zoho Calendar helpers.
//
// Zoho OAuth works like this:
//   1. You do a one-time manual authorization to receive a long-lived REFRESH token
//      (see SETUP-BOOKING.md for the step-by-step).
//   2. Every time the server needs to call Zoho, it trades that refresh token for a
//      short-lived ACCESS token (good for ~1 hour) and uses it in the Authorization header.

import { toZohoStamp, toZohoUtcStamp, fromZohoStamp, DEFAULT_TZ } from './time.js';

const ACCOUNTS_DOMAIN = process.env.ZOHO_ACCOUNTS_DOMAIN || 'accounts.zoho.com';
const CALENDAR_DOMAIN = process.env.ZOHO_CALENDAR_DOMAIN || 'calendar.zoho.com';

// Cache the access token across warm invocations.
let cachedToken = null; // { access_token, expiresAt }

async function getAccessToken() {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) {
    return cachedToken.access_token;
  }
  const { ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN } = process.env;
  if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
    throw new Error('Zoho credentials are not configured (set ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN).');
  }

  const params = new URLSearchParams({
    refresh_token: ZOHO_REFRESH_TOKEN,
    client_id: ZOHO_CLIENT_ID,
    client_secret: ZOHO_CLIENT_SECRET,
    grant_type: 'refresh_token'
  });

  const res = await fetch(`https://${ACCOUNTS_DOMAIN}/oauth/v2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString()
  });
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`Zoho token refresh failed: ${JSON.stringify(data)}`);
  }
  cachedToken = {
    access_token: data.access_token,
    expiresAt: Date.now() + (data.expires_in || 3600) * 1000
  };
  return cachedToken.access_token;
}

async function zohoRequest(path, { method = 'GET', searchParams = {}, body = null } = {}) {
  const token = await getAccessToken();
  const url = new URL(`https://${CALENDAR_DOMAIN}/api/v1${path}`);
  for (const [k, v] of Object.entries(searchParams)) {
    if (v !== undefined && v !== null) url.searchParams.set(k, v);
  }

  const opts = {
    method,
    headers: { Authorization: `Zoho-oauthtoken ${token}` }
  };
  if (body) {
    opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    opts.body = body;
  }

  const res = await fetch(url.toString(), opts);
  const text = await res.text();
  let parsed = null;
  try { parsed = text ? JSON.parse(text) : null; } catch { parsed = { raw: text }; }

  if (!res.ok) {
    throw new Error(`Zoho ${method} ${path} failed (${res.status}): ${text}`);
  }
  return parsed;
}

// Return busy intervals [{start: Date, end: Date}, ...] for a given day.
export async function getBusyIntervals(dateISO) {
  const calendarUid = process.env.ZOHO_CALENDAR_UID;
  if (!calendarUid) throw new Error('ZOHO_CALENDAR_UID is not set.');

  // Zoho expects a range parameter as a JSON object {start, end} in its compact
  // timestamp format. We ask for the full day in the booking timezone.
  const [year, month, day] = dateISO.split('-').map(Number);
  const dayStartUtc = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
  const dayEndUtc = new Date(Date.UTC(year, month - 1, day, 23, 59, 59));

  const range = JSON.stringify({
    start: toZohoUtcStamp(dayStartUtc),
    end: toZohoUtcStamp(dayEndUtc)
  });

  const data = await zohoRequest(`/calendars/${encodeURIComponent(calendarUid)}/events`, {
    searchParams: { range }
  });

  const events = data?.events || data?.data?.events || [];
  const busy = [];
  for (const e of events) {
    // Skip cancelled or tentative events if the API surfaces that.
    if (e.status && String(e.status).toLowerCase() === 'cancelled') continue;
    // An event might be marked transparent (free); if so, skip.
    if (e.transparency && String(e.transparency).toLowerCase() === 'transparent') continue;

    const dt = e.dateandtime || e.whenDetail || {};
    const start = fromZohoStamp(dt.start || dt.from || '');
    const end = fromZohoStamp(dt.end || dt.to || '');
    if (start && end) busy.push({ start, end });
  }
  return busy;
}

// Create an event. startUtc/endUtc are JS Date objects.
export async function createEvent({ title, description, startUtc, endUtc, attendeeEmail, attendeeName }) {
  const calendarUid = process.env.ZOHO_CALENDAR_UID;
  if (!calendarUid) throw new Error('ZOHO_CALENDAR_UID is not set.');

  const eventdata = {
    title,
    description,
    dateandtime: {
      timezone: DEFAULT_TZ,
      start: toZohoStamp(startUtc, DEFAULT_TZ),
      end: toZohoStamp(endUtc, DEFAULT_TZ)
    },
    isprivate: false,
    attendees: attendeeEmail
      ? [{ email: attendeeEmail, name: attendeeName || attendeeEmail, status: 'NEEDS-ACTION' }]
      : []
  };

  const body = new URLSearchParams({ eventdata: JSON.stringify(eventdata) }).toString();

  return zohoRequest(`/calendars/${encodeURIComponent(calendarUid)}/events`, {
    method: 'POST',
    body
  });
}
