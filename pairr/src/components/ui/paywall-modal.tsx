import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { PricingCard } from './pricing-card';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  userCurrentTier?: 'elite' | 'ultimate' | null;
  onPaymentSelect: (tier: 'elite' | 'ultimate', price: number) => void;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  userCurrentTier,
  onPaymentSelect,
}) => {
  const [selectedTier, setSelectedTier] = useState<'elite' | 'ultimate' | null>(null);

  // Pricing logic
  const getPrice = (tier: 'elite' | 'ultimate'): { price: number; originalPrice?: number } => {
    if (tier === 'elite') {
      return { price: 15000 };
    }
    // Ultimate tier
    if (userCurrentTier === 'elite') {
      // Upgrade price: 25000 - 15000 = 10000
      return { price: 10000, originalPrice: 25000 };
    }
    return { price: 25000 };
  };

  const elitePrice = getPrice('elite');
  const ultimatePrice = getPrice('ultimate');

  const handleSelect = (tier: 'elite' | 'ultimate') => {
    setSelectedTier(tier);
  };

  const handleConfirm = () => {
    if (!selectedTier) return;
    const price = selectedTier === 'elite' ? elitePrice.price : ultimatePrice.price;
    onPaymentSelect(selectedTier, price);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-black to-surface-dark border border-brand-purple/30 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-brand-purple/20 to-accent-purple/10 border-b border-brand-purple/20 p-8">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg
                className="h-6 w-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="text-center">
              <div className="text-5xl mb-4">🔓</div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Unlock Your Deep Profile
              </h2>
              <p className="text-gray-300">
                Get complete AI-powered insights into your personality and compatibility
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Preview Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: '🧠',
                  title: 'AI Analysis',
                  description: 'Deep personality insights',
                },
                {
                  icon: '💡',
                  title: 'Compatibility',
                  description: 'Match predictions',
                },
                {
                  icon: '📊',
                  title: 'Full Report',
                  description: 'Complete breakdown',
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white/5 border border-white/10 p-4 text-center hover:border-brand-purple/30 transition-colors"
                >
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <h4 className="font-semibold text-white text-sm mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Pricing Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Choose Your Plan</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Elite Tier */}
                <PricingCard
                  tier="elite"
                  price={elitePrice.price}
                  features={[
                    'Full Deep Profile Report',
                    'AI Personality Analysis',
                    'Compatibility Scoring',
                    'Trait Breakdown',
                    'Valid for 1 year',
                  ]}
                  onSelect={() => handleSelect('elite')}
                  isSelected={selectedTier === 'elite'}
                />

                {/* Ultimate Tier */}
                <PricingCard
                  tier="ultimate"
                  price={ultimatePrice.price}
                  originalPrice={userCurrentTier === 'elite' ? 25000 : undefined}
                  isUpgrade={userCurrentTier === 'elite'}
                  features={[
                    'Everything in Elite +',
                    'Advanced AI Insights',
                    'Priority Support',
                    'Quarterly Updates',
                    'Valid for 2 years',
                  ]}
                  onSelect={() => handleSelect('ultimate')}
                  isSelected={selectedTier === 'ultimate'}
                />
              </div>

              {/* Current Status */}
              {userCurrentTier && (
                <div className="rounded-lg bg-green-500/10 border border-green-500/30 p-4">
                  <p className="text-sm text-green-300">
                    ✓ You currently have <span className="font-bold uppercase">{userCurrentTier}</span> access
                    {userCurrentTier === 'elite' && (
                      <span> • Upgrade to Ultimate for only 10,000 ฿</span>
                    )}
                  </p>
                </div>
              )}
            </div>

            {/* Security Notice */}
            <div className="rounded-lg bg-brand-purple/10 border border-brand-purple/30 p-4">
              <div className="flex gap-3">
                <svg
                  className="h-5 w-5 text-brand-purple flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-brand-purple">Secure Payment</p>
                  <p className="text-xs text-gray-400 mt-1">
                    All transactions are encrypted and secure. Your data is protected.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 p-8 bg-black/50 flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={!selectedTier}
              className="flex-1"
            >
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
