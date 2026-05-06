// Resources index metadata — single source of truth for the /resource and
// /resources listing pages. Used by:
//   - src/pages/Resources.jsx (the categorised grid)
//   - scripts/generate-pages.js (pre-rendered listing HTML in static
//     dist/resource/index.html and dist/resources/index.html)
//
// Note: this is the index metadata only. The full body of each guide lives
// in src/data/resources.js, used by ResourcePage.jsx.

export const resourceCategories = [
  {
    title: "Making a Will",
    resources: [
      { title: "Do you need to make a will?", path: "/resource/do-i-need-to-make-a-will" },
      { title: "Are online wills legal?", path: "/resource/are-online-wills-legal" },
      { title: "Make an Online Will in Five Easy Steps", path: "/resource/make-an-online-will-in-five-easy-steps" },
      { title: "What is a Solicitor Checked will?", path: "/resource/what-is-a-solicitor-checked-will" },
      { title: "Who can witness a will?", path: "/resource/who-can-witness-a-will" },
      { title: "How To Sign a Will", path: "/resource/how-to-sign-execute-a-will" },
      { title: "Will writing glossary", path: "/resource/will-writing-glossary" },
      { title: "How much does it cost to make a will?", path: "/resource/cost-of-making-a-will" },
      { title: "Will template UK", path: "/resource/will-template-uk" },
      { title: "How to change your will", path: "/resource/how-to-change-your-will" },
    ]
  },
  {
    title: "Executors & Probate",
    resources: [
      { title: "What is an executor?", path: "/resource/executors" },
      { title: "Choosing executors for your will", path: "/resource/choosing-executors-for-your-will" },
      { title: "What is Probate and do I need it?", path: "/resource/do-i-need-probate" },
      { title: "How to apply for Probate", path: "/resource/apply-for-probate" },
      { title: "Probate Directory", path: "/resource/probate-directory" },
      { title: "Understanding estate accounts", path: "/resource/preparing-estate-accounts" },
      { title: "What to do when someone dies", path: "/resource/what-to-do-when-someone-dies" },
      { title: "Inheritance tax guide", path: "/resource/inheritance-tax-guide" },
      { title: "Trusts in wills", path: "/resource/trusts-in-wills" },
    ]
  },
  {
    title: "Lasting Power of Attorney",
    resources: [
      { title: "What is a Lasting Power of Attorney?", path: "/resource/lasting-power-of-attorney" },
      { title: "Do I need an LPA?", path: "/resource/do-i-need-an-lpa" },
      { title: "How do I make an LPA?", path: "/resource/make-an-lpa" },
      { title: "What is an attorney?", path: "/resource/attorneys" },
      { title: "Choosing attorneys", path: "/resource/choosing-attorneys" },
      { title: "How much does an LPA cost?", path: "/resource/lpa-cost" },
      { title: "LPA vs Will: what's the difference?", path: "/resource/lpa-vs-will" },
    ]
  },
  {
    title: "Family Situations",
    resources: [
      { title: "Getting married - do I need a will?", path: "/resource/i-am-getting-married-do-i-need-a-will" },
      { title: "Separated from partner - new will?", path: "/resource/separated-from-partner-divorce-wills" },
      { title: "Guardianship and wills", path: "/resource/legal-guardians" },
      { title: "Blended families", path: "/resource/blended-families" },
      { title: "Wills and stepchildren", path: "/resource/wills-and-stepchildren" },
    ]
  },
  {
    title: "After Death",
    resources: [
      { title: "How to register a death", path: "/resource/register-a-death" },
      { title: "Death of a spouse", path: "/resource/death-of-a-spouse" },
      { title: "Arranging a funeral", path: "/resource/arranging-a-funeral" },
      { title: "Dealing with personal belongings", path: "/resource/personal-belongings" },
      { title: "What happens without a will?", path: "/resource/dying-without-a-will-intestacy" },
    ]
  },
  {
    title: "For Charities",
    resources: [
      { title: "Gifts in wills for charities", path: "/fundraising-online-wills" },
      { title: "Charity interface video", path: "/resource/gifts-in-wills-charity-interface-video" },
      { title: "Supporter journey video", path: "/resource/gifts-in-wills-supporter-journey-video" },
      { title: "Gifts in Wills - Training", path: "/gifts-in-wills-training-with-richard-radcliffe" },
    ]
  }
];
