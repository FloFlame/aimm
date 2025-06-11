"use client";

import { useState, useEffect, useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type AnimatedMetricProps = {
  icon: LucideIcon;
  title: string;
  targetValue: string; // Can be number string like "75" or string with % like "75%"
  description?: string;
  animationDelay?: string; // e.g., 'animation-delay-200'
};

export function AnimatedMetric({ icon: Icon, title, targetValue, description, animationDelay }: AnimatedMetricProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isNumeric = !isNaN(parseFloat(targetValue)) && isFinite(targetValue as any);
  const numericTarget = isNumeric ? parseFloat(targetValue) : 0;
  const suffix = isNumeric ? (targetValue.endsWith('%') ? '%' : '') : '';
  const fullValueSuffix = isNumeric ? '' : targetValue.substring(String(numericTarget).length);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !isNumeric) {
      if(isVisible && !isNumeric) setDisplayValue(targetValue);
      return;
    }
    
    let start = 0;
    const duration = 1500; // ms
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentValue = Math.floor(progress * numericTarget);
      setDisplayValue(currentValue.toString());

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(numericTarget.toString());
      }
    };

    requestAnimationFrame(animateCount);

  }, [isVisible, numericTarget, isNumeric, targetValue]);

  return (
    <Card ref={ref} className={cn("text-center shadow-lg hover:shadow-xl transition-shadow duration-300", isVisible ? `animate-subtle-fade-in-up ${animationDelay}` : 'opacity-0')}>
      <CardHeader className="flex flex-col items-center pb-2">
        <div className="p-3 bg-primary/10 rounded-full mb-3">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold font-headline">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold text-primary">
          {displayValue}{suffix || fullValueSuffix}
        </p>
        {description && <p className="text-sm text-muted-foreground mt-2">{description}</p>}
      </CardContent>
    </Card>
  );
}
