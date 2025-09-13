// Default SEO settings for Roboflex
// These values are used site-wide unless overridden per page

const defaultSEO = {
  defaultTitle: 'Roboflex — Ultra‑Luxury Human Performance Engineering',
  defaultDescription:
    'From NASA-class engineering to private ownership. Discover the world’s most exclusive human performance system.',
  siteUrl: 'https://roboflex.co',
  defaultImage: '/og-image.jpg'
};

// Optional: Page-specific overrides
// You can add/modify entries as the site grows (Phase 1 and beyond)
const seoPages = {
  landing: {
    title: 'Roboflex — Elite Biolocomotion Performance System',
    description:
      'Experience the only performance system engineered from NASA‑class biomechanics and military technology.',
    image: '/og-image.jpg'
  },
  application: {
    title: 'Apply for Private Access — Roboflex',
    description:
      'Submit your application to gain exclusive access to the Roboflex performance platform.',
    image: '/og-image.jpg'
  },
  technology: {
    title: 'Technology — Roboflex',
    description:
      'Explore the groundbreaking engineering behind the Roboflex biolocomotion system.',
    image: '/og-image-tech.jpg' // You can swap out per page
  },
  heritage: {
    title: 'Heritage — Roboflex',
    description:
      'Discover the NASA and military heritage that shaped the Roboflex platform.',
    image: '/og-image-heritage.jpg'
  }
};

export { defaultSEO, seoPages };