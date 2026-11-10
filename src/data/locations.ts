export type Location = {
  slug: string;
  name: string;
  region: string;
  market: 'Kerala' | 'India' | 'GCC';
  intro: string;
  industries: string[];
};

// Each page gets unique copy. Add more as you expand. Avoid copy-paste pages (Google penalises thin "doorway" pages).
export const locations: Location[] = [
  {
    slug: 'kochi',
    name: 'Kochi',
    region: 'Kerala',
    market: 'Kerala',
    intro:
      'Kochi is Kerala’s business capital, and competition for attention online is high. We help Kochi businesses, from Edappally retailers to Kakkanad tech firms and MG Road clinics, win local searches, run ads that bring calls and build brands people remember.',
    industries: ['Real estate', 'Clinics & hospitals', 'Restaurants & cafés', 'Education & training', 'Retail & fashion', 'IT & startups'],
  },
  {
    slug: 'trivandrum',
    name: 'Thiruvananthapuram',
    region: 'Kerala',
    market: 'Kerala',
    intro:
      'From Technopark startups to established brands in Pattom and Kowdiar, Trivandrum businesses work with us to rank on Google Maps, run lead-generating ads and keep social media active without hiring an in-house team.',
    industries: ['IT & software', 'Healthcare', 'Education & coaching', 'Hospitality & tourism', 'Builders', 'Jewellery'],
  },
  {
    slug: 'kozhikode',
    name: 'Kozhikode',
    region: 'Kerala',
    market: 'Kerala',
    intro:
      'Calicut has a strong trading culture and a large Gulf-connected audience. We run campaigns that reach customers both in Malabar and among the Malayali diaspora in the GCC, in English, Malayalam and Arabic.',
    industries: ['Retail & textiles', 'Restaurants', 'Real estate', 'Hospitals', 'Education', 'Export & trading'],
  },
  {
    slug: 'thrissur',
    name: 'Thrissur',
    region: 'Kerala',
    market: 'Kerala',
    intro:
      'Thrissur, Kerala’s cultural capital, is home to jewellers, banks, hospitals and fast-growing retail brands. We help Thrissur businesses turn local reputation into online demand with SEO, ads and standout creatives.',
    industries: ['Jewellery', 'Finance & banking', 'Healthcare', 'Retail', 'Education', 'Events & weddings'],
  },
  {
    slug: 'bangalore',
    name: 'Bangalore',
    region: 'Karnataka',
    market: 'India',
    intro:
      'Bangalore startups and D2C brands need marketing that scales quickly. We run performance campaigns, SEO and automation that move metrics like CAC, ROAS and pipeline, at agency rates that make sense for growing companies.',
    industries: ['SaaS & startups', 'D2C brands', 'EdTech', 'Real estate', 'Healthcare', 'Professional services'],
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    region: 'UAE',
    market: 'GCC',
    intro:
      'Dubai is one of the most competitive ad markets in the world. We help UAE businesses get more from Google and Meta budgets with bilingual (English and Arabic) creatives, sharp targeting and WhatsApp-first lead funnels, at Kerala team costs.',
    industries: ['Real estate', 'Trading & logistics', 'Restaurants', 'Clinics & beauty', 'Education', 'E-commerce'],
  },
  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    region: 'KSA',
    market: 'GCC',
    intro:
      'Saudi Arabia’s digital economy is growing fast under Vision 2030. We run Arabic and English campaigns for businesses in Riyadh, Jeddah and Dammam across Google, Meta, Snapchat-ready creatives and SEO.',
    industries: ['Retail & e-commerce', 'Healthcare', 'Construction', 'Education', 'Hospitality', 'Trading'],
  },
  {
    slug: 'qatar',
    name: 'Qatar',
    region: 'Qatar',
    market: 'GCC',
    intro:
      'From Doha restaurants to trading companies and clinics, we help Qatar businesses build a premium online presence and generate steady leads through search, social ads and WhatsApp automation.',
    industries: ['Restaurants', 'Trading', 'Clinics', 'Real estate', 'Education', 'Services'],
  },
];
