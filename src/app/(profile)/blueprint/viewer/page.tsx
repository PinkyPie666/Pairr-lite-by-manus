'use client';

import React, { useState } from 'react';
import { BlueprintVideoPlayer } from '@/components/ui/blueprint-video-player';
import { PaywallModal } from '@/components/ui/paywall-modal';
import { GlassCard } from '@/components/ui/glass-card';
import { GradientText } from '@/components/ui/gradient-text';
import { Button } from '@/components/ui/button';

type UserTier = 'elite' | 'ultimate' | null;

interface BlueprintData {
  name: string;
  age: number;
  traits: {
    label: string;
    value: number;
  }[];
  compatibilityInsights: string[];
  videoUrl: string;
}

export default function BlueprintViewerPage() {
  const [userTier, setUserTier] = useState<UserTier>(null);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [selectedPaymentTier, setSelectedPaymentTier] = useState<'elite' | 'ultimate' | null>(null);
  const [selectedPrice, setSelectedPrice] = useState(0);

  const blueprintData: BlueprintData = {
    name: 'Sarah',
    age: 28,
    traits: [
      { label: 'Openness', value: 85 },
      { label: 'Conscientiousness', value: 72 },
      { label: 'Extraversion', value: 68 },
      { label: 'Agreeableness', value: 79 },
      { label: 'Neuroticism', value: 45 },
    ],
    compatibilityInsights: [
      'Strong match with analytical and creative personalities',
      'Values deep conversations and intellectual stimulation',
      'Seeks partners who appreciate independence and personal growth',
      'Compatible with both introverted and extroverted individuals',
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4',
  };

  const handleLockTriggered = () => {
    setIsPaywallOpen(true);
  };

  const handlePaymentSelect = (tier: 'elite' | 'ultimate', price: number) => {
    setSelectedPaymentTier(tier);
    setSelectedPrice(price);
    setUserTier(tier);
    setIsPaywallOpen(false);
    console.log(`Payment selected: ${tier} - ${price} ฿`);
  };

  const isUnlocked = userTier !== null;

  return (
    <div className="relative min-h-screen bg-brand-black overflow-hidden py-12 px-4">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-brand-purple/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-brand-purple/10 blur-3xl animate-pulse" />
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            <GradientText>Deep Profile Report</GradientText>
          </h1>
          <p className="text-gray-400">
            Unlock AI-powered insights into your personality and compatibility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <GlassCard>
              <BlueprintVideoPlayer
                videoUrl={blueprintData.videoUrl}
                isLocked={!isUnlocked}
                onLockTriggered={handleLockTriggered}
              />
            </GlassCard>

            {!isUnlocked && (
              <div className="rounded-xl bg-brand-purple/10 border border-brand-purple/30 p-6">
                <div className="flex gap-4">
                  <div className="text-3xl">👀</div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Preview Available</h3>
                    <p className="text-sm text-gray-300">
                      You can watch the first 10 seconds of your Deep Profile Report for free. Unlock the full report to see complete AI analysis and insights.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <GlassCard>
              <h2 className="text-2xl font-bold text-white mb-6">Personality Traits</h2>
              <div className="space-y-4">
                {blueprintData.traits.map((trait) => (
                  <div key={trait.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">
                        {trait.label}
                      </span>
                      <span className="text-sm font-bold text-brand-purple">
                        {trait.value}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-purple to-accent-purple transition-all"
                        style={{ width: `${trait.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="space-y-6">
            <GlassCard>
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-purple to-accent-purple flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {blueprintData.name}, {blueprintData.age}
                </h3>
                <p className="text-sm text-gray-400 mt-2">Your Deep Profile</p>
              </div>

              {isUnlocked && (
                <div className="rounded-lg bg-green-500/10 border border-green-500/30 p-3 text-center mb-4">
                  <p className="text-xs font-bold text-green-400 uppercase tracking-wider">
                    ✓ Unlocked - {userTier} Access
                  </p>
                </div>
              )}

              {!isUnlocked && (
                <Button
                  onClick={() => setIsPaywallOpen(true)}
                  className="w-full mb-3"
                >
                  Unlock Full Report
                </Button>
              )}
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-bold text-white mb-4">
                Compatibility Insights
              </h3>
              <div className="space-y-3">
                {blueprintData.compatibilityInsights.map((insight, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="text-brand-purple flex-shrink-0 mt-1">✓</div>
                    <p className="text-sm text-gray-300">{insight}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            {!isUnlocked && (
              <GlassCard>
                <h3 className="text-lg font-bold text-white mb-4">
                  Premium Features
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-brand-purple">🔓</span>
                    <span>Full video analysis</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-purple">📊</span>
                    <span>Detailed trait breakdown</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-purple">💡</span>
                    <span>Compatibility matching</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-purple">📈</span>
                    <span>Growth recommendations</span>
                  </li>
                </ul>
              </GlassCard>
            )}

            {!isUnlocked && (
              <div className="rounded-xl bg-brand-purple/10 border border-brand-purple/30 p-4">
                <p className="text-xs text-gray-400 mb-3">Starting from</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-2xl font-bold text-white">15,000</span>
                  <span className="text-gray-400">฿</span>
                </div>
                <Button
                  onClick={() => setIsPaywallOpen(true)}
                  variant="primary"
                  className="w-full text-sm"
                >
                  See All Plans
                </Button>
              </div>
            )}
          </div>
        </div>

        {isUnlocked && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Personalized Insights',
                description: 'AI-generated analysis tailored to your unique profile',
              },
              {
                icon: '💬',
                title: 'Communication Tips',
                description: 'Learn how to communicate better with compatible matches',
              },
              {
                icon: '📈',
                title: 'Growth Path',
                description: 'Recommendations for personal and relationship growth',
              },
            ].map((item, index) => (
              <GlassCard key={index} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        )}
      </div>

      <PaywallModal
        isOpen={isPaywallOpen}
        onClose={() => setIsPaywallOpen(false)}
        userCurrentTier={userTier}
        onPaymentSelect={handlePaymentSelect}
      />
    </div>
  );
}
