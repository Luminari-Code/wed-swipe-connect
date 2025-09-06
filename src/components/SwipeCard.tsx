import React, { useState } from 'react';
import { Heart, X, MapPin, Star, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SwipeCardProps {
  provider: {
    id: string;
    name: string;
    category: string;
    location: string;
    rating: number;
    reviewCount: number;
    priceRange: string;
    image: string;
    description: string;
    portfolio: string[];
  };
  onSwipe: (direction: 'left' | 'right') => void;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ provider, onSwipe }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const startX = e.clientX;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const offset = e.clientX - startX;
        setDragOffset(offset);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      if (Math.abs(dragOffset) > 100) {
        onSwipe(dragOffset > 0 ? 'right' : 'left');
      }
      setDragOffset(0);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % provider.portfolio.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + provider.portfolio.length) % provider.portfolio.length);
  };

  const rotation = dragOffset * 0.1;
  const opacity = 1 - Math.abs(dragOffset) * 0.002;

  return (
    <div 
      className="relative w-full max-w-sm mx-auto h-[600px] cursor-grab active:cursor-grabbing"
      style={{
        transform: `translateX(${dragOffset}px) rotate(${rotation}deg)`,
        opacity: opacity,
        transition: isDragging ? 'none' : 'transform 0.3s ease-out, opacity 0.3s ease-out'
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Swipe Indicators */}
      {dragOffset > 50 && (
        <div className="absolute top-4 right-4 z-20 bg-primary text-primary-foreground rounded-full p-2">
          <Heart className="w-6 h-6" fill="currentColor" />
        </div>
      )}
      {dragOffset < -50 && (
        <div className="absolute top-4 left-4 z-20 bg-destructive text-destructive-foreground rounded-full p-2">
          <X className="w-6 h-6" />
        </div>
      )}

      <div className="bg-card rounded-3xl shadow-card overflow-hidden h-full">
        {/* Image Section */}
        <div className="relative h-2/3 overflow-hidden">
          <img
            src={provider.portfolio[currentImageIndex]}
            alt={provider.name}
            className="w-full h-full object-cover"
          />
          
          {/* Image Navigation */}
          {provider.portfolio.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-1 opacity-70 hover:opacity-100"
              >
                <span className="sr-only">Previous image</span>
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-1 opacity-70 hover:opacity-100"
              >
                <span className="sr-only">Next image</span>
                →
              </button>
              
              {/* Image Dots */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {provider.portfolio.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
            {provider.category}
          </div>

          {/* Portfolio Count */}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
            <Camera className="w-3 h-3" />
            {provider.portfolio.length}
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6 h-1/3 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-card-foreground mb-1">{provider.name}</h3>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {provider.location}
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-accent fill-current" />
                {provider.rating} ({provider.reviewCount})
              </div>
            </div>

            <p className="text-card-foreground text-sm mb-3 line-clamp-2">{provider.description}</p>
            
            <div className="text-primary font-semibold">{provider.priceRange}</div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <Button
              variant="outline"
              size="lg"
              className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              onClick={() => onSwipe('left')}
            >
              <X className="w-5 h-5 mr-2" />
              Pass
            </Button>
            <Button
              variant="default"
              size="lg"
              className="flex-1 bg-primary hover:bg-primary-dark"
              onClick={() => onSwipe('right')}
            >
              <Heart className="w-5 h-5 mr-2" />
              Like
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipeCard;