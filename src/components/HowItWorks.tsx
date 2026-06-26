"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    number: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#F5A623" strokeWidth="1.5" strokeOpacity="0.35"/>
        <circle cx="20" cy="20" r="5.5" fill="#F5A623" fillOpacity="0.9"/>
        <circle cx="20" cy="20" r="11" stroke="#F5A623" strokeWidth="1" strokeDasharray="3 3"/>
      </svg>
    ),
    title: "Presence Detected",
    desc: "Customer approaches the shelf. Muzu's mmWave radar detects presence — not just movement. The LED ring wakes with a warm amber pulse.",
  },
  {
    number: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <path d="M8 20 Q8 11 20 11 Q32 11 32 20 Q32 29 20 29 Q14 29 11 26 L8 28 L10 24 Q8 22.5 8 20Z"
          stroke="#F5A623" strokeWidth="1.5" fill="none"/>
        <circle cx="15" cy="20" r="2" fill="#F5A623"/>
        <circle cx="20" cy="20" r="2" fill="#F5A623"/>
        <circle cx="25" cy="20" r="2" fill="#F5A623"/>
      </svg>
    ),
    title: "Speak. Listen. Respond.",
    desc: "Customer speaks in any language. Muzu listens, processes in under 3 seconds, and responds naturally — Hindi, English, Tamil, or Bengali.",
  },
  {
    number: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="8" width="24" height="24" rx="4" stroke="#F5A623" strokeWidth="1.5"/>
        <rect x="12" y="12" width="7" height="7" rx="1" stroke="#F5A623" strokeWidth="1"/>
        <rect x="21" y="12" width="7" height="7" rx="1" stroke="#F5A623" strokeWidth="1"/>
        <rect x="12" y="21" width="7" height="7" rx="1" stroke="#F5A623" strokeWidth="1"/>
        <rect x="23" y="23" width="3" height="3" fill="#F5A623"/>
      </svg>
    ),
    title: "Handoff & Report",
    desc: "Conversation moves to WhatsApp via QR. Every interaction is logged. Your morning report shows what they asked, what converted, what confused them.",
  },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-section-light
      className="section-padding"
      style={{ background: "#F2F2F7" }}
    >
      <div className="container-content">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">The Experience</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-dark">
              From Shelf to Conversation in 3 Seconds
            </h2>
          </FadeUp>
        </div>

        {/* Steps grid with connector line */}
        <div style={{ position: "relative" }}>
          {/* Dashed connector line — desktop only, behind cards */}
          <div
            aria-hidden
            className="hiw-connector"
            style={{
              position: "absolute",
              top: "72px",
              left: "calc(33.333% + 12px)",
              right: "calc(33.333% + 12px)",
              height: "1px",
              borderTop: "1px dashed rgba(245,166,35,0.28)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              position: "relative",
              zIndex: 1,
            }}
          >
          {STEPS.map((step, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.1}>
              <div
                style={{
                  position: "relative",
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "40px 28px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  height: "100%",
                }}
              >
                {/* Step number badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "28px",
                    fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#F5A623",
                    background: "#FFFFFF",
                    border: "1.5px solid rgba(245,166,35,0.35)",
                    borderRadius: "999px",
                    padding: "4px 12px",
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: "rgba(245,166,35,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {step.icon}
                </div>

                {/* Text */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#1C1C1E",
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                      fontSize: "14px",
                      lineHeight: 1.75,
                      color: "#636366",
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hiw-connector { display: none; }
        }
      `}</style>
    </section>
  );
}
