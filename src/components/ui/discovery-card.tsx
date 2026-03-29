import React from 'react';
import Image from 'next/image';
import { CompatibilityBadge } from './compatibility-badge';

interface DiscoveryCardProps {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  imageUrl: string;
  compatibilityScore: number;
  interests: string[];
}

export const DiscoveryCard: React.FC<DiscoveryCardProps> = ({
  id,
  name,
  age,
  location,
  bio,
  imageUrl,
  compatibilityScore,
  interests,
}) => {
  return (
    <div
      className="relative h-full w-full rounded-2xl overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

      {/* Content Overlay - Top */}
      <div className="absolute top-6 right-6 z-10">
        <CompatibilityBadge score={compatibilityScore} size="md" showLabel={false} />
      </div>

      {/* Content Overlay - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 space-y-4">
        {/* User Info */}
        <div className="glass-card backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4">
          <div className="mb-3">
            <h2 className="text-2xl font-bold text-white">
              {name}, <span className="text-brand-purple">{age}</span>
            </h2>
            <p className="text-sm text-gray-300 flex items-center gap-1 mt-1">
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {location}
            </p>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-200 line-clamp-2 mb-3">{bio}</p>

          {/* Interests */}
          <div className="flex flex-wrap gap-2">
            {interests.slice(0, 3).map((interest) => (
              <span
                key={interest}
                className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-purple/20 text-brand-purple border border-brand-purple/30"
              >
                {interest}
              </span>
            ))}
            {interests.length > 3 && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300">
                +{interests.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Compatibility Label */}
        <div className="text-center">
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            {compatibilityScore >= 80
              ? '🔥 Highly Compatible'
              : compatibilityScore >= 60
              ? '✨ Great Match'
              : compatibilityScore >= 40
              ? '👍 Interesting'
              : 'Maybe Later'}
          </p>
        </div>
      </div>
    </div>
  );
};
