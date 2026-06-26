"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const HARDWARE_PARTS = [
  {
    id: "acrylic",
    name: "Frosted Acrylic Halo",
    desc: "A custom light-diffusing acrylic ring that creates a premium, continuous warm halo glow casting ambient light onto adjacent product faces.",
  },
  {
    id: "warm-lighting",
    name: "Warm White Halo Lighting",
    desc: "Specially calibrated 3000K warm-amber LEDs that emit a comforting, premium breathing illumination sequence to invite interaction.",
  },
  {
    id: "led-ring",
    name: "Addressable LED Ring",
    desc: "60 individually addressable RGBW pixels enabling dynamic status pulses, brand color themes, and active voice indicator feedback.",
  },
  {
    id: "mount",
    name: "Floating Product Mount",
    desc: "Low-profile structural bracket that fits discreetly behind products like Nescafé jars, Dove bottles, or Colgate tubes, keeping them centered.",
  },
  {
    id: "core",
    name: "MUZU Core Processor",
    desc: "The secure metal computer enclosure housing local storage, low-power state drivers, and LTE-M cellular communication relays.",
  },
  {
    id: "speaker",
    name: "Integrated Aisle Speaker",
    desc: "3W micro-acoustic speaker tuned specifically to project clear, directional voice guidance directly to the standing customer.",
  },
  {
    id: "mics",
    name: "Dual MEMS Microphones",
    desc: "Beamforming microphone array running noise-cancellation models to extract customer questions in busy, noisy retail environments.",
  },
  {
    id: "cpu",
    name: "ESP32-S3 Wi-Fi/eSIM SoC",
    desc: "Dual-core processor chip executing local speech compression, secure TLS network protocols, and offline conversation buffer queues.",
  },
  {
    id: "radar",
    name: "mmWave Presence Sensor",
    desc: "24GHz micro-radar sensor detecting standing shoppers within a 2-meter, 120-degree cone to trigger active greeting dialogues.",
  },
  {
    id: "power",
    name: "USB-C Power Intake",
    desc: "Standard 5V USB-C interface accepting power from existing shelf-track tracks, battery packs, or wall adapters.",
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
  const [hoveredPart, setHoveredPart] = useState<string | null>("acrylic");

  const activePartData = HARDWARE_PARTS.find((p) => p.id === hoveredPart) || HARDWARE_PARTS[0];

  return (
    <section
      id="exploded-view"
      style={{
        background: "#1C1C1E",
        padding: "120px 24px",
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
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "16px" }}>
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

                  {/* 1. Frosted Acrylic Halo */}
                  <g
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredPart("acrylic")}
                    onClick={() => setHoveredPart("acrylic")}
                  >
                    <ellipse cx="150" cy="50" rx="70" ry="18" fill="none" stroke={hoveredPart === "acrylic" ? "#F5A623" : "rgba(255,255,255,0.15)"} strokeWidth="6" />
                    <ellipse cx="150" cy="50" rx="70" ry="18" fill="none" stroke="#F5A623" strokeWidth="8" strokeOpacity={hoveredPart === "acrylic" ? 0.35 : 0} />
                    <text x="235" y="53" fontFamily="var(--font-jetbrains, 'JetBrains Mono', monospace)" fontSize="8px" fill={hoveredPart === "acrylic" ? "#F5A623" : "rgba(255,255,255,0.4)"}>[01] HALO</text>
                  </g>

                  {/* 2. Warm White Halo Lighting */}
                  <g
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredPart("warm-lighting")}
                    onClick={() => setHoveredPart("warm-lighting")}
                  >
                    <ellipse cx="150" cy="90" rx="68" ry="17" fill="none" stroke={hoveredPart === "warm-lighting" ? "#F5A623" : "rgba(255,255,255,0.15)"} strokeWidth="3" />
                    {/* Glowing backlight spray */}
                    <ellipse cx="150" cy="90" rx="72" ry="19" fill="none" stroke="#F5A623" strokeWidth="6" strokeOpacity={hoveredPart === "warm-lighting" ? 0.35 : 0} />
                    <text x="235" y="93" fontFamily="var(--font-jetbrains, 'JetBrains Mono', monospace)" fontSize="8px" fill={hoveredPart === "warm-lighting" ? "#F5A623" : "rgba(255,255,255,0.4)"}>[02] AMBIENT</text>
                  </g>

                  {/* 3. Addressable LED Ring */}
                  <g
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredPart("led-ring")}
                    onClick={() => setHoveredPart("led-ring")}
                  >
                    <ellipse cx="150" cy="130" rx="66" ry="16" fill="none" stroke={hoveredPart === "led-ring" ? "#F5A623" : "rgba(255,255,255,0.15)"} strokeWidth="2.5" />
                    {/* Pixel dots */}
                    {Array.from({ length: 12 }).map((_, idx) => {
                      const ang = (idx * 30 * Math.PI) / 180;
                      const cx = 150 + 66 * Math.cos(ang);
                      const cy = 130 + 16 * Math.sin(ang);
                      return (
                        <circle key={idx} cx={cx} cy={cy} r="1.8" fill={hoveredPart === "led-ring" ? "#FFFFFF" : "#F5A623"} fillOpacity={hoveredPart === "led-ring" ? 1 : 0.4} />
                      );
                    })}
                    <text x="235" y="133" fontFamily="var(--font-jetbrains, 'JetBrains Mono', monospace)" fontSize="8px" fill={hoveredPart === "led-ring" ? "#F5A623" : "rgba(255,255,255,0.4)"}>[03] PIXELS</text>
                  </g>

                  {/* 4. Floating Product Mount */}
                  <g
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredPart("mount")}
                    onClick={() => setHoveredPart("mount")}
                  >
                    <path d="M90 185 C90 178, 210 178, 210 185 L180 205 C180 207, 120 207, 120 205 Z" fill={hoveredPart === "mount" ? "rgba(245,166,35,0.15)" : "rgba(255,255,255,0.04)"} stroke={hoveredPart === "mount" ? "#F5A623" : "rgba(255,255,255,0.15)"} strokeWidth="1.5" />
                    <text x="235" y="190" fontFamily="var(--font-jetbrains, 'JetBrains Mono', monospace)" fontSize="8px" fill={hoveredPart === "mount" ? "#F5A623" : "rgba(255,255,255,0.4)"}>[04] MOUNT</text>
                  </g>

                  {/* 5. MUZU Core Base enclosure */}
                  <g
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredPart("core")}
                    onClick={() => setHoveredPart("core")}
                  >
                    {/* Isometric base */}
                    <path d="M100 270 L100 295 L150 315 L200 295 L200 270 L150 250 Z" fill={hoveredPart === "core" ? "rgba(245,166,35,0.1)" : "rgba(255,255,255,0.03)"} stroke={hoveredPart === "core" ? "#F5A623" : "rgba(255,255,255,0.15)"} strokeWidth="1.5" />
                    <text x="235" y="280" fontFamily="var(--font-jetbrains, 'JetBrains Mono', monospace)" fontSize="8px" fill={hoveredPart === "core" ? "#F5A623" : "rgba(255,255,255,0.4)"}>[05] CORE</text>

                    {/* Integrated Speaker lines (inside Core) */}
                    <g onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart("speaker"); }}>
                      <line x1="140" y1="280" x2="160" y2="280" stroke={hoveredPart === "speaker" ? "#F5A623" : "rgba(255,255,255,0.2)"} strokeWidth="2" strokeDasharray="2 1" />
                      <line x1="140" y1="284" x2="160" y2="284" stroke={hoveredPart === "speaker" ? "#F5A623" : "rgba(255,255,255,0.2)"} strokeWidth="2" strokeDasharray="2 1" />
                    </g>

                    {/* Dual MEMS Microphones */}
                    <circle cx="120" cy="275" r="2.5" fill={hoveredPart === "mics" ? "#F5A623" : "rgba(255,255,255,0.2)"} onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart("mics"); }} />
                    <circle cx="180" cy="275" r="2.5" fill={hoveredPart === "mics" ? "#F5A623" : "rgba(255,255,255,0.2)"} onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart("mics"); }} />

                    {/* ESP32 CPU chip representation */}
                    <rect x="142" y="292" width="16" height="12" fill={hoveredPart === "cpu" ? "rgba(245,166,35,0.2)" : "rgba(255,255,255,0.06)"} stroke={hoveredPart === "cpu" ? "#F5A623" : "rgba(255,255,255,0.2)"} strokeWidth="1" rx="1" onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart("cpu"); }} />

                    {/* mmWave Sensor (radar patch at front center) */}
                    <polygon points="144,264 156,264 153,270 147,270" fill={hoveredPart === "radar" ? "#F5A623" : "rgba(255,255,255,0.2)"} onMouseEnter={(e) => { e.stopPropagation(); setHoveredPart("radar"); }} />

                    {/* USB-C Port indicator */}
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
                Hover over components to inspect details
              </div>
            </div>
          </FadeUp>

          {/* Right Side: Specifications Panel */}
          <div style={{ minWidth: 0 }}>
            {/* Interactive parts list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "32px" }}>
              {HARDWARE_PARTS.slice(0, 5).map((part) => {
                const isActive = hoveredPart === part.id;
                return (
                  <div
                    key={part.id}
                    onMouseEnter={() => setHoveredPart(part.id)}
                    style={{
                      background: isActive ? "rgba(245,166,35,0.06)" : "transparent",
                      border: isActive ? "1px solid rgba(245,166,35,0.25)" : "1px solid transparent",
                      borderRadius: "12px",
                      padding: "12px 18px",
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
                        color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {part.name}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: isActive ? "#F5A623" : "rgba(255,255,255,0.2)" }}>
                      &bull; ACTIVE
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
                minHeight: "160px",
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

            {/* Inner-core components quick-toggle list */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "24px",
              }}
            >
              {HARDWARE_PARTS.slice(5).map((part) => {
                const isActive = hoveredPart === part.id;
                return (
                  <button
                    key={part.id}
                    onMouseEnter={() => setHoveredPart(part.id)}
                    onClick={() => setHoveredPart(part.id)}
                    style={{
                      fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                      fontSize: "11px",
                      background: isActive ? "#F5A623" : "#2C2C2E",
                      color: isActive ? "#1C1C1E" : "rgba(255,255,255,0.6)",
                      border: isActive ? "1px solid #F5A623" : "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "6px",
                      padding: "6px 12px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      outline: "none",
                    }}
                  >
                    {part.name.replace("Integrated ", "").replace("Wi-Fi/eSIM ", "")}
                  </button>
                );
              })}
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
