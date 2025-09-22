import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Quote } from 'lucide-react';
import type { Archetype } from './types';

interface ArchetypeSectionProps {
  archetype: Archetype;
}

export const ArchetypeSection: React.FC<ArchetypeSectionProps> = ({ archetype }) => {
  return (
    <Card className="relative overflow-hidden shadow-card bg-gradient-to-br from-violet/20 to-coral/20 p-8">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="text-9xl absolute top-4 right-4">{archetype.icon}</div>
      </div>
      
      <div className="relative z-10 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <Badge 
            variant="secondary" 
            className="px-6 py-3 text-lg font-display font-semibold bg-gradient-strength text-black border-0 shadow-soft"
          >
            <Crown className="w-5 h-5 mr-2" />
            Your Archetype
          </Badge>
        </div>
        
        {/* Main title */}
        <div className="mb-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-4">
            <span className="text-3xl mr-3">{archetype.icon}</span>
            {archetype.title}
          </h2>
          <p className="text-lg font-primary text-black max-w-2xl mx-auto leading-relaxed">
            {archetype.description}
          </p>
        </div>
        
        {/* Motivational quote */}
        <div className="relative max-w-lg mx-auto">
          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-coral opacity-30" />
          <blockquote className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40 shadow-soft">
            <p className="text-xl font-secondary font-semibold text-black italic">
              "{archetype.motivationalQuote}"
            </p>
          </blockquote>
        </div>
      </div>
    </Card>
  );
};