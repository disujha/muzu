import Sidebar from "@/components/dashboard/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muzu Dashboard",
  description: "Muzu brand ambassador analytics and device management dashboard.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-gray-light">
      <Sidebar />
      <div className="ml-[240px] min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
}
