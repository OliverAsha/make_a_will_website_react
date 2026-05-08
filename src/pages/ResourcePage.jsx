import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { resourceContent } from '../data/resources';

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
  'how-solicitor-checked-online-will-works': 'wills',
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
  'how-solicitor-checked-online-will-works': '/logos/resource-making-will.svg',
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
          <p
            className="article-byline"
            style={{
              margin: '8px 0 0',
              maxWidth: 'none',
              fontSize: '0.95rem',
              color: '#6b7280',
              textAlign: 'right'
            }}
          >
            By{' '}
            <Link
              to="/about-us#oliver-asha-bio-heading"
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              Oliver Asha, Solicitor &amp; TEP
            </Link>
          </p>
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
                <a href="/start-your-will" className="btn btn-primary btn-lg">Get started</a>
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
