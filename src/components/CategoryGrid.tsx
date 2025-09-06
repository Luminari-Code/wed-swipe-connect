import React from 'react';
import { Camera, Music, Utensils, Flower, MapPin, Car, Palette, Crown, Users, Gift } from 'lucide-react';

const categories = [
  { icon: Camera, name: 'Photography', description: 'Capture your special moments' },
  { icon: Music, name: 'Entertainment', description: 'DJs, bands & musicians' },
  { icon: Utensils, name: 'Catering', description: 'Delicious wedding feasts' },
  { icon: Flower, name: 'Flowers & Decor', description: 'Beautiful arrangements' },
  { icon: MapPin, name: 'Venues', description: 'Perfect ceremony & reception spots' },
  { icon: Car, name: 'Transportation', description: 'Arrive in style' },
  { icon: Palette, name: 'Hair & Makeup', description: 'Look your absolute best' },
  { icon: Crown, name: 'Attire', description: 'Dresses, suits & accessories' },
  { icon: Users, name: 'Planners', description: 'Professional coordination' },
  { icon: Gift, name: 'Specialty', description: 'Cakes, favors & more' },
];

interface CategoryGridProps {
  onCategorySelect: (category: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onCategorySelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((category) => {
        const IconComponent = category.icon;
        return (
          <button
            key={category.name}
            onClick={() => onCategorySelect(category.name)}
            className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border border-border"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-gradient-romantic p-4 rounded-full group-hover:bg-gradient-hero transition-all duration-300">
                <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground text-sm">{category.name}</h3>
                <p className="text-muted-foreground text-xs mt-1">{category.description}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryGrid;