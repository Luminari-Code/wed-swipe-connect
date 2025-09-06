import React, { useState } from 'react';
import SwipeCard from './SwipeCard';
import { Button } from '@/components/ui/button';
import { RotateCcw, Heart, X } from 'lucide-react';

// Mock data for demo
const mockProviders = [
  {
    id: '1',
    name: 'Emma\'s Wedding Photography',
    category: 'Photography',
    location: 'San Francisco, CA',
    rating: 4.9,
    reviewCount: 127,
    priceRange: '$2,500 - $4,500',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=600&fit=crop',
    description: 'Capturing your most precious moments with artistic vision and emotional depth. Specializing in romantic, candid wedding photography.',
    portfolio: [
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=600&fit=crop'
    ]
  },
  {
    id: '2',
    name: 'Garden Valley Venue',
    category: 'Venues',
    location: 'Napa Valley, CA',
    rating: 4.8,
    reviewCount: 89,
    priceRange: '$8,000 - $15,000',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=600&fit=crop',
    description: 'Breathtaking outdoor venue nestled in wine country. Perfect for ceremonies and receptions with stunning vineyard views.',
    portfolio: [
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519167758481-83f29da78d9e?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=600&fit=crop'
    ]
  },
  {
    id: '3',
    name: 'Harmony Wedding Music',
    category: 'Entertainment',
    location: 'Los Angeles, CA',
    rating: 4.7,
    reviewCount: 156,
    priceRange: '$1,200 - $2,800',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop',
    description: 'Professional wedding band and DJ services. Creating the perfect soundtrack for your special day with live music and entertainment.',
    portfolio: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop'
    ]
  },
  {
    id: '4',
    name: 'Bloom & Blossom Florals',
    category: 'Flowers & Decor',
    location: 'Seattle, WA',
    rating: 4.9,
    reviewCount: 203,
    priceRange: '$1,500 - $3,500',
    image: 'https://images.unsplash.com/photo-1588887105148-3db9daba2e60?w=400&h=600&fit=crop',
    description: 'Exquisite floral arrangements and wedding decor. Transforming your venue into a romantic paradise with seasonal blooms.',
    portfolio: [
      'https://images.unsplash.com/photo-1588887105148-3db9daba2e60?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519167758481-83f29da78d9e?w=400&h=600&fit=crop'
    ]
  }
];

interface SwipeDemoProps {
  onBackToCategories: () => void;
}

const SwipeDemo: React.FC<SwipeDemoProps> = ({ onBackToCategories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState<string[]>([]);
  const [swipeHistory, setSwipeHistory] = useState<{id: string, direction: 'left' | 'right'}[]>([]);

  const handleSwipe = (direction: 'left' | 'right') => {
    const currentProvider = mockProviders[currentIndex];
    
    // Add to history for undo functionality
    setSwipeHistory(prev => [...prev, { id: currentProvider.id, direction }]);
    
    if (direction === 'right') {
      setMatches(prev => [...prev, currentProvider.id]);
    }
    
    setCurrentIndex(prev => (prev + 1) % mockProviders.length);
  };

  const handleUndo = () => {
    if (swipeHistory.length === 0) return;
    
    const lastSwipe = swipeHistory[swipeHistory.length - 1];
    setSwipeHistory(prev => prev.slice(0, -1));
    
    // Remove from matches if it was a right swipe
    if (lastSwipe.direction === 'right') {
      setMatches(prev => prev.filter(id => id !== lastSwipe.id));
    }
    
    // Go back to previous card
    setCurrentIndex(prev => (prev - 1 + mockProviders.length) % mockProviders.length);
  };

  const currentProvider = mockProviders[currentIndex];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" onClick={onBackToCategories}>
            ← Back to Categories
          </Button>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {matches.length} matches found
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-card rounded-2xl p-4 mb-6 shadow-card">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{swipeHistory.length}</div>
              <div className="text-sm text-muted-foreground">Viewed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">{matches.length}</div>
              <div className="text-sm text-muted-foreground">Matches</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-dark">
                {swipeHistory.filter(s => s.direction === 'left').length}
              </div>
              <div className="text-sm text-muted-foreground">Passed</div>
            </div>
          </div>
        </div>

        {/* Swipe Card */}
        <div className="mb-6">
          <SwipeCard 
            provider={currentProvider} 
            onSwipe={handleSwipe}
          />
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={handleUndo}
            disabled={swipeHistory.length === 0}
            className="bg-muted"
          >
            <RotateCcw className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleSwipe('left')}
            className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
          >
            <X className="w-6 h-6" />
          </Button>
          
          <Button
            variant="default"
            size="lg"
            onClick={() => handleSwipe('right')}
            className="bg-primary hover:bg-primary-dark"
          >
            <Heart className="w-6 h-6" />
          </Button>
        </div>

        {/* Match indicator */}
        {matches.includes(currentProvider.id) && (
          <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-xl text-center">
            <p className="text-primary font-medium">
              🎉 You've already matched with {currentProvider.name}!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SwipeDemo;