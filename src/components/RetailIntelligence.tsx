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

export default function RetailIntelligence() {
  return (
    <section
      id="retail-intelligence"
      style={{
        background: "#1C1C1E",
        padding: "160px 24px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Background radial highlight */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "55%",
          background: "radial-gradient(circle, rgba(245,166,35,0.02) 0%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-content" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">Cloud Console</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "20px" }}>
              Retail Intelligence Platform
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="section-subtext" style={{ margin: "0 auto", color: "rgba(255,255,255,0.55)" }}>
              Go beyond basic sales data. Access deep, unstructured shopper insights captured at the physical shelf edge in real-time.
            </p>
          </FadeUp>
        </div>

        {/* ─── Premium Bento Grid Layout ─── */}
        <div className="bento-grid">
          
          {/* 1. Retail Intelligence Dashboard (span 2) */}
          <div className="bento-item span-2" style={{ minHeight: "340px" }}>
            <FadeUp delay={0.05}>
              <div className="bento-card">
                <div className="card-header">
                  <span className="card-badge">CENTRAL CONSOLE</span>
                  <h3 className="card-title">Retail Intelligence Dashboard</h3>
                </div>
                <p className="card-desc">
                  Synchronize your entire physical store fleet. Watch live shopper approach velocities, active dialogue streams, and shelf status updates in a unified dashboard.
                </p>
                {/* Visual interface simulation */}
                <div className="dashboard-console-preview">
                  <div className="console-bar">
                    <span className="dot status-green" />
                    <span className="console-label">All Aisle Stations Online</span>
                    <span className="console-latency">Edge Latency: 1.4s</span>
                  </div>
                  <div className="console-visual-bars">
                    {[65, 80, 45, 90, 75, 60, 85].map((val, idx) => (
                      <div key={idx} className="bar-container">
                        <div className="bar-fill" style={{ height: `${val}%` }} />
                        <span className="bar-tag">S{idx+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* 2. Purchase Intent (span 1) */}
          <div className="bento-item span-1" style={{ minHeight: "340px" }}>
            <FadeUp delay={0.1}>
              <div className="bento-card justify-between">
                <div>
                  <div className="card-header">
                    <span className="card-badge">CONVERSION PATH</span>
                    <h3 className="card-title">Purchase Intent</h3>
                  </div>
                  <p className="card-desc">
                    Measure category trial lift and checkout rates driven directly by verbal recommendations.
                  </p>
                </div>
                <div className="intent-metric-box">
                  <div className="metric-col">
                    <span className="metric-val text-brand-amber">+28%</span>
                    <span className="metric-label">Premium Trials</span>
                  </div>
                  <div className="metric-col">
                    <span className="metric-val text-brand-white">+18%</span>
                    <span className="metric-label">Basket Growth</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* 3. Customer Questions (span 1) */}
          <div className="bento-item span-1" style={{ minHeight: "360px" }}>
            <FadeUp delay={0.15}>
              <div className="bento-card">
                <div className="card-header">
                  <span className="card-badge">LIVE INQUIRIES</span>
                  <h3 className="card-title">Customer Questions</h3>
                </div>
                <p className="card-desc">
                  Capture unstructured shopper inquiries anonymously. Instantly reveal purchase barriers.
                </p>
                <div className="questions-feed">
                  {[
                    { q: "Is this dark roast organic?", tag: "Coffee" },
                    { q: "Safe for eczematous skin?", tag: "Skincare" },
                    { q: "Is this model alcohol-free?", tag: "Hygiene" }
                  ].map((item, idx) => (
                    <div key={idx} className="feed-bubble">
                      <span className="bubble-text">&ldquo;{item.q}&rdquo;</span>
                      <span className="bubble-tag">{item.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* 4. Conversation Analytics (span 1) */}
          <div className="bento-item span-1" style={{ minHeight: "360px" }}>
            <FadeUp delay={0.2}>
              <div className="bento-card justify-between">
                <div>
                  <div className="card-header">
                    <span className="card-badge">DIALOGUE METRICS</span>
                    <h3 className="card-title">Conversation Analytics</h3>
                  </div>
                  <p className="card-desc">
                    Monitor average dialogue duration, query resolution rates, and brand engagement parameters.
                  </p>
                </div>
                <div className="analytics-details">
                  <div className="gauge-container">
                    <span className="gauge-label">Resolution Rate</span>
                    <span className="gauge-val">98.4%</span>
                    <div className="gauge-bar"><div className="gauge-fill" style={{ width: "98.4%" }} /></div>
                  </div>
                  <div className="gauge-container">
                    <span className="gauge-label">Dialogue Completion</span>
                    <span className="gauge-val">86.2%</span>
                    <div className="gauge-bar"><div className="gauge-fill" style={{ width: "86.2%" }} /></div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* 5. Language Analytics (span 1) */}
          <div className="bento-item span-1" style={{ minHeight: "360px" }}>
            <FadeUp delay={0.25}>
              <div className="bento-card justify-between">
                <div>
                  <div className="card-header">
                    <span className="card-badge">DEMOGRAPHICS</span>
                    <h3 className="card-title">Language Analytics</h3>
                  </div>
                  <p className="card-desc">
                    Auto-detect and map spoken dialetical patterns. Deliver localized product knowledge instantly.
                  </p>
                </div>
                <div className="language-list">
                  {[
                    { lang: "Hindi (Dialect)", val: "42%" },
                    { lang: "English", val: "38%" },
                    { lang: "Tamil / Regional", val: "20%" }
                  ].map((item, idx) => (
                    <div key={idx} className="lang-row">
                      <span className="lang-name">{item.lang}</span>
                      <span className="lang-pct">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* 6. Product Interest Heatmap (span 2) */}
          <div className="bento-item span-2" style={{ minHeight: "300px" }}>
            <FadeUp delay={0.3}>
              <div className="bento-card">
                <div className="card-header">
                  <span className="card-badge">SPATIAL INTENTS</span>
                  <h3 className="card-title">Product Interest Heatmap</h3>
                </div>
                <p className="card-desc">
                  Visualize physical shopper traffic distribution and product shelf engagement. Identify cold zones and hot spots instantly.
                </p>
                {/* Shelf mock visual */}
                <div className="shelf-heatmap-mock">
                  <div className="shelf-level">
                    <span className="shelf-tag">Top Shelf</span>
                    <div className="shelf-slots">
                      <div className="slot heat-low">Low Engagement</div>
                      <div className="slot heat-high">High (88%)</div>
                    </div>
                  </div>
                  <div className="shelf-level">
                    <span className="shelf-tag">Middle Shelf</span>
                    <div className="shelf-slots">
                      <div className="slot heat-max">Max (96%)</div>
                      <div className="slot heat-medium">Medium (64%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* 7. Campaign Performance (span 1) */}
          <div className="bento-item span-1" style={{ minHeight: "300px" }}>
            <FadeUp delay={0.35}>
              <div className="bento-card justify-between">
                <div>
                  <div className="card-header">
                    <span className="card-badge">PROMOTIONAL ROI</span>
                    <h3 className="card-title">Campaign Performance</h3>
                  </div>
                  <p className="card-desc">
                    Deploy audio vouchers and track direct coupon scan conversions on WhatsApp instantly.
                  </p>
                </div>
                <div className="campaign-stats">
                  <div className="stat-row">
                    <span className="stat-label font-mono">OTA UPDATES</span>
                    <span className="stat-val text-brand-amber">Instant</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label font-mono">VOUCHER SCAN</span>
                    <span className="stat-val text-brand-white">22.4%</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1120px;
          margin: 0 auto;
        }
        
        .bento-item {
          display: flex;
          flex-direction: column;
        }

        .span-2 {
          grid-column: span 2;
        }

        .span-1 {
          grid-column: span 1;
        }

        .bento-card {
          background: #2C2C2E;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .bento-card:hover {
          border-color: rgba(245, 166, 35, 0.25);
          box-shadow: 0 12px 36px rgba(245, 166, 35, 0.04);
        }

        .card-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .card-badge {
          font-family: var(--font-mono, monospace);
          font-size: 9px;
          font-weight: 700;
          color: #F5A623;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .card-title {
          font-family: var(--font-syne, 'Syne', sans-serif);
          font-size: 19px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
        }

        .card-desc {
          font-family: var(--font-nunito, 'Nunito', sans-serif);
          font-size: 14px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        /* Micro Visualizers */
        .dashboard-console-preview {
          background: #1C1C1E;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 16px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
          margin-top: 8px;
        }

        .console-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono, monospace);
          font-size: 10px;
          color: rgba(255, 255, 255, 0.4);
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .status-green {
          background: #34A853;
          box-shadow: 0 0 8px rgba(52, 168, 83, 0.6);
        }

        .console-latency {
          margin-left: auto;
        }

        .console-visual-bars {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 64px;
          padding: 0 8px;
        }

        .bar-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          width: 10%;
          height: 100%;
          justify-content: flex-end;
        }

        .bar-fill {
          width: 100%;
          background: linear-gradient(180deg, #F5A623 0%, rgba(245, 166, 35, 0.2) 100%);
          border-radius: 3px 3px 0 0;
          transition: height 0.3s ease;
        }

        .bar-tag {
          font-family: var(--font-mono, monospace);
          font-size: 8px;
          color: rgba(255, 255, 255, 0.25);
        }

        .intent-metric-box {
          display: flex;
          gap: 24px;
          margin-top: 16px;
        }

        .metric-col {
          display: flex;
          flex-direction: column;
          gap: 2px;
          background: #1C1C1E;
          border-radius: 12px;
          padding: 16px;
          flex-grow: 1;
        }

        .metric-val {
          font-family: var(--font-mono, monospace);
          font-size: 24px;
          font-weight: 700;
        }

        .metric-label {
          font-family: var(--font-nunito, 'Nunito', sans-serif);
          font-size: 11px;
          color: rgba(255, 255, 255, 0.4);
        }

        .questions-feed {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 8px;
        }

        .feed-bubble {
          background: #1C1C1E;
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          padding: 10px 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bubble-text {
          font-family: var(--font-nunito, 'Nunito', sans-serif);
          font-size: 12.5px;
          color: #FFFFFF;
        }

        .bubble-tag {
          font-family: var(--font-mono, monospace);
          font-size: 9px;
          color: #F5A623;
          background: rgba(245, 166, 35, 0.08);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .analytics-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 16px;
        }

        .gauge-container {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .gauge-label {
          font-family: var(--font-nunito, 'Nunito', sans-serif);
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
        }

        .gauge-val {
          font-family: var(--font-mono, monospace);
          font-size: 16px;
          font-weight: 700;
          color: #FFFFFF;
        }

        .gauge-bar {
          height: 4px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }

        .gauge-fill {
          height: 100%;
          background: #F5A623;
          border-radius: 2px;
        }

        .language-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 16px;
        }

        .lang-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #1C1C1E;
          border-radius: 8px;
          padding: 8px 12px;
          font-family: var(--font-nunito, 'Nunito', sans-serif);
          font-size: 13px;
        }

        .lang-name {
          color: rgba(255, 255, 255, 0.7);
        }

        .lang-pct {
          font-family: var(--font-mono, monospace);
          color: #F5A623;
          font-weight: 700;
        }

        .shelf-heatmap-mock {
          background: #1C1C1E;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 8px;
          flex-grow: 1;
          justify-content: center;
        }

        .shelf-level {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .shelf-tag {
          font-family: var(--font-mono, monospace);
          font-size: 9px;
          color: rgba(255, 255, 255, 0.35);
          width: 80px;
          text-transform: uppercase;
        }

        .shelf-slots {
          display: flex;
          gap: 8px;
          flex-grow: 1;
        }

        .slot {
          flex-grow: 1;
          border-radius: 6px;
          padding: 8px;
          text-align: center;
          font-family: var(--font-nunito, 'Nunito', sans-serif);
          font-size: 11px;
          font-weight: 600;
        }

        .heat-low {
          background: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .heat-medium {
          background: rgba(245, 166, 35, 0.1);
          color: rgba(245, 166, 35, 0.7);
          border: 1px solid rgba(245, 166, 35, 0.2);
        }

        .heat-high {
          background: rgba(245, 166, 35, 0.22);
          color: #F5A623;
          border: 1px solid rgba(245, 166, 35, 0.4);
          box-shadow: 0 0 12px rgba(245, 166, 35, 0.08);
        }

        .heat-max {
          background: rgba(245, 166, 35, 0.32);
          color: #FFFFFF;
          border: 1px solid #F5A623;
          box-shadow: 0 0 16px rgba(245, 166, 35, 0.15);
        }

        .campaign-stats {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 16px;
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #1C1C1E;
          border-radius: 10px;
          padding: 12px 16px;
        }

        .stat-label {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.05em;
        }

        .stat-val {
          font-family: var(--font-mono, monospace);
          font-size: 16px;
          font-weight: 700;
        }

        /* Responsive styling */
        @media (max-width: 991px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .span-2 {
            grid-column: span 2;
          }
        }

        @media (max-width: 600px) {
          .bento-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .span-2 {
            grid-column: span 1;
          }
        }

        @media (max-width: 767px) {
          #retail-intelligence {
            padding: 80px 20px !important;
          }
        }

        @media (max-width: 480px) {
          .shelf-level {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
          .shelf-tag {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
