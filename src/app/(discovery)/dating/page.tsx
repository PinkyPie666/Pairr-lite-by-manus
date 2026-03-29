'use client';

import React, { useState, useEffect } from 'react';
import { DiscoveryCard } from '@/components/ui/discovery-card';
import { CategoryFilter, DiscoveryCategory } from '@/components/ui/category-filter';
import { Button } from '@/components/ui/button';
import { getProfilesByCategory, DiscoveryProfile } from '@/lib/discovery-mock-data';

export default function DatingDiscoveryPage() {
  const [activeCategory, setActiveCategory] = useState<DiscoveryCategory>('dating');
  const [profiles, setProfiles] = useState<DiscoveryProfile[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [likedProfiles, setLikedProfiles] = useState<string[]>([]);
  const [passedProfiles, setPassedProfiles] = useState<string[]>([]);

  useEffect(() => {
    const categoryProfiles = getProfilesByCategory(activeCategory);
    setProfiles(categoryProfiles);
    setCurrentIndex(0);
    setSwipeDirection(null);
  }, [activeCategory]);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (currentIndex >= profiles.length) return;

    setSwipeDirection(direction);
    const currentProfile = profiles[currentIndex];

    if (direction === 'right') {
      setLikedProfiles([...likedProfiles, currentProfile.id]);
    } else {
      setPassedProfiles([...passedProfiles, currentProfile.id]);
    }

    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setSwipeDirection(null);
    }, 300);
  };

  const handleCategoryChange = (category: DiscoveryCategory) => {
    setActiveCategory(category);
    setLikedProfiles([]);
    setPassedProfiles([]);
  };

  const currentProfile = profiles[currentIndex];
  const isComplete = currentIndex >= profiles.length;

  return (
    <div className="relative min-h-screen bg-brand-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-brand-purple/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-brand-purple/10 blur-3xl animate-pulse" />
      </div>

      <div className="mx-auto max-w-2xl h-screen flex flex-col px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-4">Discover</h1>
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Stats */}
        <div className="flex gap-4 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-gray-400">
              Liked: <span className="text-white font-semibold">{likedProfiles.length}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gray-600" />
            <span className="text-gray-400">
              Passed: <span className="text-white font-semibold">{passedProfiles.length}</span>
            </span>
          </div>
        </div>

        {/* Card Stack Container */}
        <div className="flex-1 relative mb-6 min-h-0">
          {isComplete ? (
            <div className="h-full flex flex-col items-center justify-center">
              <div className="rounded-2xl bg-gradient-to-br from-brand-purple/10 to-accent-purple/10 border border-brand-purple/30 p-12 text-center max-w-sm">
                <div className="mb-4 text-5xl">🎉</div>
                <h2 className="text-2xl font-bold text-white mb-2">You've Reached the End!</h2>
                <p className="text-gray-400 mb-6">
                  You've reviewed all {profiles.length} profiles in {activeCategory} mode. Check back later for more matches!
                </p>
                <Button
                  onClick={() => {
                    setCurrentIndex(0);
                    setLikedProfiles([]);
                    setPassedProfiles([]);
                  }}
                  className="w-full"
                >
                  Start Over
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative h-full">
              {/* Card Animation */}
              <div
                className={`absolute inset-0 transition-all duration-300 ease-out ${
                  swipeDirection === 'right'
                    ? 'translate-x-96 opacity-0 rotate-12'
                    : swipeDirection === 'left'
                    ? '-translate-x-96 opacity-0 -rotate-12'
                    : 'translate-x-0 opacity-100 rotate-0'
                }`}
              >
                {currentProfile && (
                  <DiscoveryCard
                    id={currentProfile.id}
                    name={currentProfile.name}
                    age={currentProfile.age}
                    location={currentProfile.location}
                    bio={currentProfile.bio}
                    imageUrl={currentProfile.imageUrl}
                    compatibilityScore={currentProfile.compatibilityScore}
                    interests={currentProfile.interests}
                  />
                )}
              </div>

              {/* Next Card Preview (Stacked Effect) */}
              {currentIndex + 1 < profiles.length && (
                <div className="absolute inset-0 translate-y-2 translate-x-2 opacity-50 pointer-events-none rounded-2xl overflow-hidden bg-black border border-white/10">
                  <DiscoveryCard
                    id={profiles[currentIndex + 1].id}
                    name={profiles[currentIndex + 1].name}
                    age={profiles[currentIndex + 1].age}
                    location={profiles[currentIndex + 1].location}
                    bio={profiles[currentIndex + 1].bio}
                    imageUrl={profiles[currentIndex + 1].imageUrl}
                    compatibilityScore={profiles[currentIndex + 1].compatibilityScore}
                    interests={profiles[currentIndex + 1].interests}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {!isComplete && (
          <div className="flex gap-4 justify-center">
            {/* Pass Button */}
            <button
              onClick={() => handleSwipe('left')}
              className="group relative h-16 w-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            >
              <svg
                className="h-8 w-8 text-gray-300 group-hover:text-gray-100 transition-colors"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              </svg>
            </button>

            {/* Like Button */}
            <button
              onClick={() => handleSwipe('right')}
              className="group relative h-16 w-16 rounded-full bg-gradient-to-br from-brand-purple to-accent-purple border border-brand-purple flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-purple-glow"
            >
              <svg
                className="h-8 w-8 text-white group-hover:scale-125 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>

            {/* Super Like Button */}
            <button
              onClick={() => handleSwipe('right')}
              className="group relative h-16 w-16 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 border border-yellow-400 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            >
              <svg
                className="h-8 w-8 text-white group-hover:scale-125 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
          </div>
        )}

        {/* Progress Bar */}
        {!isComplete && (
          <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
            <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-purple to-accent-purple transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / profiles.length) * 100}%`,
                }}
              />
            </div>
            <span>
              {currentIndex + 1} / {profiles.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
