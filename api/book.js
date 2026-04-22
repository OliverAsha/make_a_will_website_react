import { getBusyIntervals, createEvent } from './_lib/zoho.js';
import { createMeeting } from './_lib/zoom.js';
import { generateSlots, slotConfig } from './_lib/slots.js';
import { applyCors } from './_lib/cors.js';

const TOPIC_LABELS = {
  general: 'General enquiry about making a will',
  mirror: 'A pair of wills / mirror wills',
  charity: 'Charity gifts in a will',
  update: 'Updating an existing will',
  other: 'Other'
};

function isEmail(s) {
  return typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export default async function handler(req, res) {
  if (applyCors(req, res)) return;
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { date, time, name, email, phone = '', topic = 'general', notes = '' } = req.body || {};

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return res.status(400).json({ error: 'date must be YYYY-MM-DD' });
  }
  if (!time || !/^\d{2}:\d{2}$/.test(time)) {
    return res.status(400).json({ error: 'time must be HH:MM' });
  }
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ error: 'name is required' });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ error: 'a valid email is required' });
  }

  try {
    // Re-check availability server-side — never trust the client.
    const busy = await getBusyIntervals(date);
    const slots = generateSlots(date, busy);
    const chosen = slots.find((s) => s.time === time);
    if (!chosen || !chosen.available) {
      return res.status(409).json({ error: 'Sorry — that slot is no longer available. Please pick another.' });
    }

    const startUtc = new Date(chosen.startUtc);
    const endUtc = new Date(chosen.endUtc);
    const { SLOT_MINUTES } = slotConfig();

    const topicLabel = TOPIC_LABELS[topic] || topic;
    const meetingTopic = `Make a Will consultation — ${name.trim()}`;
    const agenda = [
      `Topic: ${topicLabel}`,
      phone ? `Phone: ${phone}` : '',
      notes ? `Notes: ${notes}` : ''
    ].filter(Boolean).join('\n');

    // 1) Create the Zoom meeting first so we can include its join URL in the calendar event.
    const meeting = await createMeeting({
      topic: meetingTopic,
      startUtc,
      durationMinutes: SLOT_MINUTES,
      agenda,
      inviteeEmail: email
    });

    const description = [
      meetingTopic,
      '',
      `Zoom link: ${meeting.join_url}`,
      meeting.password ? `Passcode: ${meeting.password}` : '',
      '',
      `Topic: ${topicLabel}`,
      `Attendee: ${name.trim()} <${email.trim()}>`,
      phone ? `Phone: ${phone}` : '',
      notes ? `\nNotes from the attendee:\n${notes}` : ''
    ].filter(Boolean).join('\n');

    // 2) Create the Zoho calendar event and invite the attendee.
    await createEvent({
      title: meetingTopic,
      description,
      startUtc,
      endUtc,
      attendeeEmail: email.trim(),
      attendeeName: name.trim()
    });

    return res.status(200).json({
      success: true,
      meetingId: meeting.id,
      joinUrl: meeting.join_url,
      startTime: startUtc.toISOString(),
      endTime: endUtc.toISOString()
    });
  } catch (err) {
    console.error('book error:', err);
    return res.status(500).json({ error: err.message || 'Could not create booking' });
  }
}
