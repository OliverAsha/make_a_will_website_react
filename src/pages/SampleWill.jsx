import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { sampleWillContent } from '../data/sample-will';

// Page content lives in src/data/sample-will.js so the React render and
// the pre-baked static HTML come from the same source.

function SampleWill() {
  return (
    <>
      <SEO />
      <div className="page-header">
        <div className="container">
          <h1>Sample Will</h1>
          <p>See what a professionally drafted will looks like</p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-wrapper">
            <div dangerouslySetInnerHTML={{ __html: sampleWillContent.content }} />

            <div className="text-center mt-4">
              <h3>Ready to Create Your Own Will?</h3>
              <p>Our guided process makes it easy to create a comprehensive, solicitor-checked will.</p>
              <Link to="/start-your-will" className="btn btn-primary btn-lg">Start your will</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SampleWill;
