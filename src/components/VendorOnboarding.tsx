import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Users, MapPin, Calendar, DollarSign, Star } from 'lucide-react';

interface VendorOnboardingProps {
  onBackToHero: () => void;
}

const VendorOnboarding: React.FC<VendorOnboardingProps> = ({ onBackToHero }) => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join WedEasy as a Vendor
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with couples planning their dream wedding and grow your business
          </p>
          <Button 
            variant="outline" 
            onClick={onBackToHero}
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
          >
            ← Back to Home
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Why Choose WedEasy?</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-primary-glow" />
                <span className="text-white">Connect with engaged couples</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-glow" />
                <span className="text-white">Location-based matching</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary-glow" />
                <span className="text-white">Manage your availability</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-primary-glow" />
                <span className="text-white">Set your pricing tiers</span>
              </div>
              <div className="flex items-center space-x-3">
                <Camera className="w-5 h-5 text-primary-glow" />
                <span className="text-white">Showcase your portfolio</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-primary-glow" />
                <span className="text-white">Build your reputation</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Get Started Today</h2>
            <div className="space-y-4 text-white/90">
              <div className="flex items-start space-x-3">
                <div className="bg-primary-glow rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold text-primary">1</div>
                <span>Create your vendor profile</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary-glow rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold text-primary">2</div>
                <span>Upload your portfolio and pricing</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary-glow rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold text-primary">3</div>
                <span>Get matched with couples</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary-glow rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold text-primary">4</div>
                <span>Start booking weddings!</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary-dark text-white"
                onClick={() => alert('Login required! Please connect Supabase for authentication.')}
              >
                Sign Up as Vendor
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/80 text-sm">
            Join thousands of wedding professionals already using WedEasy to grow their business
          </p>
        </div>
      </div>
    </div>
  );
};

export default VendorOnboarding;