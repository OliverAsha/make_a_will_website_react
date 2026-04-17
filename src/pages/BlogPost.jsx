import { useParams, useLocation, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';

// External authority links for further reading by category
const externalResourcesByCategory = {
  'General Guidance': [
    { url: 'https://www.gov.uk/make-will', title: 'Making a Will - GOV.UK', description: 'Official UK Government guidance on making a will' },
    { url: 'https://www.citizensadvice.org.uk/family/death-and-wills/wills/', title: 'Wills - Citizens Advice', description: 'Free advice on wills and inheritance' }
  ],
  'Family Situations': [
    { url: 'https://www.gov.uk/make-will', title: 'Making a Will - GOV.UK', description: 'Official UK Government guidance on making a will' },
    { url: 'https://www.citizensadvice.org.uk/family/death-and-wills/wills/', title: 'Wills - Citizens Advice', description: 'Free advice on wills and inheritance' },
    { url: 'https://www.gov.uk/child-benefit-child-changes-address', title: 'Children and Family - GOV.UK', description: 'Government guidance for families' }
  ],
  'Executors and Probate': [
    { url: 'https://www.gov.uk/applying-for-probate', title: 'Applying for Probate - GOV.UK', description: 'Official guide to the probate process' },
    { url: 'https://www.gov.uk/wills-probate-inheritance/being-an-executor', title: 'Being an Executor - GOV.UK', description: 'Official guide to executor duties' },
    { url: 'https://www.gov.uk/government/news/probate-waiting-times-halved-thanks-to-government-push', title: 'Probate Waiting Times Update - GOV.UK', description: 'Latest government update on probate processing times' }
  ],
  'Wills for British Expats': [
    { url: 'https://www.gov.uk/make-will', title: 'Making a Will - GOV.UK', description: 'Official UK Government guidance on making a will' },
    { url: 'https://www.gov.uk/government/publications/living-abroad', title: 'Living Abroad - GOV.UK', description: 'Government guidance for British citizens abroad' }
  ]
};

// Blog post content database
const blogContent = {
  'why-make-a-will': {
    title: 'Why Make a Will?',
    date: '2025-10-12',
    category: 'General Guidance',
    image: '/logos/blog-why-make-a-will.svg',
    content: `
      <p>Making a will is one of the most important things you can do to protect your family and ensure your wishes are carried out after you die. Yet surveys consistently show that around half of adults in the UK don't have one. Here's why you should.</p>

      <h2>You decide who inherits</h2>
      <p>Without a will, the law decides who gets your estate through the <a href="/resource/dying-without-a-will-intestacy">intestacy rules</a>. These rules are rigid and may not match your wishes at all. For example:</p>
      <ul>
        <li>Unmarried partners receive nothing, regardless of how long you've been together</li>
        <li>Stepchildren don't inherit unless you've adopted them</li>
        <li>Friends and charities you'd like to remember get nothing</li>
        <li>Your spouse might have to share your estate with your children</li>
      </ul>
      <p>A will puts you in control. You can leave your estate to whoever you choose, in whatever proportions you decide.</p>

      <h2>Protect your children</h2>
      <p>If you have children under 18, a will lets you <a href="/resource/legal-guardians">name guardians</a> - the people who would look after your children if you're no longer able to. Without this, the court decides, and they may not choose who you would have chosen.</p>
      <p>You can also set up <a href="/resource/trusts-in-wills">trusts</a> within your will to manage money for your children until they're old enough to handle it themselves. Many parents choose to delay inheritance until children are 21 or 25, rather than letting them inherit everything at 18.</p>

      <h2>Reduce inheritance tax</h2>
      <p>Careful will planning can significantly <a href="/charity-gifts-in-wills-how-and-why">reduce the inheritance tax bill</a> on your estate. Options include:</p>
      <ul>
        <li>Using your spouse's nil-rate band effectively</li>
        <li>Leaving at least 10% to charity (which reduces the IHT rate from 40% to 36%)</li>
        <li>Making use of business and agricultural relief</li>
        <li>Setting up trusts for future generations</li>
      </ul>

      <h2>Make things easier for your family</h2>
      <p>Dealing with someone's affairs after they die is hard enough without uncertainty about their wishes. A clear will makes the process much easier:</p>
      <ul>
        <li><a href="/resource/executors">Executors</a> know what to do and have clear authority to act</li>
        <li>Beneficiaries know what they're entitled to</li>
        <li>Disputes and uncertainty are minimised</li>
        <li>The estate can be administered more quickly</li>
      </ul>

      <h2>It's easier than you think</h2>
      <p>Many people put off making a will because they think it will be complicated or expensive. With modern online services like ours, you can create a solicitor-checked will in about 15 minutes, from the comfort of your home. And with lifetime updates included, you can change it whenever you need to.</p>

      <h2>When should I make a will?</h2>
      <p>Now. Whatever your age or circumstances, you should have a will. Key life events that should definitely prompt you to make or update a will include:</p>
      <ul>
        <li><a href="/resource/i-am-getting-married-do-i-need-a-will">Getting married</a> (marriage cancels previous wills)</li>
        <li>Having children</li>
        <li>Buying property</li>
        <li>Divorce or separation</li>
        <li>Death of a beneficiary or executor</li>
        <li>Significant changes in your assets</li>
      </ul>
    `
  },
  'why-write-a-will': {
    title: 'Why Write a Will?',
    date: '2025-10-12',
    category: 'General Guidance',
    image: '/logos/blog-why-write-a-will.svg',
    content: `
      <p>If you've ever wondered whether you really need to write a will, the answer is almost certainly yes. Here's a comprehensive look at why writing a will matters and what can happen if you don't.</p>

      <h2>The consequences of not having a will</h2>
      <p>When someone dies without a will (<a href="/resource/dying-without-a-will-intestacy">intestate</a>), their estate is distributed according to strict legal rules. These intestacy rules were last updated in 2014 and may produce results you wouldn't want:</p>

      <h3>For married couples</h3>
      <p>Your spouse doesn't automatically get everything. If you have children, your spouse gets the first £322,000 plus personal possessions, and only half of anything above that. Your children get the rest.</p>

      <h3>For unmarried couples</h3>
      <p>Your <a href="/do-you-cohabit">partner gets absolutely nothing</a> under intestacy rules - even if you've been together for decades, have children together, or own a home jointly. Everything goes to blood relatives.</p>

      <h3>For those with stepchildren</h3>
      <p><a href="/resource/wills-and-stepchildren">Stepchildren</a> you've raised as your own receive nothing unless you've formally adopted them. Only biological and legally adopted children inherit.</p>

      <h2>Who needs a will most?</h2>
      <p>While everyone should have a will, it's especially critical if you:</p>
      <ul>
        <li>Live with a partner but aren't married</li>
        <li>Have children from different relationships</li>
        <li>Want to leave anything to friends or charities</li>
        <li>Own property</li>
        <li>Own a business</li>
        <li>Have complex family relationships</li>
        <li>Have specific wishes about your funeral</li>
        <li>Want to protect vulnerable beneficiaries</li>
      </ul>

      <h2>What can you include in a will?</h2>
      <p>A will isn't just about who gets what. You can also:</p>
      <ul>
        <li><a href="/resource/legal-guardians">Appoint guardians</a> for your children</li>
        <li>Set up <a href="/resource/trusts-in-wills">trusts</a> to protect assets</li>
        <li>Specify when beneficiaries inherit (at 18, 21, 25, etc.)</li>
        <li>Leave instructions about your funeral</li>
        <li>Make charitable donations</li>
        <li>Specify how debts should be handled</li>
        <li>Include letter of wishes for guidance to executors</li>
      </ul>

      <h2>Common myths about wills</h2>
      <h3>"I'm too young to need a will"</h3>
      <p>Anyone over 18 can make a will, and should. Accidents happen at any age. If you have any assets or anyone who depends on you, you need a will.</p>

      <h3>"Everything will go to my spouse anyway"</h3>
      <p>Not necessarily true - see the intestacy rules above. And even if your spouse does inherit, is that what you want for your children?</p>

      <h3>"Wills are expensive"</h3>
      <p>Online will services have made will-writing affordable for everyone. You can get a solicitor-checked will for less than the cost of a nice meal out.</p>

      <h3>"My family know what I want"</h3>
      <p>Unless it's written in a valid will, your wishes have no legal force. Verbal instructions can be disputed, misremembered, or simply ignored.</p>
    `
  },
  '5-reasons-to-update-your-will': {
    title: 'Have You Thought About These 5 Reasons to Update Your Will?',
    date: '2025-10-20',
    category: 'General Guidance',
    image: '/logos/blog-5-reasons-update-will.svg',
    content: `
      <p>Making a will isn't a one-time event. Your circumstances change over time, and your will should change with them. Here are five key reasons why you might need to update your will.</p>

      <h2>1. Marriage or divorce</h2>
      <p>These are probably the most important triggers for updating your will.</p>

      <h3>Getting married</h3>
      <p><a href="/resource/i-am-getting-married-do-i-need-a-will">Marriage automatically cancels any existing will</a> you have. This is the law in England and Wales. If you marry without making a new will, you'll die intestate, which may not reflect your wishes at all.</p>

      <h3>Getting divorced</h3>
      <p>When your divorce becomes final, your ex-spouse is treated as if they had died for the purposes of your will. They won't inherit and can't act as executor. However, this might mean your estate goes to someone you didn't intend, so you should still make a new will.</p>

      <h3><a href="/resource/separated-from-partner-divorce-wills">Separation</a></h3>
      <p>Unlike divorce, separation has no effect on your will. Your estranged spouse could still inherit everything. If you've separated, update your will immediately.</p>

      <h2>2. Children and grandchildren</h2>
      <p>The arrival of children and grandchildren often prompts people to think about their will for the first time. But you should also update an existing will when:</p>
      <ul>
        <li>You have a new child or grandchild</li>
        <li>You want to change how money is divided between children</li>
        <li>Your children reach adulthood (you might want to remove trustees)</li>
        <li>A child has special needs requiring trust arrangements</li>
        <li>Your chosen <a href="/resource/legal-guardians">guardians</a> are no longer appropriate</li>
      </ul>

      <h2>3. Death of a beneficiary or executor</h2>
      <p>If someone named in your will dies before you, their gift might fail or pass to someone you didn't intend. Similarly, if an executor dies, your remaining executors might be stretched or you might be left with no one to administer your estate.</p>
      <p>Review your will after any bereavement and make changes if needed.</p>

      <h2>4. Changes to your assets</h2>
      <p>Your will should reflect what you actually own. Consider updating when:</p>
      <ul>
        <li>You buy or sell property</li>
        <li>You inherit money or assets</li>
        <li>You start or sell a business</li>
        <li>You receive a significant windfall</li>
        <li>Your assets reduce significantly (paying for care, for example)</li>
        <li>You acquire assets abroad</li>
      </ul>
      <p>Specific gifts in your will might not work as intended if the asset no longer exists.</p>

      <h2>5. Your relationships change</h2>
      <p>People grow apart, fall out, or simply drift away. If your feelings about someone have changed significantly, your will might need to change too. Equally, you might want to add people who have become important to you since you made your will.</p>
      <p>Remember that anyone can potentially challenge a will, so if you're making significant changes (especially excluding family members), it's worth explaining your reasons.</p>

      <h2>How often should I review my will?</h2>
      <p>As a rule of thumb, review your will every three to five years, even if nothing obvious has changed. Life circumstances evolve gradually, and a regular review ensures your will stays current.</p>
      <p>With our <a href="/lifetime-updates">lifetime updates feature</a>, you can revise your will whenever you need to at no extra cost. Learn <a href="/resource/how-to-change-your-will">how to change your will</a> step by step. There's no excuse for an outdated will.</p>
    `
  },
  'children-and-gifts-in-wills': {
    title: 'Children and Gifts in Wills: 5 Ways to Get Peace of Mind',
    date: '2025-08-22',
    category: 'Family Situations',
    image: '/logos/blog-children-gifts-wills.svg',
    content: `
      <p>When you have children, making a will becomes even more important. Here are five key ways your will can protect your children and give you peace of mind.</p>

      <h2>1. Appoint guardians</h2>
      <p>If you have children under 18, your will is the only way to legally appoint <a href="/resource/legal-guardians">guardians</a> - the people who would raise your children if you die while they're still young.</p>
      <p>Think carefully about who you'd want:</p>
      <ul>
        <li>Do they share your values and parenting approach?</li>
        <li>Are they physically able to take on young children?</li>
        <li>Do they have room for your children in their home and life?</li>
        <li>Would your children be happy living with them?</li>
        <li>Have you actually asked them?</li>
      </ul>
      <p>Without named guardians, the court decides who looks after your children. They'll try to make a good decision, but it might not be who you would have chosen.</p>

      <h2>2. Control when children inherit</h2>
      <p>Under English law, children can't inherit directly until they're 18. But even at 18, many young people aren't ready to handle a large inheritance responsibly.</p>
      <p>Your will can specify that children don't receive their inheritance until they're older - 21, 25, or whatever age you choose. In the meantime, <a href="/resource/trusts-in-wills">trustees</a> manage the money and can use it for the children's benefit.</p>
      <p>You can even set up graduated distributions - perhaps a third at 21, a third at 25, and the remainder at 30.</p>

      <h2>3. Provide for children's immediate needs</h2>
      <p>While waiting for your estate to be sorted out, your children will still need money for everyday expenses. Consider:</p>
      <ul>
        <li>Leaving cash legacies specifically for immediate needs</li>
        <li>Life insurance policies written in trust (so they pay out immediately, outside your estate)</li>
        <li>Giving trustees power to access funds quickly for urgent needs</li>
      </ul>

      <h2>4. Protect children from different relationships</h2>
      <p>If you have children from a previous relationship and are now with a new partner, you face a common dilemma: how do you provide for your partner while ensuring your children ultimately inherit?</p>
      <p>Options include:</p>
      <ul>
        <li><strong>Life interest trusts:</strong> Your partner can live in your home and receive income for their lifetime, but the capital ultimately passes to your children</li>
        <li><strong>Specific legacies:</strong> Leave your children specific assets or amounts, with the rest going to your partner</li>
        <li><strong>Insurance policies:</strong> Nominate different beneficiaries for different policies</li>
      </ul>

      <h2>5. Plan for children with special needs</h2>
      <p>If your child has disabilities or special needs, standard will provisions might not be appropriate. A straightforward inheritance could affect their benefits eligibility.</p>
      <p>A discretionary trust can provide for your child without affecting their entitlement to means-tested benefits. The trustees can use the trust funds to improve your child's quality of life without the funds being counted as their assets.</p>
      <p>This is a complex area - if your child has significant special needs, consider getting specialist legal advice.</p>
    `
  },
  'do-you-cohabit': {
    title: 'Do You Cohabit? Your Key Questions Answered',
    date: '2025-07-25',
    category: 'Family Situations',
    image: '/logos/blog-do-you-cohabit.svg',
    content: `
      <p>More and more couples are choosing to live together without getting married. If you're one of them, you might be surprised to learn how little legal protection cohabitation provides - especially when it comes to inheritance.</p>

      <h2>What is the legal position for cohabiting couples?</h2>
      <p>Despite what many people believe, there is no such thing as "common law marriage" in England and Wales. No matter how long you've lived together, cohabiting couples don't have the same automatic rights as married couples or civil partners.</p>

      <h2>What happens if my partner dies without a will?</h2>
      <p>This is where it gets serious. Under the <a href="/resource/dying-without-a-will-intestacy">intestacy rules</a>:</p>
      <ul>
        <li>If your partner dies without a will, you inherit absolutely nothing</li>
        <li>Their estate goes to their children, parents, siblings, or other blood relatives</li>
        <li>You could be left homeless if the property was in their sole name</li>
        <li>Even if you've been together for 30 years and raised children together</li>
      </ul>
      <p>This is true regardless of how committed your relationship is or how financially intertwined your lives have become.</p>

      <h2>Can I make a claim on my partner's estate?</h2>
      <p>You might be able to make a claim under the Inheritance (Provision for Family and Dependants) Act 1975 if you can prove:</p>
      <ul>
        <li>You lived together as if you were married for at least two years before the death, OR</li>
        <li>You were being maintained by the deceased immediately before their death</li>
      </ul>
      <p>However, making a claim is expensive, stressful, uncertain, and causes family conflict. It's far better to make a will.</p>

      <h2>What should cohabiting couples do?</h2>

      <h3>Make wills</h3>
      <p>The single most important thing you can do. Both partners should <a href="/resource/do-i-need-to-make-a-will">make wills</a> leaving their estate (or the relevant part of it) to each other. This ensures your partner is provided for.</p>

      <h3>Review property ownership</h3>
      <p>If you own property together, understand how you hold it:</p>
      <ul>
        <li><strong>Joint tenants:</strong> The property automatically passes to the survivor when one of you dies (regardless of what the will says)</li>
        <li><strong>Tenants in common:</strong> Each person's share passes according to their will</li>
      </ul>
      <p>Consider what arrangement works best for your situation.</p>

      <h3>Nominate pension beneficiaries</h3>
      <p>Pension death benefits don't usually form part of your estate. Check who you've nominated and update the nomination if needed.</p>

      <h3>Consider life insurance</h3>
      <p>A life insurance policy written in trust can provide your partner with immediate funds after your death, without having to wait for probate.</p>

      <h2>Why don't we just get married?</h2>
      <p>Marriage isn't for everyone, and that's fine. But understand the financial implications of not marrying, and take steps to protect each other. A will is the minimum.</p>
    `
  },
  'uk-expat-wills': {
    title: 'Wills for British Ex-Pats',
    date: '2025-07-11',
    category: 'Wills for British Expats',
    image: '/logos/blog-uk-expat-wills.svg',
    content: `
      <p>If you're a British citizen living abroad, or you have assets in multiple countries, your will situation is more complicated than most. Here's what you need to know.</p>

      <h2>Which country's law applies?</h2>
      <p>This is the fundamental question for expats. Generally:</p>
      <ul>
        <li><strong>Immovable property (land, buildings):</strong> Usually governed by the law of the country where it's located</li>
        <li><strong>Movable property (money, investments, possessions):</strong> Usually governed by the law of your domicile</li>
      </ul>
      <p>Domicile is a complex legal concept - it's roughly where you consider your permanent home to be, but it's not the same as residence or nationality.</p>

      <h2>Do I need more than one will?</h2>
      <p>Often, yes. If you have assets in multiple countries, you may need a separate will in each country to deal with assets there. Benefits include:</p>
      <ul>
        <li>Each will is in the local language</li>
        <li>Each will complies with local legal requirements</li>
        <li>Each estate can be administered independently</li>
        <li>Faster and simpler probate process</li>
      </ul>

      <h2>Be careful with revocation clauses</h2>
      <p>Most wills include a clause revoking all previous wills. If you have multiple wills for different countries, this is a problem - making a new will for one country could accidentally cancel your wills elsewhere.</p>
      <p>Solution: Each will should specifically state which previous wills it revokes (if any) and which it leaves in place.</p>

      <h2>Forced heirship rules</h2>
      <p>Many countries have "forced heirship" rules that require you to leave a certain proportion of your estate to specific people (usually close family members). This is different from England and Wales, where you're generally free to leave your estate to whoever you like.</p>
      <p>If you have assets in a country with forced heirship rules, those rules may apply regardless of what your will says.</p>

      <h2>UK assets</h2>
      <p>Even if you've emigrated, you may still have assets in the UK:</p>
      <ul>
        <li>UK property</li>
        <li>UK bank accounts or investments</li>
        <li>UK pension rights</li>
        <li>Inheritance expectations from UK relatives</li>
      </ul>
      <p>You need a valid <a href="/resource/do-i-need-to-make-a-will">UK will</a> to deal with these assets. Our service is ideal for British expats who need a UK will.</p>

      <h2>Tax implications</h2>
      <p>Living abroad doesn't necessarily exempt you from UK <a href="/charity-gifts-in-wills-how-and-why">inheritance tax</a>. The rules are complex and depend on your domicile status. If you have substantial assets, get specialist tax advice.</p>

      <h2>Getting it right</h2>
      <p>International estate planning is complicated. At minimum:</p>
      <ul>
        <li>Make sure you have a valid will covering UK assets</li>
        <li>Consider whether you need separate wills for other countries</li>
        <li>Be careful about revocation clauses</li>
        <li>Review your wills when your circumstances change</li>
        <li>Consider getting specialist legal advice for complex situations</li>
      </ul>
    `
  },
  'charity-gifts-in-wills-how-and-why': {
    title: 'Charity Gifts in Wills: How and Why',
    date: '2025-06-18',
    category: 'General Guidance',
    content: `
      <p>Leaving a gift to charity in your will is a wonderful way to support causes you care about and create a lasting legacy. It can also reduce the inheritance tax bill on your estate.</p>

      <h2>Why leave a gift to charity?</h2>
      <p>There are many reasons people choose to include charities in their wills:</p>
      <ul>
        <li><strong>Support a cause you care about:</strong> Whether it's medical research, animal welfare, environmental protection, or local community projects</li>
        <li><strong>Create a lasting legacy:</strong> Your gift will continue to do good long after you're gone</li>
        <li><strong>Say thank you:</strong> Many people leave gifts to charities that have helped them or their loved ones</li>
        <li><strong>Tax efficiency:</strong> Charitable gifts are exempt from inheritance tax and can reduce the rate on the rest of your estate</li>
      </ul>

      <h2>The inheritance tax benefit</h2>
      <p>There are two tax advantages to charitable giving:</p>

      <h3>1. Gifts are tax-exempt</h3>
      <p>Any gift you leave to a registered charity is completely exempt from inheritance tax. If you're leaving money to charity anyway, it makes sense to do it through your will.</p>

      <h3>2. The 10% rule</h3>
      <p>If you leave at least 10% of your "net estate" to charity, the inheritance tax rate on the rest of your estate drops from 40% to 36%. This can make charitable giving effectively "free" - your beneficiaries might receive the same amount while charities also benefit.</p>
      <p>Example: On a £500,000 taxable estate, leaving £50,000 to charity could save £20,000 in tax, meaning your family gets the same amount they would have received anyway.</p>

      <h2>Types of charitable gift</h2>

      <h3>Pecuniary legacy</h3>
      <p>A fixed sum of money, such as "£5,000 to Cancer Research UK". Simple and certain, but inflation may erode its value over time.</p>

      <h3>Residuary gift</h3>
      <p>A share of what's left after debts, expenses, and other gifts have been paid - such as "10% of my residuary estate to the RSPCA". This keeps pace with the value of your estate.</p>

      <h3>Specific gift</h3>
      <p>A particular item, such as "my collection of books to the local library". Make sure the charity can use what you're leaving them.</p>

      <h2>How to leave a charitable gift</h2>
      <p>Simply include the charity as a beneficiary in your will. You'll need:</p>
      <ul>
        <li>The charity's full legal name (not just how they're commonly known)</li>
        <li>Their registered charity number</li>
        <li>A description of what you're leaving them</li>
      </ul>
      <p>Our will-writing service makes it easy to include charitable gifts.</p>

      <h2>Things to consider</h2>
      <ul>
        <li>Make sure your family is adequately provided for first</li>
        <li>Choose charities you genuinely care about</li>
        <li>Consider whether to leave specific amounts or percentages</li>
        <li>Check the charity's registered name and number</li>
        <li>Consider what happens if the charity no longer exists</li>
      </ul>
    `
  },
  'do-I-need-probate': {
    title: 'What is Probate and Do I Need It?',
    date: '2025-09-28',
    category: 'Executors and Probate',
    image: '/logos/blog-do-i-need-probate.svg',
    content: `
      <p>Probate is a word that causes confusion and anxiety. Here's a plain-English explanation of what it is, when you need it, and how the process works. You can also read <a href="/resource/do-i-need-probate">our full guide to probate</a> for more detail.</p>

      <h2>What is probate?</h2>
      <p>Probate is the legal and administrative process of dealing with someone's estate after they die. It involves:</p>
      <ul>
        <li>Proving the will is valid (if there is one)</li>
        <li>Establishing who has authority to deal with the estate</li>
        <li>Gathering all the assets</li>
        <li>Paying debts and taxes</li>
        <li>Distributing what's left to the beneficiaries</li>
      </ul>
      <p>When people talk about "getting probate", they usually mean obtaining a Grant of Probate - the official document that confirms the <a href="/resource/executors">executors'</a> authority to deal with the estate.</p>

      <h2>When is probate needed?</h2>
      <p>You'll usually need a Grant of Probate when:</p>
      <ul>
        <li>The deceased owned property in their sole name</li>
        <li>Bank accounts are above the bank's threshold (typically £5,000-50,000)</li>
        <li>There are stocks, shares, or investments to transfer</li>
        <li>The estate is complex or valuable</li>
      </ul>

      <h2>When might probate NOT be needed?</h2>
      <p>Probate may not be necessary if:</p>
      <ul>
        <li>All assets were held jointly (they pass automatically to the survivor)</li>
        <li>The estate consists only of small bank accounts below the threshold</li>
        <li>All assets were held in trust</li>
        <li>The estate is very simple and all institutions are willing to release funds without a grant</li>
      </ul>

      <h2>The probate process</h2>
      <ol>
        <li><strong>Value the estate:</strong> Establish what the deceased owned and what it's worth</li>
        <li><strong>Complete tax forms:</strong> Inheritance tax forms must be submitted even if no tax is due</li>
        <li><strong><a href="/resource/apply-for-probate">Apply for the grant</a>:</strong> Submit the application to the Probate Registry</li>
        <li><strong>Swear the oath:</strong> Confirm the information is true</li>
        <li><strong>Receive the grant:</strong> Usually 4-8 weeks after application</li>
        <li><strong>Collect assets:</strong> Use the grant to access accounts and transfer assets</li>
        <li><strong>Pay debts and taxes:</strong> Clear all liabilities</li>
        <li><strong>Distribute the estate:</strong> Hand over what's due to beneficiaries</li>
      </ol>

      <h2>How long does probate take?</h2>
      <p>The whole process typically takes 6-12 months, though complex estates can take longer. The grant itself usually comes through within 4-8 weeks of application.</p>

      <h2>Can I do probate myself?</h2>
      <p>Yes, many people handle probate themselves, especially for straightforward estates. The process is bureaucratic rather than complicated. However, consider getting help if:</p>
      <ul>
        <li>There's inheritance tax to pay</li>
        <li>The estate includes a business</li>
        <li>There are assets abroad</li>
        <li>There are disputes or potential claims</li>
        <li>You're just not comfortable doing it yourself</li>
      </ul>
    `
  },
  'dying-without-a-will-intestacy': {
    title: 'What Happens if You Die Without a Will?',
    date: '2025-09-15',
    category: 'General Guidance',
    image: '/logos/blog-dying-without-a-will.svg',
    content: `
      <p>When someone dies without a valid will, they're said to have died "intestate". Instead of their wishes determining who inherits, strict legal rules take over. The results often come as a shock to families. See <a href="/resource/dying-without-a-will-intestacy">our full guide to intestacy</a> for a detailed breakdown.</p>

      <h2>The intestacy rules</h2>
      <p>Under the current rules in England and Wales (updated 2014):</p>

      <h3>If you're married/civil partnered with children</h3>
      <p>Your spouse receives:</p>
      <ul>
        <li>All personal possessions</li>
        <li>The first £322,000 of the estate</li>
        <li>Half of anything above that</li>
      </ul>
      <p>Your children share the other half equally. If any child has already died, their share goes to their children (your grandchildren).</p>

      <h3>If you're married/civil partnered without children</h3>
      <p>Your spouse inherits everything.</p>

      <h3>If you're single with children</h3>
      <p>Your children inherit everything equally.</p>

      <h3>If you're single without children</h3>
      <p>Your estate goes to relatives in this order:</p>
      <ol>
        <li>Parents</li>
        <li>Brothers and sisters (or their children if they've died)</li>
        <li>Half-brothers and half-sisters (or their children)</li>
        <li>Grandparents</li>
        <li>Aunts and uncles (or their children)</li>
        <li>Half-aunts and half-uncles (or their children)</li>
        <li>The Crown (if no relatives can be found)</li>
      </ol>

      <h2>Who doesn't inherit under intestacy?</h2>
      <p>This is where the rules cause the most problems. The following people receive NOTHING:</p>
      <ul>
        <li><strong><a href="/do-you-cohabit">Unmarried partners</a>:</strong> Even if you've lived together for 30 years</li>
        <li><strong>Stepchildren:</strong> Unless you've legally adopted them</li>
        <li><strong>Friends:</strong> No matter how close</li>
        <li><strong>Charities:</strong> Even ones you've supported your whole life</li>
        <li><strong>Carers:</strong> Even family carers who've sacrificed years looking after you</li>
      </ul>

      <h2>Other problems with intestacy</h2>
      <ul>
        <li><strong>No say over executors:</strong> The court decides who administers your estate</li>
        <li><strong>No guardians for children:</strong> The court decides who looks after your children</li>
        <li><strong>Potential tax inefficiency:</strong> No opportunity to plan for inheritance tax</li>
        <li><strong>Family disputes:</strong> Arguments about who should administer the estate</li>
        <li><strong>Delays:</strong> The process is often slower without a will</li>
      </ul>

      <h2>Can someone make a claim?</h2>
      <p>Certain people can apply to court for provision from an intestate estate, but this is expensive, uncertain, and causes family conflict. It's far better to make a will.</p>

      <h2>The solution</h2>
      <p><a href="/resource/do-i-need-to-make-a-will">Making a will</a> is the only way to ensure your estate goes where you want it to go. It doesn't take long, doesn't cost much, and gives you complete control. Don't leave your family to deal with the consequences of intestacy.</p>
    `
  },
  'digital-assets-in-your-will': {
    title: 'Digital Assets in Your Will: What the New Law Means for You',
    date: '2026-01-15',
    category: 'General Guidance',
    image: '/logos/blog-digital-assets.svg',
    content: `
      <p>If you own cryptocurrency, NFTs, or even just valuable online accounts, there's an important legal change you need to know about. The <strong>Property (Digital Assets etc) Act 2025</strong>, which came into force on 2 December 2025, has for the first time officially recognised digital assets as property under English law.</p>
      <p>This is a landmark change — and it has real implications for your will.</p>

      <h2>What changed?</h2>
      <p>Before this Act, there was legal uncertainty about whether things like Bitcoin, Ethereum, NFTs, and other digital tokens could be treated as "property" in the traditional legal sense. Courts had sometimes ruled in favour, but there was no clear statute backing it up.</p>
      <p>The new Act confirms that digital assets can be a <strong>third category of personal property</strong> — alongside physical things (like your car) and legal rights (like a bank debt owed to you). This means they can now be:</p>
      <ul>
        <li>Included in your will with full legal certainty</li>
        <li>Inherited by your beneficiaries</li>
        <li>Managed and distributed by your <a href="/resource/executors">executors</a></li>
        <li>Protected if stolen or misused</li>
      </ul>

      <h2>What counts as a "digital asset"?</h2>
      <p>The term is deliberately broad. It includes:</p>
      <ul>
        <li><strong>Cryptocurrency</strong> — Bitcoin, Ethereum, and other crypto tokens</li>
        <li><strong>NFTs</strong> — digital artwork, collectibles, and tokens</li>
        <li><strong>Domain names</strong> — website addresses you own</li>
        <li><strong>Digital carbon credits</strong></li>
        <li><strong>In-game assets</strong> — valuable items in online games</li>
        <li><strong>Online accounts</strong> — email, social media, cloud storage</li>
      </ul>

      <h2>Why does this matter for your will?</h2>
      <p>Here's the important catch: even though digital assets are now legally property, they <strong>don't automatically fall under a general "personal possessions" clause</strong> in your will. If your will says "I leave all my personal possessions to my spouse," your Bitcoin probably isn't included.</p>
      <p>You need to <strong>specifically mention digital assets</strong> in your will, or include a clause that covers them. Without this, your executors may not have the legal authority to access or distribute them.</p>

      <h2>Practical steps to take now</h2>
      <h3>1. Make a list of your digital assets</h3>
      <p>Write down everything: crypto wallets, exchange accounts, NFTs, domain names, valuable online accounts. Include the platform or service used for each.</p>

      <h3>2. Record access information — but not in your will</h3>
      <p>Your will becomes a public document after probate. <strong>Never include passwords, private keys, or seed phrases in your will.</strong> Instead, store them securely (in a password manager, a sealed envelope, or a secure digital vault) and reference the location in your will.</p>

      <h3>3. Consider a "digital executor"</h3>
      <p>You can appoint someone specifically to handle your digital assets — perhaps someone who understands crypto better than your main executor. They can work alongside your main <a href="/resource/choosing-executors-for-your-will">executor</a> to ensure nothing is lost.</p>

      <h3>4. Update your will</h3>
      <p>If your current will doesn't mention digital assets, it's time to update it. With Make a Will, <a href="/lifetime-updates">lifetime updates are included</a> at no extra cost, so you can add digital asset provisions whenever you need to.</p>

      <h2>What happens if you don't act?</h2>
      <p>Without proper planning, your digital assets could be:</p>
      <ul>
        <li><strong>Lost forever</strong> — cryptocurrency wallets cannot be accessed without private keys</li>
        <li><strong>Locked by platforms</strong> — some services permanently lock accounts after death</li>
        <li><strong>Subject to dispute</strong> — family members may disagree about who owns what</li>
        <li><strong>Missed entirely</strong> — executors may not even know they exist</li>
      </ul>

      <h2>The bottom line</h2>
      <p>The law has caught up with the digital age. If you hold any digital assets of value, make sure your will reflects this. It's one of the simplest things you can do to protect your digital legacy.</p>

      <h2>Sources</h2>
      <ul>
        <li><a href="https://lawcom.gov.uk/news/the-property-digital-assets-etc-act-2025-has-received-royal-assent/" target="_blank" rel="noopener noreferrer">The Property (Digital Assets etc) Act 2025 has received Royal Assent — Law Commission</a></li>
        <li><a href="https://www.thegazette.co.uk/all-notices/content/104332" target="_blank" rel="noopener noreferrer">What testators and executors need to know about the Property (Digital Assets etc) Act 2025 — The Gazette</a></li>
        <li><a href="https://todayswillsandprobate.co.uk/the-property-digital-assets-etc-act-2025-a-foundational-change-to-english-property-law/" target="_blank" rel="noopener noreferrer">The Property (Digital Assets etc) Act 2025: A foundational change to English property law — Today's Wills and Probate</a></li>
        <li><a href="https://www.lyonsbowe.co.uk/blog/dealing-with-digital-assets-in-wills" target="_blank" rel="noopener noreferrer">Dealing With Digital Assets in Wills: A Modern Guide — Lyons Bowe Solicitors</a></li>
        <li><a href="https://www.slaterheelis.co.uk/articles/wills-probate/digital-assets-practical-considerations-for-estate-planning/" target="_blank" rel="noopener noreferrer">Digital Assets: Practical Considerations for Estate Planning — Slater Heelis</a></li>
      </ul>
    `
  },
  'inheritance-tax-changes-2026': {
    title: 'Inheritance Tax Changes in 2026: What You Need to Know',
    date: '2026-02-12',
    category: 'General Guidance',
    image: '/logos/blog-inheritance-tax.svg',
    content: `
      <p>April 2026 brought some of the most significant changes to inheritance tax (IHT) in years. If you own a farm, run a business, or hold AIM-listed shares, these changes could have a major impact on your estate. Here's what's changed and what you should do about it.</p>

      <h2>What's changed from April 2026?</h2>

      <h3>Agricultural and business property relief</h3>
      <p>Previously, farms and qualifying businesses could pass to the next generation completely free of inheritance tax, regardless of value. That unlimited 100% relief has now been capped.</p>
      <p>From April 2026:</p>
      <ul>
        <li><strong>100% relief</strong> applies to the first <strong>£1 million</strong> of combined agricultural and business property</li>
        <li>Above £1 million, relief drops to <strong>50%</strong>, meaning a 20% effective IHT rate on the excess</li>
        <li>Married couples and civil partners can <strong>transfer the allowance</strong>, giving a combined £2 million at 100% relief</li>
      </ul>
      <p>For a family farm worth £2.5 million, this could mean an IHT bill of up to <strong>£300,000</strong> — money that would previously have been entirely exempt.</p>

      <h3>AIM-listed shares</h3>
      <p>Shares listed on the Alternative Investment Market (AIM) previously qualified for 100% business property relief. From April 2026, this has been <strong>cut to 50% for all investors</strong>, creating a 20% effective tax rate on death regardless of how long you've held the shares.</p>

      <h3>Frozen thresholds — until 2031</h3>
      <p>The government has confirmed that the main IHT thresholds remain frozen until at least April 2031:</p>
      <ul>
        <li><strong>Nil-rate band:</strong> £325,000 (frozen since 2009)</li>
        <li><strong>Residence nil-rate band:</strong> £175,000</li>
      </ul>
      <p>With property prices continuing to rise, more estates are being drawn into the IHT net each year. A married couple can still pass on up to £1 million tax-free (combining both allowances), but anything above that is taxed at 40%.</p>

      <h2>What's coming in April 2027?</h2>
      <p>Perhaps the biggest change is still ahead. From <strong>April 2027, unused pension funds will be brought into the IHT net</strong> for the first time.</p>
      <p>Currently, pensions are one of the most tax-efficient ways to pass on wealth because they sit outside your estate for IHT purposes. That's about to change. The government estimates this will affect around 10,500 additional estates per year.</p>
      <p>For those with large pension pots, the combined impact of IHT (40%) and income tax on drawdowns (up to 45%) could create an effective tax rate of <strong>64% to 67%</strong> on inherited pension funds.</p>

      <h2>What should you do?</h2>

      <h3>Review your will</h3>
      <p>If your will was written before these changes, it may no longer achieve what you intended. Tax-planning provisions that relied on unlimited business or agricultural relief may need updating.</p>

      <h3>Consider your pension strategy</h3>
      <p>With pensions coming into the IHT net from 2027, the old advice to "spend other assets first and leave your pension" may no longer make sense. Speak to a financial adviser about whether to adjust your drawdown strategy.</p>

      <h3>Use your allowances</h3>
      <p>Make sure you're taking advantage of:</p>
      <ul>
        <li>Annual gift exemptions (£3,000 per year)</li>
        <li>Small gifts (£250 per person per year)</li>
        <li>Gifts from surplus income</li>
        <li>Potentially exempt transfers (gifts that become tax-free after 7 years)</li>
        <li><a href="/charity-gifts-in-wills-how-and-why">Charitable gifts</a> (which reduce the IHT rate from 40% to 36% if you leave at least 10% of your estate to charity)</li>
      </ul>

      <h3>Get professional advice</h3>
      <p>These changes are complex, and the right strategy depends on your specific circumstances. A solicitor or financial adviser can help you plan effectively. In the meantime, make sure your <a href="/resource/do-i-need-to-make-a-will">will is up to date</a> to reflect the new tax landscape.</p>

      <h2>Sources</h2>
      <ul>
        <li><a href="https://commonslibrary.parliament.uk/research-briefings/cbp-10181/" target="_blank" rel="noopener noreferrer">Changes to agricultural and business property reliefs for inheritance tax — House of Commons Library</a></li>
        <li><a href="https://www.sillslegal.co.uk/news/2026/04/inheritance-tax-changes-in-2026-what-they-mean-for-you" target="_blank" rel="noopener noreferrer">Inheritance Tax Changes in 2026: What They Mean for You — Sills &amp; Betteridge LLP</a></li>
        <li><a href="https://www.wardgoodman.co.uk/blog/inheritance-tax-changes-2026-2027/" target="_blank" rel="noopener noreferrer">Inheritance Tax Changes in 2026–2027: What You Need to Know — Ward Goodman</a></li>
        <li><a href="https://www.womblebonddickinson.com/uk/insights/articles-and-briefings/major-changes-pensions-and-inheritance-tax-april-2027-implications" target="_blank" rel="noopener noreferrer">Major changes to pensions and inheritance tax from April 2027 — Womble Bond Dickinson</a></li>
        <li><a href="https://www.standardlife.co.uk/adviser/business-support/insight-opinion/article-page/pensions-and-inheritance-tax-from-april-2027" target="_blank" rel="noopener noreferrer">From exempt to exposed: April 2027 pension and IHT changes — Standard Life</a></li>
        <li><a href="https://www.blbsolicitors.co.uk/blog/inheritance-tax-changes-2026-what-you-need-to-know/" target="_blank" rel="noopener noreferrer">Inheritance Tax 2026 UK: Key Changes &amp; New Rules Guide — BLB Solicitors</a></li>
      </ul>
    `
  },
  'will-law-reform-2026': {
    title: 'The Biggest Shake-Up in Will Law for Nearly 200 Years — Are You Ready?',
    date: '2026-03-20',
    category: 'General Guidance',
    image: '/logos/blog-will-reform.svg',
    content: `
      <p>The law governing how wills are made in England and Wales hasn't fundamentally changed since <strong>1837</strong> — the year Queen Victoria came to the throne. But that could be about to change.</p>
      <p>In May 2025, the <strong>Law Commission published its landmark report on Modernising Wills Law</strong>, accompanied by a draft Bill that would replace the Wills Act 1837 entirely. The proposals are dramatic. Here's what you need to know.</p>

      <h2>Electronic wills could become legal</h2>
      <p>The most headline-grabbing proposal is the introduction of <strong>electronic wills</strong>. Under the current law, a will must be a physical document, signed by hand and witnessed by two people in the room.</p>
      <p>The Law Commission proposes that wills created and signed electronically should be legally valid, provided they use a "reliable system" that:</p>
      <ul>
        <li>Verifies the identity of the person signing</li>
        <li>Protects the will from unauthorised changes</li>
        <li>Clearly distinguishes the original from copies</li>
      </ul>
      <p>This would be a fundamental change. During the COVID-19 pandemic, temporary measures allowed remote witnessing of wills via video call, and the Law Commission's proposals would put something similar on a permanent footing.</p>

      <h2>Marriage would no longer cancel your will</h2>
      <p>Under the current law, <a href="/resource/i-am-getting-married-do-i-need-a-will">getting married automatically revokes your will</a>. Many people don't know this, and it catches families out every year. The Law Commission recommends <strong>abolishing this rule entirely</strong>.</p>
      <p>This is a common-sense change. If you made a careful, considered will and then got married, there's no good reason for that will to be automatically cancelled.</p>

      <h2>A new mental capacity test</h2>
      <p>The current test for whether someone has the mental capacity to make a will — called the "Banks v Goodfellow" test — dates from <strong>1870</strong>. The Law Commission recommends replacing it with the modern test from the <strong>Mental Capacity Act 2005</strong>, which is already used everywhere else in law.</p>
      <p>This is particularly important as our population ages. The modern test is better understood by doctors, social workers, and care professionals, making it easier to assess capacity and harder for disappointed relatives to challenge a will on capacity grounds.</p>

      <h2>Stronger protection against undue influence</h2>
      <p>Currently, if someone suspects a will was made because of undue influence (for example, a carer pressuring an elderly person to change their will), the burden of proof is entirely on the person making the claim. This makes these cases very difficult to win.</p>
      <p>The Law Commission proposes that where there are <strong>reasonable grounds to suspect undue influence</strong>, the burden should shift to the person trying to enforce the will. This would make it much easier to protect vulnerable people.</p>

      <h2>Wills from age 16</h2>
      <p>Currently, you must be 18 to make a will (with limited exceptions for military personnel). The Law Commission recommends <strong>lowering this to 16</strong>, recognising that many 16-year-olds have jobs, savings, and property they should be able to plan for.</p>

      <h2>A "dispensation" power for courts</h2>
      <p>Perhaps the most significant practical change: the report proposes giving courts the power to <strong>validate a will that doesn't meet all the formal requirements</strong>, as long as the court is satisfied it represents the person's genuine wishes.</p>
      <p>This "dispensation power" exists in Australia and New Zealand and has been used to validate everything from unsigned wills to text messages and even sticky notes — where the evidence clearly shows what the person intended.</p>

      <h2>When will these changes happen?</h2>
      <p>That's the uncertain part. The Law Commission published its report in May 2025, but the government has not yet committed to introducing the Bill. The <a href="https://www.lawsociety.org.uk/contact-or-visit-us/press-office/press-releases/no-will-to-act-on-wills-reform" target="_blank" rel="noopener noreferrer">Law Society has publicly called on the government to act</a>, warning that the current law is failing families.</p>
      <p>For now, the existing rules still apply. Your will must be a physical document, signed by you, and witnessed by two people present at the same time.</p>

      <h2>What should you do now?</h2>
      <p>Don't wait for the law to change. The current rules are clear, and making a will now protects your family immediately. If and when the law changes, you can always update your will — and with Make a Will, <a href="/lifetime-updates">lifetime updates are included</a> at no extra cost.</p>

      <h2>Sources</h2>
      <ul>
        <li><a href="https://www.macfarlanes.com/what-we-think/102eli5/modernising-wills-the-law-commission-publishes-its-final-report-102kbjb/" target="_blank" rel="noopener noreferrer">Modernising wills: the Law Commission publishes its final report — Macfarlanes</a></li>
        <li><a href="https://www.lawsociety.org.uk/contact-or-visit-us/press-office/press-releases/no-will-to-act-on-wills-reform" target="_blank" rel="noopener noreferrer">No will to act on wills reform — The Law Society</a></li>
        <li><a href="https://www.russell-cooke.co.uk/news-and-insights/news/modernising-the-law-of-wills-the-law-commission-report-2025-and-what-it-means-for-you" target="_blank" rel="noopener noreferrer">Modernising the law of wills: The Law Commission Report 2025 — Russell-Cooke</a></li>
        <li><a href="https://www.hja.net/expert-comments/opinion/wills-probate/the-law-commissions-report-on-modernising-wills-law/" target="_blank" rel="noopener noreferrer">The Law Commission's Report on Modernising Wills Law — Hodge Jones &amp; Allen</a></li>
        <li><a href="https://www.willwriters.com/blog/electronic-wills/" target="_blank" rel="noopener noreferrer">Electronic Wills: Modernising Inheritance for the Digital Age — The Society of Will Writers</a></li>
        <li><a href="https://druces.com/will-reform-2025-modernising-the-wills-act/" target="_blank" rel="noopener noreferrer">Will Reform 2025: Key Changes to Modernise the Wills Act — Druces</a></li>
      </ul>
    `
  },
  'probate-delays-what-to-expect': {
    title: 'Probate Delays in 2026: How Long Will You Really Wait?',
    date: '2026-04-10',
    category: 'Executors and Probate',
    image: '/logos/blog-probate-delays.svg',
    content: `
      <p>If you're an <a href="/resource/executors">executor</a> dealing with a loved one's estate, one of your first questions is likely to be: how long will <a href="/resource/do-i-need-probate">probate</a> take? The good news is that processing times have improved significantly. The bad news is that delays aren't over yet — and bigger challenges are coming.</p>

      <h2>The current picture</h2>
      <p>After a severe backlog in 2023 (when some families waited over six months), HMCTS — the government body that processes probate applications — has made real progress:</p>
      <ul>
        <li><strong>Online applications:</strong> typically processed within <strong>4-5 weeks</strong></li>
        <li><strong>Paper applications:</strong> still taking up to <strong>13 weeks</strong></li>
        <li><strong>Overall average:</strong> around <strong>6 weeks</strong> from submission to grant</li>
      </ul>
      <p>That's a significant improvement from the 12+ weeks at the end of 2023 and the 23-week paper application timescales we saw at the worst of the backlog.</p>

      <h2>Online vs. paper: it makes a big difference</h2>
      <p>The single most important thing you can do to speed up probate is <strong>apply online</strong>. Around 80% of applications are now submitted digitally, and they're processed much faster than paper ones.</p>
      <p>HMCTS has been expanding the types of application that can be submitted online. Previously, only straightforward cases with a will could use the digital service. Now, more complex cases are being added, and HMCTS plans to allow <strong>intestacy applications</strong> (where there's no will) to be submitted online by summer 2026.</p>

      <h2>Why do delays still happen?</h2>
      <p>Even with improvements, certain things can slow down your application:</p>
      <ul>
        <li><strong>Errors on the application form</strong> — mistakes in names, dates, or values can cause your application to be "stopped" (put on hold) while HMCTS requests corrections</li>
        <li><strong>Missing documents</strong> — the original will must be submitted; copies are not accepted</li>
        <li><strong>Caveats</strong> — if someone lodges a caveat (a legal objection to probate being granted), your application is frozen until it's resolved. Caveat applications have risen 12% recently as rising property prices fuel disputes</li>
        <li><strong>Complex estates</strong> — estates with overseas assets, trusts, or business interests take longer</li>
        <li><strong>Q1 pressure</strong> — January to March is HMCTS's busiest period, so applications during this time may take longer</li>
      </ul>

      <h2>The pension challenge ahead</h2>
      <p>From <strong>April 2027, unused pension funds will come into the inheritance tax net</strong>. This will make many more estates liable for IHT, which means more estates will need to complete the full IHT reporting process before they can apply for probate.</p>
      <p>The <a href="https://www.lawgazette.co.uk/features/legacy-system/5126439.article" target="_blank" rel="noopener noreferrer">Law Gazette has warned</a> that this could create a fresh wave of delays, as executors struggle with more complex tax calculations and HMCTS handles a higher volume of IHT-linked applications.</p>

      <h2>How to avoid delays: a checklist for executors</h2>
      <ol>
        <li><strong>Apply online</strong> — it's faster, and you can track your application's progress</li>
        <li><strong>Double-check everything</strong> — make sure names, dates, and values exactly match the death certificate and will</li>
        <li><strong>Submit the original will</strong> — not a copy. If you can't find it, you'll need to explain why</li>
        <li><strong>Get the IHT form right first time</strong> — errors here are the most common cause of "stopped" applications</li>
        <li><strong>Register the death promptly</strong> — you can't apply for probate without the death certificate</li>
        <li><strong>Check for caveats</strong> — if family disputes are likely, deal with them early rather than waiting for a caveat to derail your application</li>
        <li><strong>Keep records</strong> — photograph or copy everything before submitting originals</li>
      </ol>

      <h2>What can you do now to help your executor?</h2>
      <p>The best thing you can do is make your executor's job easier <em>before</em> they need to do it:</p>
      <ul>
        <li><strong>Make a will</strong> — an up-to-date, clear will is the single biggest thing you can do to simplify probate. <a href="/resource/make-an-online-will-in-five-easy-steps">Create yours in five easy steps</a></li>
        <li><strong>Tell your executor where your will is</strong> — they can't act on it if they can't find it</li>
        <li><strong>Keep a list of your assets</strong> — bank accounts, pensions, property, investments, digital assets</li>
        <li><strong>Choose the right executor</strong> — someone organised, trustworthy, and willing to do it. <a href="/resource/choosing-executors-for-your-will">Read our guide to choosing executors</a></li>
      </ul>

      <h2>The bottom line</h2>
      <p>Probate is getting faster, but it's not instant. The best way to minimise delays is to have a clear, properly drafted will and to apply online. And with changes to pension taxation coming in 2027, now is the time to make sure your estate is as straightforward as possible for the people you leave behind.</p>

      <h2>Sources</h2>
      <ul>
        <li><a href="https://www.gov.uk/government/news/probate-waiting-times-halved-thanks-to-government-push" target="_blank" rel="noopener noreferrer">Probate waiting times halved thanks to Government push — GOV.UK</a></li>
        <li><a href="https://www.icaew.com/regulation/regulatory-news/regulatory-news-2026-03/hmcts-update-for-probate-firms" target="_blank" rel="noopener noreferrer">HMCTS update for probate firms: Q1 2026 — ICAEW</a></li>
        <li><a href="https://www.lawgazette.co.uk/features/legacy-system/5126439.article" target="_blank" rel="noopener noreferrer">Wills and probate: Legacy system — Law Gazette</a></li>
        <li><a href="https://www.legalfutures.co.uk/latest-news/delays-fall-as-probate-service-performance-improves" target="_blank" rel="noopener noreferrer">Delays fall as Probate Service performance improves — Legal Futures</a></li>
        <li><a href="https://www.fraserandfraser.co.uk/news/probate-delays-are-we-finally-over-the-hump/" target="_blank" rel="noopener noreferrer">Probate delays: are we finally over the hump? — Fraser &amp; Fraser</a></li>
        <li><a href="https://www.lawsociety.org.uk/contact-or-visit-us/press-office/press-releases/decline-in-probate-delays-is-a-good-first-step" target="_blank" rel="noopener noreferrer">Decline in probate delays is a good first step — The Law Society</a></li>
      </ul>
    `
  }
};

function BlogPost() {
  const { slug } = useParams();
  const location = useLocation();

  // Get slug from either URL params or path
  const postSlug = slug || location.pathname.slice(1); // Remove leading slash
  const post = blogContent[postSlug];

  if (!post) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>Blog Post</h1>
          </div>
        </div>
        <section className="page-content">
          <div className="container">
            <div className="content-wrapper">
              <h2>Post Not Found</h2>
              <p>Sorry, we couldn't find the blog post you're looking for.</p>
              <Link to="/blog" className="btn btn-primary">Browse all posts</Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Get external resources for this post's category
  const furtherReading = externalResourcesByCategory[post.category] || externalResourcesByCategory['General Guidance'];

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Make a Will"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Make a Will",
      "url": "https://www.makeawill.co.uk"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.makeawill.co.uk/${postSlug}`
    },
    "articleSection": post.category
  };

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <>
      <SEO type="article" schema={blogPostSchema} />
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[
            { label: 'Blog', path: '/blog' },
            { label: post.title }
          ]} />
          <h1>{post.title}</h1>
          <p><time dateTime={post.date}>{formattedDate}</time> | {post.category}</p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="page-with-sidebar">
            <article className="content-wrapper">
              {post.image && (
                <div className="text-center" style={{ marginBottom: '30px' }}>
                  <img src={post.image} alt={post.title} width={400} height={320} style={{ maxWidth: '300px', height: 'auto' }} />
                </div>
              )}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />

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
            </article>

            <aside className="sidebar">
              {post.image && (
                <div className="sidebar-widget" style={{ textAlign: 'center' }}>
                  <img src={post.image} alt={post.title} width={400} height={320} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              )}

              <div className="sidebar-widget">
                <h4>Related Posts</h4>
                <ul>
                  <li><Link to="/why-make-a-will">Why Make a Will?</Link></li>
                  <li><Link to="/5-reasons-to-update-your-will">5 Reasons to Update Your Will</Link></li>
                  <li><Link to="/dying-without-a-will-intestacy">Dying Without a Will</Link></li>
                  <li><Link to="/children-and-gifts-in-wills">Children and Gifts in Wills</Link></li>
                  <li><Link to="/do-you-cohabit">Cohabiting Couples</Link></li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4>Resources</h4>
                <ul>
                  <li><Link to="/resource/do-i-need-to-make-a-will">Do I Need a Will?</Link></li>
                  <li><Link to="/resource/executors">What is an Executor?</Link></li>
                  <li><Link to="/resource/do-i-need-probate">What is Probate?</Link></li>
                  <li><Link to="/resource/lasting-power-of-attorney">Lasting Power of Attorney</Link></li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4>For Charities</h4>
                <ul>
                  <li><Link to="/charities">Charity Services Hub</Link></li>
                  <li><Link to="/charity-gifts-in-wills-how-and-why">Charity Gifts in Wills</Link></li>
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

export default BlogPost;
