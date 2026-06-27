"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import MuzuRing from "./MuzuRing";

const STEPS = [
  {
    number: "01",
    label: "Approaches",
    title: "Shopper Approaches",
    desc: "Precision mmWave presence radar detects a customer standing in front of the product from 2 meters away. 100% privacy-safe, zero cameras.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10" />
        <path d="M12 6a6 6 0 0 1 6 6" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Welcoming Wake",
    title: "Presence Detected & Wake",
    desc: "The ambient LED Halo wakes up with a gentle, breathing warm amber welcoming pulse, instantly highlighting the product and inviting shelf interaction.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
        <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Shopper Speaks",
    title: "Shopper Asks Naturally",
    desc: "The customer speaks to ask about certifications, ingredients, or brand offers. Spoken dialetic regional languages are auto-detected in real-time.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    label: "MUZU Responds",
    title: "Directional Audio Reply",
    desc: "Directional acoustics project the voice response clearly to the listener. Warrants instant brand upsells or QR code checkouts.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
  },
  {
    number: "05",
    label: "Cloud Telemetry",
    title: "Sync & Platform Analytics",
    desc: "The query is parsed anonymously to update the brand cloud console, syncing live question feeds, conversion spikes, and hot zones.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
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
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="how-it-works"
      style={{
        background: "#1C1C1E",
        padding: "160px 24px",
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
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">The Mechanics</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "20px" }}>
              How MUZU Works
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="section-subtext" style={{ margin: "0 auto", color: "rgba(255,255,255,0.55)" }}>
              Experience the end-to-end shopping journey from mmWave detection to conversation logging.
            </p>
          </FadeUp>
        </div>

        {/* ─── Premium Split Layout: Stage vs Steps ─── */}
        <div className="how-works-split">
          
          {/* Left Side: Live Interactive Device Mockup Stage */}
          <div className="works-visual-column">
            <FadeUp delay={0.2}>
              <div className="stage-frame">
                {/* Background ambient halo glow */}
                <div className="stage-backlight" />

                <AnimatePresence mode="wait">
                  {/* Step 1 Visual: Shopper approaching */}
                  {activeStep === 0 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="stage-visualizer-content"
                    >
                      {/* Concentric radar waves */}
                      <div className="radar-arch-container">
                        <div className="radar-arch pulse-1" />
                        <div className="radar-arch pulse-2" />
                        <div className="radar-arch pulse-3" />
                      </div>
                      <span className="visualizer-tag font-mono">24GHz mmWave Radar active</span>
                    </motion.div>
                  )}

                  {/* Step 2 Visual: Breathing Wake Ring */}
                  {activeStep === 1 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="stage-visualizer-content"
                    >
                      <MuzuRing size={200} />
                      <span className="visualizer-tag font-mono" style={{ marginTop: "16px" }}>
                        LED Halo: Breathing Wake State
                      </span>
                    </motion.div>
                  )}

                  {/* Step 3 Visual: Shopper asks question */}
                  {activeStep === 2 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      className="stage-visualizer-content"
                    >
                      <MuzuRing size={160} />
                      <div className="dialog-speech-bubble shopper-bubble">
                        <span className="speech-label">Shopper asks</span>
                        <p className="speech-quote">&ldquo;Is this jar Arabica coffee?&rdquo;</p>
                      </div>
                      <span className="visualizer-tag font-mono" style={{ marginTop: "16px" }}>
                        Regional Dialect Auto-detection
                      </span>
                    </motion.div>
                  )}

                  {/* Step 4 Visual: MUZU responds */}
                  {activeStep === 3 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      className="stage-visualizer-content"
                    >
                      <MuzuRing size={160} />
                      <div className="dialog-speech-bubble muzu-bubble">
                        <span className="speech-label">MUZU responds</span>
                        <p className="speech-quote">&ldquo;Yes, it is certified 100% Arabica.&rdquo;</p>
                      </div>
                      
                      {/* Small soundwave visualization */}
                      <div className="stage-sound-waves">
                        {[0.2, 0.5, 0.3, 0.8, 0.4].map((delay, idx) => (
                          <div
                            key={idx}
                            className="sound-wave-bar"
                            style={{
                              width: "3px",
                              height: "16px",
                              backgroundColor: "#F5A623",
                              borderRadius: "1.5px",
                              animationDelay: `${delay}s`,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5 Visual: Cloud Telemetry sync */}
                  {activeStep === 4 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="stage-visualizer-content"
                    >
                      <div className="telemetry-sync-box">
                        <div className="sync-status">
                          <span className="dot status-green" />
                          <span className="sync-label">Syncing Shopper Query...</span>
                        </div>
                        <div className="sync-data-panel">
                          <div className="sync-bar" style={{ height: "40%" }} />
                          <div className="sync-bar" style={{ height: "70%" }} />
                          <div className="sync-bar" style={{ height: "90%" }} />
                          <div className="sync-bar active" style={{ height: "60%" }} />
                        </div>
                        <span className="sync-tag font-mono">1 Dialogue Logged to Cloud</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          </div>

          {/* Right Side: Vertically Stacked Steps */}
          <div className="works-steps-column">
            <FadeUp delay={0.25}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setActiveStep(idx);
                        setIsPaused(true); // Pause auto-rotation on click
                      }}
                      onMouseEnter={() => {
                        setActiveStep(idx);
                        setIsPaused(true); // Pause auto-rotation on hover
                      }}
                      className={`step-navigation-card ${isActive ? "active" : ""}`}
                      style={{
                        borderColor: isActive ? "#F5A623" : "rgba(255,255,255,0.06)",
                        background: isActive ? "rgba(245,166,35,0.02)" : "rgba(255,255,255,0.01)"
                      }}
                    >
                      <div className="step-num-icon">
                        <div
                          className="step-circle"
                          style={{
                            borderColor: isActive ? "#F5A623" : "rgba(255,255,255,0.12)",
                            background: isActive ? "#F5A623" : "transparent",
                            color: isActive ? "#1C1C1E" : "rgba(255,255,255,0.4)"
                          }}
                        >
                          {step.number}
                        </div>
                      </div>
                      <div className="step-details">
                        <h4 className="step-title" style={{ color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.7)" }}>
                          {step.title}
                        </h4>
                        <p className="step-desc">
                          {step.desc}
                        </p>
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
        .how-works-split {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1040px;
          margin: 0 auto;
        }

        .works-visual-column {
          display: flex;
          justify-content: center;
        }

        .stage-frame {
          background: #2C2C2E;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          width: 100%;
          max-width: 440px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 32px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.5);
          overflow: hidden;
        }

        .stage-backlight {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(245,166,35,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .stage-visualizer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 1;
        }

        .visualizer-tag {
          font-size: 10px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* Proximity waves style */
        .radar-arch-container {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .radar-arch {
          position: absolute;
          border-radius: 50%;
          border: 1.5px solid #F5A623;
          pointer-events: none;
        }

        .pulse-1 {
          width: 60px;
          height: 60px;
          animation: soundWavePulse 2s infinite ease-out;
        }

        .pulse-2 {
          width: 90px;
          height: 90px;
          animation: soundWavePulse 2s infinite ease-out 0.6s;
        }

        .pulse-3 {
          width: 120px;
          height: 120px;
          animation: soundWavePulse 2s infinite ease-out 1.2s;
        }

        /* Dialogue bubble */
        .dialog-speech-bubble {
          border-radius: 14px;
          padding: 10px 16px;
          margin-top: 20px;
          max-width: 240px;
          text-align: left;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }

        .shopper-bubble {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .muzu-bubble {
          background: rgba(245, 166, 35, 0.08);
          border: 1px solid rgba(245, 166, 35, 0.2);
        }

        .speech-label {
          font-family: var(--font-mono, monospace);
          font-size: 8.5px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          display: block;
          margin-bottom: 2px;
        }

        .speech-quote {
          font-family: var(--font-nunito, 'Nunito', sans-serif);
          font-size: 13px;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.4;
        }

        .stage-sound-waves {
          display: flex;
          gap: 3px;
          align-items: center;
          margin-top: 16px;
        }

        /* Telemetry Sync Box */
        .telemetry-sync-box {
          background: #1C1C1E;
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 16px;
          padding: 20px;
          width: 100%;
          max-width: 280px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sync-status {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sync-label {
          font-family: var(--font-mono, monospace);
          font-size: 10px;
          color: rgba(255,255,255,0.5);
        }

        .sync-data-panel {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 60px;
          padding: 0 12px;
        }

        .sync-bar {
          width: 15%;
          background: rgba(255,255,255,0.06);
          border-radius: 2px 2px 0 0;
          transition: height 0.3s ease;
        }

        .sync-bar.active {
          background: #F5A623;
          box-shadow: 0 0 12px rgba(245,166,35,0.4);
        }

        .sync-tag {
          font-size: 9px;
          color: rgba(255,255,255,0.3);
          text-align: center;
          text-transform: uppercase;
        }

        /* Steps column styles */
        .works-steps-column {
          display: flex;
          flex-direction: column;
        }

        .step-navigation-card {
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 18px 20px;
          display: flex;
          gap: 16px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .step-navigation-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
        }

        .step-navigation-card.active {
          border-width: 1.5px;
          transform: translateX(8px);
        }

        .step-num-icon {
          display: flex;
          align-items: flex-start;
        }

        .step-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .step-details {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          gap: 4px;
        }

        .step-title {
          font-family: var(--font-syne, 'Syne', sans-serif);
          font-size: 16px;
          font-weight: 700;
          margin: 0;
          transition: color 0.2s ease;
        }

        .step-desc {
          font-family: var(--font-nunito, 'Nunito', sans-serif);
          font-size: 13.5px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.45);
          margin: 0;
        }

        @keyframes soundWavePulse {
          0% { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }

        @media (max-width: 991px) {
          .how-works-split {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .step-navigation-card.active {
            transform: none !important;
          }
          .stage-frame {
            max-width: 100% !important;
          }
        }
        @media (max-width: 767px) {
          #how-it-works {
            padding: 80px 20px !important;
          }
          .stage-frame {
            height: 340px !important;
            padding: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
