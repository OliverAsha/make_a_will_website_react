import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            <img src="/logos/logo-main-long.svg" alt="Make a Will" width={540} height={100} style={{ height: '60px', width: 'auto' }} />
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
              <a href="https://makeawillonline.co.uk/my-will/login" className="nav-login">Login</a>
              <a href="/start-your-will" className="btn btn-primary">make a will</a>
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
