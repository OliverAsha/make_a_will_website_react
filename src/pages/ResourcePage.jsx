import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import {
  MakingWillIllustration,
  ExecutorsProbateIllustration,
  LPAIllustration,
  FamilyIllustration,
  AfterDeathIllustration,
  WitnessesIllustration,
  SigningIllustration,
  MarriageWillsIllustration,
  GlossaryIllustration
} from '../components/Illustrations';

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
  'personal-belongings': 'probate'
};

// Map resource slugs to illustration components
const resourceToIllustration = {
  // Making a will resources
  'do-i-need-to-make-a-will': MakingWillIllustration,
  'are-online-wills-legal': MakingWillIllustration,
  'make-an-online-will-in-five-easy-steps': MakingWillIllustration,
  'what-is-a-solicitor-checked-will': MakingWillIllustration,
  'will-writing-glossary': GlossaryIllustration,

  // Witnesses and signing
  'who-can-witness-a-will': WitnessesIllustration,
  'how-to-sign-execute-a-will': SigningIllustration,

  // Executors and probate
  'executors': ExecutorsProbateIllustration,
  'choosing-executors-for-your-will': ExecutorsProbateIllustration,
  'do-i-need-probate': ExecutorsProbateIllustration,
  'apply-for-probate': ExecutorsProbateIllustration,
  'probate-directory': ExecutorsProbateIllustration,
  'preparing-estate-accounts': ExecutorsProbateIllustration,

  // LPA resources
  'lasting-power-of-attorney': LPAIllustration,
  'do-i-need-an-lpa': LPAIllustration,
  'make-an-lpa': LPAIllustration,
  'attorneys': LPAIllustration,
  'choosing-attorneys': LPAIllustration,
  'lpa-cost': LPAIllustration,

  // Family situations
  'dying-without-a-will-intestacy': FamilyIllustration,
  'legal-guardians': FamilyIllustration,
  'blended-families': FamilyIllustration,
  'wills-and-stepchildren': FamilyIllustration,

  // Marriage and relationships
  'i-am-getting-married-do-i-need-a-will': MarriageWillsIllustration,
  'separated-from-partner-divorce-wills': MarriageWillsIllustration,

  // After death resources
  'register-a-death': AfterDeathIllustration,
  'death-of-a-spouse': AfterDeathIllustration,
  'arranging-a-funeral': AfterDeathIllustration,
  'personal-belongings': AfterDeathIllustration
};

// Resource content database - this would typically come from a CMS or API
const resourceContent = {
  'do-i-need-to-make-a-will': {
    title: 'Do you need to make a will?',
    content: `
      <p>Making a will is one of the most important things you can do to protect your family and ensure your wishes are carried out after you die.</p>

      <h2>Who needs a will?</h2>
      <p>The short answer is: almost everyone. But you especially need a will if:</p>
      <ul>
        <li>You own property or have savings</li>
        <li>You have children under 18</li>
        <li>You're married or in a civil partnership</li>
        <li>You live with a partner but aren't married</li>
        <li>You want to leave money to charity</li>
        <li>You have specific wishes about your funeral</li>
        <li>You own a business</li>
      </ul>

      <h2>What happens without a will?</h2>
      <p>If you die without a valid will (called dying "intestate"), your estate will be distributed according to the rules of intestacy. This may not reflect your wishes. For example:</p>
      <ul>
        <li>Unmarried partners receive nothing under intestacy rules</li>
        <li>Stepchildren don't automatically inherit</li>
        <li>Your estate might be split differently than you'd want</li>
        <li>The court may decide who looks after your children</li>
      </ul>

      <h2>Benefits of making a will</h2>
      <ul>
        <li>Choose who inherits your assets</li>
        <li>Appoint guardians for your children</li>
        <li>Minimize inheritance tax</li>
        <li>Make gifts to charity</li>
        <li>Avoid family disputes</li>
        <li>Provide clear instructions for your executors</li>
      </ul>
    `
  },
  'are-online-wills-legal': {
    title: 'Are online wills legal?',
    content: `
      <p>Yes, online wills are completely legal in England and Wales. A will is legally valid if it meets certain requirements, regardless of how it was created.</p>

      <h2>Legal requirements for a valid will</h2>
      <p>For a will to be legally valid in England and Wales, it must:</p>
      <ul>
        <li>Be in writing</li>
        <li>Be signed by the testator (the person making the will)</li>
        <li>Be witnessed by two independent witnesses who are present at the same time</li>
        <li>The testator must have mental capacity</li>
        <li>The testator must know and approve of the contents</li>
      </ul>

      <h2>Why choose an online will?</h2>
      <p>Online wills offer several advantages:</p>
      <ul>
        <li>Convenience - complete from home at your own pace</li>
        <li>Cost-effective - typically much cheaper than a solicitor</li>
        <li>Guided process - prompts ensure nothing is missed</li>
        <li>Easy updates - modify your will when circumstances change</li>
      </ul>

      <h2>The Make a Will difference</h2>
      <p>Unlike many other will services, every will we create is reviewed by a qualified solicitor. This provides the best of both worlds: convenience with professional legal oversight.</p>
    `
  },
  'executors': {
    title: 'What is an executor?',
    content: `
      <p>An executor is the person (or people) you appoint in your will to carry out your wishes after you die. It's one of the most important decisions you'll make when writing your will.</p>

      <h2>What does an executor do?</h2>
      <p>An executor's responsibilities include:</p>
      <ul>
        <li>Registering the death and arranging the funeral</li>
        <li>Locating and valuing all assets</li>
        <li>Applying for probate (if required)</li>
        <li>Paying any debts, taxes, and expenses</li>
        <li>Distributing the estate according to the will</li>
        <li>Keeping accounts of all transactions</li>
      </ul>

      <h2>Who can be an executor?</h2>
      <p>You can choose anyone over 18 who has mental capacity. Common choices include:</p>
      <ul>
        <li>A spouse or partner</li>
        <li>Adult children</li>
        <li>Trusted friends</li>
        <li>Professional executors (solicitors, banks)</li>
      </ul>

      <h2>How many executors should I appoint?</h2>
      <p>You can appoint up to four executors to act at any one time. We recommend appointing at least two, in case one is unable or unwilling to act. You can also name backup (substitute) executors.</p>
    `
  },
  'lasting-power-of-attorney': {
    title: 'What is a Lasting Power of Attorney?',
    content: `
      <p>A Lasting Power of Attorney (LPA) is a legal document that lets you appoint someone to make decisions on your behalf if you lose the mental capacity to make them yourself.</p>

      <h2>Types of LPA</h2>
      <p>There are two types of Lasting Power of Attorney:</p>
      <ul>
        <li><strong>Property and Financial Affairs LPA:</strong> Covers decisions about your money, property, bills, and investments</li>
        <li><strong>Health and Welfare LPA:</strong> Covers decisions about your healthcare, living arrangements, and daily care</li>
      </ul>

      <h2>Why make an LPA?</h2>
      <p>Without an LPA, if you lose mental capacity:</p>
      <ul>
        <li>Your family may need to apply to the Court of Protection</li>
        <li>This is expensive, time-consuming, and stressful</li>
        <li>The court, not your family, decides who manages your affairs</li>
        <li>Your accounts may be frozen while applications are processed</li>
      </ul>

      <h2>Who can be an attorney?</h2>
      <p>You can appoint anyone over 18 who has mental capacity. Most people choose trusted family members or friends. You can also appoint professionals, but they may charge for their services.</p>
    `
  },
  'do-i-need-probate': {
    title: 'What is Probate and do I need it?',
    content: `
      <p>Probate is the legal process of administering a deceased person's estate. It involves proving the will is valid, gathering assets, paying debts, and distributing what remains to beneficiaries.</p>

      <h2>When is probate needed?</h2>
      <p>Probate is typically required when:</p>
      <ul>
        <li>The deceased owned property in their sole name</li>
        <li>Bank accounts exceed certain thresholds (usually £5,000-£50,000)</li>
        <li>There are shares or investments to transfer</li>
      </ul>

      <h2>When might probate not be needed?</h2>
      <ul>
        <li>All assets were jointly owned (pass automatically to survivor)</li>
        <li>The estate is very small (under threshold)</li>
        <li>All assets were held in trust</li>
      </ul>

      <h2>The probate process</h2>
      <ol>
        <li>Value the estate</li>
        <li>Complete inheritance tax forms</li>
        <li>Apply for Grant of Probate</li>
        <li>Collect assets and pay debts</li>
        <li>Distribute the estate</li>
      </ol>
    `
  },
  'dying-without-a-will-intestacy': {
    title: 'What happens if you die without a will?',
    content: `
      <p>When someone dies without a valid will, they are said to have died "intestate". Their estate will be distributed according to the rules of intestacy, which are set by law and may not reflect their wishes.</p>

      <h2>Rules of intestacy</h2>
      <p>Under the current rules in England and Wales:</p>
      <ul>
        <li>If you're married with children: your spouse gets the first £322,000 plus personal possessions, and half the remainder. Your children share the other half.</li>
        <li>If you're married without children: your spouse inherits everything.</li>
        <li>If you're unmarried with children: your children inherit everything equally.</li>
        <li>If you're single with no children: your parents inherit. If no parents, then siblings, then more distant relatives.</li>
      </ul>

      <h2>Who doesn't inherit under intestacy?</h2>
      <ul>
        <li>Unmarried partners (including long-term cohabitees)</li>
        <li>Stepchildren (unless legally adopted)</li>
        <li>Friends</li>
        <li>Charities</li>
        <li>Carers</li>
      </ul>

      <h2>The solution</h2>
      <p>Making a will is the only way to ensure your estate goes to the people you choose. It's particularly important if you're not married or have a blended family.</p>
    `
  },
  'make-an-online-will-in-five-easy-steps': {
    title: 'Make an Online Will in Five Easy Steps',
    content: `
      <p>Creating a will online is straightforward when you break it down into manageable steps. Here's how the process works with Make a Will.</p>

      <h2>Step 1: Gather your information</h2>
      <p>Before you start, it helps to have the following to hand:</p>
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
      <p>Every will is reviewed by a qualified solicitor. They check for errors, ambiguities, and potential problems. If they spot any issues, they'll contact you to discuss them. This usually takes 2-3 working days.</p>

      <h2>Step 5: Sign and witness</h2>
      <p>Once approved, we send you your will to print and sign. You'll need two witnesses present when you sign - they must both watch you sign and then sign the will themselves. We provide clear instructions to make sure this is done correctly.</p>

      <h2>What happens next?</h2>
      <p>Store your signed will somewhere safe and tell your executors where it is. You can update your will at any time through your account - lifetime updates are included in your purchase.</p>
    `
  },
  'what-is-a-solicitor-checked-will': {
    title: 'What is a Solicitor Checked Will?',
    content: `
      <p>A solicitor-checked will is exactly what it sounds like - a will that has been reviewed by a qualified solicitor before you sign it. This is what sets Make a Will apart from many other online will services.</p>

      <h2>Why does solicitor review matter?</h2>
      <p>Wills are legal documents, and small errors can have serious consequences. A solicitor review ensures:</p>
      <ul>
        <li><strong>Legal validity:</strong> Your will meets all the legal requirements</li>
        <li><strong>Clarity:</strong> The wording is clear and unambiguous</li>
        <li><strong>Completeness:</strong> Nothing important has been missed</li>
        <li><strong>Tax efficiency:</strong> Obvious tax-saving opportunities aren't overlooked</li>
        <li><strong>Practical workability:</strong> Your wishes can actually be carried out</li>
      </ul>

      <h2>Common problems a solicitor catches</h2>
      <p>In my experience, common issues include:</p>
      <ul>
        <li>Beneficiaries who are also witnesses (this invalidates their gift)</li>
        <li>Vague descriptions of assets or beneficiaries</li>
        <li>Contradictory clauses</li>
        <li>Missing residuary clauses (what happens to everything else)</li>
        <li>Inappropriate executor appointments</li>
        <li>Gifts that might fail due to technical rules</li>
      </ul>

      <h2>The difference from DIY wills</h2>
      <p>Many online services simply let you fill in a template and print it. If there are problems, you won't find out until after you've died - when it's too late to fix them. With a solicitor-checked will, potential issues are identified and resolved while you're still alive to make corrections.</p>

      <h2>What happens during the review?</h2>
      <p>Our solicitors review every will individually. They check the drafting, consider your specific circumstances, and look for any issues. If they have questions or concerns, they'll contact you directly. Most wills are approved within 2-3 working days.</p>
    `
  },
  'who-can-witness-a-will': {
    title: 'Who Can Witness a Will?',
    content: `
      <p>Getting your will properly witnessed is crucial. If the witnessing isn't done correctly, your entire will could be invalid. Here's what you need to know.</p>

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
        <li><strong>Anyone who benefits from the will:</strong> If a beneficiary witnesses the will, their gift becomes void - they lose their inheritance</li>
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
      <p>Yes, executors can witness your will - provided they're not also beneficiaries. However, it's generally better to use independent witnesses to avoid any suggestion of undue influence.</p>
    `
  },
  'how-to-sign-execute-a-will': {
    title: 'How To Sign a Will',
    content: `
      <p>Signing a will - legally called "executing" the will - must be done correctly for your will to be valid. Get this wrong, and your will may be worthless. Here's exactly what you need to do.</p>

      <h2>What you'll need</h2>
      <ul>
        <li>Your printed will document</li>
        <li>Two independent witnesses (see our guide on who can witness)</li>
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
      <p>Store your signed will somewhere safe - a fireproof safe at home, with your solicitor, or registered with a will storage service. Tell your executors where it is. Keep your unsigned copies clearly marked as copies.</p>
    `
  },
  'will-writing-glossary': {
    title: 'Will Writing Glossary',
    content: `
      <p>Legal jargon can be confusing. Here's a plain-English guide to common terms you'll encounter when making a will.</p>

      <h2>People and roles</h2>
      <ul>
        <li><strong>Testator:</strong> The person making the will (that's you)</li>
        <li><strong>Beneficiary:</strong> Anyone who receives something under your will</li>
        <li><strong>Executor:</strong> The person you appoint to carry out your wishes and administer your estate</li>
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
        <li><strong>Probate:</strong> The legal process of administering someone's estate after death</li>
        <li><strong>Grant of Probate:</strong> The court document that gives executors authority to deal with the estate</li>
        <li><strong>Letters of Administration:</strong> Like probate, but when there's no will</li>
        <li><strong>Intestacy:</strong> Dying without a valid will</li>
        <li><strong>Codicil:</strong> A document that amends an existing will (rarely used now - it's easier to make a new will)</li>
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
      <p>Choosing the right executors is one of the most important decisions you'll make when writing your will. Get it wrong, and you could create problems for your loved ones at an already difficult time.</p>

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
        <li>Are they beneficiaries too? This is fine and very common</li>
        <li>Do they live nearby? Dealing with an estate remotely is harder</li>
        <li>Have you actually asked them? Always check people are willing before naming them</li>
      </ul>

      <h2>Paying executors</h2>
      <p>Non-professional executors aren't usually paid, though they can claim reasonable expenses. Professional executors charge fees, which can be substantial. If you appoint professionals, check their fee structure first.</p>
    `
  },
  'apply-for-probate': {
    title: 'How to Apply for Probate',
    content: `
      <p>Applying for probate can seem daunting, but it's a process that many people handle themselves without legal help. Here's a practical guide to the process.</p>

      <h2>Before you apply</h2>
      <p>You need to:</p>
      <ul>
        <li>Register the death and get copies of the death certificate (you'll need several)</li>
        <li>Find the original will</li>
        <li>Value the estate - you'll need to know what everything is worth</li>
        <li>Identify all assets and debts</li>
        <li>Work out if inheritance tax is due</li>
      </ul>

      <h2>Valuing the estate</h2>
      <p>You need to establish the value of:</p>
      <ul>
        <li>Property - get an estate agent valuation</li>
        <li>Bank accounts - ask banks for date-of-death balances</li>
        <li>Investments - get valuations from providers</li>
        <li>Personal possessions - be realistic, most aren't worth much</li>
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
        <li>Once you have the grant, you can start collecting assets and paying debts</li>
      </ol>

      <h2>Do you need a solicitor?</h2>
      <p>Many people handle straightforward probates themselves. Consider getting help if the estate is complex, there's inheritance tax to pay, or there are disputes or complications.</p>
    `
  },
  'probate-directory': {
    title: 'Probate Directory',
    content: `
      <p>Administering an estate requires dealing with numerous organisations. Here's a directory of useful contacts and what you'll need to do.</p>

      <h2>Government services</h2>
      <ul>
        <li><strong>Tell Us Once service:</strong> Report a death once and government departments are notified automatically. Available through the registrar when you register the death.</li>
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
        <li>Accountants (for complex tax situations)</li>
        <li>Financial advisers (for investment portfolios)</li>
      </ul>
    `
  },
  'preparing-estate-accounts': {
    title: 'Understanding Estate Accounts',
    content: `
      <p>As an executor, you're responsible for keeping proper accounts of the estate. This isn't optional - you must be able to show beneficiaries exactly what came in and went out.</p>

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
        <li>Probate fees</li>
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
        <li>Get receipts when you distribute assets to beneficiaries</li>
      </ul>

      <h2>When to finalise accounts</h2>
      <p>Don't rush to finalise accounts. Wait until you're certain all liabilities have been paid. If you distribute everything and then a creditor appears, you could be personally liable. Most estates can be finalised within a year, but complex estates may take longer.</p>
    `
  },
  'do-i-need-an-lpa': {
    title: 'Do I Need an LPA?',
    content: `
      <p>A Lasting Power of Attorney (LPA) isn't legally required, but it's one of the most important documents you can put in place. Here's why you should seriously consider making one.</p>

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
        <li>A court application costing over £400 just to apply</li>
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
      <p>The time to make an LPA is now, while you have mental capacity. You cannot make an LPA once you've lost capacity - that's precisely when you'd need it. Don't wait until it's too late.</p>
    `
  },
  'make-an-lpa': {
    title: 'How Do I Make an LPA?',
    content: `
      <p>Making a Lasting Power of Attorney is a straightforward process, though there are several steps to follow. Here's what's involved.</p>

      <h2>Step 1: Decide what type of LPA you need</h2>
      <p>You can make:</p>
      <ul>
        <li>Property and Financial Affairs LPA only</li>
        <li>Health and Welfare LPA only</li>
        <li>Both types (recommended)</li>
      </ul>

      <h2>Step 2: Choose your attorneys</h2>
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
      <p>An LPA must be registered with the Office of the Public Guardian before it can be used. Registration currently costs £82 per LPA and takes about 10 weeks. You can apply for fee exemptions or reductions if you're on certain benefits or have a low income.</p>

      <h2>When can the LPA be used?</h2>
      <p>A Property and Financial Affairs LPA can be used as soon as it's registered (with your permission). A Health and Welfare LPA can only be used when you lack capacity to make specific decisions yourself.</p>
    `
  },
  'attorneys': {
    title: 'What is an Attorney?',
    content: `
      <p>An attorney (in the context of a Lasting Power of Attorney) is someone you appoint to make decisions on your behalf if you become unable to make them yourself. This is different from a lawyer - in this context, "attorney" simply means your chosen representative.</p>

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
      <p>Attorneys can claim reasonable out-of-pocket expenses. Professional attorneys can charge for their services, but lay attorneys (family and friends) aren't usually paid beyond expenses.</p>
    `
  },
  'choosing-attorneys': {
    title: 'Choosing Attorneys',
    content: `
      <p>Choosing who to appoint as your attorney is one of the most important decisions you'll make. These people will have significant power over your life and finances, so choose carefully.</p>

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
    `
  },
  'lpa-cost': {
    title: 'How Much Does an LPA Cost?',
    content: `
      <p>The cost of making a Lasting Power of Attorney depends on how you go about it. Here's a breakdown of what you can expect to pay.</p>

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
      <p>Making LPAs while you have capacity is significantly cheaper than the alternative.</p>

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
      <p>If you die after getting married without making a new will:</p>
      <ul>
        <li>Your estate will be distributed under the intestacy rules</li>
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
      <p>Many married couples choose mirror wills - matching wills that leave everything to each other, then to children or other beneficiaries if both have died. These are simpler and more cost-effective than having completely different wills.</p>

      <h2>Things to discuss</h2>
      <ul>
        <li>Who inherits if you both die?</li>
        <li>Do you want to leave anything to people outside your marriage?</li>
        <li>Who should look after any children?</li>
        <li>Who will be your executors?</li>
      </ul>
    `
  },
  'separated-from-partner-divorce-wills': {
    title: 'Separated from Partner - Do I Need a New Will?',
    content: `
      <p>Relationship breakdown is one of the most important triggers for updating your will. Whether you're separating, divorcing, or dissolving a civil partnership, your will needs attention.</p>

      <h2>Separation - what happens to your will</h2>
      <p>If you're separated but not yet divorced, your existing will remains valid. This might not be what you want:</p>
      <ul>
        <li>Your estranged spouse may still inherit everything</li>
        <li>They may still be named as your executor</li>
        <li>They may still be your children's guardian</li>
      </ul>
      <p>Separation alone doesn't change your will - you need to make a new one.</p>

      <h2>Divorce - what changes automatically</h2>
      <p>When your divorce becomes final (decree absolute), the law treats your will as if your ex-spouse has died. This means:</p>
      <ul>
        <li>Any gifts to them fail</li>
        <li>They're removed as executor</li>
        <li>The rest of your will remains valid</li>
      </ul>

      <h2>Why you still need a new will</h2>
      <p>Even though divorce removes your ex from your will, you should still make a new one because:</p>
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
      <p>If you have children with your ex-partner, think carefully about guardianship. Your ex will usually have parental responsibility regardless of your will, but you should still name a guardian in case you're both unavailable.</p>

      <h2>Financial orders</h2>
      <p>If your divorce settlement includes provisions about what happens when you die (such as life insurance policies or pension nominations), make sure your new will is consistent with these obligations.</p>
    `
  },
  'legal-guardians': {
    title: 'Guardianship and Wills',
    content: `
      <p>If you have children under 18, naming a guardian in your will is one of the most important things you can do. A guardian is the person who would look after your children if you're no longer able to.</p>

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
        <li><strong>Existing family:</strong> How will your children fit in?</li>
        <li><strong>Financial situation:</strong> Can they afford to care for more children? (You can help by leaving money)</li>
        <li><strong>Relationship:</strong> Do your children know and like them?</li>
        <li><strong>Willingness:</strong> Have they agreed to take on this responsibility?</li>
      </ul>

      <h2>What about my ex-partner?</h2>
      <p>If your children's other parent has parental responsibility (which is usually the case), they will generally become the sole carer if you die. Your guardian would only step in if both parents are unavailable. Even so, naming a guardian is important as a backup and gives the court guidance about your wishes.</p>

      <h2>Money for guardians</h2>
      <p>Consider whether your guardians will need financial support to raise your children. You can:</p>
      <ul>
        <li>Leave money specifically for your children's care</li>
        <li>Set up a trust to manage money until children are older</li>
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
        <li>Potentially providing for stepchildren you've helped raise</li>
        <li>Being fair to everyone without creating resentment</li>
      </ul>

      <h2>What can go wrong</h2>
      <p>Common problems include:</p>
      <ul>
        <li><strong>Sideways disinheritance:</strong> You leave everything to your spouse, who later leaves it all to their children - your children get nothing</li>
        <li><strong>Stepchildren overlooked:</strong> Stepchildren don't automatically inherit under intestacy rules</li>
        <li><strong>Family conflict:</strong> Different ideas about fair distribution</li>
        <li><strong>Home ownership issues:</strong> Surviving spouse needs to live in the home, but children want their inheritance</li>
      </ul>

      <h2>Solutions to consider</h2>
      <h3>Life interest trusts</h3>
      <p>You can leave your spouse the right to live in your home and receive income from your estate during their lifetime, with the capital then passing to your children. This provides for your spouse while protecting your children's inheritance.</p>

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
      </ul>
    `
  },
  'wills-and-stepchildren': {
    title: 'Wills and Stepchildren',
    content: `
      <p>Stepchildren occupy an unusual position in inheritance law. Many step-parents think of their stepchildren as their own, but the law doesn't see it that way unless you take specific action.</p>

      <h2>The legal position</h2>
      <p>Unless you've formally adopted your stepchildren:</p>
      <ul>
        <li>They have no automatic right to inherit from you</li>
        <li>They're not included in the intestacy rules</li>
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
      </ul>

      <h2>Considerations</h2>
      <p>Think about:</p>
      <ul>
        <li><strong>Fairness vs equality:</strong> Equal shares may not always be fair - consider circumstances</li>
        <li><strong>Age of stepchildren:</strong> Adult stepchildren may need less than young ones</li>
        <li><strong>Other inheritances:</strong> Will they inherit from their biological parents?</li>
        <li><strong>Your relationship:</strong> Are you close? Have you contributed to their upbringing?</li>
        <li><strong>Your partner's wishes:</strong> Discuss together and try to coordinate your wills</li>
      </ul>

      <h2>Adoption</h2>
      <p>If you adopt your stepchildren, they become your legal children. They would then:</p>
      <ul>
        <li>Inherit under intestacy rules if you die without a will</li>
        <li>Have the same legal status as biological children</li>
        <li>Lose their automatic inheritance rights from their biological parent (unless that parent's will specifically includes them)</li>
      </ul>

      <h2>Inheritance (Provision for Family and Dependants) Act</h2>
      <p>Stepchildren who were financially dependent on you may be able to make a claim against your estate under this Act if you don't provide for them. However, relying on this is uncertain and expensive - it's far better to make your wishes clear in a will.</p>
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
        <li>The person arranging the funeral (though relatives take priority)</li>
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
        <li>Death certificates - currently £11 each. Order several - you'll need them</li>
      </ul>

      <h2>Tell Us Once service</h2>
      <p>The registrar can set up the Tell Us Once service, which notifies multiple government departments about the death in one go. This includes HMRC, DWP, DVLA, and the Passport Office. It saves you having to contact each organisation separately.</p>
    `
  },
  'death-of-a-spouse': {
    title: 'Death of a Spouse',
    content: `
      <p>Losing a spouse is devastating. While grieving, you'll also need to deal with practical and legal matters. Here's a guide to help you through this difficult time.</p>

      <h2>Immediate steps</h2>
      <ul>
        <li>Get the medical certificate of cause of death from the doctor</li>
        <li>Register the death within 5 days</li>
        <li>Arrange the funeral</li>
        <li>Find the will (if there is one)</li>
        <li>Start notifying organisations</li>
      </ul>

      <h2>Financial matters</h2>
      <h3>Joint accounts</h3>
      <p>Joint bank accounts usually pass automatically to the surviving holder. Notify the bank - they may freeze the account temporarily while updating records, so ensure you have access to other funds.</p>

      <h3>Sole accounts</h3>
      <p>You can't access your spouse's sole accounts until probate is granted. Banks may release small amounts for funeral expenses.</p>

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
      <p>Under intestacy rules, a surviving spouse receives a substantial share of the estate. If there's a will, you inherit whatever your spouse left you. Spouses have strong rights to make claims against the estate if not adequately provided for.</p>

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
      <p>Arranging a funeral while grieving is difficult. Here's practical guidance to help you through the process.</p>

      <h2>First steps</h2>
      <ul>
        <li>Check if the deceased left any funeral wishes (in their will or elsewhere)</li>
        <li>Register the death - you'll need the green form before a funeral can proceed</li>
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
        <li>The deceased's estate (banks may release funds before probate for funeral expenses)</li>
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
      <p>Sorting through a loved one's personal belongings is emotionally difficult. There's no rush - take your time and don't feel pressured to clear everything immediately.</p>

      <h2>What does the will say?</h2>
      <p>Check the will first. It may include:</p>
      <ul>
        <li>Specific gifts of particular items to named people</li>
        <li>A general gift of "personal possessions" or "chattels" to someone</li>
        <li>Instructions about what should happen to everything else</li>
      </ul>

      <h2>If there's no will</h2>
      <p>Personal belongings form part of the estate and pass according to intestacy rules - usually to the spouse or closest relatives.</p>

      <h2>Dealing with specific gifts</h2>
      <p>If the will leaves specific items to named people, the executor should:</p>
      <ul>
        <li>Make a list of all specific gifts</li>
        <li>Locate each item</li>
        <li>Contact beneficiaries to arrange collection or delivery</li>
        <li>Keep records of what's been distributed</li>
      </ul>

      <h2>Valuing belongings</h2>
      <p>For probate purposes, you need to value personal possessions. For most household contents:</p>
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
              <Link to="/resource" className="btn btn-primary">Browse All Resources</Link>
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
                <a href="https://makeawillonline.co.uk/my-will" className="btn btn-primary btn-lg">Get Started</a>
              </div>
            </div>

            <aside className="sidebar">
              {/* Resource illustration */}
              {(() => {
                const IllustrationComponent = resourceToIllustration[slug] || MakingWillIllustration;
                return (
                  <div className="sidebar-widget" style={{ textAlign: 'center' }}>
                    <IllustrationComponent />
                  </div>
                );
              })()}

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
                <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Contact Us</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResourcePage;
