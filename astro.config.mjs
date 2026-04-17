// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  server: {
    host: true, // Allow external connections
    // Optionally add this too:
    allowedHosts: ['daron-argenteous-warmly.ngrok-free.dev']
  }
});