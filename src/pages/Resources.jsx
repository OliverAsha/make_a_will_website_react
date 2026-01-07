import { Link } from 'react-router-dom';
import { ResourcesIllustration } from '../components/Illustrations';

function Resources() {
  const resourceCategories = [
    {
      title: "Making a Will",
      resources: [
        { title: "Do you need to make a will?", path: "/resource/do-i-need-to-make-a-will" },
        { title: "Are online wills legal?", path: "/resource/are-online-wills-legal" },
        { title: "Make an Online Will in Five Easy Steps", path: "/resource/make-an-online-will-in-five-easy-steps" },
        { title: "What is a Solicitor Checked will?", path: "/resource/what-is-a-solicitor-checked-will" },
        { title: "Who can witness a will?", path: "/resource/who-can-witness-a-will" },
        { title: "How To Sign a Will", path: "/resource/how-to-sign-execute-a-will" },
        { title: "Will writing glossary", path: "/resource/will-writing-glossary" },
      ]
    },
    {
      title: "Executors & Probate",
      resources: [
        { title: "What is an executor?", path: "/resource/executors" },
        { title: "Choosing executors for your will", path: "/resource/choosing-executors-for-your-will" },
        { title: "What is Probate and do I need it?", path: "/resource/do-i-need-probate" },
        { title: "How to apply for Probate", path: "/resource/apply-for-probate" },
        { title: "Probate Directory", path: "/resource/probate-directory" },
        { title: "Understanding estate accounts", path: "/resource/preparing-estate-accounts" },
      ]
    },
    {
      title: "Lasting Power of Attorney",
      resources: [
        { title: "What is a Lasting Power of Attorney?", path: "/resource/lasting-power-of-attorney" },
        { title: "Do I need an LPA?", path: "/resource/do-i-need-an-lpa" },
        { title: "How do I make an LPA?", path: "/resource/make-an-lpa" },
        { title: "What is an attorney?", path: "/resource/attorneys" },
        { title: "Choosing attorneys", path: "/resource/choosing-attorneys" },
        { title: "How much does an LPA cost?", path: "/resource/lpa-cost" },
      ]
    },
    {
      title: "Family Situations",
      resources: [
        { title: "Getting married - do I need a will?", path: "/resource/i-am-getting-married-do-i-need-a-will" },
        { title: "Separated from partner - new will?", path: "/resource/separated-from-partner-divorce-wills" },
        { title: "Guardianship and wills", path: "/resource/legal-guardians" },
        { title: "Blended families", path: "/resource/blended-families" },
        { title: "Wills and stepchildren", path: "/resource/wills-and-stepchildren" },
      ]
    },
    {
      title: "After Death",
      resources: [
        { title: "How to register a death", path: "/resource/register-a-death" },
        { title: "Death of a spouse", path: "/resource/death-of-a-spouse" },
        { title: "Arranging a funeral", path: "/resource/arranging-a-funeral" },
        { title: "Dealing with personal belongings", path: "/resource/personal-belongings" },
        { title: "What happens without a will?", path: "/resource/dying-without-a-will-intestacy" },
      ]
    },
    {
      title: "For Charities",
      resources: [
        { title: "Gifts in wills for charities", path: "/fundraising-online-wills" },
        { title: "Charity interface video", path: "/resource/gifts-in-wills-charity-interface-video" },
        { title: "Supporter journey video", path: "/resource/gifts-in-wills-supporter-journey-video" },
        { title: "Gifts in Wills - Training", path: "/gifts-in-wills-training-with-richard-radcliffe" },
      ]
    }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Resources</h1>
          <p>Helpful guides and information about wills, probate, and estate planning</p>
        </div>
      </div>

      <section className="resources-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <ResourcesIllustration />
            <p style={{ marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>
              Browse our comprehensive library of guides covering everything from making your first will to understanding probate.
            </p>
          </div>
          {resourceCategories.map((category, index) => (
            <div key={index} style={{ marginBottom: '50px' }}>
              <h2 style={{ marginBottom: '25px', paddingBottom: '10px', borderBottom: '2px solid #D4832E' }}>
                {category.title}
              </h2>
              <div className="resources-grid">
                {category.resources.map((resource, idx) => (
                  <Link key={idx} to={resource.path} className="card" style={{ textDecoration: 'none' }}>
                    <div className="card-content">
                      <h4>{resource.title}</h4>
                      <span style={{ color: '#D4832E', fontWeight: '500' }}>Read more →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Resources;
