import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';

// External authority links for further reading
const externalResources = {
  wills: [
    { url: 'https://www.gov.uk/make-will', title: 'Making a Will - GOV.UK', description: 'Official UK Government guidance on making a will' },
    { url: 'https://www.citizensadvice.org.uk/family/death-and-wills/wills/', title: 'Wills - Citizens Advice', description: 'Free advice on wills and inheritance' },
    { url: 'https://www.lawsociety.org.uk/public/for-public-visitors/common-legal-issues/making-a-will', title: 'Making a Will - The Law Society', description: 'Legal guidance from the professional body for solicitors' }
  ],
  probate: [
    { url: 'https://www.gov.uk/applying-for-probate', title: 'Applying for Probate - GOV.UK', description: 'Official guide to the probate process' },
    { url: 'https://www.citizensadvice.org.uk/family/death-and-wills/dealing-with-the-estate-of-someone-who-has-died/', title: 'Dealing with an Estate - Citizens Advice', description: 'Step-by-step guidance on estate administration' }
  ],
  lpa: [
    { url: 'https://www.gov.uk/power-of-attorney', title: 'Power of Attorney - GOV.UK', description: 'Official guidance on Lasting Powers of Attorney' },
    { url: 'https://www.ageuk.org.uk/information-advice/money-legal/legal-issues/powers-of-attorney/', title: 'Powers of Attorney - Age UK', description: 'Advice for older adults on LPAs' }
  ],
  intestacy: [
    { url: 'https://www.gov.uk/inherits-someone-dies-without-will', title: 'Intestacy Rules - GOV.UK', description: 'Who inherits if someone dies without a will' },
    { url: 'https://www.citizensadvice.org.uk/family/death-and-wills/who-can-inherit-if-there-is-no-will-the-rules-of-intestacy/', title: 'Rules of Intestacy - Citizens Advice', description: 'Detailed explanation of intestacy rules' }
  ],
  executors: [
    { url: 'https://www.gov.uk/wills-probate-inheritance/being-an-executor', title: 'Being an Executor - GOV.UK', description: 'Official guide to executor duties' }
  ],
  tax: [
    { url: 'https://www.gov.uk/inheritance-tax', title: 'Inheritance Tax - GOV.UK', description: 'Official inheritance tax guidance' }
  ]
};

// Map resource slugs to their external resource categories
const resourceToCategory = {
  'do-i-need-to-make-a-will': 'wills',
  'are-online-wills-legal': 'wills',
  'make-an-online-will-in-five-easy-steps': 'wills',
  'what-is-a-solicitor-checked-will': 'wills',
  'who-can-witness-a-will': 'wills',
  'how-to-sign-execute-a-will': 'wills',
  'will-writing-glossary': 'wills',
  'executors': 'executors',
  'choosing-executors-for-your-will': 'executors',
  'do-i-need-probate': 'probate',
  'apply-for-probate': 'probate',
  'probate-directory': 'probate',
  'preparing-estate-accounts': 'probate',
  'lasting-power-of-attorney': 'lpa',
  'do-i-need-an-lpa': 'lpa',
  'make-an-lpa': 'lpa',
  'attorneys': 'lpa',
  'choosing-attorneys': 'lpa',
  'lpa-cost': 'lpa',
  'dying-without-a-will-intestacy': 'intestacy',
  'i-am-getting-married-do-i-need-a-will': 'wills',
  'separated-from-partner-divorce-wills': 'wills',
  'legal-guardians': 'wills',
  'blended-families': 'wills',
  'wills-and-stepchildren': 'wills',
  'register-a-death': 'probate',
  'death-of-a-spouse': 'probate',
  'arranging-a-funeral': 'probate',
  'personal-belongings': 'probate',
  'cost-of-making-a-will': 'wills',
  'inheritance-tax-guide': 'tax',
  'trusts-in-wills': 'wills',
  'how-to-change-your-will': 'wills',
  'will-template-uk': 'wills',
  'lpa-vs-will': 'lpa',
  'what-to-do-when-someone-dies': 'probate'
};

// Map resource slugs to illustration components
const resourceToIllustration = {
  // Making a will resources
  'do-i-need-to-make-a-will': '/logos/resource-making-will.svg',
  'are-online-wills-legal': '/logos/resource-making-will.svg',
  'make-an-online-will-in-five-easy-steps': '/logos/resource-making-will.svg',
  'what-is-a-solicitor-checked-will': '/logos/resource-making-will.svg',
  'will-writing-glossary': '/logos/resource-glossary.svg',

  // Witnesses and signing
  'who-can-witness-a-will': '/logos/resource-witnesses.svg',
  'how-to-sign-execute-a-will': '/logos/resource-signing.svg',

  // Executors and probate
  'executors': '/logos/resource-executors-probate.svg',
  'choosing-executors-for-your-will': '/logos/resource-executors-probate.svg',
  'do-i-need-probate': '/logos/resource-executors-probate.svg',
  'apply-for-probate': '/logos/resource-executors-probate.svg',
  'probate-directory': '/logos/resource-executors-probate.svg',
  'preparing-estate-accounts': '/logos/resource-executors-probate.svg',

  // LPA resources
  'lasting-power-of-attorney': '/logos/resource-lpa.svg',
  'do-i-need-an-lpa': '/logos/resource-lpa.svg',
  'make-an-lpa': '/logos/resource-lpa.svg',
  'attorneys': '/logos/resource-lpa.svg',
  'choosing-attorneys': '/logos/resource-lpa.svg',
  'lpa-cost': '/logos/resource-lpa.svg',

  // Family situations
  'dying-without-a-will-intestacy': '/logos/resource-family.svg',
  'legal-guardians': '/logos/resource-family.svg',
  'blended-families': '/logos/resource-family.svg',
  'wills-and-stepchildren': '/logos/resource-family.svg',

  // Marriage and relationships
  'i-am-getting-married-do-i-need-a-will': '/logos/resource-marriage.svg',
  'separated-from-partner-divorce-wills': '/logos/resource-marriage.svg',

  // After death resources
  'register-a-death': '/logos/resource-after-death.svg',
  'death-of-a-spouse': '/logos/resource-after-death.svg',
  'arranging-a-funeral': '/logos/resource-after-death.svg',
  'personal-belongings': '/logos/resource-after-death.svg',

  // New resource pages
  'cost-of-making-a-will': '/logos/resource-making-will.svg',
  'inheritance-tax-guide': '/logos/resource-making-will.svg',
  'trusts-in-wills': '/logos/resource-making-will.svg',
  'how-to-change-your-will': '/logos/resource-making-will.svg',
  'will-template-uk': '/logos/resource-making-will.svg',
  'lpa-vs-will': '/logos/resource-lpa.svg',
  'what-to-do-when-someone-dies': '/logos/resource-after-death.svg'
};

// Resource content database - this would typically come from a CMS or API
const resourceContent = {
  'do-i-need-to-make-a-will': {
    title: 'Do you need to make a will?',
    content: `
      <p>Making a will is one of the most important things you can do to protect your family and ensure your wishes are carried out after you die. Yet surveys consistently show that more than half of UK adults have not made one. If you are wondering whether you need a will, the short answer is almost certainly yes.</p>

      <h2>Who needs a will?</h2>
      <p>Strictly speaking, anyone over 18 in England and Wales can make a will, and most people should. You especially need a will if:</p>
      <ul>
        <li><strong>You own property or have savings</strong> - even a modest estate can cause problems if there is no will to guide how it should be shared out.</li>
        <li><strong>You have children under 18</strong> - a will is the only way to choose who will look after them (their "legal guardian") if both parents die.</li>
        <li><strong><a href="/do-you-cohabit">You live with a partner but are not married or in a civil partnership</a></strong> - cohabiting partners have no automatic right to inherit under English law, no matter how long you have been together.</li>
        <li><strong>You are married or in a civil partnership</strong> - intestacy rules may not leave everything to your spouse, especially if you have children (see below).</li>
        <li><strong>You have a blended family</strong> - stepchildren do not automatically inherit under the rules of intestacy. If you want them to receive anything you must say so in a will.</li>
        <li><strong>You own a business</strong> - without a will, your share of a business may pass to someone who has no interest in running it, putting the business and your colleagues at risk.</li>
        <li><strong>You own property abroad</strong> - foreign assets can be subject to different inheritance laws. A will helps clarify your intentions and can make administration much simpler.</li>
        <li><strong>You want to leave money to charity</strong> - charitable gifts in a will can also reduce the <a href="/resource/inheritance-tax-guide">inheritance tax</a> rate on the rest of your estate from 40% to 36%.</li>
      </ul>

      <h2>What happens without a will?</h2>
      <p>If you die without a valid will, you are said to have died "<a href="/resource/dying-without-a-will-intestacy">intestate</a>." Your estate will then be divided according to a fixed set of rules set by Parliament, not according to your wishes. Here are some of the real-world consequences:</p>
      <ul>
        <li><strong>Unmarried partners get nothing.</strong> It does not matter if you have lived together for decades or have children together. Under the intestacy rules, a cohabiting partner has no automatic right to inherit.</li>
        <li><strong>Your spouse may not get everything.</strong> If you are married with children, your spouse receives the first £322,000 of the estate plus personal belongings, and then only half of whatever is left. The other half is divided equally among your children. For many families with a home and some savings this can force a sale of the family home.</li>
        <li><strong>Stepchildren and close friends are excluded.</strong> Only blood relatives and legally adopted children can inherit under intestacy.</li>
        <li><strong>A court decides who raises your children.</strong> Without a will naming a guardian, the family court will decide who looks after your children. This can be slow, stressful, and the outcome might not be what you would have chosen.</li>
        <li><strong>It costs more.</strong> Sorting out an intestate estate is usually more expensive and time-consuming than one where a clear will exists, because someone must apply to the court for authority to act and may need legal advice on how the rules apply.</li>
      </ul>

      <h2>Specific situations where a will is essential</h2>
      <h3>Cohabiting couples</h3>
      <p>English law does not recognise "common-law marriage." If you live with your partner without being married or in a civil partnership, making a will is the single most important step you can take to protect each other financially.</p>

      <h3>Young adults</h3>
      <p>You might think wills are only for older people, but anyone over 18 with savings, a car, or other assets should consider making one. If you have recently bought a property with a partner, a will is especially important.</p>

      <h3>Business owners</h3>
      <p>A will can include directions about what should happen to your share of a business, whether it should be sold or transferred to a particular person. Without this, your business partners could face serious disruption.</p>

      <h2>Benefits of making a will</h2>
      <p>Not sure <a href="/resource/will-template-uk">what your will should include</a>? Here are the key benefits of having one:</p>
      <ul>
        <li>Choose exactly who inherits your assets and in what proportions</li>
        <li><a href="/resource/legal-guardians">Appoint guardians for your children</a></li>
        <li><a href="/charity-gifts-in-wills-how-and-why">Reduce or plan for inheritance tax</a></li>
        <li>Make gifts to charities you care about</li>
        <li>Avoid family disputes by making your wishes clear</li>
        <li>Appoint <a href="/resource/executors">executors</a> you trust to handle your affairs</li>
        <li>Include wishes about your funeral arrangements</li>
        <li>Set up trusts to protect assets for young or vulnerable beneficiaries</li>
      </ul>

      <h2>The cost of not having a will</h2>
      <p>People often delay making a will because they assume it will be expensive or complicated. In reality, an online will can cost far less than the legal fees your family might face if you die without one. Contested estates, court applications, and professional administration charges can run into thousands of pounds. Making a will now is one of the simplest and most cost-effective ways to look after the people you love. And if your circumstances change, it is straightforward to <a href="/resource/how-to-change-your-will">update your will</a> later.</p>
    `
  },
  'are-online-wills-legal': {
    title: 'Are online wills legal?',
    content: `
      <p>Yes, online wills are completely legal in England and Wales. The law does not care how a will is drafted - whether by a solicitor in a high-street office or by you at your kitchen table using an online service. What matters is that the finished document meets the requirements set out in the Wills Act 1837. For a breakdown of <a href="/resource/will-template-uk">what your will should include</a>, see our separate guide. If it does, it is every bit as legally binding as a will prepared by the most expensive law firm in the country.</p>

      <h2>What the Wills Act 1837 requires</h2>
      <p>The Wills Act 1837 (as amended) sets out the rules that every will in England and Wales must follow. Here is what is required and how an online will meets each point:</p>

      <h3>1. The will must be in writing</h3>
      <p>There is no requirement for a will to be handwritten. A typed, printed document is perfectly valid. When you use an online will service, your answers are used to generate a professionally formatted document that you then print out. This satisfies the "in writing" requirement.</p>

      <h3>2. The testator must sign the will</h3>
      <p>The "<a href="/testator">testator</a>" is simply the person making the will - that is you. You must <a href="/resource/how-to-sign-execute-a-will">sign the printed will yourself</a>, with a pen, in the presence of two witnesses. An online service cannot do this step for you, but it will provide clear instructions on exactly how and where to sign.</p>

      <h3>3. Two witnesses must be present and sign</h3>
      <p>Both <a href="/resource/who-can-witness-a-will">witnesses must be in the room with you when you sign</a>. They must each watch you sign, and then they each sign the will themselves, in your presence and in the presence of each other. The witnesses must be over 18 and must not be beneficiaries of the will (or married to a beneficiary), because that would invalidate their gift.</p>

      <h3>4. The testator must have mental capacity</h3>
      <p>You must understand what you are doing when you make your will. This means you understand that you are making a will, you have a general idea of what you own, and you understand who might reasonably expect to benefit. Most adults easily meet this standard.</p>

      <h3>5. The testator must know and approve the contents</h3>
      <p>You must actually understand what your will says and agree with it. With an online service, you make all the decisions yourself by answering guided questions, so this requirement is naturally satisfied.</p>

      <h2>Common concerns about online wills</h2>
      <h3>Is an online will as good as one from a solicitor?</h3>
      <p>For most people with straightforward wishes, an online will is just as effective. The legal validity is identical. The key difference is the level of personal advice you receive. A solicitor sitting with you might spot a tax-planning opportunity or a family complication you had not considered. That is why the best online services include a <a href="/resource/what-is-a-solicitor-checked-will">solicitor review of your draft will</a>, giving you the benefits of both approaches.</p>

      <h3>What could make a will invalid?</h3>
      <p>The most common reasons a will is found to be invalid are:</p>
      <ul>
        <li>It was not signed properly, or was signed without two witnesses present</li>
        <li>A beneficiary (or their spouse) acted as a witness, which voids that person's gift</li>
        <li>The testator lacked mental capacity when the will was made</li>
        <li>There is evidence that someone pressured the testator into making the will (known as "undue influence")</li>
        <li>A later will or marriage has revoked it</li>
      </ul>
      <p>None of these problems are unique to online wills. They can happen with any will, including those drafted by solicitors.</p>

      <h2>Why choose an online will?</h2>
      <ul>
        <li><strong>Convenience</strong> - complete the questionnaire from home, at your own pace, at any time of day</li>
        <li><strong><a href="/resource/cost-of-making-a-will">Cost-effective</a></strong> - typically a fraction of the cost of visiting a solicitor in person</li>
        <li><strong>Guided process</strong> - clear prompts and explanations help ensure nothing important is missed</li>
        <li><strong>Easy to update</strong> - when your circumstances change, you can log in and make amendments</li>
        <li><strong>No appointments needed</strong> - no need to take time off work or arrange childcare</li>
      </ul>

      <h2>The role of the solicitor check</h2>
      <p>At Make a Will Online, every will is reviewed by a qualified solicitor before you sign it. The solicitor checks that the will is clearly worded, legally sound, and that your instructions make practical sense. If they spot anything that could cause problems - an ambiguous gift, a missing clause, or a potential tax issue - they will get in touch with you to discuss it. This extra layer of professional oversight means you get the convenience of an online service with the reassurance of expert legal review.</p>
    `
  },
  'executors': {
    title: 'What is an executor?',
    content: `
      <p>An executor is the person (or people) you appoint in your will to carry out your wishes after you die. They are legally responsible for making sure your estate is dealt with properly - gathering your assets, paying any debts and taxes, and distributing what remains to the people named in your will. For a complete overview of what needs to happen after a death, see our guide on <a href="/resource/what-to-do-when-someone-dies">what to do when someone dies</a>. <a href="/resource/choosing-executors-for-your-will">Choosing the right executor</a> is one of the most important decisions you will make when writing your will.</p>

      <h2>What does an executor do?</h2>
      <p>Being an executor involves a wide range of practical and legal tasks. Here is what they will typically need to do, roughly in order:</p>
      <ol>
        <li><strong><a href="/resource/register-a-death">Register the death</a></strong> - this must usually be done within five days. The executor may also need to <a href="/resource/arranging-a-funeral">arrange the funeral</a>, following any wishes you have set out in your will.</li>
        <li><strong>Locate the will and notify beneficiaries</strong> - the executor needs to find your original signed will, read it, and let the people named in it know what to expect.</li>
        <li><strong>Value the estate</strong> - this means identifying everything you owned (property, bank accounts, investments, personal possessions) and everything you owed (mortgages, loans, credit cards, utility bills). The executor will write to banks, building societies, and other institutions to get date-of-death valuations.</li>
        <li><strong>Deal with <a href="/resource/inheritance-tax-guide">inheritance tax</a></strong> - even if no tax is due, the executor usually needs to complete inheritance tax forms and submit them to HMRC. See also <a href="/resource/do-i-need-probate">do I need probate?</a></li>
        <li><strong><a href="/resource/apply-for-probate">Apply for probate</a></strong> - this is the court order (called a Grant of Probate) that gives the executor legal authority to deal with the estate. Not every estate needs probate, but most do.</li>
        <li><strong>Collect assets and pay debts</strong> - once probate is granted, the executor can close bank accounts, sell property if necessary, and pay off any outstanding debts.</li>
        <li><strong>Distribute the estate</strong> - finally, the executor shares out what is left according to the terms of your will.</li>
        <li><strong>Prepare estate accounts</strong> - the executor should keep detailed records of all money coming in and going out, and provide final accounts to the beneficiaries.</li>
      </ol>

      <h3>How long does it take?</h3>
      <p>Administering a straightforward estate typically takes between six and twelve months, but more complex estates (for example those involving property sales, inheritance tax, or disputes) can take considerably longer.</p>

      <h2>Who can be an executor?</h2>
      <p>You can choose anyone aged 18 or over who has mental capacity. Common choices include:</p>
      <ul>
        <li>A spouse or partner</li>
        <li>Adult children</li>
        <li>Trusted friends or relatives</li>
        <li>Professional executors such as solicitors or banks</li>
      </ul>
      <p>An executor can also be a beneficiary of the will - for example, it is very common for a spouse to be both the main beneficiary and an executor.</p>

      <h3>Personal vs professional executors</h3>
      <p>A personal executor (a family member or friend) will usually act for free, though they are entitled to claim back any expenses they incur. A professional executor (such as a solicitor or a bank's executor service) will charge fees, which are paid out of the estate. Professional executors can be useful if the estate is large or complex, or if there is a risk of family disagreements, but for most straightforward estates a trusted family member or friend is the right choice.</p>

      <h2>How many executors should I appoint?</h2>
      <p>You can appoint up to four executors to act at any one time. We recommend appointing at least two. This way, if one executor dies before you, moves abroad, or simply does not want to take on the role, there is someone else ready to step in.</p>

      <h2>Substitute executors</h2>
      <p>As well as your main executors, you can name substitute (or "backup") executors in your will. A substitute executor only steps in if one of your original executors is unable or unwilling to act. This is a sensible precaution and costs nothing extra to include.</p>

      <h2>Can an executor refuse to act?</h2>
      <p>Yes. Being named as an executor in someone's will does not force you to take on the role. An executor can "renounce" (formally give up) the role before they start dealing with the estate. This is done by completing a simple legal form. However, once an executor has started to act (known as "intermeddling"), they cannot easily step down. That is why it is important to discuss your choice with the people you plan to appoint, so they know what to expect and are willing to take on the responsibility.</p>

      <h2>What happens if an executor dies?</h2>
      <p>If your executor dies before you, the appointment simply falls away. If you have named a substitute executor, they will take over. If you have not, and there is no other executor named in the will, the court can appoint an administrator to deal with the estate. This is another good reason to name at least two executors and to review your will regularly.</p>

      <h2>Common mistakes to avoid</h2>
      <ul>
        <li><strong>Choosing someone too elderly or frail</strong> - remember that your executor may not be needed for many years. Consider whether they will still be able to cope with the role when the time comes.</li>
        <li><strong>Not telling your executor</strong> - it should not be a surprise. Talk to them in advance and make sure they know where your will is stored.</li>
        <li><strong>Appointing only one executor</strong> - if that person cannot act, the process becomes more complicated and expensive.</li>
        <li><strong>Choosing someone who lives overseas</strong> - while not impossible, having an executor in another country can cause delays and practical difficulties.</li>
      </ul>
    `
  },
  'lasting-power-of-attorney': {
    title: 'What is a Lasting Power of Attorney?',
    content: `
      <p>A Lasting Power of Attorney (LPA) is a legal document that lets you choose someone you trust to make decisions on your behalf if you ever lose the mental capacity to make them yourself. It is one of the most important documents you can put in place alongside a will, yet many people do not realise it exists until it is too late to make one.</p>

      <h2>The two types of LPA</h2>
      <p>There are two separate types of Lasting Power of Attorney in England and Wales. You can make one or both, and most people choose to make both at the same time.</p>

      <h3>Property and Financial Affairs LPA</h3>
      <p>This gives your chosen attorney the power to manage your money and property on your behalf. That includes things like:</p>
      <ul>
        <li>Paying bills and managing bank accounts</li>
        <li>Dealing with your pension or benefits</li>
        <li>Buying or selling property</li>
        <li>Managing investments and tax affairs</li>
      </ul>
      <p>An important point: a Property and Financial Affairs LPA can be used while you still have mental capacity, if you choose to allow this. For example, you might want your attorney to handle your finances if you become physically unwell or are simply abroad for an extended period.</p>

      <h3>Health and Welfare LPA</h3>
      <p>This gives your attorney the power to make decisions about your personal welfare. That includes:</p>
      <ul>
        <li>Day-to-day care, such as what you eat and what you wear</li>
        <li>Medical treatment, including whether to consent to or refuse treatment</li>
        <li>Where you live - for example, whether you move into a care home</li>
        <li>End-of-life decisions, if you give your attorney this specific authority</li>
      </ul>
      <p>Unlike the financial LPA, a Health and Welfare LPA can only be used once you have lost mental capacity. While you can make decisions for yourself, your attorney has no power to override you.</p>

      <h2>When does an LPA take effect?</h2>
      <p>An LPA must be registered with the Office of the Public Guardian (OPG) before it can be used. See our guide on <a href="/resource/make-an-lpa">how to make an LPA</a> for full details. You can register it as soon as it is signed - you do not have to wait until you lose capacity. In fact, registering early is strongly recommended because the registration process can take several weeks, and if you wait until there is an emergency it may be too late.</p>
      <p>Once registered, a Property and Financial Affairs LPA can be used straight away (if you have allowed this). A Health and Welfare LPA only becomes active when doctors confirm that you lack mental capacity to make a particular decision.</p>

      <h2>What does it cost?</h2>
      <p>There are two costs involved. First, there is the <a href="/resource/lpa-cost">cost of preparing the LPA document</a> itself, which depends on whether you use a solicitor or an online service. Second, there is a registration fee of £82 per LPA, paid to the Office of the Public Guardian. If you make both types of LPA, that is £164 in registration fees. People on low incomes or certain benefits may be entitled to a reduced fee or an exemption.</p>

      <h2>What happens without an LPA?</h2>
      <p>If you lose mental capacity and have no LPA in place, your family cannot simply step in and manage your affairs. Instead, they would need to apply to the Court of Protection for a "deputyship order." This process is:</p>
      <ul>
        <li><strong>Expensive</strong> - court fees and legal costs can run to over £1,000, and ongoing supervision fees apply each year</li>
        <li><strong>Slow</strong> - applications can take many months to process</li>
        <li><strong>Stressful</strong> - your family must go through a formal court process at an already difficult time</li>
        <li><strong>Out of your control</strong> - the court decides who is appointed as your deputy, and it may not be the person you would have chosen</li>
      </ul>
      <p>During this time, your bank accounts may be frozen, bills may go unpaid, and your family may struggle to arrange the care you need.</p>

      <h2>Who can be an attorney?</h2>
      <p>You can appoint anyone aged 18 or over who has mental capacity. Most people choose a spouse, partner, adult child, or trusted friend. Learn more about <a href="/resource/choosing-attorneys">choosing attorneys</a>. You can appoint more than one attorney and decide whether they must act together ("jointly"), independently ("jointly and severally"), or together on some decisions and independently on others.</p>
      <p>You can also appoint a professional, such as a solicitor, as your attorney, though they will usually charge for their time. It is worth discussing your choice with the person before you appoint them to make sure they are willing to take on the role.</p>

      <h2>How LPAs relate to wills</h2>
      <p>An LPA and a will serve different purposes, but they work together as part of your overall planning. For a detailed look at <a href="/resource/lpa-vs-will">how an LPA differs from a will</a>, see our comparison guide. A <a href="/resource/do-i-need-to-make-a-will">will</a> deals with what happens to your assets after you die. An LPA deals with what happens if you are still alive but unable to make decisions for yourself. Neither document replaces the other, and ideally everyone should have both in place. Many people choose to make their LPA at the same time as their will.</p>
    `
  },
  'do-i-need-probate': {
    title: 'What is Probate and do I need it?',
    content: `
      <p>When someone dies, their assets (property, savings, investments, possessions) need to be collected, any debts and taxes need to be paid, and what remains needs to be distributed to the right people. For a complete overview of the steps involved, see our checklist on <a href="/resource/what-to-do-when-someone-dies">what to do when someone dies</a>. "Probate" is the legal process that makes all of this possible. In practice, the word "probate" is used loosely to mean the whole process of dealing with someone's estate after death, but technically it refers to the court order that gives the executor legal authority to act.</p>

      <h2>What is a Grant of Probate?</h2>
      <p>If the person who died left a valid will, the <a href="/resource/executors">executor</a> named in that will applies to the Probate Registry (part of HM Courts and Tribunals Service) for a document called a <strong><a href="/resource/apply-for-probate">Grant of Probate</a></strong>. This is an official court order confirming that the will is valid and that the executor has authority to deal with the estate.</p>
      <p>Banks, building societies, Land Registry, and other organisations will usually ask to see the Grant before they release any money or transfer property. Without it, the executor cannot access most of the deceased's assets.</p>

      <h3>Grant of Probate vs Letters of Administration</h3>
      <p>If the person who died did not leave a will (or the will is invalid), the process works slightly differently. Instead of a Grant of Probate, a close relative applies for <strong><a href="/resource/dying-without-a-will-intestacy">Letters of Administration</a></strong>. The person granted Letters of Administration is called an "administrator" rather than an executor, but their practical responsibilities are very similar. The main difference is that the estate must be distributed according to the rules of intestacy rather than a will.</p>

      <h2>When is probate needed?</h2>
      <p>Probate is typically required when the deceased:</p>
      <ul>
        <li><strong>Owned property (land or buildings) in their sole name</strong> - you cannot sell or transfer a property without a Grant</li>
        <li><strong>Had bank or building society accounts above a certain threshold</strong> - each bank sets its own limit, but most will require a Grant for accounts holding more than around £5,000 to £50,000. Some banks set the limit lower, others higher</li>
        <li><strong>Held stocks, shares, or investments</strong> - share registrars and investment platforms almost always require a Grant</li>
        <li><strong>Had assets in a pension or insurance policy</strong> - depending on how these were set up, a Grant may be needed</li>
      </ul>

      <h2>When might probate not be needed?</h2>
      <p>There are situations where you may be able to deal with the estate without applying for probate:</p>
      <ul>
        <li><strong>All assets were jointly owned</strong> - jointly held property and joint bank accounts usually pass automatically to the surviving joint owner by "right of survivorship." No Grant is needed for this.</li>
        <li><strong>The estate is very small</strong> - if the total value of assets held in the deceased's sole name falls below the thresholds set by the relevant banks and institutions, they may release the funds without a Grant.</li>
        <li><strong>Assets were held in trust</strong> - assets in a trust do not form part of the deceased's estate and are dealt with by the trustees.</li>
        <li><strong>Nominated assets</strong> - some accounts (for example certain National Savings products up to £5,000) can be transferred using a nomination form without probate.</li>
      </ul>
      <p>If you are unsure whether probate is needed, contact the banks and other institutions holding the deceased's assets. They will tell you whether they need to see a Grant before releasing funds.</p>

      <h2>The probate process step by step</h2>
      <ol>
        <li><strong>Value the estate</strong> - write to every bank, building society, pension provider, and other institution to get date-of-death valuations. Get a property valuation if applicable. List all debts.</li>
        <li><strong>Complete <a href="/charity-gifts-in-wills-how-and-why">inheritance tax</a> forms</strong> - even if no inheritance tax is owed, you will usually need to complete and submit the relevant HMRC forms. If tax is due, some or all of it must be paid before the Grant is issued.</li>
        <li><strong>Apply for the Grant</strong> - submit the application to the Probate Registry, either online or by post. You will need to swear a legal statement (called an "oath") confirming that the information you have provided is true.</li>
        <li><strong>Receive the Grant</strong> - once approved, you receive the Grant of Probate (or Letters of Administration). You can order multiple copies (called "office copies") for a small fee, which is helpful because different institutions may want to see an original at the same time.</li>
        <li><strong>Collect assets and pay debts</strong> - use the Grant to close bank accounts, sell or transfer property, and pay off any outstanding debts, taxes, and expenses.</li>
        <li><strong>Distribute the estate</strong> - once all debts are settled and any required notices have been placed (to protect against unknown claims), distribute what remains to the beneficiaries according to the will or intestacy rules. You should also prepare <a href="/resource/preparing-estate-accounts">estate accounts</a>.</li>
      </ol>

      <h2>How long does probate take?</h2>
      <p>The time from application to receiving the Grant is typically around eight to twelve weeks, though this can be shorter or longer depending on how busy the Probate Registry is. The overall process of dealing with the entire estate - from death to final distribution - usually takes between six months and a year for a straightforward estate. Estates involving property sales, <a href="/resource/inheritance-tax-guide">inheritance tax</a>, or disputes can take longer.</p>

      <h2>What does probate cost?</h2>
      <p>The court fee for applying for probate is currently £300 (there is no fee if the estate is worth less than £5,000). Additional office copies of the Grant cost £1.50 each. On top of the court fee, there may be costs for professional help if you instruct a solicitor or probate service to handle the application for you.</p>

      <h2>Who can apply for probate?</h2>
      <p>If there is a will, the executor or executors named in the will apply. If there is no will, the person with the highest entitlement under the intestacy rules applies - typically the surviving spouse or civil partner, or if there is none, an adult child. Up to four people can be named on a single Grant.</p>
    `
  },
  'dying-without-a-will-intestacy': {
    title: 'What happens if you die without a will?',
    content: `
      <p>When someone dies without a valid will, they are said to have died "intestate." Their estate - everything they owned - is then distributed according to a fixed set of rules laid down by law, called the rules of intestacy. These rules apply in England and Wales and do not take account of the deceased person's wishes, their relationships, or the needs of the people left behind. The results can be very different from what most people would want.</p>

      <h2>The rules of intestacy in full</h2>
      <p>The intestacy rules follow a strict order of priority. Only the people in the highest applicable category inherit. Here is the full hierarchy:</p>

      <h3>Married or in a civil partnership, with children</h3>
      <p>The surviving spouse or civil partner receives:</p>
      <ul>
        <li>All personal possessions (clothes, furniture, cars, jewellery, and so on)</li>
        <li>The first £322,000 of the estate (this figure is called the "statutory legacy" and is set by the government - it was last updated in July 2023)</li>
        <li>Half of everything that remains above £322,000</li>
      </ul>
      <p>The other half of the remainder is divided equally among the children. If a child has died before the parent, that child's share passes to their own children (the deceased's grandchildren).</p>
      <p>For many families, this means the surviving spouse does not inherit the entire estate. If the family home is worth a lot, the surviving spouse could even be forced to sell it to pay the children's share.</p>

      <h3>Married or in a civil partnership, without children</h3>
      <p>The surviving spouse or civil partner inherits the entire estate.</p>

      <h3>Not married and not in a civil partnership</h3>
      <p>If the deceased was not married or in a civil partnership, the estate passes in the following order. Each category only applies if nobody in a higher category survives:</p>
      <ol>
        <li><strong>Children</strong> (or their descendants) - shared equally</li>
        <li><strong>Parents</strong> - shared equally if both survive</li>
        <li><strong>Full siblings</strong> (brothers and sisters who share both parents) - shared equally. If a sibling has died, their share goes to their children.</li>
        <li><strong>Half-siblings</strong> (brothers and sisters who share one parent) - shared equally</li>
        <li><strong>Grandparents</strong> - shared equally</li>
        <li><strong>Uncles and aunts</strong> (full blood) - shared equally</li>
        <li><strong>Uncles and aunts</strong> (half blood) - shared equally</li>
        <li><strong>The Crown</strong> (known as "bona vacantia") - if no relatives can be found, the estate passes to the government</li>
      </ol>

      <h2>Who does NOT inherit under intestacy?</h2>
      <p>The intestacy rules completely exclude several groups of people who you might expect to inherit:</p>
      <ul>
        <li><strong>Unmarried partners</strong> - no matter how long you have lived together or whether you have children together, a <a href="/do-you-cohabit">cohabiting partner</a> has no automatic right to inherit under intestacy. This is one of the most common and painful consequences of dying without a will.</li>
        <li><strong><a href="/resource/wills-and-stepchildren">Stepchildren</a></strong> - unless they have been legally adopted, stepchildren receive nothing.</li>
        <li><strong>Friends and carers</strong> - even people who provided years of care receive nothing.</li>
        <li><strong>Charities</strong> - if you wanted to leave a gift to a charity, that can only be done through a will.</li>
        <li><strong>In-laws</strong> - brothers-in-law, sisters-in-law, and other relatives by marriage are excluded.</li>
      </ul>

      <h2>What happens to property?</h2>
      <p>If the deceased owned a property jointly with another person as "joint tenants," the property automatically passes to the surviving joint owner regardless of intestacy rules. However, if the property was owned as "tenants in common" (where each person owns a defined share), the deceased's share forms part of the estate and is distributed according to the intestacy rules. This can create a very difficult situation, especially if the surviving partner is not married to the deceased and has no automatic right to their share of the home.</p>

      <h2>Can someone make a claim against an intestate estate?</h2>
      <p>Yes. Under the Inheritance (Provision for Family and Dependants) Act 1975, certain people can ask the court for "reasonable financial provision" from the estate if the intestacy rules leave them without adequate support. People who can make a claim include:</p>
      <ul>
        <li>A spouse or civil partner</li>
        <li>A former spouse or civil partner who has not remarried</li>
        <li>A cohabiting partner who lived with the deceased for at least two years before the death</li>
        <li>A child of the deceased (including adult children)</li>
        <li>Anyone who was being financially maintained by the deceased</li>
      </ul>
      <p>However, making a court claim is expensive, stressful, uncertain, and can take a long time. It is not a reliable substitute for having a will in place. The <a href="/resource/do-i-need-probate">probate</a> process for an intestate estate is also more complex.</p>

      <h2>How to avoid intestacy</h2>
      <p>The only way to make sure your estate goes to the people you choose, in the proportions you choose, is to <a href="/resource/do-i-need-to-make-a-will">make a valid will</a>. This is especially important if you are not married, if you have a blended family, or if you want to provide for anyone who would not inherit under the intestacy rules. You should also review your will regularly - after major life events such as marriage, divorce, the birth of a child, or buying a property - to make sure it still reflects your wishes.</p>
    `
  },
  'make-an-online-will-in-five-easy-steps': {
    title: 'Make an Online Will in Five Easy Steps',
    content: `
      <p>Creating a will online is straightforward when you break it down into manageable steps. Online wills are <a href="/resource/are-online-wills-legal">completely legal in England and Wales</a>. Here's how the process works with Make a Will.</p>

      <h2>Step 1: Gather your information</h2>
      <p>Before you start, it helps to understand <a href="/resource/will-template-uk">what your will should include</a> and have the following to hand:</p>
      <ul>
        <li>Full names and addresses of your beneficiaries (the people you want to inherit)</li>
        <li>Details of anyone you'd like to appoint as executor</li>
        <li>If you have children under 18, think about who you'd want as their guardian</li>
        <li>A rough idea of what you own - property, savings, investments</li>
        <li>Any specific gifts you'd like to make (particular items to particular people)</li>
      </ul>

      <h2>Step 2: Complete the questionnaire</h2>
      <p>Our guided questionnaire takes you through all the important decisions. It's written in plain English - no legal jargon. Most people complete it in 15-20 minutes. You can save your progress and return later if needed.</p>

      <h2>Step 3: Review your draft will</h2>
      <p>Once you've answered all the questions, we generate your draft will. You can review it online and make any changes before it goes for checking.</p>

      <h2>Step 4: Solicitor review</h2>
      <p>Every will is reviewed by a qualified solicitor. Learn more about <a href="/resource/what-is-a-solicitor-checked-will">solicitor-checked wills</a>. They check for errors, ambiguities, and potential problems. If they spot any issues, they'll contact you to discuss them. This usually takes 2-3 working days.</p>

      <h2>Step 5: Sign and witness</h2>
      <p>Once approved, we send you your will to print and sign. You'll need <a href="/resource/who-can-witness-a-will">two witnesses</a> present when you <a href="/resource/how-to-sign-execute-a-will">sign</a> - they must both watch you sign and then sign the will themselves. We provide clear instructions to make sure this is done correctly.</p>

      <h2>What happens next?</h2>
      <p>Store your signed will somewhere safe and tell your executors where it is. You can update your will at any time through your account - lifetime updates are included in your <a href="/resource/cost-of-making-a-will">purchase</a>.</p>
    `
  },
  'what-is-a-solicitor-checked-will': {
    title: 'What is a Solicitor Checked Will?',
    content: `
      <p>A solicitor-checked will is exactly what it sounds like - a will that has been reviewed by a qualified solicitor before you sign it. This is what sets Make a Will apart from many other online will services.</p>

      <h2>Why does solicitor review matter?</h2>
      <p>Wills are legal documents, and small errors can have serious consequences. A solicitor review ensures:</p>
      <ul>
        <li><strong>Legal validity:</strong> Your will meets all the <a href="/resource/are-online-wills-legal">legal requirements</a></li>
        <li><strong>Clarity:</strong> The wording is clear and unambiguous</li>
        <li><strong>Completeness:</strong> Nothing important has been missed</li>
        <li><strong>Tax efficiency:</strong> Obvious tax-saving opportunities aren't overlooked</li>
        <li><strong>Practical workability:</strong> Your wishes can actually be carried out</li>
      </ul>

      <h2>Common problems a solicitor catches</h2>
      <p>In my experience, common issues include:</p>
      <ul>
        <li>Beneficiaries who are also <a href="/resource/who-can-witness-a-will">witnesses</a> (this invalidates their gift)</li>
        <li>Vague descriptions of assets or beneficiaries</li>
        <li>Contradictory clauses</li>
        <li>Missing residuary clauses (what happens to everything else)</li>
        <li>Inappropriate executor appointments</li>
        <li>Gifts that might fail due to technical rules</li>
      </ul>

      <h2>The difference from DIY wills</h2>
      <p>Many online services simply let you fill in a template and print it. See our guide to <a href="/resource/make-an-online-will-in-five-easy-steps">making an online will in five easy steps</a>. If there are problems, you won't find out until after you've died - when it's too late to fix them. With a solicitor-checked will, potential issues are identified and resolved while you're still alive to make corrections.</p>

      <h2>What happens during the review?</h2>
      <p>Our solicitors review every will individually. They check the drafting, consider your specific circumstances, and look for any issues. If they have questions or concerns, they'll contact you directly. Most wills are approved within 2-3 working days. To find out <a href="/resource/cost-of-making-a-will">how much a solicitor-checked will costs</a>, see our pricing guide.</p>
    `
  },
  'who-can-witness-a-will': {
    title: 'Who Can Witness a Will?',
    content: `
      <p>Getting your will properly witnessed is crucial. If the witnessing isn't done correctly, your entire will could be invalid. Here's what you need to know about witnesses and <a href="/resource/how-to-sign-execute-a-will">signing your will</a>.</p>

      <h2>Basic requirements for witnesses</h2>
      <p>A will witness must be:</p>
      <ul>
        <li>Over 18 years old</li>
        <li>Mentally capable (able to understand what they're doing)</li>
        <li>Physically present when you sign the will</li>
        <li>Able to see you sign</li>
      </ul>

      <h2>Who should NOT witness your will</h2>
      <p>This is where people often go wrong. The following people should not witness your will:</p>
      <ul>
        <li><strong>Anyone who benefits from the will:</strong> If a <a href="/beneficiary">beneficiary</a> witnesses the will, their gift becomes void - they lose their inheritance</li>
        <li><strong>The spouse or civil partner of any beneficiary:</strong> Same rule applies - their partner's gift is invalidated</li>
        <li><strong>Anyone who might not be available later:</strong> If there's ever a dispute, witnesses may need to give evidence</li>
      </ul>

      <h2>Good choices for witnesses</h2>
      <p>Suitable witnesses include:</p>
      <ul>
        <li>Neighbours</li>
        <li>Work colleagues</li>
        <li>Friends who aren't receiving anything in the will</li>
        <li>Professional contacts (your doctor, accountant, etc.)</li>
      </ul>

      <h2>The witnessing process</h2>
      <ol>
        <li>Both witnesses must be present at the same time</li>
        <li>They must both watch you sign the will (or acknowledge your signature)</li>
        <li>Each witness then signs the will in your presence</li>
        <li>Each witness adds their name, address, and occupation</li>
      </ol>

      <h2>Can executors be witnesses?</h2>
      <p>Yes, <a href="/resource/executors">executors</a> can witness your will - provided they're not also beneficiaries. However, it's generally better to use independent witnesses to avoid any suggestion of undue influence.</p>
    `
  },
  'how-to-sign-execute-a-will': {
    title: 'How To Sign a Will',
    content: `
      <p>Signing a will - legally called "executing" the will - must be done correctly for your will to be <a href="/resource/are-online-wills-legal">legally valid</a>. Get this wrong, and your will may be worthless. Here's exactly what you need to do.</p>

      <h2>What you'll need</h2>
      <ul>
        <li>Your printed will document</li>
        <li><a href="/resource/who-can-witness-a-will">Two independent witnesses</a> (see our guide on who can witness)</li>
        <li>A pen (use blue or black ink)</li>
        <li>A table where you can all sign comfortably</li>
      </ul>

      <h2>The signing process - step by step</h2>
      <ol>
        <li><strong>Gather everyone together:</strong> You and both witnesses must all be in the same room</li>
        <li><strong>Sign in their presence:</strong> With both witnesses watching, sign your full signature at the end of the will</li>
        <li><strong>Witnesses sign:</strong> Each witness then signs the will, while you and the other witness are present</li>
        <li><strong>Add witness details:</strong> Each witness writes their full name, address, and occupation</li>
      </ol>

      <h2>Important rules to follow</h2>
      <ul>
        <li>Everyone must be present throughout the entire signing process</li>
        <li>Witnesses must see you sign (not just your signature afterwards)</li>
        <li>You must see each witness sign</li>
        <li>Don't sign until the will is complete - no blanks to fill in later</li>
        <li>Sign at the end of the will, where indicated</li>
        <li>Initial any amendments (though it's better to reprint and start fresh)</li>
      </ul>

      <h2>What NOT to do</h2>
      <ul>
        <li>Don't sign without witnesses present</li>
        <li>Don't have witnesses sign at different times</li>
        <li>Don't staple anything to the will afterwards</li>
        <li>Don't make any alterations after signing</li>
        <li>Don't sign multiple copies as originals</li>
      </ul>

      <h2>After signing</h2>
      <p>Store your signed will somewhere safe - a fireproof safe at home, with your solicitor, or registered with a <a href="/resource/will-writing-glossary">will storage service</a>. Tell your executors where it is. Keep your unsigned copies clearly marked as copies.</p>
    `
  },
  'will-writing-glossary': {
    title: 'Will Writing Glossary',
    content: `
      <p>Legal jargon can be confusing. Here's a plain-English guide to common terms you'll encounter when making a will.</p>

      <h2>People and roles</h2>
      <ul>
        <li><strong>Testator:</strong> The person making the will (that's you)</li>
        <li><strong><a href="/beneficiary">Beneficiary</a>:</strong> Anyone who receives something under your will</li>
        <li><strong><a href="/resource/executors">Executor</a>:</strong> The person you appoint to carry out your wishes and administer your estate</li>
        <li><strong>Guardian:</strong> Someone you appoint to look after your children if you die while they're minors</li>
        <li><strong>Trustee:</strong> Someone who manages assets held in trust (often the same as your executor)</li>
        <li><strong>Witness:</strong> Someone who watches you sign and then signs the will themselves</li>
      </ul>

      <h2>Types of gift</h2>
      <ul>
        <li><strong>Specific gift/legacy:</strong> A particular item left to a named person (e.g., "my piano to my daughter")</li>
        <li><strong>Pecuniary legacy:</strong> A gift of a fixed sum of money</li>
        <li><strong>Residuary estate:</strong> Everything that's left after debts, expenses, and specific gifts have been dealt with</li>
        <li><strong>Residuary beneficiary:</strong> The person who receives the residuary estate</li>
      </ul>

      <h2>Legal processes</h2>
      <ul>
        <li><strong><a href="/resource/do-i-need-probate">Probate</a>:</strong> The legal process of administering someone's estate after death</li>
        <li><strong>Grant of Probate:</strong> The court document that gives executors authority to deal with the estate</li>
        <li><strong>Letters of Administration:</strong> Like probate, but when there's no will</li>
        <li><strong><a href="/resource/dying-without-a-will-intestacy">Intestacy</a>:</strong> Dying without a valid will</li>
        <li><strong><a href="/codicil">Codicil</a>:</strong> A document that amends an existing will (rarely used now - it's easier to make a new will)</li>
      </ul>

      <h2>Technical terms</h2>
      <ul>
        <li><strong>Estate:</strong> Everything you own - property, savings, possessions, investments</li>
        <li><strong>Chattels:</strong> Personal possessions (not property or money)</li>
        <li><strong>Issue:</strong> Legal term for children and their descendants</li>
        <li><strong>Per stirpes:</strong> A way of dividing gifts so that if a beneficiary dies before you, their share goes to their children</li>
        <li><strong>Attestation clause:</strong> The bit at the end of a will where witnesses confirm they saw the will being signed</li>
        <li><strong>Revocation clause:</strong> A statement that cancels all previous wills</li>
      </ul>
    `
  },
  'choosing-executors-for-your-will': {
    title: 'Choosing Executors for Your Will',
    content: `
      <p>Choosing the right executors is one of the most important decisions you'll make when writing your will. Learn more about <a href="/resource/executors">what executors do</a>. Get it wrong, and you could create problems for your loved ones at an already difficult time.</p>

      <h2>What makes a good executor?</h2>
      <p>Look for someone who is:</p>
      <ul>
        <li><strong>Trustworthy:</strong> They'll have access to all your financial information</li>
        <li><strong>Organised:</strong> There's a lot of paperwork and deadlines to manage</li>
        <li><strong>Financially competent:</strong> They'll need to handle money, pay bills, potentially sell assets</li>
        <li><strong>Emotionally resilient:</strong> It's hard dealing with a loved one's affairs while grieving</li>
        <li><strong>Available:</strong> The work takes time, especially in the first few months</li>
        <li><strong>Likely to outlive you:</strong> No point appointing someone older or in poor health</li>
      </ul>

      <h2>Common choices</h2>
      <ul>
        <li><strong>Spouse or partner:</strong> Often the natural choice, but consider their age and whether they'd cope alone</li>
        <li><strong>Adult children:</strong> Good if they get on well with each other</li>
        <li><strong>Other family members:</strong> Siblings, nieces, nephews</li>
        <li><strong>Trusted friends:</strong> Can be ideal, especially if your family situation is complicated</li>
        <li><strong>Professional executors:</strong> Solicitors or banks - reliable but expensive</li>
      </ul>

      <h2>How many executors?</h2>
      <p>You can appoint up to four executors. I generally recommend:</p>
      <ul>
        <li>Two executors is usually ideal - they can share the workload and check each other</li>
        <li>Three can work but may slow down decisions</li>
        <li>One is risky - what if they can't act?</li>
        <li>Always name substitute executors in case your first choices can't or won't act</li>
      </ul>

      <h2>Things to consider</h2>
      <ul>
        <li>Will your executors get along? Conflict between executors can cause serious delays</li>
        <li>Are they <a href="/beneficiary">beneficiaries</a> too? This is fine and very common</li>
        <li>Do they live nearby? Dealing with an estate remotely is harder</li>
        <li>Have you actually asked them? Always check people are willing before naming them</li>
      </ul>

      <h2>Paying executors</h2>
      <p>Non-professional executors aren't usually paid, though they can claim reasonable expenses. Professional executors charge fees, which can be substantial. They'll also need to handle <a href="/resource/do-i-need-probate">probate</a>. If you appoint professionals, check their fee structure first.</p>
    `
  },
  'apply-for-probate': {
    title: 'How to Apply for Probate',
    content: `
      <p>Applying for probate can seem daunting, but it's a process that many people handle themselves without legal help. First, make sure you understand <a href="/resource/do-i-need-probate">what probate is and whether you need it</a>. Here's a practical guide to the process.</p>

      <h2>Before you apply</h2>
      <p>You need to:</p>
      <ul>
        <li>Register the death and get copies of the death certificate (you'll need several)</li>
        <li>Find the original will</li>
        <li>Value the estate - you'll need to know what everything is worth</li>
        <li>Identify all assets and debts</li>
        <li>Work out if <a href="/resource/inheritance-tax-guide">inheritance tax</a> is due</li>
      </ul>

      <h2>Valuing the estate</h2>
      <p>You need to establish the value of:</p>
      <ul>
        <li>Property - get an estate agent valuation</li>
        <li>Bank accounts - ask banks for date-of-death balances</li>
        <li>Investments - get valuations from providers</li>
        <li><a href="/resource/personal-belongings">Personal possessions</a> - be realistic, most aren't worth much</li>
        <li>Any money owed to the deceased</li>
      </ul>
      <p>Also identify all debts including mortgages, loans, credit cards, and outstanding bills.</p>

      <h2>Inheritance tax forms</h2>
      <p>You must complete inheritance tax forms even if no tax is due. Most estates use the simpler forms (IHT205 or the online equivalent) if the estate is below the threshold and straightforward. Complex or high-value estates need the full IHT400 form.</p>

      <h2>The probate application</h2>
      <p>You can apply:</p>
      <ul>
        <li><strong>Online:</strong> Through the government's Apply for Probate service (quickest)</li>
        <li><strong>By post:</strong> Using form PA1P (if there's a will) or PA1A (if there's no will)</li>
      </ul>

      <h2>What happens next</h2>
      <ol>
        <li>You'll need to swear or affirm that the information is true</li>
        <li>Submit the original will (you'll get it back)</li>
        <li>Pay the probate fee (currently £273 for estates over £5,000)</li>
        <li>Wait for the grant - usually 4-8 weeks</li>
        <li>Once you have the grant, you can start collecting assets and paying debts. You'll also need to prepare <a href="/resource/preparing-estate-accounts">estate accounts</a></li>
      </ol>

      <h2>Do you need a solicitor?</h2>
      <p>Many people handle straightforward probates themselves. Consider getting help if the estate is complex, there's inheritance tax to pay, or there are disputes or complications. Our <a href="/resource/probate-directory">Probate Directory</a> lists useful contacts.</p>
    `
  },
  'probate-directory': {
    title: 'Probate Directory',
    content: `
      <p>Administering an estate requires dealing with numerous organisations. If you haven't already, you may need to <a href="/resource/apply-for-probate">apply for probate</a>. Here's a directory of useful contacts and what you'll need to do.</p>

      <h2>Government services</h2>
      <ul>
        <li><strong>Tell Us Once service:</strong> Report a death once and government departments are notified automatically. Available through the registrar when you <a href="/resource/register-a-death">register the death</a>.</li>
        <li><strong>HMRC:</strong> For income tax, inheritance tax, and any tax refunds due to the estate</li>
        <li><strong>DWP:</strong> To stop benefits and report any overpayments</li>
        <li><strong>DVLA:</strong> To cancel driving licence and transfer vehicle ownership</li>
        <li><strong>Passport Office:</strong> To cancel passport</li>
      </ul>

      <h2>Financial institutions</h2>
      <p>You'll need to contact all banks, building societies, and financial providers. Most have bereavement teams who can help. Have ready:</p>
      <ul>
        <li>Death certificate (original or certified copy)</li>
        <li>Grant of probate (once you have it)</li>
        <li>Your ID as executor</li>
        <li>The will or letters of administration</li>
      </ul>

      <h2>Property matters</h2>
      <ul>
        <li><strong>HM Land Registry:</strong> To transfer or sell property</li>
        <li><strong>Council tax:</strong> To close account or transfer</li>
        <li><strong>Utility companies:</strong> Gas, electricity, water, broadband</li>
        <li><strong>Insurance:</strong> Buildings and contents - don't let cover lapse on empty properties</li>
      </ul>

      <h2>Other organisations to notify</h2>
      <ul>
        <li>Employer or pension provider</li>
        <li>Private pension companies</li>
        <li>Insurance companies (life insurance, health insurance)</li>
        <li>Subscription services</li>
        <li>Memberships and clubs</li>
        <li>Professional bodies</li>
      </ul>

      <h2>Digital assets</h2>
      <p>Don't forget online accounts:</p>
      <ul>
        <li>Email providers</li>
        <li>Social media accounts</li>
        <li>Online shopping accounts</li>
        <li>Cloud storage</li>
        <li>Cryptocurrency (if any)</li>
      </ul>

      <h2>Getting professional help</h2>
      <p>If you need assistance, consider:</p>
      <ul>
        <li>Probate solicitors</li>
        <li>Probate specialists (non-solicitor)</li>
        <li>Help with sorting <a href="/resource/personal-belongings">personal belongings</a></li>
        <li>Accountants (for complex tax situations)</li>
        <li>Financial advisers (for investment portfolios)</li>
      </ul>
    `
  },
  'preparing-estate-accounts': {
    title: 'Understanding Estate Accounts',
    content: `
      <p>As an <a href="/resource/executors">executor</a>, you're responsible for keeping proper accounts of the estate. This is one of the final steps in the process of <a href="/resource/what-to-do-when-someone-dies">dealing with someone's death</a>. This isn't optional - you must be able to show beneficiaries exactly what came in and went out.</p>

      <h2>Why estate accounts matter</h2>
      <p>Good record-keeping protects you as executor:</p>
      <ul>
        <li>Beneficiaries can see the estate has been handled properly</li>
        <li>HMRC may ask to see accounts</li>
        <li>If anyone challenges the administration, you have proof</li>
        <li>It helps you track what's been done and what's still needed</li>
      </ul>

      <h2>What to include</h2>
      <h3>Assets (what came in)</h3>
      <ul>
        <li>Property sale proceeds</li>
        <li>Bank account balances</li>
        <li>Investment values</li>
        <li>Sale of personal possessions</li>
        <li>Money owed to the deceased</li>
        <li>Life insurance payouts (if payable to estate)</li>
        <li>Income received (rent, dividends, interest)</li>
      </ul>

      <h3>Liabilities (what went out)</h3>
      <ul>
        <li>Funeral costs</li>
        <li>Debts and bills</li>
        <li>Inheritance tax</li>
        <li><a href="/resource/apply-for-probate">Probate</a> fees</li>
        <li>Professional fees (solicitors, accountants)</li>
        <li>Estate agent fees</li>
        <li>Property maintenance costs</li>
        <li>Your executor expenses</li>
        <li>Legacies paid out</li>
      </ul>

      <h2>Format of accounts</h2>
      <p>Estate accounts don't need to follow a set format, but should clearly show:</p>
      <ol>
        <li>Opening position - all assets and liabilities at death</li>
        <li>Movements - money coming in and going out</li>
        <li>Closing position - what's left to distribute</li>
        <li>Distribution - who received what</li>
      </ol>

      <h2>Practical tips</h2>
      <ul>
        <li>Open a separate bank account for the estate</li>
        <li>Keep all receipts and paperwork</li>
        <li>Use a spreadsheet to track everything</li>
        <li>Note the date of every transaction</li>
        <li>Get receipts when you distribute assets to <a href="/beneficiary">beneficiaries</a></li>
      </ul>

      <h2>When to finalise accounts</h2>
      <p>Don't rush to finalise accounts. Wait until you're certain all liabilities have been paid. If you distribute everything and then a creditor appears, you could be personally liable. Most estates can be finalised within a year, but complex estates may take longer.</p>
    `
  },
  'do-i-need-an-lpa': {
    title: 'Do I Need an LPA?',
    content: `
      <p>A <a href="/resource/lasting-power-of-attorney">Lasting Power of Attorney</a> (LPA) isn't legally required, but it's one of the most important documents you can put in place. To understand the <a href="/resource/lpa-vs-will">difference between an LPA and a will</a>, see our comparison guide. Here's why you should seriously consider making one.</p>

      <h2>What happens without an LPA?</h2>
      <p>If you lose mental capacity and don't have an LPA:</p>
      <ul>
        <li>No one can access your bank accounts or pay your bills</li>
        <li>Your property can't be sold without court approval</li>
        <li>Your family can't make healthcare decisions for you</li>
        <li>Someone must apply to the Court of Protection to be appointed as your deputy</li>
      </ul>

      <h2>The Court of Protection route</h2>
      <p>Without an LPA, your family would need to apply to become your deputy. This means:</p>
      <ul>
        <li>A court application <a href="/resource/lpa-cost">costing</a> over £400 just to apply</li>
        <li>Waiting months for the application to be processed</li>
        <li>The court decides who becomes deputy - not you</li>
        <li>Annual supervision fees and reporting requirements</li>
        <li>More restrictions on what your deputy can do</li>
        <li>Stress and expense at an already difficult time</li>
      </ul>

      <h2>Who needs an LPA most?</h2>
      <p>Everyone should consider an LPA, but it's especially important if you:</p>
      <ul>
        <li>Own property</li>
        <li>Have savings or investments</li>
        <li>Run a business</li>
        <li>Have strong views about your medical care</li>
        <li>Want to ensure your affairs are managed by someone you trust</li>
        <li>Have elderly parents (they should have LPAs too)</li>
      </ul>

      <h2>Two types of LPA</h2>
      <p>You can make one or both types:</p>
      <ul>
        <li><strong>Property and Financial Affairs:</strong> Covers money, property, bills, investments</li>
        <li><strong>Health and Welfare:</strong> Covers medical treatment, care arrangements, daily routine</li>
      </ul>

      <h2>When to make an LPA</h2>
      <p>The time to <a href="/resource/make-an-lpa">make an LPA</a> is now, while you have mental capacity. You cannot make an LPA once you've lost capacity - that's precisely when you'd need it. Don't wait until it's too late.</p>
    `
  },
  'make-an-lpa': {
    title: 'How Do I Make an LPA?',
    content: `
      <p>Making a <a href="/resource/lasting-power-of-attorney">Lasting Power of Attorney</a> is a straightforward process, though there are several steps to follow. Here's what's involved.</p>

      <h2>Step 1: Decide what type of LPA you need</h2>
      <p>You can make:</p>
      <ul>
        <li>Property and Financial Affairs LPA only</li>
        <li>Health and Welfare LPA only</li>
        <li>Both types (recommended)</li>
      </ul>

      <h2>Step 2: <a href="/resource/choosing-attorneys">Choose your attorneys</a></h2>
      <p>Decide who you want to act for you. You can appoint:</p>
      <ul>
        <li>One attorney</li>
        <li>Multiple attorneys acting jointly (must all agree on every decision)</li>
        <li>Multiple attorneys acting jointly and severally (can act together or independently)</li>
        <li>Replacement attorneys (in case your first choices can't act)</li>
      </ul>

      <h2>Step 3: Complete the LPA forms</h2>
      <p>You can complete the forms:</p>
      <ul>
        <li>Online through the Office of the Public Guardian website</li>
        <li>Using our LPA service (we guide you through the process)</li>
        <li>With a solicitor's help</li>
      </ul>

      <h2>Step 4: Choose a certificate provider</h2>
      <p>Someone must certify that you understand the LPA and aren't being pressured. This person must be either:</p>
      <ul>
        <li>Someone who has known you personally for at least 2 years, OR</li>
        <li>A professional (doctor, solicitor, social worker, etc.)</li>
      </ul>

      <h2>Step 5: Sign the LPA</h2>
      <p>The LPA must be signed in a specific order:</p>
      <ol>
        <li>You sign first</li>
        <li>The certificate provider signs</li>
        <li>Your attorneys sign</li>
      </ol>

      <h2>Step 6: Register the LPA</h2>
      <p>An LPA must be registered with the Office of the Public Guardian before it can be used. Registration currently <a href="/resource/lpa-cost">costs £82 per LPA</a> and takes about 10 weeks. You can apply for fee exemptions or reductions if you're on certain benefits or have a low income.</p>

      <h2>When can the LPA be used?</h2>
      <p>A Property and Financial Affairs LPA can be used as soon as it's registered (with your permission). A Health and Welfare LPA can only be used when you lack capacity to make specific decisions yourself. To understand <a href="/resource/lpa-vs-will">how an LPA differs from a will</a>, see our comparison guide.</p>
    `
  },
  'attorneys': {
    title: 'What is an Attorney?',
    content: `
      <p>An attorney (in the context of a <a href="/resource/lasting-power-of-attorney">Lasting Power of Attorney</a>) is someone you appoint to make decisions on your behalf if you become unable to make them yourself. This is different from a lawyer - in this context, "attorney" simply means your chosen representative.</p>

      <h2>What can an attorney do?</h2>
      <p>It depends on which type of LPA you've made:</p>

      <h3>Property and Financial Affairs Attorney</h3>
      <ul>
        <li>Manage your bank accounts</li>
        <li>Pay bills and debts</li>
        <li>Collect benefits or pension</li>
        <li>Buy or sell property</li>
        <li>Manage investments</li>
        <li>Deal with your tax affairs</li>
      </ul>

      <h3>Health and Welfare Attorney</h3>
      <ul>
        <li>Decide where you live</li>
        <li>Make decisions about your daily care</li>
        <li>Consent to or refuse medical treatment</li>
        <li>Decide about life-sustaining treatment (if you've given them this power)</li>
      </ul>

      <h2>Attorney's duties</h2>
      <p>Attorneys have legal duties, including:</p>
      <ul>
        <li>Acting in your best interests at all times</li>
        <li>Following the principles of the Mental Capacity Act</li>
        <li>Keeping your money and assets separate from their own</li>
        <li>Keeping records and accounts</li>
        <li>Not taking advantage of their position</li>
      </ul>

      <h2>What happens if an attorney acts wrongly?</h2>
      <p>Attorneys can be held accountable. If they misuse their powers:</p>
      <ul>
        <li>They can be removed by the Court of Protection</li>
        <li>They may have to repay money they've misused</li>
        <li>In serious cases, they can face criminal prosecution</li>
      </ul>

      <h2>Can an attorney be paid?</h2>
      <p>Attorneys can claim reasonable out-of-pocket expenses. Professional attorneys can charge for their services, but lay attorneys (family and friends) aren't usually paid beyond expenses. See our guide on <a href="/resource/choosing-attorneys">choosing attorneys</a>.</p>
    `
  },
  'choosing-attorneys': {
    title: 'Choosing Attorneys',
    content: `
      <p>Choosing who to appoint as your attorney is one of the most important decisions you'll make. These people will have significant power over your life and finances, so choose carefully. Learn more about <a href="/resource/attorneys">what an attorney does</a>.</p>

      <h2>Essential qualities</h2>
      <p>Look for someone who is:</p>
      <ul>
        <li><strong>Trustworthy:</strong> This is non-negotiable. They'll have access to everything</li>
        <li><strong>Reliable:</strong> They need to be available when needed</li>
        <li><strong>Capable:</strong> Able to handle financial or care decisions</li>
        <li><strong>Willing:</strong> Being an attorney is a big responsibility - always ask first</li>
        <li><strong>Likely to be around:</strong> Consider their age, health, and circumstances</li>
      </ul>

      <h2>How many attorneys?</h2>
      <p>You can appoint one or more attorneys. Consider:</p>
      <ul>
        <li><strong>One attorney:</strong> Simpler, but what if they can't act?</li>
        <li><strong>Two or more:</strong> Provides backup and shared responsibility</li>
        <li><strong>Always appoint replacements:</strong> In case your first choices can't act</li>
      </ul>

      <h2>Joint or joint and several?</h2>
      <p>If you appoint multiple attorneys, decide how they should work:</p>
      <ul>
        <li><strong>Jointly:</strong> Must all agree on every decision. Safer, but slower and what happens if one can't act?</li>
        <li><strong>Jointly and severally:</strong> Can act together or independently. More flexible, but requires trust in each attorney individually</li>
        <li><strong>Mixed:</strong> You can require joint decisions for big matters, but allow individual decisions for routine things</li>
      </ul>

      <h2>Different attorneys for different LPAs</h2>
      <p>You don't have to use the same attorneys for both types of LPA. Consider:</p>
      <ul>
        <li>Who's best at financial matters? (Property and Financial Affairs)</li>
        <li>Who understands your values and wishes? (Health and Welfare)</li>
        <li>Who do you trust with medical decisions?</li>
      </ul>

      <h2>People to avoid</h2>
      <ul>
        <li>Anyone who has financial problems of their own</li>
        <li>Anyone you don't completely trust</li>
        <li>Anyone who isn't comfortable with the role</li>
        <li>Anyone too old or in poor health</li>
        <li>Bankrupt individuals (can't act for Property and Financial Affairs)</li>
      </ul>
      <p>Once you've decided, find out <a href="/resource/make-an-lpa">how to make an LPA</a> and what it will <a href="/resource/lpa-cost">cost</a>.</p>
    `
  },
  'lpa-cost': {
    title: 'How Much Does an LPA Cost?',
    content: `
      <p>The cost of <a href="/resource/make-an-lpa">making a Lasting Power of Attorney</a> depends on how you go about it. Here's a breakdown of what you can expect to pay.</p>

      <h2>Registration fee</h2>
      <p>Every LPA must be registered with the Office of the Public Guardian. The registration fee is currently <strong>£82 per LPA</strong>. So if you're making both types (Property and Financial Affairs, and Health and Welfare), that's £164 in registration fees.</p>

      <h2>Fee exemptions and reductions</h2>
      <p>You may pay less or nothing if you:</p>
      <ul>
        <li>Receive certain means-tested benefits (e.g., Universal Credit, Income Support) - you may be exempt entirely</li>
        <li>Have a gross annual income below £12,000 - you may get a 50% reduction</li>
      </ul>

      <h2>DIY (do it yourself)</h2>
      <p>If you complete the forms yourself using the government's online service, you only pay the registration fee. However, mistakes can be costly - if your LPA is rejected, you'll need to start again and pay the fee again.</p>

      <h2>Solicitor costs</h2>
      <p>Using a solicitor typically costs:</p>
      <ul>
        <li>£150-£500 per LPA, plus VAT</li>
        <li>Often cheaper if you do both types together</li>
        <li>May include registration fee or charge it separately</li>
      </ul>

      <h2>Online LPA services</h2>
      <p>Services like ours offer a middle ground - cheaper than solicitors but with guidance to help avoid mistakes. Prices vary but are typically £50-£150 per LPA plus the registration fee.</p>

      <h2>Is it worth the cost?</h2>
      <p>Compare the cost of making an LPA with the cost of not having one:</p>
      <ul>
        <li>Court of Protection deputy application: over £400</li>
        <li>Annual supervision fee: £320</li>
        <li>Plus the time, stress, and uncertainty</li>
      </ul>
      <p>Making LPAs while you have capacity is significantly cheaper than the alternative. Not sure if you need one? Read our guide on <a href="/resource/do-i-need-an-lpa">whether you need an LPA</a>.</p>

      <h2>Saving money</h2>
      <ul>
        <li>Make both LPAs together - often discounted</li>
        <li>Make LPAs with your spouse at the same time</li>
        <li>Check if you qualify for fee exemptions</li>
        <li>Use an online service rather than a high-street solicitor</li>
      </ul>
    `
  },
  'i-am-getting-married-do-i-need-a-will': {
    title: 'Getting Married - Do I Need a Will?',
    content: `
      <p>If you're getting married, congratulations! But before you walk down the aisle, there's something important you need to know about wills.</p>

      <h2>Marriage revokes your will</h2>
      <p>Here's the crucial point: <strong>getting married automatically cancels any existing will you have</strong>. This is the law in England and Wales. When you marry, any will you made before becomes invalid.</p>

      <h2>What this means</h2>
      <p>If you die after getting married without <a href="/resource/how-to-change-your-will">making a new will</a>:</p>
      <ul>
        <li>Your estate will be distributed under the <a href="/resource/dying-without-a-will-intestacy">intestacy rules</a></li>
        <li>Your spouse will inherit, but maybe not everything</li>
        <li>If you have children from a previous relationship, they may inherit less than you intended</li>
        <li>Any gifts you'd made in your old will won't happen</li>
      </ul>

      <h2>Making a will before marriage</h2>
      <p>You can make a will "in contemplation of marriage" - this means it won't be revoked when you marry. To do this, the will must specifically state that it's made in expectation of your marriage to a named person.</p>

      <h2>After you're married</h2>
      <p>If you're already married, you should have a will that:</p>
      <ul>
        <li>Reflects your wishes as a married couple</li>
        <li>Takes advantage of tax reliefs available to spouses</li>
        <li>Considers what happens if you both die together</li>
        <li>Protects any children from previous relationships</li>
      </ul>

      <h2>Mirror wills for couples</h2>
      <p>Many married couples choose <a href="/a-pair-of-wills-or-mirror-wills">mirror wills</a> - matching wills that leave everything to each other, then to children or other beneficiaries if both have died. These are simpler and more cost-effective than having completely different wills.</p>

      <h2>Things to discuss</h2>
      <ul>
        <li>Who inherits if you both die?</li>
        <li>Do you want to leave anything to people outside your marriage?</li>
        <li>Who should look after any children?</li>
        <li>Who will be your executors?</li>
        <li>Have you considered making a <a href="/resource/lasting-power-of-attorney">Lasting Power of Attorney</a> at the same time?</li>
      </ul>
    `
  },
  'separated-from-partner-divorce-wills': {
    title: 'Separated from Partner - Do I Need a New Will?',
    content: `
      <p>Relationship breakdown is one of the most important triggers for <a href="/5-reasons-to-update-your-will">updating your will</a>. Whether you're separating, divorcing, or dissolving a civil partnership, your will needs attention.</p>

      <h2>Separation - what happens to your will</h2>
      <p>If you're separated but not yet divorced, your existing will remains valid. This might not be what you want:</p>
      <ul>
        <li>Your estranged spouse may still inherit everything</li>
        <li>They may still be named as your executor</li>
        <li>They may still be your children's guardian</li>
      </ul>
      <p>Separation alone doesn't change your will - you need to <a href="/resource/do-i-need-to-make-a-will">make a new one</a>.</p>

      <h2>Divorce - what changes automatically</h2>
      <p>When your divorce becomes final (decree absolute), the law treats your will as if your ex-spouse has died. This means:</p>
      <ul>
        <li>Any gifts to them fail</li>
        <li>They're removed as executor</li>
        <li>The rest of your will remains valid</li>
      </ul>

      <h2>Why you still need a new will</h2>
      <p>Even though divorce removes your ex from your will, you should still <a href="/resource/how-to-change-your-will">make a new one</a> because:</p>
      <ul>
        <li>The intestacy rules may now apply to part of your estate</li>
        <li>Your wishes have probably changed</li>
        <li>You may have new people you want to benefit</li>
        <li>Your children's needs may have changed</li>
        <li>You might want different executors</li>
      </ul>

      <h2>Don't wait for decree absolute</h2>
      <p>The divorce process can take months or years. Make a new will as soon as you separate - don't risk dying during this period with an outdated will.</p>

      <h2>Children and guardianship</h2>
      <p>If you have children with your ex-partner, think carefully about guardianship. Your ex will usually have parental responsibility regardless of your will, but you should still name a <a href="/resource/legal-guardians">guardian</a> in case you're both unavailable.</p>

      <h2>Financial orders</h2>
      <p>If your divorce settlement includes provisions about what happens when you die (such as life insurance policies or pension nominations), make sure your new will is consistent with these obligations.</p>
    `
  },
  'legal-guardians': {
    title: 'Guardianship and Wills',
    content: `
      <p>If you have children under 18, naming a guardian in your will is one of the most important things you can do. If you haven't yet, <a href="/resource/do-i-need-to-make-a-will">make a will</a> today. A guardian is the person who would look after your children if you're no longer able to.</p>

      <h2>Why guardianship matters</h2>
      <p>Without a named guardian:</p>
      <ul>
        <li>The court decides who looks after your children</li>
        <li>Family members may disagree about what should happen</li>
        <li>Children might end up with someone you wouldn't have chosen</li>
        <li>The process can be stressful and uncertain for your children</li>
      </ul>

      <h2>Who can be a guardian?</h2>
      <p>You can appoint anyone over 18 who you trust to raise your children. Consider:</p>
      <ul>
        <li>Family members (siblings, parents, other relatives)</li>
        <li>Close friends</li>
        <li>You can appoint more than one guardian to act together</li>
        <li>You can name different guardians for different children if appropriate</li>
      </ul>

      <h2>What to consider when choosing</h2>
      <ul>
        <li><strong>Values:</strong> Will they raise your children with similar values?</li>
        <li><strong>Practicalities:</strong> Do they have space? Are they nearby?</li>
        <li><strong>Age:</strong> Will they be able to care for children into adulthood?</li>
        <li><strong>Existing family:</strong> How will your children fit in? This is especially important in <a href="/resource/blended-families">blended families</a></li>
        <li><strong>Financial situation:</strong> Can they afford to care for more children? (You can help by leaving money)</li>
        <li><strong>Relationship:</strong> Do your children know and like them?</li>
        <li><strong>Willingness:</strong> Have they agreed to take on this responsibility?</li>
      </ul>

      <h2>What about my ex-partner?</h2>
      <p>If your children's other parent has parental responsibility (which is usually the case), they will generally become the sole carer if you die. Your guardian would only step in if both parents are unavailable. Even so, naming a guardian is important as a backup and gives the court guidance about your wishes.</p>

      <h2>Money for guardians</h2>
      <p>Consider whether your guardians will need financial support to raise your children. You can:</p>
      <ul>
        <li>Leave money specifically for your <a href="/children-and-gifts-in-wills">children's care</a></li>
        <li>Set up a <a href="/resource/trusts-in-wills">trust</a> to manage money until children are older</li>
        <li>Take out life insurance to provide for your children</li>
      </ul>
    `
  },
  'blended-families': {
    title: 'Blended Families and Wills',
    content: `
      <p>Blended families - where one or both partners have children from previous relationships - face unique challenges when it comes to wills and inheritance. Getting this wrong can cause family conflict and unintended consequences.</p>

      <h2>The challenges</h2>
      <p>In a blended family, you're trying to balance:</p>
      <ul>
        <li>Providing for your current spouse or partner</li>
        <li>Ensuring your own children inherit from you</li>
        <li>Potentially providing for <a href="/resource/wills-and-stepchildren">stepchildren</a> you've helped raise</li>
        <li>Being fair to everyone without creating resentment</li>
      </ul>

      <h2>What can go wrong</h2>
      <p>Common problems include:</p>
      <ul>
        <li><strong>Sideways disinheritance:</strong> You leave everything to your spouse, who later leaves it all to their children - your children get nothing</li>
        <li><strong>Stepchildren overlooked:</strong> Stepchildren don't automatically inherit under <a href="/resource/dying-without-a-will-intestacy">intestacy rules</a></li>
        <li><strong>Family conflict:</strong> Different ideas about fair distribution</li>
        <li><strong>Home ownership issues:</strong> Surviving spouse needs to live in the home, but children want their inheritance</li>
      </ul>

      <h2>Solutions to consider</h2>
      <h3>Life interest trusts</h3>
      <p>A <a href="/resource/trusts-in-wills">life interest trust</a> lets you leave your spouse the right to live in your home and receive income from your estate during their lifetime, with the capital then passing to your children. This provides for your spouse while protecting your children's inheritance.</p>

      <h3>Tenants in common</h3>
      <p>If you own your home jointly, consider holding it as tenants in common rather than joint tenants. This means your share can go to whoever you choose in your will, rather than automatically passing to the survivor.</p>

      <h3>Specific gifts</h3>
      <p>Leave specific items or amounts to your children directly, with the remainder going to your spouse. This guarantees your children receive something.</p>

      <h2>Communication is key</h2>
      <p>The most successful blended family arrangements involve open discussions. Consider:</p>
      <ul>
        <li>Talking to your partner about your respective wishes</li>
        <li>Being transparent with adult children about your plans</li>
        <li>Explaining your reasoning in a letter (kept with your will)</li>
        <li>Appointing <a href="/resource/legal-guardians">guardians</a> for any minor children</li>
      </ul>
    `
  },
  'wills-and-stepchildren': {
    title: 'Wills and Stepchildren',
    content: `
      <p>Stepchildren occupy an unusual position in inheritance law. In <a href="/resource/blended-families">blended families</a>, many step-parents think of their stepchildren as their own, but the law doesn't see it that way unless you take specific action.</p>

      <h2>The legal position</h2>
      <p>Unless you've formally adopted your stepchildren:</p>
      <ul>
        <li>They have no automatic right to inherit from you</li>
        <li>They're not included in the <a href="/resource/dying-without-a-will-intestacy">intestacy rules</a></li>
        <li>If you die without a will, they receive nothing from your estate</li>
        <li>This is true even if you've raised them from a young age</li>
      </ul>

      <h2>If you want stepchildren to inherit</h2>
      <p>You must make a will that specifically includes them. You can:</p>
      <ul>
        <li>Leave them specific gifts of money or possessions</li>
        <li>Include them as beneficiaries alongside your biological children</li>
        <li>Leave them a share of your residuary estate</li>
        <li>Treat them exactly the same as biological children if you wish</li>
        <li>Set up a <a href="/resource/trusts-in-wills">trust</a> to manage their inheritance until they reach a certain age</li>
      </ul>

      <h2>Considerations</h2>
      <p>Think about:</p>
      <ul>
        <li><strong>Fairness vs equality:</strong> Equal shares may not always be fair - consider circumstances</li>
        <li><strong>Age of stepchildren:</strong> Adult stepchildren may need less than young ones</li>
        <li><strong>Other inheritances:</strong> Will they inherit from their biological parents?</li>
        <li><strong>Your relationship:</strong> Are you close? Have you contributed to their upbringing?</li>
        <li><strong>Your partner's wishes:</strong> Discuss together and try to coordinate your wills - perhaps with <a href="/a-pair-of-wills-or-mirror-wills">mirror wills</a></li>
      </ul>

      <h2>Adoption</h2>
      <p>If you adopt your stepchildren, they become your legal children. They would then:</p>
      <ul>
        <li>Inherit under intestacy rules if you die without a will</li>
        <li>Have the same legal status as biological children</li>
        <li>Lose their automatic inheritance rights from their biological parent (unless that parent's will specifically includes them)</li>
      </ul>

      <h2>Inheritance (Provision for Family and Dependants) Act</h2>
      <p>Stepchildren who were financially dependent on you may be able to make a claim against your estate under this Act if you don't provide for them. However, relying on this is uncertain and expensive - it's far better to make your wishes clear in a will. You should also consider naming <a href="/resource/legal-guardians">legal guardians</a> for any minor children.</p>
    `
  },
  'register-a-death': {
    title: 'How to Register a Death',
    content: `
      <p>Registering a death is one of the first things that needs to happen after someone dies. It must be done within 5 days of the death (or 8 days in Scotland).</p>

      <h2>Who can register a death?</h2>
      <p>The death can be registered by:</p>
      <ul>
        <li>A relative of the deceased</li>
        <li>Someone present at the death</li>
        <li>The occupier of the building where the death occurred</li>
        <li>The person <a href="/resource/arranging-a-funeral">arranging the funeral</a> (though relatives take priority)</li>
      </ul>

      <h2>Where to register</h2>
      <p>You must register the death at the register office for the area where the person died, not where they lived. You can make an appointment online or by phone.</p>

      <h2>What to bring</h2>
      <ul>
        <li>The medical certificate of cause of death (from the doctor or hospital)</li>
        <li>If possible, the deceased's birth certificate, marriage certificate, and NHS medical card</li>
        <li>Proof of the deceased's address</li>
        <li>Any benefits documentation</li>
      </ul>

      <h2>What happens at the appointment</h2>
      <p>The registrar will ask about:</p>
      <ul>
        <li>The deceased's full name and any previous names</li>
        <li>Date and place of birth</li>
        <li>Last address</li>
        <li>Occupation (and spouse's occupation if married)</li>
        <li>Whether they were receiving a pension or benefits</li>
        <li>Date of birth of surviving spouse (if applicable)</li>
      </ul>

      <h2>What you'll receive</h2>
      <p>After registration, you'll receive:</p>
      <ul>
        <li>A certificate for burial or cremation (the "green form") - free</li>
        <li>A certificate of registration (BD8 form) for benefits - free</li>
        <li>Death certificates - currently £11 each. Order several - you'll need them for <a href="/resource/do-i-need-probate">probate</a> and other purposes</li>
      </ul>

      <h2>Tell Us Once service</h2>
      <p>The registrar can set up the Tell Us Once service, which notifies multiple government departments about the death in one go. This includes HMRC, DWP, DVLA, and the Passport Office. It saves you having to contact each organisation separately. See our <a href="/resource/probate-directory">Probate Directory</a> for a full list of organisations you may need to contact.</p>
      <p>Registering the death is just one of several steps you will need to take. For a <a href="/resource/what-to-do-when-someone-dies">complete checklist of what to do when someone dies</a>, see our full guide.</p>
    `
  },
  'death-of-a-spouse': {
    title: 'Death of a Spouse',
    content: `
      <p>Losing a spouse is devastating. While grieving, you'll also need to deal with practical and legal matters. Here's a guide to help you through this difficult time. For a broader overview, see our checklist on <a href="/resource/what-to-do-when-someone-dies">what to do when someone dies</a>.</p>

      <h2>Immediate steps</h2>
      <ul>
        <li>Get the medical certificate of cause of death from the doctor</li>
        <li><a href="/resource/register-a-death">Register the death</a> within 5 days</li>
        <li>Arrange the funeral</li>
        <li>Find the will (if there is one)</li>
        <li>Start notifying organisations</li>
        <li>Begin sorting <a href="/resource/personal-belongings">personal belongings</a> when you feel ready</li>
      </ul>

      <h2>Financial matters</h2>
      <h3>Joint accounts</h3>
      <p>Joint bank accounts usually pass automatically to the surviving holder. Notify the bank - they may freeze the account temporarily while updating records, so ensure you have access to other funds.</p>

      <h3>Sole accounts</h3>
      <p>You can't access your spouse's sole accounts until <a href="/resource/do-i-need-probate">probate</a> is granted. Banks may release small amounts for funeral expenses.</p>

      <h3>Pensions</h3>
      <p>Contact all pension providers. You may be entitled to:</p>
      <ul>
        <li>Spouse's pension or survivor's pension</li>
        <li>Lump sum death benefits</li>
        <li>State pension based on spouse's contributions</li>
      </ul>

      <h3>Benefits</h3>
      <p>You may be eligible for:</p>
      <ul>
        <li>Bereavement Support Payment</li>
        <li>Widowed Parent's Allowance (if you have children)</li>
        <li>Help with funeral costs if on low income</li>
      </ul>

      <h2>Property</h2>
      <p>What happens to your home depends on how it was owned:</p>
      <ul>
        <li><strong>Joint tenants:</strong> The property passes automatically to you</li>
        <li><strong>Tenants in common:</strong> Your spouse's share passes according to their will or intestacy</li>
      </ul>

      <h2>Inheritance</h2>
      <p>Under <a href="/resource/dying-without-a-will-intestacy">intestacy rules</a>, a surviving spouse receives a substantial share of the estate. If there's a will, you inherit whatever your spouse left you. Spouses have strong rights to make claims against the estate if not adequately provided for.</p>

      <h2>Your own will</h2>
      <p>This is often overlooked but important: if your spouse was a beneficiary or executor in your will, you should update it. Your circumstances have fundamentally changed, and your will should reflect this.</p>

      <h2>Getting support</h2>
      <p>Don't try to do everything alone. Consider getting help from:</p>
      <ul>
        <li>Family and friends</li>
        <li>A solicitor (especially for complex estates)</li>
        <li>Bereavement support services</li>
        <li>Citizens Advice</li>
      </ul>
    `
  },
  'arranging-a-funeral': {
    title: 'Arranging a Funeral',
    content: `
      <p>Arranging a funeral while grieving is difficult. It is one of the many things you will need to handle — for a full overview, see our guide on <a href="/resource/what-to-do-when-someone-dies">what to do when someone dies</a>. Here's practical guidance to help you through the process.</p>

      <h2>First steps</h2>
      <ul>
        <li>Check if the deceased left any funeral wishes (in their will or elsewhere) - the <a href="/resource/executors">executor</a> is usually responsible for this</li>
        <li><a href="/resource/register-a-death">Register the death</a> - you'll need the green form before a funeral can proceed</li>
        <li>Choose a funeral director or decide to arrange it yourself</li>
        <li>Decide between burial and cremation</li>
      </ul>

      <h2>Using a funeral director</h2>
      <p>Most people use a funeral director. They will:</p>
      <ul>
        <li>Collect and care for the deceased</li>
        <li>Help you plan the service</li>
        <li>Handle paperwork and bookings</li>
        <li>Provide a hearse and other vehicles</li>
        <li>Coordinate everything on the day</li>
      </ul>
      <p>Get a detailed written quote before agreeing. Funeral costs vary significantly.</p>

      <h2>Costs to consider</h2>
      <p>Funeral costs typically include:</p>
      <ul>
        <li>Funeral director's fees</li>
        <li>Cremation fees or burial plot costs</li>
        <li>Doctor's fees (for cremation)</li>
        <li>Minister or celebrant</li>
        <li>Flowers</li>
        <li>Venue for wake or reception</li>
        <li>Headstone or memorial</li>
        <li>Newspaper announcements</li>
      </ul>

      <h2>Paying for the funeral</h2>
      <p>Funeral costs can be paid from:</p>
      <ul>
        <li>The deceased's estate (banks may release funds before <a href="/resource/do-i-need-probate">probate</a> for funeral expenses)</li>
        <li>Pre-paid funeral plans</li>
        <li>Funeral Expenses Payment (if you're on certain benefits)</li>
        <li>Life insurance payouts</li>
        <li>Personal funds (reimbursed from estate later)</li>
      </ul>

      <h2>Types of funeral</h2>
      <ul>
        <li><strong>Traditional funeral:</strong> Full service at church or crematorium</li>
        <li><strong>Direct cremation or burial:</strong> Simplest option, no ceremony, lower cost</li>
        <li><strong>Woodland burial:</strong> Environmentally friendly option in natural burial grounds</li>
        <li><strong>Celebration of life:</strong> Less formal, focused on celebrating the person</li>
      </ul>

      <h2>The order of service</h2>
      <p>Typical elements include:</p>
      <ul>
        <li>Music - entrance, during service, exit</li>
        <li>Readings - poems, religious texts, personal choices</li>
        <li>Eulogy - a tribute to the deceased</li>
        <li>Prayers or reflection (depending on the type of service)</li>
        <li>Committal - the final farewell</li>
      </ul>
    `
  },
  'personal-belongings': {
    title: 'Dealing with Personal Belongings',
    content: `
      <p>Sorting through a loved one's personal belongings is emotionally difficult. It is just one part of the wider process — see our guide on <a href="/resource/what-to-do-when-someone-dies">what to do when someone dies</a> for the full picture. There's no rush - take your time and don't feel pressured to clear everything immediately.</p>

      <h2>What does the will say?</h2>
      <p>Check the <a href="/resource/do-i-need-to-make-a-will">will</a> first. It may include:</p>
      <ul>
        <li>Specific gifts of particular items to named people</li>
        <li>A general gift of "personal possessions" or "chattels" to someone</li>
        <li>Instructions about what should happen to everything else</li>
      </ul>

      <h2>If there's no will</h2>
      <p>Personal belongings form part of the estate and pass according to intestacy rules - usually to the <a href="/resource/death-of-a-spouse">spouse</a> or closest relatives.</p>

      <h2>Dealing with specific gifts</h2>
      <p>If the will leaves specific items to named people, the executor should:</p>
      <ul>
        <li>Make a list of all specific gifts</li>
        <li>Locate each item</li>
        <li>Contact beneficiaries to arrange collection or delivery</li>
        <li>Keep records of what's been distributed</li>
      </ul>

      <h2>Valuing belongings</h2>
      <p>For <a href="/resource/do-i-need-probate">probate</a> purposes, you need to value personal possessions. For most household contents:</p>
      <ul>
        <li>Be realistic - secondhand value is usually low</li>
        <li>Clothing, everyday furniture, and household items rarely have significant value</li>
        <li>Get professional valuations for antiques, art, jewellery, or collections</li>
        <li>Keep evidence of valuations</li>
      </ul>

      <h2>Options for belongings</h2>
      <ul>
        <li><strong>Family:</strong> Offer items to family members first</li>
        <li><strong>Charity shops:</strong> Good for clothing and household items</li>
        <li><strong>Auction:</strong> For valuable items or large quantities</li>
        <li><strong>House clearance companies:</strong> For clearing a whole property</li>
        <li><strong>Specialist dealers:</strong> For collections (books, stamps, coins, etc.)</li>
      </ul>

      <h2>Sentimental items</h2>
      <p>Some items have sentimental rather than monetary value. Consider:</p>
      <ul>
        <li>Photographs - could copies be made for different family members?</li>
        <li>Letters and documents - these may be precious family history</li>
        <li>Small mementos - even inexpensive items can be meaningful</li>
        <li>Ask family members if there's anything specific they'd like</li>
      </ul>

      <h2>Take your time</h2>
      <p>Unless there's a pressing reason (such as needing to sell a property), there's no deadline for clearing belongings. Many people find it helpful to deal with things gradually, or to ask family members or friends to help.</p>
    `
  },
  'cost-of-making-a-will': {
    title: 'How Much Does It Cost to Make a Will?',
    content: `
      <p>One of the most common questions people ask before making a will is: how much will it cost? The answer depends on how you go about it. In this guide we break down the different options available in the UK, what you get for your money, and why the cheapest option is not always the best value.</p>

      <h2>Our pricing</h2>
      <p>At Make a Will, we offer solicitor-checked wills at straightforward, transparent prices:</p>
      <ul>
        <li><strong>Single will:</strong> £90</li>
        <li><strong>Mirror wills (for couples):</strong> £135</li>
        <li><strong>Will + <a href="/resource/lpa-vs-will">LPA</a> bundle:</strong> £249</li>
      </ul>
      <p>You can <a href="/make-your-will">get started with your will here</a>. Every will we produce is checked by a qualified solicitor, and our price includes <a href="/lifetime-updates">lifetime updates</a> — so you can change your will whenever your circumstances change, at no extra cost.</p>

      <h2>Traditional solicitor costs</h2>
      <p>If you visit a high-street solicitor to have your will drawn up, you can expect to pay between £150 and £500 for a simple, straightforward will. If your estate is more complex — for example, if you own a business, have property abroad, or need trusts — the cost can rise to £500 to £1,500 or even more. Some solicitors charge by the hour, which makes it difficult to predict the final bill in advance.</p>

      <h2>Online will services</h2>
      <p>There are many online will-writing services in the UK, with prices typically ranging from £20 to £150. However, most of these services do not include a solicitor check. That means your will is generated by software but never reviewed by a qualified legal professional. While the will may be technically valid, errors and omissions can go unnoticed — and these can cause serious problems after your death.</p>
      <p>We are the only online will service where every will is <a href="/resource/what-is-a-solicitor-checked-will">checked by a qualified solicitor</a>. This gives you the convenience and affordability of an online service, combined with the peace of mind that comes from professional legal review.</p>

      <h2>DIY wills</h2>
      <p>You can buy a blank will form from a stationery shop for just a few pounds, or download a template online for free. While this is the cheapest option, it is also the riskiest. Common mistakes with DIY wills include:</p>
      <ul>
        <li><strong>Invalid witnessing</strong> — the rules about <a href="/resource/who-can-witness-a-will">who can witness a will</a> are strict, and getting them wrong can invalidate the entire document.</li>
        <li><strong>Unclear or ambiguous wording</strong> — legal language exists for a reason. Vague phrases can lead to disputes about what you actually meant.</li>
        <li><strong>Missing important clauses</strong> — a proper will includes a revocation clause, a residuary estate clause, and other provisions that a DIY form may not prompt you to include.</li>
      </ul>
      <p>The money you save on a DIY will can easily be dwarfed by the legal costs your family faces if the will turns out to be invalid or contested.</p>

      <h2>What affects the cost of a will?</h2>
      <p>Several factors can influence how much you pay:</p>
      <ul>
        <li><strong>Complexity:</strong> A straightforward will leaving everything to your spouse is simpler (and cheaper) than one involving multiple trusts or conditions.</li>
        <li><strong>Trusts:</strong> If you need to set up <a href="/resource/trusts-in-wills">trusts</a> in your will — for example, to protect assets for young children or in a <a href="/resource/blended-families">blended family</a> — this adds complexity.</li>
        <li><strong>Property abroad:</strong> Assets in other countries may need separate legal advice.</li>
        <li><strong>Business assets:</strong> Business owners often need specific provisions to protect their business and partners.</li>
      </ul>

      <h2>Is it worth paying for a will?</h2>
      <p>Absolutely. The cost of NOT having a will can be far greater than the cost of making one. If you die without a valid will, your estate is distributed according to <a href="/resource/dying-without-a-will-intestacy">intestacy rules</a>, which may not reflect your wishes at all. Unmarried partners could be left with nothing. Family disputes can arise. And there may be inheritance tax inefficiencies that a well-drafted will could have avoided.</p>
      <p>For the price of a meal out, you can have a professionally checked will that protects your family and gives you complete peace of mind. And if you are not completely satisfied, we offer a full <a href="/money-back-guarantee">money-back guarantee</a>.</p>

      <h2>Get started</h2>
      <p>Making a will does not have to be expensive or complicated. Our guided online questionnaire takes about 15 minutes, and every will is reviewed by a solicitor before it reaches you. <a href="/make-your-will">Start your will today</a> from just £90.</p>
    `
  },
  'inheritance-tax-guide': {
    title: 'Inheritance Tax: Thresholds, Rates and How to Reduce It',
    content: `
      <p>Inheritance tax (IHT) is a tax on the estate of someone who has died. It is paid out of the estate before anything is distributed to beneficiaries. Many people worry about inheritance tax, but with good planning — including a well-drafted will — it is often possible to reduce or even eliminate the amount payable. This guide explains how inheritance tax works in the UK and what you can do about it.</p>

      <h2>How much is inheritance tax?</h2>
      <p>The standard rate of inheritance tax is <strong>40%</strong>. However, this only applies to the value of your estate that exceeds certain thresholds. There is also a reduced rate of <strong>36%</strong> if you leave at least 10% of your net estate to charity — one of several reasons why <a href="/charity-gifts-in-wills-how-and-why">charitable gifts in wills</a> can be a smart move.</p>

      <h2>Inheritance tax thresholds</h2>
      <p>Everyone has a tax-free allowance called the <strong>nil rate band</strong>, which is currently <strong>£325,000</strong>. This means the first £325,000 of your estate is not taxed.</p>
      <p>If you leave your home to your children or grandchildren, you may also qualify for the <strong>residence nil rate band</strong>, which is worth up to an additional <strong>£175,000</strong>. This means a single person could potentially pass on up to <strong>£500,000</strong> without any inheritance tax being due.</p>

      <h2>Transferable allowances for couples</h2>
      <p>Married couples and civil partners can transfer any unused nil rate band to the surviving partner. This means a couple could potentially have a combined allowance of up to <strong>£1,000,000</strong> before inheritance tax applies. This transfer is not automatic — it needs to be claimed when the second partner dies, and having a properly drafted will makes this process much smoother.</p>

      <h2>Key exemptions</h2>
      <p>Several important exemptions can reduce the taxable value of your estate:</p>
      <ul>
        <li><strong>Spouse or civil partner transfers:</strong> Everything you leave to your spouse or civil partner is completely exempt from inheritance tax, with no upper limit.</li>
        <li><strong>Annual gift allowance:</strong> You can give away up to £3,000 per tax year without it counting towards your estate. If you did not use the previous year's allowance, you can carry it forward for one year (giving a maximum of £6,000).</li>
        <li><strong>Small gifts:</strong> You can make gifts of up to £250 to any number of individuals per tax year, as long as you have not also used your annual allowance on the same person.</li>
        <li><strong>Wedding gifts:</strong> You can give up to £5,000 to a child, £2,500 to a grandchild, or £1,000 to anyone else as a wedding or civil partnership gift.</li>
        <li><strong>Gifts from surplus income:</strong> Regular gifts made from your income (not capital) that do not affect your standard of living are exempt.</li>
      </ul>

      <h2>Taper relief on gifts</h2>
      <p>If you make a gift worth more than £325,000 and die within seven years, inheritance tax may be payable on that gift. However, taper relief reduces the amount of tax due depending on how long before your death the gift was made. Gifts made three to seven years before death are taxed at a reduced rate, and gifts made more than seven years before death are completely exempt.</p>

      <h2>Business and agricultural relief</h2>
      <p>If you own a qualifying business or agricultural property, you may be entitled to relief of 50% or even 100% of the value. This can significantly reduce or eliminate the inheritance tax on these assets. The rules are detailed, so professional advice is recommended.</p>

      <h2>How to reduce inheritance tax through your will</h2>
      <p>A well-drafted will is one of the most effective tools for managing inheritance tax. Strategies include:</p>
      <ul>
        <li>Making use of both partners' nil rate bands through appropriate will structures</li>
        <li>Leaving charitable gifts to qualify for the reduced 36% rate</li>
        <li>Setting up <a href="/resource/trusts-in-wills">trusts</a> to manage how and when assets are distributed</li>
        <li>Ensuring the residence nil rate band is available by leaving your home to direct descendants</li>
      </ul>

      <h2>Who pays the inheritance tax?</h2>
      <p>The <a href="/resource/executors">executor</a> of your will is responsible for calculating and paying any inheritance tax due. It must normally be paid within six months of death, although there are instalment options for certain assets like property. The tax is paid from the estate funds before anything is distributed to beneficiaries.</p>

      <h2>Why you need a will to manage IHT</h2>
      <p>Without a will, your estate is distributed according to intestacy rules, which may not make the most tax-efficient use of the available allowances. A properly planned will ensures that the right exemptions and reliefs are claimed, potentially saving your family tens of thousands of pounds. If you are unsure whether you need a will, our guide on <a href="/resource/do-i-need-to-make-a-will">whether you need to make a will</a> is a good starting point.</p>

      <p><strong>Please note:</strong> The thresholds and allowances mentioned in this guide are correct as of 2024/25. The nil rate band and residence nil rate band are frozen until at least 2028. Always check <a href="https://www.gov.uk/inheritance-tax" target="_blank" rel="noopener noreferrer">gov.uk</a> for the latest figures.</p>
    `
  },
  'trusts-in-wills': {
    title: 'What Is a Trust in a Will?',
    content: `
      <p>A trust is a legal arrangement where assets are held and managed by one person (called a trustee) for the benefit of another person (called a <a href="/beneficiary">beneficiary</a>). When a trust is created through a will, it is known as a "will trust" or "testamentary trust." Trusts are one of the most powerful tools available in estate planning, and they are more common than most people realise.</p>

      <h2>Why do people put trusts in their wills?</h2>
      <p>There are many reasons you might want to include a trust in your will. The most common are:</p>
      <ul>
        <li><strong>Protecting assets:</strong> A trust can protect assets from being lost — for example, if a beneficiary is going through a divorce, has debts, or is vulnerable to financial exploitation.</li>
        <li><strong>Controlling when beneficiaries inherit:</strong> You might want to leave money to your children but not until they reach a certain age, such as 25. A trust lets you set these conditions.</li>
        <li><strong>Providing for vulnerable people:</strong> If a beneficiary has a disability or mental health condition, a trust can ensure they are provided for without affecting their entitlement to means-tested benefits.</li>
        <li><strong>Tax planning:</strong> Trusts can help manage <a href="/resource/inheritance-tax-guide">inheritance tax</a> by controlling how and when assets pass to beneficiaries.</li>
      </ul>

      <h2>Common types of trust in a will</h2>

      <h3>Life interest trust</h3>
      <p>A life interest trust gives someone (usually a surviving spouse) the right to benefit from an asset — most often the right to live in a property — for the rest of their life. When they die, the asset passes to someone else, such as the children from your first marriage. This type of trust is very common in <a href="/resource/blended-families">blended families</a>, where you want to provide for your current partner while ensuring your children ultimately inherit.</p>

      <h3>Discretionary trust</h3>
      <p>With a discretionary trust, the trustees have the power to decide how, when, and to whom the trust assets are distributed. This is useful when you want to leave assets for <a href="/children-and-gifts-in-wills">children</a> or vulnerable beneficiaries but want the trustees to have flexibility — for example, to respond to changing circumstances or to pay out money when it is genuinely needed rather than as a lump sum.</p>

      <h3>Bare trust</h3>
      <p>A bare trust is the simplest type. The trustee holds the assets on behalf of the beneficiary, and the beneficiary has an absolute right to both the income and the capital. Bare trusts are often used when leaving money to someone who is too young to manage it themselves. Once the beneficiary reaches the specified age (often 18), they take full control.</p>

      <h3>Protective trust</h3>
      <p>A protective trust is designed to safeguard assets for a beneficiary who may be vulnerable — for example, someone with a learning disability, a mental health condition, or a history of financial difficulty. The trust gives the trustees discretion to manage the funds in the beneficiary's best interests.</p>

      <h2>Who are the parties in a trust?</h2>
      <ul>
        <li><strong>The settlor:</strong> This is the person who creates the trust. In a will trust, the settlor is you — the <a href="/testator">testator</a> (the person making the will).</li>
        <li><strong>The trustees:</strong> These are the people you appoint to manage the trust. They have a legal duty to act in the best interests of the beneficiaries.</li>
        <li><strong>The beneficiaries:</strong> These are the people who benefit from the trust. Depending on the type of trust, they may have a fixed entitlement or a potential entitlement at the trustees' discretion.</li>
      </ul>

      <h2>Choosing trustees</h2>
      <p>Choosing the right trustees is important. Your trustees can be the same people as your <a href="/resource/executors">executors</a>, or they can be different people. You might choose trusted family members, close friends, or professionals such as solicitors or accountants. It is a good idea to appoint at least two trustees, and to choose people who are reliable, impartial, and willing to take on the responsibility.</p>

      <h2>When might you need a trust in your will?</h2>
      <p>Common situations where a trust is worth considering include:</p>
      <ul>
        <li><strong>Blended families:</strong> To provide for your current partner while protecting your children's inheritance</li>
        <li><strong>Minor children:</strong> To hold assets until children are old enough to manage them responsibly</li>
        <li><strong>Vulnerable adults:</strong> To provide ongoing support without affecting benefit entitlements</li>
        <li><strong>Inheritance tax planning:</strong> To make the most of available tax allowances</li>
        <li><strong>Protecting assets from care home fees:</strong> Although the rules around this are complex and not guaranteed</li>
      </ul>

      <h2>Can an online will include trusts?</h2>
      <p>Yes, many online will services — including ours — can include trusts in your will. Our guided questionnaire will help you set up common types of trust, and every will is <a href="/resource/what-is-a-solicitor-checked-will">checked by a qualified solicitor</a> to make sure everything is correct. For more complex trust arrangements, we recommend speaking to one of our advisors. You can <a href="/book-a-call">book a call</a> to discuss your situation.</p>
    `
  },
  'how-to-change-your-will': {
    title: 'How to Change Your Will',
    content: `
      <p>Your will is not a document you write once and forget about. Life changes, and your will should keep pace. Whether you have got married, had a child, separated from a partner, or simply changed your mind about who should inherit, updating your will is essential. This guide explains your options and how to go about it safely.</p>

      <h2>When should you change your will?</h2>
      <p>There are several life events that should prompt you to review — and usually update — your will:</p>
      <ul>
        <li><strong>Marriage:</strong> Getting <a href="/resource/i-am-getting-married-do-i-need-a-will">married automatically revokes</a> any existing will in England and Wales, so you need a new one.</li>
        <li><strong>Divorce or separation:</strong> While divorce does not revoke your entire will, it does affect any gifts or appointments relating to your ex-spouse. If you have <a href="/resource/separated-from-partner-divorce-wills">separated from your partner</a>, you should review your will immediately.</li>
        <li><strong>Having children or grandchildren:</strong> You may want to add them as beneficiaries or appoint <a href="/resource/legal-guardians">legal guardians</a>.</li>
        <li><strong>Death of a beneficiary or executor:</strong> If someone named in your will has died, the will needs updating.</li>
        <li><strong>Change of mind:</strong> Perhaps you want to leave more to one person, remove a beneficiary, or add a charitable gift.</li>
        <li><strong>Change in financial circumstances:</strong> A significant change in your assets may mean your will no longer distributes things fairly or efficiently.</li>
      </ul>
      <p>For a more detailed look at common triggers, see our guide on <a href="/5-reasons-to-update-your-will">5 reasons to update your will</a>.</p>

      <h2>Option 1: Make a new will (recommended)</h2>
      <p>The simplest and safest way to change your will is to make a completely new one. A new will automatically includes a revocation clause — a statement that cancels all previous wills and codicils. This means everything is contained in one clear, up-to-date document, with no risk of confusion or contradiction.</p>
      <p>With our <a href="/lifetime-updates">lifetime updates</a> service, making a new will costs you nothing extra. You simply log in, make your changes, submit them for <a href="/resource/what-is-a-solicitor-checked-will">solicitor review</a>, and then print and sign the new will once it is ready.</p>
      <p>This is the approach we recommend in virtually every case. It is cleaner, clearer, and less likely to cause problems down the line.</p>

      <h2>Option 2: Add a codicil</h2>
      <p>A <a href="/codicil">codicil</a> is a separate document that makes an amendment to an existing will. In the past, codicils were commonly used when rewriting an entire will was expensive or impractical. Today, they are rarely recommended for several reasons:</p>
      <ul>
        <li><strong>Risk of confusion:</strong> A codicil is a separate piece of paper that must be stored with the will. If it becomes separated, the will could be administered incorrectly.</li>
        <li><strong>Contradictions:</strong> If the codicil is not carefully worded, it can contradict the original will, leading to disputes.</li>
        <li><strong>Witnessing requirements:</strong> A codicil must be <a href="/resource/how-to-sign-execute-a-will">signed and witnessed</a> with exactly the same formality as a will — two witnesses present, all signing together. If these rules are not followed, the codicil is invalid.</li>
      </ul>
      <p>In most cases, making a new will is simpler and safer than adding a codicil.</p>

      <h2>What you must NOT do</h2>
      <p>It is important to understand that you cannot informally alter a will. You must not:</p>
      <ul>
        <li>Cross things out</li>
        <li>Write in the margins</li>
        <li>Add sticky notes or annotations</li>
        <li>Use correction fluid</li>
      </ul>
      <p>Any of these could invalidate part or all of your will. If someone finds a will with handwritten changes, it can create serious doubt about your intentions and lead to expensive legal disputes.</p>

      <h2>How often should you review your will?</h2>
      <p>As a general rule, you should review your will every three to five years, even if nothing obvious has changed. It is also wise to review it after any major life event — marriage, divorce, birth of a child, death of a beneficiary, or a significant change in your finances.</p>

      <h2>How to update your will with us</h2>
      <p>If you made your will with Make a Will, the process is straightforward:</p>
      <ol>
        <li>Log in to your account</li>
        <li>Make the changes you need</li>
        <li>Submit the updated will for solicitor review</li>
        <li>Once approved, print the new will and <a href="/resource/how-to-sign-execute-a-will">sign it properly</a> with two witnesses</li>
      </ol>
      <p>Thanks to our <a href="/lifetime-updates">lifetime updates</a>, there is no charge for this. You can change your will as many times as you need to.</p>

      <h2>What to do with your old will</h2>
      <p>Once your new will has been properly signed and witnessed, you should destroy all copies of the old will. Tear them up or shred them. Keeping old wills can cause confusion — if both documents are found after your death, it may not be immediately clear which one is valid, leading to delays and potential disputes.</p>
    `
  },
  'will-template-uk': {
    title: 'Will Template UK: What Your Will Should Include',
    content: `
      <p>If you have searched for "will template UK," you are not alone. Many people want to understand what a will looks like before they start making one, and some are looking for a blank form they can fill in themselves. In this guide, we explain what a proper will should contain, section by section, and why using a template alone — without professional review — can be risky.</p>

      <h2>What every will should include</h2>
      <p>A valid will in England and Wales needs to cover several key areas. Here are the essential sections:</p>

      <h3>1. Revocation clause</h3>
      <p>This is a statement at the beginning of your will that cancels all previous wills and codicils. It ensures there is no confusion about which document represents your final wishes. Without this clause, an earlier will could still be partially valid, leading to contradictions and disputes.</p>

      <h3>2. Appointment of executors</h3>
      <p>Your will must name one or more <a href="/resource/executors">executors</a> — the people responsible for carrying out the instructions in your will after you die. They will manage your estate, pay any debts and taxes, and distribute your assets to your beneficiaries. Most people appoint one or two trusted individuals, and it is wise to name a substitute in case your first choice is unable or unwilling to act.</p>

      <h3>3. Appointment of guardians</h3>
      <p>If you have children under 18, your will is the only legal way to choose who will look after them if both parents die. These are your <a href="/resource/legal-guardians">legal guardians</a>. Without a will naming guardians, the court will decide — and the result may not be what you would have wanted.</p>

      <h3>4. Specific gifts</h3>
      <p>These are <a href="/bequest">bequests</a> of particular items or sums of money to named individuals or organisations. For example, you might leave a piece of jewellery to a friend, a specific amount of money to a godchild, or a donation to a charity. Being precise about what you are leaving and to whom helps avoid confusion.</p>

      <h3>5. Residuary estate</h3>
      <p>After any debts, taxes, and specific gifts have been dealt with, the remainder of your estate is called the residuary estate. Your will should name one or more <a href="/beneficiary">beneficiaries</a> to receive this. For most people, the residuary estate makes up the largest part of what they leave behind, so this section is very important.</p>

      <h3>6. Attestation clause</h3>
      <p>This is the section at the end of your will where you and your <a href="/resource/who-can-witness-a-will">witnesses</a> sign. The attestation clause confirms that the will was signed correctly — by you, in the presence of two witnesses, who then signed in your presence. Getting this wrong is one of the most common reasons wills are found to be invalid.</p>

      <h2>See a real example</h2>
      <p>If you want to see what a finished will looks like, take a look at our <a href="/sample-will">sample will</a>. It shows you the layout and wording of a professionally prepared, solicitor-checked will.</p>

      <h2>Why a blank template is risky</h2>
      <p>While it is perfectly legal to write your own will, doing so from a blank template comes with significant risks:</p>
      <ul>
        <li><strong>No legal check:</strong> Nobody reviews your document for errors, ambiguities, or missing clauses.</li>
        <li><strong>Easy to make mistakes:</strong> Legal wording matters. A small error — like failing to include a residuary clause — can mean part of your estate is distributed under intestacy rules rather than according to your wishes.</li>
        <li><strong>May not cover your situation:</strong> A generic template cannot account for blended families, complex property ownership, business assets, or overseas property.</li>
        <li><strong>Witnessing errors:</strong> The rules about <a href="/resource/how-to-sign-execute-a-will">how to sign a will</a> are strict. If you get the witnessing wrong, the entire will can be invalid.</li>
      </ul>

      <h2>What a solicitor-checked will adds</h2>
      <p>A <a href="/resource/what-is-a-solicitor-checked-will">solicitor-checked will</a> means a qualified solicitor has reviewed your will for legal accuracy, completeness, and clarity. They check that your wishes are properly expressed, that nothing important has been missed, and that the will is structured to be as effective as possible. This is a level of protection that no template can offer. And when your circumstances change, you can easily <a href="/resource/how-to-change-your-will">update your will</a>.</p>

      <h2>Our approach</h2>
      <p>Rather than giving you a blank template to fill in, our service uses a guided questionnaire that builds your will section by section. You answer straightforward questions about your family, your assets, and your wishes, and we generate a properly structured will document. A qualified solicitor then reviews everything before your will is finalised.</p>
      <p>Single wills start from just £90. <a href="/make-your-will">Start making your will today</a>.</p>
      <p>And if you are wondering whether an online will is valid — yes, <a href="/resource/are-online-wills-legal">online wills are legally valid</a> in England and Wales. It is the content and execution (signing and witnessing) that determine whether a will is legally binding, not the method used to create it.</p>
    `
  },
  'lpa-vs-will': {
    title: "Lasting Power of Attorney vs Will: What's the Difference?",
    content: `
      <p>People often confuse wills and Lasting Powers of Attorney, or assume that having one means they do not need the other. In reality, these are two completely different legal documents that serve different purposes at different times in your life. Understanding the difference — and why you need both — is one of the most important steps you can take to protect yourself and your family.</p>

      <h2>What is a will?</h2>
      <p>A will is a legal document that sets out what should happen to your assets after you die. It names who will inherit your property, money, and possessions. It also lets you appoint <a href="/resource/executors">executors</a> to manage your estate, name <a href="/resource/legal-guardians">guardians</a> for your children, and set up trusts if needed. A will only takes effect after your death — it has no legal force while you are alive.</p>

      <h2>What is a Lasting Power of Attorney?</h2>
      <p>A <a href="/resource/lasting-power-of-attorney">Lasting Power of Attorney (LPA)</a> is a legal document that lets you appoint someone you trust to make decisions on your behalf if you lose the mental capacity to make them yourself. Unlike a will, an LPA is all about what happens while you are still alive. There are two types:</p>
      <ul>
        <li><strong>Property and Financial Affairs LPA:</strong> Covers decisions about your money, property, bills, investments, and bank accounts.</li>
        <li><strong>Health and Welfare LPA:</strong> Covers decisions about your medical treatment, care, and daily routine. This can only be used when you lack the capacity to make these decisions yourself.</li>
      </ul>
      <p>An LPA must be registered with the Office of the Public Guardian (OPG) before it can be used. Registration costs £82 per LPA type.</p>

      <h2>Side-by-side comparison</h2>
      <table>
        <thead>
          <tr><th></th><th>Will</th><th>LPA</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>When it takes effect</strong></td><td>After you die</td><td>While you are alive (if you lose capacity)</td></tr>
          <tr><td><strong>What it covers</strong></td><td>Distribution of your assets, guardians for children, executors, trusts</td><td>Financial decisions and/or health and welfare decisions</td></tr>
          <tr><td><strong>Who carries it out</strong></td><td>Your executors</td><td>Your attorneys</td></tr>
          <tr><td><strong>Registration required?</strong></td><td>No (but must be stored safely)</td><td>Yes — with the Office of the Public Guardian</td></tr>
          <tr><td><strong>Can be changed?</strong></td><td>Yes — by making a new will</td><td>Yes — by revoking and creating a new LPA</td></tr>
        </tbody>
      </table>

      <h2>Do you need both?</h2>
      <p><strong>Yes.</strong> A will does not help if you are alive but unable to make decisions for yourself — for example, after a stroke, an accident, or a diagnosis of dementia. And an LPA cannot control what happens to your estate after you die. The two documents work together to cover both scenarios.</p>

      <h2>What happens without a will?</h2>
      <p>If you die without a will, your estate is distributed according to the <a href="/resource/dying-without-a-will-intestacy">intestacy rules</a> set by Parliament. This means the law — not you — decides who inherits. Unmarried partners, stepchildren, and close friends are likely to receive nothing. For guidance on the practical steps after a death, see our checklist on <a href="/resource/what-to-do-when-someone-dies">what to do when someone dies</a>.</p>

      <h2>What happens without an LPA?</h2>
      <p>If you lose mental capacity and have not made an LPA, your family cannot automatically make decisions on your behalf — even your spouse cannot manage your finances without legal authority. Instead, someone must apply to the Court of Protection for a deputyship order. This process is expensive (the application fee alone is £371, plus ongoing annual supervision fees), slow (it can take months), and stressful for your family at an already difficult time.</p>

      <h2>Common misconception</h2>
      <p>Many people assume that their spouse or partner can automatically handle their financial affairs if they become unable to do so. This is not true. Without an LPA, your spouse has no legal right to access your bank accounts, sell your property, or manage your investments — even if you hold assets jointly, there may be situations that require separate authority.</p>

      <h2>Our will + LPA bundle</h2>
      <p>Because most people need both documents, we offer a combined will and LPA bundle for just £249. This includes a solicitor-checked will plus both types of LPA (property and financial affairs, and health and welfare). <a href="/make-your-will">Get started here</a>.</p>
      <p>You can also learn more about <a href="/resource/make-an-lpa">how to make an LPA</a> or check the <a href="/resource/lpa-cost">cost of an LPA</a> on its own.</p>
    `
  },
  'what-to-do-when-someone-dies': {
    title: 'What to Do When Someone Dies: A Complete Checklist',
    content: `
      <p>When someone close to you dies, it can be difficult to think clearly. There are practical things that need to be done, often within tight deadlines, at a time when you are grieving. This checklist is designed to guide you through the process step by step, so you know what to do and when.</p>

      <h2>1. Get a medical certificate</h2>
      <p>A doctor must confirm the death and issue a medical certificate of cause of death (MCCD). If the person died in hospital, the hospital doctor will usually do this. If they died at home, contact their GP. If the death was sudden, unexpected, or the cause is unknown, it may be referred to the coroner, which can delay the certificate.</p>

      <h2>2. Register the death</h2>
      <p>You must <a href="/resource/register-a-death">register the death</a> within five days at the local register office in the area where the person died. You will need the medical certificate and some basic information about the deceased — their full name, date of birth, address, and occupation. The registrar will give you a certified copy of the death certificate (you will need several copies for banks, insurers, and other organisations) and a "green form" — the certificate for burial or cremation, which the funeral director will need.</p>

      <h2>3. Use the Tell Us Once service</h2>
      <p>The registrar will usually offer you access to the Tell Us Once service, which notifies multiple government departments in one go — including HMRC, the Department for Work and Pensions (DWP), the Passport Office, DVLA, and the local council. This saves you having to contact each one separately and is highly recommended.</p>

      <h2>4. Arrange the funeral</h2>
      <p>You will need to choose a funeral director and decide on the type of service — burial or cremation, religious or non-religious. The funeral cannot take place until the death has been registered and you have the green form. For more detailed guidance, see our guide on <a href="/resource/arranging-a-funeral">arranging a funeral</a>.</p>

      <h2>5. Find the will</h2>
      <p>Check at the deceased person's home, with their solicitor, or with a will storage service. The will names the <a href="/resource/executors">executors</a> — the people responsible for managing the estate. If you cannot find a will, the estate will be dealt with under the rules of intestacy.</p>

      <h2>6. Apply for probate (if needed)</h2>
      <p>Probate is the legal process of confirming the executors' authority to deal with the estate. Not every estate needs probate — for example, small estates or assets held jointly may not require it. To find out whether probate is needed, see our guides on <a href="/resource/do-i-need-probate">whether you need probate</a> and <a href="/resource/apply-for-probate">how to apply for probate</a>.</p>

      <h2>7. Notify banks, insurers, and other organisations</h2>
      <p>You will need to contact the deceased person's bank, building society, insurance companies, pension providers, utility companies, and employer (if applicable). Most organisations have a bereavement team that can help. Our <a href="/resource/probate-directory">probate directory</a> includes contact details for many of the organisations you may need to notify.</p>

      <h2>8. Value the estate</h2>
      <p>Before you can apply for probate or calculate any inheritance tax, you need to work out the total value of the estate. This includes property, savings, investments, vehicles, and personal possessions, minus any debts such as mortgages, loans, or outstanding bills.</p>

      <h2>9. Pay any inheritance tax due</h2>
      <p>If the estate is above the inheritance tax threshold, tax must normally be paid within six months of the date of death. You can find a detailed breakdown of the thresholds, rates, and exemptions in our <a href="/resource/inheritance-tax-guide">inheritance tax guide</a>. In some cases, tax on property can be paid in instalments over ten years.</p>

      <h2>10. Distribute the estate</h2>
      <p>Once probate has been granted and all debts, taxes, and expenses have been paid, the executors can distribute the remaining assets to the beneficiaries named in the will. If there is no will, the estate is distributed according to the <a href="/resource/dying-without-a-will-intestacy">intestacy rules</a>.</p>

      <h2>11. Prepare estate accounts</h2>
      <p>The executors should prepare a record of everything that came into and went out of the estate — all the assets, debts, taxes, expenses, and distributions. This is known as the estate accounts. For guidance, see our page on <a href="/resource/preparing-estate-accounts">preparing estate accounts</a>.</p>

      <h2>12. Deal with personal belongings</h2>
      <p>Sorting through <a href="/resource/personal-belongings">personal belongings</a> can be one of the most emotional parts of the process. There is no legal deadline for this, so take the time you need. Consider what to keep, donate, sell, or pass on to family and friends.</p>

      <h2>Support and financial help</h2>
      <p>Dealing with a death is emotionally and practically demanding. There is help available:</p>
      <ul>
        <li><strong>Cruse Bereavement Support</strong> (0808 808 1677) offers free bereavement counselling and support.</li>
        <li><strong>Bereavement Support Payment:</strong> If your spouse or civil partner has died, you may be entitled to a lump sum payment and monthly instalments from the DWP.</li>
        <li><strong>Funeral Expenses Payment:</strong> If you are on a low income and responsible for funeral costs, you may be able to claim help from the Social Fund.</li>
      </ul>

      <h2>Why making a will matters</h2>
      <p>If you are reading this guide because you have just lost someone, you may now understand first-hand how much easier a clear will makes this whole process. A well-drafted will names executors, sets out exactly who should inherit what, and reduces the scope for confusion, delays, and disputes.</p>
      <p>If you have not yet made your own will, now is a good time to think about it. It is one of the kindest things you can do for the people who will one day have to manage your affairs. Our guide on <a href="/resource/do-i-need-to-make-a-will">whether you need a will</a> is a good place to start, and you can find out about the <a href="/resource/cost-of-making-a-will">cost of making a will</a> too.</p>
    `
  }
};

function ResourcePage() {
  const { slug } = useParams();
  const resource = resourceContent[slug];

  if (!resource) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>Resource</h1>
          </div>
        </div>
        <section className="page-content">
          <div className="container">
            <div className="content-wrapper">
              <h2>Resource Not Found</h2>
              <p>Sorry, we couldn't find the resource you're looking for.</p>
              <Link to="/resource" className="btn btn-primary">Browse all resources</Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Get external resources for this page
  const category = resourceToCategory[slug];
  const furtherReading = category ? externalResources[category] : externalResources.wills;

  return (
    <>
      <SEO />
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[
            { label: 'Resources', path: '/resource' },
            { label: resource.title }
          ]} />
          <h1>{resource.title}</h1>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="page-with-sidebar">
            <div className="content-wrapper">
              <div dangerouslySetInnerHTML={{ __html: resource.content }} />

              {/* Further Reading - External Authority Links */}
              <div className="further-reading">
                <h3>Further Reading</h3>
                <ul>
                  {furtherReading.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="external-link">
                        {link.title}
                      </a>
                      <span className="source-description">{link.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center mt-4" style={{ background: '#f8f9fa', padding: '40px', borderRadius: '8px' }}>
                <h3>Ready to Make Your Will?</h3>
                <p>Create your solicitor-checked will in just 15 minutes.</p>
                <a href="https://makeawillonline.co.uk/my-will" className="btn btn-primary btn-lg">Get started</a>
              </div>
            </div>

            <aside className="sidebar">
              {/* Resource illustration */}
              <div className="sidebar-widget" style={{ textAlign: 'center' }}>
                <img src={resourceToIllustration[slug] || '/logos/resource-making-will.svg'} alt="Resource illustration" width={400} height={320} style={{ maxWidth: '100%', height: 'auto' }} />
              </div>

              <div className="sidebar-widget">
                <h4>Related Resources</h4>
                <ul>
                  <li><Link to="/resource/do-i-need-to-make-a-will">Do I need a will?</Link></li>
                  <li><Link to="/resource/are-online-wills-legal">Are online wills legal?</Link></li>
                  <li><Link to="/resource/executors">What is an executor?</Link></li>
                  <li><Link to="/resource/lasting-power-of-attorney">Lasting Power of Attorney</Link></li>
                  <li><Link to="/resource/do-i-need-probate">What is Probate?</Link></li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4>For Charities</h4>
                <ul>
                  <li><Link to="/charities">Charity Services Hub</Link></li>
                  <li><Link to="/fundraising-online-wills">Gifts in Wills</Link></li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4>Need Help?</h4>
                <p>Our team is here to answer any questions.</p>
                <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Contact us</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResourcePage;
