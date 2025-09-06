import React from 'react';
import { Heart, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-wedding.jpg';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful wedding couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card border border-border/50">
          {/* Logo and Title */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-hero p-4 rounded-full shadow-romantic">
              <Heart className="w-8 h-8 text-primary-foreground" fill="currentColor" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">WedEasy</h1>
          </div>

          {/* Tagline */}
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Find Your Perfect Wedding Team
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Swipe through the best wedding vendors in your area. From photographers to florists, 
            discover and connect with professionals who'll make your special day unforgettable.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-wedding-rose/20 p-4 rounded-full">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground">Smart Matching</h3>
              <p className="text-sm text-muted-foreground">Find vendors that match your budget, style, and date</p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="bg-wedding-sage/20 p-4 rounded-full">
                <Sparkles className="w-6 h-6 text-secondary-dark" />
              </div>
              <h3 className="font-semibold text-card-foreground">Curated Quality</h3>
              <p className="text-sm text-muted-foreground">Only verified, highly-rated professionals</p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="bg-wedding-gold/20 p-4 rounded-full">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-card-foreground">Easy Communication</h3>
              <p className="text-sm text-muted-foreground">Connect instantly with your perfect matches</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={onGetStarted}
              className="text-lg px-8 py-6"
            >
              <Heart className="w-5 h-5 mr-2" />
              Start Matching
            </Button>
            <Button 
              variant="romantic" 
              size="lg"
              className="text-lg px-8 py-6"
            >
              <Users className="w-5 h-5 mr-2" />
              Join as Vendor
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Join thousands of couples who found their dream wedding team
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;