import type { Lang } from '../i18n/ui';

export interface Feature {
  title: string;
  desc: string;
  /** Anchor on the MOMIS page, when the feature links there. */
  hash?: string;
}

export interface HomeContent {
  title: string;
  description: string;

  heroEyebrow: string;
  heroHeading: string;
  heroHeadingSub: string;
  heroLead: string;
  heroCtaPrimary: string;
  heroCtaGhost: string;
  heroImageAlt: string;

  clientsLabel: string;
  clientsDesc: string;

  pisNum: string;
  pisHeading: string;
  pisDesc: string;
  pisFeatures: Feature[];
  pisMore: string;
  pisPhoto1Alt: string;
  pisPhoto2Alt: string;

  infraNum: string;
  infraHeading: string;
  infraDesc: string;
  xmcLabel: string;
  xmcDesc: string;
  xmcFeatures: Feature[];
  lanLabel: string;
  lanDesc: string;
  lanDiagramAlt: string;

  cyberNum: string;
  cyberHeading: string;
  cyberDesc: string;
  cyberFeatures: Feature[];
  cyberDiagramAlt: string;

  certNum: string;
  certHeading: string;
  certDesc: string;
  certIsoDesc: string;

  partnersNum: string;
  partnersHeading: string;
  partnersDesc: string;
}

export const home: Record<Lang, HomeContent> = {
  sk: {
    title: 'ALCASYS DS — Komunikačné systémy a informačné riešenia pre dopravu a priemysel',
    description:
      'Technológie a know-how, na ktorých stoja informačné systémy pre cestujúcich, kritická komunikačná infraštruktúra a kybernetická bezpečnosť sietí.',

    heroEyebrow: 'Komunikačné a informačné systémy',
    heroHeading: 'Komunikačné systémy',
    heroHeadingSub: 'a informačné riešenia pre dopravu a priemysel',
    heroLead:
      'Technológie a know-how, na ktorých stoja informačné systémy pre cestujúcich, kritická komunikačná infraštruktúra a kybernetická bezpečnosť sietí.',
    heroCtaPrimary: 'Dohodnime si termín',
    heroCtaGhost: 'Prezrieť riešenia',
    heroImageAlt: 'Vlak ZSSK Stadler KISS',

    clientsLabel: 'Dôverujú nám',
    clientsDesc:
      'Dôverujú nám firmy z oblasti dopravy, energetiky a priemyslu. Snažíme sa pracovať tak, aby náš vzťah so zákazníkom bol vždy dlhodobý a staval na vzájomnej dôvere.',

    pisNum: 'Pasažieri',
    pisHeading: 'Informačné systémy pre cestujúcich (PIS)',
    pisDesc:
      'WiFi, kamerové systémy, počítanie cestujúcich, informačné displeje a ucelený informačný systém — jedna platforma od nástupu až po cieľ cesty.',
    pisFeatures: [
      { hash: 'wifi', title: 'WiFi pre cestujúcich', desc: 'Pripojenie počas celej jazdy, bez výpadkov medzi stanicami.' },
      { hash: 'displeje', title: 'LED tabule a LCD monitory', desc: 'Trasa vlaku, výluky, prestupné stanice a informačné spoty.' },
      { hash: 'pocitanie', title: 'Počítanie cestujúcich', desc: 'Presné dáta o obsadenosti pre plánovanie kapacít.' },
      { hash: 'kamery', title: 'Kamerový systém', desc: 'Vyššia bezpečnosť vďaka inteligentnému prepínaniu kamerových pohľadov pre rušňovodiča.' },
      { hash: 'komunikacia', title: 'Hlasová komunikácia', desc: 'Prepojenie vlakového personálu a informovanie cestujúcich.' },
      { hash: 'hmi', title: 'Pracovisko rušňovodiča', desc: 'Jednotný prístup ku všetkým prvkom PIS a jeho diagnostike.' },
    ],
    pisMore: 'Viac o systéme MOMIS',
    pisPhoto1Alt: 'Vlak ZSSK vybavený informačným systémom v krajine',
    pisPhoto2Alt: 'Ovládanie vlaku rušňovodičom',

    infraNum: 'Kritická infraštruktúra',
    infraHeading: 'Siete, ktoré nesmú vypadnúť',
    infraDesc:
      'Budujeme a prevádzkujeme sieťovú infraštruktúru, na ktorej stojí riadenie dopravy aj bežná prevádzka firmy — od transportných sietí pre dispečing až po podnikové siete LAN a WAN.',
    xmcLabel: 'Transportná sieť · Hitachi Energy',
    xmcDesc:
      'Sme autorizovaný partner spoločnosti Hitachi Energy a už takmer desať rokov dodávame riešenia transportnej siete pre riadenie prevádzky. Platforma XMC prepája dispečerské pracoviská, staničné zariadenia a systémy zabezpečovacej techniky do jednej odolnej siete, ktorá spĺňa prísne požiadavky na dostupnosť a bezpečnosť aj v náročných prevádzkových podmienkach.',
    xmcFeatures: [
      { title: 'Flexibilná koexistencia', desc: 'Natívna podpora MPLS aj legacy protokolov v jednom zariadení.' },
      { title: 'Vysoká dostupnosť', desc: 'Rovnaká škálovateľnosť v TDM aj v MPLS-TP/IP sieťach.' },
      { title: 'Robustná prevádzka', desc: 'Nízka spotreba energie, zariadenia v priemyselnom prevedení.' },
    ],
    lanLabel: 'Podnikové siete · LAN a WAN',
    lanDesc:
      'Popri transportnej sieti budujeme aj podnikové komunikačné siete LAN a WAN — od štruktúrovanej kabeláže cez prepínanú a bezdrôtovú infraštruktúru až po prepojenie viacerých pobočiek do jednej spravovanej siete. Staviame na osvedčených technológiách od Cisco, Alcatel-Lucent a Extreme Networks, s dôrazom na odolnosť, škálovateľnosť a jednoduchú správu.',
    lanDiagramAlt: 'Schéma prepojenia LAN a WAN sietí s pobočkami',

    cyberNum: 'Kybernetická bezpečnosť',
    cyberHeading: 'Bezpečné siete od základu',
    cyberDesc:
      'Viac ako 10 rokov sme certifikovaným Advanced partnerom spoločnosti Fortinet so špecializáciou Secure Networking LAN.',
    cyberFeatures: [
      { title: 'Advanced partner Fortinet', desc: 'Certifikácia potvrdená viac ako 10-ročnou praxou v nasadzovaní riešení.' },
      { title: 'Secure Networking LAN', desc: 'Špecializácia na zabezpečenie prístupových a lokálnych sietí.' },
      { title: 'Segmentácia siete', desc: 'Oddelenie prevádzkových a bezpečnostných zón v sieťovej infraštruktúre.' },
    ],
    cyberDiagramAlt:
      'Prehľad oblastí sieťovej bezpečnosti — NAC, VPN, firewally, LAN Edge, 5G brány, IPS, antivírus a sandboxing',

    certNum: 'Certifikácie',
    certHeading: 'Riešenia spĺňajúce prísne normy',
    certDesc: 'Všetky dodávané zariadenia sú v súlade s požiadavkami platných železničných noriem.',
    certIsoDesc:
      'ALCASYS DS je certifikovaná spoločnosť podľa noriem ISO 9001, ISO 14001, ISO 27001 a ISO 45001.',

    partnersNum: 'Partneri',
    partnersHeading: 'Bez partnerov by to nešlo',
    partnersDesc:
      'Technologických partnerov si starostlivo vyberáme a budujeme s nimi dlhodobé vzťahy.',
  },

  en: {
    title:
      'ALCASYS DS — Communication Systems and Information Solutions for Public Transport and Industry',
    description:
      'The technology and know-how on which our passenger information systems, critical communication infrastructure, and network cybersecurity are built.',

    heroEyebrow: 'Communication and Information Systems',
    heroHeading: 'Communication Systems',
    heroHeadingSub: 'and information solutions for public transport and industry',
    heroLead:
      'The technology and know-how on which our passenger information systems, critical communication infrastructure, and network cybersecurity are built.',
    heroCtaPrimary: "Let's talk",
    heroCtaGhost: 'View solutions',
    heroImageAlt: 'ZSSK Stadler KISS train',

    clientsLabel: 'Trusted by',
    clientsDesc:
      'We are trusted by companies from transport, energy, and industry. We aim to work in a way that builds a long-term relationship with our customers, based on mutual trust.',

    pisNum: 'Passengers',
    pisHeading: 'Passenger Information Systems (PIS)',
    pisDesc:
      'WiFi, camera systems, passenger counting, information displays, and an integrated information system — one platform from boarding all the way to the end of the journey.',
    pisFeatures: [
      { hash: 'wifi', title: 'WiFi for passengers', desc: 'Connectivity throughout the journey, with no drop-outs between stations.' },
      { hash: 'displeje', title: 'LED boards and LCD monitors', desc: 'Train route, service disruptions, transfer stations, and informational content.' },
      { hash: 'pocitanie', title: 'Passenger counting', desc: 'Precise occupancy data for capacity planning.' },
      { hash: 'kamery', title: 'Camera system', desc: 'Improved safety, with intelligent camera view switching for the driver.' },
      { hash: 'komunikacia', title: 'Voice communication', desc: 'Connecting train staff and keeping passengers informed.' },
      { hash: 'hmi', title: "Driver's cab", desc: 'Unified access to all PIS components and their diagnostics.' },
    ],
    pisMore: 'More about the MOMIS system',
    pisPhoto1Alt: 'ZSSK train equipped with an information system, in the countryside',
    pisPhoto2Alt: 'Driver operating the train',

    infraNum: 'Critical Infrastructure',
    infraHeading: 'Networks that cannot go down',
    infraDesc:
      'We build and operate the network infrastructure behind both traffic control and everyday business operations — from transport networks for dispatching to enterprise LAN and WAN networks.',
    xmcLabel: 'Transport Network · Hitachi Energy',
    xmcDesc:
      'We are an authorized partner of Hitachi Energy, and for nearly ten years we have been delivering transport network solutions for operational control. The XMC platform connects dispatch workstations, station equipment, and signaling systems into a single resilient network that meets strict availability and security requirements, even under demanding operating conditions.',
    xmcFeatures: [
      { title: 'Flexible coexistence', desc: 'Native support for both MPLS and legacy protocols in a single device.' },
      { title: 'High availability', desc: 'The same scalability across both TDM and MPLS-TP/IP networks.' },
      { title: 'Robust operation', desc: 'Low power consumption, industrial-grade equipment.' },
    ],
    lanLabel: 'Enterprise Networks · LAN and WAN',
    lanDesc:
      'Alongside the transport network, we also build enterprise LAN and WAN communication networks — from structured cabling, through switched and wireless infrastructure, to connecting multiple branch sites into a single managed network. We build on proven technologies from Cisco, Alcatel-Lucent, and Extreme Networks, with an emphasis on resilience, scalability, and ease of management.',
    lanDiagramAlt: 'Diagram of LAN and WAN network connectivity with branch sites',

    cyberNum: 'Cybersecurity',
    cyberHeading: 'Secure networks from the ground up',
    cyberDesc:
      'For more than 10 years we have been a certified Fortinet Advanced Partner specializing in Secure Networking LAN.',
    cyberFeatures: [
      { title: 'Fortinet Advanced Partner', desc: 'A certification backed by more than 10 years of deployment experience.' },
      { title: 'Secure Networking LAN', desc: 'Specializing in securing access and local area networks.' },
      { title: 'Network segmentation', desc: 'Separating operational and security zones within the network infrastructure.' },
    ],
    cyberDiagramAlt:
      'Overview of network security areas — NAC, VPN, firewalls, LAN Edge, 5G gateways, IPS, antivirus, and sandboxing',

    certNum: 'Certifications',
    certHeading: 'Solutions that meet strict standards',
    certDesc: 'All supplied equipment complies with applicable railway standards.',
    certIsoDesc: 'ALCASYS DS is certified to ISO 9001, ISO 14001, ISO 27001, and ISO 45001.',

    partnersNum: 'Partners',
    partnersHeading: "We couldn't do it without our partners",
    partnersDesc:
      'We choose our technology partners carefully and build long-term relationships with them.',
  },
};
