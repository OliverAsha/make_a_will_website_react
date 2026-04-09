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

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

// Import the SEO config (we read the source file and extract the data)
// Since this is a build script, we inline the config here to avoid needing
// to transpile the ES module import from src/.
// We read the seo-config.js and eval-parse the seoConfig object.

const SITE_URL = 'https://www.makeawill.co.uk';

// All routes and their SEO data — mirrors src/seo-config.js
// This is intentionally duplicated here so the build script has no runtime
// dependency on React/Vite. If you add a new page, add it in BOTH places.
const seoConfig = {
  '/': {
    title: 'Make a Will Online | Solicitor-Checked Wills from £90',
    description: 'Create a solicitor-checked will online in as little as 15 minutes. Trusted since 2008, with lifetime updates and a money-back guarantee.'
  },
  '/faq': {
    title: 'Frequently Asked Questions About Making a Will',
    description: 'Find answers to common questions about making a will online, including legal validity, witnesses, executors, updating your will, and more.'
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

// --- Generate static HTML pages ---

const template = readFileSync(join(distDir, 'index.html'), 'utf-8');
let pagesGenerated = 0;

for (const [route, meta] of Object.entries(seoConfig)) {
  // Skip the root — index.html already exists
  if (route === '/') {
    // Still update the root page's meta tags
    const rootHtml = template
      .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
      .replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${meta.description}" />`
      );
    writeFileSync(join(distDir, 'index.html'), rootHtml);
    pagesGenerated++;
    continue;
  }

  const pagePath = join(distDir, route, 'index.html');
  const pageDir = dirname(pagePath);

  if (!existsSync(pageDir)) {
    mkdirSync(pageDir, { recursive: true });
  }

  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${meta.description}" />`
    );

  writeFileSync(pagePath, html);
  pagesGenerated++;
}

console.log(`Generated ${pagesGenerated} static HTML pages.`);

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
