import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import ResourcePage from './pages/ResourcePage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import GlossaryPage from './pages/GlossaryPage';
import ServicePage from './pages/ServicePage';
import SampleWill from './pages/SampleWill';
import MakeYourWill from './pages/MakeYourWill';
import Charities from './pages/Charities';
import './index.css';

// Generic page component for routes not yet implemented
function GenericPage({ title, description }) {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      </div>
      <section className="page-content">
        <div className="container">
          <div className="content-wrapper">
            <p>This page is coming soon. Please check back later for more information.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sample-will" element={<SampleWill />} />
            <Route path="/make-your-will" element={<MakeYourWill />} />
            <Route path="/blog" element={<Blog />} />

            {/* Resources */}
            <Route path="/resource" element={<Resources />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resource/:slug" element={<ResourcePage />} />
            <Route path="/resources/:slug" element={<ResourcePage />} />
            <Route path="/useful-resources" element={<Resources />} />

            {/* Policies */}
            <Route path="/data-handling-policy" element={<ServicePage />} />
            <Route path="/disclaimer" element={<ServicePage />} />
            <Route path="/money-back-guarantee" element={<ServicePage />} />
            <Route path="/our-competition-and-markets-authority-statement" element={<ServicePage />} />

            {/* Services */}
            <Route path="/lifetime-updates" element={<ServicePage />} />
            <Route path="/a-pair-of-wills-or-mirror-wills" element={<ServicePage />} />
            <Route path="/book-a-call" element={<ServicePage />} />
            <Route path="/login" element={<GenericPage title="Login" description="Access your account" />} />

            {/* Charity Pages */}
            <Route path="/charities" element={<Charities />} />
            <Route path="/fundraising-online-wills" element={<ServicePage />} />
            <Route path="/charities-and-fundraising-for-gifts-in-wills" element={<ServicePage />} />
            <Route path="/solicitor-checked-wills-for-charity-supporters" element={<ServicePage />} />
            <Route path="/gifts-in-wills-training-with-richard-radcliffe" element={<ServicePage />} />

            {/* Blog Categories */}
            <Route path="/topic/:category" element={<Blog />} />

            {/* Blog Posts */}
            <Route path="/why-make-a-will" element={<BlogPost />} />
            <Route path="/why-write-a-will" element={<BlogPost />} />
            <Route path="/5-reasons-to-update-your-will" element={<BlogPost />} />
            <Route path="/do-I-need-probate" element={<BlogPost />} />
            <Route path="/dying-without-a-will-intestacy" element={<BlogPost />} />
            <Route path="/children-and-gifts-in-wills" element={<BlogPost />} />
            <Route path="/do-you-cohabit" element={<BlogPost />} />
            <Route path="/uk-expat-wills" element={<BlogPost />} />
            <Route path="/charity-gifts-in-wills-how-and-why" element={<BlogPost />} />

            {/* Glossary Terms */}
            <Route path="/beneficiary" element={<GlossaryPage />} />
            <Route path="/bequest" element={<GlossaryPage />} />
            <Route path="/codicil" element={<GlossaryPage />} />
            <Route path="/legacy" element={<GlossaryPage />} />
            <Route path="/testator" element={<GlossaryPage />} />

            {/* Catch-all for unmatched routes */}
            <Route path="*" element={<GenericPage title="Page Not Found" description="Sorry, this page doesn't exist" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
