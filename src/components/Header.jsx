import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            <img src="/logos/makeawilllogohorizontal.png" alt="Make a Will" width={970} height={205} style={{ height: '60px', width: 'auto' }} />
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
              <a href="https://makeawillonline.co.uk/my-will/my-will/login" className="btn btn-secondary">Login</a>
              <a href="https://makeawillonline.co.uk/my-will" className="btn btn-primary">Make a Will</a>
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
