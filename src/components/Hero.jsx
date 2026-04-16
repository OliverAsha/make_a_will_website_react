import { Link } from 'react-router-dom';

// Hero image - origami papercraft illustration of a family home
// This renders the static image from /public/logos/hero-image.png
function HeroIllustration() {
  return (
    <img
      src="/logos/hero-image.png"
      alt="Colourful origami papercraft illustration of a family standing in front of their home"
      width={1024}
      height={853}
      style={{ width: '100%', height: 'auto' }}
    />
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>
              <span>Make a Will</span><br />Solicitor-checked wills. Simple. Affordable. Fast.
            </h1>
            <p className="hero-subtitle">
              The UK's first will writing service where every will is reviewed by a fully qualified solicitor. Create your legally valid will in as little as 15 minutes.
            </p>
            <ul className="hero-features">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span><strong>Solicitor-checked</strong> — Every will reviewed by qualified solicitors</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span><strong>Single will £60, mirror wills £90</strong> — Clear, affordable pricing</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span><strong>Legally valid in England &amp; Wales</strong> — Meets all UK legal requirements</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span><strong>Lifetime updates included</strong> — Update your will whenever you need</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span><strong>Money back guarantee</strong> — 100% satisfaction guaranteed</span>
              </li>
            </ul>
            <div>
              <a href="https://makeawillonline.co.uk/my-will" className="btn btn-primary btn-lg">
                Get Started
              </a>
            </div>
            <div className="trustpilot-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#00B67A">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <span>Rated Excellent on Trustpilot</span>
            </div>
          </div>
          <div className="hero-image">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
