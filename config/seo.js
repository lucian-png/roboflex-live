const defaultSEO = {
  defaultTitle: 'Roboflex — 1 of 10 Original NASA‑Spec Units Available',
  defaultDescription:
    'Own a piece of technological history: one of only 10 hand‑built, original NASA‑spec Roboflex units — precision aerospace engineering for elite performance.',
  siteUrl: 'https://roboflex.co',
  defaultImage: '/og-image.jpg'
};

// Global verification/meta codes
const verification = {
  google: '6rlph_r_EYo9t45AjHBQPgTG6SpoA62-2QZml7hogME',
  bing: '',
  yandex: ''
};

const seoPages = {
  // Landing now inherits from defaultSEO
  landing: {
    title: defaultSEO.defaultTitle,
    description: defaultSEO.defaultDescription,
    image: defaultSEO.defaultImage
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
  },
  technologyPrinciples: {
    title: 'Roboflex Technology Principles — Biolocomotion Performance',
    description:
      'Explore the core engineering principles behind Roboflex — a NASA‑heritage, biolocomotion performance system for elite physical mastery.',
    image: '/og-image-tech.jpg'
  }
};

export { defaultSEO, seoPages, verification };