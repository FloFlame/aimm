import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-background py-20 md:py-32">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left animate-subtle-fade-in-up">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-headline mb-6">
            Transformeer Uw Marketing met <span className="text-primary">Intelligente AI</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-10">
            Ontdek de kracht van kunstmatige intelligentie om uw marketingstrategieën te optimaliseren, 
            klantbetrokkenheid te verhogen en groei te versnellen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" asChild className="shadow-lg hover:shadow-primary/30 transition-shadow">
              <Link href="/case-studies">Ontdek Onze Oplossingen</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-accent/20 transition-shadow">
              <Link href="/contact">Vraag een Demo Aan</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-64 md:h-auto order-first md:order-last animate-subtle-fade-in-up animation-delay-200">
           <Image 
            src="https://placehold.co/600x400.png"
            alt="AI Marketing Concept" 
            width={600}
            height={400}
            className="rounded-lg shadow-2xl object-cover mx-auto"
            priority
            data-ai-hint="abstract technology"
          />
        </div>
      </div>
    </section>
  );
}
