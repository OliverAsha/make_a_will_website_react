import { Link } from 'react-router-dom';
import { AboutIllustration } from '../components/Illustrations';

function About() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>The only solicitor-checked online wills service</p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <AboutIllustration />
            </div>

            <h2>Our Mission</h2>
            <p>
              At Make a Will, we believe everyone deserves access to quality legal services
              for creating their will. We combine the convenience of technology with the
              expertise of qualified solicitors to provide a service that is both accessible and reliable.
            </p>

            <h2>Why We're Different</h2>
            <p>
              Unlike other online will services, every will we create is checked by a qualified
              solicitor. This unique approach means you get the convenience of completing your
              will from home, with the peace of mind that comes from professional legal oversight.
            </p>

            <h2>Our Story</h2>
            <p>
              Make a Will was founded with a simple goal: to make will-writing accessible
              to everyone, without compromising on quality. We saw that many people were either
              paying high fees for traditional solicitors or risking their family's future with
              unchecked DIY wills.
            </p>
            <p>
              Our solution combines the best of both worlds: affordable online convenience with
              professional legal expertise. Every will is reviewed by our team of qualified
              solicitors before it reaches you.
            </p>

            <h2>Our Values</h2>
            <ul>
              <li><strong>Quality:</strong> Every will is solicitor-checked for accuracy and legal validity</li>
              <li><strong>Accessibility:</strong> Affordable prices so everyone can protect their family</li>
              <li><strong>Transparency:</strong> Clear pricing with no hidden fees</li>
              <li><strong>Support:</strong> Lifetime updates and ongoing customer support</li>
              <li><strong>Trust:</strong> Money-back guarantee if you're not completely satisfied</li>
            </ul>

            <h2>Awards & Recognition</h2>
            <p>
              We're proud to have been recognised for our innovative approach to legal services:
            </p>
            <ul>
              <li>Winner - Making a Difference in Legacy Giving 2023 Award</li>
              <li>Shortlisted for National Will Writing Firm of the Year</li>
              <li>Double nomination at the Modern Law Awards</li>
              <li>Proud Charity Champion for Remember A Charity Week</li>
            </ul>

            <h2>Our Team</h2>
            <p>
              Our team includes qualified solicitors, legal technologists, and customer support
              specialists, all dedicated to making the will-writing process as smooth as possible.
              We're passionate about helping people protect their families and ensure their
              wishes are carried out.
            </p>

            <div className="text-center mt-4">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
