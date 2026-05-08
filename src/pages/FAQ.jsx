import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { faqItems } from '../data/faq';

// FAQ items live in src/data/faq.js as a single source of truth, used by:
//   - this component (renders the accordion)
//   - scripts/generate-pages.js (FAQPage JSON-LD schema + pre-rendered HTML)
// Answers are HTML strings rendered via dangerouslySetInnerHTML.

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <SEO />
      <div className="page-header">
        <div className="container">
          <div className="page-header-flex">
            <div className="page-header-text">
              <h1>Frequently Asked Questions</h1>
              <p>Find answers to common questions about making a will online</p>
            </div>
            <img className="page-hero-image" src="/logos/faq-image.png" alt="FAQ illustration" width={1402} height={1122} />
          </div>
        </div>
      </div>

      <section className="faq-section">
        <div className="container">
          <div className="content-wrapper">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <div
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span>{openIndex === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer" style={{ display: openIndex === index ? 'block' : 'none' }}>
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4" style={{ background: '#f8f9fa', padding: '40px', borderRadius: '12px' }}>
            <h3>Still have questions?</h3>
            <p>Our team is here to help you with any questions about making your will.</p>
            <Link to="/contact" className="btn btn-primary">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
