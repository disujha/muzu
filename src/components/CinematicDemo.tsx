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
        padding: "80px 24px 120px",
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
          width: "70%",
          height: "60%",
          background: "radial-gradient(circle, rgba(245,166,35,0.04) 0%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-content" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <FadeUp delay={0}>
            <span className="section-eyebrow">The Experience</span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="section-heading section-heading-light" style={{ marginBottom: "16px" }}>
              See MUZU in Action
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="section-subtext" style={{ margin: "0 auto", color: "rgba(255,255,255,0.55)" }}>
              Watch how our physical AI shelf ambassador wakes up, greets shoppers, and answers questions right at the aisle.
            </p>
          </FadeUp>
        </div>

        {/* Video Player Box */}
        <FadeUp delay={0.24}>
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "960px",
              aspectRatio: "16 / 9",
              borderRadius: "28px",
              background: "#2C2C2E",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(245,166,35,0.05)",
              overflow: "hidden",
              cursor: isPlaying ? "default" : "pointer",
            }}
            onClick={!isPlaying ? handlePlayClick : undefined}
            className="group"
          >
            {/* Ambient breathing glow wrapper */}
            <div
              className="muzu-halo-glow"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "inherit",
                border: "1.5px solid rgba(245,166,35,0.15)",
                pointerEvents: "none",
                zIndex: 5,
              }}
            />

            {!isPlaying ? (
              // Cover Preview
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, rgba(28,28,30,0.95) 0%, rgba(44,44,46,0.9) 100%)",
                  zIndex: 2,
                }}
              >
                {/* Visual backdrop of a shelf */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.15,
                    background: "url('/images/hero_image.jpeg') center/cover no-repeat",
                    filter: "blur(4px)",
                  }}
                />

                {/* Big Apple-Style play button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "#F5A623",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(245,166,35,0.4)",
                    zIndex: 3,
                    cursor: "pointer",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginLeft: "4px" }}>
                    <path d="M8 5v14l11-7z" fill="#1C1C1E" />
                  </svg>
                </motion.div>

                <p
                  style={{
                    fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginTop: "20px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    zIndex: 3,
                  }}
                >
                  Watch 60-sec Demo Video
                </p>
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
