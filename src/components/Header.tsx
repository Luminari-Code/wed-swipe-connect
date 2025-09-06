import React from 'react';
import { Heart, MessageCircle, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-card border-b border-border px-4 py-3 sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-gradient-hero p-2 rounded-full">
            <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
          </div>
          <h1 className="text-xl font-bold text-primary">WedEasy</h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;