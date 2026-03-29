import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-black px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-premium bg-surface-dark p-8 border border-brand-purple/20 shadow-purple-glow">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-purple">Pairr Auth</h2>
          <p className="mt-2 text-sm text-gray-400">Security and privacy for elite matching.</p>
        </div>
        {children}
      </div>
    </div>
  );
}
