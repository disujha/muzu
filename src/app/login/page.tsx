"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

  const handleGoogleSignIn = async () => {
    setError(null);
    setAuthLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (err: any) {
      let friendlyMessage = err.message;
      if (err.code === "auth/popup-closed-by-user") {
        friendlyMessage = "Google sign-in was closed. Please try again.";
      }
      setError(friendlyMessage);
    } finally {
      setAuthLoading(false);
    }
  };

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

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "24px 0" }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)" }}>or</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Google Sign-In Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={authLoading}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              borderColor: "rgba(255,255,255,0.15)",
              opacity: authLoading ? 0.7 : 1,
              cursor: authLoading ? "not-allowed" : "pointer",
            }}
            className="btn btn-secondary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>

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
