"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

export default function Comparison() {
  return (
    <section
      id="why-muzu"
      style={{
        background: "#1C1C1E",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Background glow highlights */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          height: "60%",
          background: "radial-gradient(circle, rgba(245,166,35,0.03) 0%, transparent 85%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-content" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">The Evolution</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "16px" }}>
              Why Brands Deploy MUZU
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="section-subtext" style={{ margin: "0 auto", color: "rgba(255,255,255,0.55)" }}>
              A comparison of traditional printed wobblers against our active AI shelf ambassador.
            </p>
          </FadeUp>
        </div>

        {/* Side-by-Side Visual Cards */}
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "32px",
            alignItems: "stretch",
          }}
          className="comparison-grid"
        >
          {/* Card 1: Traditional Shelf */}
          <FadeUp delay={0.2}>
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.04)",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                opacity: 0.6,
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.6";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                THE PAST
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: "24px",
                }}
              >
                Traditional Silent Shelf
              </h3>

              <div
                style={{
                  height: "1px",
                  background: "rgba(255,255,255,0.06)",
                  marginBottom: "28px",
                }}
              />

              <ul style={{ display: "flex", flexDirection: "column", gap: "20px", listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { title: "Static Printed Wobblers", desc: "Passive paper tags or cardboard wobblers that shoppers ignore." },
                  { title: "Complete Data Blind Spot", desc: "No insight into what questions shoppers ask, or why they leave." },
                  { title: "Manual Logistics Churn", desc: "Every campaign change requires printing, shipping, and store-by-store setup visits." },
                  { title: "One-Size-Fits-All Text", desc: "Static text (mostly English) misses local dialect shoppers." },
                  { title: "Zero Conversions Feed", desc: "No direct way to push discount coupons or capture shoppers before they exit." },
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ flexShrink: 0, marginTop: "2px", width: "18px", height: "18px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 1l6 6M7 1L1 7" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 700, fontSize: "14.5px", color: "rgba(255,255,255,0.7)", margin: "0 0 4px 0" }}>
                        {item.title}
                      </h4>
                      <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13.5px", color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.4 }}>
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Card 2: MUZU Shelf */}
          <FadeUp delay={0.28}>
            <div
              style={{
                background: "#2C2C2E",
                borderRadius: "24px",
                border: "2px solid #F5A623",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: "0 16px 48px rgba(245,166,35,0.15)",
                position: "relative",
              }}
            >
              {/* Premium Glow indicator */}
              <div
                className="muzu-halo-glow"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "22px",
                  border: "1.5px solid rgba(245,166,35,0.25)",
                  pointerEvents: "none",
                }}
              />

              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "11px",
                  color: "#F5A623",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                THE FUTURE
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#FFFFFF",
                  marginBottom: "24px",
                }}
              >
                MUZU Active AI Shelf
              </h3>

              <div
                style={{
                  height: "1px",
                  background: "rgba(255,255,255,0.06)",
                  marginBottom: "28px",
                }}
              />

              <ul style={{ display: "flex", flexDirection: "column", gap: "20px", listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { title: "Active Voice Dialogue", desc: "Wakes on approach, speaks naturally, and addresses shopper queries instantly." },
                  { title: "100% Anonymous Telemetry", desc: "Logs shopper questions, interest dwell times, and campaign exit metrics." },
                  { title: "Instant OTA Cloud Updates", desc: "Push new product pitches, pricing models, or LED lights over the air in 2 minutes." },
                  { title: "Auto-detected Regional Dialect", desc: "Speaks Hindi, Tamil, English, and more, auto-detecting customer speech patterns." },
                  { title: "WhatsApp Promo Sync", desc: "Drives instant conversion by pushing coupon codes directly to shopper WhatsApp." },
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ flexShrink: 0, marginTop: "2px", width: "18px", height: "18px", borderRadius: "50%", background: "rgba(245,166,35,0.12)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(245,166,35,0.3)" }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l2.5 2.5L9 1" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 700, fontSize: "14.5px", color: "#FFFFFF", margin: "0 0 4px 0" }}>
                        {item.title}
                      </h4>
                      <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13.5px", color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.4 }}>
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .comparison-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
