"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import MuzuRing from "./MuzuRing";

function AnimatedCounter({ value, duration = 1.5, suffix = "", decimals = 0 }: { value: number; duration?: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const totalTicks = 60;
    const increment = (end - start) / totalTicks;
    let tick = 0;

    const timer = setInterval(() => {
      tick++;
      start += increment;
      if (tick >= totalTicks) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, (duration * 1000) / totalTicks);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shelfRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setVideoTime(videoRef.current.currentTime);
    }
  };

  const closeVideo = () => {
    setShowVideoModal(false);
    setVideoTime(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!shelfRef.current) return;
    const rect = shelfRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePos({ x: x * 15, y: y * 15 }); // Tilt amount
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#1C1C1E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        overflow: "hidden",
      }}
    >
      {/* Background ambient light */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          height: "50%",
          background: "radial-gradient(ellipse at center, rgba(245,166,35,0.08) 0%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="section-eyebrow"
          style={{ marginBottom: 0 }}
        >
          World&apos;s First AI Retail Shelf Platform
        </motion.span>

        {/* Headline Wrapper with background faded animating MuzuRing */}
        <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.05,
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <MuzuRing size={440} />
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-syne, 'Syne', sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(3.8rem, 9.5vw, 7.2rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              margin: 0,
              maxWidth: "1100px",
              zIndex: 1,
              position: "relative",
            }}
          >
            Give Every Product a Voice.
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.65)",
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          MUZU transforms ordinary retail shelves into AI-powered brand ambassadors that educate customers, answer questions, and generate real-time retail intelligence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "18px",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "32px",
          }}
        >
          <Link href="/login" className="btn btn-primary btn-lg font-syne">
            Book Live Demo
          </Link>
          <button
            onClick={() => setShowVideoModal(true)}
            className="btn btn-secondary btn-lg font-syne"
            style={{ cursor: "pointer" }}
          >
            Watch 60-sec Demo
          </button>
        </motion.div>

        {/* ─── Apple-Style Retail Shelf Showcase Container ─── */}
        <motion.div
          ref={ref => {
            (shelfRef as any).current = ref;
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
            transition: "transform 0.1s ease",
          }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative flex flex-col items-center select-none"
        >
          {/* Main Visual Bezel Wrapper */}
          <div
            className="hero-shelf-bezel"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "840px",
              height: "440px",
              borderRadius: "32px",
              background: "linear-gradient(180deg, #2C2C2E 0%, #1C1C1E 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Soft inner shelf backlight shadow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at center, rgba(245,166,35,0.07) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />

            {/* Simulated Wooden / Premium Dark Shelf Board Profile */}
            <div
              className="hero-shelf-board"
              style={{
                position: "absolute",
                bottom: "60px",
                left: "40px",
                right: "40px",
                height: "16px",
                background: "linear-gradient(90deg, #3A3A3C 0%, #48484A 50%, #3A3A3C 100%)",
                borderRadius: "4px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.05)",
                zIndex: 10,
              }}
            />

            {/* Glowing amber edge LED track on shelf front */}
            <div
              className="hero-shelf-led"
              style={{
                position: "absolute",
                bottom: "54px",
                left: "40px",
                right: "40px",
                height: "6px",
                background: "linear-gradient(90deg, #F5A623 0%, #FEF3C7 50%, #F5A623 100%)",
                borderRadius: "0 0 4px 4px",
                filter: "drop-shadow(0 0 8px rgba(245,166,35,0.6))",
                zIndex: 11,
              }}
            />

            {/* 2X Larger Halo Render Device & Floating Product Placement */}
            <div
              className="hero-shelf-inner"
              style={{
                position: "relative",
                width: "480px",
                height: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 12,
                marginTop: "-20px",
              }}
            >
              {/* Giant MUZU Halo Breathing amber background bloom */}
              <div
                className="muzu-halo-glow"
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(245,166,35,0.3) 0%, rgba(245,166,35,0.08) 50%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* The Actual Product Render image wrapper */}
              <div
                className="hero-shelf-product"
                style={{
                  position: "relative",
                  width: "240px",
                  height: "240px",
                  borderRadius: "28px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 16px 36px rgba(0,0,0,0.45)",
                  background: "#2C2C2E",
                }}
              >
                <Image
                  src="/images/hero_image.jpeg"
                  alt="MUZU Halo mounted behind shelf product"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              {/* Sound waves overlay on the right of product */}
              <div
                className="hero-sound-waves"
                style={{
                  position: "absolute",
                  right: "40px",
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "3.5px",
                  height: "40px",
                }}
              >
                {[1.1, 0.6, 1.4, 0.8, 1.6, 0.4, 1.2, 0.7].map((delay, idx) => (
                  <div
                    key={idx}
                    className="sound-wave-bar"
                    style={{
                      width: "3px",
                      height: "32px",
                      backgroundColor: "#F5A623",
                      borderRadius: "1.5px",
                      animationDelay: `${delay}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating conversation bubbles */}
          {/* Bubble 1: Left Top */}
          <div
            className="float-bubble glass-panel hero-bubble-1"
            style={{
              position: "absolute",
              top: "20px",
              left: "-30px",
              borderRadius: "16px 16px 16px 4px",
              padding: "12px 18px",
              maxWidth: "220px",
              textAlign: "left",
              boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
              zIndex: 20,
            }}
          >
            <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "11px", color: "#F5A623", fontWeight: 700, margin: "0 0 2px 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Shopper asks
            </p>
            <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13px", color: "#FFFFFF", margin: 0, lineHeight: 1.4 }}>
              &ldquo;Is this coffee organic and dark roast?&rdquo;
            </p>
          </div>

          {/* Bubble 2: Right Top */}
          <div
            className="float-bubble-delayed glass-panel hero-bubble-2"
            style={{
              position: "absolute",
              top: "60px",
              right: "-40px",
              borderRadius: "16px 16px 4px 16px",
              padding: "12px 18px",
              maxWidth: "220px",
              textAlign: "left",
              boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
              zIndex: 20,
            }}
          >
            <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "11px", color: "#F5A623", fontWeight: 700, margin: "0 0 2px 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              MUZU responds
            </p>
            <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13px", color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: 1.4 }}>
              &ldquo;Yes, it is certified 100% organic Arabica with a robust dark profile.&rdquo;
            </p>
          </div>

          {/* Bubble 3: Left Bottom */}
          <div
            className="float-bubble-slow glass-panel hero-bubble-3"
            style={{
              position: "absolute",
              bottom: "100px",
              left: "-50px",
              borderRadius: "16px 16px 16px 4px",
              padding: "12px 18px",
              maxWidth: "200px",
              textAlign: "left",
              boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
              zIndex: 20,
            }}
          >
            <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "11px", color: "#F5A623", fontWeight: 700, margin: "0 0 2px 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Language Auto-detect
            </p>
            <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13px", color: "#FFFFFF", margin: 0, lineHeight: 1.4 }}>
              &ldquo;Yeh skincare cream pack vegetarian hai?&rdquo;
            </p>
          </div>

          {/* Bubble 4: Right Bottom */}
          <div
            className="float-bubble glass-panel hero-bubble-4"
            style={{
              position: "absolute",
              bottom: "40px",
              right: "-20px",
              borderRadius: "16px 16px 4px 16px",
              padding: "12px 18px",
              maxWidth: "200px",
              textAlign: "left",
              boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
              zIndex: 20,
            }}
          >
            <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "11px", color: "#F5A623", fontWeight: 700, margin: "0 0 2px 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Promo Integration
            </p>
            <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13px", color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: 1.4 }}>
              &ldquo;We have a flat 15% discount coupon on WhatsApp today!&rdquo;
            </p>
          </div>
        </motion.div>

        {/* ─── Animated Counters Stats Section ─── */}
        <div
          style={{
            width: "100%",
            maxWidth: "920px",
            background: "#2C2C2E",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.06)",
            marginTop: "64px",
            padding: "24px 0",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
              alignItems: "center",
            }}
            className="stats-grid-bezel"
          >
            {[
              { val: 24, suffix: "%", decimals: 0, label: "Trial Conversion Lift", desc: "Verbal prompts drive impulse trials" },
              { val: 3.2, suffix: "x", decimals: 1, label: "Shopper Engagement", desc: "Compared to traditional silent shelf displays" },
              { val: 12, suffix: "+", decimals: 0, label: "Supported Languages", desc: "Auto-detects and responds in real-time" },
              { val: 2.8, suffix: "s", decimals: 1, label: "Dialogue Latency", desc: "Edge-to-cloud low latency response" },
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: "center",
                  padding: "0 24px",
                  borderRight: idx === 3 ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}
                className="stat-col"
              >
                <p
                  style={{
                    fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                    fontSize: "38px",
                    fontWeight: 800,
                    color: "#F5A623",
                    margin: "0 0 4px 0",
                  }}
                >
                  <AnimatedCounter value={stat.val} decimals={stat.decimals} suffix={stat.suffix} />
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    margin: "0 0 6px 0",
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.45)",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(28,28,30,0.95)",
              backdropFilter: "blur(16px)",
              padding: "24px",
            }}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "860px",
                background: "#2C2C2E",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F5A623" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "#FFFFFF",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Muzu in Action — Shelf Demo
                  </span>
                </div>
                
                <button
                  onClick={closeVideo}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "24px",
                    lineHeight: 1,
                    cursor: "pointer",
                    padding: 0,
                    outline: "none",
                  }}
                >
                  &times;
                </button>
              </div>

              {/* Video Player Area */}
              <div style={{ position: "relative", aspectRatio: "16 / 9", background: "#1C1C1E" }}>
                <video
                  ref={videoRef}
                  src="/videos/intro.mp4"
                  autoPlay
                  controls
                  onTimeUpdate={handleTimeUpdate}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* Simulated Captions Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Customer Speech Bubble */}
                  <AnimatePresence>
                    {videoTime > 0.5 && videoTime < 4.5 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        style={{
                          background: "rgba(28,28,30,0.9)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "12px 12px 12px 4px",
                          padding: "10px 14px",
                          maxWidth: "70%",
                          alignSelf: "flex-start",
                        }}
                      >
                        <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "11px", color: "#F5A623", fontWeight: 700, margin: "0 0 2px 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          Customer
                        </p>
                        <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13px", color: "#FFFFFF", margin: 0, lineHeight: 1.4 }}>
                          &quot;Is this juice 100% natural, or does it have preservatives?&quot;
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Muzu Speech Bubble */}
                  <AnimatePresence>
                    {videoTime >= 4.5 && videoTime < 9.5 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        style={{
                          background: "rgba(245,166,35,0.95)",
                          borderRadius: "12px 12px 4px 12px",
                          padding: "10px 14px",
                          maxWidth: "75%",
                          alignSelf: "flex-end",
                          boxShadow: "0 8px 24px rgba(245,166,35,0.25)",
                          marginTop: "auto",
                          marginBottom: "12px",
                        }}
                      >
                        <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "11px", color: "#1C1C1E", fontWeight: 800, margin: "0 0 2px 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          Muzu (AI Shelf Ambassador)
                        </p>
                        <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13px", color: "#1C1C1E", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
                          &quot;It&apos;s 100% cold-pressed juice with zero added sugar or preservatives. We also have a buy-2-get-1 offer on it today!&quot;
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Center Action */}
                  <AnimatePresence>
                    {videoTime >= 9.5 && videoTime < 13.5 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{
                          background: "rgba(28,28,30,0.9)",
                          border: "1px solid rgba(245,166,35,0.25)",
                          borderRadius: "8px",
                          padding: "8px 16px",
                          alignSelf: "center",
                          marginTop: "auto",
                        }}
                      >
                        <p style={{ fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)", fontSize: "11px", color: "#F5A623", margin: 0 }}>
                          [Customer scans QR to open offer details on WhatsApp...]
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 767px) {
          .hero-bubble-1, .hero-bubble-2, .hero-bubble-3, .hero-bubble-4 {
            display: none !important;
          }
          .hero-shelf-bezel {
            height: 250px !important;
            border-radius: 18px !important;
          }
          .hero-shelf-board {
            bottom: 30px !important;
            left: 20px !important;
            right: 20px !important;
            height: 10px !important;
          }
          .hero-shelf-led {
            bottom: 26px !important;
            left: 20px !important;
            right: 20px !important;
            height: 4px !important;
          }
          .hero-shelf-inner {
            width: 100% !important;
            height: 160px !important;
            margin-top: -10px !important;
          }
          .hero-shelf-product {
            width: 120px !important;
            height: 120px !important;
            border-radius: 14px !important;
          }
          .hero-sound-waves {
            right: 15px !important;
            height: 24px !important;
          }
          .hero-sound-waves .sound-wave-bar {
            width: 2px !important;
            height: 18px !important;
          }
          .muzu-halo-glow {
            width: 130px !important;
            height: 130px !important;
          }
          .stats-grid-bezel {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px 0 !important;
          }
          .stat-col {
            border-right: none !important;
            border-bottom: 1.5px solid rgba(255,255,255,0.06);
            padding-bottom: 16px !important;
          }
          .stat-col:nth-child(3), .stat-col:nth-col(4) {
            border-bottom: none !important;
            padding-bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
