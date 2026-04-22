import { getBusyIntervals } from './_lib/zoho.js';
import { generateSlots, slotConfig } from './_lib/slots.js';
import { DEFAULT_TZ } from './_lib/time.js';
import { applyCors } from './_lib/cors.js';

export default async function handler(req, res) {
  if (applyCors(req, res)) return;
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const date = req.query.date;
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return res.status(400).json({ error: 'date must be in YYYY-MM-DD format' });
  }

  try {
    const busy = await getBusyIntervals(date);
    const slots = generateSlots(date, busy);
    return res.status(200).json({
      date,
      timezone: DEFAULT_TZ,
      config: slotConfig(),
      slots: slots.map(({ time, available }) => ({ time, available }))
    });
  } catch (err) {
    console.error('availability error:', err);
    return res.status(500).json({ error: err.message || 'Could not load availability' });
  }
}
