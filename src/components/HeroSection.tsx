"use client";

import Link from "next/link";
import MuzuRing from "@/components/MuzuRing";
import { motion } from "framer-motion";

export default function HeroSection() {
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
          <Link href="#demo" className="btn btn-primary">
            See Muzu in Action
          </Link>
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
    </section>
  );
}
