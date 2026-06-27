"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Menu } from "lucide-react";

export default function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-gray-light flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-25 md:hidden"
        />
      )}

      <div className="flex-1 md:ml-[240px] min-h-screen flex flex-col w-full overflow-x-hidden">
        {/* Mobile Top Bar */}
        <div className="md:hidden flex items-center justify-between px-6 py-4 bg-brand-black border-b border-white/[0.06] text-white">
          <div className="flex items-center gap-2.5">
            <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
              <circle cx="13" cy="13" r="11"  stroke="#F5A623" strokeWidth="2" />
              <circle cx="13" cy="13" r="6.5" stroke="#F5A623" strokeWidth="0.8" strokeOpacity="0.35" />
              <circle cx="9.5"  cy="11.5" r="1.5" fill="#F5A623" />
              <circle cx="16.5" cy="11.5" r="1.5" fill="#F5A623" />
            </svg>
            <span className="font-syne font-bold text-[16px] text-brand-white tracking-[-0.02em]">muzu</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-1 hover:bg-white/10 rounded"
            aria-label="Toggle Menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
