import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { aboutContent } from '../data/about';

// All textual content (including the founder bio) lives in src/data/about.js
// so the React render and the pre-baked static HTML come from the same source.
// The AuthorBio component is no longer used here; the bio is rendered inline
// from the data file with inline styles for visual parity.

function About() {
  return (
    <>
      <SEO />
      <div className="page-header">
        <div className="container">
          <div className="page-header-flex">
            <div className="page-header-text">
              <h1>About Us</h1>
              <p>Solicitor-checked online wills, plus one-to-one solicitor consultations</p>
            </div>
            <img className="page-hero-image" src="/logos/about-us-image.png" alt="About us illustration" width={1402} height={1122} />
          </div>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-wrapper">
            <div dangerouslySetInnerHTML={{ __html: aboutContent.content }} />
            <div className="text-center mt-4">
              <Link to="/contact" className="btn btn-primary">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
