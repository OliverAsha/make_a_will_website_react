// Home page content — single source of truth, used by:
//   - src/pages/Home.jsx (rendered via dangerouslySetInnerHTML)
//   - scripts/generate-pages.js (pre-baked into static dist/index.html)
//
// SVG icons are inlined so the visual treatment is preserved when rendered
// via dangerouslySetInnerHTML. CSS classes from index.css still apply.

const checkSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
const trustpilotStarSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="#00B67A"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

export const homeContent = {
  title: 'Make a Will',
  description: 'The only solicitor-checked online wills service. Trusted since 2008.',
  content: `
    <section class="hero">
      <div class="container">
        <div class="hero-inner">
          <h1 class="hero-title">Wills made by solicitors. Simple</h1>
          <div class="hero-content">
            <p class="hero-subtitle">Every clause of every will is made by and checked by solicitors. Legally valid in England &amp; Wales. Most people finish in 15 minutes or less.</p>
            <div class="hero-cta">
              <a href="/start-your-will" class="btn btn-primary">make my will</a>
              <div class="trustpilot-badge">${trustpilotStarSvg}<span>Rated excellent</span></div>
            </div>
            <ul class="hero-features">
              <li>${checkSvg}<span>Every will reviewed by a qualified solicitor</span></li>
              <li>${checkSvg}<span>Single will £90, mirror wills £135</span></li>
              <li>${checkSvg}<span>Legally valid in England &amp; Wales</span></li>
            </ul>
          </div>
          <div class="hero-image">
            <img src="/logos/hero-image.png" alt="Colourful origami papercraft illustration of a family standing in front of their home" width="1024" height="853" style="max-width:701px;width:100%;height:auto"/>
          </div>
        </div>
      </div>
    </section>

    <section class="trust-bar">
      <div class="container">
        <div class="trust-bar-inner">
          <div class="trust-bar-item">${checkSvg}<span>Solicitor-checked</span></div>
          <div class="trust-bar-item">${checkSvg}<span>Fixed pricing</span></div>
          <div class="trust-bar-item">${checkSvg}<span>Legally valid</span></div>
          <div class="trust-bar-item">${checkSvg}<span>Lifetime updates</span></div>
          <div class="trust-bar-item">${checkSvg}<span>Money back guarantee</span></div>
        </div>
      </div>
    </section>

    <section class="solicitor-row" style="padding:32px 0;background:#f9fafb;border-bottom:1px solid #e5e7eb">
      <div class="container">
        <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;justify-content:center;max-width:840px;margin:0 auto">
          <img src="/team/oliver-asha.jpg" alt="Oliver Asha, Solicitor and TEP, founder of Make a Will" width="88" height="88" style="border-radius:50%;object-fit:cover;flex-shrink:0;background:#e5e7eb"/>
          <div style="flex:1 1 360px;min-width:0">
            <p style="margin:0 0 6px;font-size:1.05rem;line-height:1.5;font-style:italic">"Every will we produce is reviewed by a qualified solicitor on our team within two working days. If anything in your answers needs a closer look, we'll come back to you before your will is finalised."</p>
            <p style="margin:0;font-size:0.95rem;color:#6b7280">&mdash; Oliver Asha, Solicitor &amp; TEP (SRA 372772) &middot; <a href="/resource/how-solicitor-checked-online-will-works">See exactly how it works</a></p>
          </div>
        </div>
      </div>
    </section>

    <section class="steps-section">
      <div class="container">
        <div class="section-title">
          <h2>Make Your Will in 3 Simple Steps</h2>
          <p>Creating a legally valid, solicitor-checked will has never been easier. Our guided process ensures nothing is missed.</p>
        </div>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Answer Questions</h3>
            <p>Our simple questionnaire guides you through all the important decisions about your estate, beneficiaries, and wishes.</p>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Solicitor Check</h3>
            <p>Every will is reviewed by a qualified solicitor to ensure it's legally sound and properly structured.</p>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Sign &amp; Store</h3>
            <p>Print your will, sign it with witnesses, and store it safely. We'll guide you through proper execution.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="container">
        <div class="feature-row">
          <div class="feature-content">
            <h3>Solicitor-Checked for Peace of Mind</h3>
            <p>Unlike other will services, every will we create is reviewed by a qualified solicitor. This ensures your will is legally valid and your wishes will be carried out exactly as you intend.</p>
            <p>Our team of legal experts catch potential issues before they become problems, giving you complete confidence in your will.</p>
            <a href="/resource/what-is-a-solicitor-checked-will" class="btn btn-primary">learn about solicitor-checked wills</a>
          </div>
          <div class="feature-image">
            <img src="/logos/feature-solicitor-verified.svg" alt="Origami illustration representing a solicitor-verified will with a badge and checkmark" width="400" height="320" style="max-width:100%;height:auto"/>
          </div>
        </div>

        <div class="feature-row reverse">
          <div class="feature-content">
            <h3>Lifetime Updates Included</h3>
            <p>Life changes, and so should your will. With our lifetime updates feature, you can modify your will whenever your circumstances change &mdash; whether you get married, have children, or simply change your mind.</p>
            <p>No additional fees, no hassle. Just log in and make your changes.</p>
            <a href="/lifetime-updates" class="btn btn-primary">learn about lifetime updates</a>
          </div>
          <div class="feature-image">
            <img src="/logos/feature-always-up-to-date.svg" alt="Origami illustration of a current will on top of older versions, representing lifetime updates" width="400" height="320" style="max-width:100%;height:auto"/>
          </div>
        </div>
      </div>
    </section>

    <section class="comparison-section">
      <div class="container">
        <div class="section-title">
          <h2>Why Choose Our Will Writing Service?</h2>
          <p>See how our solicitor-checked wills compare to other options in the UK.</p>
        </div>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Make a Will</th>
              <th>Traditional Solicitor</th>
              <th>Other Online Services</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Solicitor Checked</td>
              <td><span class="check-icon">&check;</span></td>
              <td><span class="check-icon">&check;</span></td>
              <td><span class="cross-icon">&cross;</span></td>
            </tr>
            <tr>
              <td>Affordable Price</td>
              <td><span class="check-icon">&check;</span></td>
              <td><span class="cross-icon">&cross;</span></td>
              <td><span class="check-icon">&check;</span></td>
            </tr>
            <tr>
              <td>Complete from Home</td>
              <td><span class="check-icon">&check;</span></td>
              <td><span class="cross-icon">&cross;</span></td>
              <td><span class="check-icon">&check;</span></td>
            </tr>
            <tr>
              <td>Lifetime Updates</td>
              <td><span class="check-icon">&check;</span></td>
              <td><span class="cross-icon">&cross;</span></td>
              <td><span class="cross-icon">&cross;</span></td>
            </tr>
            <tr>
              <td>Money Back Guarantee</td>
              <td><span class="check-icon">&check;</span></td>
              <td><span class="cross-icon">&cross;</span></td>
              <td><span class="cross-icon">&cross;</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="py-6 bg-light">
      <div class="container text-center">
        <h2>Ready to Get Started?</h2>
        <p style="max-width:600px;margin:20px auto">Join thousands of people who have already created their will with Make a Will. It takes just 15 minutes and provides complete peace of mind.</p>
        <a href="/start-your-will" class="btn btn-primary btn-lg">make your will now</a>
      </div>
    </section>
  `
};
