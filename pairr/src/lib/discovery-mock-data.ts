import { DiscoveryCategory } from '@/components/ui/category-filter';

export interface DiscoveryProfile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  imageUrl: string;
  compatibilityScore: number;
  interests: string[];
  category: DiscoveryCategory;
}

export const mockDiscoveryData: DiscoveryProfile[] = [
  // Dating Profiles
  {
    id: 'dating-1',
    name: 'Sophie',
    age: 26,
    location: 'Bangkok, Thailand',
    bio: 'Adventurous soul seeking meaningful connections. Love travel, art, and deep conversations.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop',
    compatibilityScore: 87,
    interests: ['Travel', 'Art', 'Yoga', 'Cooking', 'Music'],
    category: 'dating',
  },
  {
    id: 'dating-2',
    name: 'Emma',
    age: 24,
    location: 'Bangkok, Thailand',
    bio: 'Creative designer with a passion for photography and exploring new cafes.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
    compatibilityScore: 72,
    interests: ['Photography', 'Design', 'Coffee', 'Nature', 'Reading'],
    category: 'dating',
  },
  {
    id: 'dating-3',
    name: 'Jessica',
    age: 28,
    location: 'Bangkok, Thailand',
    bio: 'Ambitious professional looking for someone who values growth and authenticity.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop',
    compatibilityScore: 65,
    interests: ['Business', 'Fitness', 'Wine Tasting', 'Travel', 'Networking'],
    category: 'dating',
  },
  {
    id: 'dating-4',
    name: 'Lisa',
    age: 25,
    location: 'Bangkok, Thailand',
    bio: 'Free spirit who loves spontaneous adventures and genuine people.',
    imageUrl: 'https://images.unsplash.com/photo-1517746915202-e1a354f63f4f?w=500&h=600&fit=crop',
    compatibilityScore: 78,
    interests: ['Adventure', 'Hiking', 'Surfing', 'Festivals', 'Sustainability'],
    category: 'dating',
  },

  // Family Profiles
  {
    id: 'family-1',
    name: 'The Johnsons',
    age: 45,
    location: 'Bangkok, Thailand',
    bio: 'Warm family seeking connections with like-minded families for playdates and activities.',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&h=600&fit=crop',
    compatibilityScore: 82,
    interests: ['Family Activities', 'Outdoor Fun', 'Education', 'Community', 'Cooking'],
    category: 'family',
  },
  {
    id: 'family-2',
    name: 'The Patels',
    age: 42,
    location: 'Bangkok, Thailand',
    bio: 'Active family with kids interested in cultural exchange and shared experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=600&fit=crop',
    compatibilityScore: 75,
    interests: ['Cultural Exchange', 'Sports', 'Arts', 'Travel', 'Wellness'],
    category: 'family',
  },
  {
    id: 'family-3',
    name: 'The Smiths',
    age: 48,
    location: 'Bangkok, Thailand',
    bio: 'Friendly family looking to build lasting friendships with other families in the community.',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=600&fit=crop',
    compatibilityScore: 68,
    interests: ['Community', 'Volunteering', 'Outdoor Activities', 'Education', 'Networking'],
    category: 'family',
  },

  // Friends Profiles
  {
    id: 'friends-1',
    name: 'Alex',
    age: 29,
    location: 'Bangkok, Thailand',
    bio: 'Tech enthusiast and startup founder. Always up for interesting conversations and networking.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop',
    compatibilityScore: 79,
    interests: ['Tech', 'Startups', 'Networking', 'Gaming', 'Podcasts'],
    category: 'friends',
  },
  {
    id: 'friends-2',
    name: 'Jordan',
    age: 27,
    location: 'Bangkok, Thailand',
    bio: 'Fitness coach and wellness advocate. Love connecting with people who share similar values.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
    compatibilityScore: 71,
    interests: ['Fitness', 'Wellness', 'Nutrition', 'Sports', 'Meditation'],
    category: 'friends',
  },
  {
    id: 'friends-3',
    name: 'Morgan',
    age: 31,
    location: 'Bangkok, Thailand',
    bio: 'Artist and creative thinker. Seeking friends who appreciate culture and self-expression.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop',
    compatibilityScore: 64,
    interests: ['Art', 'Music', 'Theater', 'Film', 'Philosophy'],
    category: 'friends',
  },

  // Work Profiles
  {
    id: 'work-1',
    name: 'David Chen',
    age: 35,
    location: 'Bangkok, Thailand',
    bio: 'Senior Product Manager at tech company. Interested in collaborations and industry insights.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
    compatibilityScore: 85,
    interests: ['Product Management', 'Tech', 'Startups', 'Mentoring', 'Innovation'],
    category: 'work',
  },
  {
    id: 'work-2',
    name: 'Sarah Williams',
    age: 32,
    location: 'Bangkok, Thailand',
    bio: 'Marketing strategist with 8 years of experience. Open to partnerships and collaborations.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop',
    compatibilityScore: 76,
    interests: ['Marketing', 'Branding', 'Digital Strategy', 'Analytics', 'Leadership'],
    category: 'work',
  },
  {
    id: 'work-3',
    name: 'Michael Park',
    age: 38,
    location: 'Bangkok, Thailand',
    bio: 'Entrepreneur and business consultant. Passionate about helping others grow their ventures.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop',
    compatibilityScore: 69,
    interests: ['Entrepreneurship', 'Business Consulting', 'Networking', 'Mentoring', 'Investment'],
    category: 'work',
  },
];

export const getProfilesByCategory = (category: DiscoveryCategory): DiscoveryProfile[] => {
  return mockDiscoveryData.filter((profile) => profile.category === category);
};
