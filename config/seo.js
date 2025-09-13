import Head from 'next/head';
import { defaultSEO, seoPages, verification } from '../config/seo';

export default function SEO({
  pageKey,
  title,
  description,
  url,
  image
}) {
  const pageConfig = pageKey ? seoPages[pageKey] || {} : {};

  const seoTitle = title || pageConfig.title || defaultSEO.defaultTitle;
  const seoDescription =
    description || pageConfig.description || defaultSEO.defaultDescription;
  const seoUrl = url || defaultSEO.siteUrl;
  const seoImage = image || pageConfig.image || defaultSEO.defaultImage;

  // Structured data (JSON-LD)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Roboflex',
    url: seoUrl,
    logo: `${seoUrl}/logo.png`, // Add logo.png to /public
    sameAs: [
      'https://www.linkedin.com/company/roboflex', // Update when available
      'https://twitter.com/roboflex_official'       // Update when available
    ]
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Roboflex Human Performance System',
    image: `${seoUrl}${seoImage}`,
    description: seoDescription,
    brand: {
      '@type': 'Brand',
      name: 'Roboflex'
    },
    offers: {
      '@type': 'Offer',
      url: seoUrl,
      priceCurrency: 'USD',
      // No public pricing — omit "price" to keep UHNWI exclusivity
      availability: 'https://schema.org/PreOrder', 
      itemCondition: 'https://schema.org/NewCondition'
    }
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Verification Meta Tags */}
      {verification.google && (
        <meta
          name="google-site-verification"
          content={verification.google}
        />
      )}
      {verification.bing && (
        <meta name="msvalidate.01" content={verification.bing} />
      )}
      {verification.yandex && (
        <meta name="yandex-verification" content={verification.yandex} />
      )}

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)
        }}
      />
    </Head>
  );
}