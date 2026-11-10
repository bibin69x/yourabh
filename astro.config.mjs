import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Change this to your real domain once you buy it.
export default defineConfig({
  site: 'https://yourabh.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you') })],
  vite: { plugins: [tailwindcss()] },
});
