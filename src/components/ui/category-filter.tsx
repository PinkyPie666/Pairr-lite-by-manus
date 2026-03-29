import React from 'react';
import { cn } from '@/lib/utils';

export type DiscoveryCategory = 'dating' | 'family' | 'friends' | 'work';

interface CategoryFilterProps {
  activeCategory: DiscoveryCategory;
  onCategoryChange: (category: DiscoveryCategory) => void;
}

const categories: { id: DiscoveryCategory; label: string; icon: string }[] = [
  { id: 'dating', label: 'Dating', icon: '💕' },
  { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
  { id: 'friends', label: 'Friends', icon: '👥' },
  { id: 'work', label: 'Work', icon: '💼' },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300',
            activeCategory === category.id
              ? 'bg-gradient-to-r from-brand-purple to-accent-purple text-white shadow-purple-glow'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
          )}
        >
          <span className="text-lg">{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  );
};
