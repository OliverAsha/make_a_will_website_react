import { Link } from 'react-router-dom';
import { BlogIllustration } from '../components/Illustrations';

function Blog() {
  const blogPosts = [
    {
      title: "Have you thought about these 5 reasons to update your will?",
      excerpt: "Life changes constantly, and your will should reflect those changes. Here are five important reasons you might need to update your will.",
      date: "October 2025",
      category: "General Guidance",
      path: "/5-reasons-to-update-your-will"
    },
    {
      title: "Why make a will?",
      excerpt: "Making a will is one of the most important things you can do to protect your family and ensure your wishes are carried out.",
      date: "October 2025",
      category: "General Guidance",
      path: "/why-make-a-will"
    },
    {
      title: "What is Probate and do I need it?",
      excerpt: "Understanding probate is essential if you're dealing with someone's estate. Learn what probate is and when it's required.",
      date: "September 2025",
      category: "Executors and Probate",
      path: "/do-I-need-probate"
    },
    {
      title: "What happens if you die without a will?",
      excerpt: "Dying without a will means your estate will be distributed according to intestacy rules, which may not reflect your wishes.",
      date: "September 2025",
      category: "General Guidance",
      path: "/dying-without-a-will-intestacy"
    },
    {
      title: "Children and gifts in wills: 5 ways to get peace of mind",
      excerpt: "When you have children, making a will becomes even more important. Here's how to ensure your children are protected.",
      date: "August 2025",
      category: "Family Situations",
      path: "/children-and-gifts-in-wills"
    },
    {
      title: "What is a Lasting Power of Attorney?",
      excerpt: "An LPA lets you appoint someone to make decisions on your behalf if you lose mental capacity. Find out why it's important.",
      date: "August 2025",
      category: "Lasting Powers of Attorney",
      path: "/resource/lasting-power-of-attorney"
    },
    {
      title: "Do you cohabit? Your key questions answered",
      excerpt: "Unmarried couples have very different rights from married couples when it comes to inheritance. Here's what you need to know.",
      date: "July 2025",
      category: "Family Situations",
      path: "/do-you-cohabit"
    },
    {
      title: "Wills for British Ex-Pats",
      excerpt: "Living abroad as a British citizen? Understanding how different jurisdictions affect your will is crucial.",
      date: "July 2025",
      category: "Wills for British Expats",
      path: "/uk-expat-wills"
    },
    {
      title: "Charity Gifts in Wills: how and why",
      excerpt: "Leaving a gift to charity in your will can make a lasting difference and may even reduce inheritance tax on your estate.",
      date: "June 2025",
      category: "General Guidance",
      path: "/charity-gifts-in-wills-how-and-why"
    }
  ];

  const categories = [
    "General Guidance",
    "Family Situations",
    "Executors and Probate",
    "Lasting Powers of Attorney",
    "Wills for British Expats",
    "Resources for Charity Fundraisers"
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Blog</h1>
          <p>Insights and advice about wills, estate planning, and protecting your family</p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="page-with-sidebar">
            <div>
              <div className="blog-grid">
                {blogPosts.map((post, index) => (
                  <Link key={index} to={post.path} className="blog-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="blog-card-image">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                      </svg>
                    </div>
                    <div className="blog-card-content">
                      <div className="blog-card-meta">
                        {post.date} • {post.category}
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
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link to={`/topic/${category.toLowerCase().replace(/ /g, '-')}`}>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget" style={{ textAlign: 'center' }}>
                <BlogIllustration />
              </div>

              <div className="sidebar-widget">
                <h4>Ready to Make Your Will?</h4>
                <p>Create your solicitor-checked will in just 15 minutes.</p>
                <a href="https://makeawillonline.co.uk/my-will" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                  Get Started
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
