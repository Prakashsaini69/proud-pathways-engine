import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star } from 'lucide-react';
import type { BigFiveTrait } from './types';

interface BigFiveTraitsProps {
  traits: BigFiveTrait[];
}

export const BigFiveTraits: React.FC<BigFiveTraitsProps> = ({ traits }) => {
  const topTraits = traits.filter(trait => trait.isTopTrait);
  
  return (
    <Card className="shadow-card p-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
          Your Personality Superpowers
        </h3>
        <p className="text-muted-foreground font-primary">
          These traits make you uniquely amazing
        </p>
      </div>

      {/* Top 3 Traits as Hero Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {topTraits.map((trait, index) => (
          <Card 
            key={trait.name}
            className="relative overflow-hidden bg-gradient-to-br from-sunshine/30 to-mint/30 p-4 border-2 border-primary/20 shadow-soft hover:shadow-celebration transition-all duration-300"
          >
            <div className="absolute top-2 right-2">
              <Star className="w-5 h-5 text-coral fill-coral" />
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">{trait.emoji}</div>
              <h4 className="font-display font-semibold text-foreground mb-1">
                {trait.name}
              </h4>
              <div className="text-2xl font-bold text-primary mb-2">
                {trait.score}%
              </div>
              <p className="text-xs text-muted-foreground font-primary leading-tight">
                {trait.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* All Traits Progress Bars */}
      <div className="space-y-4">
        <h4 className="text-lg font-display font-semibold text-foreground text-center mb-4">
          Your Complete Personality Profile
        </h4>
        
        {traits.map((trait) => (
          <div key={trait.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{trait.emoji}</span>
                <span className="font-primary font-medium text-foreground">
                  {trait.name}
                </span>
                {trait.isTopTrait && (
                  <Badge variant="secondary" className="text-xs bg-coral/20 text-coral-foreground border-coral/30">
                    Top 3
                  </Badge>
                )}
              </div>
              <span className="font-primary font-semibold text-primary">
                {trait.score}%
              </span>
            </div>
            <Progress 
              value={trait.score} 
              className="h-3 bg-muted"
            />
          </div>
        ))}
      </div>
    </Card>
  );
};