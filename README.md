# Your ABH Website

Astro + Tailwind static site. Fast, SEO-ready, deploys free on Vercel.

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to /dist
```

## Where to edit things
| What | File |
|---|---|
| Phone, email, WhatsApp, address, analytics IDs, form key | `src/config/site.ts` |
| Domain | `src/config/site.ts` **and** `astro.config.mjs` **and** `public/robots.txt` |
| Services (text, FAQs, deliverables) | `src/data/services.ts` |
| Location pages (Kochi, Dubai, …) | `src/data/locations.ts` |
| Case studies / portfolio | `src/pages/work.astro` (`projects` list) |
| Blog posts | add a `.md` file in `src/pages/blog/` (copy an existing one) |
| Colours & fonts | `src/styles/global.css` (`@theme`) |

## Leads
- Without a form key, form submissions open WhatsApp with the lead details pre-filled.
- To also get leads by email, create a free key at https://web3forms.com, then paste it into `web3formsKey` in `src/config/site.ts`.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. In Vercel, choose **Add New → Project**, import the repo, and keep the defaults (Astro is auto-detected).
3. Add your domain in **Project → Settings → Domains**.
4. Submit `https://yourdomain.com/sitemap-index.xml` in Google Search Console.
