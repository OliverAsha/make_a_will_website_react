// About page content — single source of truth, used by:
//   - src/pages/About.jsx (rendered via dangerouslySetInnerHTML)
//   - scripts/generate-pages.js (pre-baked into static HTML)
//
// The founder bio is inlined here (rather than being a separate React
// component) so the same HTML appears in both the static and React renders.
// Inline styles preserve the visual treatment without needing extra CSS.

export const aboutContent = {
  title: 'About Us',
  description: 'Solicitor-checked online wills, plus one-to-one solicitor consultations for more complex estates. Trusted since 2008.',
  content: `
    <p style="text-align:center;max-width:600px;margin:0 auto 40px">Learn about who we are, why we started Make a Will, and how we're making professional will-writing accessible to everyone.</p>

    <h2>Two ways to make your will</h2>
    <p>Most people only need a straightforward will, and our online product &mdash; delivered by <a href="https://makeawillonline.co.uk/">Make a Will Online</a>, our sister service &mdash; handles that quickly and affordably from &pound;60. When circumstances are more involved (trusts, business interests, blended families, inheritance tax planning), or you'd simply prefer to talk things through with a qualified solicitor, our <a href="/resource/how-our-solicitor-consultation-works">consultation route</a> is here. Either way, every will we produce is reviewed by a solicitor on our team.</p>

    <h2>Our Mission</h2>
    <p>At Make a Will, we believe everyone deserves access to quality legal services for creating their will. We combine the convenience of technology with the expertise of qualified solicitors to provide a service that is both accessible and reliable.</p>

    <h2>Why We're Different</h2>
    <p>Unlike other online will services, every will we create is checked by a qualified solicitor. This unique approach means you get the convenience of completing your will from home, with the peace of mind that comes from professional legal oversight. <a href="/resource/how-solicitor-checked-online-will-works">See exactly how our solicitor check works</a>.</p>

    <h2>Our Story</h2>
    <p>Make a Will was founded with a simple goal: to make will-writing accessible to everyone, without compromising on quality. We saw that many people were either paying high fees for traditional solicitors or risking their family's future with unchecked DIY wills.</p>
    <p>Our solution combines the best of both worlds: affordable online convenience with professional legal expertise. Every will is reviewed by our team of qualified solicitors before it reaches you.</p>

    <h2>Our Values</h2>
    <ul>
      <li><strong>Quality:</strong> Every will is solicitor-checked for accuracy and legal validity</li>
      <li><strong>Accessibility:</strong> Affordable prices so everyone can protect their family</li>
      <li><strong>Transparency:</strong> Clear pricing with no hidden fees</li>
      <li><strong>Support:</strong> Lifetime updates and ongoing customer support</li>
      <li><strong>Trust:</strong> Money-back guarantee if you're not completely satisfied</li>
    </ul>

    <h2>Awards &amp; Recognition</h2>
    <p>We're proud to have been recognised for our innovative approach to legal services:</p>
    <ul>
      <li>Winner &mdash; Making a Difference in Legacy Giving 2023 Award</li>
      <li>Shortlisted for National Will Writing Firm of the Year</li>
      <li>Double nomination at the Modern Law Awards</li>
      <li>Proud Charity Champion for Remember A Charity Week</li>
    </ul>

    <h2 id="oliver-asha-bio-heading">Meet Our Founder</h2>
    <section aria-labelledby="oliver-asha-bio-heading" style="display:flex;gap:24px;padding:24px;margin:32px 0;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb;align-items:flex-start;flex-wrap:wrap">
      <img src="/team/oliver-asha.jpg" alt="Oliver Asha, Solicitor and TEP, founder of Make a Will" width="140" height="140" style="border-radius:50%;object-fit:cover;flex-shrink:0;background:#e5e7eb"/>
      <div style="flex:1 1 320px;min-width:0">
        <h3 style="margin:0 0 4px">Oliver Asha</h3>
        <p style="margin:0 0 12px;color:#6b7280;font-weight:500">Solicitor &middot; TEP &middot; Founder of Make a Will</p>
        <p style="margin:0 0 12px">Oliver is a Solicitor of England and Wales (SRA number 372772) and a Trust and Estate Practitioner (TEP). He founded Make a Will in 2008 to bring proper, solicitor-checked wills within reach of every UK family, and personally oversees the legal review of the guides on this site.</p>
        <p style="margin:0;font-size:0.9rem">Verify Oliver's credentials: <a href="https://solicitors.lawsociety.org.uk/person/159165/oliver-asha" target="_blank" rel="noopener noreferrer">Law Society</a> &middot; <a href="https://www.sra.org.uk/consumers/register/person/?sraNumber=372772" target="_blank" rel="noopener noreferrer">SRA register</a> &middot; <a href="https://www.step.org/directory/members/mr-oliver-asha-0033c00002wbj1maab" target="_blank" rel="noopener noreferrer">STEP directory</a></p>
      </div>
    </section>

    <h2>Our Team</h2>
    <p>Alongside Oliver, our team includes qualified solicitors, legal technologists, and customer support specialists, all dedicated to making the will-writing process as smooth as possible. We're passionate about helping people protect their families and ensure their wishes are carried out.</p>
  `
};
