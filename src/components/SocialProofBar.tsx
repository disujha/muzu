"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const STATS = [
  { value: 24,   prefix: "",    suffix: " hrs", label: "Always On"     },
  { value: 4,    prefix: "",    suffix: "",      label: "Languages"     },
  { value: 5500, prefix: "₹",  suffix: "",      label: "/ Month"       },
  { value: 3,    prefix: "< ", suffix: " sec",  label: "Response Time" },
  { value: 0,    prefix: "",    suffix: "",      label: "Sick Days"     },
];

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(spanRef, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || to === 0) { setCount(to); return; }
    let start: number | null = null;
    const dur = 1400;
    const raf = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ep = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(ep * to));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={spanRef}>{prefix}{count.toLocaleString("en-IN")}{suffix}</span>;
}

export default function SocialProofBar() {
  return (
    <div
      style={{
        background: "#2C2C2E",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "32px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
        }}
        className="stats-grid"
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              padding: "0 20px",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                fontWeight: 500,
                fontSize: "28px",
                color: "#FFFFFF",
                lineHeight: 1,
              }}
            >
              <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                fontWeight: 500,
                fontSize: "11px",
                color: "#636366",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px 0;
          }
          .stats-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            padding-bottom: 24px;
          }
          .stats-grid > div:nth-child(5) {
            grid-column: 1 / -1;
            border-bottom: none;
          }
        }
      `}</style>
    </div>
  );
}
