import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Make a Will</h4>
            <p>The only solicitor-checked wills service. Create your legally valid will in minutes.</p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/sample-will">Sample Will</Link></li>
              <li><Link to="/resource">Resources</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/charities">For Charities</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/resource/do-i-need-to-make-a-will">Do I Need a Will?</Link></li>
              <li><Link to="/resource/executors">What is an Executor?</Link></li>
              <li><Link to="/resource/lasting-power-of-attorney">Lasting Power of Attorney</Link></li>
              <li><Link to="/resource/do-i-need-probate">What is Probate?</Link></li>
              <li><Link to="/resource/dying-without-a-will-intestacy">Dying Without a Will</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Policies</h4>
            <ul>
              <li><Link to="/data-handling-policy">Data Handling Policy</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/money-back-guarantee">Money Back Guarantee</Link></li>
              <li><Link to="/our-competition-and-markets-authority-statement">CMA Statement</Link></li>
            </ul>
          </div>
        </div>

        {/* External Authority Links */}
        <div className="footer-authority">
          <h4>Useful External Resources</h4>
          <ul className="authority-links">
            <li><a href="https://www.gov.uk/make-will" target="_blank" rel="noopener noreferrer">GOV.UK - Wills</a></li>
            <li><a href="https://www.gov.uk/applying-for-probate" target="_blank" rel="noopener noreferrer">GOV.UK - Probate</a></li>
            <li><a href="https://www.gov.uk/power-of-attorney" target="_blank" rel="noopener noreferrer">GOV.UK - LPA</a></li>
            <li><a href="https://www.citizensadvice.org.uk/family/death-and-wills/" target="_blank" rel="noopener noreferrer">Citizens Advice</a></li>
            <li><a href="https://www.lawsociety.org.uk/public/for-public-visitors/common-legal-issues/making-a-will" target="_blank" rel="noopener noreferrer">Law Society</a></li>
            <li><a href="https://www.ageuk.org.uk/information-advice/money-legal/legal-issues/" target="_blank" rel="noopener noreferrer">Age UK</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Make a Will. All rights reserved.</p>
          <p>Make a Will is a trading name. Solicitor-checked wills providing peace of mind.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
