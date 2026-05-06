// Blog index metadata — single source of truth for the /blog listing page.
// Used by:
//   - src/pages/Blog.jsx (the blog grid)
//   - scripts/generate-pages.js (pre-rendered listing HTML in static dist/blog/index.html)
//
// Note: this is the index metadata only. The full body of each post lives in
// src/data/blog.js, used by BlogPost.jsx.

export const blogPosts = [
  {
    title: "Probate Delays in 2026: How Long Will You Really Wait?",
    excerpt: "Processing times have improved, but delays aren't over yet — and bigger challenges are coming. Here's what executors need to know.",
    date: "2026-04-10",
    category: "Executors and Probate",
    path: "/probate-delays-what-to-expect",
    image: "/logos/blog-probate-delays.svg"
  },
  {
    title: "The Biggest Shake-Up in Will Law for Nearly 200 Years",
    excerpt: "The Law Commission wants to replace the Wills Act 1837 with modern legislation covering electronic wills, capacity tests, and more.",
    date: "2026-03-20",
    category: "General Guidance",
    path: "/will-law-reform-2026",
    image: "/logos/blog-will-reform.svg"
  },
  {
    title: "Inheritance Tax Changes in 2026: What You Need to Know",
    excerpt: "Farm relief capped, AIM shares hit, and pensions coming into the IHT net from 2027. Here's what changed and what to do about it.",
    date: "2026-02-12",
    category: "General Guidance",
    path: "/inheritance-tax-changes-2026",
    image: "/logos/blog-inheritance-tax.svg"
  },
  {
    title: "Digital Assets in Your Will: What the New Law Means for You",
    excerpt: "The Property (Digital Assets etc) Act 2025 officially recognises crypto, NFTs, and digital tokens as property. Here's how to include them in your will.",
    date: "2026-01-15",
    category: "General Guidance",
    path: "/digital-assets-in-your-will",
    image: "/logos/blog-digital-assets.svg"
  },
  {
    title: "Have you thought about these 5 reasons to update your will?",
    excerpt: "Life changes constantly, and your will should reflect those changes. Here are five important reasons you might need to update your will.",
    date: "2025-10-20",
    category: "General Guidance",
    path: "/5-reasons-to-update-your-will",
    image: "/logos/blog-5-reasons-update-will.svg"
  },
  {
    title: "Why make a will?",
    excerpt: "Making a will is one of the most important things you can do to protect your family and ensure your wishes are carried out.",
    date: "2025-10-12",
    category: "General Guidance",
    path: "/why-make-a-will",
    image: "/logos/blog-why-make-a-will.svg"
  },
  {
    title: "What is Probate and do I need it?",
    excerpt: "Understanding probate is essential if you're dealing with someone's estate. Learn what probate is and when it's required.",
    date: "2025-09-28",
    category: "Executors and Probate",
    path: "/do-I-need-probate",
    image: "/logos/blog-do-i-need-probate.svg"
  },
  {
    title: "What happens if you die without a will?",
    excerpt: "Dying without a will means your estate will be distributed according to intestacy rules, which may not reflect your wishes.",
    date: "2025-09-15",
    category: "General Guidance",
    path: "/dying-without-a-will-intestacy",
    image: "/logos/blog-dying-without-a-will.svg"
  },
  {
    title: "Children and gifts in wills: 5 ways to get peace of mind",
    excerpt: "When you have children, making a will becomes even more important. Here's how to ensure your children are protected.",
    date: "2025-08-22",
    category: "Family Situations",
    path: "/children-and-gifts-in-wills",
    image: "/logos/blog-children-gifts-wills.svg"
  },
  {
    title: "What is a Lasting Power of Attorney?",
    excerpt: "An LPA lets you appoint someone to make decisions on your behalf if you lose mental capacity. Find out why it's important.",
    date: "2025-08-10",
    category: "Lasting Powers of Attorney",
    path: "/resource/lasting-power-of-attorney"
  },
  {
    title: "Do you cohabit? Your key questions answered",
    excerpt: "Unmarried couples have very different rights from married couples when it comes to inheritance. Here's what you need to know.",
    date: "2025-07-25",
    category: "Family Situations",
    path: "/do-you-cohabit",
    image: "/logos/blog-do-you-cohabit.svg"
  },
  {
    title: "Wills for British Ex-Pats",
    excerpt: "Living abroad as a British citizen? Understanding how different jurisdictions affect your will is crucial.",
    date: "2025-07-11",
    category: "Wills for British Expats",
    path: "/uk-expat-wills",
    image: "/logos/blog-uk-expat-wills.svg"
  },
  {
    title: "Charity Gifts in Wills: how and why",
    excerpt: "Leaving a gift to charity in your will can make a lasting difference and may even reduce inheritance tax on your estate.",
    date: "2025-06-18",
    category: "General Guidance",
    path: "/charity-gifts-in-wills-how-and-why",
    image: "/logos/blog-charity-gifts-wills.svg"
  }
];

export const blogCategories = [
  "General Guidance",
  "Family Situations",
  "Executors and Probate",
  "Lasting Powers of Attorney",
  "Wills for British Expats",
  "Resources for Charity Fundraisers"
];
