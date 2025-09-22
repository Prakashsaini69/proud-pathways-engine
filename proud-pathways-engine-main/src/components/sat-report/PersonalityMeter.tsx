import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PersonalityMeterData } from './types';

interface PersonalityMeterProps {
  score: PersonalityMeterData;
}

export const PersonalityMeter: React.FC<PersonalityMeterProps> = ({ score }) => {
  const getPosition = () => {
    return `${score.score}%`;
  };

  const getEmoji = () => {
    switch (score.type) {
      case 'introvert':
        return '🤫';
      case 'extrovert':
        return '🔊';
      case 'ambivert':
        return '⚖️';
      default:
        return '🙂';
    }
  };

  const getLabel = () => {
    switch (score.type) {
      case 'introvert':
        return 'Quiet Thinker';
      case 'extrovert':
        return 'People-Powered';
      case 'ambivert':
        return 'Balance Boss';
      default:
        return 'Balanced';
    }
  };

  return (
    <Card className="shadow-card p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
          Your Social Energy Style
        </h3>
        <p className="text-muted-foreground font-primary">
          Everyone has their own way of connecting with the world
        </p>
      </div>

      {/* Visual meter */}
      <div className="max-w-md mx-auto">
        {/* Labels */}
        <div className="flex justify-between items-center mb-4 text-sm font-primary font-medium">
          <span className="text-center">
            🤫<br />Quiet Thinker
          </span>
          <span className="text-center">
            ⚖️<br />Balance Boss
          </span>
          <span className="text-center">
            🔊<br />People-Powered
          </span>
        </div>

        {/* Meter track */}
        <div className="relative h-6 bg-gradient-to-r from-mint via-sunshine to-coral rounded-full mb-6 overflow-hidden">
          {/* Position indicator */}
          <div 
            className="absolute top-0 h-full w-1 bg-white shadow-lg transition-all duration-500 ease-out"
            style={{ left: getPosition(), transform: 'translateX(-50%)' }}
          />
          {/* Moving indicator */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-celebration flex items-center justify-center transition-all duration-500 ease-out border-2 border-primary"
            style={{ left: getPosition(), transform: 'translateX(-50%) translateY(-50%)' }}
          >
            <span className="text-sm">{getEmoji()}</span>
          </div>
        </div>

        {/* Result badge */}
        <div className="text-center">
          <Badge 
            variant="secondary" 
            className="px-4 py-2 text-base font-primary font-semibold bg-gradient-growth text-foreground border-0 mb-3"
          >
            {getEmoji()} {getLabel()}
          </Badge>
          <p className="text-sm text-muted-foreground font-primary leading-relaxed">
            {score.description}
          </p>
        </div>
      </div>
    </Card>
  );
};