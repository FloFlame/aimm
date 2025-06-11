
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const sampleBlogPosts = [
  {
    id: 'blog1',
    title: 'Slimmer werken met ChatGPT, zónder dat het je extra tijd kost',
    date: '1 Oktober 2024',
    excerpt: 'Ontdek hoe je ChatGPT naast je dagelijkse werk gebruikt, zónder dat het voelt als ‘weer een extra tool’. Bespaar tijd en frustratie.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'person computer',
    slug: '/blogs/slimmer-werken-met-chatgpt',
  },
  {
    id: 'blog2',
    title: 'Zelf een GPT bouwen? Dit is waarom iedereen het straks doet (en jij nú moet beginnen)',
    date: '15 September 2024',
    excerpt: 'Sinds GPT-4o is zelf een GPT bouwen toegankelijk voor iedereen. Ontdek de voordelen en hoe je begint.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'robot brain',
    slug: '/blogs/zelf-een-gpt-bouwen',
  },
  {
    id: 'blog3',
    title: 'Wat is Kunstmatige Intelligentie (AI) en wat kun jij ermee?',
    date: '1 September 2024',
    excerpt: 'Een helder overzicht van AI, hoe het werkt, en de praktische toepassingen in jouw werk of bedrijf, zonder technische poespas.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'abstract network',
    slug: '/blogs/wat-is-kunstmatige-intelligentie',
  },
];


export default function BlogsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Onze <span className="text-primary">Blogs</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Inzichten, tips en nieuws over AI in marketing en daarbuiten.
        </p>
      </div>

      {sampleBlogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleBlogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-48">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                  data-ai-hint={post.imageAiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold font-headline line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="text-xs text-muted-foreground">{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="text-primary px-0">
                  <Link href={post.slug}>
                    Lees Meer <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-semibold mb-4">Binnenkort beschikbaar</h2>
          <p className="text-muted-foreground">
            We werken hard aan het vullen van onze blogpagina met waardevolle content. Kom snel terug!
          </p>
        </div>
      )}
    </div>
  );
}
