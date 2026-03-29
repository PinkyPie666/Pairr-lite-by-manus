import React from "react";

export default function DiscoveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-black">
      {/* Discovery Navigation Bar (Dating, Family, Friends, Work, Couple) */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <span className="text-xl font-bold text-brand-purple">Pairr Discovery</span>
          <div className="flex gap-4 overflow-x-auto text-sm font-medium">
            <button className="whitespace-nowrap text-brand-purple">Dating</button>
            <button className="whitespace-nowrap text-gray-400">Family</button>
            <button className="whitespace-nowrap text-gray-400">Friends</button>
            <button className="whitespace-nowrap text-gray-400">Work</button>
            <button className="whitespace-nowrap text-gray-400">Couple</button>
          </div>
        </div>
      </nav>
      <main className="flex-1 px-4 py-8">
        <div className="mx-auto max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}
