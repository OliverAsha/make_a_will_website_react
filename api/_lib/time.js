// Timezone helpers that avoid pulling in a date library.
//
// The booking system always works in one timezone (Europe/London by default).
// We need to convert between "wall time" (what the user sees: "10:00 on 20 April")
// and a real UTC instant (what Zoho/Zoom store).

export const DEFAULT_TZ = process.env.BOOKING_TIMEZONE || 'Europe/London';

// Find the offset (in ms) of a given UTC instant inside a named timezone.
// Positive = timezone is ahead of UTC (e.g. +01:00 → +3600000 ms).
function tzOffsetMs(utcInstant, timeZone) {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour12: false,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
  const parts = dtf.formatToParts(new Date(utcInstant));
  const get = (type) => parseInt(parts.find((p) => p.type === type).value, 10);
  let hour = get('hour');
  if (hour === 24) hour = 0; // Intl quirk: midnight can be reported as 24
  const asIfUTC = Date.UTC(get('year'), get('month') - 1, get('day'), hour, get('minute'), get('second'));
  return asIfUTC - utcInstant;
}

// Turn a local wall time in a given timezone into a real UTC Date.
// Example: localToUtc(2026, 4, 20, 10, 0, 'Europe/London') → Date for 09:00Z (BST).
export function localToUtc(year, month, day, hour, minute, timeZone = DEFAULT_TZ) {
  // Step 1: pretend the wall time is UTC.
  const guess = Date.UTC(year, month - 1, day, hour, minute);
  // Step 2: ask what offset that instant has in the real timezone and subtract it.
  const offset = tzOffsetMs(guess, timeZone);
  return new Date(guess - offset);
}

// Format an offset in +HHMM / -HHMM form (for Zoho's compact timestamp).
function formatOffset(offsetMs) {
  const sign = offsetMs >= 0 ? '+' : '-';
  const abs = Math.abs(offsetMs);
  const hh = String(Math.floor(abs / 3_600_000)).padStart(2, '0');
  const mm = String(Math.floor((abs % 3_600_000) / 60_000)).padStart(2, '0');
  return `${sign}${hh}${mm}`;
}

// Zoho Calendar uses a compact timestamp like "20260420T100000+0100".
export function toZohoStamp(utcDate, timeZone = DEFAULT_TZ) {
  const offset = tzOffsetMs(utcDate.getTime(), timeZone);
  const local = new Date(utcDate.getTime() + offset);
  const y = local.getUTCFullYear();
  const mo = String(local.getUTCMonth() + 1).padStart(2, '0');
  const d = String(local.getUTCDate()).padStart(2, '0');
  const h = String(local.getUTCHours()).padStart(2, '0');
  const mi = String(local.getUTCMinutes()).padStart(2, '0');
  const s = String(local.getUTCSeconds()).padStart(2, '0');
  return `${y}${mo}${d}T${h}${mi}${s}${formatOffset(offset)}`;
}

// Parse a Zoho compact timestamp back to a UTC Date.
// Accepts "20260420T100000+0100" or "20260420T090000Z".
export function fromZohoStamp(stamp) {
  const m = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z|[+-]\d{4})?$/.exec(stamp);
  if (!m) return null;
  const [, y, mo, d, h, mi, s, tz] = m;
  let offsetMs = 0;
  if (tz && tz !== 'Z') {
    const sign = tz[0] === '+' ? 1 : -1;
    offsetMs = sign * (parseInt(tz.slice(1, 3), 10) * 3_600_000 + parseInt(tz.slice(3, 5), 10) * 60_000);
  }
  const asUtc = Date.UTC(+y, +mo - 1, +d, +h, +mi, +s);
  return new Date(asUtc - offsetMs);
}

// Format a HH:MM string from a UTC Date rendered in the booking timezone.
export function wallTimeHHMM(utcDate, timeZone = DEFAULT_TZ) {
  const offset = tzOffsetMs(utcDate.getTime(), timeZone);
  const local = new Date(utcDate.getTime() + offset);
  const h = String(local.getUTCHours()).padStart(2, '0');
  const m = String(local.getUTCMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}
