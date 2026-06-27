import ProtectedRoute from "@/components/dashboard/ProtectedRoute";
import DashboardLayoutClient from "@/components/dashboard/DashboardLayoutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muzu Dashboard",
  description: "Muzu brand ambassador analytics and device management dashboard.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <DashboardLayoutClient>{children}</DashboardLayoutClient>
    </ProtectedRoute>
  );
}
