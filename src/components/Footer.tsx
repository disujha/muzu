"use client";

import Link from "next/link";
import Image from "next/image";

const COL_LEFT = [
  { label: "Product",    href: "#product" },
  { label: "Pricing",    href: "#pricing" },
  { label: "For Brands", href: "#brands" },
  { label: "Contact",    href: "mailto:hello@muzu.ai" },
];

const COL_RIGHT = [
  { label: "About AdMesh", href: "#" },
  { label: "Privacy",      href: "#" },
  { label: "Terms",        href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1C1C1E",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container-content" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image src="/muzu_color_128.png" alt="Muzu" width={26} height={26} style={{ objectFit: "contain" }} />
              <span
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#FFFFFF",
                  letterSpacing: "0.14em",
                }}
              >
                MUZU
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "14px", color: "#636366", lineHeight: 1.7, maxWidth: "240px" }}>
              Your Brand. On Every Shelf.
            </p>
            <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13px", color: "rgba(99,99,102,0.55)", lineHeight: 1.65, maxWidth: "240px" }}>
              The world&apos;s first AI brand ambassador built for India&apos;s retail aisles.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "64px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {COL_LEFT.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "14px", color: "#636366", textDecoration: "none", transition: "color 0.2s" }}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {COL_RIGHT.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "14px", color: "#636366", textDecoration: "none", transition: "color 0.2s" }}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* AdMesh */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13px", color: "#636366" }}>A</span>
              <span style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)", fontWeight: 700, fontSize: "14px", color: "#FFFFFF" }}>Rethela</span>
              <span style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "13px", color: "#636366" }}>product</span>
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social"
              style={{
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#636366",
                transition: "all 0.2s",
                textDecoration: "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          className="container-content"
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "12px", color: "rgba(99,99,102,0.55)" }}>
            © {new Date().getFullYear()} Rethela Technology. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)", fontSize: "12px", color: "rgba(99,99,102,0.55)" }}>
            Made in India 🇮🇳
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: #F5A623 !important; }
        .footer-social:hover { color: #F5A623 !important; border-color: rgba(245,166,35,0.4) !important; }
        @media (max-width: 767px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
