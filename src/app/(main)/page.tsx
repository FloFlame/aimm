
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TARGET_AUDIENCE_DATA, WHAT_TO_EXPECT_DATA, FAQ_DATA, SERVICES_MAIN_DATA, COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE, type InfoCardItem, type FaqItem, type ServiceDetail } from '@/lib/constants';
import { CheckCircle, ChevronRight, Mail, Phone, Users, Briefcase, BookOpen, Target, Lightbulb, Settings, Smile, HelpCircle, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

function NewHeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">
          Zo werkt het bij <span className="text-primary">{COMPANY_NAME}</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          AI hoeft niet ingewikkeld te zijn. Wij maken het praktisch, toepasbaar en begrijpelijk voor iedereen.
          Geen technische praat, wel concrete voorbeelden uit jouw dagelijkse werk.
        </p>
        <p className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Of je nu in marketing, HR, communicatie of als zzp’er werkt — wij helpen je AI slim te gebruiken om tijd te besparen, betere content te maken of processen te verbeteren.
        </p>
        <Button size="lg" asChild>
          <Link href="#diensten">Ontdek onze diensten</Link>
        </Button>
      </div>
    </section>
  );
}

function TargetAudienceSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Voor wie is <span className="text-primary">{COMPANY_NAME}</span> bedoeld?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Voor iedereen die AI praktisch wil inzetten in zijn werk – zonder technische kennis. Onze trainingen en tools zijn er voor:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TARGET_AUDIENCE_DATA.map((item: InfoCardItem) => (
            <Card key={item.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold font-headline">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatToExpectSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Wat kun je <span className="text-primary">verwachten?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHAT_TO_EXPECT_DATA.map((item: InfoCardItem) => (
            <Card key={item.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center">
                <div className="p-3 bg-accent/10 rounded-full mb-3">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold font-headline">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyAIMarketingMindsSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
            Waarom <span className="text-primary">{COMPANY_NAME}</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Er zijn veel aanbieders, maar wij maken AI praktisch en persoonlijk.
            Geen algemene cursus, maar een hands-on aanpak die past bij jouw werk.
          </p>
          <Card className="mb-8 shadow-lg text-left">
            <CardContent className="p-6">
              <MessageSquare className="w-8 h-8 text-primary mb-4 opacity-70" />
              <blockquote className="text-lg italic text-foreground">
                “Ik dacht dat AI niets voor mij was, maar nu werk ik er elke dag mee.”
              </blockquote>
              <p className="text-right mt-2 text-sm text-muted-foreground">- Judith, HR-manager</p>
            </CardContent>
          </Card>
          <p className="text-lg text-muted-foreground">
            Wij geloven niet in hype, maar in praktische winst. Geen tool overload, wel grip op wat werkt.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesProvidedSection() {
  return (
    <section id="diensten" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Onze <span className="text-primary">Diensten</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Praktische AI-oplossingen om jouw werk te transformeren.
          </p>
        </div>
        <div className="space-y-12">
          {SERVICES_MAIN_DATA.map((service: ServiceDetail, index: number) => (
            <Card key={service.id} className={`shadow-lg overflow-hidden ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col`}>
              <div className="md:w-1/3 relative min-h-[250px] md:min-h-0">
                <Image
                  src={`https://placehold.co/600x400.png`}
                  alt={service.title}
                  fill
                  className="object-cover"
                  data-ai-hint={service.imageAiHint}
                />
              </div>
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <service.icon className="h-7 w-7 text-primary mr-3" />
                    <CardTitle className="text-2xl font-semibold font-headline">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div className="text-muted-foreground prose prose-sm max-w-none">
                    {typeof service.description === 'string' ? <p>{service.description}</p> : service.description}
                    {service.longDescription && (
                       <div className="mt-4 text-sm">{service.longDescription}</div>
                    )}
                  </div>
                </CardContent>
                {service.ctaText && service.ctaLink && (
                  <CardFooter>
                    <Button asChild>
                      <Link href={service.ctaLink}>
                        {service.ctaText} <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Veelgestelde <span className="text-primary">Vragen</span>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_DATA.map((item: FaqItem) => (
              <AccordionItem value={item.id} key={item.id}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-3 text-primary/80" />
                    <span className="font-semibold">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-8">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function ContactCtaSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
          Klaar om te <span className="text-background">starten?</span>
        </h2>
        <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
          Ben je benieuwd hoe AI jouw werk slimmer, sneller en leuker kan maken?
          Laten we kennismaken — dan kijken we samen wat er mogelijk is voor jouw situatie.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90">
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail className="mr-2 h-5 w-5" /> Mail ons
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
             <a href={`tel:${CONTACT_PHONE}`}>
              <Phone className="mr-2 h-5 w-5" /> Bel ons: {CONTACT_PHONE_DISPLAY}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <NewHeroSection />
      <TargetAudienceSection />
      <WhatToExpectSection />
      <WhyAIMarketingMindsSection />
      <ServicesProvidedSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}
