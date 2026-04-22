import { useState, useEffect, useMemo } from 'react';
import SEO from '../components/SEO';
import { getAvailability, createBooking, isDemoMode } from '../lib/bookingApi';

const WORKING_DAYS = [1, 2, 3, 4, 5]; // Mon–Fri (Sunday = 0)
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Build a YYYY-MM-DD string from a Date (local time).
function toISODate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// Build the grid of day cells for a given month (Mon-first layout).
function buildMonthGrid(year, month) {
  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // JS Sunday=0; shift so Monday=0 for a Mon-first grid.
  const leadingBlanks = (firstOfMonth.getDay() + 6) % 7;

  const cells = [];
  for (let i = 0; i < leadingBlanks; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(year, month, d));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function BookACall() {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotError, setSlotError] = useState(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'general',
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [confirmation, setConfirmation] = useState(null);

  const monthCells = useMemo(
    () => buildMonthGrid(viewYear, viewMonth),
    [viewYear, viewMonth]
  );

  // Fetch slots whenever a date is picked.
  useEffect(() => {
    if (!selectedDate) return;
    let cancelled = false;
    setLoadingSlots(true);
    setSlotError(null);
    setSelectedTime(null);

    getAvailability(toISODate(selectedDate))
      .then((data) => {
        if (cancelled) return;
        setSlots(data.slots || []);
      })
      .catch((err) => {
        if (cancelled) return;
        setSlotError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoadingSlots(false);
      });

    return () => { cancelled = true; };
  }, [selectedDate]);

  const goPrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const goNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const isSelectable = (d) => {
    if (!d) return false;
    if (d < today) return false;
    if (!WORKING_DAYS.includes(d.getDay())) return false;
    return true;
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      setSubmitError('Please pick a date and time first.');
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      const data = await createBooking({
        date: toISODate(selectedDate),
        time: selectedTime,
        ...form
      });
      setConfirmation(data);
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const resetAll = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setSlots([]);
    setForm({ name: '', email: '', phone: '', topic: 'general', notes: '' });
    setConfirmation(null);
    setSubmitError(null);
  };

  const demo = isDemoMode();
  const DemoBanner = () => demo ? (
    <div className="booking-demo-banner">
      <strong>Demo mode.</strong> No real bookings are created. Slot availability
      is fake. Switch off by setting <code>VITE_DEMO_MODE=false</code>.
    </div>
  ) : null;

  // --- Confirmation view ---
  if (confirmation) {
    return (
      <>
        <SEO />
        <DemoBanner />
        <div className="page-header">
          <div className="container">
            <h1>Your call is booked</h1>
            <p>We've sent the details to your email.</p>
          </div>
        </div>
        <section className="page-content">
          <div className="container">
            <div className="booking-confirmation">
              <div className="booking-confirmation-icon">✓</div>
              <h2>Thank you, {form.name.split(' ')[0]}</h2>
              <p className="booking-confirmation-when">
                <strong>{new Date(confirmation.startTime).toLocaleString('en-GB', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</strong>
              </p>
              <p>
                Your Zoom meeting link:
                <br />
                <a href={confirmation.joinUrl} target="_blank" rel="noopener noreferrer">
                  {confirmation.joinUrl}
                </a>
              </p>
              <p className="booking-confirmation-note">
                The link has also been added to a calendar invite sent to{' '}
                <strong>{form.email}</strong>.
              </p>
              <button onClick={resetAll} className="btn btn-secondary mt-3">
                Book another call
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  // --- Main booking view ---
  return (
    <>
      <SEO />
      <DemoBanner />
      <div className="page-header">
        <div className="container">
          <h1>Book a call</h1>
          <p>Pick a time that suits you — we'll send a Zoom link by email.</p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="booking-layout">
            {/* Step 1: Date picker */}
            <div className="booking-step">
              <h2>1. Pick a date</h2>
              <div className="booking-calendar">
                <div className="booking-calendar-header">
                  <button
                    type="button"
                    onClick={goPrevMonth}
                    className="booking-calendar-nav"
                    aria-label="Previous month"
                    disabled={viewYear === today.getFullYear() && viewMonth === today.getMonth()}
                  >
                    ‹
                  </button>
                  <span className="booking-calendar-title">
                    {MONTH_NAMES[viewMonth]} {viewYear}
                  </span>
                  <button
                    type="button"
                    onClick={goNextMonth}
                    className="booking-calendar-nav"
                    aria-label="Next month"
                  >
                    ›
                  </button>
                </div>
                <div className="booking-calendar-weekdays">
                  {DAY_LABELS.map((l) => <span key={l}>{l}</span>)}
                </div>
                <div className="booking-calendar-grid">
                  {monthCells.map((d, i) => {
                    if (!d) return <span key={i} className="booking-day booking-day-empty" />;
                    const selectable = isSelectable(d);
                    const isSelected = selectedDate && toISODate(selectedDate) === toISODate(d);
                    return (
                      <button
                        key={i}
                        type="button"
                        disabled={!selectable}
                        onClick={() => setSelectedDate(d)}
                        className={
                          'booking-day' +
                          (selectable ? ' booking-day-available' : ' booking-day-disabled') +
                          (isSelected ? ' booking-day-selected' : '')
                        }
                      >
                        {d.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 2: Time slots */}
            <div className="booking-step">
              <h2>2. Pick a time</h2>
              {!selectedDate && (
                <p className="booking-hint">Choose a date to see available times.</p>
              )}
              {selectedDate && loadingSlots && (
                <div className="loading"><div className="spinner" /></div>
              )}
              {selectedDate && slotError && (
                <p className="booking-error">{slotError}</p>
              )}
              {selectedDate && !loadingSlots && !slotError && (
                <>
                  <p className="booking-hint">
                    {selectedDate.toLocaleDateString('en-GB', {
                      weekday: 'long', day: 'numeric', month: 'long'
                    })}
                  </p>
                  <div className="booking-slots">
                    {slots.length === 0 && <p>No times available this day.</p>}
                    {slots.map((s) => (
                      <button
                        key={s.time}
                        type="button"
                        disabled={!s.available}
                        onClick={() => setSelectedTime(s.time)}
                        className={
                          'booking-slot' +
                          (s.available ? '' : ' booking-slot-unavailable') +
                          (selectedTime === s.time ? ' booking-slot-selected' : '')
                        }
                      >
                        {s.time}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Step 3: Details form */}
            <div className="booking-step">
              <h2>3. Your details</h2>
              {!selectedTime && (
                <p className="booking-hint">Pick a time slot to continue.</p>
              )}
              {selectedTime && (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your name</label>
                    <input
                      type="text" id="name" name="name"
                      value={form.name} onChange={handleFormChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email" id="email" name="email"
                      value={form.email} onChange={handleFormChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input
                      type="tel" id="phone" name="phone"
                      value={form.phone} onChange={handleFormChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="topic">What would you like to discuss?</label>
                    <select
                      id="topic" name="topic"
                      value={form.topic} onChange={handleFormChange} required
                    >
                      <option value="general">General enquiry about making a will</option>
                      <option value="mirror">A pair of wills / mirror wills</option>
                      <option value="charity">Charity gifts in a will</option>
                      <option value="update">Updating an existing will</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="notes">Anything you'd like us to know? (optional)</label>
                    <textarea
                      id="notes" name="notes"
                      value={form.notes} onChange={handleFormChange}
                    />
                  </div>
                  {submitError && <p className="booking-error">{submitError}</p>}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting}
                  >
                    {submitting ? 'Booking…' : `Confirm booking — ${selectedTime}`}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookACall;
