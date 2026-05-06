# Make a Will (maw-react) — project notes

## Architecture: build-time content pre-rendering (Option A)

This site is a Vite + React 19 SPA. To make page content visible to AI/search
crawlers without running JavaScript, page **content lives in pure-data modules
under `src/data/`**. Both the React components and `scripts/generate-pages.js`
import from these modules. The build script bakes the article HTML into each
page's static `dist/<route>/index.html` at a `<!-- PRERENDER_CONTENT -->` marker
inside `<div id="root">`. React then mounts via `createRoot()` and replaces
that content on the client. Brief paint flicker, no hydration warnings.

## Rule: any change to page content MUST be reflected in the static HTML

When editing the body of any page on this site:

1. **Edit the data file in `src/data/`, not the JSX.** Page components just
   read from the data module and render via `dangerouslySetInnerHTML`. Editing
   JSX directly will diverge the React render from the static HTML and crawlers
   will see something different from users.
2. **Run `npm run build`** after content changes.
3. **Verify** the change appears in the static output:
   `grep "your new sentence" dist/<route>/index.html`

If you find content hardcoded in a `.jsx` file that should be data-driven,
extract it to `src/data/` first, then edit.

## Content location reference

| Routes                              | Data file                  | Component         |
| ----------------------------------- | -------------------------- | ----------------- |
| `/resource/{slug}`                  | `src/data/resources.js`    | `ResourcePage.jsx`|
| Glossary terms (5 routes)           | `src/data/glossary.js`     | `GlossaryPage.jsx`|
| Service & policy pages (11 routes)  | `src/data/services.js`     | `ServicePage.jsx` |
| Blog posts (13 routes)              | `src/data/blog.js`         | `BlogPost.jsx`    |
| `/faq`                              | `src/data/faq.js`          | `FAQ.jsx`         |
| `/about-us`                         | `src/data/about.js`        | `About.jsx`       |
| `/sample-will`                      | `src/data/sample-will.js`  | `SampleWill.jsx`  |
| `/charities`                        | `src/data/charities.js`    | `Charities.jsx`   |
| `/`                                 | `src/data/home.js`         | `Home.jsx`        |
| `/blog`                             | `src/data/blog-index.js`   | `Blog.jsx`        |
| `/resource`, `/resources`           | `src/data/resources-index.js` | `Resources.jsx` |

Route-to-data mapping lives in `getContentForRoute()` in
`scripts/generate-pages.js`. The `GLOSSARY_ROUTES`, `SERVICE_ROUTES`, and
`BLOG_ROUTES` sets there must mirror the React Router config in `src/App.jsx`
exactly — only routes that actually use the matching component should pull
content from that data source.

## Pages without pre-rendered body content

These render only via React. Acceptable because they're all interactive
(forms, booking flows, the will questionnaire) where pre-rendering offers
no real value — there's no static content for crawlers to index:

- `/contact` — contact form
- `/login` — login form
- `/book-a-call` — booking widget
- `/make-your-will` — will questionnaire flow

## SEO / AI-visibility infrastructure (other moving parts)

- **Site-wide `LegalService` JSON-LD** (the `Make a Will` entity) lives in
  `index.html` and is copied to every page automatically.
- **Per-route SEO** (title, description, schema) is configured in `seoConfig`
  inside `scripts/generate-pages.js`. If you add a new route, add it there too.
- **Article schema** is auto-attached to every `/resource/*` route. Author is
  Oliver Asha by `@id` reference (the `#oliver-asha` Person entity is defined
  in the site-wide schema in `index.html`).
- **`og:image`** defaults to `/og-default.png` (1200×600). Per-page overrides
  via the `<SEO>` component's `image` prop.
- **`sitemap.xml`, `llms.txt`, and `robots.txt`** are all generated or
  maintained alongside the HTML build. `robots.txt` has explicit allowlist
  entries for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.).

## Source of truth for the founder's credentials

Oliver Asha's name, job title, qualifications, and verifiable profile URLs
appear in three places. They must stay in sync:

1. The `LegalService.founder` Person object in `index.html` (machine-readable
   schema).
2. The `<AuthorBio>` component in `src/components/AuthorBio.jsx` (UI bio used
   on guide pages — currently unused on About since About has its bio inline).
3. The bio HTML inside `src/data/about.js`.

When editing Oliver's credentials, update all three.
