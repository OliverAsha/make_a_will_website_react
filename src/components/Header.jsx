import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            <img src="/logos/makeawill_websitelogo.png" alt="Make a Will" style={{ height: '40px', width: 'auto' }} />
          </Link>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li><NavLink to="/faq">FAQs</NavLink></li>
              <li><NavLink to="/resource">Resources</NavLink></li>
              <li><NavLink to="/sample-will">Sample Will</NavLink></li>
              <li><NavLink to="/about-us">About</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="nav-buttons">
              <a href="https://makeawillonline.co.uk/my-will" className="btn btn-secondary">Login</a>
              <a href="https://makeawillonline.co.uk/my-will" className="btn btn-primary">Make Your Will</a>
            </div>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
