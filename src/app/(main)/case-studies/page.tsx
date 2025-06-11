"use client";

import { useState, useEffect } from 'react';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { CaseStudyVisualizer } from '@/components/case-studies/CaseStudyVisualizer';
import { CASE_STUDIES_DATA, type CaseStudy } from '@/lib/constants';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function CaseStudiesPage() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVisualize = (caseStudyId: string) => {
    const study = CASE_STUDIES_DATA.find(cs => cs.id === caseStudyId);
    if (study) {
      setSelectedCaseStudy(study);
      setIsModalOpen(true);
      // Update URL hash
      window.location.hash = caseStudyId;
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCaseStudy(null);
    // Remove hash from URL or set to a neutral state
    history.pushState("", document.title, window.location.pathname + window.location.search);
  };

  useEffect(() => {
    // Check URL hash on page load
    const hash = window.location.hash.substring(1);
    if (hash) {
      const study = CASE_STUDIES_DATA.find(cs => cs.id === hash);
      if (study) {
        setSelectedCaseStudy(study);
        setIsModalOpen(true);
      }
    }
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Onze <span className="text-primary">Casestudies</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Duik diep in hoe we AI hebben ingezet om echte bedrijfsproblemen op te lossen en groei te stimuleren.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASE_STUDIES_DATA.map((cs) => (
          <CaseStudyCard key={cs.id} caseStudy={cs} onVisualize={handleVisualize} />
        ))}
      </div>

      {selectedCaseStudy && (
        <Dialog open={isModalOpen} onOpenChange={(open) => !open && closeModal()}>
          <DialogContent className="max-w-3xl h-[90vh] flex flex-col p-0">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="text-2xl font-headline">{selectedCaseStudy.title}</DialogTitle>
               <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onClick={closeModal}
                  aria-label="Sluiten"
                >
                  <X className="h-5 w-5" />
                </Button>
            </DialogHeader>
            <div className="flex-grow overflow-y-auto p-6">
              <CaseStudyVisualizer caseStudy={selectedCaseStudy} />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
