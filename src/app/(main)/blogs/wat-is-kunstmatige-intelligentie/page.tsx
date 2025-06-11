
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE } from '@/lib/constants';

export default function WatIsKunstmatigeIntelligentiePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/blogs" className="inline-flex items-center text-primary hover:underline mb-8 group">
          <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
          Terug naar Blogs
        </Link>
        
        <article className="prose lg:prose-lg dark:prose-invert mx-auto">
          <div className="mb-8">
            <Image
              src="https://placehold.co/800x400.png"
              alt="Wat is Kunstmatige Intelligentie (AI)"
              width={800}
              height={400}
              className="rounded-lg shadow-md object-cover w-full"
              data-ai-hint="abstract network brain"
            />
          </div>
          
          <h1>Wat is Kunstmatige Intelligentie (AI) en wat kun jij ermee?</h1>
          
          <p>Kunstmatige Intelligentie — of AI — is allang geen toekomstmuziek meer. Het is er nú, en het verandert de manier waarop we leven, werken en communiceren.</p>
          <p>Maar wat is AI eigenlijk? Hoe werkt het? En wat kun jij ermee in je dagelijks werk of bedrijf? In deze blog krijg je een helder overzicht, zonder technische poespas.</p>

          <h2>Wat is AI?</h2>
          <p>AI (Artificial Intelligence) is technologie die taken uitvoert die normaal gesproken menselijke intelligentie vereisen. Denk aan:</p>
          <ul>
            <li>Beslissingen nemen</li>
            <li>Problemen oplossen</li>
            <li>Patronen herkennen</li>
            <li>Leren van data</li>
          </ul>
          <p>AI leert en verbetert zichzelf via machine learning — een proces waarbij algoritmen patronen herkennen in enorme hoeveelheden gegevens.</p>

          <h2>Hoe kom je AI tegen in je dagelijks leven?</h2>
          <p>Grote kans dat je dagelijks met AI te maken hebt, zonder dat je het merkt:</p>
          <ul>
            <li>Spotify en Netflix voorspellen wat jij wilt luisteren of kijken</li>
            <li>Google past zich aan jouw zoekgedrag aan</li>
            <li>Webshops laten producten zien die je waarschijnlijk interessant vindt</li>
            <li>Chatbots beantwoorden klantvragen op websites</li>
          </ul>
          <p>AI werkt op de achtergrond, maar heeft grote invloed op jouw keuzes en ervaring.</p>

          <h2>Hoe werkt AI (in simpele taal)?</h2>
          <p>AI-systemen worden getraind met data. Veel data. Hoe meer voorbeelden een systeem ziet, hoe beter het wordt in voorspellen of beslissen. Dat proces heet machine learning.</p>
          <p>Bijvoorbeeld: Een AI die spraak herkent, luistert naar duizenden stemmen. Daarna herkent hij automatisch woorden — zelfs met verschillende accenten.</p>

          <h2>Wat betekent AI voor bedrijven?</h2>
          <p>Voor bedrijven is AI geen nice-to-have, maar een strategische kans. Je kunt AI inzetten voor:</p>
          <ul>
            <li>Contentcreatie en automatisering</li>
            <li>Klantenservice verbeteren met AI-chat</li>
            <li>Data-analyse en rapportages versnellen</li>
            <li>Relevanter communiceren met je doelgroep</li>
          </ul>
          <p>Wie nu slim leert omgaan met AI, werkt efficiënter én blijft concurrenten een stap voor.</p>

          <h2>De toekomst van AI: kansen en verantwoordelijkheden</h2>
          <p>AI groeit razendsnel. Het kan oplossingen bieden voor complexe problemen zoals:</p>
          <ul>
            <li>Personeelstekorten</li>
            <li>Energieverbruik</li>
            <li>Gezondheidszorg en preventie</li>
            <li>Onderwijs op maat</li>
          </ul>
          <p>Maar met grote mogelijkheden komen ook verantwoordelijkheden. Denk aan ethiek, privacy en transparantie. AI-geletterdheid wordt daarom steeds belangrijker.</p>
          
          <div className="mt-10 p-6 border-t border-border">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
             <div className="space-y-2 text-sm">
                <a href={`tel:${CONTACT_PHONE}`} className="flex items-center text-foreground hover:text-primary transition-colors group">
                    <Phone className="h-4 w-4 mr-2 text-primary/80 group-hover:text-primary" />
                    <span>{CONTACT_PHONE_DISPLAY}</span>
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center text-foreground hover:text-primary transition-colors group">
                    <Mail className="h-4 w-4 mr-2 text-primary/80 group-hover:text-primary" />
                    <span>{CONTACT_EMAIL}</span>
                </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
