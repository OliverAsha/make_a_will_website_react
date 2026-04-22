# Booking system setup guide

The `/book-a-call` page lets prospects pick a date and time. When they confirm,
the server:

1. Creates a **Zoom meeting** (via the Zoom API), then
2. Creates a **Zoho Calendar event** on the solicitor's calendar with the Zoom
   link in the description and the prospect added as an invitee.

There is no separate database — Zoho is the only source of truth. Every time
the page loads available times, it asks Zoho what's already booked and hides
those slots.

This guide walks you from nothing to a working booking page. Follow the
sections **in order**.

---

## 1. What you need before you start

- A Zoho account with Zoho Calendar enabled (the solicitor's account).
- A Zoom account (paid tier — the free tier blocks the needed Server-to-Server
  OAuth app type for business use; confirm your tier before proceeding).
- A Vercel account (free tier is fine) with the GitHub repo connected.
- Node.js 18+ and `npm` installed locally for development.

> **Jargon key**
> - **OAuth**: a way for one app to call another on your behalf without you
>   typing your password each time. You do the login once, get a "refresh
>   token", and the server uses that to mint short-lived "access tokens".
> - **Serverless function**: a small chunk of backend code that Vercel runs
>   on-demand when someone hits a URL like `/api/book`. No always-on server.

---

## 2. Create the Zoom app (Server-to-Server OAuth)

1. Go to https://marketplace.zoom.us/ → sign in → **Develop** → **Build App**.
2. Choose **Server-to-Server OAuth** → **Create**.
3. Give it a name like "Make a Will Booking".
4. On the **App Credentials** tab, copy:
   - **Account ID** → this becomes `ZOOM_ACCOUNT_ID`
   - **Client ID** → `ZOOM_CLIENT_ID`
   - **Client Secret** → `ZOOM_CLIENT_SECRET`
5. On the **Scopes** tab, add these scopes:
   - `meeting:write:meeting:admin` (create meetings)
   - `user:read:user:admin` (look up the host)
6. **Activate** the app.
7. Note the email address of the Zoom user who will host the meetings →
   this becomes `ZOOM_USER_EMAIL`.

---

## 3. Create the Zoho app (for Calendar API)

1. Go to https://api-console.zoho.com/ → **Add Client** → **Server-based
   Applications**.
2. Name: "Make a Will Booking". **Homepage URL**: `https://www.makeawill.co.uk`.
   **Authorized Redirect URI**: `https://www.makeawill.co.uk/oauth/zoho/callback`
   (we won't actually serve this URL — it's just a placeholder Zoho requires).
3. Copy:
   - **Client ID** → `ZOHO_CLIENT_ID`
   - **Client Secret** → `ZOHO_CLIENT_SECRET`
4. Note which **region/DC** your Zoho account is in (EU / US / IN / AU). The
   domain differs:
   - EU → `accounts.zoho.eu` and `calendar.zoho.eu`
   - US → `accounts.zoho.com` and `calendar.zoho.com`
   - Others follow the same pattern.

### 3a. Generate the one-time refresh token

This is a slightly fiddly one-time dance. Do it once; keep the refresh token.

1. In a browser (signed in as the solicitor) go to:

    ```
    https://accounts.zoho.eu/oauth/v2/auth
      ?scope=ZohoCalendar.calendar.ALL,ZohoCalendar.event.ALL
      &client_id=YOUR_CLIENT_ID
      &response_type=code
      &access_type=offline
      &prompt=consent
      &redirect_uri=https://www.makeawill.co.uk/oauth/zoho/callback
    ```

   (Replace `accounts.zoho.eu` with your region's domain and `YOUR_CLIENT_ID`.
   The URL must be on one line — line breaks are for readability here.)

2. Approve the prompt. Zoho will redirect to your placeholder URL with
   `?code=...&location=eu&accounts-server=...` appended. The page will 404 —
   that's expected. Copy the **`code`** value out of the URL's query string.

3. Within ~2 minutes, trade the code for a refresh token with:

    ```bash
    curl -X POST "https://accounts.zoho.eu/oauth/v2/token" \
      -d "grant_type=authorization_code" \
      -d "client_id=YOUR_CLIENT_ID" \
      -d "client_secret=YOUR_CLIENT_SECRET" \
      -d "redirect_uri=https://www.makeawill.co.uk/oauth/zoho/callback" \
      -d "code=THE_CODE_FROM_STEP_2"
    ```

4. The JSON response includes `refresh_token`. **This is the value that goes
   into `ZOHO_REFRESH_TOKEN`.** It never expires (unless you revoke it or hit
   Zoho's per-user refresh-token limit — if you re-run this step, keep it tidy
   and delete old tokens in the API console).

### 3b. Find the calendar UID

Zoho Calendar identifies each calendar by a long UID. To find it for the
solicitor's main calendar:

```bash
curl "https://calendar.zoho.eu/api/v1/calendars" \
  -H "Authorization: Zoho-oauthtoken YOUR_ACCESS_TOKEN"
```

(You can mint a short-lived access token manually with the same POST you did in
step 3a, but using `grant_type=refresh_token` and your new refresh token.)

Pick the calendar you want bookings to land on and copy its `uid` — that's
`ZOHO_CALENDAR_UID`.

---

## 4. Set environment variables

Copy `.env.example` to `.env.local` and fill in all the values from sections
2 and 3.

On Vercel:
1. Open the project → **Settings** → **Environment Variables**.
2. Add every variable from `.env.example` for **Production**, **Preview** and
   **Development** scopes.

---

## 5. Run it locally

```bash
npm install                 # once
npm install -g vercel       # once, to get the `vercel` CLI
vercel link                 # connects this folder to your Vercel project
vercel env pull .env.local  # pulls the env vars you set in step 4
vercel dev                  # runs Vite + the /api/* functions together
```

Open http://localhost:3000/book-a-call.

> **Why `vercel dev` and not `npm run dev`?** Plain Vite only serves the
> frontend — it doesn't run the serverless functions in `api/`. `vercel dev`
> runs both on the same port so calls to `/api/availability` work in dev
> exactly as they will in production.

---

## 6. Deploy

Push to the branch Vercel is watching (usually `main`). Vercel builds, deploys,
and your new `/book-a-call` page is live at the same domain.

---

## 7. How the parts fit together

```
User's browser (React)
   │
   ├── GET  /api/availability?date=2026-04-21
   │        └── serverless fn → Zoho Calendar (list events that day)
   │                         → compute free 30-min slots → return JSON
   │
   └── POST /api/book  {date, time, name, email, ...}
            └── serverless fn
                ├── Zoom API    → create meeting → get join URL
                └── Zoho Calendar → create event with Zoom URL in description
                                  + attendee invited by email
```

No database. Zoho is the single source of truth — if you move an event in
Zoho, that slot instantly re-opens for the public. If you double-book
manually, the slot will disappear on the next page load.

---

## 8. Tweaking behaviour

Everything in `.env` controls the booking window:

| Variable              | Default     | What it does                                   |
| --------------------- | ----------- | ---------------------------------------------- |
| `BOOKING_TIMEZONE`    | Europe/London | Timezone slots are shown in.                 |
| `SLOT_MINUTES`        | 30          | Length of each bookable slot.                  |
| `WORK_START_HOUR`     | 9           | First slot of the day (24h, local time).       |
| `WORK_END_HOUR`       | 17          | End of last slot (exclusive).                  |
| `LEAD_TIME_MINUTES`   | 60          | Earliest a slot can be booked from now.        |

---

## 9. Adding more solicitors later

The code assumes one host today, but is designed to be extended:

1. Move `ZOOM_USER_EMAIL` and `ZOHO_CALENDAR_UID` from env vars into a lookup
   keyed by solicitor ID.
2. Add a step 0 to the booking UI: "Which solicitor do you want to speak to?"
3. Pass the chosen solicitor ID to both `/api/availability` and `/api/book`.

No other architectural changes are required.

---

## 10. Troubleshooting

**"Zoho credentials are not configured"** → an env var is missing. Re-run
`vercel env pull .env.local` and restart `vercel dev`.

**"Zoho token refresh failed"** → your refresh token was revoked, or you're
using the wrong region's domain. Redo section 3a, and double-check
`ZOHO_ACCOUNTS_DOMAIN` matches where your account lives.

**Availability loads but every slot is available** → either the calendar has
no events that day, or `ZOHO_CALENDAR_UID` points at the wrong calendar. Book a
test event in Zoho for tomorrow 10:00 and reload the page.

**Zoom create meeting fails with 401** → the Zoom app wasn't activated (end of
section 2) or the scopes don't include `meeting:write:meeting:admin`.

**Slot times are an hour off** → check `BOOKING_TIMEZONE`. Britain is on BST
(UTC+1) in summer and GMT (UTC+0) in winter; the code handles both automatically
as long as the timezone name is right.
