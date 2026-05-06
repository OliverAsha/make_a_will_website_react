// Sample Will page content — single source of truth, used by:
//   - src/pages/SampleWill.jsx (rendered via dangerouslySetInnerHTML)
//   - scripts/generate-pages.js (pre-baked into static HTML)

export const sampleWillContent = {
  title: 'Sample Will',
  description: 'See what a professionally drafted will looks like',
  content: `
    <p style="text-align:center;margin-bottom:40px"><img src="/logos/sample-will-image.png" alt="Sample will illustration" width="1402" height="1122" style="max-width:300px;height:auto"/></p>
    <p style="text-align:center;max-width:600px;margin:0 auto 40px">Wondering what your will might look like? Below is an example of a professionally drafted will similar to what you would receive from Make a Will. Every will we create is checked by a qualified solicitor to ensure it meets all legal requirements.</p>

    <div style="background:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:40px;margin:40px 0;font-family:Georgia,serif">
      <h2 style="text-align:center;margin-bottom:30px">LAST WILL AND TESTAMENT</h2>

      <p style="text-align:center;margin-bottom:30px"><strong>of</strong><br/><strong>[FULL NAME]</strong><br/>of [ADDRESS]</p>

      <h3>1. REVOCATION</h3>
      <p>I revoke all former wills and testamentary dispositions and declare this to be my last will.</p>

      <h3>2. APPOINTMENT OF EXECUTORS</h3>
      <p>I appoint [EXECUTOR NAME] of [EXECUTOR ADDRESS] and [EXECUTOR NAME] of [EXECUTOR ADDRESS] to be the Executors of this my will.</p>

      <h3>3. APPOINTMENT OF GUARDIANS</h3>
      <p>If at my death any of my children are under 18, I appoint [GUARDIAN NAME] of [GUARDIAN ADDRESS] to be their guardian.</p>

      <h3>4. SPECIFIC GIFTS</h3>
      <p>I give the following specific gifts free of tax:<br/>(a) My [ITEM] to [BENEFICIARY NAME]<br/>(b) The sum of £[AMOUNT] to [BENEFICIARY NAME]</p>

      <h3>5. RESIDUARY ESTATE</h3>
      <p>I give all my real and personal property not otherwise disposed of by this will or any codicil to it (my "Residuary Estate") to my Executors on trust to sell, call in and convert into money all such property as is not already in the form of money with power to postpone such sale, calling in and conversion for so long as they think fit without being liable for any loss.</p>
      <p>My Executors shall pay my debts, funeral and testamentary expenses and any legacies and then hold the balance of my Residuary Estate for [BENEFICIARY NAME] absolutely.</p>

      <h3>6. CHARGING CLAUSE</h3>
      <p>Any Executor or Trustee of this will being a person engaged in any profession or business shall be entitled to charge and be paid all usual professional or business charges for any work done by that person or their firm in connection with the administration of my estate.</p>

      <div style="margin-top:50px">
        <p><strong>SIGNED</strong> by [TESTATOR NAME]</p>
        <p>on [DATE]</p>
        <p style="margin-top:30px">in the presence of:</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:20px">
          <div>
            <p><strong>Witness 1:</strong></p>
            <p>Signature: _________________</p>
            <p>Name: _________________</p>
            <p>Address: _________________</p>
            <p>Occupation: _________________</p>
          </div>
          <div>
            <p><strong>Witness 2:</strong></p>
            <p>Signature: _________________</p>
            <p>Name: _________________</p>
            <p>Address: _________________</p>
            <p>Occupation: _________________</p>
          </div>
        </div>
      </div>
    </div>

    <h2>Key Points About This Sample</h2>
    <ul>
      <li><strong>Revocation clause:</strong> Ensures any previous wills are cancelled</li>
      <li><strong>Executors:</strong> The people responsible for carrying out your wishes</li>
      <li><strong>Guardians:</strong> Who will care for your children if needed</li>
      <li><strong>Specific gifts:</strong> Particular items or amounts for named individuals</li>
      <li><strong>Residuary estate:</strong> Everything else goes to your main beneficiary</li>
      <li><strong>Attestation clause:</strong> Witnesses confirm the will was properly signed</li>
    </ul>

    <p>For a detailed breakdown of what each section means and why it matters, see our guide to <a href="/resource/will-template-uk">what your will should include</a>.</p>

    <h2>Your Will Can Include</h2>
    <ul>
      <li>Multiple executors and backup executors</li>
      <li>Gifts to individuals, charities, or trusts</li>
      <li>Specific items (jewellery, property, vehicles)</li>
      <li>Cash gifts and percentage shares</li>
      <li>Trusts for children or vulnerable beneficiaries</li>
      <li>Funeral wishes</li>
      <li>Pet care instructions</li>
    </ul>
  `
};
