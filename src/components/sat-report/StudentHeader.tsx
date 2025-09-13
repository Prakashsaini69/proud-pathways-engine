import React from 'react';
import { Card } from "@/components/ui/card";
import { Sparkles, Calendar, GraduationCap } from 'lucide-react';
import type { Student } from './types';

interface StudentHeaderProps {
  student: Student;
}

export const StudentHeader: React.FC<StudentHeaderProps> = ({ student }) => {
  return (
    <Card className="relative overflow-hidden shadow-celebration bg-gradient-to-r from-primary to-accent p-8 text-white">
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 animate-bounce">
        <Sparkles className="w-8 h-8 text-sunshine opacity-80" />
      </div>
      <div className="absolute bottom-4 left-4 opacity-30">
        <div className="text-6xl">🎉</div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-semibold mb-1">
              {student.name}
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <span className="font-primary font-medium">Grade {student.grade}</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{student.reportDate}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/20 rounded-lg px-4 py-3 backdrop-blur-sm border border-white/20">
          <p className="text-lg font-primary font-medium text-center">
            🌟 Your Personal Growth Report is Ready! 🌟
          </p>
        </div>
      </div>
    </Card>
  );
};