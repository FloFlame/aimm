"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { summarizeCaseStudy } from '@/ai/flows/summarize-case-study'; 

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  caseStudyContent: z.string().min(50, {
    message: "Content moet minimaal 50 karakters lang zijn.",
  }).max(10000, {
    message: "Content mag maximaal 10.000 karakters lang zijn."
  }),
});

export function ContentSummarizerForm() {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      caseStudyContent: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSummary(null);
    try {
      const result = await summarizeCaseStudy({ caseStudyContent: values.caseStudyContent });
      setSummary(result.summary);
      toast({
        title: "Samenvatting gegenereerd!",
        description: "Uw content is succesvol samengevat.",
      });
    } catch (error) {
      console.error("Error summarizing content:", error);
      toast({
        title: "Fout bij samenvatten",
        description: "Er is iets misgegaan. Probeer het later opnieuw.",
        variant: "destructive",
      });
      setSummary("Kon de content niet samenvatten. Probeer het later opnieuw.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold font-headline">AI Content Samenvatter</CardTitle>
          <CardDescription>
            Plak uw casestudy (of andere tekst) hieronder en laat onze AI een beknopte samenvatting genereren.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="caseStudyContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md font-semibold">Content om samen te vatten</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Voer hier de volledige tekst van uw casestudy in..."
                        className="min-h-[200px] input-custom-border focus:ring-primary focus:border-primary"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button type="submit" disabled={isLoading} size="lg">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Samenvatten...
                  </>
                ) : (
                  "Genereer Samenvatting"
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {summary && (
        <Card className="mt-8 shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold font-headline">Gegenereerde Samenvatting</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground whitespace-pre-line">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
