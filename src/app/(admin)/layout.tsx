import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-brand-black text-white">
      {/* Admin Sidebar Navigation */}
      <aside className="fixed inset-y-0 left-0 w-64 border-r border-white/10 bg-surface-dark p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand-purple">Pairr Admin</h2>
          <p className="text-xs text-gray-400">Management & Reports</p>
        </div>
        <nav className="space-y-2">
          <button className="flex w-full items-center rounded-premium bg-brand-purple/10 px-4 py-2 text-sm font-medium text-brand-purple transition-colors hover:bg-brand-purple/20">
            User Management
          </button>
          <button className="flex w-full items-center rounded-premium px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-brand-purple/10 hover:text-brand-purple">
            Reports & Issues
          </button>
          <button className="flex w-full items-center rounded-premium px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-brand-purple/10 hover:text-brand-purple">
            System Settings
          </button>
        </nav>
      </aside>
      
      {/* Main Content Area */}
      <main className="ml-64 flex-1 p-10">
        <div className="mx-auto max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  );
}
