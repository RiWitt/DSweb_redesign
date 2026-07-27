# ALCASYS DS — website

Static marketing site built with [Astro](https://astro.build), deployed to GitHub Pages.
The build outputs plain HTML/CSS — the only JavaScript on the page is ~600 bytes for the
mobile menu.

## Commands

| Command         | Does                                              |
| --------------- | ------------------------------------------------- |
| `npm install`   | Install dependencies                              |
| `npm run dev`   | Dev server with hot reload at `localhost:4321`    |
| `npm run build` | Build the static site into `dist/`                |
| `npm run preview` | Serve the built `dist/` locally                 |
| `npm run check` | Type-check all `.astro` and `.ts` files           |

## Where things live

```
src/
├── content/          ← ALL page copy, Slovak and English side by side
│   ├── home.ts
│   └── pages.ts      (about + MOMIS)
├── i18n/ui.ts        ← shared chrome strings (nav, footer, CTA) + route table
├── templates/        ← one template per page, renders both languages
├── components/       ← Header, Footer, Ticker, FinalCta, Breadcrumb, Img…
├── layouts/Base.astro← <head>, fonts, SEO tags, page shell
├── styles/global.css ← the single stylesheet for the whole site
├── assets/images/    ← photos & logos (optimised at build time)
└── pages/            ← 5-line files that map a URL to a template + language
```

### Editing copy

All visible text lives in `src/content/` and `src/i18n/ui.ts`, with the Slovak and English
versions next to each other. Change a sentence in one place and it updates everywhere it
appears. If you add a field, TypeScript will tell you which language is missing it — this
is what stops the two languages drifting apart.

### Adding a page

1. Add the route to `routes` in `src/i18n/ui.ts` for **both** languages.
2. Add a template in `src/templates/`.
3. Add the two entry points in `src/pages/` and `src/pages/en/`.

Never hard-code an internal link. Use the helpers in `src/lib/links.ts`
(`pageUrl`, `homeAnchor`, `asset`) so links keep working if the base path changes.

### Images

Drop image files into `src/assets/images/` and reference them by filename:

```astro
<Img src="hero-train.jpg" alt="…" widths={[640, 1280]} sizes="100vw" />
```

They are converted to WebP and resized at build time; the originals are never shipped.
SVGs and GIFs go in `public/images/` instead (nothing for the optimiser to do) and are
referenced with `asset('images/name.svg')`.

### Fonts

Bebas Neue, IBM Plex Sans and JetBrains Mono are downloaded at build time and served from
our own domain — no runtime request to Google, which is also better under GDPR. They are
configured in `astro.config.mjs` and exposed to CSS as `--font-display`, `--font-body` and
`--font-mono`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages. Enable it once under
**Settings → Pages → Source → GitHub Actions**.

### Moving to a custom domain

The site currently lives at `https://riwitt.github.io/DSweb_redesign`. To serve it from
e.g. `alcasyds.eu`, edit `astro.config.mjs`:

```js
site: 'https://alcasyds.eu',
base: '/',
```

then add a `public/CNAME` file containing `alcasyds.eu` and point the DNS at GitHub Pages.
Because every link goes through `src/lib/links.ts`, nothing else needs to change.

## URLs

The page URLs are unchanged from the previous hand-written site, so existing links and
search rankings are preserved:

| URL                  | Language |
| -------------------- | -------- |
| `/index.html`        | Slovak   |
| `/o-nas.html`        | Slovak   |
| `/pis-momis.html`    | Slovak   |
| `/en/index.html`     | English  |
| `/en/about.html`     | English  |
| `/en/pis-momis.html` | English  |

This is why `astro.config.mjs` sets `build.format: 'preserve'` — don't change it without
adding redirects.
