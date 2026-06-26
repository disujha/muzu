"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CALLOUTS = [
  "mmWave presence detection — never misses a standing customer",
  "Multilingual voice interface — 4 languages at launch",
  "Ambient LED ring — configurable per brand identity",
  "WhatsApp-first handoff — zero app install required",
  "Edge AI processing — sub-3-second response time",
  "Cloud dashboard — morning reports, every single day",
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
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function ProductVisual() {
  return (
    <section
      style={{
        background: "#1C1C1E",
        padding: "120px 24px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="product-grid"
      >
        {/* Left: device visual */}
        <FadeUp delay={0} style={{ minWidth: 0 }}>
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            {/* Ambient glow */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: "radial-gradient(circle 340px at 50% 50%, rgba(245,166,35,0.14) 0%, transparent 70%)",
              }}
            />

            {/* Device card */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "420px",
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "28px",
                background: "radial-gradient(circle at 50% 50%, rgba(245,166,35,0.05) 0%, rgba(28,28,30,0.9) 70%)",
                border: "1px solid rgba(245,166,35,0.1)",
              }}
            >
              {/* Inline SVG Muzu ring illustration */}
              <div style={{ position: "relative", width: "72%", aspectRatio: "1 / 1" }}>
                <svg viewBox="0 0 280 280" fill="none" style={{ width: "100%", height: "100%" }}>
                  {/* Outer thin echo */}
                  <circle cx="140" cy="140" r="129" stroke="rgba(245,166,35,0.15)" strokeWidth="1.5"/>
                  {/* Main amber ring */}
                  <circle cx="140" cy="140" r="117" fill="none" stroke="#F5A623" strokeWidth="38"/>
                  {/* Dark fill inside ring */}
                  <circle cx="140" cy="140" r="97" fill="#1C1C1E"/>
                  {/* Grille lines punched through amber at bottom */}
                  {Array.from({ length: 13 }, (_, i) => {
                    const stepDeg = 3.8;
                    const startAngle = 90 - (12 / 2) * stepDeg;
                    const angDeg = startAngle + i * stepDeg;
                    const ang = angDeg * (Math.PI / 180);
                    // 22% margin from inner/outer edges
                    const r1 = 98 + 38 * 0.22;
                    const r2 = 136 - 38 * 0.22;
                    return (
                      <line key={i}
                        x1={140 + r1 * Math.cos(ang)} y1={140 + r1 * Math.sin(ang)}
                        x2={140 + r2 * Math.cos(ang)} y2={140 + r2 * Math.sin(ang)}
                        stroke="#1C1C1E" strokeWidth="3.6" strokeLinecap="round"
                      />
                    );
                  })}
                  {/* Eyes */}
                  <circle cx="103" cy="130" r="20" fill="#F5A623"/>
                  <circle cx="177" cy="130" r="20" fill="#F5A623"/>
                </svg>

                {/* Animated outer pulse */}
                <motion.div
                  animate={{ boxShadow: ["0 0 0 0px rgba(245,166,35,0)", "0 0 0 18px rgba(245,166,35,0.06)", "0 0 0 0px rgba(245,166,35,0)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ position: "absolute", inset: 0, borderRadius: "50%", pointerEvents: "none" }}
                />
              </div>

              {/* Version badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  background: "#2C2C2E",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p style={{ fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)", fontSize: "10px", color: "#F5A623", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
                  MUZU™ v1
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Right: callouts — minWidth: 0 prevents grid blowout */}
        <div style={{ minWidth: 0 }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">The Hardware</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                lineHeight: 1.15,
                color: "#FFFFFF",
                marginBottom: "40px",
              }}
            >
              A Device That Works as Hard as Your Team
            </h2>
          </FadeUp>

          <ul style={{ display: "flex", flexDirection: "column", gap: "20px", listStyle: "none", padding: 0, margin: 0 }}>
            {CALLOUTS.map((text, i) => (
              <FadeUp key={i} delay={0.15 + i * 0.07}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "rgba(245,166,35,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2px",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                      fontSize: "15px",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.7,
                    }}
                  >
                    {text}
                  </span>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .product-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
