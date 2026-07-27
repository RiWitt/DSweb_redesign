import { routes, type Lang, type PageKey } from '../i18n/ui';

/** Base path without a trailing slash, e.g. `/DSweb_redesign` (or `''` at root). */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/**
 * Build a site-absolute URL, honouring the configured `base`.
 * `url('en/about.html')` -> `/DSweb_redesign/en/about.html`
 */
export function url(path: string): string {
  return `${BASE}/${path.replace(/^\/+/, '')}`;
}

/** Site-absolute URL for a page in a given language. */
export function pageUrl(lang: Lang, page: PageKey): string {
  return url(routes[lang][page]);
}

/**
 * Link to a homepage anchor. When already on the homepage we emit a bare
 * fragment so the browser scrolls instead of navigating.
 */
export function homeAnchor(lang: Lang, currentPage: PageKey, hash: string): string {
  return currentPage === 'home' ? `#${hash}` : `${pageUrl(lang, 'home')}#${hash}`;
}

/** URL of an asset in `public/`. */
export function asset(path: string): string {
  return url(path);
}
