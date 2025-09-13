import type { SATReportData } from './types';

export const sampleReportData: SATReportData = {
  student: {
    name: "Jordan Rivera",
    grade: "10",
    reportDate: "March 15, 2024"
  },
  
  archetype: {
    title: "The Innovative Strategist",
    description: "You're a natural problem-solver who loves finding creative solutions to complex challenges. You think ahead, plan carefully, and inspire others with your vision for the future.",
    motivationalQuote: "You're not just smart — you're strategic. Let's build the future, your way!",
    icon: "🧠"
  },
  
  personalityMeter: {
    type: "ambivert",
    score: 65,
    description: "You're perfectly balanced! You can energize from both social interactions and quiet reflection. This flexibility helps you adapt to any situation and connect with all types of people."
  },
  
  bigFiveTraits: [
    {
      name: "Openness to Experience",
      score: 92,
      emoji: "🌈",
      description: "You love exploring new ideas and creative possibilities!",
      isTopTrait: true
    },
    {
      name: "Conscientiousness",
      score: 85,
      emoji: "⚡",
      description: "You're organized, reliable, and always follow through!",
      isTopTrait: true
    },
    {
      name: "Extraversion",
      score: 78,
      emoji: "🎉",
      description: "You enjoy connecting with others and sharing energy!",
      isTopTrait: true
    },
    {
      name: "Agreeableness",
      score: 72,
      emoji: "🤝",
      description: "You're cooperative and care about others' wellbeing!",
      isTopTrait: false
    },
    {
      name: "Neuroticism",
      score: 35,
      emoji: "😌",
      description: "You stay calm and handle stress really well!",
      isTopTrait: false
    }
  ],
  
  skills: [
    {
      name: "Creative Problem Solving",
      score: 94,
      category: "strength",
      description: "Creativity is your superpower. Keep sketching, writing, and dreaming big!",
      icon: "💡"
    },
    {
      name: "Strategic Thinking",
      score: 89,
      category: "strength",
      description: "You see the big picture and plan amazing paths forward.",
      icon: "🎯"
    },
    {
      name: "Leadership",
      score: 82,
      category: "strength",
      description: "People naturally follow your vision and trust your guidance.",
      icon: "👑"
    },
    {
      name: "Public Speaking",
      score: 58,
      category: "growth",
      description: "You have great ideas! Building confidence in sharing them will unlock even more opportunities.",
      icon: "🎤"
    },
    {
      name: "Time Management",
      score: 64,
      category: "growth",
      description: "With better planning systems, you'll have more time for the things you love most.",
      icon: "⏰"
    }
  ],
  
  aiInsights: [
    {
      type: "personality-strengths",
      title: "Your Personality Superpowers",
      emoji: "✨",
      content: "Jordan, you're incredibly rare! Your combination of high Openness and Conscientiousness makes you both a creative dreamer AND someone who actually makes things happen. This is the secret sauce of successful innovators.\n\nYou don't just have wild ideas — you organize them, plan them out, and turn them into reality. Most people are either creative OR organized, but you're both. That's your competitive advantage!\n\nYour balanced social energy (ambivert style) means you can brainstorm with teams AND work independently to develop your ideas. You're like a creativity Swiss Army knife!"
    },
    {
      type: "personality-improvement",
      title: "Growing Your Emotional Toolkit",
      emoji: "🔧",
      content: "Your low neuroticism is actually a superpower — you stay calm under pressure! But sometimes this might make you seem less concerned about things that stress others out.\n\nTry checking in with friends or teammates when they seem worried about projects you're handling easily. Your calm energy can actually help them feel better, but they need to know you care about their concerns too.\n\nPractice saying things like 'I can see this is stressing you out — let's figure out how to make this easier together.'"
    },
    {
      type: "skill-strengths",
      title: "Your Skill Superpowers",
      emoji: "🎯",
      content: "WOW! Your creative problem-solving score of 94% is off the charts! You see solutions where others see roadblocks. This skill will serve you in ANY career path you choose.\n\nYour strategic thinking (89%) combined with leadership abilities (82%) creates a powerful combo. You don't just solve problems — you help others see the path forward too.\n\nThese skills suggest you'd thrive in roles where you can:\n• Design new systems or products\n• Lead innovation projects\n• Help organizations solve complex challenges\n• Bridge the gap between creative vision and practical execution"
    },
    {
      type: "skill-improvement",
      title: "Leveling Up Your Impact",
      emoji: "📈",
      content: "Your public speaking growth area (58%) is actually exciting! You already have amazing ideas and natural leadership — you just need more confidence sharing them with larger groups.\n\nStart small: practice explaining your creative solutions to family, then friends, then maybe volunteer to present a project in class. Each time will build your confidence.\n\nTime management (64%) is super common for creative types! Your brain has so many interesting ideas that it's hard to focus on just one. Try time-blocking: set specific hours for creative exploration vs. execution time.\n\nRemember: these aren't weaknesses, they're your next growth adventures!"
    },
    {
      type: "gen-z-fit",
      title: "Your Gen Z Superpowers",
      emoji: "🔮",
      content: "Jordan, you're perfectly positioned for the future of work! Gen Z values innovation, authenticity, and making a meaningful impact — all things you naturally excel at.\n\nYour generation is changing how work happens:\n• Remote/hybrid teams need strategic thinkers who can lead virtually\n• Companies desperately need creative problem-solvers for complex global challenges\n• Your generation values purpose over paychecks — your visionary thinking will help create work that matters\n\nYou're not just preparing for jobs that exist now — you're probably going to CREATE the jobs of the future. Your combination of creativity, strategy, and leadership is exactly what tomorrow's world needs.\n\nStay curious, keep creating, and remember: the problems you'll solve haven't even been discovered yet!"
    }
  ],
  
  careerSuggestions: [
    {
      title: "Innovation Strategy Consultant",
      fitReason: "Your strategic thinking + creativity combo is perfect for helping companies solve complex challenges and develop breakthrough products.",
      dailyLifePreview: "You might spend mornings researching market trends, afternoons brainstorming with diverse teams, and evenings designing presentations that get executives excited about the future.",
      keySubjects: ["Business", "Psychology", "Design Thinking", "Data Analysis"],
      icon: "💼",
      sector: "Business"
    },
    {
      title: "UX/Product Design Leader",
      fitReason: "You naturally understand both user needs and business strategy. Your leadership skills help teams create products people actually love.",
      dailyLifePreview: "You could be interviewing users to understand their frustrations, sketching solutions on digital whiteboards, and mentoring junior designers who look up to your creative vision.",
      keySubjects: ["Design", "Psychology", "Computer Science", "Art"],
      icon: "🎨",
      sector: "Technology"
    },
    {
      title: "Social Impact Entrepreneur",
      fitReason: "Your problem-solving skills + leadership + high conscientiousness make you perfect for creating businesses that solve real-world problems.",
      dailyLifePreview: "You might be developing sustainable solutions for climate change, pitching to investors who believe in your vision, and building teams of passionate people changing the world.",
      keySubjects: ["Environmental Science", "Business", "Communication", "Ethics"],
      icon: "🌍",
      sector: "Business"
    },
    {
      title: "Healthcare Innovation Specialist",
      fitReason: "Healthcare desperately needs creative strategists who can improve systems while keeping patients at the center of everything.",
      dailyLifePreview: "You could be designing apps that help people manage chronic conditions, working with doctors to streamline patient care, and presenting research that saves lives.",
      keySubjects: ["Biology", "Health Sciences", "Technology", "Statistics"],
      icon: "🏥",
      sector: "Healthcare"
    }
  ]
};