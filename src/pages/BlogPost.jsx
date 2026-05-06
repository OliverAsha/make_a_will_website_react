import { useParams, useLocation, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEO from '../components/SEO';
import { blogContent } from '../data/blog';

// External authority links for further reading by category
const externalResourcesByCategory = {
  'General Guidance': [
    { url: 'https://www.gov.uk/make-will', title: 'Making a Will - GOV.UK', description: 'Official UK Government guidance on making a will' },
    { url: 'https://www.citizensadvice.org.uk/family/death-and-wills/wills/', title: 'Wills - Citizens Advice', description: 'Free advice on wills and inheritance' }
  ],
  'Family Situations': [
    { url: 'https://www.gov.uk/make-will', title: 'Making a Will - GOV.UK', description: 'Official UK Government guidance on making a will' },
    { url: 'https://www.citizensadvice.org.uk/family/death-and-wills/wills/', title: 'Wills - Citizens Advice', description: 'Free advice on wills and inheritance' },
    { url: 'https://www.gov.uk/child-benefit-child-changes-address', title: 'Children and Family - GOV.UK', description: 'Government guidance for families' }
  ],
  'Executors and Probate': [
    { url: 'https://www.gov.uk/applying-for-probate', title: 'Applying for Probate - GOV.UK', description: 'Official guide to the probate process' },
    { url: 'https://www.gov.uk/wills-probate-inheritance/being-an-executor', title: 'Being an Executor - GOV.UK', description: 'Official guide to executor duties' },
    { url: 'https://www.gov.uk/government/news/probate-waiting-times-halved-thanks-to-government-push', title: 'Probate Waiting Times Update - GOV.UK', description: 'Latest government update on probate processing times' }
  ],
  'Wills for British Expats': [
    { url: 'https://www.gov.uk/make-will', title: 'Making a Will - GOV.UK', description: 'Official UK Government guidance on making a will' },
    { url: 'https://www.gov.uk/government/publications/living-abroad', title: 'Living Abroad - GOV.UK', description: 'Government guidance for British citizens abroad' }
  ]
};


function BlogPost() {
  const { slug } = useParams();
  const location = useLocation();

  // Get slug from either URL params or path
  const postSlug = slug || location.pathname.slice(1); // Remove leading slash
  const post = blogContent[postSlug];

  if (!post) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>Blog Post</h1>
          </div>
        </div>
        <section className="page-content">
          <div className="container">
            <div className="content-wrapper">
              <h2>Post Not Found</h2>
              <p>Sorry, we couldn't find the blog post you're looking for.</p>
              <Link to="/blog" className="btn btn-primary">Browse all posts</Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Get external resources for this post's category
  const furtherReading = externalResourcesByCategory[post.category] || externalResourcesByCategory['General Guidance'];

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Make a Will"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Make a Will",
      "url": "https://www.makeawill.co.uk"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.makeawill.co.uk/${postSlug}`
    },
    "articleSection": post.category
  };

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <>
      <SEO type="article" schema={blogPostSchema} />
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[
            { label: 'Blog', path: '/blog' },
            { label: post.title }
          ]} />
          <h1>{post.title}</h1>
          <p><time dateTime={post.date}>{formattedDate}</time> | {post.category}</p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="page-with-sidebar">
            <article className="content-wrapper">
              {post.image && (
                <div className="text-center" style={{ marginBottom: '30px' }}>
                  <img src={post.image} alt={post.title} width={400} height={320} style={{ maxWidth: '300px', height: 'auto' }} />
                </div>
              )}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />

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
            </article>

            <aside className="sidebar">
              {post.image && (
                <div className="sidebar-widget" style={{ textAlign: 'center' }}>
                  <img src={post.image} alt={post.title} width={400} height={320} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              )}

              <div className="sidebar-widget">
                <h4>Related Posts</h4>
                <ul>
                  <li><Link to="/why-make-a-will">Why Make a Will?</Link></li>
                  <li><Link to="/5-reasons-to-update-your-will">5 Reasons to Update Your Will</Link></li>
                  <li><Link to="/dying-without-a-will-intestacy">Dying Without a Will</Link></li>
                  <li><Link to="/children-and-gifts-in-wills">Children and Gifts in Wills</Link></li>
                  <li><Link to="/do-you-cohabit">Cohabiting Couples</Link></li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4>Resources</h4>
                <ul>
                  <li><Link to="/resource/do-i-need-to-make-a-will">Do I Need a Will?</Link></li>
                  <li><Link to="/resource/executors">What is an Executor?</Link></li>
                  <li><Link to="/resource/do-i-need-probate">What is Probate?</Link></li>
                  <li><Link to="/resource/lasting-power-of-attorney">Lasting Power of Attorney</Link></li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4>For Charities</h4>
                <ul>
                  <li><Link to="/charities">Charity Services Hub</Link></li>
                  <li><Link to="/charity-gifts-in-wills-how-and-why">Charity Gifts in Wills</Link></li>
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

export default BlogPost;
