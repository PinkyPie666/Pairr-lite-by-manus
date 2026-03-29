import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface PricingCardProps {
  tier: 'elite' | 'ultimate';
  price: number;
  originalPrice?: number;
  features: string[];
  isUpgrade?: boolean;
  onSelect: () => void;
  isSelected?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  price,
  originalPrice,
  features,
  isUpgrade = false,
  onSelect,
  isSelected = false,
}) => {
  const tierInfo = {
    elite: {
      name: 'Elite Blueprint',
      description: 'Full access to Deep Profile Analysis',
      icon: '✨',
      color: 'from-brand-purple to-accent-purple',
    },
    ultimate: {
      name: 'Ultimate Blueprint',
      description: 'Complete AI-Powered Insights + Premium Support',
      icon: '👑',
      color: 'from-yellow-500 to-yellow-600',
    },
  };

  const info = tierInfo[tier];

  return (
    <div
      className={cn(
        'relative rounded-2xl border-2 transition-all duration-300 p-6',
        isSelected
          ? `border-brand-purple bg-gradient-to-br ${info.color}/10`
          : 'border-white/10 bg-white/5 hover:border-brand-purple/50'
      )}
    >
      {/* Upgrade Badge */}
      {isUpgrade && (
        <div className="absolute -top-3 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          UPGRADE PRICE
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="text-3xl mb-2">{info.icon}</div>
            <h3 className="text-xl font-bold text-white">{info.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{info.description}</p>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6 py-4 border-y border-white/10">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white">
            {price.toLocaleString('th-TH')}
          </span>
          <span className="text-gray-400">฿</span>
        </div>
        {originalPrice && originalPrice > price && (
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-gray-500 line-through">
              {originalPrice.toLocaleString('th-TH')} ฿
            </span>
            <span className="text-xs font-bold text-green-400">
              Save {((originalPrice - price) / originalPrice * 100).toFixed(0)}%
            </span>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <svg
              className="h-5 w-5 text-brand-purple flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Button
        onClick={onSelect}
        variant={isSelected ? 'primary' : 'outline'}
        className="w-full"
      >
        {isSelected ? 'Selected' : 'Choose Plan'}
      </Button>
    </div>
  );
};
