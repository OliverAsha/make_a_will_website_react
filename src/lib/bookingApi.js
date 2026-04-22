// Booking API wrapper.
//
// Two modes:
//   - DEMO mode (default in development): returns fake data entirely in the
//     browser. No backend needed — `npm run dev` is enough to click through
//     the whole flow.
//   - LIVE mode: calls the real /api/availability and /api/book serverless
//     functions (needs `vercel dev` and real Zoho/Zoom credentials).
//
// Toggle with the `VITE_DEMO_MODE` env var. See .env.development for the
// default. Set it to "false" (or remove it) to use the real backend.

// If VITE_API_BASE_URL is set we treat this as a real deploy that calls
// the Vercel-hosted booking API. In that case demo mode is forced off.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
const DEMO_MODE = API_BASE_URL
  ? false
  : import.meta.env.VITE_DEMO_MODE !== 'false';

export const isDemoMode = () => DEMO_MODE;

// Simulated latency so the loading spinners still get a chance to appear.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Build a deterministic list of "booked" slot times for a given date, so the
// page looks plausibly busy without being random every render.
function fakeBookedSlotsFor(dateISO) {
  // Hash the date string into a 0..n number, then pick a handful of slot indexes.
  let h = 0;
  for (let i = 0; i < dateISO.length; i++) h = (h * 31 + dateISO.charCodeAt(i)) >>> 0;
  const pick = (n) => (h = (h * 1103515245 + 12345) >>> 0) % n;

  // Slots run 09:00..16:30 in 30-min steps = 16 slots.
  const total = 16;
  const booked = new Set();
  const howMany = 3 + pick(4); // 3..6 booked
  while (booked.size < howMany) booked.add(pick(total));
  return booked;
}

function indexToTime(i) {
  const hour = 9 + Math.floor(i / 2);
  const min = i % 2 === 0 ? '00' : '30';
  return `${String(hour).padStart(2, '0')}:${min}`;
}

async function demoGetAvailability(date) {
  await sleep(400);
  const booked = fakeBookedSlotsFor(date);
  const slots = [];
  for (let i = 0; i < 16; i++) {
    slots.push({ time: indexToTime(i), available: !booked.has(i) });
  }
  return { date, timezone: 'Europe/London', slots };
}

async function demoCreateBooking(payload) {
  await sleep(700);
  // 10% fake failure rate so the error path is reachable while clicking around.
  // Comment this block out if it gets annoying in demos.
  // if (Math.random() < 0.1) throw new Error('Demo: pretend the slot was just taken.');

  const [y, m, d] = payload.date.split('-').map(Number);
  const [hh, mm] = payload.time.split(':').map(Number);
  // Approximate — treats the local wall time as if it were already in the
  // browser's zone. Good enough for a demo.
  const start = new Date(y, m - 1, d, hh, mm);
  const end = new Date(start.getTime() + 30 * 60 * 1000);

  return {
    success: true,
    demo: true,
    meetingId: 'demo-' + Math.random().toString(36).slice(2, 10),
    joinUrl: 'https://zoom.us/j/0000000000?pwd=demo',
    startTime: start.toISOString(),
    endTime: end.toISOString()
  };
}

export async function getAvailability(date) {
  if (DEMO_MODE) return demoGetAvailability(date);
  const res = await fetch(`${API_BASE_URL}/api/availability?date=${date}`);
  if (!res.ok) throw new Error('Could not load available times');
  return res.json();
}

export async function createBooking(payload) {
  if (DEMO_MODE) return demoCreateBooking(payload);
  const res = await fetch(`${API_BASE_URL}/api/book`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Could not create booking');
  return data;
}
