// Charities page content — single source of truth, used by:
//   - src/pages/Charities.jsx (rendered via dangerouslySetInnerHTML)
//   - scripts/generate-pages.js (pre-baked into static HTML)

export const charitiesContent = {
  title: 'Services for Charities',
  description: 'Partner with us to grow your legacy income and support your donors',
  content: `
    <div style="display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;margin-bottom:40px">
      <div>
        <h2>Why Partner With Make a Will?</h2>
        <p>Legacy gifts are a vital source of income for UK charities, with over £3 billion left to charities each year. We help charities of all sizes promote legacy giving and make it easy for supporters to include charitable gifts in their wills.</p>
        <p>Our solicitor-checked will service ensures your supporters receive professional, legally valid wills while making it simple for them to leave a gift to your charity.</p>
      </div>
      <div><img src="/logos/charities.svg" alt="Charities illustration" width="400" height="320" style="max-width:280px;height:auto"/></div>
    </div>

    <h2>Our Charity Services</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin:24px 0">
      <div style="border:1px solid #e5e7eb;border-radius:8px;padding:24px;background:#fff">
        <h3>Gifts in Wills for Charities</h3>
        <p>Help your supporters leave a lasting legacy with our charity partnership programme for gifts in wills.</p>
        <p><a href="/fundraising-online-wills" class="btn btn-primary">Learn more</a></p>
      </div>
      <div style="border:1px solid #e5e7eb;border-radius:8px;padding:24px;background:#fff">
        <h3>Charities and Fundraising</h3>
        <p>Discover how charities can work with us to promote legacy giving and increase charitable donations.</p>
        <p><a href="/charities-and-fundraising-for-gifts-in-wills" class="btn btn-primary">Explore partnership</a></p>
      </div>
      <div style="border:1px solid #e5e7eb;border-radius:8px;padding:24px;background:#fff">
        <h3>Solicitor-Checked Wills for Supporters</h3>
        <p>Offer your charity supporters access to affordable, solicitor-checked wills while encouraging legacy gifts.</p>
        <p><a href="/solicitor-checked-wills-for-charity-supporters" class="btn btn-primary">View details</a></p>
      </div>
      <div style="border:1px solid #e5e7eb;border-radius:8px;padding:24px;background:#fff">
        <h3>Gifts in Wills Training</h3>
        <p>Professional training with Richard Radcliffe to help your fundraising team maximise legacy income.</p>
        <p><a href="/gifts-in-wills-training-with-richard-radcliffe" class="btn btn-primary">Book training</a></p>
      </div>
    </div>

    <h2>Resources for Charity Fundraisers</h2>
    <p>Learn more about legacy giving and how to promote it to your supporters:</p>
    <ul>
      <li><a href="/charity-gifts-in-wills-how-and-why">Charity Gifts in Wills: How and Why</a> &mdash; A guide to leaving gifts to charity</li>
      <li><a href="/resource/do-i-need-to-make-a-will">Do I Need to Make a Will?</a> &mdash; Help your supporters understand why wills matter</li>
      <li><a href="/resource/executors">What is an Executor?</a> &mdash; Explaining executor duties to potential legacy givers</li>
    </ul>

    <h3>External Resources for Charities</h3>
    <ul>
      <li><a href="https://www.rememberedcharity.org.uk/" target="_blank" rel="noopener noreferrer">Remember A Charity</a> &mdash; The UK consortium promoting charitable legacy giving</li>
      <li><a href="https://www.gov.uk/donating-to-charity/leaving-gifts-to-charity-in-your-will" target="_blank" rel="noopener noreferrer">Leaving Gifts to Charity &mdash; GOV.UK</a> &mdash; Official government guidance on charitable giving in wills</li>
      <li><a href="https://www.charitycommission.gov.uk/" target="_blank" rel="noopener noreferrer">Charity Commission</a> &mdash; The regulator for charities in England and Wales</li>
    </ul>
  `
};
