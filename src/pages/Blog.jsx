import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Blog() {
  const blogPosts = [
    {
      title: "Probate Delays in 2026: How Long Will You Really Wait?",
      excerpt: "Processing times have improved, but delays aren't over yet — and bigger challenges are coming. Here's what executors need to know.",
      date: "2026-04-10",
      category: "Executors and Probate",
      path: "/probate-delays-what-to-expect",
      image: "/logos/blog-probate-delays.svg"
    },
    {
      title: "The Biggest Shake-Up in Will Law for Nearly 200 Years",
      excerpt: "The Law Commission wants to replace the Wills Act 1837 with modern legislation covering electronic wills, capacity tests, and more.",
      date: "2026-03-20",
      category: "General Guidance",
      path: "/will-law-reform-2026",
      image: "/logos/blog-will-reform.svg"
    },
    {
      title: "Inheritance Tax Changes in 2026: What You Need to Know",
      excerpt: "Farm relief capped, AIM shares hit, and pensions coming into the IHT net from 2027. Here's what changed and what to do about it.",
      date: "2026-02-12",
      category: "General Guidance",
      path: "/inheritance-tax-changes-2026",
      image: "/logos/blog-inheritance-tax.svg"
    },
    {
      title: "Digital Assets in Your Will: What the New Law Means for You",
      excerpt: "The Property (Digital Assets etc) Act 2025 officially recognises crypto, NFTs, and digital tokens as property. Here's how to include them in your will.",
      date: "2026-01-15",
      category: "General Guidance",
      path: "/digital-assets-in-your-will",
      image: "/logos/blog-digital-assets.svg"
    },
    {
      title: "Have you thought about these 5 reasons to update your will?",
      excerpt: "Life changes constantly, and your will should reflect those changes. Here are five important reasons you might need to update your will.",
      date: "2025-10-20",
      category: "General Guidance",
      path: "/5-reasons-to-update-your-will",
      image: "/logos/blog-5-reasons-update-will.svg"
    },
    {
      title: "Why make a will?",
      excerpt: "Making a will is one of the most important things you can do to protect your family and ensure your wishes are carried out.",
      date: "2025-10-12",
      category: "General Guidance",
      path: "/why-make-a-will",
      image: "/logos/blog-why-make-a-will.svg"
    },
    {
      title: "What is Probate and do I need it?",
      excerpt: "Understanding probate is essential if you're dealing with someone's estate. Learn what probate is and when it's required.",
      date: "2025-09-28",
      category: "Executors and Probate",
      path: "/do-I-need-probate",
      image: "/logos/blog-do-i-need-probate.svg"
    },
    {
      title: "What happens if you die without a will?",
      excerpt: "Dying without a will means your estate will be distributed according to intestacy rules, which may not reflect your wishes.",
      date: "2025-09-15",
      category: "General Guidance",
      path: "/dying-without-a-will-intestacy",
      image: "/logos/blog-dying-without-a-will.svg"
    },
    {
      title: "Children and gifts in wills: 5 ways to get peace of mind",
      excerpt: "When you have children, making a will becomes even more important. Here's how to ensure your children are protected.",
      date: "2025-08-22",
      category: "Family Situations",
      path: "/children-and-gifts-in-wills",
      image: "/logos/blog-children-gifts-wills.svg"
    },
    {
      title: "What is a Lasting Power of Attorney?",
      excerpt: "An LPA lets you appoint someone to make decisions on your behalf if you lose mental capacity. Find out why it's important.",
      date: "2025-08-10",
      category: "Lasting Powers of Attorney",
      path: "/resource/lasting-power-of-attorney"
    },
    {
      title: "Do you cohabit? Your key questions answered",
      excerpt: "Unmarried couples have very different rights from married couples when it comes to inheritance. Here's what you need to know.",
      date: "2025-07-25",
      category: "Family Situations",
      path: "/do-you-cohabit",
      image: "/logos/blog-do-you-cohabit.svg"
    },
    {
      title: "Wills for British Ex-Pats",
      excerpt: "Living abroad as a British citizen? Understanding how different jurisdictions affect your will is crucial.",
      date: "2025-07-11",
      category: "Wills for British Expats",
      path: "/uk-expat-wills",
      image: "/logos/blog-uk-expat-wills.svg"
    },
    {
      title: "Charity Gifts in Wills: how and why",
      excerpt: "Leaving a gift to charity in your will can make a lasting difference and may even reduce inheritance tax on your estate.",
      date: "2025-06-18",
      category: "General Guidance",
      path: "/charity-gifts-in-wills-how-and-why",
      image: "/logos/blog-charity-gifts-wills.svg"
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
                  {categories.map((category, index) => (
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
