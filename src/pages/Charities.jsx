import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { charitiesContent } from '../data/charities';

// Page content lives in src/data/charities.js so the React render and
// the pre-baked static HTML come from the same source.

function Charities() {
  return (
    <>
      <SEO />
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[{ label: 'For Charities' }]} />
          <h1>Services for Charities</h1>
          <p>Partner with us to grow your legacy income and support your donors</p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: charitiesContent.content }} />

          <div className="text-center mt-4" style={{ background: '#f8f9fa', padding: '40px', borderRadius: '8px' }}>
            <h3>Ready to Partner With Us?</h3>
            <p>Contact us to discuss how we can help your charity grow legacy income.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Charities;
