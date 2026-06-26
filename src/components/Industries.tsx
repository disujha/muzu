"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

const BRAND_STUDIES = [
  {
    id: "nescafe",
    brandName: "Nescafé",
    category: "Coffee & FMCG",
    desc: "Drive premium trials and explain roast profiles (Arabica vs Robusta) to shoppers standing in high-velocity coffee aisles.",
    dialog: [
      { role: "shopper", text: "Is this jar Arabica coffee or Robusta?" },
      { role: "muzu", text: "It's a premium blend of 100% Arabica beans, medium-dark roasted for a smooth, rich aroma. Scan the QR code to get an iced coffee recipe!" }
    ],
    metric: "+28% Premium Upsells",
  },
  {
    id: "coca-cola",
    brandName: "Coca-Cola",
    category: "Beverages & Soft Drinks",
    desc: "Highlight sugar-free variants, promote food combos, and trigger impulse buys right at the chiller entrance.",
    dialog: [
      { role: "shopper", text: "Which variant of this pack is sugar-free?" },
      { role: "muzu", text: "The Coca-Cola Zero Sugar has zero calories and zero sugar, but has the same iconic taste. We have a buy-2-get-1 offer on it today!" }
    ],
    metric: "+18% Basket Size",
  },
  {
    id: "colgate",
    brandName: "Colgate",
    category: "Oral Care & Health",
    desc: "Confirm ingredient certifications, dental recommendations, and help shoppers choose between whitening vs sensitive toothpaste options.",
    dialog: [
      { role: "shopper", text: "Is Colgate Plax mouthwash alcohol-free?" },
      { role: "muzu", text: "Yes! Colgate Plax is 100% alcohol-free, providing 12-hour antibacterial protection with no burning sensation." }
    ],
    metric: "-40% Aisle Hesitation",
  },
  {
    id: "dove",
    brandName: "Dove",
    category: "Cosmetics & Skincare",
    desc: "Solve ingredient anxiety, explain pH balance, and guide shoppers through moisturization benefits for dry or sensitive skin.",
    dialog: [
      { role: "shopper", text: "Is this soap suitable for eczematous skin?" },
      { role: "muzu", text: "Yes, Dove Beauty Bar is hypoallergenic, contains 1/4 moisturizing cream, and is pediatrician-approved for sensitive skin." }
    ],
    metric: "3.2x Brand Engagement",
  },
  {
    id: "cadbury",
    brandName: "Cadbury",
    category: "Confectionery & Snacks",
    desc: "Excite shoppers with happy-hour combo pairing alerts and limited-edition product descriptions in candy bays.",
    dialog: [
      { role: "shopper", text: "Does this chocolate pack contain nuts?" },
      { role: "muzu", text: "Yes, the Cadbury Fruit & Nut bar contains premium California almonds and raisins. The regular Milk Silk is nut-free." }
    ],
    metric: "+24% Impulse uptake",
  },
  {
    id: "samsung",
    brandName: "Samsung",
    category: "Consumer Electronics",
    desc: "Unpack complex smart features, charger compatibility specs, and warranty details without requiring an in-store promoter.",
    dialog: [
      { role: "shopper", text: "Does this wireless pad support Apple devices?" },
      { role: "muzu", text: "Yes, it supports standard Qi wireless charging up to 7.5W for iPhone, and up to 15W fast wireless charging for Samsung Galaxy models." }
    ],
    metric: "+30% Spec Conversions",
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
    >
      {children}
    </motion.div>
  );
}

export default function Industries() {
  const [activeTab, setActiveTab] = useState("nescafe");

  const current = BRAND_STUDIES.find((ind) => ind.id === activeTab) || BRAND_STUDIES[0];

  return (
    <section
      id="industries"
      style={{
        background: "#1C1C1E",
        paddingTop: "120px",
        paddingBottom: "120px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
      }}
    >
      <div className="container-content">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">Industry Solutions</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light">
              Tailored for Global Brands
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="section-subtext" style={{ margin: "0 auto", color: "rgba(255,255,255,0.55)" }}>
              See how MUZU solves distinct category barriers and dialogue scenarios for the world&apos;s leading brands.
            </p>
          </FadeUp>
        </div>

        {/* Brand Tab Selectors */}
        <FadeUp delay={0.16}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "48px",
              background: "#2C2C2E",
              padding: "6px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.06)",
              maxWidth: "760px",
              margin: "0 auto 48px",
            }}
          >
            {BRAND_STUDIES.map((study) => {
              const active = study.id === activeTab;
              return (
                <button
                  key={study.id}
                  onClick={() => setActiveTab(study.id)}
                  style={{
                    fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                    fontWeight: 700,
                    fontSize: "13.5px",
                    color: active ? "#1C1C1E" : "rgba(255,255,255,0.6)",
                    background: active ? "#F5A623" : "transparent",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    outline: "none",
                  }}
                  className={active ? "shadow-amber-glow-sm" : ""}
                >
                  {study.brandName}
                </button>
              );
            })}
          </div>
        </FadeUp>

        {/* Simulated Dialogue and Case Detail Box */}
        <FadeUp delay={0.24}>
          <div
            style={{
              background: "#2C2C2E",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "40px",
              minHeight: "320px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1fr",
                  gap: "40px",
                  alignItems: "center",
                }}
                className="industries-grid"
              >
                {/* Left: Info details */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "11px",
                        color: "#F5A623",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      {current.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                        fontWeight: 700,
                        fontSize: "24px",
                        color: "#FFFFFF",
                        marginBottom: "12px",
                      }}
                    >
                      {current.brandName} Shelf Dynamics
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                        fontSize: "15px",
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {current.desc}
                    </p>
                  </div>

                  <div
                    style={{
                      background: "rgba(245,166,35,0.06)",
                      border: "1px solid rgba(245,166,35,0.12)",
                      borderRadius: "12px",
                      padding: "16px 20px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "14px",
                      alignSelf: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                        fontWeight: 800,
                        fontSize: "24px",
                        color: "#F5A623",
                      }}
                    >
                      {current.metric.split(" ")[0]}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                        fontSize: "13.5px",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 500,
                      }}
                    >
                      {current.metric.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                </div>

                {/* Right: Dialogue console */}
                <div
                  style={{
                    background: "#1C1C1E",
                    borderRadius: "14px",
                    border: "1px solid rgba(255,255,255,0.04)",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "block",
                    }}
                  >
                    Simulated dialogue at shelf
                  </span>
                  {current.dialog.map((msg, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: msg.role === "shopper" ? "flex-start" : "flex-end",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                          fontSize: "11px",
                          color: msg.role === "shopper" ? "rgba(255,255,255,0.4)" : "#F5A623",
                          fontWeight: 600,
                        }}
                      >
                        {msg.role === "shopper" ? "Shopper" : "MUZU Halo"}
                      </span>
                      <div
                        style={{
                          background: msg.role === "shopper" ? "rgba(255,255,255,0.05)" : "rgba(245,166,35,0.12)",
                          border: msg.role === "shopper" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(245,166,35,0.25)",
                          borderRadius: "10px",
                          padding: "10px 14px",
                          maxWidth: "85%",
                          fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                          fontSize: "13.5px",
                          color: "#FFFFFF",
                          lineHeight: 1.45,
                        }}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .industries-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
