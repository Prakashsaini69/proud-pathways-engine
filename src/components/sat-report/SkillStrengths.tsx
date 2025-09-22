import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Zap, TrendingUp } from 'lucide-react';
import type { Skill } from './types';

interface SkillStrengthsProps {
  skills: Skill[];
}

export const SkillStrengths: React.FC<SkillStrengthsProps> = ({ skills }) => {
  const strengths = skills.filter(skill => skill.category === 'strength');
  const growth = skills.filter(skill => skill.category === 'growth');

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-success';
    if (score >= 60) return 'bg-warning';
    return 'bg-primary';
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Power Skills */}
      <Card className="shadow-card p-6 bg-gradient-to-br from-success/10 to-mint/20">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="w-6 h-6 text-success" />
            <h3 className="text-xl font-display font-semibold text-black">
              Your Power Skills 💪
            </h3>
          </div>
          <p className="text-sm text-black font-primary">
            These are your natural superpowers
          </p>
        </div>

        <div className="space-y-6">
          {strengths.map((skill) => (
            <div key={skill.name} className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/40">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{skill.icon}</div>
                  <div>
                    <h4 className="font-primary font-semibold text-black">
                      {skill.name}
                    </h4>
                    <Badge variant="secondary" className="text-xs bg-success/20 text-success-foreground">
                      {skill.score}% Strong
                    </Badge>
                  </div>
                </div>
              </div>
              
              <Progress 
                value={skill.score} 
                className="h-2 mb-3 bg-white/40"
              />
              
              <p className="text-sm text-black font-primary italic">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Level Up Areas */}
      <Card className="shadow-card p-6 bg-gradient-to-br from-warning/10 to-coral/20">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-6 h-6 text-warning" />
            <h3 className="text-xl font-display font-semibold text-black">
              Level Up Next 🚀
            </h3>
          </div>
          <p className="text-sm text-black font-primary">
            Amazing growth opportunities ahead
          </p>
        </div>

        <div className="space-y-6">
          {growth.map((skill) => (
            <div key={skill.name} className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/40">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{skill.icon}</div>
                  <div>
                    <h4 className="font-primary font-semibold text-black">
                      {skill.name}
                    </h4>
                    <Badge variant="secondary" className="text-xs bg-warning/20 text-warning-foreground">
                      Growing ({skill.score}%)
                    </Badge>
                  </div>
                </div>
              </div>
              
              <Progress 
                value={skill.score} 
                className="h-2 mb-3 bg-white/40"
              />
              
              <p className="text-sm text-black font-primary italic">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};