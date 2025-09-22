import React from 'react';
import SATReportTemplate from '@/components/sat-report/SATReportTemplate';
import { sampleReportData } from '@/components/sat-report/sampleData';
import heroImage from '@/assets/sat-report-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4">
        {/* Demo header with hero image */}
        <div className="text-center mb-8">
          <div className="relative mb-6 rounded-2xl overflow-hidden shadow-celebration max-w-4xl mx-auto">
            <img 
              src={heroImage} 
              alt="Students celebrating their unique personalities and achievements" 
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end justify-center pb-6">
              <div className="text-white text-center">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
                  SAT Report Template Demo
                </h1>
                <p className="font-primary opacity-90">
                  A modular, emotionally supportive report template for student assessments
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* SAT Report Template */}
        <SATReportTemplate data={sampleReportData} />
      </div>
    </div>
  );
};

export default Index;
