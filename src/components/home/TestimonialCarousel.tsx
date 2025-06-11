"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { TESTIMONIALS_DATA, type Testimonial, COMPANY_LOGOS_AI_HINT } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex, handleNext, isPaused]);

  if (!TESTIMONIALS_DATA || TESTIMONIALS_DATA.length === 0) {
    return null;
  }

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section 
      className="py-16 lg:py-24 bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Wat Onze <span className="text-primary">Klanten</span> Zeggen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Echte verhalen van bedrijven die groeien met AIMinds Revitalize.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-8 md:p-12 text-center min-h-[350px] md:min-h-[300px] flex flex-col justify-center items-center">
               <Quote className="w-12 h-12 text-primary/50 mb-6" />
              <p className="text-lg md:text-xl italic text-foreground mb-6">
                "{currentTestimonial.quote}"
              </p>
              <div className="font-semibold text-md text-primary">
                {currentTestimonial.author}
              </div>
              <div className="text-sm text-muted-foreground">
                {currentTestimonial.company}
              </div>
              {currentTestimonial.logoUrl && (
                <div className="mt-6">
                  <Image
                    src={currentTestimonial.logoUrl}
                    alt={`${currentTestimonial.company} logo`}
                    width={120}
                    height={40}
                    className="object-contain mx-auto"
                    data-ai-hint={currentTestimonial.logoAiHint || COMPANY_LOGOS_AI_HINT}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full w-10 h-10 md:w-12 md:h-12" 
            onClick={handlePrev}
            aria-label="Vorige testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full w-10 h-10 md:w-12 md:h-12" 
            onClick={handleNext}
            aria-label="Volgende testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  currentIndex === index ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Ga naar testimonial ${index + 1}`}
              />
            ))}
          </div>
      </div>
    </section>
  );
}
