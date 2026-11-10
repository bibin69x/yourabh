export type Service = {
  slug: string;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  icon: string; // SVG path data (24x24, stroke)
  deliverables: string[];
  outcomes: { stat: string; label: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    short: 'Full-funnel strategy that ties every rupee to leads, sales and revenue.',
    metaTitle: 'Digital Marketing Agency in Kerala | Your ABH',
    metaDescription:
      'Full-funnel digital marketing for Kerala, India and GCC businesses. Strategy, paid ads, SEO, social and automation under one roof, built around leads and revenue.',
    headline: 'Digital marketing that shows up in your revenue',
    intro:
      'We put SEO, paid ads, social, creative and automation into one growth plan. Every campaign is tied to a lead or a sale, so you can see exactly what your marketing budget brings back.',
    icon: 'M3 3v18h18M7 15l4-4 3 3 6-6M15 8h5v5',
    deliverables: [
      'Growth audit & 90-day marketing roadmap',
      'Channel mix planning (search, social, paid, email, WhatsApp)',
      'Landing pages & conversion rate optimisation',
      'Monthly performance reports in plain English',
      'Competitor & market research for Kerala, India and GCC',
      'Dedicated account manager',
    ],
    outcomes: [
      { stat: '90-day', label: 'growth roadmap to start' },
      { stat: 'Weekly', label: 'progress check-ins' },
      { stat: '1', label: 'team for every channel' },
    ],
    faqs: [
      { q: 'How much does digital marketing cost?', a: 'Retainers start from a monthly management fee based on channels and scope. Ad spend is paid separately, directly to Google or Meta. Book a free audit and we will send a fixed quote.' },
      { q: 'How soon will I see results?', a: 'Paid ads usually bring leads within the first 1–2 weeks. SEO and organic social build over 3–6 months and keep growing after that.' },
      { q: 'Do you work with businesses outside Kerala?', a: 'Yes. We work with clients across India, the UAE, Saudi Arabia, Qatar and other countries, all managed remotely with weekly calls.' },
    ],
  },
  {
    slug: 'seo',
    name: 'SEO',
    short: 'Rank on Google for searches that bring buyers, not just traffic.',
    metaTitle: 'SEO Services in Kerala, India & GCC | Your ABH',
    metaDescription:
      'Local and national SEO services: technical SEO, content, Google Business Profile and link building. Rank higher on Google and get more enquiries.',
    headline: 'Get found on Google by people ready to buy',
    intro:
      'We fix the technical issues holding your site back, write content around what your customers actually search for, and build the authority Google trusts. You get rankings that bring calls, form fills and WhatsApp messages.',
    icon: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35M8 11h6M11 8v6',
    deliverables: [
      'Full technical SEO audit & fixes',
      'Keyword research with buyer intent',
      'On-page optimisation & schema markup',
      'Local SEO & Google Business Profile management',
      'SEO blog content & service pages',
      'White-hat link building & digital PR',
    ],
    outcomes: [
      { stat: 'Monthly', label: 'ranking & lead reports' },
      { stat: '3–6 mo', label: 'typical time to strong results' },
      { stat: '0', label: 'black-hat shortcuts' },
    ],
    faqs: [
      { q: 'How long does SEO take?', a: 'Most sites see real movement in 3–4 months, and strong results in 6–12 months depending on competition.' },
      { q: 'Do you do local SEO for Google Maps?', a: 'Yes. Google Business Profile optimisation, reviews strategy, local citations and location pages are part of our local SEO plans.' },
      { q: 'Will you guarantee #1 ranking?', a: 'No honest agency can guarantee rankings. We guarantee transparent work, monthly reporting and a clear strategy focused on leads.' },
    ],
  },
  {
    slug: 'website-development',
    name: 'Website Development',
    short: 'Fast, SEO-ready websites designed to turn visitors into leads.',
    metaTitle: 'Website Development Company in Kerala | Your ABH',
    metaDescription:
      'Custom website design and development in Kerala. Fast, mobile-first, SEO-ready business websites, landing pages and e-commerce stores that generate leads.',
    headline: 'Websites built to load fast and sell harder',
    intro:
      'Your website is your best salesperson. We design and build fast, mobile-first websites with clear messaging, strong calls-to-action and SEO built in from day one.',
    icon: 'M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01M8 13l-2 2 2 2M16 13l2 2-2 2M13 12l-2 6',
    deliverables: [
      'Business websites & landing pages',
      'E-commerce stores (Shopify / WooCommerce)',
      'UI/UX design & copywriting',
      'Speed optimisation (90+ PageSpeed)',
      'SEO setup, analytics & tracking',
      'WhatsApp, form & CRM integrations',
    ],
    outcomes: [
      { stat: '90+', label: 'target Google PageSpeed score' },
      { stat: '2–4 wks', label: 'typical launch time' },
      { stat: '100%', label: 'mobile responsive' },
    ],
    faqs: [
      { q: 'How much does a website cost?', a: 'It depends on pages and features. A business website, landing page or online store each has a fixed quote after a short discovery call.' },
      { q: 'Can I update the website myself?', a: 'Yes. We can build on a platform you can edit, and we train you on making simple updates.' },
      { q: 'Do you redesign existing websites?', a: 'Yes. We redesign slow or outdated sites while protecting your existing Google rankings.' },
    ],
  },
  {
    slug: 'google-ads',
    name: 'Google Ads',
    short: 'Search, Performance Max and YouTube ads that bring qualified leads.',
    metaTitle: 'Google Ads Agency in Kerala | PPC Management | Your ABH',
    metaDescription:
      'Google Ads management for Search, Performance Max, Display and YouTube. Lower cost per lead, better conversion tracking and clear ROI reporting.',
    headline: 'Show up the moment customers search for you',
    intro:
      'We build Google Ads campaigns around high-intent keywords, write ads that get clicked and track every call and form. Then we keep tuning bids and budgets so your cost per lead keeps falling.',
    icon: 'M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z',
    deliverables: [
      'Search, Performance Max, Display & YouTube campaigns',
      'Keyword & competitor research',
      'Ad copywriting & extensions',
      'Conversion tracking (calls, forms, WhatsApp)',
      'Landing page recommendations',
      'Weekly optimisation & monthly reports',
    ],
    outcomes: [
      { stat: '100%', label: 'account ownership stays with you' },
      { stat: 'Weekly', label: 'bid & keyword optimisation' },
      { stat: 'Every', label: 'call, form & WhatsApp lead tracked' },
    ],
    faqs: [
      { q: 'What budget do I need for Google Ads?', a: 'Many local businesses start with a modest daily budget. We recommend a starting budget after checking keyword costs in your market.' },
      { q: 'Do you charge a percentage of ad spend?', a: 'We offer flat monthly management fees for most accounts so our incentives match yours.' },
      { q: 'Who owns the ad account?', a: 'You do. We set everything up in your account and you keep full access.' },
    ],
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads',
    short: 'Facebook & Instagram ads that stop the scroll and bring leads.',
    metaTitle: 'Meta Ads Agency | Facebook & Instagram Ads | Your ABH',
    metaDescription:
      'Facebook and Instagram ads management. Lead generation, e-commerce sales and WhatsApp campaigns with creative testing and Pixel/CAPI tracking.',
    headline: 'Facebook & Instagram ads that make the phone ring',
    intro:
      'Scroll-stopping creative, sharp audience targeting and proper tracking. We run Meta campaigns for leads, WhatsApp chats and online sales, and test new creatives every week to keep results fresh.',
    icon: 'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0',
    deliverables: [
      'Lead form, WhatsApp & sales campaigns',
      'Audience research & retargeting',
      'Ad creatives: static, carousel & video',
      'Meta Pixel & Conversions API setup',
      'A/B creative testing every week',
      'Lead quality feedback loop',
    ],
    outcomes: [
      { stat: 'Weekly', label: 'fresh creative tests' },
      { stat: 'Pixel + CAPI', label: 'accurate conversion tracking' },
      { stat: 'WhatsApp', label: 'click-to-chat lead campaigns' },
    ],
    faqs: [
      { q: 'Facebook or Instagram, which is better?', a: 'We usually run both through Meta Ads Manager and let the data decide where the budget works best.' },
      { q: 'Can ads send leads straight to WhatsApp?', a: 'Yes. Click-to-WhatsApp ads are among our best performers for Kerala and GCC businesses.' },
      { q: 'Do you make the ad creatives?', a: 'Yes. Our design and AI video team produces creatives, so you do not need a separate agency.' },
    ],
  },
  {
    slug: 'social-media-management',
    name: 'Social Media Management',
    short: 'Consistent, on-brand content that builds trust and community.',
    metaTitle: 'Social Media Management Agency in Kerala | Your ABH',
    metaDescription:
      'Social media management for Instagram, Facebook, LinkedIn and YouTube. Content calendars, reels, posting, community management and monthly analytics.',
    headline: 'Social media that grows your brand while you run your business',
    intro:
      'We plan, create and post content that fits your brand: reels, carousels and stories. We also reply to comments and DMs and report on what works, so your pages grow steadily.',
    icon: 'M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zM16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4zM17.5 6.5h.01',
    deliverables: [
      'Monthly content calendar',
      'Reels, carousels & story design',
      'Captions & hashtag strategy (English, Malayalam, Arabic)',
      'Scheduling & posting',
      'Community & DM management',
      'Monthly growth report',
    ],
    outcomes: [
      { stat: '12–30', label: 'posts & reels per month' },
      { stat: '3', label: 'languages: English, Malayalam, Arabic' },
      { stat: 'You', label: 'approve every post' },
    ],
    faqs: [
      { q: 'Which platforms do you manage?', a: 'Instagram, Facebook, LinkedIn, YouTube and Google Business Profile.' },
      { q: 'How many posts per month?', a: 'Plans typically range from 12 to 30 posts per month including reels, depending on your goals.' },
      { q: 'Do I approve content before posting?', a: 'Always. You receive the calendar in advance and approve everything before it goes live.' },
    ],
  },
  {
    slug: 'ai-video-creation',
    name: 'AI Video Creation',
    short: 'Ad videos, reels and explainers produced fast with AI.',
    metaTitle: 'AI Video Creation Agency | AI Ads & Reels | Your ABH',
    metaDescription:
      'AI video production for ads, reels, product videos and explainers. AI avatars, voiceovers in multiple languages and fast turnaround at a fraction of studio cost.',
    headline: 'Studio-quality video ads in days, not weeks',
    intro:
      'We combine AI video tools with real marketing know-how to produce ad videos, reels, product demos and avatar presenters. Voiceovers are available in English, Malayalam, Hindi and Arabic.',
    icon: 'M23 7l-7 5 7 5V7zM14 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z',
    deliverables: [
      'AI ad videos & UGC-style reels',
      'AI avatar spokesperson videos',
      'Product & service explainers',
      'Multi-language AI voiceovers',
      'Subtitles & platform-ready formats',
      'Script writing with proven hooks',
    ],
    outcomes: [
      { stat: 'Fraction', label: 'of traditional shoot cost' },
      { stat: '48 hrs', label: 'typical turnaround' },
      { stat: '4+', label: 'languages' },
    ],
    faqs: [
      { q: 'Will AI videos look fake?', a: 'We use the latest tools plus human editing, scripting and brand styling so videos look polished and on-brand.' },
      { q: 'Can you use my product photos or footage?', a: 'Yes. We can mix your real footage with AI-generated scenes, motion graphics and voiceovers.' },
      { q: 'Who owns the videos?', a: 'You do. All final videos are yours to use on any platform.' },
    ],
  },
  {
    slug: 'poster-creation',
    name: 'Poster Creation',
    short: 'Eye-catching posters and creatives for social, ads and print.',
    metaTitle: 'Poster Design & Social Media Creatives | Your ABH',
    metaDescription:
      'Professional poster design for social media, ads, festivals, offers and print. Fast turnaround, on-brand creatives for Kerala, India and GCC businesses.',
    headline: 'Posters that get noticed and get results',
    intro:
      'Offer posters, festival greetings, product launches, ad creatives and print flyers. Our designers make creatives that look premium and clearly tell people what to do next.',
    icon: 'M4 4h16v16H4zM4 15l4-4 5 5M14 14l2-2 4 4M15 8h.01',
    deliverables: [
      'Social media posts & story designs',
      'Ad creatives in all sizes',
      'Festival & occasion posters (Onam, Eid, Diwali, Christmas…)',
      'Offer & product launch posters',
      'Print flyers, brochures & banners',
      'Brand kit & templates',
    ],
    outcomes: [
      { stat: '24 hrs', label: 'standard turnaround' },
      { stat: 'All', label: 'platform sizes included' },
      { stat: '4', label: 'languages: EN, ML, HI, AR' },
    ],
    faqs: [
      { q: 'Can I order posters without a monthly plan?', a: 'Yes. We offer poster packs as well as monthly design retainers.' },
      { q: 'Do you design in Malayalam and Arabic?', a: 'Yes. We design in English, Malayalam, Hindi and Arabic.' },
      { q: 'How many revisions do I get?', a: 'Each design includes revisions until you are happy, within the agreed brief.' },
    ],
  },
  {
    slug: 'automation',
    name: 'Automation',
    short: 'WhatsApp, CRM and lead-follow-up automations that save hours.',
    metaTitle: 'Marketing Automation & WhatsApp Automation | Your ABH',
    metaDescription:
      'Marketing and business automation: WhatsApp chatbots, CRM workflows, lead follow-ups, email sequences and AI agents that save time and close more deals.',
    headline: 'Never miss a lead again',
    intro:
      'Every lead gets an instant reply, goes into your CRM and gets followed up on time, automatically. We build WhatsApp chatbots, email sequences and AI workflows that free up your team.',
    icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    deliverables: [
      'WhatsApp Business API & chatbots',
      'CRM setup & lead pipelines',
      'Instant lead alerts & auto-replies',
      'Email & SMS follow-up sequences',
      'AI agents for FAQs and booking',
      'Zapier / Make / n8n workflows',
    ],
    outcomes: [
      { stat: '< 1 min', label: 'lead response time' },
      { stat: '24/7', label: 'automated follow-ups' },
      { stat: '0', label: 'leads lost to slow replies' },
    ],
    faqs: [
      { q: 'What tools do you work with?', a: 'WhatsApp Business API, Zoho, HubSpot, Google Sheets, Make, Zapier, n8n and most tools that have an API.' },
      { q: 'Do I need technical knowledge?', a: 'No. We build, test and hand over simple dashboards your team can use.' },
      { q: 'Can automation connect to my ads?', a: 'Yes. Leads from Google and Meta ads can flow straight into WhatsApp, your CRM and your sales team in seconds.' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
