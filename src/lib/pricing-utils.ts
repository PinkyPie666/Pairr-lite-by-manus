/**
 * Smart Pricing Utility for Pairr Blueprint Tiers
 * Handles dynamic pricing based on user's current subscription tier
 */

export type SubscriptionTier = 'elite' | 'ultimate' | null;

export interface PricingInfo {
  tier: 'elite' | 'ultimate';
  basePrice: number;
  displayPrice: number;
  originalPrice?: number;
  isUpgrade: boolean;
  savingsAmount?: number;
  savingsPercentage?: number;
}

const BASE_PRICES = {
  elite: 15000,
  ultimate: 25000,
};

const UPGRADE_DISCOUNT = 10000; // Discount when upgrading from Elite to Ultimate

/**
 * Calculate pricing based on user's current tier
 * @param targetTier - The tier user wants to purchase
 * @param currentTier - User's current subscription tier (null if no subscription)
 * @returns Pricing information including display price and upgrade details
 */
export function calculatePricing(
  targetTier: 'elite' | 'ultimate',
  currentTier: SubscriptionTier
): PricingInfo {
  const basePrice = BASE_PRICES[targetTier];

  // If user already has this tier, return the base price (no upgrade)
  if (currentTier === targetTier) {
    return {
      tier: targetTier,
      basePrice,
      displayPrice: basePrice,
      isUpgrade: false,
    };
  }

  // If upgrading from Elite to Ultimate
  if (currentTier === 'elite' && targetTier === 'ultimate') {
    const displayPrice = basePrice - UPGRADE_DISCOUNT;
    const savingsAmount = UPGRADE_DISCOUNT;
    const savingsPercentage = Math.round(
      (UPGRADE_DISCOUNT / basePrice) * 100
    );

    return {
      tier: targetTier,
      basePrice,
      displayPrice,
      originalPrice: basePrice,
      isUpgrade: true,
      savingsAmount,
      savingsPercentage,
    };
  }

  // If user has Ultimate and wants Elite (downgrade - not typical, but handle it)
  if (currentTier === 'ultimate' && targetTier === 'elite') {
    return {
      tier: targetTier,
      basePrice,
      displayPrice: basePrice,
      isUpgrade: false,
    };
  }

  // First-time purchase (no current tier)
  return {
    tier: targetTier,
    basePrice,
    displayPrice: basePrice,
    isUpgrade: false,
  };
}

/**
 * Get all available pricing options for a user
 * @param currentTier - User's current subscription tier
 * @returns Array of pricing info for both Elite and Ultimate tiers
 */
export function getAllPricingOptions(
  currentTier: SubscriptionTier
): PricingInfo[] {
  return [
    calculatePricing('elite', currentTier),
    calculatePricing('ultimate', currentTier),
  ];
}

/**
 * Format price for display
 * @param price - Price in baht
 * @returns Formatted price string
 */
export function formatPrice(price: number): string {
  return price.toLocaleString('th-TH');
}

/**
 * Get subscription benefits for a tier
 * @param tier - Subscription tier
 * @returns Array of benefits
 */
export function getTierBenefits(tier: 'elite' | 'ultimate'): string[] {
  const benefits = {
    elite: [
      'Full Deep Profile Report',
      'AI Personality Analysis',
      'Compatibility Scoring',
      'Trait Breakdown',
      'Valid for 1 year',
    ],
    ultimate: [
      'Everything in Elite +',
      'Advanced AI Insights',
      'Priority Support',
      'Quarterly Updates',
      'Valid for 2 years',
    ],
  };

  return benefits[tier];
}

/**
 * Get tier description
 * @param tier - Subscription tier
 * @returns Tier description
 */
export function getTierDescription(tier: 'elite' | 'ultimate'): string {
  const descriptions = {
    elite: 'Full access to Deep Profile Analysis',
    ultimate: 'Complete AI-Powered Insights + Premium Support',
  };

  return descriptions[tier];
}
