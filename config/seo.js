// Default SEO settings for Roboflex
// These values are used site-wide unless overridden per page

const defaultSEO = {
  defaultTitle: 'Roboflex — Ultra‑Luxury Human Performance Engineering',
  defaultDescription:
    'From NASA-class engineering to private ownership. Discover the world’s most exclusive human performance system.',
  siteUrl: 'https://roboflex.co',
  defaultImage: '/og-image.jpg'
};

// Global verification/meta codes
const verification = {
  google: '<meta name="google-site-verification" content="6rlph_r_EYo9t45AjHBQPgTG6SpoA62-2QZml7hogME" />', // paste from Search Console
  bing: '',   // optional
  yandex: ''  // optional
};

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
    image: '/og-image-tech.jpg'
  },
  heritage: {
    title: 'Heritage — Roboflex',
    description:
      'Discover the NASA and military heritage that shaped the Roboflex platform.',
    image: '/og-image-heritage.jpg'
  }
};

export { defaultSEO, seoPages, verification };