// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * The site is published to GitHub Pages from the `RiWitt/DSweb_redesign` repo,
 * so it is served under the `/DSweb_redesign` sub-path.
 *
 * If you later point a custom domain (e.g. alcasyds.eu) at the Pages site,
 * set `base: '/'` and change `site` to the domain — nothing else needs to move,
 * because every internal link goes through `src/lib/links.ts`.
 */
export default defineConfig({
  site: 'https://riwitt.github.io',
  base: '/DSweb_redesign',

  // 'preserve' mirrors the source tree exactly: `o-nas.astro` -> `/o-nas.html`
  // and `en/index.astro` -> `/en/index.html`. ('file' would have collapsed the
  // latter to `/en.html` and broken the existing English URLs.)
  build: { format: 'preserve' },

  integrations: [sitemap()],

  // Fonts are downloaded at build time and served from our own origin.
  // Previously these came from fonts.googleapis.com via a render-blocking
  // stylesheet, which also sent every visitor's IP to Google.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Bebas Neue',
      cssVariable: '--font-display',
      weights: [400],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Impact', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-body',
      weights: [400, 500, 600],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500, 600],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
