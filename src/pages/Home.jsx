import SEO from '../components/SEO';
import { homeContent } from '../data/home';

// Page content lives in src/data/home.js so the React render and the pre-baked
// static HTML come from the same source. The Hero component is no longer used
// here; the hero markup is rendered inline from the data file.

function Home() {
  return (
    <div className="home-page">
      <SEO />
      <div dangerouslySetInnerHTML={{ __html: homeContent.content }} />
    </div>
  );
}

export default Home;
