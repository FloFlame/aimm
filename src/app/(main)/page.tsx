import { HeroSection } from '@/components/home/HeroSection';
import { KeyMetricsSection } from '@/components/home/KeyMetricsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CASE_STUDIES_DATA } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Case Studies Teaser Section
function CaseStudiesTeaser() {
  const featuredCaseStudies = CASE_STUDIES_DATA.slice(0, 2); // Show first 2

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Succesverhalen uit de <span className="text-primary">Praktijk</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zie hoe we andere bedrijven hebben geholpen hun doelen te bereiken met AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCaseStudies.map((cs, index) => (
            <Card key={cs.id} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-subtle-fade-in-up animation-delay-${index * 200}`}>
              <Image 
                src={cs.imageUrl} 
                alt={cs.title} 
                width={600} 
                height={300} 
                className="rounded-t-lg object-cover w-full h-48"
                data-ai-hint={cs.imageAiHint}
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold font-headline">{cs.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{cs.client}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{cs.resultsSummary}</p>
                <Button variant="link" asChild className="px-0 text-primary">
                  <Link href={`/case-studies#${cs.id}`}>Lees Meer <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/case-studies">Bekijk Alle Casestudies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


// Final Call to Action Section
function FinalCTASection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
          Klaar om uw Marketing te Transformeren?
        </h2>
        <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
          Neem vandaag nog contact op voor een vrijblijvend gesprek en ontdek wat AI voor uw bedrijf kan betekenen.
        </p>
        <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90">
          <Link href="/contact">Start Uw AI Reis</Link>
        </Button>
      </div>
    </section>
  );
}


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <KeyMetricsSection />
      <ServicesSection />
      <CaseStudiesTeaser />
      <TestimonialCarousel />
      <FinalCTASection />
    </>
  );
}
