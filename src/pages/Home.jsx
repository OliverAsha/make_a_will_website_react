import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Hero />

      {/* Steps Section */}
      <section className="steps-section">
        <div className="container">
          <div className="section-title">
            <h2>Make Your Will in 3 Simple Steps</h2>
            <p>Creating a legally valid will has never been easier. Our guided process ensures nothing is missed.</p>
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
              <p>Unlike other online will services, every will we create is reviewed by a qualified solicitor. This ensures your will is legally valid and your wishes will be carried out exactly as you intend.</p>
              <p>Our team of legal experts catch potential issues before they become problems, giving you complete confidence in your will.</p>
              <Link to="/resource/what-is-a-solicitor-checked-will" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="feature-image">
              <div style={{
                background: '#f8f9fa',
                padding: '40px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#D4832E" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h4 style={{ marginTop: '20px', color: '#D4832E' }}>Solicitor Verified</h4>
              </div>
            </div>
          </div>

          <div className="feature-row reverse">
            <div className="feature-content">
              <h3>Lifetime Updates Included</h3>
              <p>Life changes, and so should your will. With our lifetime updates feature, you can modify your will whenever your circumstances change - whether you get married, have children, or simply change your mind.</p>
              <p>No additional fees, no hassle. Just log in and make your changes.</p>
              <Link to="/lifetime-updates" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="feature-image">
              <div style={{
                background: '#f8f9fa',
                padding: '40px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#D4832E" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <h4 style={{ marginTop: '20px', color: '#D4832E' }}>Always Up to Date</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Make a Will Online?</h2>
            <p>See how we compare to other options for creating your will.</p>
          </div>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Make a Will Online</th>
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
          <a href="https://makeawillonline.co.uk/my-will" className="btn btn-primary btn-lg">Make Your Will Now</a>
        </div>
      </section>
    </>
  );
}

export default Home;
