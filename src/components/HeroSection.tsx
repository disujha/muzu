"use client";

import Link from "next/link";
import MuzuRing from "@/components/MuzuRing";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export default function HeroSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setVideoTime(videoRef.current.currentTime);
    }
  };

  const closeVideo = () => {
    setShowVideoModal(false);
    setVideoTime(0);
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#1C1C1E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "70px 24px 48px",
        overflow: "hidden",
      }}
    >
      {/* Radial background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 45%, rgba(245,166,35,0.09) 0%, transparent 70%)",
        }}
      />

      {/* Content stack */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
          maxWidth: "860px",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="section-eyebrow"
          style={{ marginBottom: 0 }}
        >
          AI Brand Ambassador
        </motion.span>

        {/* Muzu Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <MuzuRing size={240} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-syne, 'Syne', sans-serif)",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Your Brand. On Every Shelf.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
            fontSize: "18px",
            lineHeight: 1.75,
            color: "#636366",
            maxWidth: "540px",
            margin: 0,
          }}
        >
          Muzu is the world&apos;s first AI brand ambassador that fits on a
          retail shelf. Speaks your customers&apos; language. Works while you
          sleep. Reports every morning.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setShowVideoModal(true)}
            className="btn btn-primary"
            style={{ border: "none", cursor: "pointer" }}
          >
            See Muzu in Action
          </button>
          <Link href="#brands" className="btn btn-secondary">
            For Brand Managers →
          </Link>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="scroll-chevron"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path
              d="M5 7.5l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(28,28,30,0.9)",
              backdropFilter: "blur(12px)",
              padding: "24px",
            }}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "860px",
                background: "#2C2C2E",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.08)",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F5A623" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "#FFFFFF",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Muzu in Action — Shelf Demo
                  </span>
                </div>
                
                <button
                  onClick={closeVideo}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "24px",
                    lineHeight: 1,
                    cursor: "pointer",
                    padding: 0,
                    outline: "none",
                  }}
                >
                  &times;
                </button>
              </div>

              {/* Video Player Area */}
              <div style={{ position: "relative", aspectRatio: "16 / 9", background: "#1C1C1E" }}>
                <video
                  ref={videoRef}
                  src="/videos/intro.mp4"
                  autoPlay
                  controls
                  onTimeUpdate={handleTimeUpdate}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* Animated Simulation Captions Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Top-Left: Customer Speech Bubble */}
                  <AnimatePresence>
                    {videoTime > 0.5 && videoTime < 4.5 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        style={{
                          background: "rgba(28,28,30,0.85)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "12px 12px 12px 4px",
                          padding: "10px 14px",
                          maxWidth: "70%",
                          alignSelf: "flex-start",
                        }}
                      >
                        <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "11px", color: "#F5A623", fontWeight: 700, margin: "0 0 2px 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          Customer
                        </p>
                        <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13px", color: "#FFFFFF", margin: 0, lineHeight: 1.4 }}>
                          "Is this juice 100% natural, or does it have preservatives?"
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom-Right: Muzu Speech Bubble */}
                  <AnimatePresence>
                    {videoTime >= 4.5 && videoTime < 9.5 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        style={{
                          background: "rgba(245,166,35,0.95)",
                          borderRadius: "12px 12px 4px 12px",
                          padding: "10px 14px",
                          maxWidth: "75%",
                          alignSelf: "flex-end",
                          boxShadow: "0 8px 24px rgba(245,166,35,0.25)",
                          marginTop: "auto",
                          marginBottom: "12px",
                        }}
                      >
                        <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "11px", color: "#1C1C1E", fontWeight: 800, margin: "0 0 2px 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          Muzu (AI Shelf Ambassador)
                        </p>
                        <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13px", color: "#1C1C1E", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
                          "It's 100% cold-pressed juice with zero added sugar or preservatives. We also have a buy-2-get-1 offer on it today!"
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Center: System action */}
                  <AnimatePresence>
                    {videoTime >= 9.5 && videoTime < 13.5 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{
                          background: "rgba(28,28,30,0.9)",
                          border: "1px solid rgba(245,166,35,0.25)",
                          borderRadius: "8px",
                          padding: "8px 16px",
                          alignSelf: "center",
                          marginTop: "auto",
                        }}
                      >
                        <p style={{ fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)", fontSize: "11px", color: "#F5A623", margin: 0 }}>
                          [Customer scans QR to open offer details on WhatsApp...]
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
