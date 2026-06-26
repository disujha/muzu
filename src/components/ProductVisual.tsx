"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const HARDWARE_PARTS = [
  {
    id: "halo",
    name: "Adaptive Halo™",
    desc: "A smart light-diffusing acrylic ring featuring a calibrated 3000K warm ambient glow. It breathes dynamically to invite shoppers and pulses in real-time to indicate active conversations.",
  },
  {
    id: "voice",
    name: "Voice Engine™",
    desc: "High-fidelity directional acoustic projection coupled with advanced noise-filtering spatial arrays. Projects clear, localized voice replies directly to shoppers, even in noisy aisle environments.",
  },
  {
    id: "core",
    name: "MUZU Core™",
    desc: "The secure metal computing enclosure housing our edge AI model processor. It executes low-latency local dialog processing and triggers encrypted network sync via built-in cellular relays.",
  },
  {
    id: "radar",
    name: "PresenceSense™",
    desc: "A precision proximity micro-radar subsystem. Instantly detects shopper stance and dwell times within a 2-meter, 120-degree cone to trigger context-aware greetings.",
  },
  {
    id: "power",
    name: "Power Module™",
    desc: "Standardized power intake designed for seamless, tool-free installation across standard retail shelf tracks. Integrates a low-profile mechanical bracket to center and support products.",
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

export default function ProductVisual() {
  const [hoveredPart, setHoveredPart] = useState<string>("halo");

  const activePartData = HARDWARE_PARTS.find((p) => p.id === hoveredPart) || HARDWARE_PARTS[0];

  return (
    <section
      id="exploded-view"
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
          width: "70%",
          height: "60%",
          background: "radial-gradient(circle, rgba(245,166,35,0.02) 0%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-content" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">Industrial Engineering</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "20px" }}>
              Exploded Hardware View
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="section-subtext" style={{ margin: "0 auto", color: "rgba(255,255,255,0.55)" }}>
              Explore the advanced electronics and custom optical design structured within MUZU Halo and MUZU Core.
            </p>
          </FadeUp>
        </div>

        {/* ─── Exploded View Interactive Layout ─── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="exploded-grid"
        >
          {/* Left Side: Stacking Technical SVG Teardown */}
          <FadeUp delay={0.2}>
            <div
              style={{
                background: "#2C2C2E",
                borderRadius: "28px",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "36px",
                boxShadow: "0 20px 48px rgba(0,0,0,0.4)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* Interactive SVG Diagram */}
              <div style={{ width: "100%", maxWidth: "440px", aspectRatio: "3 / 4", position: "relative" }}>
                <svg viewBox="0 0 300 400" fill="none" style={{ width: "100%", height: "100%" }}>
                  
                  {/* Stacking lines (dashed vertical indicator) */}
                  <line x1="150" y1="30" x2="150" y2="350" stroke="rgba(245,166,35,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* 1. Adaptive Halo - Frosted Acrylic Halo */}
                  <g
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredPart("halo")}
                    onClick={() => setHoveredPart("halo")}
                  >
                    <ellipse cx="150" cy="50" rx="70" ry="18" fill="none" stroke={hoveredPart === "halo" ? "#F5A623" : "rgba(255,255,255,0.15)"} strokeWidth="6" />
                    <ellipse cx="150" cy="50" rx="70" ry="18" fill="none" stroke="#F5A623" strokeWidth="8" strokeOpacity={hoveredPart === "halo" ? 0.35 : 0} />
                    <text x="235" y="53" fontFamily="var(--font-jetbrains, 'JetBrains Mono', monospace)" fontSize="8px" fill={hoveredPart === "halo" ? "#F5A623" : "rgba(255,255,255,0.4)"}>[01] HALO</text>
                  </g>

                  {/* 2. Adaptive Halo - Warm White Halo Lighting */}
                  <g
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredPart("halo")}
                    onClick={() => setHoveredPart("halo")}
                  >
                    <ellipse cx="150" cy="90" rx="68" ry="17" fill="none" stroke={hoveredPart === "halo" ? "#F5A623" : "rgba(255,255,255,0.15)"} strokeWidth="3" />
                    <ellipse cx="150" cy="90" rx="72" ry="19" fill="none" stroke="#F5A623" strokeWidth="6" strokeOpacity={hoveredPart === "halo" ? 0.35 : 0} />
                    <text x="235" y="93" fontFamily="var(--font-jetbrains, 'JetBrains Mono', monospace)" fontSize="8px" fill={hoveredPart === "halo" ? "#F5A623" : "rgba(255,255,255,0.4)"}>[02] AMBIENT</text>
                  </g>

                  {/* 3. Adaptive Halo - Addressable LED Ring */}
                  <g
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredPart("halo")}
                    onClick={() => setHoveredPart("halo")}
                  >
                    <ellipse cx="150" cy="130" rx="66" ry="16" fill="none" stroke={hoveredPart === "halo" ? "#F5A623" : "rgba(255,255,255,0.15)"} strokeWidth="2.5" />
                    {Array.from({ length: 12 }).map((_, idx) => {
                      const ang = (idx * 30 * Math.PI) / 180;
                      const cx = 150 + 66 * Math.cos(ang);
                      const cy = 130 + 16 * Math.sin(ang);
                      return (
                        <circle key={idx} cx={cx} cy={cy} r="1.8" fill={hoveredPart === "halo" ? "#FFFFFF" : "#F5A623"} fillOpacity={hoveredPart === "halo" ? 1 : 0.4} />
                      );
                    })}
                    <text x="235" y="133" fontFamily="var(--font-jetbrains, 'JetBrains Mono', monospace)" fontSize="8px" fill={hoveredPart === "halo" ? "#F5A623" : "rgba(255,255,255,0.4)"}>[03] PIXELS</text>
                  </g>

                  {/* 4. Power Module - Floating Product Mount */}
                  <g
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredPart("power")}
                    onClick={() => setHoveredPart("power")}
                  >
                    <path d="M90 185 C90 178, 210 178, 210 185 L180 205 C180 207, 120 207, 120 205 Z" fill={hoveredPart === "power" ? "rgba(245,166,35,0.15)" : "rgba(255,255,255,0.04)"} stroke={hoveredPart === "power" ? "#F5A623" : "rgba(255,255,255,0.15)"} strokeWidth="1.5" />
                    <text x="235" y="190" fontFamily="var(--font-jetbrains, 'JetBrains Mono', monospace)" fontSize="8px" fill={hoveredPart === "power" ? "#F5A623" : "rgba(255,255,255,0.4)"}>[04] MOUNT</text>
                  </g>

                  {/* 5. MUZU Core Base enclosure */}
                  <g
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredPart("core")}
                    onClick={() => setHoveredPart("core")}
                  >
                    <path d="M100 270 L100 295 L150 315 L200 295 L200 270 L150 250 Z" fill={hoveredPart === "core" ? "rgba(245,166,35,0.1)" : "rgba(255,255,255,0.03)"} stroke={hoveredPart === "core" ? "#F5A623" : "rgba(255,255,255,0.15)"} strokeWidth="1.5" />
                    <text x="235" y="280" fontFamily="var(--font-jetbrains, 'JetBrains Mono', monospace)" fontSize="8px" fill={hoveredPart === "core" ? "#F5A623" : "rgba(255,255,255,0.4)"}>[05] CORE</text>

                    {/* Integrated Voice Engine - speaker lines */}
                    <g onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart("voice"); }}>
                      <line x1="140" y1="280" x2="160" y2="280" stroke={hoveredPart === "voice" ? "#F5A623" : "rgba(255,255,255,0.2)"} strokeWidth="2" strokeDasharray="2 1" />
                      <line x1="140" y1="284" x2="160" y2="284" stroke={hoveredPart === "voice" ? "#F5A623" : "rgba(255,255,255,0.2)"} strokeWidth="2" strokeDasharray="2 1" />
                    </g>

                    {/* Integrated Voice Engine - microphones */}
                    <circle cx="120" cy="275" r="2.5" fill={hoveredPart === "voice" ? "#F5A623" : "rgba(255,255,255,0.2)"} onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart("voice"); }} />
                    <circle cx="180" cy="275" r="2.5" fill={hoveredPart === "voice" ? "#F5A623" : "rgba(255,255,255,0.2)"} onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart("voice"); }} />

                    {/* MUZU Core processor representation */}
                    <rect x="142" y="292" width="16" height="12" fill={hoveredPart === "core" ? "rgba(245,166,35,0.2)" : "rgba(255,255,255,0.06)"} stroke={hoveredPart === "core" ? "#F5A623" : "rgba(255,255,255,0.2)"} strokeWidth="1" rx="1" onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart("core"); }} />

                    {/* PresenceSense Sensor */}
                    <polygon points="144,264 156,264 153,270 147,270" fill={hoveredPart === "radar" ? "#F5A623" : "rgba(255,255,255,0.2)"} onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart("radar"); }} />

                    {/* Power Module - electrical intake */}
                    <rect x="94" y="278" width="6" height="3" fill={hoveredPart === "power" ? "#F5A623" : "rgba(255,255,255,0.3)"} onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart("power"); }} />
                  </g>

                </svg>
              </div>

              {/* Reset view reminder */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  fontSize: "11px",
                  fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                Hover over components or drag to inspect details
              </div>
            </div>
          </FadeUp>

          {/* Right Side: Specifications Panel */}
          <div style={{ minWidth: 0 }}>
            {/* Interactive parts list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
              {HARDWARE_PARTS.map((part) => {
                const isActive = hoveredPart === part.id;
                return (
                  <div
                    key={part.id}
                    onMouseEnter={() => setHoveredPart(part.id)}
                    style={{
                      background: isActive ? "rgba(245,166,35,0.06)" : "transparent",
                      border: isActive ? "1px solid rgba(245,166,35,0.25)" : "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "12px",
                      padding: "16px 20px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                      }}
                    >
                      {part.name}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: isActive ? "#F5A623" : "rgba(255,255,255,0.2)" }}>
                      {isActive ? "• ACTIVE" : "• SELECT"}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Teardown specification detail display */}
            <div
              style={{
                background: "#2C2C2E",
                borderRadius: "20px",
                border: "1.5px solid #F5A623",
                boxShadow: "0 12px 32px rgba(245,166,35,0.08)",
                padding: "28px",
                minHeight: "180px",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#FFFFFF",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F5A623" }} />
                {activePartData.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                  fontSize: "14.5px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {activePartData.desc}
              </p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 991px) {
          .exploded-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
