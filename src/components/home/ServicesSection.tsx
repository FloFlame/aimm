import { SERVICES_DATA, type Service } from '@/lib/constants';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Onze <span className="text-primary">AI Diensten</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Een reeks AI-gedreven oplossingen om uw marketingdoelen te bereiken en te overtreffen.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service: Service, index: number) => (
            <Card key={service.id} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 animate-subtle-fade-in-up animation-delay-${index * 100}`}>
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-accent/10 rounded-full mb-3">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="px-6 pb-6 text-center text-sm text-muted-foreground min-h-[80px]">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" asChild>
                <Link href="/contact">Meer Informatie</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
