import { useState } from 'react';
import SEO from '../components/SEO';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <SEO />
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help with any questions about making your will</p>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <img src="/logos/contact-image.png" alt="Contact us illustration" width={1402} height={1122} style={{ maxWidth: '300px', height: 'auto' }} />
            <p style={{ marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>
              Have questions about making your will? Our team is here to help. Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="content-wrapper">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '40px' }}>
              <div>
                <h2>Get in Touch</h2>

                <div style={{ marginTop: '30px' }}>
                  <h3>Other Ways to Reach Us</h3>

                  <div style={{ marginTop: '20px' }}>
                    <h4>Book a call</h4>
                    <p>
                      Prefer to speak with someone? You can book a video or voice call
                      with one of our advisors to discuss your will.
                    </p>
                    <a href="/book-a-call" className="btn btn-secondary">Book a call</a>
                  </div>
                </div>
              </div>

              <div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Enquiry</option>
                      <option value="will">Question About My Will</option>
                      <option value="technical">Technical Support</option>
                      <option value="charity">Charity Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
