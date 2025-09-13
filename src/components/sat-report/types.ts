export interface Student {
  name: string;
  grade: string;
  reportDate: string;
}

export interface Archetype {
  title: string;
  description: string;
  motivationalQuote: string;
  icon: string;
}

export interface PersonalityMeterData {
  type: 'introvert' | 'extrovert' | 'ambivert';
  score: number; // 0-100
  description: string;
}

export interface BigFiveTrait {
  name: string;
  score: number; // 0-100
  emoji: string;
  description: string;
  isTopTrait: boolean;
}

export interface Skill {
  name: string;
  score: number; // 0-100
  category: 'strength' | 'growth';
  description: string;
  icon: string;
}

export interface AIInsight {
  type: 'personality-strengths' | 'personality-improvement' | 'skill-strengths' | 'skill-improvement' | 'gen-z-fit';
  title: string;
  content: string;
  emoji: string;
}

export interface Career {
  title: string;
  fitReason: string;
  dailyLifePreview: string;
  keySubjects: string[];
  icon: string;
  sector: string;
}

export interface SATReportData {
  student: Student;
  archetype: Archetype;
  personalityMeter: PersonalityMeterData;
  bigFiveTraits: BigFiveTrait[];
  skills: Skill[];
  aiInsights: AIInsight[];
  careerSuggestions: Career[];
}