import React from 'react';
import { cn } from '@/lib/utils';

interface CompatibilityBadgeProps {
  score: number; // 0-100
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const CompatibilityBadge: React.FC<CompatibilityBadgeProps> = ({
  score,
  size = 'md',
  showLabel = true,
}) => {
  const getColorClass = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-brand-purple';
    if (score >= 40) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getGradientClass = (score: number) => {
    if (score >= 80) return 'from-green-400/20 to-green-500/10';
    if (score >= 60) return 'from-brand-purple/20 to-accent-purple/10';
    if (score >= 40) return 'from-yellow-400/20 to-yellow-500/10';
    return 'from-red-400/20 to-red-500/10';
  };

  const sizeClasses = {
    sm: 'h-16 w-16 text-2xl',
    md: 'h-24 w-24 text-4xl',
    lg: 'h-32 w-32 text-5xl',
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          'flex items-center justify-center rounded-full border-2 font-bold',
          'bg-gradient-to-br',
          getGradientClass(score),
          getColorClass(score),
          sizeClasses[size]
        )}
        style={{
          borderColor: getColorClass(score).replace('text-', ''),
        }}
      >
        {score}%
      </div>
      {showLabel && (
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
          Compatibility
        </span>
      )}
    </div>
  );
};
