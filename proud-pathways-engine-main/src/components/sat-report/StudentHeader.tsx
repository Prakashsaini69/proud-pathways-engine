import React from 'react';
import { Card } from "@/components/ui/card";
import { Sparkles, Calendar, GraduationCap } from 'lucide-react';
import type { Student } from './types';

interface StudentHeaderProps {
  student: Student;
}

export const StudentHeader: React.FC<StudentHeaderProps> = ({ student }) => {
  return (
    <Card className="relative overflow-hidden shadow-celebration bg-gradient-to-r from-primary to-accent text-white">
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 animate-bounce">
        <Sparkles className="w-8 h-8 text-sunshine opacity-80" />
      </div>
      <div className="absolute bottom-4 left-4 opacity-30">
        <div className="text-6xl">🎉</div>
      </div>
      
      <div className="relative z-10 p-6">
        <div className="flex items-center gap-6">
          {/* Profile Avatar */}
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          
          {/* Student Info */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-display font-semibold mb-2">
              {student.name}
            </h1>
            <div className="flex items-center gap-4 text-white/90 mb-2">
              <span className="font-primary font-medium text-lg">Age {student.grade}</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{student.reportDate}</span>
              </div>
            </div>
          </div>
          
          {/* School Info */}
          <div className="text-right text-white/90">
            <div className="text-sm font-primary font-medium">Assessment Report</div>
            <div className="text-xs">Class of 2024</div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/20 rounded-lg px-4 py-3 backdrop-blur-sm border border-white/20">
          <p className="text-lg font-primary font-medium text-center">
            🌟 Your Skill AssessmentReport is Ready! 🌟
          </p>
        </div>
      </div>
    </Card>
  );
};