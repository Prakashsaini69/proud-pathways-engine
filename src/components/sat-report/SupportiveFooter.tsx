import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Target, Users } from 'lucide-react';

export const SupportiveFooter: React.FC = () => {
  return (
    <Card className="shadow-card bg-gradient-to-r from-mint/20 to-sunshine/20 p-8">
      <div className="text-center mb-6">
        <div className="text-4xl mb-3">🎊</div>
        <h3 className="text-2xl font-display font-semibold text-black mb-2">
          You're Amazing! Keep Growing! 🌱
        </h3>
        <p className="text-black font-primary max-w-md mx-auto">
          This report is just the beginning of your incredible journey. Every step you take is progress worth celebrating.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {/* Share with mentor */}
        <Card className="bg-white/60 backdrop-blur-sm p-4 border border-white/40 text-center hover:shadow-soft transition-all duration-300">
          <Share2 className="w-8 h-8 text-coral mx-auto mb-2" />
          <h4 className="font-display font-semibold text-black mb-2">
            Share Your Results 💌
          </h4>
          <p className="text-xs text-black font-primary mb-3">
            Show a parent, teacher, or mentor what makes you special
          </p>
          <Button 
            variant="outline" 
            size="sm"
            className="w-full bg-white/40 border-coral/30 text-coral-foreground hover:bg-coral/10"
          >
            Share Report
          </Button>
        </Card>

        {/* Set goals */}
        <Card className="bg-white/60 backdrop-blur-sm p-4 border border-white/40 text-center hover:shadow-soft transition-all duration-300">
          <Target className="w-8 h-8 text-primary mx-auto mb-2" />
          <h4 className="font-display font-semibold text-black mb-2">
            Set Your Goals 🚀
          </h4>
          <p className="text-xs text-black font-primary mb-3">
            Pick one thing from this report to work on this month
          </p>
          <Button 
            variant="outline" 
            size="sm"
            className="w-full bg-white/40 border-primary/30 text-primary-foreground hover:bg-primary/10"
          >
            Plan Goals
          </Button>
        </Card>

        {/* Connect with others */}
        <Card className="bg-white/60 backdrop-blur-sm p-4 border border-white/40 text-center hover:shadow-soft transition-all duration-300">
          <Users className="w-8 h-8 text-violet mx-auto mb-2" />
          <h4 className="font-display font-semibold text-black mb-2">
            Find Your Tribe 🤝
          </h4>
          <p className="text-xs text-black font-primary mb-3">
            Connect with others who share your strengths and interests
          </p>
          <Button 
            variant="outline" 
            size="sm"
            className="w-full bg-white/40 border-violet/30 text-violet-foreground hover:bg-violet/10"
          >
            Explore Communities
          </Button>
        </Card>
      </div>

      {/* Inspirational message */}
      <div className="mt-8 text-center">
        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/40 max-w-lg mx-auto">
          <Heart className="w-6 h-6 text-coral mx-auto mb-2" />
          <p className="font-secondary font-semibold text-black italic">
            "Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown."
          </p>
          <p className="text-sm text-black font-primary mt-2">
            — Your journey starts now ✨
          </p>
        </div>
      </div>
    </Card>
  );
};