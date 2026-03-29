import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const GradientText: React.FC<GradientTextProps> = ({ children, className, ...props }) => {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-brand-purple to-accent-purple text-transparent bg-clip-text',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
