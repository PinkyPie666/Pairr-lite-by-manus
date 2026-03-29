import React from 'react';
import { cn } from '@/lib/utils';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between w-full mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border-2",
                index <= currentStep
                  ? "border-brand-purple bg-brand-purple text-white"
                  : "border-gray-600 text-gray-400"
              )}
            >
              {index + 1}
            </div>
            <p
              className={cn(
                "mt-2 text-sm font-medium text-center",
                index <= currentStep ? "text-brand-purple" : "text-gray-400"
              )}
            >
              {step}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "flex-1 h-0.5 mx-2",
                index < currentStep ? "bg-brand-purple" : "bg-gray-600"
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
