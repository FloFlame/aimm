
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SlimmerWerkenMetChatGptPage() {
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
              alt="Slimmer werken met ChatGPT"
              width={800}
              height={400}
              className="rounded-lg shadow-md object-cover w-full"
              data-ai-hint="interface computer"
            />
          </div>
          
          <h1>Slimmer werken met ChatGPT, zónder dat het je extra tijd kost</h1>
          
          <p>ChatGPT is een krachtig hulpmiddel. Maar veel mensen denken dat het ingewikkeld is, of dat het extra werk oplevert. Zonde — want als je het slim inzet, bespaart het je juist tijd, frustratie en eindeloos gepuzzel met teksten of formats.</p>
          <p>In deze blog laat ik je zien hoe je ChatGPT naast je dagelijkse werk gebruikt, zónder dat het voelt als ‘weer een extra tool’.</p>

          <h2>Waarom ChatGPT niet als ‘extra’ voelt (als je het goed gebruikt)</h2>
          <p>De kracht van ChatGPT zit niet in alles tegelijk doen met AI. Het zit juist in kleine, slimme toepassingen die je helpen bij taken die je tóch al doet:</p>
          <ul>
            <li>E-mails schrijven</li>
            <li>Social media posts maken</li>
            <li>Een voorstel opstellen</li>
            <li>Iets uitleggen aan een collega</li>
            <li>Een klantvraag beantwoorden</li>
          </ul>
          <p>Het verschil? ChatGPT helpt je sneller beginnen, beter formuleren of net even verder denken.</p>

          <h2>7 manieren om ChatGPT direct te gebruiken naast je werk:</h2>
          
          <h3>Start je dag met een ‘prompt template’</h3>
          <p>Geef aan wat je moet doen vandaag, en laat ChatGPT helpen structureren of voorbereiden.</p>

          <h3>Laat ChatGPT meedenken bij mails of reacties</h3>
          <p>Formuleer sneller, toon consistenter, inhoud beter.</p>

          <h3>Gebruik het voor eerste versies van content</h3>
          <p>Blog, vacature tekst, nieuwsbrief? Laat ChatGPT beginnen, jij finetunet.</p>

          <h3>Laat het je ideeën genereren of sparren</h3>
          <p>Geen inspiratie? Vraag om invalshoeken of alternatieven.</p>

          <h3>Samenvattingen van vergadernotulen of documenten</h3>
          <p>Snel overzicht nodig? Plak het in ChatGPT en vraag om de kernpunten.</p>

          <h3>Vraag om feedback op je eigen tekst</h3>
          <p>Laat ChatGPT suggesties doen op toon, structuur of helderheid.</p>

          <h3>Maak je eigen prompts herbruikbaar</h3>
          <p>Werk je vaak in dezelfde structuur? Maak van jouw prompts een slim sjabloon.</p>

          <h2>Wat levert het op?</h2>
          <ul>
            <li>Minder tijd kwijt aan schrijven of formuleren</li>
            <li>Meer consistentie in je communicatie</li>
            <li>Makkelijker beginnen aan taken die je uitstelt</li>
            <li>Slimmer nadenken met AI als sparringpartner</li>
            <li>Tijd overhouden voor werk dat er echt toe doet</li>
          </ul>

          <h2>Conclusie: je hoeft geen expert te zijn om tijd te winnen met AI</h2>
          <p>Je hoeft ChatGPT niet “te snappen”. Je hoeft het alleen slim in te zetten in je werk. En dát is precies waar ik je bij help.</p>

          <Card className="mt-12 shadow-lg border-border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold font-headline text-primary text-center">Wil je leren hoe je ChatGPT praktisch integreert in jouw werkdag?</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-3">
              <Button asChild size="lg">
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  <Mail className="mr-2 h-5 w-5" /> Stuur een mail
                </a>
              </Button>
              <p className="text-sm text-muted-foreground text-center max-w-md">
                en ik laat je zien hoe makkelijk en effectief het kan zijn.
              </p>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  );
}
