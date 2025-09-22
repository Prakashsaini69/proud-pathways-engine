import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RingChart from "@/components/animata/graphs/ring-chart";
import type { PersonalityMeterData } from './types';

interface PersonalityProfileProps {
  data: PersonalityMeterData;
}

export const PersonalityProfile: React.FC<PersonalityProfileProps> = ({ data }) => {
  // Calculate scores for all three types based on the main score
  const getPersonalityScores = (score: number, type: string) => {
    if (type === 'introvert') {
      return {
        introvert: 100 - score,
        ambivert: Math.abs(50 - score) < 20 ? 80 : 30,
        extrovert: score
      };
    } else if (type === 'extrovert') {
      return {
        introvert: 100 - score,
        ambivert: Math.abs(50 - score) < 20 ? 80 : 30,
        extrovert: score
      };
    } else { // ambivert
      return {
        introvert: Math.abs(score - 25),
        ambivert: 85,
        extrovert: Math.abs(score - 75)
      };
    }
  };

  const scores = getPersonalityScores(data.score, data.type);
  
  const rings = [
    {
      progress: scores.introvert,
      trackClassName: "text-violet/20",
      progressClassName: "text-violet",
    },
    {
      progress: scores.ambivert,
      trackClassName: "text-mint/20", 
      progressClassName: "text-mint",
    },
    {
      progress: scores.extrovert,
      trackClassName: "text-coral/20",
      progressClassName: "text-coral",
    }
  ];

  const personalityTypes = [
    {
      name: "Introvert",
      score: scores.introvert,
      emoji: "🤫",
      color: "bg-violet/10 text-violet border-violet/20",
      description: "Thoughtful • Reflective • Deep Thinker"
    },
    {
      name: "Ambivert", 
      score: scores.ambivert,
      emoji: "⚖️",
      color: "bg-mint/10 text-mint border-mint/20",
      description: "Balanced • Adaptable • Versatile"
    },
    {
      name: "Extrovert",
      score: scores.extrovert, 
      emoji: "🔊",
      color: "bg-coral/10 text-coral border-coral/20",
      description: "Energetic • Social • Expressive"
    }
  ];

  return (
    <Card className="p-6 bg-gradient-subtle border-0 shadow-celebration animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-display font-bold text-black mb-2">
          ✨ Your Personality Dimensions
        </h2>
        <p className="text-black font-primary">
          Discover the unique blend of traits that make you, you!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Ring Chart */}
        <div className="flex-shrink-0">
          <RingChart 
            rings={rings}
            size={80}
            width={16}
            gap={6}
            className="bg-background/80 backdrop-blur-sm"
          />
        </div>

        {/* Personality Type Cards */}
        <div className="flex-1 grid gap-4">
          {personalityTypes.map((type, index) => (
            <div 
              key={type.name}
              className={`p-4 rounded-xl border-2 ${type.color} transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{type.emoji}</span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-black">{type.name}</h3>
                    <p className="text-sm text-black">{type.description}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="font-bold">
                  {Math.round(type.score)}%
                </Badge>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-current rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${type.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-background/40 rounded-xl border border-border/20">
        <p className="text-center text-sm text-black font-primary">
          <span className="font-semibold text-black">Remember:</span> Your personality is beautifully complex! 
          These dimensions work together to create your unique social style. 🌈
        </p>
      </div>
    </Card>
  );
};