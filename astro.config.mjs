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
    // Display: Archivo, set in sentence case. Replaced Bebas Neue, whose
    // all-caps condensed treatment was the trait shared with the reference
    // site that scored worst in review; both best-scoring references use
    // sentence-case, non-condensed display type.
    {
      provider: fontProviders.google(),
      name: 'Archivo',
      cssVariable: '--font-display',
      weights: [600, 700],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-body',
      weights: [400, 500, 600, 700],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    // Monospace is now used for exactly one thing: the company registry block
    // (IČO / DIČ / IBAN), where fixed-width digits actually aid reading.
    // It replaced JetBrains Mono, which previously set every button, label and
    // nav item — mono UI chrome is the strongest "generated template" tell,
    // and IBM Plex Mono at least belongs to the same superfamily as the body.
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      weights: [400],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
