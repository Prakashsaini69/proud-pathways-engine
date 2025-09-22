import React from 'react';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import type { Skill } from './types';

interface SkillsProfileProps {
  skills: Skill[];
}

interface SkillCategory {
  name: string;
  color: string;
  bgColor: string;
  icon: string;
  skills: Skill[];
  totalModules: number;
  completedModules: number;
}

export const SkillsProfile: React.FC<SkillsProfileProps> = ({ skills }) => {
  // Group skills by category for circular indicators
  const skillCategories: SkillCategory[] = [
    {
      name: 'Personal Development',
      color: 'rgb(34, 197, 237)', // Cyan
      bgColor: 'bg-cyan-500',
      icon: '🧠',
      skills: skills.filter(s => s.category === 'strength').slice(0, 3),
      totalModules: 5,
      completedModules: 4
    },
    {
      name: 'Active Learning',
      color: 'rgb(236, 72, 153)', // Pink
      bgColor: 'bg-pink-500',
      icon: '🎯',
      skills: skills.filter(s => s.category === 'growth').slice(0, 3),
      totalModules: 5,
      completedModules: 3
    },
    {
      name: 'Communication',
      color: 'rgb(34, 197, 94)', // Green
      bgColor: 'bg-green-500',
      icon: '💬',
      skills: skills.slice(2, 5),
      totalModules: 5,
      completedModules: 5
    },
    {
      name: 'Problem Solving',
      color: 'rgb(249, 115, 22)', // Orange
      bgColor: 'bg-orange-500',
      icon: '🔧',
      skills: skills.slice(1, 4),
      totalModules: 5,
      completedModules: 4
    },
    {
      name: 'Leadership',
      color: 'rgb(139, 92, 246)', // Purple
      bgColor: 'bg-purple-500',
      icon: '👑',
      skills: skills.slice(0, 3),
      totalModules: 5,
      completedModules: 3
    }
  ];

  const CircularProgress = ({ percentage, color, size = 80 }: { percentage: number; color: string; size?: number }) => {
    const radius = (size - 8) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgb(229, 231, 235)"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-black">{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <Card className="shadow-card p-6">
      <div className="mb-8">
        <h3 className="text-2xl font-display font-semibold text-black mb-2">
          Skills Profile
        </h3>
        <p className="text-black font-primary">
          Over the past 4 years, I have worked on developing the following skills.
        </p>
      </div>

      {/* Circular Progress Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
        {skillCategories.map((category, index) => {
          const percentage = Math.round((category.completedModules / category.totalModules) * 100);
          
          return (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <CircularProgress 
                  percentage={percentage} 
                  color={category.color}
                  size={80}
                />
              </div>
              <h4 className="font-primary font-semibold text-sm text-black mb-1">
                {category.name}
              </h4>
              <div className="flex items-center justify-center gap-1 text-xs text-black">
                <span className="text-base">{category.icon}</span>
                <span>{category.completedModules} Modules</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Skills Breakdown */}
      <div className="grid md:grid-cols-5 gap-4">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-3">
            <h5 className="font-primary font-semibold text-sm text-black border-b pb-1">
              {category.name.split(' ')[0]} Skills
            </h5>
            
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-primary text-black">
                    {skill.name}
                  </span>
                  <span className="text-xs font-semibold text-black">
                    {skill.score}%
                  </span>
                </div>
                <Progress 
                  value={skill.score} 
                  className="h-1.5"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};