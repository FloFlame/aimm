"use client"

import type { CaseStudy } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, Cell } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type CaseStudyVisualizerProps = {
  caseStudy: CaseStudy;
};

const chartConfig = {
  before: {
    label: "Voorheen",
    color: "hsl(var(--chart-4))",
  },
  after: {
    label: "Na Implementatie",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;


export function CaseStudyVisualizer({ caseStudy }: CaseStudyVisualizerProps) {
  if (!caseStudy) return null;

  const formattedVisualData = caseStudy.visualData.map(item => ({
    name: item.category,
    before: item.before,
    after: item.after,
  }));

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold font-headline">{caseStudy.title}</CardTitle>
          <CardDescription>Klant: {caseStudy.client}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Probleemstelling</h3>
            <p className="text-muted-foreground">{caseStudy.problem}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Onze Oplossing</h3>
            <p className="text-muted-foreground">{caseStudy.solution}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Resultaten Samengevat</h3>
            <p className="text-muted-foreground">{caseStudy.resultsSummary}</p>
          </div>
        </CardContent>
      </Card>

      {caseStudy.visualData && caseStudy.visualData.length > 0 && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold font-headline">Visuele Data Vergelijking</CardTitle>
            <CardDescription>Impact van onze AI-oplossingen op kerncijfers.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={formattedVisualData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent hideLabel />} />
                  <Legend />
                  <Bar dataKey="before" name="Voorheen" fill="var(--color-before)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="after" name="Na Implementatie" fill="var(--color-after)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      )}

      {caseStudy.keyMetrics && caseStudy.keyMetrics.length > 0 && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold font-headline">Belangrijkste Metrieken</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metriek</TableHead>
                  <TableHead className="text-right">Voorheen</TableHead>
                  <TableHead className="text-right">Na Implementatie</TableHead>
                  <TableHead className="text-right">Eenheid</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {caseStudy.keyMetrics.map((metric) => (
                  <TableRow key={metric.name}>
                    <TableCell className="font-medium">{metric.name}</TableCell>
                    <TableCell className="text-right">{metric.before.toLocaleString()}</TableCell>
                    <TableCell className="text-right text-primary font-semibold">{metric.after.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{metric.unit || ''}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
