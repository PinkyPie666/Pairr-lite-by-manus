'use client';

import React from 'react';
import Link from 'next/link';
import { GradientText } from '@/components/ui/gradient-text';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const features = [
    {
      icon: '🔐',
      title: 'Fingerprint Onboarding',
      description: 'AI-powered ID and face verification with secure PDF upload',
      link: '/onboarding/fingerprint/upload',
      badge: '✓ Complete',
    },
    {
      icon: '💕',
      title: 'Discovery & Swipe',
      description: 'Find your perfect match with AI compatibility scoring',
      link: '/discovery/dating',
      badge: '✓ Complete',
    },
    {
      icon: '🧬',
      title: 'Deep Profile Blueprint',
      description: 'Unlock personalized AI insights with smart paywall',
      link: '/profile/blueprint/viewer',
      badge: '✓ Complete',
    },
    {
      icon: '💬',
      title: 'Chat & Communication',
      description: 'Real-time messaging and video call interface',
      link: '/chat/messages',
      badge: 'Coming Soon',
    },
    {
      icon: '👤',
      title: 'User Profile',
      description: 'Manage your profile and personal information',
      link: '/profile/edit',
      badge: 'Coming Soon',
    },
    {
      icon: '💳',
      title: 'Subscription & Payment',
      description: 'Flexible pricing tiers for premium features',
      link: '/payment/pricing',
      badge: 'Coming Soon',
    },
  ];

  return (
    <div className="relative min-h-screen bg-brand-black overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-brand-purple/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-brand-purple/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 h-80 w-80 rounded-full bg-accent-purple/5 blur-3xl animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-brand-purple to-accent-purple bg-clip-text text-transparent">
              Pairr
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#features"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Features
            </a>
            <Button className="text-sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Meet Your Perfect
              <br />
              <GradientText>Match Today</GradientText>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the next generation of premium matching platform powered by AI-driven compatibility scoring and deep personality insights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/discovery/dating">
              <Button className="px-8 py-3 text-lg">
                Start Discovering
              </Button>
            </Link>
            <Link href="/onboarding/fingerprint/upload">
              <Button variant="outline" className="px-8 py-3 text-lg">
                Complete Onboarding
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-12">
            {[
              { label: 'Active Users', value: '50K+' },
              { label: 'Matches Made', value: '100K+' },
              { label: 'Compatibility', value: '98%' },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-brand-purple">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Our <GradientText>Features</GradientText>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the cutting-edge features that make Pairr the ultimate matching platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={index} href={feature.link}>
                <GlassCard className="h-full hover:border-brand-purple/50 transition-all cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${
                        feature.badge === '✓ Complete'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-purple transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </GlassCard>
              </Link>
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
                Ready to Find Your Match?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Join thousands of users discovering meaningful connections through our AI-powered platform
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/discovery/dating">
                <Button className="px-8 py-3 text-lg">
                  Explore Matches
                </Button>
              </Link>
              <Link href="/profile/blueprint/viewer">
                <Button variant="outline" className="px-8 py-3 text-lg">
                  View Your Blueprint
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-brand-purple to-accent-purple bg-clip-text text-transparent mb-4">
                Pairr
              </div>
              <p className="text-sm text-gray-400">
                The premium matching platform powered by AI
              </p>
            </div>

            {[
              {
                title: 'Product',
                links: ['Features', 'Pricing', 'Security'],
              },
              {
                title: 'Company',
                links: ['About', 'Blog', 'Careers'],
              },
              {
                title: 'Legal',
                links: ['Privacy', 'Terms', 'Contact'],
              },
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              © 2026 Pairr. All rights reserved. Designed with 💜 by Senior Frontend Architect
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {['Twitter', 'Instagram', 'LinkedIn'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
