import { useLocation, Link } from 'react-router-dom';
import {
  LifetimeUpdatesIllustration,
  MirrorWillsIllustration,
  BookCallIllustration,
  PolicyIllustration,
  TrainingIllustration,
  CharitiesIllustration
} from '../components/Illustrations';

// Map pages to their illustrations
const pageIllustrations = {
  'lifetime-updates': LifetimeUpdatesIllustration,
  'a-pair-of-wills-or-mirror-wills': MirrorWillsIllustration,
  'book-a-call': BookCallIllustration,
  'data-handling-policy': PolicyIllustration,
  'disclaimer': PolicyIllustration,
  'money-back-guarantee': PolicyIllustration,
  'our-competition-and-markets-authority-statement': PolicyIllustration,
  'fundraising-online-wills': CharitiesIllustration,
  'charities-and-fundraising-for-gifts-in-wills': CharitiesIllustration,
  'solicitor-checked-wills-for-charity-supporters': CharitiesIllustration,
  'gifts-in-wills-training-with-richard-radcliffe': TrainingIllustration
};

// Service and policy page content
const serviceContent = {
  'lifetime-updates': {
    title: 'Lifetime Updates',
    description: 'Update your will whenever you need',
    content: `
      <p>Life changes, and your will should change with it. With our lifetime updates feature, you can modify your will as many times as you need, at no extra cost.</p>

      <h2>Why lifetime updates matter</h2>
      <p>Your circumstances will change over time. You might:</p>
      <ul>
        <li>Get married or divorced</li>
        <li>Have children or grandchildren</li>
        <li>Lose a loved one named in your will</li>
        <li>Buy or sell property</li>
        <li>Move to a different country</li>
        <li>Simply change your mind about who should inherit</li>
      </ul>
      <p>Every time something significant changes, your will should be updated. Without lifetime updates, this would mean paying again each time.</p>

      <h2>How it works</h2>
      <ol>
        <li>Log in to your account</li>
        <li>Make the changes you need</li>
        <li>Submit for solicitor review</li>
        <li>Sign your new will</li>
      </ol>
      <p>It's that simple. No additional fees, no complicated process.</p>

      <h2>What's included</h2>
      <ul>
        <li>Unlimited updates to your will</li>
        <li>Every update reviewed by a qualified solicitor</li>
        <li>Access to your account whenever you need it</li>
        <li>Secure storage of your will information</li>
        <li>No time limit - updates are free for life</li>
      </ul>

      <h2>When should you update your will?</h2>
      <p>As a rule of thumb, review your will every 3-5 years and after any major life event:</p>
      <ul>
        <li>Marriage, civil partnership, or divorce</li>
        <li>Birth or adoption of children</li>
        <li>Death of a beneficiary or executor</li>
        <li>Significant changes in your financial situation</li>
        <li>Changes to your relationships</li>
        <li>Moving abroad</li>
      </ul>
    `
  },
  'a-pair-of-wills-or-mirror-wills': {
    title: 'Mirror Wills',
    description: 'Matching wills for couples',
    content: `
      <p>Mirror wills are matching wills for couples that reflect each other. They're the most popular choice for married couples and civil partners.</p>

      <h2>What are mirror wills?</h2>
      <p>Mirror wills are two separate wills that contain essentially the same provisions. Typically:</p>
      <ul>
        <li>Each partner leaves everything to the other</li>
        <li>If both have died, the estate goes to children or other named beneficiaries</li>
        <li>Each partner names the same (or similar) executors and guardians</li>
      </ul>
      <p>They're called "mirror" wills because they reflect each other - what Partner A says about Partner B is mirrored by what Partner B says about Partner A.</p>

      <h2>Benefits of mirror wills</h2>
      <ul>
        <li><strong>Cost-effective:</strong> Cheaper than two separate wills</li>
        <li><strong>Consistent:</strong> Both partners' wishes align</li>
        <li><strong>Simple:</strong> Straightforward structure that's easy to understand</li>
        <li><strong>Comprehensive:</strong> Cover "what if we both die?" scenarios</li>
      </ul>

      <h2>When mirror wills work well</h2>
      <p>Mirror wills are ideal when:</p>
      <ul>
        <li>You want to leave everything to each other</li>
        <li>You agree on who should benefit after you've both gone</li>
        <li>Neither of you has children from previous relationships</li>
        <li>Your financial situations are broadly similar</li>
      </ul>

      <h2>When to consider alternatives</h2>
      <p>Mirror wills might not be right if:</p>
      <ul>
        <li>You have children from previous relationships (blended families)</li>
        <li>You have very different assets or wishes</li>
        <li>You want to protect assets from future claims</li>
        <li>You're concerned about remarriage after your death</li>
      </ul>
      <p>In these cases, you might need separate wills with different provisions, or wills that include trust arrangements.</p>

      <h2>Important note</h2>
      <p>Mirror wills are separate documents. After one partner dies, the surviving partner can change their own will. If you want to ensure the survivor can't change the plan, you'll need more complex arrangements.</p>
    `
  },
  'book-a-call': {
    title: 'Book a Call',
    description: 'Schedule a video or voice call with our advisors',
    content: `
      <p>Not sure which will is right for you? Have questions about your specific situation? Book a free consultation with one of our advisors.</p>

      <h2>What we can help with</h2>
      <ul>
        <li>Understanding which type of will suits your needs</li>
        <li>Questions about complex family situations</li>
        <li>Advice on protecting assets for children</li>
        <li>Understanding Lasting Powers of Attorney</li>
        <li>General questions about the will-making process</li>
      </ul>

      <h2>How it works</h2>
      <ol>
        <li>Choose a time that suits you</li>
        <li>Tell us briefly what you'd like to discuss</li>
        <li>We'll call you at the scheduled time (video or phone)</li>
        <li>Get expert advice tailored to your situation</li>
      </ol>

      <h2>What to expect</h2>
      <p>Our consultations are:</p>
      <ul>
        <li><strong>Free:</strong> No charge for initial consultations</li>
        <li><strong>No obligation:</strong> You're not committing to anything</li>
        <li><strong>Confidential:</strong> Your information stays private</li>
        <li><strong>Helpful:</strong> Get real answers to your questions</li>
      </ul>

      <h2>Before your call</h2>
      <p>To make the most of your consultation, have a think about:</p>
      <ul>
        <li>Your family situation (married? children? previous relationships?)</li>
        <li>What you'd like to achieve with your will</li>
        <li>Any specific concerns or questions you have</li>
        <li>Roughly what assets you're thinking about</li>
      </ul>

      <div style="background: #f8f9fa; padding: 30px; border-radius: 8px; text-align: center; margin-top: 30px;">
        <h3>Ready to book?</h3>
        <p>Contact us to schedule your free consultation.</p>
        <a href="/contact" class="btn btn-primary">Contact Us</a>
      </div>
    `
  },
  'fundraising-online-wills': {
    title: 'Gifts in Wills for Charities',
    description: 'Partner with us for legacy giving',
    content: `
      <p>We work with charities of all sizes to make it easy for their supporters to include charitable gifts in their wills. Legacy giving is one of the most valuable forms of support a charity can receive.</p>

      <h2>Why legacy giving matters</h2>
      <ul>
        <li>Legacies account for a significant proportion of many charities' income</li>
        <li>A gift in a will can be much larger than lifetime donations</li>
        <li>Legacy donors often feel a deep connection to causes they support</li>
        <li>It costs supporters nothing during their lifetime</li>
      </ul>

      <h2>How we help charities</h2>
      <p>We offer partnership programmes that make it easy for your supporters to leave gifts to your charity:</p>
      <ul>
        <li>Dedicated landing pages for your charity</li>
        <li>Pre-populated charity details in our system</li>
        <li>Marketing materials to promote legacy giving</li>
        <li>Reporting on gifts pledged (with supporter consent)</li>
        <li>Training for your legacy team</li>
      </ul>

      <h2>Benefits for your supporters</h2>
      <ul>
        <li>Affordable, solicitor-checked wills</li>
        <li>Easy to include your charity as a beneficiary</li>
        <li>Lifetime updates included</li>
        <li>Professional service they can trust</li>
      </ul>

      <h2>Tax benefits</h2>
      <p>Charitable gifts in wills are exempt from inheritance tax. If your supporters leave at least 10% of their net estate to charity, the inheritance tax rate on the rest drops from 40% to 36%.</p>

      <h2>Get in touch</h2>
      <p>We'd love to discuss how we can work together to increase legacy giving to your charity. Contact us for more information about partnership opportunities.</p>
    `
  },
  'gifts-in-wills-training-with-richard-radcliffe': {
    title: 'Gifts in Wills Training',
    description: 'Professional training for charity fundraisers',
    content: `
      <p>We offer specialist training for charity professionals on how to develop and grow their legacy giving programmes.</p>

      <h2>Who is this training for?</h2>
      <ul>
        <li>Legacy officers and managers</li>
        <li>Fundraising directors</li>
        <li>Marketing teams responsible for legacy promotion</li>
        <li>Charity trustees wanting to understand legacy giving</li>
        <li>Anyone involved in legacy administration</li>
      </ul>

      <h2>What the training covers</h2>
      <ul>
        <li>Understanding the legacy giving landscape</li>
        <li>Developing a legacy marketing strategy</li>
        <li>Identifying and cultivating potential legacy donors</li>
        <li>Having conversations about legacy giving</li>
        <li>Stewardship of legacy pledgers</li>
        <li>Legal and tax aspects of gifts in wills</li>
        <li>Measuring and reporting on your legacy programme</li>
      </ul>

      <h2>Training formats</h2>
      <p>We offer training in various formats:</p>
      <ul>
        <li><strong>In-person workshops:</strong> Full or half-day sessions at your location</li>
        <li><strong>Online webinars:</strong> Interactive sessions for remote teams</li>
        <li><strong>One-to-one coaching:</strong> Tailored support for individuals</li>
        <li><strong>Conference presentations:</strong> Speaking at your events</li>
      </ul>

      <h2>Contact us</h2>
      <p>To find out more about our training programmes and how we can help develop your legacy giving strategy, please get in touch.</p>
    `
  },
  'data-handling-policy': {
    title: 'Data Handling Policy',
    description: 'How we handle and protect your data',
    content: `
      <p>We take the security and privacy of your personal information very seriously. This policy explains how we collect, use, and protect your data.</p>

      <h2>What data we collect</h2>
      <p>When you use our service, we collect:</p>
      <ul>
        <li>Personal details you provide (name, address, contact information)</li>
        <li>Information about your family, assets, and wishes for your will</li>
        <li>Payment information (processed securely by our payment provider)</li>
        <li>Technical information about your use of our website</li>
      </ul>

      <h2>How we use your data</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Create and manage your will and associated documents</li>
        <li>Process your orders and payments</li>
        <li>Communicate with you about your account</li>
        <li>Improve our services</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>How we protect your data</h2>
      <ul>
        <li>All data is encrypted in transit and at rest</li>
        <li>Access is restricted to authorised personnel only</li>
        <li>We use secure, UK-based servers</li>
        <li>Regular security audits and updates</li>
        <li>Staff training on data protection</li>
      </ul>

      <h2>Your rights</h2>
      <p>Under data protection law, you have the right to:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to processing</li>
        <li>Data portability</li>
      </ul>

      <h2>Contact us</h2>
      <p>If you have any questions about how we handle your data, or wish to exercise your rights, please contact us.</p>
    `
  },
  'disclaimer': {
    title: 'Disclaimer',
    description: 'Important legal information',
    content: `
      <p>Please read this disclaimer carefully before using our services.</p>

      <h2>General information</h2>
      <p>The information provided on this website and through our services is for general informational purposes. While we strive to ensure accuracy, we make no warranties about the completeness, reliability, or accuracy of this information.</p>

      <h2>Not legal advice</h2>
      <p>The information on this website does not constitute legal advice. While every will we produce is checked by a qualified solicitor, our online guidance is general in nature and may not address your specific circumstances.</p>
      <p>If you have complex legal needs, we recommend seeking independent legal advice.</p>

      <h2>Solicitor-checked wills</h2>
      <p>All wills created through our service are reviewed by a qualified solicitor. However:</p>
      <ul>
        <li>The solicitor review is based on information you provide</li>
        <li>We cannot guarantee accuracy if you provide incorrect information</li>
        <li>The review covers standard issues but may not catch every potential problem</li>
        <li>You remain responsible for ensuring information is accurate and up to date</li>
      </ul>

      <h2>Proper execution</h2>
      <p>For your will to be legally valid, it must be properly signed and witnessed. We provide guidance on this, but the responsibility for correct execution lies with you. An improperly executed will may be invalid.</p>

      <h2>Changes in the law</h2>
      <p>The law can change. Information on this website was accurate when published but may become outdated. Important decisions should be based on current legal advice.</p>

      <h2>Limitation of liability</h2>
      <p>To the fullest extent permitted by law, we exclude liability for any losses arising from use of our website or services. This does not affect your statutory rights as a consumer.</p>
    `
  },
  'money-back-guarantee': {
    title: 'Money Back Guarantee',
    description: 'Our commitment to your satisfaction',
    content: `
      <p>We're confident you'll be satisfied with our service. If you're not, we offer a full money back guarantee.</p>

      <h2>Our promise</h2>
      <p>If you're not completely happy with your will, we'll refund your payment in full. No quibbles, no complicated process.</p>

      <h2>What's covered</h2>
      <ul>
        <li>Single wills</li>
        <li>Mirror wills for couples</li>
        <li>Will and LPA bundles</li>
        <li>Lasting Powers of Attorney</li>
      </ul>

      <h2>How it works</h2>
      <ol>
        <li>Contact us within 30 days of purchase</li>
        <li>Let us know you'd like a refund</li>
        <li>We'll process your refund promptly</li>
      </ol>
      <p>You don't need to give a detailed reason, though we appreciate feedback to help us improve.</p>

      <h2>Why we offer this guarantee</h2>
      <p>We believe in our service. Thousands of customers have created wills with us and we consistently receive positive feedback. We offer this guarantee because:</p>
      <ul>
        <li>We're confident in the quality of our wills</li>
        <li>We want you to feel secure in your purchase</li>
        <li>We stand behind everything we do</li>
      </ul>

      <h2>Exceptions</h2>
      <p>The guarantee applies to our will-writing service. Third-party fees (such as LPA registration fees paid to the government) are non-refundable as these are not within our control.</p>
    `
  },
  'our-competition-and-markets-authority-statement': {
    title: 'CMA Statement',
    description: 'Our Competition and Markets Authority statement',
    content: `
      <p>The Competition and Markets Authority (CMA) requires certain disclosures from providers of legal services, including will-writing services.</p>

      <h2>Our regulatory status</h2>
      <p>Will-writing in England and Wales is not a reserved legal activity, meaning it can be provided by non-lawyers. However, all wills we produce are reviewed by qualified solicitors who are regulated by the Solicitors Regulation Authority.</p>

      <h2>Our complaints procedure</h2>
      <p>If you're unhappy with our service:</p>
      <ol>
        <li>Contact us first - we'll try to resolve any issues directly</li>
        <li>We aim to respond to complaints within 5 working days</li>
        <li>If we can't resolve the matter, we'll explain your options</li>
      </ol>

      <h2>Professional indemnity insurance</h2>
      <p>We maintain professional indemnity insurance to protect our customers in the unlikely event that something goes wrong.</p>

      <h2>Pricing transparency</h2>
      <p>We believe in transparent, upfront pricing:</p>
      <ul>
        <li>All prices are clearly displayed on our website</li>
        <li>The price you see includes solicitor review</li>
        <li>There are no hidden fees</li>
        <li>We tell you the total cost before you commit</li>
      </ul>

      <h2>What you get</h2>
      <p>For the prices stated on our website, you receive:</p>
      <ul>
        <li>Guided online will creation</li>
        <li>Review by a qualified solicitor</li>
        <li>Your completed will document</li>
        <li>Signing instructions</li>
        <li>Lifetime updates</li>
        <li>Customer support</li>
      </ul>
    `
  },
  'charities-and-fundraising-for-gifts-in-wills': {
    title: 'Charities and Fundraising for Gifts in Wills',
    description: 'Resources for charity fundraisers',
    content: `
      <p>If you're involved in legacy fundraising at a charity, we can help you encourage more of your supporters to include your cause in their wills.</p>

      <h2>The opportunity of legacy giving</h2>
      <p>Legacy gifts are transformational for charities:</p>
      <ul>
        <li>They typically represent much larger donations than regular giving</li>
        <li>They cost the donor nothing during their lifetime</li>
        <li>They create a lasting connection between the donor and your cause</li>
        <li>They're often the largest gift a charity receives</li>
      </ul>

      <h2>Barriers to legacy giving</h2>
      <p>Research shows that many people would leave gifts to charity if they could easily:</p>
      <ul>
        <li>Make or update a will affordably</li>
        <li>Trust the process would be handled professionally</li>
        <li>Include charities without complicated legal work</li>
        <li>Ensure their family is still provided for</li>
      </ul>
      <p>Our service removes these barriers.</p>

      <h2>How we work with charities</h2>
      <ul>
        <li><strong>Custom landing pages:</strong> Branded will-making pages for your supporters</li>
        <li><strong>Easy charity inclusion:</strong> Your charity pre-loaded for selection</li>
        <li><strong>Marketing support:</strong> Materials to promote legacy giving</li>
        <li><strong>Reporting:</strong> Track pledged gifts (with consent)</li>
        <li><strong>Training:</strong> Help your team understand the will-making process</li>
      </ul>

      <h2>Get in touch</h2>
      <p>We'd love to explore how we can support your legacy fundraising programme. Contact us to discuss partnership opportunities.</p>
    `
  },
  'solicitor-checked-wills-for-charity-supporters': {
    title: 'Solicitor-Checked Wills for Charity Supporters',
    description: 'Quality wills with professional review',
    content: `
      <p>We work with charities to provide their supporters with affordable, professionally-reviewed wills that make it easy to include charitable gifts.</p>

      <h2>The solicitor-checked difference</h2>
      <p>Unlike basic DIY will services, every will we create is reviewed by a qualified solicitor. This means:</p>
      <ul>
        <li>Your supporters can trust their wills are legally valid</li>
        <li>Common errors that could invalidate gifts are caught</li>
        <li>Charitable legacies are properly worded</li>
        <li>Your charity is correctly identified</li>
      </ul>

      <h2>For your supporters</h2>
      <p>Our service offers:</p>
      <ul>
        <li>Affordable pricing - accessible to all supporters</li>
        <li>Simple online process - complete from home</li>
        <li>Professional review - every will checked by a solicitor</li>
        <li>Lifetime updates - modify wills when circumstances change</li>
        <li>Clear guidance - help at every step</li>
      </ul>

      <h2>For your charity</h2>
      <ul>
        <li>Increase legacy pledges by removing barriers</li>
        <li>Provide a valuable service to supporters</li>
        <li>Ensure gifts are properly documented</li>
        <li>Build deeper relationships with legacy supporters</li>
      </ul>

      <h2>Partnership options</h2>
      <p>We offer various partnership models to suit charities of all sizes. Contact us to discuss how we can work together to grow your legacy giving programme.</p>
    `
  }
};

function ServicePage() {
  const location = useLocation();
  const slug = location.pathname.slice(1); // Remove leading slash
  const page = serviceContent[slug];

  if (!page) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>Page Not Found</h1>
          </div>
        </div>
        <section className="page-content">
          <div className="container">
            <div className="content-wrapper">
              <p>Sorry, we couldn't find the page you're looking for.</p>
              <Link to="/" className="btn btn-primary">Return Home</Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Get the appropriate illustration for this page
  const IllustrationComponent = pageIllustrations[slug] || PolicyIllustration;

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>{page.title}</h1>
          {page.description && <p>{page.description}</p>}
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="content-wrapper">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'start', marginBottom: '30px' }}>
              <div dangerouslySetInnerHTML={{ __html: page.content }} />
              <div style={{ position: 'sticky', top: '100px' }}>
                <IllustrationComponent />
              </div>
            </div>

            <div className="text-center mt-4" style={{ background: '#f8f9fa', padding: '40px', borderRadius: '8px' }}>
              <h3>Ready to Make Your Will?</h3>
              <p>Create your solicitor-checked will in just 15 minutes.</p>
              <a href="https://makeawillonline.co.uk/my-will" className="btn btn-primary btn-lg">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicePage;
