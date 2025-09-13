import Head from 'next/head';
import { defaultSEO, seoPages } from '../config/seo';

export default function SEO({
  pageKey,
  title,
  description,
  url,
  image
}) {
  // Pull page-specific config if available
  const pageConfig = pageKey ? seoPages[pageKey] || {} : {};

  const seoTitle = title || pageConfig.title || defaultSEO.defaultTitle;
  const seoDescription =
    description || pageConfig.description || defaultSEO.defaultDescription;
  const seoUrl = url || defaultSEO.siteUrl;
  const seoImage = image || pageConfig.image || defaultSEO.defaultImage;

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
    </Head>
  );
}