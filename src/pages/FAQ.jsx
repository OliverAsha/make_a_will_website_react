import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQIllustration } from '../components/Illustrations';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is an online will legally valid?",
      answer: "Yes, absolutely. A will made online is just as legally valid as one made with a traditional solicitor, provided it meets the legal requirements: it must be in writing, signed by the testator (the person making the will), and witnessed by two independent witnesses who are present at the same time. Our wills are solicitor-checked to ensure they meet all legal requirements."
    },
    {
      question: "How long does it take to make a will?",
      answer: "Most people complete our online will questionnaire in about 15-30 minutes. After that, our solicitors review your will (usually within 2-3 working days), and then you can print, sign, and store your will. The entire process can be completed within a week."
    },
    {
      question: "What is a solicitor-checked will?",
      answer: "A solicitor-checked will is one that has been reviewed by a qualified legal professional to ensure it is correctly drafted, legally valid, and will accurately reflect your wishes. This provides an extra layer of protection against errors or ambiguities that could lead to disputes."
    },
    {
      question: "Can I update my will after I've made it?",
      answer: "Yes! With Make a Will Online, you get lifetime updates included. You can log in and make changes to your will whenever your circumstances change - whether you get married, have children, buy property, or simply change your mind about who should inherit."
    },
    {
      question: "Who can witness my will?",
      answer: "Your will must be witnessed by two people who are: over 18 years old, not beneficiaries (or married to beneficiaries) of your will, able to see you sign the will, and mentally capable. Common choices include neighbours, colleagues, or friends who are not mentioned in your will."
    },
    {
      question: "What happens if I die without a will?",
      answer: "If you die without a valid will (called dying 'intestate'), your estate will be distributed according to the rules of intestacy. This may not reflect your wishes - for example, unmarried partners receive nothing, and your estate may be split in ways you wouldn't have chosen. Making a will ensures your wishes are followed."
    },
    {
      question: "Do I need a will if I'm married?",
      answer: "Yes, even if you're married. While your spouse may inherit much of your estate under intestacy rules, having a will ensures you can: specify exactly who gets what, appoint guardians for minor children, make specific gifts to other family members or friends, and potentially reduce inheritance tax."
    },
    {
      question: "What is an executor?",
      answer: "An executor is the person you appoint to carry out the instructions in your will after you die. They are responsible for: gathering your assets, paying any debts and taxes, and distributing your estate to your beneficiaries. You can choose a trusted friend, family member, or a professional like a solicitor."
    },
    {
      question: "Can I leave money to charity?",
      answer: "Absolutely! You can leave gifts to charity in your will. This can be a specific sum of money, a percentage of your estate, or specific items. Charitable gifts are also exempt from inheritance tax, which can reduce the tax burden on your estate."
    },
    {
      question: "How should I store my will?",
      answer: "Your will should be stored safely in a place where your executors can find it. Options include: at home in a fireproof safe, with a solicitor, at a bank, or with the Probate Service. Make sure your executors know where to find it."
    }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about making a will online</p>
        </div>
      </div>

      <section className="faq-section">
        <div className="container">
          <div className="content-wrapper">
            {faqs.map((faq, index) => (
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
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4" style={{ background: '#f8f9fa', padding: '40px', borderRadius: '12px' }}>
            <FAQIllustration />
            <h3 style={{ marginTop: '20px' }}>Still have questions?</h3>
            <p>Our team is here to help you with any questions about making your will.</p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
