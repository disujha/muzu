"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import MuzuRing from "./MuzuRing";

const PERSONALITIES = [
  {
    id: "sommelier",
    role: "The Sommelier",
    target: "Beverages & Fine Dining",
    tone: "Sophisticated, warm, and expert.",
    dialog: "This Cabernet Sauvignon features dark cherry notes with a smooth, lingering tannin finish. Best paired with medium-rare steak or aged Gouda.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12v2H6zM8 5v5c0 3.3 2.7 6 6 6s6-2.7 6-6V5zM12 16v5M9 21h6" />
      </svg>
    ),
    colors: {
      color: "#E040FB",
      glow: "rgba(224, 64, 251, 0.24)",
      glowSoft: "rgba(224, 64, 251, 0.08)",
      echo: "rgba(224, 64, 251, 0.15)"
    }
  },
  {
    id: "dermatologist",
    role: "The Dermatologist",
    target: "Skincare & Cosmetics",
    tone: "Clinical, precise, and reassuring.",
    dialog: "Formulated with 2% Salicylic Acid and Centella to deep clean pores without dry irritation. Pediatrician-approved for sensitive skin.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    colors: {
      color: "#00E5FF",
      glow: "rgba(0, 229, 255, 0.24)",
      glowSoft: "rgba(0, 229, 255, 0.08)",
      echo: "rgba(0, 229, 255, 0.15)"
    }
  },
  {
    id: "nutritionist",
    role: "The Nutritionist",
    target: "Baby Care & Health Foods",
    tone: "Nurturing, certified, and transparent.",
    dialog: "This organic oat formula contains zero refined sugars, is certified gluten-free, and delivers 3g of dietary prebiotic fiber.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    colors: {
      color: "#00E676",
      glow: "rgba(0, 230, 118, 0.24)",
      glowSoft: "rgba(0, 230, 118, 0.08)",
      echo: "rgba(0, 230, 118, 0.15)"
    }
  },
  {
    id: "dealmaker",
    role: "The Dealmaker",
    target: "Grocery & Snack Aisles",
    tone: "Energetic, helpful, and value-focused.",
    dialog: "Grab this party pack! Buy 2 today and get 30% off instantly at the counter. Scan the QR code to save the coupon on WhatsApp!",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    colors: {
      color: "#F5A623",
      glow: "rgba(245, 166, 35, 0.24)",
      glowSoft: "rgba(245, 166, 35, 0.08)",
      echo: "rgba(245, 166, 35, 0.15)"
    }
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
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function BrandPersonalities() {
  const [activeId, setActiveId] = useState("sommelier");

  const current = PERSONALITIES.find((p) => p.id === activeId) || PERSONALITIES[0];

  return (
    <section
      id="brand-personalities"
      style={{
        background: "#1C1C1E",
        padding: "160px 24px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="container-content" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">Adaptive Tone</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "20px" }}>
              Configure Your Brand Personality
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="section-subtext" style={{ margin: "0 auto", color: "rgba(255,255,255,0.55)" }}>
              Customize MUZU&apos;s voice persona, knowledge base, and conversational style to align with your specific category guidelines.
            </p>
          </FadeUp>
        </div>

        {/* ─── Premium Split Visual Layout ─── */}
        <div className="personality-split">
          
          {/* Left Column: Giant MuzuRing Render changing color dynamically */}
          <div className="visual-display">
            <FadeUp delay={0.15}>
              <div className="device-stage">
                {/* Background glow matching active color */}
                <div
                  className="ambient-stage-glow"
                  style={{
                    background: `radial-gradient(circle, ${current.colors.glow} 0%, transparent 65%)`,
                    transition: "background 0.5s ease"
                  }}
                />
                
                {/* Custom active ring component */}
                <MuzuRing size={280} {...current.colors} />
                
                {/* Interactive Dialogue Indicator */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="stage-dialog-box"
                  >
                    <span className="dialog-eyebrow" style={{ color: current.colors.color }}>
                      ACTIVE PERSONA PITCH
                    </span>
                    <p className="dialog-text">
                      &ldquo;{current.dialog}&rdquo;
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Sleek Selectors */}
          <div className="selectors-col">
            <FadeUp delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {PERSONALITIES.map((p, idx) => {
                  const isActive = activeId === p.id;
                  return (
                    <div
                      key={p.id}
                      onClick={() => setActiveId(p.id)}
                      onMouseEnter={() => setActiveId(p.id)}
                      className={`selector-item-card ${isActive ? "active" : ""}`}
                      style={{
                        borderColor: isActive ? p.colors.color : "rgba(255,255,255,0.06)",
                        boxShadow: isActive ? `0 12px 32px ${p.colors.glowSoft}` : "none",
                      }}
                    >
                      <div className="selector-left">
                        <div
                          className="selector-icon-box"
                          style={{
                            color: isActive ? p.colors.color : "rgba(255,255,255,0.4)",
                            background: isActive ? p.colors.glowSoft : "rgba(255,255,255,0.03)",
                            borderColor: isActive ? p.colors.echo : "transparent"
                          }}
                        >
                          {p.icon}
                        </div>
                      </div>
                      <div className="selector-right">
                        <span className="selector-target">{p.target}</span>
                        <h4 className="selector-role" style={{ color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.7)" }}>
                          {p.role}
                        </h4>
                        <span className="selector-tone">
                          Tone: {p.tone}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeUp>
          </div>

        </div>

      </div>

      <style>{`
        .personality-split {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1040px;
          margin: 0 auto;
        }

        .visual-display {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .device-stage {
          background: #2C2C2E;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          width: 100%;
          max-width: 460px;
          height: 480px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px;
          position: relative;
          box-shadow: 0 24px 64px rgba(0,0,0,0.5);
          overflow: hidden;
        }

        .ambient-stage-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .stage-dialog-box {
          background: #1C1C1E;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 16px 20px;
          width: 100%;
          margin-top: 24px;
          z-index: 1;
        }

        .dialog-eyebrow {
          font-family: var(--font-mono, monospace);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 6px;
        }

        .dialog-text {
          font-family: var(--font-nunito, 'Nunito', sans-serif);
          font-size: 13.5px;
          line-height: 1.5;
          color: rgba(255,255,255,0.85);
          margin: 0;
        }

        .selectors-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .selector-item-card {
          background: #2C2C2E;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px;
          padding: 18px 24px;
          display: flex;
          gap: 16px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .selector-item-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
        }

        .selector-item-card.active {
          border-width: 1.5px;
          transform: translateX(8px);
        }

        .selector-left {
          display: flex;
          align-items: center;
        }

        .selector-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .selector-right {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .selector-target {
          font-family: var(--font-mono, monospace);
          font-size: 9.5px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
        }

        .selector-role {
          font-family: var(--font-syne, 'Syne', sans-serif);
          font-size: 17px;
          font-weight: 700;
          margin: 0;
          transition: color 0.2s ease;
        }

        .selector-tone {
          font-family: var(--font-nunito, 'Nunito', sans-serif);
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }

        @media (max-width: 991px) {
          .personality-split {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .selector-item-card.active {
            transform: none !important;
          }
          .device-stage {
            max-width: 100% !important;
          }
        }
        @media (max-width: 767px) {
          #brand-personalities {
            padding: 80px 20px !important;
          }
          .device-stage {
            height: 430px !important;
            padding: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
