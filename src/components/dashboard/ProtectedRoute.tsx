"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MuzuRing from "@/components/MuzuRing";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#1C1C1E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MuzuRing size={160} />
      </div>
    );
  }

  return <>{children}</>;
}
