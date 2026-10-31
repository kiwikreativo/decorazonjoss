// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const SITE_URL = process.env.SITE_URL;

// https://astro.build/config
export default defineConfig({
  ...(SITE_URL ? { site: SITE_URL } : {}),
  integrations: [react(), ...(SITE_URL ? [sitemap()] : [])],
  server: {
    host: true,
    allowedHosts: [
      'daron-argenteous-warmly.ngrok-free.dev',
      'rotten-rules-work.loca.lt'
    ]
  }
});
