import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

function Home() {
  return (
    <div className="home-page">
      <SEO />
      <Hero />

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-bar-inner">
            <div className="trust-bar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Solicitor-checked</span>
            </div>
            <div className="trust-bar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Fixed pricing</span>
            </div>
            <div className="trust-bar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Legally valid</span>
            </div>
            <div className="trust-bar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Lifetime updates</span>
            </div>
            <div className="trust-bar-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Money back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <div className="container">
          <div className="section-title">
            <h2>Make Your Will in 3 Simple Steps</h2>
            <p>Creating a legally valid, solicitor-checked will has never been easier. Our guided process ensures nothing is missed.</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Answer Questions</h3>
              <p>Our simple questionnaire guides you through all the important decisions about your estate, beneficiaries, and wishes.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Solicitor Check</h3>
              <p>Every will is reviewed by a qualified solicitor to ensure it's legally sound and properly structured.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Sign & Store</h3>
              <p>Print your will, sign it with witnesses, and store it safely. We'll guide you through proper execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="feature-row">
            <div className="feature-content">
              <h3>Solicitor-Checked for Peace of Mind</h3>
              <p>Unlike other will services, every will we create is reviewed by a qualified solicitor. This ensures your will is legally valid and your wishes will be carried out exactly as you intend.</p>
              <p>Our team of legal experts catch potential issues before they become problems, giving you complete confidence in your will.</p>
              <Link to="/resource/what-is-a-solicitor-checked-will" className="btn btn-primary">learn about solicitor-checked wills</Link>
            </div>
            <div className="feature-image">
              <img src="/logos/feature-solicitor-verified.svg" alt="Origami illustration representing a solicitor-verified will with a badge and checkmark" width={400} height={320} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>

          <div className="feature-row reverse">
            <div className="feature-content">
              <h3>Lifetime Updates Included</h3>
              <p>Life changes, and so should your will. With our lifetime updates feature, you can modify your will whenever your circumstances change - whether you get married, have children, or simply change your mind.</p>
              <p>No additional fees, no hassle. Just log in and make your changes.</p>
              <Link to="/lifetime-updates" className="btn btn-primary">learn about lifetime updates</Link>
            </div>
            <div className="feature-image">
              <img src="/logos/feature-always-up-to-date.svg" alt="Origami illustration of a current will on top of older versions, representing lifetime updates" width={400} height={320} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Will Writing Service?</h2>
            <p>See how our solicitor-checked wills compare to other options in the UK.</p>
          </div>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Make a Will</th>
                <th>Traditional Solicitor</th>
                <th>Other Online Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Solicitor Checked</td>
                <td><span className="check-icon">✓</span></td>
                <td><span className="check-icon">✓</span></td>
                <td><span className="cross-icon">✗</span></td>
              </tr>
              <tr>
                <td>Affordable Price</td>
                <td><span className="check-icon">✓</span></td>
                <td><span className="cross-icon">✗</span></td>
                <td><span className="check-icon">✓</span></td>
              </tr>
              <tr>
                <td>Complete from Home</td>
                <td><span className="check-icon">✓</span></td>
                <td><span className="cross-icon">✗</span></td>
                <td><span className="check-icon">✓</span></td>
              </tr>
              <tr>
                <td>Lifetime Updates</td>
                <td><span className="check-icon">✓</span></td>
                <td><span className="cross-icon">✗</span></td>
                <td><span className="cross-icon">✗</span></td>
              </tr>
              <tr>
                <td>Money Back Guarantee</td>
                <td><span className="check-icon">✓</span></td>
                <td><span className="cross-icon">✗</span></td>
                <td><span className="cross-icon">✗</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 bg-light">
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p style={{ maxWidth: '600px', margin: '20px auto' }}>
            Join thousands of people who have already created their will with Make a Will.
            It takes just 15 minutes and provides complete peace of mind.
          </p>
          <a href="https://makeawillonline.co.uk/my-will" className="btn btn-primary btn-lg">make your will now</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
