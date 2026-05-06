/**
 * Post-build script: generates a static HTML file for every route.
 *
 * Why this matters:
 * - The site is a React SPA deployed to S3. Without this, any URL other than "/"
 *   returns a 404 because there's no HTML file at that path.
 * - This script copies dist/index.html to every route path (e.g. dist/faq/index.html)
 *   with the correct <title> and <meta description> pre-baked in, so search engine
 *   crawlers see unique metadata for each page even before JavaScript runs.
 *
 * It also generates sitemap.xml from the same route list.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Page content data — single source of truth, shared with the React app
// (src/pages/*.jsx import from these same modules). When you change content,
// it's reflected in BOTH the React render and the pre-baked static HTML.
import { resourceContent } from '../src/data/resources.js';
import { glossaryContent } from '../src/data/glossary.js';
import { serviceContent } from '../src/data/services.js';
import { blogContent } from '../src/data/blog.js';
import { faqItems } from '../src/data/faq.js';
import { aboutContent } from '../src/data/about.js';
import { sampleWillContent } from '../src/data/sample-will.js';
import { charitiesContent } from '../src/data/charities.js';
import { homeContent } from '../src/data/home.js';
import { blogPosts, blogCategories } from '../src/data/blog-index.js';
import { resourceCategories } from '../src/data/resources-index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

// Import the SEO config (we read the source file and extract the data)
// Since this is a build script, we inline the config here to avoid needing
// to transpile the ES module import from src/.
// We read the seo-config.js and eval-parse the seoConfig object.

const SITE_URL = 'https://www.makeawill.co.uk';

// --- Schema (JSON-LD) helpers ---------------------------------------------
//
// We pre-bake JSON-LD structured data into each page's static HTML. This means
// AI crawlers and search engines that don't run JavaScript still see the schema.
//
// Site-wide Organization schema lives in index.html (the template), so it gets
// copied to every page automatically. Per-route schemas are defined below in
// `seoConfig` under a `schema` key, and are injected before </head> at build time.
//
// IMPORTANT: when you put JSON inside an HTML <script> tag, any "</" sequence
// can break out of the tag. serializeSchema() escapes "<" to its unicode form
// to make the embed safe.

function serializeSchema(schema) {
  return JSON.stringify(schema, null, 2).replace(/</g, '\\u003c');
}

// Strip HTML tags from a string. schema.org's FAQPage Answer.text expects
// plain text — we strip HTML from the imported answer strings before using
// them in JSON-LD. (The pre-rendered HTML body keeps the links intact.)
function stripHtml(html) {
  return html.replace(/<[^>]+>/g, '');
}

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    "name": question,
    "acceptedAnswer": { "@type": "Answer", "text": stripHtml(answer) }
  }))
};

// All routes and their SEO data — mirrors src/seo-config.js
// This is intentionally duplicated here so the build script has no runtime
// dependency on React/Vite. If you add a new page, add it in BOTH places.
//
// To attach JSON-LD to a route, add a `schema` field. It will be injected
// into the static HTML before </head>. Example:
//   '/some-page': { title: '...', description: '...', schema: someSchemaObject }
const seoConfig = {
  '/': {
    title: 'Make a Will | Solicitor-Checked Wills from £90',
    description: 'Create a solicitor-checked will online in as little as 15 minutes. Trusted since 2008, with lifetime updates and a money-back guarantee.'
  },
  '/faq': {
    title: 'Frequently Asked Questions About Making a Will',
    description: 'Find answers to common questions about making a will online, including legal validity, witnesses, executors, updating your will, and more.',
    schema: faqPageSchema
  },
  '/about-us': {
    title: 'About Us | Make a Will',
    description: 'Learn about Make a Will — the only solicitor-checked online wills service. Award-winning, trusted since 2008, with qualified solicitors reviewing every will.'
  },
  '/contact': {
    title: 'Contact Us | Make a Will',
    description: 'Get in touch with our team about making your will. Contact us by form, phone, or book a video call with one of our advisors.'
  },
  '/sample-will': {
    title: 'Sample Will | See What Your Will Looks Like',
    description: 'View a sample solicitor-checked will to see exactly what you will receive. Clear, professional formatting reviewed by qualified solicitors.'
  },
  '/make-your-will': {
    title: 'Make Your Will Online | Get Started',
    description: 'Start creating your solicitor-checked will online. Our guided questionnaire takes about 15 minutes and you can save your progress at any time.'
  },
  '/blog': {
    title: 'Blog | Wills, Probate & Estate Planning Advice',
    description: 'Insights and advice about wills, estate planning, and protecting your family. Written by our team of legal experts.'
  },
  '/charities': {
    title: 'Services for Charities | Gifts in Wills Partnerships',
    description: 'Partner with Make a Will to grow your legacy income. We help charities promote gifts in wills with solicitor-checked wills for your supporters.'
  },
  '/login': {
    title: 'Login | Make a Will',
    description: 'Log in to your Make a Will account to continue creating or updating your will.'
  },
  '/resource': {
    title: 'Resources | Guides to Wills, Probate & Estate Planning',
    description: 'Browse our library of guides covering everything from making your first will to understanding probate, executors, and Lasting Powers of Attorney.'
  },
  '/resources': {
    title: 'Resources | Guides to Wills, Probate & Estate Planning',
    description: 'Browse our library of guides covering everything from making your first will to understanding probate, executors, and Lasting Powers of Attorney.'
  },
  '/resource/do-i-need-to-make-a-will': {
    title: 'Do You Need to Make a Will? | Make a Will',
    description: 'Find out who needs a will, what happens without one, and why making a will is one of the most important things you can do to protect your family.'
  },
  '/resource/are-online-wills-legal': {
    title: 'Are Online Wills Legal? | Make a Will',
    description: 'Yes, online wills are completely legal in England and Wales. Learn the legal requirements for a valid will and why solicitor-checked wills offer extra protection.'
  },
  '/resource/make-an-online-will-in-five-easy-steps': {
    title: 'Make an Online Will in 5 Easy Steps',
    description: 'A step-by-step guide to making your will online — from choosing a trusted provider to signing and storing your completed will.'
  },
  '/resource/what-is-a-solicitor-checked-will': {
    title: 'What Is a Solicitor-Checked Will?',
    description: 'Every will we create is reviewed by a qualified solicitor. Learn what this means, why it matters, and how it protects you and your family.'
  },
  '/resource/who-can-witness-a-will': {
    title: 'Who Can Witness a Will? | Witness Requirements',
    description: 'Learn who can and cannot witness your will, what witnesses need to do, and common mistakes to avoid when signing your will.'
  },
  '/resource/how-to-sign-execute-a-will': {
    title: 'How to Sign a Will | Step-by-Step Signing Guide',
    description: 'A clear guide to properly signing (executing) your will with witnesses. Covers printing, signing order, witness requirements, and safe storage.'
  },
  '/resource/will-writing-glossary': {
    title: 'Will Writing Glossary | Legal Terms Explained',
    description: 'Plain-English definitions of common will writing terms including executor, beneficiary, probate, intestacy, codicil, and more.'
  },
  '/resource/executors': {
    title: 'What Is an Executor? | Executor Duties Explained',
    description: 'An executor carries out the instructions in your will after you die. Learn what they do, who to choose, and how many you need.'
  },
  '/resource/choosing-executors-for-your-will': {
    title: 'Choosing Executors for Your Will',
    description: 'Practical advice on choosing the right executors for your will — who to pick, how many, and what to consider before you decide.'
  },
  '/resource/do-i-need-probate': {
    title: 'What Is Probate and Do I Need It?',
    description: 'Probate is the legal process of administering an estate after someone dies. Find out when probate is required and how to apply.'
  },
  '/resource/apply-for-probate': {
    title: 'How to Apply for Probate | Step-by-Step Guide',
    description: 'A practical guide to applying for a Grant of Probate in England and Wales, including what you need, how long it takes, and the costs involved.'
  },
  '/resource/probate-directory': {
    title: 'Probate Directory | Find Probate Help Near You',
    description: 'Find probate solicitors and professionals to help with estate administration in your area.'
  },
  '/resource/preparing-estate-accounts': {
    title: 'Understanding Estate Accounts',
    description: 'A guide to preparing and understanding estate accounts during probate — what they include, who prepares them, and why they matter.'
  },
  '/resource/lasting-power-of-attorney': {
    title: 'What Is a Lasting Power of Attorney (LPA)?',
    description: 'A Lasting Power of Attorney lets you appoint someone to make decisions if you lose mental capacity. Learn about the two types and why you need one.'
  },
  '/resource/do-i-need-an-lpa': {
    title: 'Do I Need a Lasting Power of Attorney?',
    description: 'Find out why everyone should consider making an LPA, what happens without one, and how it protects you and your family.'
  },
  '/resource/make-an-lpa': {
    title: 'How Do I Make a Lasting Power of Attorney?',
    description: 'A step-by-step guide to creating an LPA — who to appoint, what forms to complete, and how to register with the Office of the Public Guardian.'
  },
  '/resource/attorneys': {
    title: 'What Is an Attorney? | LPA Attorneys Explained',
    description: 'An attorney is the person you appoint to act on your behalf under a Lasting Power of Attorney. Learn about their role and responsibilities.'
  },
  '/resource/choosing-attorneys': {
    title: 'Choosing Attorneys for Your LPA',
    description: 'Guidance on choosing the right attorneys for your Lasting Power of Attorney — who to pick, how many, and whether they should act jointly or separately.'
  },
  '/resource/lpa-cost': {
    title: 'How Much Does an LPA Cost?',
    description: 'A breakdown of the costs involved in making a Lasting Power of Attorney, including registration fees and professional help options.'
  },
  '/resource/i-am-getting-married-do-i-need-a-will': {
    title: 'Getting Married? Do You Need a Will?',
    description: 'Marriage automatically revokes any existing will. Find out why you need a new will when you get married and how to protect your family.'
  },
  '/resource/separated-from-partner-divorce-wills': {
    title: 'Separated or Divorcing? Do You Need a New Will?',
    description: 'If you have separated or are going through a divorce, your will may need updating. Learn how separation and divorce affect your will.'
  },
  '/resource/legal-guardians': {
    title: 'Guardianship and Wills | Appointing Legal Guardians',
    description: 'If you have children under 18, your will lets you choose who would look after them. Learn how to appoint legal guardians in your will.'
  },
  '/resource/blended-families': {
    title: 'Blended Families and Wills | Protecting Everyone',
    description: 'Will writing for blended families — how to provide for stepchildren, protect your spouse, and prevent sideways disinheritance.'
  },
  '/resource/wills-and-stepchildren': {
    title: 'Wills and Stepchildren | How to Include Stepchildren',
    description: 'Stepchildren do not automatically inherit under intestacy rules. Learn how to include stepchildren in your will and protect their interests.'
  },
  '/resource/register-a-death': {
    title: 'How to Register a Death in England and Wales',
    description: 'A practical guide to registering a death — when to do it, where to go, what documents you need, and what happens next.'
  },
  '/resource/death-of-a-spouse': {
    title: 'Death of a Spouse | What You Need to Know',
    description: 'Guidance on what to do after the death of a spouse — from practical next steps to understanding how the estate is distributed.'
  },
  '/resource/arranging-a-funeral': {
    title: 'Arranging a Funeral | A Practical Guide',
    description: 'A step-by-step guide to arranging a funeral, including choosing a funeral director, types of service, costs, and what to consider.'
  },
  '/resource/personal-belongings': {
    title: 'Dealing with Personal Belongings After a Death',
    description: 'Guidance on sorting through personal belongings after someone dies — what to keep, donate, sell, and how to handle sentimental items.'
  },
  '/resource/dying-without-a-will-intestacy': {
    title: 'What Happens if You Die Without a Will?',
    description: 'Dying without a will means your estate is distributed by intestacy rules, not your wishes. Learn who inherits and why this matters.'
  },
  '/resource/cost-of-making-a-will': {
    title: 'How Much Does It Cost to Make a Will? | UK Pricing Guide',
    description: 'Compare the cost of making a will online vs with a solicitor. Our solicitor-checked wills start from £90. Find out what affects the price and what\'s included.'
  },
  '/resource/inheritance-tax-guide': {
    title: 'Inheritance Tax: Thresholds, Rates & How to Reduce It',
    description: 'Current UK inheritance tax thresholds (£325,000 nil rate band), the 40% tax rate, key exemptions, and practical ways to reduce your IHT bill through your will.'
  },
  '/resource/trusts-in-wills': {
    title: 'What Is a Trust in a Will? | Types of Will Trust Explained',
    description: 'A plain-English guide to trusts in wills — life interest trusts, discretionary trusts, bare trusts. When you need one and how they protect your family.'
  },
  '/resource/how-to-change-your-will': {
    title: 'How to Change Your Will | Update or Replace Your Will',
    description: 'The best ways to change your will — making a new will vs using a codicil. What you can and can\'t do, and how often you should review your will.'
  },
  '/resource/will-template-uk': {
    title: 'Will Template UK: What Your Will Should Include',
    description: 'What every UK will should contain — from revocation clauses to residuary estates. See our sample will and learn why a template alone isn\'t enough.'
  },
  '/resource/lpa-vs-will': {
    title: 'Lasting Power of Attorney vs Will: What\'s the Difference?',
    description: 'A will controls what happens after you die. An LPA covers decisions while you\'re alive. Learn why you need both and what happens without each one.'
  },
  '/resource/what-to-do-when-someone-dies': {
    title: 'What to Do When Someone Dies: A Complete UK Checklist',
    description: 'Step-by-step checklist of what to do when someone dies in the UK — from registering the death to applying for probate and distributing the estate.'
  },
  '/lifetime-updates': {
    title: 'Lifetime Will Updates | Change Your Will Anytime',
    description: 'Update your will whenever your circumstances change — at no extra cost. Every update is reviewed by a qualified solicitor.'
  },
  '/a-pair-of-wills-or-mirror-wills': {
    title: 'Mirror Wills for Couples | Matching Wills',
    description: 'Mirror wills are matching wills for couples that reflect each other. The most popular choice for married couples and civil partners.'
  },
  '/book-a-call': {
    title: 'Book a Call | Speak to a Will Advisor',
    description: 'Book a video or voice call with one of our advisors to discuss your will. We can help with straightforward and complex situations.'
  },
  '/data-handling-policy': {
    title: 'Data Handling Policy | Make a Will',
    description: 'How we handle, store, and protect your personal data when you use our will writing service.'
  },
  '/disclaimer': {
    title: 'Disclaimer | Make a Will',
    description: 'Important legal information about our will writing service and the limitations of our online platform.'
  },
  '/money-back-guarantee': {
    title: 'Money Back Guarantee | Make a Will',
    description: 'Not satisfied with your will? We offer a full money-back guarantee within 30 days of purchase. No questions asked.'
  },
  '/our-competition-and-markets-authority-statement': {
    title: 'CMA Statement | Make a Will',
    description: 'Our Competition and Markets Authority transparency statement about our will writing service.'
  },
  '/fundraising-online-wills': {
    title: 'Gifts in Wills for Charities | Charity Partnerships',
    description: 'Help your supporters leave a lasting legacy. We provide solicitor-checked wills for charity supporters with personalised campaign pages.'
  },
  '/charities-and-fundraising-for-gifts-in-wills': {
    title: 'Charities and Fundraising for Gifts in Wills',
    description: 'Discover how charities can work with us to promote legacy giving and increase charitable donations through gifts in wills.'
  },
  '/solicitor-checked-wills-for-charity-supporters': {
    title: 'Solicitor-Checked Wills for Charity Supporters',
    description: 'Offer your charity supporters access to affordable, solicitor-checked wills while encouraging legacy gifts to your cause.'
  },
  '/gifts-in-wills-training-with-richard-radcliffe': {
    title: 'Gifts in Wills Training with Richard Radcliffe',
    description: 'Professional legacy fundraising training with Richard Radcliffe to help your team maximise gifts in wills income.'
  },
  '/why-make-a-will': {
    title: 'Why Make a Will? | Reasons You Need a Will',
    description: 'Making a will protects your family and ensures your wishes are followed. Learn the key reasons why everyone needs a will.'
  },
  '/why-write-a-will': {
    title: 'Why Write a Will? | The Case for Making a Will',
    description: "Over half of UK adults don't have a will. Here's why writing a will is one of the most important things you can do."
  },
  '/5-reasons-to-update-your-will': {
    title: '5 Reasons to Update Your Will',
    description: 'Life changes constantly and your will should keep up. Here are five important reasons you might need to update your will today.'
  },
  '/do-I-need-probate': {
    title: 'Do I Need Probate? | When Probate Is Required',
    description: 'Understanding when probate is needed and how the process works. A practical guide for executors and families.'
  },
  '/dying-without-a-will-intestacy': {
    title: 'Dying Without a Will | Intestacy Rules Explained',
    description: "What happens to your estate if you die without a will? Learn how intestacy rules work and why they may not match your wishes."
  },
  '/children-and-gifts-in-wills': {
    title: 'Children and Gifts in Wills | 5 Ways to Get Peace of Mind',
    description: "When you have children, making a will becomes even more important. Here's how to protect your children and provide for their future."
  },
  '/do-you-cohabit': {
    title: 'Do You Cohabit? Your Key Questions Answered',
    description: 'Unmarried couples have very different inheritance rights from married couples. Find out what you need to know about wills and cohabitation.'
  },
  '/uk-expat-wills': {
    title: 'Wills for British Expats | Living Abroad?',
    description: 'Living abroad as a British citizen? Learn how different jurisdictions affect your will and why you still need a UK will.'
  },
  '/charity-gifts-in-wills-how-and-why': {
    title: 'Charity Gifts in Wills: How and Why',
    description: 'Leaving a gift to charity in your will can make a lasting difference and may reduce inheritance tax. Learn how to include a charity gift.'
  },
  '/beneficiary': {
    title: 'What Is a Beneficiary? | Will Writing Glossary',
    description: 'A beneficiary is anyone who receives something under a will. Learn about types of beneficiary, substitute beneficiaries, and the rules.'
  },
  '/bequest': {
    title: 'What Is a Bequest? | Will Writing Glossary',
    description: 'A bequest is a gift made in a will. Learn about specific, general, demonstrative, and residuary bequests and what happens if one fails.'
  },
  '/codicil': {
    title: 'What Is a Codicil? | Will Writing Glossary',
    description: 'A codicil is a document that makes changes to an existing will. Learn when to use one and why a new will is usually better.'
  },
  '/legacy': {
    title: 'What Is a Legacy? | Will Writing Glossary',
    description: 'A legacy is a gift left in a will. Learn about the different types of legacy and how to leave one in your will.'
  },
  '/testator': {
    title: 'What Is a Testator? | Will Writing Glossary',
    description: 'A testator is the person who makes a will. Learn about the legal requirements a testator must meet for a valid will.'
  },
};

// --- Auto-attach Article schema to all /resource/* guide pages -----------
//
// Every guide page gets an Article JSON-LD block describing the article and
// referencing the site-wide Organization (defined in index.html) as both
// author and publisher. This is the main E-E-A-T signal for crawlers on
// our YMYL legal content.
//
// Per-route overrides (set on the route's seoConfig entry above):
//   datePublished : 'YYYY-MM-DD' — when the guide was first published
//   dateModified  : 'YYYY-MM-DD' — when it was last reviewed/updated
//   image         : full URL of a guide-specific image (≥1200px wide ideal)
//   schema        : a complete custom schema, which bypasses this auto-build
//
// If you don't override datePublished, DEFAULT_PUBLISHED_DATE is used as a
// placeholder. dateModified defaults to today's build date.

const TODAY = new Date().toISOString().split('T')[0];
const DEFAULT_PUBLISHED_DATE = '2024-01-01'; // TODO: replace per-route with real first-published dates as you find them
const DEFAULT_ARTICLE_IMAGE = `${SITE_URL}/og-default.png`; // 1200×600 branded fallback image. Override per-route via meta.image when a guide-specific image exists.

function articleHeadline(title) {
  // Strip the " | Make a Will" branding suffix so the headline is just the topic.
  return title.replace(/\s*\|\s*Make a Will\s*$/i, '').trim();
}

function createArticleSchema(route, meta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleHeadline(meta.title),
    "description": meta.description,
    "url": `${SITE_URL}${route}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}${route}`
    },
    "inLanguage": "en-GB",
    "image": meta.image || DEFAULT_ARTICLE_IMAGE,
    "datePublished": meta.datePublished || DEFAULT_PUBLISHED_DATE,
    "dateModified": meta.dateModified || TODAY,
    // Oliver Asha (Solicitor, TEP) is the named author of every guide. The
    // Person entity is defined in index.html (#oliver-asha) so we just
    // reference it by @id here. This is the strongest E-E-A-T signal we can
    // give for YMYL legal content: a verifiable, SRA-registered solicitor
    // bylined on each article.
    "author": { "@id": `${SITE_URL}/#oliver-asha` },
    "publisher": { "@id": `${SITE_URL}/#organization` }
  };
}

let articleSchemasAttached = 0;
for (const [route, meta] of Object.entries(seoConfig)) {
  // Only auto-attach to individual /resource/* guides, not the /resource hub itself.
  if (route.startsWith('/resource/') && !meta.schema) {
    meta.schema = createArticleSchema(route, meta);
    articleSchemasAttached++;
  }
}
console.log(`Auto-attached Article schema to ${articleSchemasAttached} resource pages.`);

// --- Generate static HTML pages ---

const template = readFileSync(join(distDir, 'index.html'), 'utf-8');
let pagesGenerated = 0;

// --- Article body pre-rendering (Option A) -------------------------------
//
// We inject the actual article body HTML into <div id="root"> at build time,
// at the marker `<!-- PRERENDER_CONTENT -->`. This means non-JS crawlers
// (most AI bots) see the full article text — not just the title and schema.
//
// On a real visit, React mounts via createRoot() and replaces #root's
// children with its own render. The replacement causes a brief paint flicker
// but no hydration warnings. Since both the static HTML and the React render
// pull from the same data modules (src/data/*.js), they can never drift.

// Route → content-source mapping. Mirrors the React Router config in
// src/App.jsx exactly: a route only gets pre-rendered content if its React
// component would render that same content. (E.g. /book-a-call has a
// serviceContent entry but the route uses <BookACall />, not <ServicePage />,
// so we must NOT inject the service text — that would diverge from what
// users see after JS loads.)

const GLOSSARY_ROUTES = new Set(['/beneficiary', '/bequest', '/codicil', '/legacy', '/testator']);

const SERVICE_ROUTES = new Set([
  '/lifetime-updates',
  '/a-pair-of-wills-or-mirror-wills',
  '/data-handling-policy',
  '/disclaimer',
  '/money-back-guarantee',
  '/our-competition-and-markets-authority-statement',
  '/fundraising-online-wills',
  '/charities-and-fundraising-for-gifts-in-wills',
  '/solicitor-checked-wills-for-charity-supporters',
  '/gifts-in-wills-training-with-richard-radcliffe'
]);

const BLOG_ROUTES = new Set([
  '/digital-assets-in-your-will',
  '/inheritance-tax-changes-2026',
  '/will-law-reform-2026',
  '/probate-delays-what-to-expect',
  '/why-make-a-will',
  '/why-write-a-will',
  '/5-reasons-to-update-your-will',
  '/do-I-need-probate',
  '/dying-without-a-will-intestacy',
  '/children-and-gifts-in-wills',
  '/do-you-cohabit',
  '/uk-expat-wills',
  '/charity-gifts-in-wills-how-and-why'
]);

// Build the blog index listing as static HTML from the blog-index metadata.
function buildBlogIndexHTML() {
  const formatDate = (iso) => new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
  const posts = blogPosts.map(p => `<article style="margin-bottom:32px">
  <h2><a href="${p.path}">${p.title}</a></h2>
  <p><time datetime="${p.date}">${formatDate(p.date)}</time> &middot; ${p.category}</p>
  <p>${p.excerpt}</p>
</article>`).join('\n');
  const categoryList = blogCategories.map(c =>
    `<li><a href="/topic/${c.toLowerCase().replace(/ /g, '-')}">${c}</a></li>`
  ).join('\n');
  return `<p>Insights and advice on wills, estate planning, and protecting your family&rsquo;s future.</p>
${posts}
<h2>Categories</h2>
<ul>${categoryList}</ul>`;
}

// Build the resources index listing as static HTML from the index metadata.
function buildResourcesIndexHTML() {
  return resourceCategories.map(cat => {
    const items = cat.resources
      .map(r => `<li><a href="${r.path}">${r.title}</a></li>`)
      .join('\n');
    return `<h2>${cat.title}</h2>\n<ul>\n${items}\n</ul>`;
  }).join('\n\n');
}

function getContentForRoute(route) {
  if (route === '/') {
    return { source: 'home', ...homeContent };
  }
  if (route === '/about-us') {
    return { source: 'about', ...aboutContent };
  }
  if (route === '/sample-will') {
    return { source: 'sample-will', ...sampleWillContent };
  }
  if (route === '/charities') {
    return { source: 'charities', ...charitiesContent };
  }
  if (route === '/blog') {
    return {
      source: 'blog-index',
      title: 'Blog',
      content: buildBlogIndexHTML()
    };
  }
  if (route === '/resource' || route === '/resources') {
    return {
      source: 'resources-index',
      title: 'Resources',
      content: `<p>Browse our comprehensive library of guides covering everything from making your first will to understanding probate.</p>\n\n${buildResourcesIndexHTML()}`
    };
  }
  if (route === '/faq') {
    return {
      source: 'faq',
      title: 'Frequently Asked Questions',
      content: faqItems
        .map(({ question, answer }) => `<h2>${question}</h2>\n<p>${answer}</p>`)
        .join('\n')
    };
  }
  if (route.startsWith('/resource/')) {
    const slug = route.slice('/resource/'.length);
    if (resourceContent[slug]) return { source: 'resource', ...resourceContent[slug] };
  }
  if (GLOSSARY_ROUTES.has(route)) {
    const slug = route.slice(1);
    if (glossaryContent[slug]) return { source: 'glossary', ...glossaryContent[slug] };
  }
  if (SERVICE_ROUTES.has(route)) {
    const slug = route.slice(1);
    if (serviceContent[slug]) return { source: 'service', ...serviceContent[slug] };
  }
  if (BLOG_ROUTES.has(route)) {
    const slug = route.slice(1);
    if (blogContent[slug]) return { source: 'blog', ...blogContent[slug] };
  }
  return null;
}

// Render the article HTML that will sit inside <div id="root">.
// Kept intentionally simple — crawlers care about headings, paragraphs, and
// links, not CSS classes.
function renderArticleHTML(content) {
  if (!content) return '';
  // Home is a marketing landing with its own hero <h1>; render its content
  // as-is without an extra <h1>/article wrapper (avoids duplicate headings).
  if (content.source === 'home') {
    return content.content.trim();
  }
  const showsByline = content.source === 'resource' || content.source === 'blog';
  const byline = showsByline
    ? '<p class="article-byline">By <a href="/about-us#oliver-asha-bio-heading">Oliver Asha, Solicitor &amp; TEP</a></p>\n'
    : '';
  return `<article class="prerendered-content">
<h1>${content.title}</h1>
${byline}${content.content.trim()}
</article>`;
}

// Apply title, description, per-route JSON-LD schema, and the prerendered
// article body to the HTML template. The site-wide Organization schema
// lives in index.html and is copied automatically.
function applyMeta(html, meta, route) {
  let out = html
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${meta.description}" />`
    );

  if (meta.schema) {
    const schemaScript =
      `<script type="application/ld+json">\n${serializeSchema(meta.schema)}\n    </script>`;
    out = out.replace('</head>', `    ${schemaScript}\n  </head>`);
  }

  // Inject pre-rendered article body (or empty string for routes without
  // content data — login, contact form, the questionnaire flow, etc.).
  out = out.replace('<!-- PRERENDER_CONTENT -->', renderArticleHTML(getContentForRoute(route)));

  return out;
}

let prerenderedCount = 0;
for (const [route, meta] of Object.entries(seoConfig)) {
  if (getContentForRoute(route)) prerenderedCount++;

  // Skip the root — index.html already exists
  if (route === '/') {
    // Still update the root page's meta tags
    writeFileSync(join(distDir, 'index.html'), applyMeta(template, meta, route));
    pagesGenerated++;
    continue;
  }

  const pagePath = join(distDir, route, 'index.html');
  const pageDir = dirname(pagePath);

  if (!existsSync(pageDir)) {
    mkdirSync(pageDir, { recursive: true });
  }

  writeFileSync(pagePath, applyMeta(template, meta, route));
  pagesGenerated++;
}

console.log(`Generated ${pagesGenerated} static HTML pages (${prerenderedCount} with pre-rendered article body).`);

// --- Generate sitemap.xml ---

const today = new Date().toISOString().split('T')[0];

// Routes to exclude from sitemap (login, duplicates)
const excludeFromSitemap = new Set(['/login', '/resources']);

const sitemapEntries = Object.keys(seoConfig)
  .filter(route => !excludeFromSitemap.has(route))
  .map(route => {
    const priority = route === '/' ? '1.0'
      : route.startsWith('/resource/') ? '0.8'
      : ['/faq', '/about-us', '/make-your-will', '/blog', '/charities'].includes(route) ? '0.9'
      : '0.7';

    const changefreq = route === '/' ? 'weekly'
      : route.startsWith('/resource/') ? 'monthly'
      : 'monthly';

    return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>
`;

writeFileSync(join(distDir, 'sitemap.xml'), sitemap);
console.log(`Generated sitemap.xml with ${sitemapEntries.length} URLs.`);

// --- Generate llms.txt ---
//
// llms.txt is an emerging convention (see llmstxt.org) for giving LLMs a
// curated, human-readable map of a site's most important pages. We generate
// it automatically from seoConfig so it stays in sync with the site.

const llmsTxtExclude = new Set([
  '/login',
  '/resources',           // duplicate of /resource
  '/data-handling-policy',
  '/disclaimer',
  '/our-competition-and-markets-authority-statement',
  '/do-I-need-probate',                  // capitalised duplicate of /resource/do-i-need-probate
  '/dying-without-a-will-intestacy'      // duplicate of /resource/dying-without-a-will-intestacy
]);

const llmsSections = [
  {
    title: 'Service',
    routes: [
      '/',
      '/make-your-will',
      '/a-pair-of-wills-or-mirror-wills',
      '/sample-will',
      '/lifetime-updates',
      '/money-back-guarantee',
      '/book-a-call'
    ]
  },
  {
    title: 'About',
    routes: ['/about-us', '/why-make-a-will', '/why-write-a-will', '/contact', '/faq']
  },
  {
    title: 'Charities & Fundraising',
    routes: [
      '/charities',
      '/fundraising-online-wills',
      '/charities-and-fundraising-for-gifts-in-wills',
      '/solicitor-checked-wills-for-charity-supporters',
      '/gifts-in-wills-training-with-richard-radcliffe',
      '/charity-gifts-in-wills-how-and-why'
    ]
  },
  {
    title: 'Guides',
    filter: (route) => route.startsWith('/resource/') && route !== '/resource'
  },
  {
    title: 'Glossary',
    routes: ['/beneficiary', '/bequest', '/codicil', '/legacy', '/testator']
  },
  {
    title: 'Topical pages',
    routes: ['/5-reasons-to-update-your-will', '/children-and-gifts-in-wills', '/do-you-cohabit', '/uk-expat-wills']
  }
];

function stripBrand(title) {
  return title.replace(/\s*\|\s*Make a Will\s*$/i, '').trim();
}

function generateLlmsTxt() {
  let out = '';
  out += '# Make a Will\n\n';
  out += '> The only solicitor-checked online wills service in the UK. Founded in 2008 by Oliver Asha, a Solicitor of England and Wales (SRA 372772) and Trust and Estate Practitioner (TEP).\n\n';
  out += "Make a Will lets people in England and Wales create a legally valid will online in around 15–30 minutes, with every will reviewed by a qualified solicitor before it's delivered. Single wills from £90; mirror wills for couples £135. Lifetime updates included; 30-day money-back guarantee. All guides on this site are authored by Oliver Asha.\n\n";

  const seen = new Set();

  for (const section of llmsSections) {
    let routes;
    if (section.routes) {
      routes = section.routes.filter(r => seoConfig[r]);
    } else if (section.filter) {
      routes = Object.keys(seoConfig).filter(r => section.filter(r));
    } else {
      routes = [];
    }

    routes = routes.filter(r => !llmsTxtExclude.has(r) && !seen.has(r));
    if (routes.length === 0) continue;

    out += `## ${section.title}\n\n`;
    for (const route of routes) {
      seen.add(route);
      const meta = seoConfig[route];
      out += `- [${stripBrand(meta.title)}](${SITE_URL}${route}): ${meta.description}\n`;
    }
    out += '\n';
  }

  return out;
}

writeFileSync(join(distDir, 'llms.txt'), generateLlmsTxt());
console.log('Generated llms.txt');
