import { Link } from 'react-router-dom';

// Warm, friendly illustration inspired by Farewill's approachable style
function HeroIllustration() {
  return (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
      {/* Background shapes - soft, organic blobs */}
      <ellipse cx="250" cy="200" rx="220" ry="180" fill="#FFF5EB" />
      <ellipse cx="180" cy="280" rx="100" ry="80" fill="#FFE8D6" />
      <ellipse cx="350" cy="150" rx="80" ry="60" fill="#FFE8D6" />

      {/* House outline - representing home and security */}
      <path d="M250 80 L370 160 L370 300 L130 300 L130 160 Z" fill="#FFFFFF" stroke="#D4832E" strokeWidth="3"/>
      <path d="M250 80 L130 160 M250 80 L370 160" stroke="#D4832E" strokeWidth="3" strokeLinecap="round"/>

      {/* Roof accent */}
      <path d="M250 80 L280 100 L250 95 L220 100 Z" fill="#E5A630"/>

      {/* Door */}
      <rect x="220" y="220" width="60" height="80" rx="4" fill="#8B4D3B"/>
      <circle cx="268" cy="265" r="5" fill="#D4832E"/>

      {/* Windows */}
      <rect x="150" y="180" width="50" height="50" rx="4" fill="#87CEEB" stroke="#D4832E" strokeWidth="2"/>
      <line x1="175" y1="180" x2="175" y2="230" stroke="#D4832E" strokeWidth="2"/>
      <line x1="150" y1="205" x2="200" y2="205" stroke="#D4832E" strokeWidth="2"/>

      <rect x="300" y="180" width="50" height="50" rx="4" fill="#87CEEB" stroke="#D4832E" strokeWidth="2"/>
      <line x1="325" y1="180" x2="325" y2="230" stroke="#D4832E" strokeWidth="2"/>
      <line x1="300" y1="205" x2="350" y2="205" stroke="#D4832E" strokeWidth="2"/>

      {/* Family figures - simplified, warm style */}
      {/* Adult 1 */}
      <ellipse cx="200" cy="340" rx="25" ry="8" fill="#E0D6CC"/>
      <path d="M200 300 Q200 350 200 360" stroke="none"/>
      <rect x="185" y="310" width="30" height="45" rx="8" fill="#D4832E"/>
      <circle cx="200" cy="295" r="18" fill="#FFDAB9"/>
      <path d="M188 288 Q200 282 212 288" stroke="#8B4D3B" strokeWidth="2" fill="none"/>

      {/* Adult 2 */}
      <ellipse cx="300" cy="340" rx="25" ry="8" fill="#E0D6CC"/>
      <rect x="285" y="310" width="30" height="45" rx="8" fill="#8B4D3B"/>
      <circle cx="300" cy="295" r="18" fill="#FFDAB9"/>
      <path d="M288 288 Q300 282 312 288" stroke="#5C4033" strokeWidth="2" fill="none"/>

      {/* Child */}
      <ellipse cx="250" cy="348" rx="18" ry="6" fill="#E0D6CC"/>
      <rect x="238" y="325" width="24" height="30" rx="6" fill="#E5A630"/>
      <circle cx="250" cy="312" r="14" fill="#FFDAB9"/>
      <path d="M243 307 Q250 303 257 307" stroke="#8B4D3B" strokeWidth="2" fill="none"/>

      {/* Hearts floating - representing love and legacy */}
      <path d="M380 120 C380 110 390 100 400 110 C410 100 420 110 420 120 C420 135 400 150 400 150 C400 150 380 135 380 120Z" fill="#D4832E" opacity="0.6"/>
      <path d="M100 180 C100 173 107 166 114 173 C121 166 128 173 128 180 C128 190 114 200 114 200 C114 200 100 190 100 180Z" fill="#E5A630" opacity="0.5"/>
      <path d="M420 250 C420 245 425 240 430 245 C435 240 440 245 440 250 C440 257 430 264 430 264 C430 264 420 257 420 250Z" fill="#D4832E" opacity="0.4"/>

      {/* Document/will icon - subtle */}
      <rect x="85" y="100" width="35" height="45" rx="3" fill="#FFFFFF" stroke="#D4832E" strokeWidth="2"/>
      <line x1="92" y1="115" x2="113" y2="115" stroke="#E5A630" strokeWidth="2"/>
      <line x1="92" y1="125" x2="113" y2="125" stroke="#E5A630" strokeWidth="2"/>
      <line x1="92" y1="135" x2="105" y2="135" stroke="#E5A630" strokeWidth="2"/>

      {/* Decorative elements */}
      <circle cx="70" cy="250" r="8" fill="#E5A630" opacity="0.4"/>
      <circle cx="430" cy="180" r="6" fill="#D4832E" opacity="0.3"/>
      <circle cx="90" cy="320" r="5" fill="#8B4D3B" opacity="0.3"/>

      {/* Tree/nature element */}
      <rect x="400" y="300" width="12" height="50" fill="#8B4D3B"/>
      <ellipse cx="406" cy="280" rx="30" ry="35" fill="#7CB342" opacity="0.8"/>
      <ellipse cx="395" cy="290" rx="20" ry="25" fill="#8BC34A" opacity="0.7"/>
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>
              <span>Peace of mind</span> in minutes
            </h1>
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
                <span><strong>Quick and easy</strong> — Complete your will in as little as 15 minutes</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span><strong>Legally valid</strong> — Meets all UK legal requirements</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span><strong>Lifetime updates</strong> — Update your will whenever you need</span>
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
