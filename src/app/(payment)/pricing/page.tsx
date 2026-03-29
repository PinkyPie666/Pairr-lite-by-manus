'use client';

import React, { useState } from 'react';
import { GradientText } from '@/components/ui/gradient-text';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingTiers = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Perfect for getting started',
      price: 490,
      originalPrice: null,
      currency: '฿',
      period: 'month',
      badge: null,
      features: [
        'Access to basic matching',
        'View 5 profiles per day',
        'Send 3 messages per day',
        'Basic profile customization',
        'Standard support',
      ],
      notIncluded: [
        'AI Compatibility Scoring',
        'Deep Profile Blueprint',
        'Priority matching',
        'Unlimited messaging',
      ],
      cta: 'Start Free Trial',
      ctaVariant: 'outline' as const,
      highlighted: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'For active daters',
      price: 1500,
      originalPrice: 1800,
      currency: '฿',
      period: 'month',
      badge: 'POPULAR',
      features: [
        'Unlimited profile views',
        'Unlimited messaging',
        'AI Compatibility Scoring',
        'Advanced filters',
        'See who liked you',
        'Priority support',
      ],
      notIncluded: [
        'Deep Profile Blueprint',
        'Video call features',
        'Verified badge',
      ],
      cta: 'Get Pro',
      ctaVariant: 'primary' as const,
      highlighted: true,
    },
    {
      id: 'elite',
      name: 'Elite',
      description: 'Deep insights included',
      price: 15000,
      originalPrice: null,
      currency: '฿',
      period: 'year',
      badge: 'BEST VALUE',
      features: [
        'Everything in Pro +',
        'Deep Profile Blueprint',
        'Full AI Analysis',
        'Personality Insights',
        'Trait Breakdown',
        'Priority matching algorithm',
        'Verified badge',
        'Premium support',
      ],
      notIncluded: [
        'Video call features',
      ],
      cta: 'Unlock Blueprint',
      ctaVariant: 'primary' as const,
      highlighted: false,
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      description: 'The complete experience',
      price: 25000,
      originalPrice: null,
      currency: '฿',
      period: 'year',
      badge: 'PREMIUM',
      features: [
        'Everything in Elite +',
        'Advanced Video Calls',
        'AI-Powered Matchmaking',
        'Personal Concierge',
        'Quarterly Blueprint Updates',
        'Exclusive events access',
        'VIP support (24/7)',
        'Custom profile features',
      ],
      notIncluded: [],
      cta: 'Go Ultimate',
      ctaVariant: 'primary' as const,
      highlighted: false,
    },
  ];

  const formatPrice = (price: number) => {
    return price.toLocaleString('th-TH');
  };

  return (
    <div className="relative min-h-screen bg-brand-black overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-brand-purple/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-brand-purple/10 blur-3xl animate-pulse" />
      </div>

      {/* Header Section */}
      <div className="relative pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Simple, Transparent
              <br />
              <GradientText>Pricing</GradientText>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan to unlock meaningful connections. Upgrade or downgrade anytime.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-700 transition-colors hover:bg-gray-600"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="ml-2 inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <div key={tier.id} className={`relative ${tier.highlighted ? 'lg:scale-105' : ''}`}>
                {tier.highlighted && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-accent-purple rounded-2xl blur opacity-30" />
                )}

                <GlassCard
                  className={`relative h-full flex flex-col ${
                    tier.highlighted ? 'border-brand-purple/50 bg-brand-purple/5' : ''
                  }`}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="inline-block bg-gradient-to-r from-brand-purple to-accent-purple text-white text-xs font-bold px-4 py-1 rounded-full">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6 pt-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-sm text-gray-400">{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">
                        {tier.currency}
                        {formatPrice(tier.price)}
                      </span>
                      <span className="text-sm text-gray-400">/ {tier.period}</span>
                    </div>
                    {tier.originalPrice && (
                      <p className="text-sm text-gray-500 line-through mt-2">
                        {tier.currency}
                        {formatPrice(tier.originalPrice)}
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="mb-6">
                    <Button
                      variant={tier.ctaVariant}
                      className="w-full"
                    >
                      {tier.cta}
                    </Button>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 flex-1 mb-6">
                    <div className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Not Included */}
                    {tier.notIncluded.length > 0 && (
                      <div className="border-t border-white/10 pt-4 space-y-3">
                        {tier.notIncluded.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 opacity-50">
                            <div className="w-5 h-5 rounded border border-gray-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <GradientText>Questions</GradientText>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Can I cancel my subscription anytime?',
                a: 'Yes! You can cancel your subscription at any time from your account settings. No questions asked.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, debit cards, and digital payment methods including Apple Pay and Google Pay.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes, the Basic plan includes a 7-day free trial. No credit card required to get started.',
              },
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Absolutely! You can change your plan at any time. We\'ll prorate the charges based on your usage.',
              },
            ].map((item, index) => (
              <GlassCard key={index} className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="text-center space-y-8 py-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Find Your Perfect Match?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Join thousands of users discovering meaningful connections through our AI-powered platform
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-3 text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="px-8 py-3 text-lg">
                View All Features
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
