import { useLocation, Link } from 'react-router-dom';
import { GlossaryIllustration } from '../components/Illustrations';

// Glossary terms content
const glossaryContent = {
  'beneficiary': {
    title: 'Beneficiary',
    content: `
      <p>A beneficiary is any person or organisation that receives something under a will. The term covers anyone who inherits from your estate, whether they receive a specific item, a sum of money, or a share of what's left after other gifts and debts are paid.</p>

      <h2>Types of beneficiary</h2>
      <p>Beneficiaries can include:</p>
      <ul>
        <li><strong>Individuals:</strong> Family members, friends, carers, or anyone else you choose</li>
        <li><strong>Charities:</strong> Any registered charity can be named as a beneficiary</li>
        <li><strong>Organisations:</strong> Clubs, societies, or other bodies</li>
        <li><strong>Trusts:</strong> Money can be left to a trust for the benefit of others</li>
      </ul>

      <h2>Residuary beneficiaries</h2>
      <p>A residuary beneficiary is someone who receives whatever's left of your estate after all specific gifts, debts, taxes, and expenses have been paid. This is often the most valuable gift in a will, as it includes everything not specifically given to someone else.</p>

      <h2>Substitute beneficiaries</h2>
      <p>It's wise to name substitute (or alternative) beneficiaries in case your first-choice beneficiary dies before you. Without a substitute, the gift may fail or pass in ways you didn't intend.</p>

      <h2>Rules about beneficiaries</h2>
      <ul>
        <li>Anyone can be a beneficiary - there are no restrictions on who you can leave your estate to</li>
        <li>Beneficiaries can also be executors (very common with spouses and children)</li>
        <li>Beneficiaries should NOT witness the will - if they do, their gift is void</li>
        <li>A beneficiary's spouse should also not witness the will</li>
      </ul>
    `
  },
  'bequest': {
    title: 'Bequest',
    content: `
      <p>A bequest is a gift made in a will. The term is often used interchangeably with "legacy" or "gift", though technically a bequest refers specifically to a gift of personal property (not real estate).</p>

      <h2>Types of bequest</h2>

      <h3>Specific bequest</h3>
      <p>A gift of a particular item: "I leave my gold watch to my son James." The item must be clearly identifiable.</p>

      <h3>General bequest</h3>
      <p>A gift that can be satisfied from the general assets of the estate: "I leave £5,000 to my niece Emma." It doesn't come from a specific source.</p>

      <h3>Demonstrative bequest</h3>
      <p>A gift from a particular source, with a backup if that source is insufficient: "I leave £10,000 from my savings account with Barclays to my brother, or if insufficient, from my general estate."</p>

      <h3>Residuary bequest</h3>
      <p>A gift of whatever remains after all other bequests, debts, and expenses: "I leave the residue of my estate to my wife."</p>

      <h2>What happens if a bequest fails?</h2>
      <p>A bequest can fail (called "ademption") if:</p>
      <ul>
        <li>The specific item no longer exists when you die</li>
        <li>You no longer own the item</li>
        <li>The beneficiary has died without a substitute being named</li>
        <li>The beneficiary witnessed the will (making their bequest void)</li>
      </ul>

      <h2>Making bequests in your will</h2>
      <p>When making bequests, be as specific as possible about what you're giving and to whom. Vague descriptions can lead to disputes. Our solicitor-checked wills ensure your bequests are clearly worded.</p>
    `
  },
  'codicil': {
    title: 'Codicil',
    content: `
      <p>A codicil is a document that makes changes to an existing will without replacing it entirely. It must be signed and witnessed in the same way as a will.</p>

      <h2>When to use a codicil</h2>
      <p>Historically, codicils were used for minor amendments:</p>
      <ul>
        <li>Changing an executor</li>
        <li>Adding or removing a small gift</li>
        <li>Updating an address</li>
        <li>Correcting a minor error</li>
      </ul>

      <h2>Why codicils are rarely used today</h2>
      <p>Modern will-writing services (including ours) have made it so easy and affordable to create a new will that codicils are rarely recommended anymore. Making a new will has several advantages:</p>
      <ul>
        <li><strong>Clearer:</strong> Everything is in one document</li>
        <li><strong>Safer:</strong> No risk of the codicil being separated from the will</li>
        <li><strong>Easier to administer:</strong> Executors have one clear document to follow</li>
        <li><strong>Less risk of errors:</strong> Codicils can accidentally contradict or confuse the original will</li>
      </ul>

      <h2>Problems with codicils</h2>
      <ul>
        <li>They can be lost or separated from the will</li>
        <li>Multiple codicils can create confusion</li>
        <li>They may not be properly executed</li>
        <li>They can inadvertently revoke parts of the will you wanted to keep</li>
      </ul>

      <h2>Our recommendation</h2>
      <p>With our lifetime updates feature, you can simply create a new will whenever your circumstances change. This is safer, clearer, and included in your original purchase. There's no good reason to use codicils when updating your will is so straightforward.</p>
    `
  },
  'legacy': {
    title: 'Legacy',
    content: `
      <p>A legacy is a gift left to someone in a will. The word is often used interchangeably with "bequest" or simply "gift". In everyday language, leaving a "legacy" also means the lasting impact you have on the world.</p>

      <h2>Types of legacy</h2>

      <h3>Pecuniary legacy</h3>
      <p>A gift of a specific sum of money: "I leave £10,000 to my daughter." This is the most common type of legacy.</p>

      <h3>Specific legacy</h3>
      <p>A gift of a particular identified item: "I leave my engagement ring to my granddaughter Sarah."</p>

      <h3>Residuary legacy</h3>
      <p>A gift of what's left after all other legacies, debts, and expenses have been paid: "I leave the remainder of my estate to my children equally."</p>

      <h3>Demonstrative legacy</h3>
      <p>A gift from a specific fund or source: "I leave £5,000 from my Premium Bonds to charity."</p>

      <h2>Charitable legacies</h2>
      <p>A charitable legacy is a gift to a registered charity in your will. These are exempt from inheritance tax and can help reduce the tax rate on the rest of your estate if they amount to at least 10% of your net estate.</p>

      <h2>Things to consider when leaving legacies</h2>
      <ul>
        <li>Inflation can reduce the real value of pecuniary legacies over time</li>
        <li>Consider leaving percentages rather than fixed sums if your estate value might change</li>
        <li>Make sure you identify beneficiaries clearly (full names, relationships)</li>
        <li>Consider what happens if the beneficiary dies before you</li>
        <li>Be specific about items to avoid confusion</li>
      </ul>
    `
  },
  'testator': {
    title: 'Testator',
    content: `
      <p>The testator is the person who makes a will. If you're making a will, you're the testator. The female equivalent (testatrix) is now rarely used - "testator" applies to everyone.</p>

      <h2>Requirements to be a testator</h2>
      <p>To make a valid will as a testator, you must:</p>
      <ul>
        <li><strong>Be at least 18 years old</strong> (with some exceptions for members of the armed forces)</li>
        <li><strong>Have "testamentary capacity"</strong> - you must understand what making a will means, know roughly what you own, and understand who might expect to benefit from your estate</li>
        <li><strong>Act of your own free will</strong> - without undue influence or coercion from others</li>
        <li><strong>Know and approve the contents</strong> of your will</li>
      </ul>

      <h2>The testator's responsibilities</h2>
      <p>As testator, you should:</p>
      <ul>
        <li>Provide accurate information about your wishes, assets, and beneficiaries</li>
        <li>Ensure the will is properly signed and witnessed</li>
        <li>Store the will safely and tell executors where it is</li>
        <li>Review and update your will when circumstances change</li>
      </ul>

      <h2>The testator's freedom</h2>
      <p>In England and Wales, testators have significant freedom to leave their estate to whoever they choose. Unlike many other countries, there are no "forced heirship" rules requiring you to leave specific amounts to family members. However, certain dependants may be able to challenge a will if they haven't been adequately provided for.</p>

      <h2>What happens after the testator dies?</h2>
      <p>After death, the testator's will is read and the estate is administered according to its instructions. The executors named in the will are responsible for carrying out the testator's wishes.</p>
    `
  }
};

function GlossaryPage() {
  const location = useLocation();
  const slug = location.pathname.slice(1); // Remove leading slash
  const term = glossaryContent[slug];

  if (!term) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>Glossary Term</h1>
          </div>
        </div>
        <section className="page-content">
          <div className="container">
            <div className="content-wrapper">
              <h2>Term Not Found</h2>
              <p>Sorry, we couldn't find that glossary term.</p>
              <Link to="/resource/will-writing-glossary" className="btn btn-primary">View Full Glossary</Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>{term.title}</h1>
          <p>Will Writing Glossary</p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="page-with-sidebar">
            <div className="content-wrapper">
              <div dangerouslySetInnerHTML={{ __html: term.content }} />

              <div className="text-center mt-4" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '8px' }}>
                <Link to="/resource/will-writing-glossary" className="btn btn-secondary">View Full Glossary</Link>
              </div>
            </div>

            <aside className="sidebar">
              <div className="sidebar-widget">
                <h4>Glossary Terms</h4>
                <ul>
                  <li><Link to="/beneficiary">Beneficiary</Link></li>
                  <li><Link to="/bequest">Bequest</Link></li>
                  <li><Link to="/codicil">Codicil</Link></li>
                  <li><Link to="/legacy">Legacy</Link></li>
                  <li><Link to="/testator">Testator</Link></li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4>Related Resources</h4>
                <ul>
                  <li><Link to="/resource/will-writing-glossary">Full Glossary</Link></li>
                  <li><Link to="/resource/do-i-need-to-make-a-will">Do I Need a Will?</Link></li>
                  <li><Link to="/resource/executors">What is an Executor?</Link></li>
                </ul>
              </div>

              <div className="sidebar-widget" style={{ textAlign: 'center' }}>
                <GlossaryIllustration />
              </div>

              <div className="sidebar-widget">
                <h4>Ready to Make Your Will?</h4>
                <p>Create your solicitor-checked will in just 15 minutes.</p>
                <a href="https://makeawillonline.co.uk/my-will" className="btn btn-primary" style={{ width: '100%' }}>Get Started</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default GlossaryPage;
