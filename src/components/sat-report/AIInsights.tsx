import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight, Sparkles } from 'lucide-react';
import type { AIInsight } from './types';

interface AIInsightsProps {
  insights: AIInsight[];
}

export const AIInsights: React.FC<AIInsightsProps> = ({ insights }) => {
  const [openInsights, setOpenInsights] = useState<string[]>([]);

  const toggleInsight = (type: string) => {
    setOpenInsights(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'personality-strengths':
        return 'from-mint/20 to-success/20';
      case 'personality-improvement':
        return 'from-warning/20 to-sunshine/20';
      case 'skill-strengths':
        return 'from-coral/20 to-violet/20';
      case 'skill-improvement':
        return 'from-primary/20 to-mint/20';
      case 'gen-z-fit':
        return 'from-violet/20 to-coral/20';
      default:
        return 'from-muted/20 to-accent/20';
    }
  };

  return (
    <Card className="shadow-card p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-display font-semibold text-foreground">
            AI-Powered Insights About You
          </h3>
        </div>
        <p className="text-muted-foreground font-primary">
          Here's what makes you amazing — and what'll make you unstoppable
        </p>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => (
          <Collapsible 
            key={insight.type}
            open={openInsights.includes(insight.type)}
            onOpenChange={() => toggleInsight(insight.type)}
          >
            <CollapsibleTrigger asChild>
              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-soft bg-gradient-to-r ${getInsightColor(insight.type)} p-4 border-2 border-transparent hover:border-primary/20`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{insight.emoji}</div>
                    <h4 className="font-display font-semibold text-foreground text-left">
                      {insight.title}
                    </h4>
                  </div>
                   {openInsights.includes(insight.type) ? (
                    <ChevronDown className="w-5 h-5 text-foreground/60 transition-transform" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-foreground/60 transition-transform" />
                  )}
                </div>
              </Card>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="pt-2">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-white/40 ml-2 shadow-soft">
                <p className="font-primary text-foreground leading-relaxed whitespace-pre-line">
                  {insight.content}
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </Card>
  );
};