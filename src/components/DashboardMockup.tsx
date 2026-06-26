"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const TOP_QUESTIONS = [
  { text: "Is this dark roast or medium roast?", brand: "Nescafé", time: "Just now" },
  { text: "Yeh soap sensitive skin ke liye safe hai?", brand: "Dove", time: "1m ago" },
  { text: "Does this phone support wireless charging?", brand: "Samsung", time: "3m ago" },
  { text: "Which variant of this pack is sugar-free?", brand: "Coca-Cola", time: "5m ago" },
  { text: "Is there a bundle discount on toothpaste?", brand: "Colgate", time: "8m ago" },
  { text: "Is this dark chocolate dairy-free?", brand: "Cadbury", time: "12m ago" },
];

const SHELF_HEATMAP = [
  { name: "Nescafé Coffee Jar", category: "FMCG", engagement: 96, conversions: "+28%", glow: "rgba(245,166,35,0.18)" },
  { name: "Dove Moisturizer", category: "Cosmetics", engagement: 92, conversions: "+24%", glow: "rgba(255,255,255,0.08)" },
  { name: "Samsung Galaxy A54", category: "Electronics", engagement: 88, conversions: "+30%", glow: "rgba(245,166,35,0.12)" },
  { name: "Coca-Cola Zero Sugar", category: "Beverages", engagement: 85, conversions: "+18%", glow: "rgba(245,166,35,0.06)" },
  { name: "Colgate Charcoal Pack", category: "Personal Care", engagement: 82, conversions: "+22%", glow: "rgba(245,166,35,0.08)" },
  { name: "Cadbury Dairy Milk Silk", category: "Confectionery", engagement: 79, conversions: "+16%", glow: "rgba(245,166,35,0.05)" },
];

function FadeUp({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function DashboardMockup() {
  const [visitorCount, setVisitorCount] = useState(12480);
  const [convCount, setConvCount] = useState(3842);
  const [activeTab, setActiveTab] = useState<"overview" | "heatmap" | "languages">("overview");

  // Dynamically update counter to simulate live telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3));
      if (Math.random() > 0.6) {
        setConvCount((prev) => prev + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="dashboard-console"
      style={{
        background: "#1C1C1E",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Background glow shadow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "50%",
          background: "radial-gradient(circle, rgba(245,166,35,0.03) 0%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-content" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">Retail Intelligence</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "16px" }}>
              The Brand Analytics Console
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="section-subtext" style={{ margin: "0 auto", color: "rgba(255,255,255,0.55)" }}>
              A sleek, Linear-inspired interface showing live customer conversations, product engagement scores, and conversion heatmaps.
            </p>
          </FadeUp>
        </div>

        {/* ─── Stripe/Linear Console UI ─── */}
        <FadeUp delay={0.24}>
          <div
            style={{
              background: "#2C2C2E",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "200px 1fr",
            }}
            className="console-grid"
          >
            {/* Sidebar menu */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.15)",
                borderRight: "1px solid rgba(255,255,255,0.06)",
                padding: "24px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
              className="console-sidebar"
            >
              {/* Logo / Console Label */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F5A623" }} />
                <span style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 700, fontSize: "12px", letterSpacing: "0.08em", color: "#FFFFFF" }}>
                  MUZU CLOUD
                </span>
              </div>

              {/* Navigation list */}
              <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  { id: "overview", label: "Overview", icon: "📊" },
                  { id: "heatmap", label: "Shelf Heatmap", icon: "🔥" },
                  { id: "languages", label: "Demographics", icon: "🌐" },
                ].map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as any)}
                      style={{
                        background: isActive ? "rgba(255,255,255,0.05)" : "transparent",
                        border: "none",
                        borderRadius: "8px",
                        color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                        padding: "10px 14px",
                        fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                        fontSize: "13.5px",
                        fontWeight: isActive ? 700 : 500,
                        textAlign: "left",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        outline: "none",
                      }}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              {/* Pulse status indicator at bottom */}
              <div style={{ marginTop: "auto", paddingLeft: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="muzu-halo-glow" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34A853", display: "inline-block" }} />
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "9px", color: "rgba(255,255,255,0.3)" }}>
                  eSIM STATIONS ONLINE
                </span>
              </div>
            </div>

            {/* Main content viewport */}
            <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "28px" }} className="console-viewport">
              
              {/* Header telemetry status bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  paddingBottom: "16px",
                }}
              >
                <div>
                  <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
                    LIVE AUDIT STREAM
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "11px",
                    color: "#F5A623",
                    background: "rgba(245,166,35,0.05)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    border: "1px solid rgba(245,166,35,0.15)",
                  }}
                >
                  INTERVAL: 24H &bull; ACTIVE BRAND PORTFOLIO
                </div>
              </div>

              {/* Stripe Metrics counters */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
                {[
                  { label: "Daily Visitors (radar)", val: visitorCount, suffix: "", trend: "+14.6%", trendUp: true },
                  { label: "AI Conversations", val: convCount, suffix: "", trend: "+22.4%", trendUp: true },
                  { label: "Engagement Rate", val: 24.8, suffix: "%", trend: "+3.2%", trendUp: true },
                  { label: "Basket Conversion", val: 18.5, suffix: "%", trend: "+2.1%", trendUp: true },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#1C1C1E",
                      borderRadius: "14px",
                      border: "1px solid rgba(255,255,255,0.04)",
                      padding: "20px",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "11px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "8px" }}>
                      {stat.label}
                    </span>
                    <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "28px", fontWeight: 700, color: "#FFFFFF", margin: "0 0 6px 0" }}>
                      {stat.suffix === "%" ? stat.val.toFixed(1) : stat.val.toLocaleString()}
                      {stat.suffix}
                    </p>
                    <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: stat.trendUp ? "#34A853" : "#EA4335" }}>
                      {stat.trend} vs yesterday
                    </span>
                  </div>
                ))}
              </div>

              {/* Viewport Split view based on Active tab */}
              {activeTab === "overview" && (
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "24px" }} className="console-split">
                  {/* Left: Top Questions List */}
                  <div
                    style={{
                      background: "#1C1C1E",
                      borderRadius: "16px",
                      border: "1px solid rgba(255,255,255,0.04)",
                      padding: "24px",
                    }}
                  >
                    <h3 style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", marginBottom: "16px" }}>
                      Shopper Query Feed
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {TOP_QUESTIONS.map((q, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: "#2C2C2E",
                            borderRadius: "10px",
                            padding: "12px 16px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            border: "1px solid rgba(255,255,255,0.03)",
                          }}
                        >
                          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            <span style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13.5px", color: "#FFFFFF" }}>
                              &ldquo;{q.text}&rdquo;
                            </span>
                            <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", color: "#F5A623" }}>
                              {q.brand} Device
                            </span>
                          </div>
                          <span style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
                            {q.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Funnel metrics & Language Distribution */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    {/* Funnel Card */}
                    <div
                      style={{
                        background: "#1C1C1E",
                        borderRadius: "16px",
                        border: "1px solid rgba(255,255,255,0.04)",
                        padding: "24px",
                      }}
                    >
                      <h4 style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 700, fontSize: "15px", color: "#FFFFFF", marginBottom: "16px" }}>
                        Engagement Funnel
                      </h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {[
                          { step: "Shopper Approaches (radar)", val: "100%", percentage: 100 },
                          { step: "Halo Notice Welcome (visual)", val: "84%", percentage: 84 },
                          { step: "Voice Dialog Start (audio)", val: "46%", percentage: 46 },
                          { step: "WhatsApp Coupon Scan (conversion)", val: "22%", percentage: 22 },
                        ].map((funnel, idx) => (
                          <div key={idx}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "rgba(255,255,255,0.6)", marginBottom: "4px" }}>
                              <span>{funnel.step}</span>
                              <span style={{ fontFamily: "var(--font-mono, monospace)", color: "#F5A623" }}>{funnel.val}</span>
                            </div>
                            <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", overflow: "hidden" }}>
                              <div style={{ width: `${funnel.percentage}%`, height: "100%", background: "#F5A623" }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "heatmap" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <h3 style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", margin: 0 }}>
                    Active Product Heatmap & Conversion Lift
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                    {SHELF_HEATMAP.map((shelf, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "#1C1C1E",
                          borderRadius: "16px",
                          border: "1.5px solid rgba(255,255,255,0.04)",
                          padding: "20px",
                          position: "relative",
                          overflow: "hidden",
                          boxShadow: `0 8px 24px ${shelf.glow}`,
                        }}
                      >
                        <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", color: "#F5A623", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
                          {shelf.category}
                        </span>
                        <h4 style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 700, fontSize: "15px", color: "#FFFFFF", marginBottom: "12px" }}>
                          {shelf.name}
                        </h4>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", display: "block" }}>Engagement</span>
                            <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "14px", fontWeight: 700, color: "#FFFFFF" }}>{shelf.engagement}%</span>
                          </div>
                          <div>
                            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", display: "block" }}>Conversion Lift</span>
                            <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "14px", fontWeight: 700, color: "#34A853" }}>{shelf.conversions}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "languages" && (
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "24px" }} className="console-split">
                  {/* Language distribution card */}
                  <div
                    style={{
                      background: "#1C1C1E",
                      borderRadius: "16px",
                      border: "1px solid rgba(255,255,255,0.04)",
                      padding: "24px",
                    }}
                  >
                    <h3 style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", marginBottom: "20px" }}>
                      Dialogue Language Distribution
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      {[
                        { lang: "Hindi (Auto-detected)", percent: 42, color: "#F5A623" },
                        { lang: "English", percent: 35, color: "#FFFFFF" },
                        { lang: "Tamil", percent: 18, color: "rgba(255,255,255,0.4)" },
                        { lang: "Telugu / Others", percent: 5, color: "rgba(255,255,255,0.15)" },
                      ].map((item, idx) => (
                        <div key={idx}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "rgba(255,255,255,0.7)", marginBottom: "6px" }}>
                            <span>{item.lang}</span>
                            <span style={{ fontFamily: "var(--font-mono, monospace)" }}>{item.percent}%</span>
                          </div>
                          <div style={{ height: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "3px" }}>
                            <div style={{ width: `${item.percent}%`, height: "100%", background: item.color, borderRadius: "3px" }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Channel Handoffs Card */}
                  <div
                    style={{
                      background: "#1C1C1E",
                      borderRadius: "16px",
                      border: "1px solid rgba(255,255,255,0.04)",
                      padding: "24px",
                    }}
                  >
                    <h3 style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", marginBottom: "20px" }}>
                      Conversion Handoffs
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      {[
                        { channel: "WhatsApp Chat Openings", rate: "72%", desc: "Direct QR scan at shelf" },
                        { channel: "Sms Coupon Delivery", rate: "18%", desc: "Alternative number inputs" },
                        { channel: "Direct Checkout Link Click", rate: "10%", desc: "Direct purchase link redirect" },
                      ].map((channel, idx) => (
                        <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <span style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontSize: "13.5px", fontWeight: 700, color: "#FFFFFF", display: "block" }}>{channel.channel}</span>
                            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>{channel.desc}</span>
                          </div>
                          <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "16px", fontWeight: 700, color: "#F5A623" }}>{channel.rate}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .console-grid { grid-template-columns: 1fr !important; }
          .console-sidebar { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; flex-direction: row !important; flex-wrap: wrap !important; justify-content: space-between !important; }
          .console-sidebar nav { flex-direction: row !important; flex-wrap: wrap !important; gap: 8px !important; }
          .console-split { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
