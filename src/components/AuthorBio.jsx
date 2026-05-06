// AuthorBio — visible founder/reviewer bio for Oliver Asha.
//
// Mirrors the Person entity declared in the JSON-LD schema in index.html
// (the "founder" field of the LegalService and @id #oliver-asha).
// Drop this component anywhere we want to surface the human + credentials
// behind Make a Will — currently used on the About Us page.

function AuthorBio() {
  return (
    <section
      aria-labelledby="oliver-asha-bio-heading"
      style={{
        display: 'flex',
        gap: '24px',
        padding: '24px',
        margin: '32px 0',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        background: '#f9fafb',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}
    >
      <img
        src="/team/oliver-asha.jpg"
        alt="Oliver Asha, Solicitor and TEP, founder of Make a Will"
        width={140}
        height={140}
        style={{
          borderRadius: '50%',
          objectFit: 'cover',
          flexShrink: 0,
          background: '#e5e7eb'
        }}
      />
      <div style={{ flex: '1 1 320px', minWidth: 0 }}>
        <h3 id="oliver-asha-bio-heading" style={{ margin: '0 0 4px' }}>
          Oliver Asha
        </h3>
        <p style={{ margin: '0 0 12px', color: '#6b7280', fontWeight: 500 }}>
          Solicitor &middot; TEP &middot; Founder of Make a Will
        </p>
        <p style={{ margin: '0 0 12px' }}>
          Oliver is a Solicitor of England and Wales (SRA number 372772) and a
          Trust and Estate Practitioner (TEP). He founded Make a Will in 2008
          to bring proper, solicitor-checked wills within reach of every UK family,
          and personally oversees the legal review of the guides on this site.
        </p>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          Verify Oliver&rsquo;s credentials:{' '}
          <a
            href="https://solicitors.lawsociety.org.uk/person/159165/oliver-asha"
            target="_blank"
            rel="noopener noreferrer"
          >
            Law Society
          </a>
          {' · '}
          <a
            href="https://www.sra.org.uk/consumers/register/person/?sraNumber=372772"
            target="_blank"
            rel="noopener noreferrer"
          >
            SRA register
          </a>
          {' · '}
          <a
            href="https://www.step.org/directory/members/mr-oliver-asha-0033c00002wbj1maab"
            target="_blank"
            rel="noopener noreferrer"
          >
            STEP directory
          </a>
        </p>
      </div>
    </section>
  );
}

export default AuthorBio;
