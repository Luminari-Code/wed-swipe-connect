import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import SwipeDemo from '@/components/SwipeDemo';

type AppState = 'hero' | 'categories' | 'swipe';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('hero');

  const handleGetStarted = () => {
    setCurrentState('categories');
  };

  const handleCategorySelect = (category: string) => {
    console.log('Selected category:', category);
    setCurrentState('swipe');
  };

  const handleBackToCategories = () => {
    setCurrentState('categories');
  };

  const renderContent = () => {
    switch (currentState) {
      case 'hero':
        return <HeroSection onGetStarted={handleGetStarted} />;
      
      case 'categories':
        return (
          <div className="min-h-screen bg-background">
            <Header />
            <main className="max-w-6xl mx-auto px-6 py-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-card-foreground mb-4">
                  What kind of vendors are you looking for?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Select a category to start swiping through amazing wedding professionals
                </p>
              </div>
              <CategoryGrid onCategorySelect={handleCategorySelect} />
            </main>
          </div>
        );
      
      case 'swipe':
        return (
          <>
            <Header />
            <SwipeDemo onBackToCategories={handleBackToCategories} />
          </>
        );
      
      default:
        return <HeroSection onGetStarted={handleGetStarted} />;
    }
  };

  return <div className="min-h-screen">{renderContent()}</div>;
};

export default Index;
