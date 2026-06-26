"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FEATURES = [
  {
    title: "Speaks 4 Languages",
    desc: "Hindi, English, Tamil, Bengali. Detects customer language automatically.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 5h12M9 3v2M5 10h5M4 21l5-9 5 9M14 5l5 14M17 12h4" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Always Present",
    desc: "mmWave radar detects still customers — not just movement. Muzu never misses a chance to engage.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" fill="#F5A623"/>
        <path d="M5.6 12 A6.4 6.4 0 0 1 18.4 12" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M2 12 A10 10 0 0 1 22 12" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Brand Personality",
    desc: "Configure voice, tone, accent, and LED theme from your dashboard. Muzu feels like your brand.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#F5A623" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "WhatsApp Handoff",
    desc: "Conversation continues on the channel your customers already use. Scan, tap, done.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Morning Reports",
    desc: "What they asked. What they bought. What confused them. Delivered automatically every day.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#F5A623" strokeWidth="1.6"/>
        <path d="M8 2v4M16 2v4M3 10h18" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M8 14h4M8 17h8" stroke="#F5A623" strokeWidth="1.4" strokeLinecap="round" opacity="0.55"/>
      </svg>
    ),
  },
  {
    title: "Promoter Economics",
    desc: "One Muzu = ₹5,500/month. One human promoter = ₹20,000/month. Zero sick days. The math is clear.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
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
      className="section-padding"
      style={{ background: "#1C1C1E" }}
    >
      <div className="container-content">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">Capabilities</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light">
              Built for India. Built for Brands.
            </h2>
          </FadeUp>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {FEATURES.map((f, i) => (
            <FadeUp key={i} delay={0.07 * i}>
              <div
                className="feature-card"
                style={{
                  background: "#2C2C2E",
                  borderRadius: "16px",
                  padding: "28px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  minHeight: "180px",
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
                    background: "rgba(245,166,35,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {f.icon}
                </div>

                {/* Text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#FFFFFF",
                      margin: 0,
                      lineHeight: 1.3,
                      marginBottom: "8px",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "rgba(255,255,255,0.50)",
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
