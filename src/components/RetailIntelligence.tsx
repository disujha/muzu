"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PLATFORM_FEATURES = [
  {
    title: "Customer Conversations",
    desc: "Log 100% of shopper queries anonymously in real-time to instantly uncover category confusion, active questions, and purchase barriers.",
    badge: "DIALOGUE TELEMETRY",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8M8 14h6" />
      </svg>
    ),
  },
  {
    title: "Shopper Analytics",
    desc: "Track foot traffic metrics, shopper dwell times, and aisle engagement rates triggered directly via mmWave radar sensors.",
    badge: "AISLE TRAFFIC",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Campaign Performance",
    desc: "Deploy fresh voice promotions instantly via OTA updates and measure baseline trial lift and QR code checkout conversion rates.",
    badge: "CONVERSION ROI",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

function FadeUp({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ height: "100%", ...style }}
    >
      {children}
    </motion.div>
  );
}

export default function RetailIntelligence() {
  return (
    <section
      id="retail-intelligence"
      style={{
        background: "#1C1C1E",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Background radial highlight */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "55%",
          background: "radial-gradient(circle, rgba(245,166,35,0.02) 0%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-content" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">Cloud Dashboard</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "16px" }}>
              Retail Intelligence Platform
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="section-subtext" style={{ margin: "0 auto", color: "rgba(255,255,255,0.55)" }}>
              A unified software ecosystem that converts physical customer interactions into structured retail analytics.
            </p>
          </FadeUp>
        </div>

        {/* 3 Premium Feature Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            maxWidth: "1080px",
            margin: "0 auto",
            alignItems: "stretch",
          }}
          className="intelligence-grid"
        >
          {PLATFORM_FEATURES.map((f, i) => (
            <FadeUp key={i} delay={0.08 * i}>
              <div
                style={{
                  background: "#2C2C2E",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  gap: "24px",
                  transition: "all 0.3s ease",
                  minHeight: "260px",
                }}
                className="feature-card card-dark"
              >
                {/* Icon & Badge Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      background: "rgba(245,166,35,0.08)",
                      border: "1px solid rgba(245,166,35,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {f.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "9.5px",
                      color: "#F5A623",
                      background: "rgba(245,166,35,0.05)",
                      border: "1px solid rgba(245,166,35,0.12)",
                      borderRadius: "6px",
                      padding: "4px 10px",
                      letterSpacing: "0.06em",
                      fontWeight: 600,
                    }}
                  >
                    {f.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700,
                      fontSize: "19px",
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                      fontSize: "14.5px",
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.55)",
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 991px) {
          .intelligence-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
