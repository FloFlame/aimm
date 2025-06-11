"use client";

import { KEY_METRICS_DATA, type KeyMetric } from '@/lib/constants';
import { AnimatedMetric } from './AnimatedMetric';

export function KeyMetricsSection() {
  const animationDelays = ['animation-delay-0', 'animation-delay-200', 'animation-delay-400'];
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Onze <span className="text-primary">Impact</span> in Cijfers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ontdek hoe onze AI-oplossingen concrete resultaten leveren voor bedrijven zoals het uwe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {KEY_METRICS_DATA.map((metric: KeyMetric, index: number) => (
            <AnimatedMetric
              key={metric.id}
              icon={metric.icon}
              title={metric.title}
              targetValue={metric.value}
              description={metric.description}
              animationDelay={animationDelays[index % animationDelays.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
