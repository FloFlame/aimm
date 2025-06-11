
// Placeholder page for Diensten
import { SERVICES_MAIN_DATA, CONTACT_EMAIL, type ServiceDetail } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function DienstenPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Onze <span className="text-primary">Diensten</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ontdek hoe AI MarketingMinds u kan helpen AI praktisch en resultaatgericht in te zetten.
        </p>
      </div>

      <div className="space-y-16">
        {SERVICES_MAIN_DATA.map((service: ServiceDetail, index: number) => (
          <Card key={service.id} className={`shadow-xl overflow-hidden flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="md:w-2/5 relative min-h-[250px] md:min-h-0">
              <Image
                src={`https://placehold.co/800x600.png`}
                alt={service.title}
                fill
                className="object-cover"
                data-ai-hint={service.imageAiHint || "abstract technology"}
              />
            </div>
            <div className="md:w-3/5 flex flex-col">
              <CardHeader>
                 <div className="flex items-center mb-2">
                    <service.icon className="h-8 w-8 text-primary mr-3" />
                    <CardTitle className="text-2xl lg:text-3xl font-bold font-headline">{service.title}</CardTitle>
                  </div>
                <CardDescription className="text-md">
                  {typeof service.description === 'string' ? service.description : "Gedetailleerde beschrijving van deze dienst."}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow prose prose-sm max-w-none text-muted-foreground">
                {service.longDescription || <p>Meer informatie over deze dienst volgt snel. Neem contact op voor directe vragen.</p>}
              </CardContent>
              {service.ctaText && service.ctaLink && (
                <CardFooter>
                  <Button asChild size="lg">
                    <Link href={service.ctaLink}>
                      {service.ctaText} <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardFooter>
              )}
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16 py-12 bg-secondary rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">
          Klaar om AI voor u te laten werken?
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Neem contact op voor een vrijblijvend gesprek en ontdek de mogelijkheden.
        </p>
        <Button size="lg" asChild>
          <Link href={`mailto:${CONTACT_EMAIL}`}>Neem Contact Op</Link>
        </Button>
      </div>
    </div>
  );
}
