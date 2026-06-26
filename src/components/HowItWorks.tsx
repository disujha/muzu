"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const STEPS = [
  {
    number: "01",
    label: "Approaches",
    title: "Shopper Approaches",
    desc: "mmWave presence radar detects a customer standing in front of the product from 2 meters away. No cameras, 100% privacy-safe.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10" />
        <path d="M12 6a6 6 0 0 1 6 6" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Presence Detected",
    title: "Presence Detected & Wake",
    desc: "The ambient LED Halo wakes up with a gentle, breathing amber welcoming pulse, inviting shopper interaction and shelf notice.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
        <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Customer Asks",
    title: "Customer Asks",
    desc: "The shopper speaks naturally in their native language (e.g. English, Hindi, Tamil) to ask about variants, ingredients, or discounts.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="13" cy="10" r="1" fill="currentColor" />
        <circle cx="17" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "04",
    label: "MUZU Responds",
    title: "MUZU Responds",
    desc: "Directional audio answers instantly with customized product specifications, pairing recommendations, or discount vouchers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    ),
  },
  {
    number: "05",
    label: "Dashboard Updates",
    title: "Telemetry & Sync",
    desc: "The conversation is parsed anonymously, updating the brand dashboard with real-time customer questions and conversion metrics.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 17v-6M15 17v-4M12 17v-8" />
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
    >
      {children}
    </motion.div>
  );
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="how-it-works"
      style={{
        background: "#1C1C1E",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "60%",
          background: "radial-gradient(circle, rgba(245,166,35,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-content" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">The Mechanics</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "16px" }}>
              How MUZU Works
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="section-subtext" style={{ margin: "0 auto", color: "rgba(255,255,255,0.55)" }}>
              Experience the end-to-end shopping journey from mmWave detection to conversation logging.
            </p>
          </FadeUp>
        </div>

        {/* ─── Horizontal Interactive Timeline ─── */}
        <FadeUp delay={0.2}>
          <div style={{ position: "relative", width: "100%", padding: "40px 0" }}>
            
            {/* Desktop timeline line */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: "54px",
                left: "10%",
                right: "10%",
                height: "2px",
                background: "rgba(255,255,255,0.06)",
                zIndex: 0,
              }}
              className="timeline-desktop-line"
            >
              {/* Animated Progress highlight filling to active step */}
              <motion.div
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #F5A623 0%, #fead2f 100%)",
                  boxShadow: "0 0 10px rgba(245,166,35,0.5)",
                }}
                animate={{ width: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            {/* Stepper Nodes grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${STEPS.length}, 1fr)`,
                position: "relative",
                zIndex: 2,
              }}
              className="timeline-grid"
            >
              {STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveStep(idx);
                      setIsPaused(true); // Pause auto-rotation on click
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      cursor: "pointer",
                      outline: "none",
                    }}
                    className="timeline-node"
                  >
                    {/* Circle Node */}
                    <motion.div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        border: isActive ? "2px solid #F5A623" : "2px solid rgba(255,255,255,0.12)",
                        background: isActive ? "#F5A623" : "#1C1C1E",
                        color: isActive ? "#1C1C1E" : "rgba(255,255,255,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
                        fontWeight: 700,
                        boxShadow: isActive ? "0 0 15px rgba(245,166,35,0.4)" : "none",
                      }}
                      animate={{ scale: isActive ? 1.15 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Step Label */}
                    <span
                      style={{
                        fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                        fontWeight: 700,
                        fontSize: "13px",
                        color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                        marginTop: "16px",
                        textAlign: "center",
                        transition: "color 0.3s ease",
                      }}
                      className="timeline-label-text"
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeUp>

        {/* ─── Detail Showcase Box ─── */}
        <FadeUp delay={0.3}>
          <div
            style={{
              background: "#2C2C2E",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
              padding: "40px",
              marginTop: "48px",
              minHeight: "260px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "64px 1fr",
                  gap: "32px",
                  alignItems: "flex-start",
                  width: "100%",
                }}
                className="step-detail-grid"
              >
                {/* Large Icon Wrapper */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "16px",
                    background: "rgba(245,166,35,0.08)",
                    border: "1px solid rgba(245,166,35,0.2)",
                    color: "#F5A623",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {STEPS[activeStep].icon}
                </div>

                {/* Text Content */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700,
                      fontSize: "24px",
                      color: "#FFFFFF",
                      marginBottom: "12px",
                    }}
                  >
                    {STEPS[activeStep].title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                      fontSize: "16px",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.7,
                      margin: 0,
                      maxWidth: "760px",
                    }}
                  >
                    {STEPS[activeStep].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .timeline-desktop-line { display: none !important; }
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .timeline-node {
            flex-direction: row !important;
            align-items: center !important;
            gap: 16px !important;
            background: rgba(255,255,255,0.03) !important;
            padding: 10px 16px !important;
            border-radius: 12px !important;
            border: 1.5px solid rgba(255,255,255,0.04) !important;
          }
          .timeline-label-text {
            margin-top: 0 !important;
            text-align: left !important;
          }
          .step-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
