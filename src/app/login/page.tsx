"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import MuzuRing from "@/components/MuzuRing";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  // If user is already logged in, redirect to dashboard
  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setAuthLoading(true);

    try {
      if (isSignUp) {
        if (!name.trim()) {
          throw new Error("Please enter your name");
        }
        // Signup
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
      } else {
        // Login
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.push("/dashboard");
    } catch (err: any) {
      let friendlyMessage = err.message;
      if (err.code === "auth/invalid-credential") {
        friendlyMessage = "Incorrect email or password. Please try again.";
      } else if (err.code === "auth/email-already-in-use") {
        friendlyMessage = "This email is already in use. Try logging in.";
      } else if (err.code === "auth/weak-password") {
        friendlyMessage = "Password must be at least 6 characters long.";
      } else if (err.code === "auth/invalid-email") {
        friendlyMessage = "Please enter a valid email address.";
      }
      setError(friendlyMessage);
    } finally {
      setAuthLoading(false);
    }
  };

  if (loading || user) {
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

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1C1C1E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 50% 50%, rgba(245,166,35,0.06) 0%, transparent 60%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "420px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
        }}
      >
        {/* Brand Header */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <MuzuRing size={80} />
          <span
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 700,
              fontSize: "24px",
              letterSpacing: "0.14em",
              color: "#FFFFFF",
            }}
          >
            MUZU
          </span>
        </Link>

        {/* Form Card */}
        <div
          className="card-dark"
          style={{
            width: "100%",
            padding: "40px 32px",
            background: "#2C2C2E",
          }}
        >
          <div style={{ marginBottom: "28px", textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 700,
                fontSize: "22px",
                color: "#FFFFFF",
                margin: "0 0 8px 0",
              }}
            >
              {isSignUp ? "Create your account" : "Welcome back"}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                margin: 0,
              }}
            >
              {isSignUp
                ? "Sign up to configure your AI ambassadors"
                : "Sign in to access your devices & analytics"}
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Name field (Sign Up only) */}
            <AnimatePresence initial={false}>
              {isSignUp && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: "hidden" }}
                >
                  <label
                    htmlFor="name"
                    style={{
                      fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.7)",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required={isSignUp}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "#1C1C1E",
                      border: "1.5px solid rgba(255,255,255,0.1)",
                      borderRadius: "10px",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                      fontSize: "14px",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#F5A623")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                style={{
                  fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.7)",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "#1C1C1E",
                  border: "1.5px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#F5A623")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                style={{
                  fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.7)",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "#1C1C1E",
                  border: "1.5px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#F5A623")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* Error message */}
            {error && (
              <div
                style={{
                  padding: "10px 14px",
                  background: "rgba(239, 68, 68, 0.1)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  borderRadius: "8px",
                  color: "#F87171",
                  fontSize: "13px",
                  fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                }}
              >
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={authLoading}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "10px",
                marginTop: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: authLoading ? 0.7 : 1,
                cursor: authLoading ? "not-allowed" : "pointer",
              }}
              className="btn btn-primary"
            >
              {authLoading
                ? "Please wait..."
                : isSignUp
                ? "Sign Up"
                : "Sign In"}
            </button>
          </form>

          {/* Toggle link */}
          <div
            style={{
              marginTop: "24px",
              textAlign: "center",
              fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {isSignUp ? "Already have an account? " : "New to Muzu? "}
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null);
              }}
              style={{
                background: "none",
                border: "none",
                color: "#F5A623",
                fontWeight: 700,
                cursor: "pointer",
                padding: 0,
                outline: "none",
              }}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
