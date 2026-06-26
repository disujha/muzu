"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

export default function WhyNow() {
  return (
    <section
      id="why-now"
      style={{
        background: "#080809",
        padding: "180px 24px",
        borderTop: "1px solid rgba(255, 255, 255, 0.04)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial highlight */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "40%",
          left: "20%",
          width: "50%",
          height: "50%",
          background: "radial-gradient(circle, rgba(245,166,35,0.02) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-content" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "64px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">Industry Paradigm Shift</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "0" }}>
              Why Now?
            </h2>
          </FadeUp>
        </div>

        {/* ─── Premium Asymmetric Split Layout ─── */}
        <div className="why-now-split">
          
          {/* Left Column: Huge High-Contrast Stat & Timing Hook */}
          <div className="stat-hook-col">
            <FadeUp delay={0.15}>
              <div className="stat-callout-block">
                <span className="stat-massive-number text-brand-amber">
                  ₹2.3L Cr
                </span>
                <span className="stat-massive-label">
                  UNDIGITIZED RETAIL SHELF INVENTORY
                </span>
              </div>
              <p className="stat-narrative">
                Traditional physical retail operates in complete data silence. Brands spend 70% of marketing budgets on shelf listing fees and static printed banners, yet remain blind to customer intent at the final point of purchase.
              </p>
            </FadeUp>
          </div>

          {/* Right Column: Off-Grid Vertical Timing Arguments */}
          <div className="arguments-col">
            
            {/* Arg 1 */}
            <FadeUp delay={0.22}>
              <div className="arg-block">
                <div className="arg-header">
                  <span className="arg-num">01</span>
                  <h3 className="arg-title">The Aisle Blind Spot</h3>
                </div>
                <p className="arg-text">
                  Every day, millions of shoppers approach, hesitate, and walk away from store shelves. Without interactive edge telemetry, category managers have zero data on why products fail to convert or why trials drop in high-traffic bays.
                </p>
              </div>
            </FadeUp>

            {/* Divider */}
            <div className="arg-divider" />

            {/* Arg 2 */}
            <FadeUp delay={0.28}>
              <div className="arg-block">
                <div className="arg-header">
                  <span className="arg-num">02</span>
                  <h3 className="arg-title">The Conversational Shift</h3>
                </div>
                <p className="arg-text">
                  Modern consumers expect immediate, personalized guidance in their preferred dialect. Silent packaging can no longer solve ingredient anxiety, clarify warranty specs, or deliver instant WhatsApp discount incentives.
                </p>
              </div>
            </FadeUp>

          </div>
        </div>

      </div>

      <style>{`
        .why-now-split {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 80px;
          align-items: flex-start;
          max-width: 1120px;
          margin: 0 auto;
        }

        .stat-hook-col {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .stat-callout-block {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .stat-massive-number {
          font-family: var(--font-syne, 'Syne', sans-serif);
          font-size: clamp(3.6rem, 9vw, 6.2rem);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.04em;
          text-shadow: 0 0 40px rgba(245,166,35,0.12);
        }

        .stat-massive-label {
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.1em;
        }

        .stat-narrative {
          font-family: var(--font-nunito, 'Nunito', sans-serif);
          font-size: 17px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.65);
          max-width: 480px;
          margin: 0;
        }

        .arguments-col {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .arg-block {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .arg-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .arg-num {
          font-family: var(--font-mono, monospace);
          font-size: 16px;
          color: #F5A623;
          background: rgba(245, 166, 35, 0.08);
          border: 1px solid rgba(245, 166, 35, 0.2);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arg-title {
          font-family: var(--font-syne, 'Syne', sans-serif);
          font-size: 20px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
        }

        .arg-text {
          font-family: var(--font-nunito, 'Nunito', sans-serif);
          font-size: 14.5px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .arg-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.06);
          width: 100%;
        }

        @media (max-width: 991px) {
          .why-now-split {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .stat-narrative {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
