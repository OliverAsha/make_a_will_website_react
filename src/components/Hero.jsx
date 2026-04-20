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
      style={{ maxWidth: '701px', width: '100%', height: 'auto' }}
    />
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Solicitor-checked wills made simple</h1>
            <p className="hero-subtitle">
              Every will is reviewed by a qualified solicitor. Legally valid in England &amp; Wales. Most people finish in 15 minutes.
            </p>
            <div className="hero-cta">
              <a href="/start-your-will" className="btn btn-primary">
                make my will
              </a>
              <div className="trustpilot-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#00B67A">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <span>Rated Excellent on Trustpilot</span>
              </div>
            </div>
            <ul className="hero-features">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Every will reviewed by a qualified solicitor</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Single will £90, mirror wills £135</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Legally valid in England &amp; Wales</span>
              </li>
            </ul>
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
