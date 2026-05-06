import { useLocation, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { glossaryContent } from '../data/glossary';

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
              <Link to="/resource/will-writing-glossary" className="btn btn-primary">View full glossary</Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO />
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
                <Link to="/resource/will-writing-glossary" className="btn btn-secondary">View full glossary</Link>
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
                <img src="/logos/glossary.svg" alt="Glossary illustration" width={400} height={320} style={{ maxWidth: '100%', height: 'auto' }} />
              </div>

              <div className="sidebar-widget">
                <h4>Ready to Make Your Will?</h4>
                <p>Create your solicitor-checked will in just 15 minutes.</p>
                <a href="/start-your-will" className="btn btn-primary" style={{ width: '100%' }}>Get started</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default GlossaryPage;
