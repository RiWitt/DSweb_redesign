import type { Lang } from '../i18n/ui';

/* ---------------------------------------------------------------- About --- */

export interface ValueItem {
  /** Which inline icon to render; see `src/components/ValueIcon.astro`. */
  icon: 'display' | 'network' | 'shield';
  /** Where the card links to. */
  target: 'pis' | 'infra' | 'cyber';
  title: string;
  desc: string;
}

export interface AboutContent {
  title: string;
  description: string;
  breadcrumb: string;
  eyebrow: string;
  heading: string;
  lead: string;
  sectionLabel: string;
  sectionHeading: string;
  sectionDesc: string;
  values: ValueItem[];
  backLink: string;
}

export const about: Record<Lang, AboutContent> = {
  sk: {
    title: 'O nás — ALCASYS DS',
    description:
      'Alcasys DS nadväzuje na tím a know-how, ktoré viac než desať rokov budovali komunikačné a informačné riešenia pre priemysel a dopravu.',
    breadcrumb: 'O nás',
    eyebrow: 'O spoločnosti',
    heading: 'Skúsenosti, ktoré siahajú viac než desaťročie dozadu.',
    lead: 'Alcasys DS nadväzuje na tím a know-how, ktoré viac než desať rokov budovali komunikačné a informačné riešenia pre priemysel a dopravu ako súčasť spoločnosti ALCASYS. Od roku 2025 pôsobíme ako samostatná spoločnosť — Alcasys DS, s. r. o. — s vlastnou identitou, no s rovnakými ľuďmi, skúsenosťami a partnerstvami, na ktoré sa naši zákazníci spoliehali doteraz.',
    sectionLabel: 'Čím sa zaoberáme',
    sectionHeading: 'Zameranie, na ktorom stojí naša práca',
    sectionDesc:
      'Za skúsenosťami, ktoré dnes ponúkame, stojí dlhoročná práca na projektoch pre dopravcov a prevádzkovateľov kritickej infraštruktúry. Osamostatnenie nám umožňuje sústrediť sa výhradne na toto zameranie — bez kompromisov a s plnou zodpovednosťou za každé riešenie, ktoré dodávame. Nižšie nájdete prehľad troch oblastí, v ktorých toto zameranie premietame do konkrétnych riešení.',
    values: [
      {
        icon: 'display',
        target: 'pis',
        title: 'Informačné systémy PIS',
        desc: 'WiFi, kamerový systém, počítanie cestujúcich a informačné displeje — jedna platforma od nástupu až po cieľ cesty.',
      },
      {
        icon: 'network',
        target: 'infra',
        title: 'Kritická infraštruktúra',
        desc: 'Transportné siete pre riadenie prevádzky aj podnikové siete LAN a WAN, ktoré nesmú vypadnúť.',
      },
      {
        icon: 'shield',
        target: 'cyber',
        title: 'Kybernetická bezpečnosť',
        desc: 'Viac ako 10 rokov skúseností ako certifikovaný Fortinet Advanced partner so zameraním na Secure Networking LAN.',
      },
    ],
    backLink: '← Späť na hlavnú stránku',
  },

  en: {
    title: 'About Us — ALCASYS DS',
    description:
      'Alcasys DS builds on the team and know-how that spent more than ten years developing communication and information solutions for industry and transport.',
    breadcrumb: 'About Us',
    eyebrow: 'About the company',
    heading: 'Experience that goes back more than a decade.',
    lead: 'Alcasys DS builds on the team and know-how that spent more than ten years developing communication and information solutions for industry and transport as part of ALCASYS. Since 2025 we have operated as an independent company — Alcasys DS, s. r. o. — with our own identity, but with the same people, experience, and partnerships our customers have relied on all along.',
    sectionLabel: 'What we do',
    sectionHeading: 'The focus behind our work',
    sectionDesc:
      'Behind the experience we offer today is years of work on projects for carriers and operators of critical infrastructure. Becoming independent lets us focus exclusively on this specialization — without compromise, and with full accountability for every solution we deliver. Below is an overview of the three areas where we put this focus into practice.',
    values: [
      {
        icon: 'display',
        target: 'pis',
        title: 'Passenger Information Systems PIS',
        desc: 'WiFi, camera systems, passenger counting, and information displays — one platform from boarding to the end of the journey.',
      },
      {
        icon: 'network',
        target: 'infra',
        title: 'Critical Infrastructure',
        desc: 'Transport networks for operational control, plus enterprise LAN and WAN networks that cannot go down.',
      },
      {
        icon: 'shield',
        target: 'cyber',
        title: 'Cybersecurity',
        desc: 'More than 10 years of experience as a certified Fortinet Advanced Partner specializing in Secure Networking LAN.',
      },
    ],
    backLink: '← Back to homepage',
  },
};

/* ---------------------------------------------------------------- MOMIS --- */

export interface MomisContent {
  title: string;
  description: string;
  breadcrumbSection: string;
  eyebrow: string;
  heading: string;
  lead: string;
  sectionLabel: string;
  sectionHeading: string;
  sectionDesc: string;

  /** The six subsystems are grouped under these three headings. */
  groupPassenger: string;
  groupSafety: string;
  groupControl: string;

  wifiNum: string;
  wifiHeading: string;
  wifiDesc: string;
  wifiAlts: [string, string, string, string];

  displayNum: string;
  displayHeading: string;
  displayDesc: string;
  displayAlts: [string, string];
  onlineHeading: string;
  onlineDesc: string;
  onlineAlts: [string, string];

  countNum: string;
  countHeading: string;
  countDesc: string;

  cameraNum: string;
  cameraHeading: string;
  cameraDesc: string;
  cameraAlts: [string, string, string];

  voiceNum: string;
  voiceHeading: string;
  voiceDesc: string;

  hmiNum: string;
  hmiHeading: string;
  hmiDesc: string;
  hmiAlt: string;

  backLink: string;
}

export const momis: Record<Lang, MomisContent> = {
  sk: {
    title: 'Informačný systém MOMIS pre cestujúcich — ALCASYS DS',
    description:
      'MOMIS je multifunkčný onboardový informačný systém pre osobnú vlakovú dopravu — displeje, audio, kamery, počítanie cestujúcich a WiFi na jednej platforme.',
    breadcrumbSection: 'Informačné systémy',
    eyebrow: 'Pasažieri — informačný systém MOMIS',
    heading: 'Jeden systém, ktorý sprevádza cestujúceho od nástupu až po cieľ jeho cesty.',
    lead: 'MOMIS je náš multifunkčný onboardový informačný systém pre osobnú vlakovú dopravu. Poskytuje vizuálne a hlasové informácie pre informačné displeje, audio, núdzovú komunikáciu, kamerový systém, počítanie cestujúcich a predaj cestovných lístkov. Všetky tieto informácie v rámci systému prepája s pracoviskom rušňovodiča a obslužnými systémami prepravcu pomocou jednej spoločne riadenej platformy.',
    sectionLabel: 'Ako systém funguje',
    sectionHeading: 'Mnoho oblastí, jedna platforma',
    sectionDesc:
      'Každá funkčná oblasť MOMIS beží na spoločnej platforme a zdieľa dáta naprieč vozidlom — cez pracovisko rušňovodiča k cestujúcim.',

    groupPassenger: 'Informácie pre cestujúcich',
    groupSafety: 'Bezpečnosť a prevádzka',
    groupControl: 'Riadenie a diagnostika',

    wifiNum: 'Pripojenie',
    wifiHeading: 'WiFi pre cestujúcich',
    wifiDesc:
      'Bezplatné pripojenie k internetu dostupné počas celej jazdy, s plynulým prepínaním medzi viacerými mobilnými operátormi bez výpadkov pri prejazde medzi stanicami.',
    wifiAlts: [
      'Ilustrácia WiFi pripojenia vo vlaku',
      'Aplikácia WiFi pripojenia vo vlaku — informácie o jazde',
      'Aplikácia WiFi pripojenia vo vlaku — poloha vlaku na mape',
      'Aplikácia WiFi pripojenia vo vlaku — uvítacia obrazovka portálu',
    ],

    displayNum: 'Vizuálne informácie',
    displayHeading: 'LED tabule a LCD monitory',
    displayDesc:
      'Externé LED tabule zobrazujú smerovanie vlaku, interné LCD monitory informujú o aktuálnej trase, nasledujúcej zastávke, prestupných spojoch, výlukách a doplnkovom informačnom obsahu.',
    displayAlts: [
      'LCD monitor s video obsahom pre cestujúcich',
      'LCD informačný monitor pre cestujúcich',
    ],
    onlineHeading: 'Online informácie',
    onlineDesc:
      'Informácie pre cestujúcich vo vozidlách sa pravidelne aktualizujú prostredníctvom prepojenia na informačný systém prepravcu, vďaka čomu sú cestujúci priebežne informovaní napríklad o výlukách na trati a ďalších dôležitých dopravných informáciách.',
    onlineAlts: [
      'Mobilná aplikácia so zobrazením informácií o jazde vlaku',
      'Informačná obrazovka s aktuálnymi informáciami o výluke',
    ],

    countNum: 'Analytika',
    countHeading: 'Počítanie cestujúcich (APC)',
    countDesc:
      'Automatizované počítanie nástupov a výstupov na jednotlivých dverách poskytuje presné dáta o obsadenosti vozňov — podklad pre plánovanie kapacít a intervalov.',

    cameraNum: 'Bezpečnosť',
    cameraHeading: 'Kamerový systém',
    cameraDesc:
      'Kamerový systém pokrýva interiér aj exteriér vozidla a je previazaný s pracoviskom rušňovodiča, kde je možné inteligentne prepínať medzi pohľadmi podľa aktuálnej situácie.',
    cameraAlts: [
      'Zobrazenie kamerového systému na paneli',
      'Elektrická jednotka so systémom PIS',
      'Vlak vybavený systémom MOMIS na trati',
    ],

    voiceNum: 'Komunikácia',
    voiceHeading: 'Hlasová a núdzová komunikácia',
    voiceDesc:
      'Ozvučenie prepája vlakový personál s cestujúcimi pre pravidelné aj mimoriadne hlásenia a zahŕňa aj núdzové komunikačné prvky pre rýchle riešenie mimoriadnych situácií.',

    hmiNum: 'Riadenie',
    hmiHeading: 'Pracovisko rušňovodiča (HMI)',
    hmiDesc:
      'Jednotné ovládacie rozhranie dáva rušňovodičovi prístup ku všetkým prvkom MOMIS a ich diagnostike — displeje, kamery, ozvučenie aj núdzovú komunikáciu ovláda z jedného miesta.',
    hmiAlt: 'Pracovisko rušňovodiča',

    backLink: '← Späť na Riešenia',
  },

  en: {
    title: 'MOMIS On-board Passenger Information System — ALCASYS DS',
    description:
      'MOMIS is a multifunctional on-board information system for passenger rail — displays, audio, cameras, passenger counting, and WiFi on a single platform.',
    breadcrumbSection: 'Information Systems',
    eyebrow: 'Passengers — MOMIS information system',
    heading: 'One system that accompanies the passenger from boarding all the way to the end of the journey.',
    lead: "MOMIS is our multifunctional on-board information system for passenger rail transport. It delivers visual and audio information for information displays, audio, emergency communication, the camera system, passenger counting, and ticket vending. Within the system, all of this is linked to the driver's cab and to the carrier's operating systems through a single, jointly managed platform.",
    sectionLabel: 'How the system works',
    sectionHeading: 'Many areas, one platform',
    sectionDesc:
      "Every functional area of MOMIS runs on a common platform and shares data across the vehicle — from the driver's cab to the passengers.",

    groupPassenger: 'Passenger information',
    groupSafety: 'Safety and operations',
    groupControl: 'Control and diagnostics',

    wifiNum: 'Connectivity',
    wifiHeading: 'WiFi for passengers',
    wifiDesc:
      'Free internet access available throughout the journey, with seamless handover between multiple mobile network operators and no drop-outs when passing between stations.',
    wifiAlts: [
      'Illustration of WiFi connectivity on the train',
      'WiFi connectivity app on the train — journey information',
      'WiFi connectivity app on the train — train position on the map',
      'WiFi connectivity app on the train — portal welcome screen',
    ],

    displayNum: 'Visual information',
    displayHeading: 'LED boards and LCD monitors',
    displayDesc:
      "External LED boards show the train's destination, while internal LCD monitors display the current route, the next stop, connecting services, service disruptions, and additional informational content.",
    displayAlts: [
      'LCD monitor with video content for passengers',
      'LCD information monitor for passengers',
    ],
    onlineHeading: 'Online information',
    onlineDesc:
      "Information for passengers on board is updated regularly through a connection to the carrier's information system, keeping passengers continuously informed about, for example, service disruptions on the line and other important travel information.",
    onlineAlts: [
      'Mobile app showing train journey information',
      'Information screen with current service disruption details',
    ],

    countNum: 'Analytics',
    countHeading: 'Passenger counting (APC)',
    countDesc:
      'Automated counting of boarding and alighting passengers at each door provides precise occupancy data — a basis for capacity and interval planning.',

    cameraNum: 'Safety',
    cameraHeading: 'Camera system',
    cameraDesc:
      "The camera system covers both the interior and exterior of the vehicle and is linked to the driver's cab, where views can be switched intelligently depending on the current situation.",
    cameraAlts: [
      'Camera system display on the control panel',
      'Electric multiple unit equipped with the PIS system',
      'Train equipped with the MOMIS system on the line',
    ],

    voiceNum: 'Communication',
    voiceHeading: 'Voice and emergency communication',
    voiceDesc:
      'The public address system connects train staff with passengers for both routine and exceptional announcements, and also includes emergency communication features for quickly handling exceptional situations.',

    hmiNum: 'Control',
    hmiHeading: "Driver's cab (HMI)",
    hmiDesc:
      'A unified control interface gives the driver access to all MOMIS components and their diagnostics — displays, cameras, the PA system, and emergency communication are all controlled from a single place.',
    hmiAlt: "Driver's cab",

    backLink: '← Back to Solutions',
  },
};
