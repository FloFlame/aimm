import type { LucideIcon } from 'lucide-react';
import { TrendingUp, Users, Zap, BarChart3, Brain, Cpu, Lightbulb, Briefcase, Activity } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Casestudies' },
  { href: '/summarizer', label: 'Content Samenvatter' },
  // { href: '/over-ons', label: 'Over Ons' },
  // { href: '/contact', label: 'Contact' },
];

export type KeyMetric = {
  id: string;
  title: string;
  value: string;
  icon: LucideIcon;
  description?: string;
};

export const KEY_METRICS_DATA: KeyMetric[] = [
  { id: 'roi', title: 'ROI Groei', value: '120%', icon: TrendingUp, description: "Gemiddelde ROI stijging voor klanten." },
  { id: 'conversion', title: 'Lead Conversies', value: '+85%', icon: Zap, description: "Verhoging in succesvolle lead conversies." },
  { id: 'retention', title: 'Klantbehoud', value: '95%', icon: Users, description: "Hoog percentage tevreden, terugkerende klanten." },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  company: string;
  logoUrl?: string;
  logoAiHint?: string;
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: "AIMinds Revitalize heeft onze marketingstrategie getransformeerd. De AI-gedreven inzichten zijn van onschatbare waarde.",
    author: "Eva de Groot",
    company: "TechNova BV",
    logoUrl: "https://placehold.co/120x40.png",
    logoAiHint: "modern logo"
  },
  {
    id: 't2',
    quote: "Dankzij de content samenvatter besparen we uren werk per week. Een echte gamechanger!",
    author: "Jan Willemsen",
    company: "Innovate Solutions",
    logoUrl: "https://placehold.co/120x40.png",
    logoAiHint: "tech startup"
  },
  {
    id: 't3',
    quote: "De casestudy visualisaties maken complexe data toegankelijk en overtuigend. Onze klanten zijn onder de indruk.",
    author: "Sofia El Amrani",
    company: "MarktMeesters",
    logoUrl: "https://placehold.co/120x40.png",
    logoAiHint: "marketing agency"
  },
];

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
    icon: Brain,
  },
  {
    id: 's2',
    title: 'Data Analyse & Inzicht',
    description: 'Transformeer ruwe data in bruikbare inzichten voor slimmere beslissingen.',
    icon: BarChart3,
  },
  {
    id: 's3',
    title: 'Personalisatie Engines',
    description: 'Lever gepersonaliseerde klantervaringen op schaal met AI.',
    icon: Users,
  },
  {
    id: 's4',
    title: 'AI Strategie Consultatie',
    description: 'Ontwikkel een toekomstbestendige AI-strategie voor uw bedrijf.',
    icon: Lightbulb,
  },
];

export interface CaseStudyMetric {
  name: string;
  before: number;
  after: number;
  unit?: string;
}

export interface CaseStudyVisualDataPoint {
  category: string;
  before: number;
  after: number;
  fillBefore?: string;
  fillAfter?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  resultsSummary: string;
  imageUrl: string;
  imageAiHint: string;
  visualData: CaseStudyVisualDataPoint[];
  keyMetrics: CaseStudyMetric[];
}

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Verhoogde Klantbetrokkenheid voor E-commerce Platform',
    client: 'WebWinkel Plus',
    problem: 'Lage klantbetrokkenheid en conversieratio\'s ondanks toenemend websiteverkeer.',
    solution: 'Implementatie van een AI-gepersonaliseerde aanbevelingenengine en dynamische content aanpassing.',
    resultsSummary: 'Resulteerde in een stijging van 35% in klantbetrokkenheid en een toename van 25% in conversieratio\'s binnen 3 maanden.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'ecommerce analytics',
    visualData: [
      { category: ' betrokkenheid', before: 50, after: 85, fillBefore: 'hsl(var(--chart-4))', fillAfter: 'hsl(var(--chart-1))' },
      { category: 'Conversie', before: 30, after: 55, fillBefore: 'hsl(var(--chart-4))', fillAfter: 'hsl(var(--chart-1))' },
      { category: 'Pagina/Sessie', before: 2, after: 5, fillBefore: 'hsl(var(--chart-4))', fillAfter: 'hsl(var(--chart-1))' },
    ],
    keyMetrics: [
      { name: 'Klantbetrokkenheid', before: 5.2, after: 7.0, unit: '%' },
      { name: 'Conversieratio', before: 1.8, after: 2.5, unit: '%' },
      { name: 'Gem. Orderwaarde', before: 45, after: 58, unit: '€' },
    ],
  },
  {
    id: 'cs2',
    title: 'Optimalisatie van Marketinguitgaven voor SaaS Bedrijf',
    client: 'CloudCorp',
    problem: 'Hoge marketinguitgaven met onduidelijke ROI en inefficiënte leadgeneratie.',
    solution: 'AI-gestuurde analyse van marketingkanalen, budgetallocatie optimalisatie en voorspellende lead scoring.',
    resultsSummary: 'Leidde tot een reductie van 20% in marketingkosten en een stijging van 40% in gekwalificeerde leads.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'saas dashboard',
    visualData: [
      { category: 'Marketingkosten', before: 100, after: 80, fillBefore: 'hsl(var(--chart-5))', fillAfter: 'hsl(var(--chart-2))' },
      { category: 'Gekwal. Leads', before: 200, after: 280, fillBefore: 'hsl(var(--chart-5))', fillAfter: 'hsl(var(--chart-2))' },
      { category: 'CPA', before: 50, after: 28, fillBefore: 'hsl(var(--chart-5))', fillAfter: 'hsl(var(--chart-2))' },
    ],
    keyMetrics: [
      { name: 'Marketing Kosten', before: 50000, after: 40000, unit: '€/maand' },
      { name: 'Kwalificatie Leads', before: 150, after: 210, unit: 'leads/maand' },
      { name: 'Kosten per Acquisitie', before: 333, after: 190, unit: '€' },
    ],
  },
];

export const COMPANY_LOGOS_AI_HINT = "abstract logo";
