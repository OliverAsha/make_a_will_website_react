import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { CharitiesIllustration } from '../components/Illustrations';

function Charities() {
  const charityServices = [
    {
      title: 'Gifts in Wills for Charities',
      description: 'Help your supporters leave a lasting legacy with our charity partnership programme for gifts in wills.',
      link: '/fundraising-online-wills',
      cta: 'Learn More'
    },
    {
      title: 'Charities and Fundraising',
      description: 'Discover how charities can work with us to promote legacy giving and increase charitable donations.',
      link: '/charities-and-fundraising-for-gifts-in-wills',
      cta: 'Explore Partnership'
    },
    {
      title: 'Solicitor-Checked Wills for Supporters',
      description: 'Offer your charity supporters access to affordable, solicitor-checked wills while encouraging legacy gifts.',
      link: '/solicitor-checked-wills-for-charity-supporters',
      cta: 'View Details'
    },
    {
      title: 'Gifts in Wills Training',
      description: 'Professional training with Richard Radcliffe to help your fundraising team maximise legacy income.',
      link: '/gifts-in-wills-training-with-richard-radcliffe',
      cta: 'Book Training'
    }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[
            { label: 'For Charities' }
          ]} />
          <h1>Services for Charities</h1>
          <p>Partner with us to grow your legacy income and support your donors</p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="charity-hub-intro" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'center' }}>
            <div>
              <h2>Why Partner With Make a Will?</h2>
              <p>
                Legacy gifts are a vital source of income for UK charities, with over £3 billion left to charities each year.
                We help charities of all sizes promote legacy giving and make it easy for supporters to include charitable gifts in their wills.
              </p>
              <p>
                Our solicitor-checked will service ensures your supporters receive professional, legally valid wills while
                making it simple for them to leave a gift to your charity.
              </p>
            </div>
            <div>
              <CharitiesIllustration />
            </div>
          </div>

          <h2>Our Charity Services</h2>
          <div className="charity-services-grid">
            {charityServices.map((service, index) => (
              <div key={index} className="charity-service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="btn btn-primary">{service.cta}</Link>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h2>Resources for Charity Fundraisers</h2>
            <p>Learn more about legacy giving and how to promote it to your supporters:</p>
            <ul>
              <li><Link to="/charity-gifts-in-wills-how-and-why">Charity Gifts in Wills: How and Why</Link> - A guide to leaving gifts to charity</li>
              <li><Link to="/resource/do-i-need-to-make-a-will">Do I Need to Make a Will?</Link> - Help your supporters understand why wills matter</li>
              <li><Link to="/resource/executors">What is an Executor?</Link> - Explaining executor duties to potential legacy givers</li>
            </ul>
          </div>

          <div className="further-reading">
            <h3>External Resources for Charities</h3>
            <ul>
              <li>
                <a href="https://www.rememberedcharity.org.uk/" target="_blank" rel="noopener noreferrer" className="external-link">
                  Remember A Charity
                </a>
                <span className="source-description">The UK consortium promoting charitable legacy giving</span>
              </li>
              <li>
                <a href="https://www.gov.uk/donating-to-charity/leaving-gifts-to-charity-in-your-will" target="_blank" rel="noopener noreferrer" className="external-link">
                  Leaving Gifts to Charity - GOV.UK
                </a>
                <span className="source-description">Official government guidance on charitable giving in wills</span>
              </li>
              <li>
                <a href="https://www.charitycommission.gov.uk/" target="_blank" rel="noopener noreferrer" className="external-link">
                  Charity Commission
                </a>
                <span className="source-description">The regulator for charities in England and Wales</span>
              </li>
            </ul>
          </div>

          <div className="text-center mt-4" style={{ background: '#f8f9fa', padding: '40px', borderRadius: '8px' }}>
            <h3>Ready to Partner With Us?</h3>
            <p>Contact us to discuss how we can help your charity grow legacy income.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Charities;
