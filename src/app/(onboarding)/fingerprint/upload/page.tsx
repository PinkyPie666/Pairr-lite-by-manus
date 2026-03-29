'use client';

import React, { useState } from 'react';
import { Stepper } from '@/components/ui/stepper';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/ui/gradient-text';

type UploadStep = 'instructions' | 'upload' | 'processing';

interface UploadedFile {
  name: string;
  size: number;
}

export default function FingerprintUploadPage() {
  const [currentStep, setCurrentStep] = useState<UploadStep>('instructions');
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const steps = ['Scanning Instructions', 'Upload PDF', 'AI Processing'];
  const stepIndex = steps.findIndex(
    (s) =>
      (s.includes('Scanning') && currentStep === 'instructions') ||
      (s.includes('Upload') && currentStep === 'upload') ||
      (s.includes('Processing') && currentStep === 'processing')
  );

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf') {
        setUploadedFile({
          name: file.name,
          size: file.size,
        });
      } else {
        alert('Please upload a PDF file');
      }
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === 'application/pdf') {
        setUploadedFile({
          name: file.name,
          size: file.size,
        });
      } else {
        alert('Please upload a PDF file');
      }
    }
  };

  const handleContinue = () => {
    if (currentStep === 'instructions') {
      setCurrentStep('upload');
    } else if (currentStep === 'upload' && uploadedFile) {
      setCurrentStep('processing');
      setIsProcessing(true);
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false);
      }, 3000);
    }
  };

  const handleBack = () => {
    if (currentStep === 'upload') {
      setCurrentStep('instructions');
    } else if (currentStep === 'processing') {
      setCurrentStep('upload');
      setUploadedFile(null);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-black py-12 px-4">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-brand-purple/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-brand-purple/10 blur-3xl animate-pulse" />
      </div>

      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            <GradientText>Fingerprint Onboarding</GradientText>
          </h1>
          <p className="text-gray-400">
            Upload your fingerprint profile for AI-powered compatibility analysis
          </p>
        </div>

        {/* Main Content Card */}
        <GlassCard className="mb-8">
          {/* Stepper */}
          <Stepper steps={steps} currentStep={stepIndex} />

          {/* Step 1: Scanning Instructions */}
          {currentStep === 'instructions' && (
            <div className="animate-in fade-in duration-500">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    How to Scan Your Fingerprint
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Follow these steps to ensure the best quality fingerprint scan for our AI analysis:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      number: '1',
                      title: 'Prepare Your Document',
                      description: 'Ensure your fingerprint document is clear, well-lit, and in PDF format.',
                    },
                    {
                      number: '2',
                      title: 'Quality Check',
                      description: 'All fingerprints should be clearly visible with no smudges or blurs.',
                    },
                    {
                      number: '3',
                      title: 'File Size',
                      description: 'Keep your PDF under 50MB for optimal processing speed.',
                    },
                    {
                      number: '4',
                      title: 'Privacy Assurance',
                      description: 'Your data is encrypted and will be automatically deleted within 7 days.',
                    },
                  ].map((instruction) => (
                    <div
                      key={instruction.number}
                      className="flex gap-4 rounded-lg bg-white/5 p-4 border border-white/10 hover:border-brand-purple/30 transition-colors"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-purple/20 text-brand-purple font-semibold">
                        {instruction.number}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{instruction.title}</h3>
                        <p className="text-sm text-gray-400">{instruction.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Upload PDF */}
          {currentStep === 'upload' && (
            <div className="animate-in fade-in duration-500">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    Upload Your Fingerprint PDF
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Drag and drop your PDF file or click to browse
                  </p>
                </div>

                {!uploadedFile ? (
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`relative rounded-lg border-2 border-dashed transition-all ${
                      dragActive
                        ? 'border-brand-purple bg-brand-purple/10'
                        : 'border-gray-600 bg-white/5 hover:border-brand-purple/50'
                    } p-12 text-center cursor-pointer`}
                  >
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileInput}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                    <div className="space-y-3">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-brand-purple/20 p-4">
                          <svg
                            className="h-8 w-8 text-brand-purple"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          Drag your PDF here or click to select
                        </p>
                        <p className="text-sm text-gray-400">
                          Maximum file size: 50MB
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-lg bg-gradient-to-r from-brand-purple/10 to-accent-purple/10 border border-brand-purple/30 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-lg bg-brand-purple/20 p-3">
                          <svg
                            className="h-6 w-6 text-brand-purple"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M8 16.5a1 1 0 11-2 0 1 1 0 012 0zM15 7H4a2 2 0 00-2 2v5a2 2 0 002 2h2.93a.75.75 0 001.06-1.06L9.5 13H4v-2h5.5a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H4v-1h11z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-white">{uploadedFile.name}</p>
                          <p className="text-sm text-gray-400">
                            {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setUploadedFile(null)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <svg
                          className="h-5 w-5"
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
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: AI Processing */}
          {currentStep === 'processing' && (
            <div className="animate-in fade-in duration-500">
              <div className="space-y-8 text-center">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    Analyzing Your Fingerprint
                  </h2>
                  <p className="text-gray-400">
                    Our AI is processing your profile for compatibility insights
                  </p>
                </div>

                {/* Animated Processing Indicator */}
                <div className="flex justify-center">
                  <div className="relative h-32 w-32">
                    <svg
                      className="h-full w-full animate-spin"
                      viewBox="0 0 100 100"
                      fill="none"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray="141 283"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#6A0DAD" />
                          <stop offset="100%" stopColor="#9D50BB" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-medium text-brand-purple">
                        Processing...
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 border border-white/10">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm text-gray-300">
                      Fingerprint data received
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 border border-white/10">
                    <div className="h-2 w-2 rounded-full bg-brand-purple animate-pulse" />
                    <span className="text-sm text-gray-300">
                      Running AI analysis
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 border border-white/10">
                    <div className="h-2 w-2 rounded-full bg-gray-600" />
                    <span className="text-sm text-gray-400">
                      Generating compatibility report
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-500">
                  Estimated time: 2-3 minutes
                </p>
              </div>
            </div>
          )}

          {/* Data Privacy Notice */}
          <div className="mt-8 rounded-lg border border-brand-purple/30 bg-brand-purple/5 p-4">
            <div className="flex gap-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-brand-purple mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="text-sm font-medium text-brand-purple">
                  Data Security & Privacy
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Your fingerprint data is encrypted and will be automatically deleted within 7 days for your security and privacy.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 'instructions' || isProcessing}
          >
            Back
          </Button>
          <Button
            onClick={handleContinue}
            disabled={
              (currentStep === 'upload' && !uploadedFile) ||
              isProcessing
            }
          >
            {currentStep === 'instructions' && 'Continue'}
            {currentStep === 'upload' && 'Start Analysis'}
            {currentStep === 'processing' && 'Processing...'}
          </Button>
        </div>
      </div>
    </div>
  );
}
