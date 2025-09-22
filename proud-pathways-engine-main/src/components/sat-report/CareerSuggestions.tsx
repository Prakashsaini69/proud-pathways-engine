import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Briefcase, BookOpen } from 'lucide-react';
import type { Career } from './types';

interface CareerSuggestionsProps {
  careers: Career[];
}

export const CareerSuggestions: React.FC<CareerSuggestionsProps> = ({ careers }) => {
  const getSectorIcon = (sector: string) => {
    switch (sector.toLowerCase()) {
      case 'healthcare':
        return '🏥';
      case 'technology':
        return '💻';
      case 'business':
        return '💼';
      case 'creative':
        return '🎨';
      case 'education':
        return '📚';
      case 'science':
        return '🔬';
      default:
        return '⭐';
    }
  };

  const getSectorColor = (sector: string) => {
    switch (sector.toLowerCase()) {
      case 'healthcare':
        return 'from-mint/30 to-success/30';
      case 'technology':
        return 'from-primary/30 to-violet/30';
      case 'business':
        return 'from-coral/30 to-warning/30';
      case 'creative':
        return 'from-violet/30 to-coral/30';
      case 'education':
        return 'from-sunshine/30 to-mint/30';
      case 'science':
        return 'from-primary/30 to-success/30';
      default:
        return 'from-muted/30 to-accent/30';
    }
  };

  return (
    <Card className="shadow-card p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Target className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-display font-semibold text-foreground">
            Careers Where You'll Thrive 🌟
          </h3>
        </div>
        <p className="text-muted-foreground font-primary">
          Future paths that match your unique strengths and interests
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {careers.map((career, index) => (
          <Card 
            key={career.title}
            className={`relative overflow-hidden bg-gradient-to-br ${getSectorColor(career.sector)} p-6 border-2 border-white/30 shadow-soft hover:shadow-celebration transition-all duration-300 hover:scale-105`}
          >
            {/* Sector icon */}
            <div className="absolute top-4 right-4 text-3xl opacity-60">
              {getSectorIcon(career.sector)}
            </div>
            
            <div className="relative z-10">
              {/* Career title and icon */}
              <div className="flex items-start gap-3 mb-4">
                <div className="text-3xl">{career.icon}</div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-foreground text-lg mb-1">
                    {career.title}
                  </h4>
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-white/40 text-foreground border-white/30"
                  >
                    {career.sector}
                  </Badge>
                </div>
              </div>

              {/* Fit reason */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-primary font-medium text-foreground">
                    Why you'd love it:
                  </p>
                </div>
                <p className="text-sm text-muted-foreground font-primary leading-relaxed pl-6">
                  {career.fitReason}
                </p>
              </div>

              {/* Daily life preview */}
              <div className="mb-4">
                <p className="text-sm font-primary font-medium text-foreground mb-2">
                  🌅 Your day might look like:
                </p>
                <p className="text-sm text-muted-foreground font-primary leading-relaxed italic">
                  "{career.dailyLifePreview}"
                </p>
              </div>

              {/* Key subjects */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <p className="text-sm font-primary font-medium text-foreground">
                    Key subjects to focus on:
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {career.keySubjects.map((subject) => (
                    <Badge 
                      key={subject}
                      variant="outline" 
                      className="text-xs bg-white/60 text-foreground border-primary/30 hover:bg-primary/10"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};