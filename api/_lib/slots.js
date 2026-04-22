// Slot-generation logic.
// Given a date and a list of busy intervals, returns the list of bookable slots.

import { DEFAULT_TZ, localToUtc, wallTimeHHMM } from './time.js';

const SLOT_MINUTES = parseInt(process.env.SLOT_MINUTES || '30', 10);
const WORK_START = parseInt(process.env.WORK_START_HOUR || '9', 10);
const WORK_END = parseInt(process.env.WORK_END_HOUR || '17', 10);
const LEAD_TIME_MINUTES = parseInt(process.env.LEAD_TIME_MINUTES || '60', 10);

// Returns [{time: "09:00", available: true, startUtc, endUtc}, ...]
export function generateSlots(dateISO, busyIntervals = []) {
  const [year, month, day] = dateISO.split('-').map((n) => parseInt(n, 10));
  const slots = [];
  const now = Date.now();
  const earliestBookable = now + LEAD_TIME_MINUTES * 60 * 1000;

  const totalMinutes = (WORK_END - WORK_START) * 60;
  for (let m = 0; m < totalMinutes; m += SLOT_MINUTES) {
    const hour = WORK_START + Math.floor(m / 60);
    const min = m % 60;
    const startUtc = localToUtc(year, month, day, hour, min, DEFAULT_TZ);
    const endUtc = new Date(startUtc.getTime() + SLOT_MINUTES * 60 * 1000);

    const inPast = startUtc.getTime() < earliestBookable;
    const overlapsBusy = busyIntervals.some(
      (b) => startUtc < b.end && endUtc > b.start
    );

    slots.push({
      time: wallTimeHHMM(startUtc, DEFAULT_TZ),
      available: !inPast && !overlapsBusy,
      startUtc: startUtc.toISOString(),
      endUtc: endUtc.toISOString()
    });
  }
  return slots;
}

export function slotConfig() {
  return { SLOT_MINUTES, WORK_START, WORK_END, LEAD_TIME_MINUTES };
}
