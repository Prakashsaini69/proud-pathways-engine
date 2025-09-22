import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { ChartContainer } from "@/components/ui/chart";
import type { Skill } from './types';

interface SkillsImprovementProps {
  skills: Skill[];
}

export const SkillsImprovement: React.FC<SkillsImprovementProps> = ({ skills }) => {
  // Generate improvement data over time
  const improvementData = [
    { skill: 'Achievement', currentYear: 75, previousYear: 60, color: '#8B5CF6' },
    { skill: 'Relationship', currentYear: 45, previousYear: 30, color: '#F59E0B' },
    { skill: 'Leadership', currentYear: 90, previousYear: 70, color: '#8B5CF6' },
    { skill: 'Learning', currentYear: 85, previousYear: 65, color: '#F59E0B' },
    { skill: 'Nurturing', currentYear: 70, previousYear: 55, color: '#8B5CF6' }
  ];

  return (
    <Card className="shadow-card p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
          Skills Improvement
        </h3>
        <p className="text-muted-foreground font-primary text-sm mb-4">
          These are the top skills I improved upon taking the Assessment Test between the two 
          dates mentioned on the right-hand side. Learn more about the test by clicking here.
        </p>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-500 rounded"></div>
            <span className="text-xs text-muted-foreground">Date: 12/12/2020</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-400 rounded"></div>
            <span className="text-xs text-muted-foreground">Year 12/11/2021</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={improvementData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="skill" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Bar dataKey="previousYear" fill="#F59E0B" radius={[2, 2, 0, 0]} />
            <Bar dataKey="currentYear" fill="#8B5CF6" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insights Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-muted/20 rounded-lg">
          <div className="text-2xl mb-2">⏱️</div>
          <div className="text-lg font-semibold text-foreground">2h 15m</div>
          <div className="text-xs text-muted-foreground">Avg Test Duration</div>
        </div>
        
        <div className="text-center p-4 bg-muted/20 rounded-lg">
          <div className="text-2xl mb-2">💬</div>
          <div className="text-lg font-semibold text-foreground">64%</div>
          <div className="text-xs text-muted-foreground">Overall Engagement</div>
        </div>
        
        <div className="text-center p-4 bg-muted/20 rounded-lg">
          <div className="text-2xl mb-2">📊</div>
          <div className="text-lg font-semibold text-foreground">85%</div>
          <div className="text-xs text-muted-foreground">Progress Rate</div>
        </div>
      </div>
    </Card>
  );
};