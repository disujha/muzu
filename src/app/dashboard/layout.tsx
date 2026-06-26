import Sidebar from "@/components/dashboard/Sidebar";
import ProtectedRoute from "@/components/dashboard/ProtectedRoute";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muzu Dashboard",
  description: "Muzu brand ambassador analytics and device management dashboard.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-brand-gray-light">
        <Sidebar />
        <div className="ml-[240px] min-h-screen flex flex-col">
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}
