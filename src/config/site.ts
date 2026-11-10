// ─────────────────────────────────────────────────────────────
// ONE place for all business details. Edit here → updates everywhere.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Your ABH',
  legalName: 'Your ABH Digital Marketing Agency',
  url: 'https://yourabh.com', // keep in sync with astro.config.mjs
  tagline: 'Growth-focused digital marketing agency',
  description:
    'Your ABH is a results-driven digital marketing agency in Kerala offering SEO, Google Ads, Meta Ads, social media management, website development, AI video, posters and automation for brands across India, the GCC and worldwide.',

  phone: '+91 90742 55833',
  phoneRaw: '+919074255833',
  whatsapp: '919074255833',
  email: 'rbibin6@gmail.com',

  address: {
    locality: 'Kochi', // TODO: update with your real office city
    region: 'Kerala',
    country: 'IN',
    countryName: 'India',
  },

  hours: 'Mon – Sat, 9:30 AM – 6:30 PM IST',

  // Free form backend: get a key at https://web3forms.com (uses your email). Leave '' to send leads via WhatsApp only.
  web3formsKey: '',

  // Analytics — paste IDs when ready.
  ga4Id: '', // e.g. 'G-XXXXXXXXXX'
  metaPixelId: '',

  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
    youtube: '',
  },
};

export const waLink = (text = "Hi Your ABH, I'd like a free marketing audit.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
