import { useLocation, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { serviceContent } from '../data/services';

// Map pages to their illustration SVG paths
const pageIllustrations = {
  'lifetime-updates': '/logos/service-lifetime-updates.svg',
  'a-pair-of-wills-or-mirror-wills': '/logos/service-mirror-wills.svg',
  'book-a-call': '/logos/service-book-call.svg',
  'data-handling-policy': '/logos/service-policy.svg',
  'disclaimer': '/logos/service-policy.svg',
  'money-back-guarantee': '/logos/service-policy.svg',
  'our-competition-and-markets-authority-statement': '/logos/service-policy.svg',
  'fundraising-online-wills': '/logos/charities.svg',
  'charities-and-fundraising-for-gifts-in-wills': '/logos/charities.svg',
  'solicitor-checked-wills-for-charity-supporters': '/logos/charities.svg',
  'gifts-in-wills-training-with-richard-radcliffe': '/logos/service-training.svg'
};


function ServicePage() {
  const location = useLocation();
  const slug = location.pathname.slice(1); // Remove leading slash
  const page = serviceContent[slug];

  if (!page) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>Page Not Found</h1>
          </div>
        </div>
        <section className="page-content">
          <div className="container">
            <div className="content-wrapper">
              <p>Sorry, we couldn't find the page you're looking for.</p>
              <Link to="/" className="btn btn-primary">Return home</Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Get the appropriate illustration for this page
  const illustrationSrc = pageIllustrations[slug] || '/logos/service-policy.svg';

  return (
    <>
      <SEO />
      <div className="page-header">
        <div className="container">
          <h1>{page.title}</h1>
          {page.description && <p>{page.description}</p>}
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-wrapper">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'start', marginBottom: '30px' }}>
              <div dangerouslySetInnerHTML={{ __html: page.content }} />
              <div style={{ position: 'sticky', top: '100px' }}>
                <img src={illustrationSrc} alt={page.title} width={400} height={320} style={{ maxWidth: '280px', height: 'auto' }} />
              </div>
            </div>

            <div className="text-center mt-4" style={{ background: '#f8f9fa', padding: '40px', borderRadius: '8px' }}>
              <h3>Ready to Make Your Will?</h3>
              <p>Create your solicitor-checked will in just 15 minutes.</p>
              <a href="/start-your-will" className="btn btn-primary btn-lg">Get started</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicePage;
