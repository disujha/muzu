"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      {children}
    </motion.div>
  );
}

export default function CinematicDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  return (
    <section
      id="cinematic-demo"
      style={{
        background: "#1C1C1E",
        padding: "160px 24px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "70%",
          background: "radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-content" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">The Experience</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "20px" }}>
              See MUZU in Action
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="section-subtext" style={{ margin: "0 auto", color: "rgba(255,255,255,0.55)" }}>
              Watch how our physical AI shelf ambassador wakes up, greets shoppers, and answers questions right at the aisle.
            </p>
          </FadeUp>
        </div>

        {/* Video Player Box - Massive Wide Screen stage */}
        <FadeUp delay={0.24}>
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1120px",
              aspectRatio: "16 / 9",
              borderRadius: "28px",
              background: "#111112",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.65), 0 0 60px rgba(245,166,35,0.06)",
              overflow: "hidden",
              cursor: isPlaying ? "default" : "pointer",
            }}
            onClick={!isPlaying ? handlePlayClick : undefined}
            className="group"
          >
            {/* Ambient breathing glow bezel wrapper */}
            <div
              className="muzu-halo-glow"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "inherit",
                border: "1.5px solid rgba(245,166,35,0.2)",
                pointerEvents: "none",
                zIndex: 5,
              }}
            />

            {!isPlaying ? (
              // Cover Preview with high visibility
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(180deg, rgba(28,28,30,0.1) 0%, rgba(28,28,30,0.7) 100%)",
                  zIndex: 2,
                }}
              >
                {/* Crisp Background shelf photo with no blur */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.7,
                    background: "url('/images/hero_image.jpeg') center/cover no-repeat",
                    zIndex: 0,
                  }}
                />

                {/* Ambient glow highlight in center */}
                <div
                  style={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(245,166,35,0.2) 0%, transparent 70%)",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />

                {/* Big Apple-Style play button with concentric ripples */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: "96px",
                    height: "96px",
                    borderRadius: "50%",
                    background: "#F5A623",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 12px 36px rgba(245,166,35,0.55)",
                    zIndex: 3,
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  {/* Ripple Ring 1 */}
                  <motion.div
                    animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      border: "2.5px solid #F5A623",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Ripple Ring 2 */}
                  <motion.div
                    animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      border: "2.5px solid #F5A623",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Play Icon SVG */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ marginLeft: "6px", zIndex: 4 }}>
                    <path d="M8 5v14l11-7z" fill="#1C1C1E" />
                  </svg>
                </motion.div>

                {/* Subtitle tag overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "24px",
                    left: "24px",
                    zIndex: 3,
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    color: "#FFFFFF",
                    background: "rgba(0,0,0,0.55)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  ACTIVE AISLE DEMO &bull; 60 SEC
                </div>
              </div>
            ) : (
              // Inline Video Element
              <video
                ref={videoRef}
                src="/videos/intro.mp4"
                controls
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
