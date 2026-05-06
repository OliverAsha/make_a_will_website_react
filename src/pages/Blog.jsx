import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts, blogCategories } from '../data/blog-index';

// Index metadata lives in src/data/blog-index.js so the React render and the
// pre-baked static HTML stay in sync.

function Blog() {
  return (
    <>
      <SEO />
      <div className="page-header">
        <div className="container">
          <h1>Blog</h1>
          <p>Insights and advice about wills, estate planning, and protecting your family</p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <img src="/logos/blog-image.png" alt="Blog illustration" width={1402} height={1122} style={{ maxWidth: '300px', height: 'auto' }} />
            <p style={{ marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>
              Insights and advice on wills, estate planning, and protecting your family's future.
            </p>
          </div>
          <div className="page-with-sidebar">
            <div>
              <div className="blog-grid">
                {blogPosts.map((post, index) => (
                  <Link key={index} to={post.path} className="blog-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="blog-card-image">
                      {post.image ? (
                        <img src={post.image} alt={post.title} width={400} height={320} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                          <line x1="16" y1="13" x2="8" y2="13"/>
                          <line x1="16" y1="17" x2="8" y2="17"/>
                        </svg>
                      )}
                    </div>
                    <div className="blog-card-content">
                      <div className="blog-card-meta">
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time> • {post.category}
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span style={{ color: '#D4832E', fontWeight: '500' }}>Read more →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <aside className="sidebar">
              <div className="sidebar-widget">
                <h4>Categories</h4>
                <ul>
                  {blogCategories.map((category, index) => (
                    <li key={index}>
                      <Link to={`/topic/${category.toLowerCase().replace(/ /g, '-')}`}>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>


              <div className="sidebar-widget">
                <h4>Ready to Make Your Will?</h4>
                <p>Create your solicitor-checked will in just 15 minutes.</p>
                <a href="/start-your-will" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                  Get started
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
