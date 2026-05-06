import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { resourceCategories } from '../data/resources-index';

// Index metadata lives in src/data/resources-index.js so the React render
// and the pre-baked static HTML stay in sync.

function Resources({ canonical }) {
  return (
    <>
      <SEO canonical={canonical ? `https://www.makeawill.co.uk${canonical}` : undefined} />
      <div className="page-header">
        <div className="container">
          <h1>Resources</h1>
          <p>Helpful guides and information about wills, probate, and estate planning</p>
        </div>
      </div>

      <section className="resources-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <img src="/logos/resources-image.png" alt="Resources illustration" width={1402} height={1122} style={{ maxWidth: '300px', height: 'auto' }} />
            <p style={{ marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>
              Browse our comprehensive library of guides covering everything from making your first will to understanding probate.
            </p>
          </div>
          {resourceCategories.map((category, index) => (
            <div key={index} style={{ marginBottom: '50px' }}>
              <h2 style={{ marginBottom: '25px', paddingBottom: '10px', borderBottom: '2px solid #D4832E' }}>
                {category.title}
              </h2>
              <div className="resources-grid">
                {category.resources.map((resource, idx) => (
                  <Link key={idx} to={resource.path} className="card" style={{ textDecoration: 'none' }}>
                    <div className="card-content">
                      <h4>{resource.title}</h4>
                      <span style={{ color: '#D4832E', fontWeight: '500' }}>Read more →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Resources;
