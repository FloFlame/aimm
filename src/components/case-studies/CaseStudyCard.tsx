import Image from 'next/image';
import Link from 'next/link';
import type { CaseStudy } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  onVisualize?: (caseStudyId: string) => void;
};

export function CaseStudyCard({ caseStudy, onVisualize }: CaseStudyCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={caseStudy.imageUrl}
          alt={caseStudy.title}
          fill
          className="object-cover rounded-t-lg"
          data-ai-hint={caseStudy.imageAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold font-headline">{caseStudy.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{caseStudy.client}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-2"><strong>Probleem:</strong> {caseStudy.problem}</p>
        <p className="text-sm text-muted-foreground mb-2"><strong>Oplossing:</strong> {caseStudy.solution}</p>
        <p className="text-sm text-foreground font-medium"><strong>Resultaten:</strong> {caseStudy.resultsSummary}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {onVisualize && (
          <Button variant="outline" onClick={() => onVisualize(caseStudy.id)}>
            Visualiseer Data
          </Button>
        )}
         <Button variant="link" asChild className="text-primary px-0">
           <Link href={`#${caseStudy.id}`} onClick={(e) => { e.preventDefault(); onVisualize?.(caseStudy.id); }}>
             Bekijk Details <ArrowRight className="ml-2 h-4 w-4" />
           </Link>
         </Button>
      </CardFooter>
    </Card>
  );
}
