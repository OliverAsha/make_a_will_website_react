import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is an online will legally valid?",
      answer: <>Yes, absolutely. A will made online is just as legally valid as one made with a traditional solicitor, provided it meets the legal requirements: it must be in writing, signed by the testator (the person making the will), and witnessed by two independent witnesses who are present at the same time. Our wills are solicitor-checked to ensure they meet all legal requirements. <Link to="/resource/are-online-wills-legal">Read our full guide on online will legality</Link>.</>
    },
    {
      question: "How long does it take to make a will?",
      answer: <>Most people complete our online will questionnaire in about 15-30 minutes. After that, our solicitors review your will (usually within 2-3 working days), and then you can print, sign, and store your will. The entire process can be completed within a week. <Link to="/resource/make-an-online-will-in-five-easy-steps">See our step-by-step guide</Link>.</>
    },
    {
      question: "What is a solicitor-checked will?",
      answer: <>A solicitor-checked will is one that has been reviewed by a qualified legal professional to ensure it is correctly drafted, legally valid, and will accurately reflect your wishes. This provides an extra layer of protection against errors or ambiguities that could lead to disputes. <Link to="/resource/what-is-a-solicitor-checked-will">Learn more about solicitor-checked wills</Link>.</>
    },
    {
      question: "Can I update my will after I've made it?",
      answer: <>Yes! With Make a Will, you get lifetime updates included. You can log in and make changes to your will whenever your circumstances change — whether you get married, have children, buy property, or simply change your mind about who should inherit. <Link to="/lifetime-updates">Learn about lifetime updates</Link>.</>
    },
    {
      question: "Who can witness my will?",
      answer: <>Your will must be witnessed by two people who are: over 18 years old, not beneficiaries (or married to beneficiaries) of your will, able to see you sign the will, and mentally capable. Common choices include neighbours, colleagues, or friends who are not mentioned in your will. <Link to="/resource/who-can-witness-a-will">Read our full guide on witnesses</Link>.</>
    },
    {
      question: "What happens if I die without a will?",
      answer: <>If you die without a valid will (called dying "intestate"), your estate will be distributed according to the rules of intestacy. This may not reflect your wishes — for example, unmarried partners receive nothing, and your estate may be split in ways you wouldn't have chosen. Making a will ensures your wishes are followed. <Link to="/resource/dying-without-a-will-intestacy">Read more about intestacy rules</Link>.</>
    },
    {
      question: "Do I need a will if I'm married?",
      answer: <>Yes, even if you're married. While your spouse may inherit much of your estate under intestacy rules, having a will ensures you can: specify exactly who gets what, appoint guardians for minor children, make specific gifts to other family members or friends, and potentially reduce inheritance tax. <Link to="/resource/i-am-getting-married-do-i-need-a-will">Read our guide on marriage and wills</Link>.</>
    },
    {
      question: "What is an executor?",
      answer: <>An executor is the person you appoint to carry out the instructions in your will after you die. They are responsible for: gathering your assets, paying any debts and taxes, and distributing your estate to your beneficiaries. You can choose a trusted friend, family member, or a professional like a solicitor. <Link to="/resource/executors">Read our full guide on executors</Link>.</>
    },
    {
      question: "Can I leave money to charity?",
      answer: <>Absolutely! You can leave gifts to charity in your will. This can be a specific sum of money, a percentage of your estate, or specific items. Charitable gifts are also exempt from inheritance tax, which can reduce the tax burden on your estate. <Link to="/charity-gifts-in-wills-how-and-why">Learn how to leave a gift to charity</Link>.</>
    },
    {
      question: "How should I store my will?",
      answer: <>Your will should be stored safely in a place where your executors can find it. Options include: at home in a fireproof safe, with a solicitor, at a bank, or with the Probate Service. Make sure your executors know where to find it. <Link to="/resource/how-to-sign-execute-a-will">Read our guide on signing and storing your will</Link>.</>
    },
    {
      question: "How much does it cost to make a will?",
      answer: <>Our single wills start from £90, and mirror wills for couples are £135. Every will is checked by a qualified solicitor, and lifetime updates are included at no extra cost. This compares to £150–£500+ for a traditional solicitor visit. <Link to="/resource/cost-of-making-a-will">See our full pricing guide</Link>.</>
    },
    {
      question: "Do I need an LPA as well as a will?",
      answer: <>Yes, ideally you should have both. A will controls what happens to your estate after you die, while a Lasting Power of Attorney lets someone make decisions on your behalf if you lose mental capacity during your lifetime. Without an LPA, your family may need to apply to the Court of Protection, which is expensive and slow. <Link to="/resource/lpa-vs-will">Learn the difference between a will and an LPA</Link>.</>
    }
  ];

  // Plain text versions for schema (no JSX)
  const faqSchemaItems = [
    { q: "Is an online will legally valid?", a: "Yes, absolutely. A will made online is just as legally valid as one made with a traditional solicitor, provided it meets the legal requirements: it must be in writing, signed by the testator, and witnessed by two independent witnesses who are present at the same time. Our wills are solicitor-checked to ensure they meet all legal requirements." },
    { q: "How long does it take to make a will?", a: "Most people complete our online will questionnaire in about 15-30 minutes. After that, our solicitors review your will (usually within 2-3 working days), and then you can print, sign, and store your will. The entire process can be completed within a week." },
    { q: "What is a solicitor-checked will?", a: "A solicitor-checked will is one that has been reviewed by a qualified legal professional to ensure it is correctly drafted, legally valid, and will accurately reflect your wishes. This provides an extra layer of protection against errors or ambiguities that could lead to disputes." },
    { q: "Can I update my will after I've made it?", a: "Yes! With Make a Will, you get lifetime updates included. You can log in and make changes to your will whenever your circumstances change — whether you get married, have children, buy property, or simply change your mind about who should inherit." },
    { q: "Who can witness my will?", a: "Your will must be witnessed by two people who are: over 18 years old, not beneficiaries (or married to beneficiaries) of your will, able to see you sign the will, and mentally capable. Common choices include neighbours, colleagues, or friends who are not mentioned in your will." },
    { q: "What happens if I die without a will?", a: "If you die without a valid will (called dying 'intestate'), your estate will be distributed according to the rules of intestacy. This may not reflect your wishes — for example, unmarried partners receive nothing, and your estate may be split in ways you wouldn't have chosen." },
    { q: "Do I need a will if I'm married?", a: "Yes, even if you're married. While your spouse may inherit much of your estate under intestacy rules, having a will ensures you can specify exactly who gets what, appoint guardians for minor children, make specific gifts to other family members or friends, and potentially reduce inheritance tax." },
    { q: "What is an executor?", a: "An executor is the person you appoint to carry out the instructions in your will after you die. They are responsible for gathering your assets, paying any debts and taxes, and distributing your estate to your beneficiaries." },
    { q: "Can I leave money to charity?", a: "Absolutely! You can leave gifts to charity in your will. This can be a specific sum of money, a percentage of your estate, or specific items. Charitable gifts are also exempt from inheritance tax, which can reduce the tax burden on your estate." },
    { q: "How should I store my will?", a: "Your will should be stored safely in a place where your executors can find it. Options include: at home in a fireproof safe, with a solicitor, at a bank, or with the Probate Service. Make sure your executors know where to find it." },
    { q: "How much does it cost to make a will?", a: "Our single wills start from £90, and mirror wills for couples are £135. Every will is checked by a qualified solicitor, and lifetime updates are included at no extra cost. This compares to £150–£500+ for a traditional solicitor visit." },
    { q: "Do I need an LPA as well as a will?", a: "Yes, ideally you should have both. A will controls what happens to your estate after you die, while a Lasting Power of Attorney lets someone make decisions on your behalf if you lose mental capacity during your lifetime. Without an LPA, your family may need to apply to the Court of Protection, which is expensive and slow." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSchemaItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      <SEO schema={faqSchema} />
      <div className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about making a will online</p>
        </div>
      </div>

      <section className="faq-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <img src="/logos/faq-image.png" alt="FAQ illustration" width={1402} height={1122} style={{ maxWidth: '300px', height: 'auto' }} />
            <p style={{ marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>
              Find answers to the most common questions about making a will online, from legal validity to pricing.
            </p>
          </div>
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
