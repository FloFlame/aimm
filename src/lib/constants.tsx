
import type { LucideIcon } from 'lucide-react';
import { Users, Zap, TrendingUp, BookOpen, Settings, Lightbulb, ShieldCheck, MessageSquare, Briefcase, Target, CheckCircle, Smile, HelpCircle, Mail, Phone } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/over-mij', label: 'Over Mij' },
  { href: '/contact', label: 'Contact' },
  { href: '/blogs', label: 'Blogs' },
];

export const COMPANY_NAME = "AI MarketingMinds";
export const CONTACT_EMAIL = "info@aimarketingminds.nl";
export const CONTACT_PHONE = "+31651013498";
export const CONTACT_PHONE_DISPLAY = "06 – 510 13 498";


// Placeholder data for new sections (icons can be customized)
export type InfoCardItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const TARGET_AUDIENCE_DATA: InfoCardItem[] = [
  {
    id: 'marketing',
    title: 'Marketing & Communicatie',
    description: 'Maak sneller content, campagnes en nieuwsbrieven met behoud van creativiteit.',
    icon: Target,
  },
  {
    id: 'hr',
    title: 'HR & Recruitment',
    description: 'Schrijf betere vacatureteksten, stroomlijn interne communicatie, verbeter onboarding.',
    icon: Users,
  },
  {
    id: 'entrepreneurs',
    title: 'Zelfstandige Ondernemers',
    description: 'Werk slimmer en professioneler zonder groot marketingteam.',
    icon: Briefcase,
  },
  {
    id: 'education_care',
    title: 'Onderwijs & Zorg',
    description: 'Ontdek hoe AI je helpt bij lesvoorbereiding, communicatie en werkdrukvermindering.',
    icon: BookOpen,
  },
];

export const WHAT_TO_EXPECT_DATA: InfoCardItem[] = [
  {
    id: 'trainingen',
    title: 'Toegankelijke AI-trainingen',
    description: 'In begrijpelijke taal, met duidelijke voorbeelden uit jouw praktijk.',
    icon: Lightbulb,
  },
  {
    id: 'tools',
    title: 'Slimme Tools & Templates',
    description: 'Je leert werken met beproefde AI-workflows, promtformules en contentstructuren.',
    icon: Settings,
  },
  {
    id: 'results',
    title: 'Direct Resultaat in je Werk',
    description: 'Meer output, minder gedoe. Sneller schrijven, beter structureren, efficiënter plannen.',
    icon: CheckCircle,
  },
];

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq1',
    question: 'Is dit alleen voor marketeers of techneuten?',
    answer: 'Nee. Onze deelnemers zijn juist vaak geen techneuten. We maken AI begrijpelijk voor iedereen.',
  },
  {
    id: 'faq2',
    question: 'Wat heb ik nodig om te starten?',
    answer: 'Een laptop en nieuwsgierigheid. Je hoeft geen ervaring te hebben met AI-tools.',
  },
  {
    id: 'faq3',
    question: 'Hoe snel levert het resultaat op?',
    answer: 'Na één sessie pas je al toe wat je leert. Veel deelnemers besparen direct tijd en moeite.',
  },
];

export type ServiceDetail = {
  id: string;
  title: string;
  description: string | React.ReactNode;
  icon: LucideIcon;
  imageAiHint: string;
  longDescription?: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
};

export const SERVICES_MAIN_DATA: ServiceDetail[] = [
  {
    id: 'basis-training',
    title: 'Basis AI-Training',
    description: 'De ideale start om AI slim in te zetten in je werk. Begrijp wat AI is, wat je ermee kunt en hoe je het vandaag nog inzet.',
    icon: Lightbulb,
    imageAiHint: "education classroom",
    longDescription: (
      <>
        <p className="mb-4">Wil je begrijpen wat AI is, wat je ermee kunt en hoe je het vandaag nog inzet in jouw werkpraktijk? De Basis AI-Training van AI MarketingMinds geeft je een helder overzicht van de mogelijkheden van kunstmatige intelligentie — zonder technische voorkennis.</p>
        <p className="mb-4">Je leert werken met tools zoals ChatGPT en ontdekt hoe AI jou helpt om sneller content te maken, beter te communiceren en efficiënter te werken.</p>
        <h4 className="font-semibold mt-4 mb-2 text-primary">Wat je leert:</h4>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Wat AI is en hoe het concreet toepasbaar is in je dagelijkse werk</li>
          <li>Praktische AI-tools die je direct kunt gebruiken</li>
          <li>Realistische voorbeelden uit jouw sector of functiegebied</li>
        </ul>
        <h4 className="font-semibold mt-4 mb-2 text-primary">Voor wie?</h4>
        <p className="mb-4">Deze training is geschikt voor professionals in marketing, HR, communicatie, sales, onderwijs of dienstverlening die willen starten met AI zonder technische achtergrond.</p>
        <p>Je brengt je eigen laptop mee en gaat tijdens de training direct zelf aan de slag.</p>
      </>
    ),
    ctaText: 'Meer weten of training boeken?',
    ctaLink: `mailto:${CONTACT_EMAIL}`,
  },
  {
    id: 'maatwerk-training',
    title: 'Op Maat Gemaakte AI-Training',
    description: 'Afgestemd op jouw organisatie en branche. Zorg ervoor dat jouw mensen precies leren wat ze nodig hebben.',
    icon: Settings,
    imageAiHint: "team collaboration",
    longDescription: (
      <>
        <p className="mb-4">Wil je AI succesvol integreren in je team, afdeling of organisatie? Met een AI-training op maat zorgen we ervoor dat jouw mensen precies leren wat ze nodig hebben, afgestemd op jullie branche, tools en werkprocessen.</p>
        <p className="mb-4">Na een persoonlijke intake ontwerp ik een praktische sessie met directe toepasbaarheid. Geen standaardtheorie, maar gericht op resultaat.</p>
        <h4 className="font-semibold mt-4 mb-2 text-primary">Wat deze maatwerktraining oplevert:</h4>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>AI-workflows die passen bij jouw team of organisatie</li>
          <li>Praktische toepassingen in jullie dagelijkse werkprocessen</li>
          <li>Inzicht in hoe AI-oplossingen tijd besparen en kwaliteit verhogen</li>
        </ul>
        <h4 className="font-semibold mt-4 mb-2 text-primary">Voor wie?</h4>
        <p className="mb-4">Deze training is geschikt voor teams in marketing, HR, communicatie, zorg, onderwijs of zakelijke dienstverlening die AI structureel willen inzetten.</p>
        <p>Tijdens de sessie gaan alle deelnemers direct praktisch aan de slag — op hun eigen laptop, met tools die voor hun werk relevant zijn.</p>
      </>
    ),
    ctaText: 'Training aanvragen of sparren?',
    ctaLink: `mailto:${CONTACT_EMAIL}`,
  },
  {
    id: 'marketing-ondersteuning',
    title: 'Marketingondersteuning met AI',
    description: 'Praktisch, slim en versterkt met AI. Voor als je geen tijd hebt om alles zelf te doen.',
    icon: Zap,
    imageAiHint: "marketing strategy",
    longDescription: (
      <>
        <p className="mb-4">Wil je AI inzetten voor je marketing, maar heb je geen tijd om alles zelf te doen? Naast AI-trainingen ondersteun ik ondernemers en teams met de praktische uitvoering van hun marketing — slim, efficiënt en versterkt met AI-tools.</p>
        <h4 className="font-semibold mt-4 mb-2 text-primary">Denk aan:</h4>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Contentcreatie met ChatGPT of andere AI-tools</li>
          <li>Social media beheer met slimme planningssystemen</li>
          <li>Nieuwsbrieven en campagnes die geautomatiseerd en persoonlijk zijn</li>
        </ul>
        <p>Geen losse marketingklusjes, maar een consistente aanpak waarin jij het overzicht houdt en ik zorg voor de uitvoering.</p>
      </>
    ),
    ctaText: 'Interesse in ondersteuning?',
    ctaLink: `mailto:${CONTACT_EMAIL}`,
  },
  {
    id: 'ai-geletterdheid',
    title: 'AI-Geletterdheid Training (Verplichting 2025)',
    description: 'Vanaf 2 februari 2025 wordt AI-geletterdheid verplicht. Ben jij er klaar voor?',
    icon: ShieldCheck,
    imageAiHint: "legal compliance",
    longDescription: (
      <>
        <p className="mb-4">Vanaf 2 februari 2025 wordt AI-geletterdheid verplicht voor iedereen die met AI werkt. Niet alleen voor techneuten of ontwikkelaars, maar juist ook voor eindgebruikers: van marketeers en HR-professionals tot zorgmedewerkers, beleidsmakers en zzp’ers.</p>
        <p className="mb-4">AI-geletterdheid betekent dat je begrijpt wat AI is, hoe het werkt, welke risico’s eraan kleven en hoe je het veilig en effectief inzet in jouw werk. Het gaat om kennis, vaardigheden én bewustzijn van de ethische en maatschappelijke impact van AI.</p>
        <h4 className="font-semibold mt-4 mb-2 text-primary">Voor wie is AI-geletterdheid verplicht?</h4>
        <p className="mb-2">Volgens de Europese AI Act geldt de verplichting voor:</p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Iedereen die AI gebruikt binnen zijn of haar werk</li>
          <li>Bedrijven en organisaties die AI implementeren</li>
          <li>ZZP’ers en externe professionals die AI inzetten voor of namens een organisatie</li>
        </ul>
        <p className="mb-4">Werkgevers moeten zorgen dat personeel AI-geletterd is op een niveau dat past bij hun rol, sector en verantwoordelijkheden.</p>
        <h4 className="font-semibold mt-4 mb-2 text-primary">Wat leer je in de AI-geletterdheidstraining?</h4>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Inzicht in wat AI wel en niet is</li>
          <li>Begrip van de risico’s, wetgeving en ethische vragen</li>
          <li>Praktische toepassingen in jouw vakgebied</li>
          <li>Veilige en verantwoorde inzet van AI-tools zoals ChatGPT</li>
        </ul>
        <p className="mb-4">De training is afgestemd op jouw niveau en sector – geen onnodige diepgang, maar precies wat jij moet weten én kunnen.</p>
        <p className="font-semibold text-foreground">Voorkom risico’s, voldoe aan de wet, werk met vertrouwen.</p>
      </>
    ),
    ctaText: 'Voorbereid zijn op 2025?',
    ctaLink: `mailto:${CONTACT_EMAIL}`,
  },
];

// These are other constants that were in the original file,
// they might be used by other pages or components.
export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES_DATA: Service[] = [
  {
    id: 's1',
    title: 'AI Content Creatie',
    description: 'Genereer geoptimaliseerde marketingcontent met onze geavanceerde AI-modellen.',
    icon: Lightbulb, // Example icon
  },
  {
    id: 's2',
    title: 'Data Analyse & Inzicht',
    description: 'Transformeer ruwe data in bruikbare inzichten voor slimmere beslissingen.',
    icon: TrendingUp, // Example icon
  },
  {
    id: 's3',
    title: 'Personalisatie Engines',
    description: 'Lever gepersonaliseerde klantervaringen op schaal met AI.',
    icon: Users, // Example icon
  },
  {
    id: 's4',
    title: 'AI Strategie Consultatie',
    description: 'Ontwikkel een toekomstbestendige AI-strategie voor uw bedrijf.',
    icon: Settings, // Example icon
  },
];

export type KeyMetric = {
  id: string;
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
};

export const KEY_METRICS_DATA: KeyMetric[] = [
  {
    id: 'roi',
    icon: TrendingUp,
    title: 'ROI Groei',
    value: '120%',
    description: 'Gemiddelde ROI stijging voor klanten.',
  },
  {
    id: 'conversion',
    icon: Zap,
    title: 'Lead Conversies',
    value: '+85%',
    description: 'Verhoging in succesvolle lead conversies.',
  },
  {
    id: 'retention',
    icon: Users,
    title: 'Klantbehoud',
    value: '95%',
    description: 'Hoog percentage tevreden, terugkerende klanten.',
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  company: string;
  logoUrl?: string;
  logoAiHint?: string;
};

export const COMPANY_LOGOS_AI_HINT = "company logo";

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: 'Dankzij AIMarketingMinds hebben we onze marketingprocessen geautomatiseerd en significant betere resultaten behaald. Een echte gamechanger!',
    author: 'Anna de Vries',
    company: 'Innovatech BV',
    logoUrl: 'https://placehold.co/120x40.png',
    logoAiHint: 'tech company'
  },
  {
    id: 't2',
    quote: 'De AI-strategie die AIMarketingMinds voor ons ontwikkelde, heeft onze klantbetrokkenheid naar een hoger niveau getild. Zeer aanbevolen!',
    author: 'Mark Jansen',
    company: 'Retail Groep Nederland',
    logoUrl: 'https://placehold.co/120x40.png',
    logoAiHint: 'retail business'
  },
];

export type CaseStudyMetric = {
  name: string;
  before: number;
  after: number;
  unit?: string;
};

export type CaseStudyVisualData = {
  category: string;
  before: number;
  after: number;
};

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  resultsSummary: string;
  imageUrl: string;
  imageAiHint: string;
  keyMetrics: CaseStudyMetric[];
  visualData: CaseStudyVisualData[];
};

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Verhoogde Klantbetrokkenheid voor E-commerce Platform',
    client: 'WebWinkel Plus',
    problem: 'Lage klantinteractie en terugkerende aankopen op het platform.',
    solution: 'Implementatie van een AI-gedreven aanbevelingssysteem en gepersonaliseerde e-mailcampagnes.',
    resultsSummary: 'Stijging van 35% in klantbetrokkenheid en 25% toename in conversieratio\'s binnen 3 maanden.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'ecommerce analytics',
    keyMetrics: [
      { name: 'Klantbetrokkenheid', before: 5000, after: 6750, unit: 'interacties/mnd' },
      { name: 'Conversieratio', before: 2.0, after: 2.5, unit: '%' },
      { name: 'Herhaalaankopen', before: 15, after: 22, unit: '%' },
    ],
    visualData: [
      { category: 'Betrokkenheid', before: 50, after: 67.5 },
      { category: 'Conversie', before: 20, after: 25 },
      { category: 'Retentie', before: 15, after: 22 },
    ],
  },
  {
    id: 'cs2',
    title: 'Optimalisatie van Marketinguitgaven voor SaaS Bedrijf',
    client: 'CloudCorp',
    problem: 'Hoge kosten per acquisitie (CPA) en inefficiënte advertentie-uitgaven.',
    solution: 'AI-gestuurde budgetallocatie en doelgroepsegmentatie voor advertentiecampagnes.',
    resultsSummary: 'Reductie van 20% in marketingkosten en stijging van 40% in gekwalificeerde leads.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'saas dashboard',
    keyMetrics: [
      { name: 'Marketingkosten', before: 10000, after: 8000, unit: 'EUR/mnd' },
      { name: 'Gekwalificeerde Leads', before: 50, after: 70, unit: 'leads/mnd' },
      { name: 'CPA', before: 200, after: 114, unit: 'EUR' },
    ],
    visualData: [
      { category: 'Kosten', before: 100, after: 80 },
      { category: 'Leads', before: 50, after: 70 },
    ],
  },
];
