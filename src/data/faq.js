// FAQ items — single source of truth, used by:
//   - src/pages/FAQ.jsx (renders the accordion)
//   - scripts/generate-pages.js (builds FAQPage JSON-LD schema and the
//     pre-rendered static HTML body)
//
// Answers are plain HTML strings (not JSX). Links are normal <a> tags;
// they cause a full page navigation when clicked. This matches the link
// behaviour inside resource articles (which also use plain HTML).

export const faqItems = [
  {
    question: "Is an online will legally valid?",
    answer: 'Yes, absolutely. A will made online is just as legally valid as one made with a traditional solicitor, provided it meets the legal requirements: it must be in writing, signed by the testator (the person making the will), and witnessed by two independent witnesses who are present at the same time. Our wills are solicitor-checked to ensure they meet all legal requirements. <a href="/resource/are-online-wills-legal">Read our full guide on online will legality</a>.'
  },
  {
    question: "How long does it take to make a will?",
    answer: 'Most people complete our online will questionnaire in about 15-30 minutes. After that, our solicitors review your will (usually within 2-3 working days), and then you can print, sign, and store your will. The entire process can be completed within a week. <a href="/resource/make-an-online-will-in-five-easy-steps">See our step-by-step guide</a>.'
  },
  {
    question: "What is a solicitor-checked will?",
    answer: 'A solicitor-checked will is one that has been reviewed by a qualified legal professional to ensure it is correctly drafted, legally valid, and will accurately reflect your wishes. This provides an extra layer of protection against errors or ambiguities that could lead to disputes. <a href="/resource/what-is-a-solicitor-checked-will">Learn more about solicitor-checked wills</a>.'
  },
  {
    question: "What's the difference between Make a Will and Make a Will Online?",
    answer: 'Make a Will Online is our online wills service — solicitor-drafted, solicitor-checked, questionnaire-led, and from £60. It\'s designed for the great majority of estates where a streamlined process is the right fit. Make a Will is where you book a one-to-one consultation with a solicitor when your circumstances need a closer look — business interests, foreign property, blended-family arrangements, trusts, inheritance tax planning, vulnerable beneficiaries, or anything that needs to be drafted around your specifics. Consultation wills draw on a much deeper clause library than the online product. <a href="/resource/how-our-solicitor-consultation-works">See how our solicitor consultation works</a>.'
  },
  {
    question: "How do I know whether to do an online will or book a consultation?",
    answer: 'Start the questionnaire — most people get a clear recommendation within a few minutes. As a rule: if your circumstances are straightforward (single property, simple family situation, no business or foreign assets, no inheritance-tax complications), the online route on Make a Will Online is almost always the right fit. If anything is less straightforward, or you\'d simply prefer to talk things through with a solicitor for peace of mind, the consultation route is worth the conversation. Either way, we\'ll tell you what we recommend — and you\'re free to choose either. <a href="/pricing">See both options</a>.'
  },
  {
    question: "Can I update my will after I've made it?",
    answer: 'Yes! With Make a Will, you get lifetime updates included. You can log in and make changes to your will whenever your circumstances change — whether you get married, have children, buy property, or simply change your mind about who should inherit. <a href="/lifetime-updates">Learn about lifetime updates</a>.'
  },
  {
    question: "Who can witness my will?",
    answer: 'Your will must be witnessed by two people who are: over 18 years old, not beneficiaries (or married to beneficiaries) of your will, able to see you sign the will, and mentally capable. Common choices include neighbours, colleagues, or friends who are not mentioned in your will. <a href="/resource/who-can-witness-a-will">Read our full guide on witnesses</a>.'
  },
  {
    question: "What happens if I die without a will?",
    answer: 'If you die without a valid will (called dying "intestate"), your estate will be distributed according to the rules of intestacy. This may not reflect your wishes — for example, unmarried partners receive nothing, and your estate may be split in ways you wouldn\'t have chosen. Making a will ensures your wishes are followed. <a href="/resource/dying-without-a-will-intestacy">Read more about intestacy rules</a>.'
  },
  {
    question: "Do I need a will if I'm married?",
    answer: 'Yes, even if you\'re married. While your spouse may inherit much of your estate under intestacy rules, having a will ensures you can: specify exactly who gets what, appoint guardians for minor children, make specific gifts to other family members or friends, and potentially reduce inheritance tax. <a href="/resource/i-am-getting-married-do-i-need-a-will">Read our guide on marriage and wills</a>.'
  },
  {
    question: "What is an executor?",
    answer: 'An executor is the person you appoint to carry out the instructions in your will after you die. They are responsible for: gathering your assets, paying any debts and taxes, and distributing your estate to your beneficiaries. You can choose a trusted friend, family member, or a professional like a solicitor. <a href="/resource/executors">Read our full guide on executors</a>.'
  },
  {
    question: "Can I leave money to charity?",
    answer: 'Absolutely! You can leave gifts to charity in your will. This can be a specific sum of money, a percentage of your estate, or specific items. Charitable gifts are also exempt from inheritance tax, which can reduce the tax burden on your estate. <a href="/charity-gifts-in-wills-how-and-why">Learn how to leave a gift to charity</a>.'
  },
  {
    question: "How should I store my will?",
    answer: 'Your will should be stored safely in a place where your executors can find it. Options include: at home in a fireproof safe, with a solicitor, at a bank, or with the Probate Service. Make sure your executors know where to find it. <a href="/resource/how-to-sign-execute-a-will">Read our guide on signing and storing your will</a>.'
  },
  {
    question: "How much does it cost to make a will?",
    answer: 'Our single wills start from £60, and mirror wills for couples are £90. Every will is checked by a qualified solicitor, and lifetime updates are included at no extra cost. This compares to £150–£500+ for a traditional solicitor visit. <a href="/resource/cost-of-making-a-will">See our full pricing guide</a>. <em>Online wills provided by Make a Will Online.</em>'
  },
  {
    question: "Do I need an LPA as well as a will?",
    answer: 'Yes, ideally you should have both. A will controls what happens to your estate after you die, while a Lasting Power of Attorney lets someone make decisions on your behalf if you lose mental capacity during your lifetime. Without an LPA, your family may need to apply to the Court of Protection, which is expensive and slow. <a href="/resource/lpa-vs-will">Learn the difference between a will and an LPA</a>.'
  }
];
