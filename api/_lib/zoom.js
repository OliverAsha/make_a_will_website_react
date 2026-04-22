// Zoom helpers using Server-to-Server OAuth.
//
// Server-to-Server OAuth is a Zoom app type where your server exchanges an
// account_id + client_id + client_secret for a short-lived access token.
// No end-user login needed — great for a single-solicitor host.

let cachedToken = null; // { access_token, expiresAt }

async function getAccessToken() {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) {
    return cachedToken.access_token;
  }
  const { ZOOM_ACCOUNT_ID, ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET } = process.env;
  if (!ZOOM_ACCOUNT_ID || !ZOOM_CLIENT_ID || !ZOOM_CLIENT_SECRET) {
    throw new Error('Zoom credentials are not configured (set ZOOM_ACCOUNT_ID, ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET).');
  }
  const basic = Buffer.from(`${ZOOM_CLIENT_ID}:${ZOOM_CLIENT_SECRET}`).toString('base64');

  const res = await fetch(`https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${encodeURIComponent(ZOOM_ACCOUNT_ID)}`, {
    method: 'POST',
    headers: { Authorization: `Basic ${basic}` }
  });
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`Zoom token request failed: ${JSON.stringify(data)}`);
  }
  cachedToken = {
    access_token: data.access_token,
    expiresAt: Date.now() + (data.expires_in || 3600) * 1000
  };
  return cachedToken.access_token;
}

// Create a scheduled Zoom meeting and return { id, join_url, start_url, password }.
export async function createMeeting({ topic, startUtc, durationMinutes, agenda, inviteeEmail }) {
  const hostEmail = process.env.ZOOM_USER_EMAIL;
  if (!hostEmail) throw new Error('ZOOM_USER_EMAIL is not set (host email for the meeting).');

  const token = await getAccessToken();
  const res = await fetch(`https://api.zoom.us/v2/users/${encodeURIComponent(hostEmail)}/meetings`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      topic,
      type: 2, // scheduled meeting
      start_time: startUtc.toISOString().replace(/\.\d{3}Z$/, 'Z'),
      duration: durationMinutes,
      timezone: 'UTC',
      agenda: agenda || '',
      settings: {
        join_before_host: false,
        waiting_room: true,
        meeting_authentication: false,
        email_notification: true,
        registrants_email_notification: true,
        // Ask Zoom to email the join link to the invitee.
        contact_email: hostEmail
      }
    })
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Zoom create meeting failed (${res.status}): ${JSON.stringify(data)}`);
  }
  return {
    id: data.id,
    join_url: data.join_url,
    start_url: data.start_url,
    password: data.password
  };
}
