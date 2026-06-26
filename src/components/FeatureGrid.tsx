"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FEATURES = [
  {
    title: "Increase Engagement",
    desc: "Capture shopper attention in under 3 seconds using presence-activated amber breathing light pulses and warm verbal welcomes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20" />
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    ),
  },
  {
    title: "Educate Shoppers",
    desc: "Deliver instant ingredient verification, diet certifications (vegan, organic, sugar-free), and comparison charts right at point of sale.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Capture Shelf Questions",
    desc: "Learn exactly what customers ask about your products. Log 100% of shopper queries, confusion points, and competitor comparisons.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M12 8a2 2 0 0 1 2 2c0 .7-.3 1.2-.8 1.5A1.5 1.5 0 0 0 12 13v0.5" />
        <line x1="12" y1="16" x2="12" y2="16" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: "Measure Conversations",
    desc: "Analyze customer interaction rates, average dialogue length, conversions, and exit rates to evaluate sales campaign success.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Update Campaigns Remotely",
    desc: "Deploy new product voice scripts, pricing updates, promotional events, and LED theme patterns instantly over the air.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 13V22M12 13l-4 4M12 13l4 4M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
      </svg>
    ),
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

export default function FeatureGrid() {
  return (
    <section
      id="product"
      style={{
        background: "#1C1C1E",
        paddingTop: "120px",
        paddingBottom: "120px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-content">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">Business Outcomes</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light">
              Designed for Higher Shelf Velocity
            </h2>
          </FadeUp>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "24px",
          }}
        >
          {FEATURES.map((f, i) => (
            <FadeUp key={i} delay={0.07 * i}>
              <div
                className="feature-card card-dark"
                style={{
                  background: "#2C2C2E",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  minHeight: "200px",
                  height: "100%",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(245,166,35,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(245,166,35,0.15)",
                    flexShrink: 0,
                  }}
                >
                  {f.icon}
                </div>

                {/* Text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700,
                      fontSize: "17px",
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                      fontSize: "14px",
                      lineHeight: 1.65,
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
    </section>
  );
}
