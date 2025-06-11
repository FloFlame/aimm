import { ContentSummarizerForm } from '@/components/summarizer/ContentSummarizerForm';

export default function SummarizerPage() {
  return (
    <div className="container mx-auto py-12 px-4">
       <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Content <span className="text-primary">Samenvatter</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Bespaar tijd en krijg snel inzicht in lange teksten met onze AI-gedreven samenvattingstool.
        </p>
      </div>
      <ContentSummarizerForm />
    </div>
  );
}
