import React from 'react';
import { Card } from "@/components/ui/card";
import { StudentHeader } from './StudentHeader';
import { ArchetypeSection } from './ArchetypeSection';
import { PersonalityMeter } from './PersonalityMeter';
import { PersonalityProfile } from './PersonalityProfile';
import { BigFiveTraits } from './BigFiveTraits';
import { SkillStrengths } from './SkillStrengths';
import { SkillsProfile } from './SkillsProfile';
import { SkillsImprovement } from './SkillsImprovement';
import { AIInsights } from './AIInsights';
import { CareerSuggestions } from './CareerSuggestions';
import { SupportiveFooter } from './SupportiveFooter';
import type { SATReportData } from './types';

interface SATReportTemplateProps {
  data: SATReportData;
  className?: string;
}

export const SATReportTemplate: React.FC<SATReportTemplateProps> = ({ 
  data, 
  className = "" 
}) => {
  return (
    <div className={`max-w-4xl mx-auto p-6 space-y-8 ${className}`}>
      {/* Student Identity Header */}
      <StudentHeader student={data.student} />
      
      {/* Archetype Hero Section */}
      <ArchetypeSection archetype={data.archetype} />
      
      {/* Personality Meter */}
      <PersonalityMeter score={data.personalityMeter} />
      
      {/* Personality Profile */}
      <PersonalityProfile data={data.personalityMeter} />
      
      {/* Big Five Traits */}
      <BigFiveTraits traits={data.bigFiveTraits} />
      
      {/* Skills Profile */}
      <SkillsProfile skills={data.skills} />
      
      {/* Skills Section */}
      <SkillStrengths skills={data.skills} />
      
      {/* Skills Improvement */}
      <SkillsImprovement skills={data.skills} />
      
      {/* AI Insights */}
      <AIInsights insights={data.aiInsights} />
      
      {/* Career Suggestions */}
      <CareerSuggestions careers={data.careerSuggestions} />
      
      {/* Supportive Footer */}
      <SupportiveFooter />
    </div>
  );
};

export default SATReportTemplate;