"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Product",      href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing",      href: "#pricing" },
  { label: "For Brands",   href: "#brands" },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active nav link via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach((io) => io.disconnect());
  }, []);

  return (
    <>
      <nav
        className="navbar"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: scrolled ? "rgba(28,28,30,0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <Image
              src="/muzu_color_128.png"
              alt="Muzu Logo"
              width={28}
              height={28}
              style={{ objectFit: "contain" }}
            />
            <span
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontWeight: 700,
                fontSize: "20px",
                letterSpacing: "0.14em",
                color: "#FFFFFF",
              }}
            >
              MUZU
            </span>
          </Link>

          {/* Desktop Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((l) => {
              const isActive = activeSection === l.href.replace("#", "");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                    fontWeight: 500,
                    fontSize: "15px",
                    color: isActive ? "#F5A623" : "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="desktop-nav">
            <Link href="#demo" className="btn btn-primary btn-sm">
              Book a Demo
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              padding: "8px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#FFFFFF",
            }}
          >
            <motion.span animate={menuOpen ? { rotate: 45,  y: 7  } : { rotate: 0, y: 0 }} style={{ display: "block", width: 24, height: 2, background: "currentColor", borderRadius: 2, transformOrigin: "center" }} />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} style={{ display: "block", width: 24, height: 2, background: "currentColor", borderRadius: 2 }} />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} style={{ display: "block", width: 24, height: 2, background: "currentColor", borderRadius: 2, transformOrigin: "center" }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "#1C1C1E",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            {NAV_LINKS.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: i * 0.07, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                    fontWeight: 700,
                    fontSize: "2.2rem",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.07, duration: 0.38 }}
            >
              <Link
                href="#demo"
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary"
              >
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav  { display: none   !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none   !important; }
          .mobile-nav  { display: flex   !important; }
        }
      `}</style>
    </>
  );
}
