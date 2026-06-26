"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MuzuRing from "./MuzuRing";

export default function BoldVision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#0A0A0B",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "160px 24px",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.03)",
      }}
    >
      {/* Cinematic ambient background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,166,35,0.08) 0%, rgba(245,166,35,0.02) 50%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Floating abstract ring layout in the background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(1.6)",
          opacity: 0.12,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <MuzuRing size={320} />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "960px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-eyebrow"
          style={{ marginBottom: 0 }}
        >
          OUR VISION
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-syne, 'Syne', sans-serif)",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            maxWidth: "840px",
            margin: 0,
          }}
        >
          Today, one shelf.<br />
          Tomorrow, every shelf.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            fontWeight: 500,
            color: "#F5A623",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          The future of physical retail is conversational.
        </motion.p>
      </div>
    </section>
  );
}
