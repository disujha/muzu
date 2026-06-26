"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CATEGORIES = [
  "Coffee", "Beverages", "Snacks", "Personal Care",
  "Dairy", "Pharma", "Cereals", "Home Care",
  "Skincare", "Nutrition", "Baby Care", "Confectionery",
];

const BRAND_CATEGORIES = [
  {
    category: "Beverages & Energy",
    title: "Drive Impulse trials at shelf",
    problem: "Customers default to routine brands, ignoring new launches or premium shelf choices.",
    solution: "mmWave sensor triggers a crisp voice pitch recommending new flavors or cold bundle deals.",
    impact: "+24%",
    impactDesc: "lift in trial and purchase conversion rates",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" y1="2" x2="6" y2="4" />
        <line x1="10" y1="2" x2="10" y2="4" />
        <line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    )
  },
  {
    category: "Beauty & Cosmetics",
    title: "Solve shade & selection confusion",
    problem: "Choice paralysis over shades, skin types, or ingredient benefits leads to shelf desertion.",
    solution: "Interactive multilingual advisor guides customers to the right product, pushing details to WhatsApp.",
    impact: "3.2x",
    impactDesc: "increase in product exploration and brand interaction",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12v3H6Z" />
        <path d="M19 6v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6" />
        <path d="M9 12h6" />
      </svg>
    )
  },
  {
    category: "Snacks & Chocolates",
    title: "Maximize impulse cross-sells",
    problem: "Snack buying is highly impulsive, decided in less than 4 seconds at the aisle.",
    solution: "High-energy voice prompts suggest limited-edition pairings or happy hour discounts.",
    impact: "+18%",
    impactDesc: "increase in average basket size and impulsive uptake",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0" />
        <path d="M8 8L3 3v10Z" />
        <path d="M16 16l5 5v-10Z" />
      </svg>
    )
  },
  {
    category: "Packaged Foods & Dairy",
    title: "Provide instant safety checks",
    problem: "Shoppers look for veg/non-veg tags, allergens, and dietary labels in microscopic back-of-pack print.",
    solution: "Muzu verbally confirms ingredients, allergy warnings, and recipes upon request.",
    impact: "-40%",
    impactDesc: "reduction in shelf-exit rates for dietary buyers",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    category: "Skincare & Wellness",
    title: "Personalize premium skincare",
    problem: "Shoppers struggle to match active ingredients (Retinol, Vitamin C) to their skin concerns.",
    solution: "Muzu conducts a 10-second skin consultation, recommending the exact serum or regimen.",
    impact: "+28%",
    impactDesc: "lift in premium product basket value",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
      </svg>
    )
  },
  {
    category: "Baby & Mother Care",
    title: "Build high-anxiety trust",
    problem: "Parents hesitate over chemical ingredients, pH balance, and safety certifications.",
    solution: "Muzu instantly verifies organic status, pediatrician approvals, and sensitive skin tests.",
    impact: "95%",
    impactDesc: "shopper trust and conversion confidence score",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  }
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

export default function BrandMarquee() {
  const doubled = [...CATEGORIES, ...CATEGORIES];

  return (
    <section
      id="brands"
      style={{
        position: "relative",
        background: "#1C1C1E",
        paddingTop: "120px",
        paddingBottom: "120px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden"
      }}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "60%",
          background: "radial-gradient(ellipse at center, rgba(245,166,35,0.035) 0%, transparent 70%)",
          pointerEvents: "none"
        }}
      />

      <div className="container-content" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Header Stack */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">Category Impact</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "16px" }}>
              Engineered for High-Velocity Retail
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="section-subtext" style={{ margin: "0 auto", color: "rgba(255,255,255,0.55)" }}>
              Muzu addresses the unique shelf dynamics and purchase barriers of different FMCG categories, driving real-time trials and conversions.
            </p>
          </FadeUp>
        </div>

        {/* 2x2 Grid of Category Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "24px",
            marginBottom: "72px"
          }}
        >
          {BRAND_CATEGORIES.map((cat, idx) => (
            <FadeUp key={idx} delay={0.08 * idx}>
              <div
                className="card-dark"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                  padding: "32px",
                  gap: "28px",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: "rgba(245,166,35,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(245,166,35,0.15)"
                      }}
                    >
                      {cat.icon}
                    </div>
                    
                    {/* Category tag */}
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                        fontSize: "11px",
                        color: "#F5A623",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: "rgba(245,166,35,0.05)",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        border: "1px solid rgba(245,166,35,0.1)"
                      }}
                    >
                      {cat.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700,
                      fontSize: "20px",
                      color: "#FFFFFF",
                      marginBottom: "20px",
                      lineHeight: 1.25
                    }}
                  >
                    {cat.title}
                  </h3>

                  {/* Challenge & Solution */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "4px" }}>
                        The Challenge
                      </span>
                      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.55 }}>
                        {cat.problem}
                      </p>
                    </div>
                    <div>
                      <span style={{ fontSize: "11px", color: "#F5A623", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "4px" }}>
                        Muzu Solution
                      </span>
                      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", lineHeight: 1.55 }}>
                        {cat.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Impact Metric Badge */}
                <div
                  style={{
                    background: "rgba(245,166,35,0.06)",
                    border: "1px solid rgba(245,166,35,0.14)",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 800,
                      fontSize: "30px",
                      color: "#F5A623",
                      lineHeight: 1
                    }}
                  >
                    {cat.impact}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.35
                    }}
                  >
                    {cat.impactDesc}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Scrolling Ticker label */}
        <FadeUp delay={0.2}>
          <p className="text-center font-body font-semibold text-[11px] text-brand-gray uppercase tracking-[0.14em] mb-8">
            Also Customizable for Other Major Categories
          </p>
        </FadeUp>

        {/* Scrolling Ticker */}
        <FadeUp delay={0.25}>
          <div className="marquee-container" style={{ opacity: 0.65 }}>
            <div className="marquee-track">
              {doubled.map((label, i) => (
                <div
                  key={i}
                  className="shrink-0 px-5 py-2.5 font-body font-medium text-[13px] rounded-lg border border-white/[0.04] shadow-sm"
                  style={{
                    background: "#2C2C2E",
                    color: "rgba(255,255,255,0.8)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
