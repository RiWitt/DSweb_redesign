/**
 * Shared chrome strings and route table for both languages.
 *
 * Previously every string below existed twice — once in the Slovak page and
 * once in its English twin — with no link between them. Adding a nav item or
 * changing the phone number meant editing six files.
 */

export const languages = ['sk', 'en'] as const;
export type Lang = (typeof languages)[number];

/** The three logical pages of the site. */
export type PageKey = 'home' | 'about' | 'pis';

/**
 * Output paths per language. These deliberately match the old hand-written
 * file names so every existing URL keeps working.
 */
export const routes: Record<Lang, Record<PageKey, string>> = {
  sk: {
    home: 'index.html',
    about: 'o-nas.html',
    pis: 'pis-momis.html',
  },
  en: {
    home: 'en/index.html',
    about: 'en/about.html',
    pis: 'en/pis-momis.html',
  },
};

/** Contact details are language-independent. */
export const contact = {
  email: 'info@alcasyds.eu',
  phone: '+421 232 327 711',
  phoneHref: '+421232327711',
  street: 'Staré Grunty 36',
  city: '841 04 Bratislava',
  cityShort: 'Staré Grunty 36, Bratislava',
  company: 'Alcasys DS, s.r.o.',
  ico: '56875045',
  dic: '2122484056',
  icDph: 'SK2122484056',
  iban: 'SK29090000000005234020541',
  swift: 'GIBASKBX',
};

export const ui = {
  sk: {
    htmlLang: 'sk',
    langName: 'Slovenčina',
    tickerStatus: 'Sme tu pre vás',
    skipToContent: 'Preskočiť na obsah',
    menuLabel: 'Menu',

    navPis: 'Informačné systémy PIS',
    navInfra: 'Infraštruktúra',
    navCyber: 'Kyberbezpečnosť',
    navCta: 'Dohodnime si termín',

    ctaEyebrow: 'Sme tu pre vás',
    ctaHeading: 'Pohovorme si o vašom projekte.',
    ctaBodyHome: 'Radi si vypočujeme, čo riešite, a spoločne nájdeme najlepší spôsob, ako vám pomôcť.',
    ctaBodyAbout: 'Radi si vypočujeme, na čom pracujete, a nájdeme najlepší spôsob, ako pomôcť.',
    ctaButton: 'Kontaktujte nás',
    ctaPersonAlt: 'Kolegyňa z tímu ALCASYS DS',

    contactTitle: 'Kontakt',
    billingTitle: 'Fakturačné údaje',

    footTagline: 'Komunikačné a informačné riešenia na mieru pre váš business.',
    footSolutions: 'Riešenia',
    footPis: 'Informačné systémy PIS',
    footInfra: 'Kritická infraštruktúra',
    footCyber: 'Kybernetická bezpečnosť',
    footCert: 'Certifikácie',
    footAbout: 'O nás',
    footReferences: 'Referencie',
    footCompany: 'O spoločnosti',
    footContact: 'Kontakt',
    footCopyright: '© 2026 Alcasys DS, s. r. o.',

    breadcrumbHome: 'Domov',
  },

  en: {
    htmlLang: 'en',
    langName: 'English',
    tickerStatus: "We're here for you",
    skipToContent: 'Skip to content',
    menuLabel: 'Menu',

    navPis: 'Information Systems PIS',
    navInfra: 'Infrastructure',
    navCyber: 'Cybersecurity',
    navCta: "Let's talk",

    ctaEyebrow: "We're here for you",
    ctaHeading: "Let's talk about your project.",
    ctaBodyHome: "We'd love to hear what you're working on, and find the best way we can help.",
    ctaBodyAbout: "We'd love to hear what you're working on, and find the best way we can help.",
    ctaButton: 'Contact us',
    ctaPersonAlt: 'A colleague from the ALCASYS DS team',

    contactTitle: 'Contact',
    billingTitle: 'Billing details',

    footTagline: 'Tailored communication and information solutions for your business.',
    footSolutions: 'Solutions',
    footPis: 'Passenger Information Systems',
    footInfra: 'Critical Infrastructure',
    footCyber: 'Cybersecurity',
    footCert: 'Certifications',
    footAbout: 'About Us',
    footReferences: 'References',
    footCompany: 'About the company',
    footContact: 'Contact',
    footCopyright: '© 2026 Alcasys DS, s. r. o.',

    breadcrumbHome: 'Home',
  },
} as const;

export type UiStrings = (typeof ui)[Lang];
