// src/config.ts — single entry point for site settings. Everything site-specific lives here; never hardcode in components.
export const site = {
  name: 'Thawin Serivivatanavongse',
  description: 'Electrical engineering student designing analog and mixed-signal integrated circuits.',
  url: 'https://thawin-seri.github.io',
  locale: 'en', // BCP 47, e.g. 'en', 'ko'
  author: 'Thawin Serivivatanavongse',
  quote: { text: 'The unexamined life is not worth living.', by: 'Socrates' }, // shown under your name on the home page
  defaultOgImage: '/og-default.jpg', // the card for every page without one of its own
} as const;

export const nav = {
  header: [
    { label: 'Projects', href: '/projects' },
    { label: 'Photos', href: '/collections' },
    { label: 'About', href: '/about' },
    { label: 'Resume', href: '/resume.pdf' },
  ],
  footer: [
    {
      title: 'Site',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/thawin', icon: 'lucide:linkedin' },
    { label: 'GitHub', href: 'https://github.com/thawin-seri', icon: 'lucide:github' },
    // Icons are Lucide names (https://lucide.dev/icons)
  ],
} as const;

export const seo = {
  titleTemplate: '%s · Thawin Serivivatanavongse',
  twitterHandle: '',
  jsonLd: { type: 'Person' as 'Person' | 'Organization', name: site.author },
};

export const contact = {
  // Any service that takes a plain POST: Formspree, Web3Forms, Basin. The form
  // posts straight to it, so there is no script and nothing to keep running.
  formEndpoint: 'https://formspree.io/f/your-form-id',
  email: 'hello@example.com', // shown beside the form for people who would rather write
  responseTime: 'Two or three days, and every message is read.',
};

export const catalogue = {
  // 12 fills the plate grid twice over with the 22 sample objects, so the demo
  // actually shows its pagination. A real archive can raise it: the grid is the
  // same at any count.
  platesPerPage: 12,
  relatedPlates: 3,
  // Accession numbers are derived from catalogue order (01, 02, …) unless an
  // object sets its own. Turn off to hide them everywhere.
  showAccession: false,
};

export const features = {
  darkMode: true,
  // The signature: 1px rule grid, objects placed inside the cells, cartellino
  // labels. Off falls back to a plain spaced grid with no rules and no labels.
  plate: true,
};

export const analytics = {
  provider: null as null | 'plausible' | 'ga4' | 'umami',
  id: '',
  // Self-hosted Plausible or Umami: the origin serving the script, no trailing slash.
  // Empty means the hosted service. GA4 ignores it.
  host: '',
};

// Every word the theme prints, in one place: translate these and set site.locale. Counts are
// functions, so plurals stay right: objects: (count) => `${count} Objekte`. Strings marked
// "HTML" carry a link and are printed as markup. The colophon's text is the page itself
// (src/pages/colophon.astro).
const n = (count: number, one: string, many: string) => `${count} ${count === 1 ? one : many}`;
const objectWord = (count: number) => (count === 1 ? 'photo' : 'photos');
export const ui = {
  skipToContent: 'Skip to content',
  mainNav: 'Main', // read out for the header links
  elsewhere: 'Elsewhere', // the social links' heading
  theme: { system: 'System', light: 'Light', dark: 'Dark' },
  objects: (count: number) => `${count} ${objectWord(count)}`,
  objectWord, // the word alone, after a count printed apart from it
  wholeCatalogue: 'All photos',
  pagination: {
    label: 'Pagination',
    back: '← Back',
    on: 'Further on →',
    sheet: (page: number, last: number) => `Sheet ${page} of ${last}`,
  },
  home: {
    count: (objects: number, collections: number) =>
      `${n(objects, 'photo', 'photos')}, ${n(collections, 'album', 'albums')}`,
    plates: 'Photos',
    collections: 'Albums',
  },
  catalogue: {
    title: 'All photos',
    sheet: (page: number) => `All photos (${page})`, // the title of sheet 2 onwards
    description: `Every photograph on ${site.name}'s site.`,
    range: (first: number, last: number, total: number) => `${first}–${last} of ${total}`,
    intro: 'Arranged by album, and within an album by date.',
  },
  label: {
    medium: 'Camera',
    date: 'Date',
    dimensions: 'Dimensions',
    number: 'No.',
    credit: 'Credit',
  },
  nearby: 'More photos',
  collection: {
    empty: 'No photos in this album yet.',
    all: '← All albums',
  },
  collections: {
    title: 'Photos',
    description: `Photographs by ${site.name}, by region.`,
    intro: 'Photographs from my travels, grouped by where they were taken.',
  },
  colophon: {
    title: 'Colophon',
    description: `${site.author} on the objects in the ${site.name} catalogue, and how the catalogue is made.`,
  },
  contact: {
    title: 'Contact',
    description: `Write about an object in the ${site.name} catalogue, a photograph, or a commission.`,
    heading: 'Enquiries',
    intro:
      'About an object in the catalogue, a photograph you want to reproduce, or something you would like made. Naming the catalogue number saves a round trip.',
    name: 'Name',
    email: 'Email',
    number: 'Catalogue number',
    numberHint: 'Optional. It is printed under every plate, beside the date.',
    message: 'Message',
    send: 'Send',
    reply: 'Reply',
    byEmail: 'By email',
    photographs: 'Photographs',
    // HTML
    photographsText:
      'The plates are the studio\'s own. What you may do with them is on the <a href="/terms">Terms</a> page.',
  },
  notFound: {
    title: 'Page not found',
    text: 'The page you asked for is not here.',
    home: 'Back to the home page',
  },
};
