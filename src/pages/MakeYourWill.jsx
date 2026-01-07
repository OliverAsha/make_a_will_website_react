import { Link } from 'react-router-dom';
import { MakeWillIllustration } from '../components/Illustrations';

function MakeYourWill() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Make Your Will</h1>
          <p>Create your solicitor-checked will in just 15 minutes</p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-wrapper text-center">
            <div style={{
              background: 'linear-gradient(135deg, #8B4D3B 0%, #D4832E 100%)',
              color: 'white',
              padding: '60px 40px',
              borderRadius: '12px',
              marginBottom: '40px',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '40px',
              alignItems: 'center',
              textAlign: 'left'
            }}>
              <div>
                <h2 style={{ color: 'white', marginBottom: '20px' }}>Start Your Will Today</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                Our guided questionnaire makes creating your will simple and straightforward.
                Every will is checked by a qualified solicitor for complete peace of mind.
              </p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '8px' }}>
                    <strong style={{ fontSize: '2rem' }}>15</strong>
                    <p style={{ margin: 0 }}>minutes to complete</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '8px' }}>
                    <strong style={{ fontSize: '2rem' }}>100%</strong>
                    <p style={{ margin: 0 }}>solicitor-checked</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '8px' }}>
                    <strong style={{ fontSize: '2rem' }}>Free</strong>
                    <p style={{ margin: 0 }}>lifetime updates</p>
                  </div>
                </div>
              </div>
              <div style={{ filter: 'brightness(1.1) contrast(1.05)' }}>
                <MakeWillIllustration />
              </div>
            </div>

            <h2>Choose Your Will Type</h2>
            <p style={{ marginBottom: '30px' }}>Select the option that best suits your needs</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '40px' }}>
              <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
                <h3>Single Will</h3>
                <p style={{ fontSize: '2rem', color: '#D4832E', fontWeight: '700' }}>£90</p>
                <p>Perfect for individuals who want to create their will.</p>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                  <li>Solicitor-checked</li>
                  <li>Lifetime updates</li>
                  <li>Money-back guarantee</li>
                  <li>Unlimited beneficiaries</li>
                </ul>
                <a href="https://makeawillonline.co.uk/my-will" className="btn btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>
                  Start Single Will
                </a>
              </div>

              <div className="card" style={{ padding: '30px', textAlign: 'center', border: '3px solid #D4832E' }}>
                <div style={{ background: '#D4832E', color: 'white', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', marginBottom: '15px' }}>
                  Most Popular
                </div>
                <h3>Mirror Wills</h3>
                <p style={{ fontSize: '2rem', color: '#D4832E', fontWeight: '700' }}>£135</p>
                <p>For couples who want matching wills that reflect each other.</p>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                  <li>Two wills for couples</li>
                  <li>Both solicitor-checked</li>
                  <li>Lifetime updates for both</li>
                  <li>Save vs two single wills</li>
                </ul>
                <a href="https://makeawillonline.co.uk/my-will" className="btn btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>
                  Start Mirror Wills
                </a>
              </div>

              <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
                <h3>Will + LPA Bundle</h3>
                <p style={{ fontSize: '2rem', color: '#D4832E', fontWeight: '700' }}>£249</p>
                <p>Complete protection with a will and Lasting Power of Attorney.</p>
                <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
                  <li>Single will included</li>
                  <li>Property & Financial LPA</li>
                  <li>Health & Welfare LPA</li>
                  <li>All solicitor-checked</li>
                </ul>
                <a href="https://makeawillonline.co.uk/my-will" className="btn btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>
                  Start Bundle
                </a>
              </div>
            </div>

            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '8px' }}>
              <h3>Not sure which to choose?</h3>
              <p>Our team can help you decide which option is right for your situation.</p>
              <Link to="/book-a-call" className="btn btn-secondary">Book a Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MakeYourWill;
