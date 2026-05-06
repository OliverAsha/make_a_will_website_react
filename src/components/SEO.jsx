import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSEO, SITE_URL, SITE_NAME } from '../seo-config';

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

function SEO({ title, description, canonical, type = 'website', image, schema }) {
  const { pathname } = useLocation();
  const defaults = getSEO(pathname);

  const pageTitle = title || defaults.title;
  const pageDescription = description || defaults.description;
  const canonicalUrl = canonical || defaults.canonicalUrl || `${SITE_URL}${pathname}`;
  const pageImage = image || defaults.image || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:image" content={pageImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* Schema JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
