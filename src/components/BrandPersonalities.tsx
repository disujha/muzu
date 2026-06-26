"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PERSONALITIES = [
  {
    role: "The Sommelier",
    target: "Beverages & Fine Dining",
    tone: "Sophisticated, warm, and expert.",
    dialog: "This Cabernet Sauvignon features dark cherry notes with a smooth, lingering tannin finish. Best paired with medium-rare steak or aged Gouda.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12v2H6zM8 5v5c0 3.3 2.7 6 6 6s6-2.7 6-6V5zM12 16v5M9 21h6" />
      </svg>
    ),
  },
  {
    role: "The Dermatologist",
    target: "Skincare & Cosmetics",
    tone: "Clinical, precise, and reassuring.",
    dialog: "Formulated with 2% Salicylic Acid and Centella to deep clean pores without dry irritation. Pediatrician-approved for sensitive skin.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    role: "The Nutritionist",
    target: "Baby Care & Health Foods",
    tone: "Nurturing, certified, and transparent.",
    dialog: "This organic oat formula contains zero refined sugars, is certified gluten-free, and delivers 3g of dietary prebiotic fiber.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    role: "The Dealmaker",
    target: "Grocery & Snack Aisles",
    tone: "Energetic, helpful, and value-focused.",
    dialog: "Grab this party pack! Buy 2 today and get 30% off instantly at the counter. Scan the QR code to save the coupon on WhatsApp!",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
}

export default function BrandPersonalities() {
  return (
    <section
      id="brand-personalities"
      style={{
        background: "#1C1C1E",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="container-content">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">Adaptive Tone</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "16px" }}>
              Configure Your Brand Personality
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="section-subtext" style={{ margin: "0 auto", color: "rgba(255,255,255,0.55)" }}>
              Customize MUZU&apos;s voice persona, knowledge base, and tone of voice to align with your specific category guidelines.
            </p>
          </FadeUp>
        </div>

        {/* Personality Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {PERSONALITIES.map((p, i) => (
            <FadeUp key={i} delay={0.08 * i}>
              <div
                style={{
                  background: "#2C2C2E",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  gap: "20px",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                className="feature-card card-dark"
              >
                {/* Icon & Category Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "rgba(245,166,35,0.08)",
                      border: "1px solid rgba(245,166,35,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {p.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.target.split(" ")[0]}
                  </span>
                </div>

                {/* Role Details */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#FFFFFF",
                      marginBottom: "6px",
                    }}
                  >
                    {p.role}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                      fontSize: "13px",
                      color: "#F5A623",
                      fontWeight: 600,
                      margin: 0,
                    }}
                  >
                    Tone: {p.tone}
                  </p>
                </div>

                {/* Sample Dialogue Bubble */}
                <div
                  style={{
                    background: "#1C1C1E",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.04)",
                    padding: "16px",
                    marginTop: "auto",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "9px",
                      color: "rgba(255,255,255,0.3)",
                      display: "block",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    Simulated dialogue pitch
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                      fontSize: "13.5px",
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.75)",
                      margin: 0,
                    }}
                  >
                    &ldquo;{p.dialog}&rdquo;
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
