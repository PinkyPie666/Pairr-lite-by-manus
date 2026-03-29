/**
 * Global Types for Pairr Platform
 */

export type UserRole = "USER" | "PREMIUM" | "ELITE" | "ADMIN";

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  isVerified: boolean;
  avatarUrl?: string;
}

export interface Profile {
  userId: string;
  bio: string;
  interests: string[];
  compatibilityScore?: number;
  blueprintLocked: boolean;
  fingerprintStatus: "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED";
}

export interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  features: string[];
}

export const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  { id: "tier-1", name: "Standard", price: 490, features: ["Basic Matching", "Chat"] },
  { id: "tier-2", name: "Premium", price: 1500, features: ["Advanced Matching", "Video Calls", "No Ads"] },
  { id: "tier-3", name: "Elite", price: 15000, features: ["Personal Concierge", "Deep Blueprint Access"] },
  { id: "tier-4", name: "Ultimate", price: 25000, features: ["Exclusive Events", "Private Networking"] },
];
