"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  LayoutDashboard,
  MessageSquare,
  Cpu,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const NAV = [
  { label: "Overview",      href: "/dashboard",              icon: LayoutDashboard },
  { label: "Conversations", href: "/dashboard/conversations", icon: MessageSquare   },
  { label: "Devices",       href: "/dashboard/devices",       icon: Cpu             },
  { label: "Analytics",     href: "/dashboard/analytics",     icon: BarChart3       },
  { label: "Settings",      href: "/dashboard/settings",      icon: Settings        },
];

function LogoMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="11"  stroke="#F5A623" strokeWidth="2" />
      <circle cx="13" cy="13" r="6.5" stroke="#F5A623" strokeWidth="0.8" strokeOpacity="0.35" />
      <circle cx="9.5"  cy="11.5" r="1.5" fill="#F5A623" />
      <circle cx="16.5" cy="11.5" r="1.5" fill="#F5A623" />
    </svg>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("Failed to log out", err);
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] bg-brand-black flex flex-col border-r border-white/[0.06] z-30">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-6 py-6 border-b border-white/[0.06]">
        <LogoMark />
        <span className="font-syne font-bold text-[18px] text-brand-white tracking-[-0.02em]">muzu</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {NAV.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-ui text-[14px] font-nunito font-medium transition-all duration-200 relative ${
                active
                  ? "bg-brand-amber/10 text-brand-amber"
                  : "text-brand-gray hover:text-brand-white hover:bg-white/[0.04]"
              }`}
            >
              {active && (
                <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-brand-amber rounded-r-full" />
              )}
              <Icon size={16} strokeWidth={active ? 2 : 1.5} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* User Info & Footer */}
      <div className="px-4 py-4 border-t border-white/[0.06] flex flex-col gap-4">
        {user && (
          <div className="flex flex-col gap-0.5 px-3">
            <span className="font-nunito font-bold text-[13px] text-brand-white truncate">
              {user.displayName || "Admin User"}
            </span>
            <span className="font-nunito text-[11px] text-brand-gray truncate">
              {user.email}
            </span>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-ui text-[14px] font-nunito font-medium text-brand-gray hover:text-red-400 hover:bg-red-400/10 transition-all duration-200"
        >
          <LogOut size={16} strokeWidth={1.5} />
          Log Out
        </button>
      </div>
    </aside>
  );
}
