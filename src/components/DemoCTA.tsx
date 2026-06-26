"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function DemoCTA() {
  return (
    <section
      id="demo"
      className="section-padding"
      style={{
        background: "#1C1C1E",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,166,35,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Decorative ring */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 480,
            height: 480,
            borderRadius: "50%",
            border: "44px solid rgba(245,166,35,0.05)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "680px",
          margin: "0 auto",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <FadeUp delay={0}>
          <span className="section-eyebrow">Get Started</span>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h2
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              margin: "0 0 20px",
            }}
          >
            Start Transforming Your Shelves Today
          </h2>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p
            style={{
              fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
              fontSize: "18px",
              color: "#636366",
              lineHeight: 1.75,
              marginBottom: "40px",
            }}
          >
            3-store pilot. Zero hardware cost. 90 days. Your data, your dashboard.
          </p>
        </FadeUp>

        <FadeUp delay={0.24}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
              <Link href="/login" className="btn btn-primary btn-lg">
                Start Now
              </Link>
              <Link href="/dashboard" className="btn btn-secondary btn-lg">
                Explore Dashboard Preview →
              </Link>
            </div>
            <p
              style={{
                fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                fontSize: "13px",
                color: "rgba(99,99,102,0.6)",
                margin: 0,
              }}
            >
              No commitment. No procurement approval needed.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
