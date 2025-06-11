
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE, COMPANY_NAME } from '@/lib/constants';
import { Lightbulb, Settings, Zap, Mail, Phone, ChevronRight, UserCircle, Sparkles, Handshake, Target } from 'lucide-react';

export default function OverMijPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero/Introduction Section */}
      <section className="text-center mb-16">
        <div className="mb-8">
          <Image
            src="https://placehold.co/150x150.png"
            alt="Noortje van Tuijn"
            width={150}
            height={150}
            className="rounded-full mx-auto shadow-lg"
            data-ai-hint="woman laughing"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Hallo, ik ben <span className="text-primary">Noortje van Tuijn</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-2">
          Jouw nuchtere gids in de wereld van AI & marketing.
        </p>
        <p className="text-lg text-foreground max-w-3xl mx-auto">
          Welkom bij {COMPANY_NAME}: de plek waar jij leert hoe je AI écht slim inzet in je werk — zonder technische poespas. 
          Met een achtergrond in marketing én AI help ik professionals en teams om AI begrijpelijk, praktisch en resultaatgericht toe te passen. Niet met wollige theorie, maar met directe toepassingen die je werk makkelijker, sneller en beter maken.
        </p>
      </section>

      {/* Waarom AI MarketingMinds Section */}
      <section className="py-12 bg-secondary rounded-lg mb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline mb-6">
            Waarom <span className="text-primary">{COMPANY_NAME}</span>?
          </h2>
          <div className="max-w-3xl mx-auto text-lg space-y-4 text-foreground">
            <p>
              Bij {COMPANY_NAME} draait alles om groei. Niet alleen in kennis, maar ook in vertrouwen, efficiëntie en output. 
              Of je nu voor het eerst van AI hoort of al wat ervaring hebt — ik help je om er meer uit te halen.
            </p>
            <Card className="bg-card shadow-md text-left">
              <CardContent className="p-6">
                <p className="font-semibold text-primary mb-2">Wat je níet nodig hebt:</p>
                <p className="text-muted-foreground">Een technische achtergrond.</p>
                <p className="font-semibold text-primary mt-4 mb-2">Wat je wél krijgt:</p>
                <p className="text-muted-foreground">Heldere uitleg, praktische voorbeelden en tools die je meteen kunt gebruiken.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wat ik voor je doe Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-headline text-center mb-10">
          Wat ik voor <span className="text-primary">je doe</span>:
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold font-headline">AI-trainingen op maat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Na een intake ontwikkel ik een sessie die past bij jouw sector, niveau en doelstelling.</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold font-headline">Basis AI-trainingen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Voor teams in HR, klantenservice, communicatie of marketing die willen starten met AI.</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold font-headline">Marketingondersteuning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Hulp nodig bij content, social media of campagnes? Dan denk én doe ik met je mee — versterkt met AI.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Klaar om te ontdekken CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground rounded-lg mb-16 text-center">
        <div className="container mx-auto px-4">
          <Sparkles className="h-12 w-12 mx-auto mb-4 text-background" />
          <h2 className="text-3xl font-bold font-headline mb-4">
            Klaar om te ontdekken wat AI voor jou kan betekenen?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Laten we samenwerken aan jouw slimme werkwijze van morgen.
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90">
            <Link href={`mailto:${CONTACT_EMAIL}`}>
              Stuur een mail <Mail className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-4 text-sm opacity-80">
            en ontdek hoe AI ook jouw werk leuker en makkelijker maakt. Tot snel!
          </p>
        </div>
      </section>

      {/* Final Contact Block */}
      <section className="text-center">
         <Handshake className="h-10 w-10 mx-auto mb-4 text-primary" />
        <h3 className="text-2xl font-bold font-headline mb-3">Samen de AI-wereld in!</h3>
        <p className="text-md text-muted-foreground mb-6 max-w-xl mx-auto">
          Heldere trainingen, echte oplossingen. Samen vooruit naar een innovatieve toekomst!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-md">
          <a href={`tel:${CONTACT_PHONE}`} className="flex items-center text-foreground hover:text-primary transition-colors group">
            <Phone className="h-5 w-5 mr-2 text-primary/80 group-hover:text-primary" />
            <span>{CONTACT_PHONE_DISPLAY}</span>
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center text-foreground hover:text-primary transition-colors group">
            <Mail className="h-5 w-5 mr-2 text-primary/80 group-hover:text-primary" />
            <span>{CONTACT_EMAIL}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
