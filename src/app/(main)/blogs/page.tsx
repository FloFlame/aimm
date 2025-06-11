
// Placeholder page for Blogs
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// Sample blog post structure
const sampleBlogPosts = [
  {
    id: 'blog1',
    title: 'De Toekomst van AI in Marketing: Trends voor 2025',
    date: '15 Juli 2024',
    excerpt: 'Ontdek de belangrijkste AI-trends die marketingprofessionals in de gaten moeten houden voor het komende jaar...',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'futuristic technology',
    slug: '/blogs/toekomst-van-ai-in-marketing',
  },
  {
    id: 'blog2',
    title: 'ChatGPT Praktisch Inzetten: 5 Concrete Voorbeelden',
    date: '1 Augustus 2024',
    excerpt: 'Leer hoe je ChatGPT en vergelijkbare tools direct kunt toepassen in je dagelijkse marketingtaken voor meer efficiëntie...',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'person using laptop',
    slug: '/blogs/chatgpt-praktisch-inzetten',
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
