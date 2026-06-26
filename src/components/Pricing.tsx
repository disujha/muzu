"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const PLANS = [
  {
    name: "Lite",
    price: "₹3,500",
    period: "/month",
    description: "Perfect for single-store pilots",
    features: [
      "1 Muzu Device",
      "2 Languages",
      "Basic morning reports",
      "WhatsApp QR handoff",
      "Email support",
    ],
    cta: "Start Pilot",
    href: "/login",
    highlighted: false,
    dark: false,
  },
  {
    name: "Pro",
    price: "₹5,500",
    period: "/month",
    description: "The full Muzu experience",
    features: [
      "1 Muzu Device",
      "4 Languages",
      "Full analytics dashboard",
      "Brand personality config",
      "WhatsApp + QR handoff",
      "Morning + weekly reports",
      "Priority support",
    ],
    cta: "Start Pilot",
    href: "/login",
    highlighted: true,
    badge: "Most Popular",
    dark: false,
  },
  {
    name: "Brand",
    price: "Custom",
    period: "",
    description: "For multi-store rollouts",
    features: [
      "Multiple Muzu Devices",
      "All 4 Languages + custom",
      "White-label dashboard",
      "API access",
      "Custom brand personality",
      "Dedicated account manager",
    ],
    cta: "Contact Us",
    href: "/login",
    highlighted: false,
    dark: true,
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
      style={{ height: "100%", ...style }}
    >
      {children}
    </motion.div>
  );
}

function CheckIcon({ dark }: { dark?: boolean }) {
  return (
    <svg style={{ flexShrink: 0, marginTop: "2px" }} width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill={dark ? "rgba(245,166,35,0.2)" : "rgba(245,166,35,0.15)"}/>
      <path d="M5 8l2 2 4-4" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-section-light
      className="section-padding"
      style={{ background: "#F2F2F7" }}
    >
      <div className="container-content">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <FadeUp delay={0} style={{ height: "auto" }}>
            <span className="section-eyebrow">Pricing</span>
          </FadeUp>
          <FadeUp delay={0.08} style={{ height: "auto" }}>
            <h2 className="section-heading section-heading-dark">
              Simple Pricing. No Surprises.
            </h2>
          </FadeUp>
          <FadeUp delay={0.16} style={{ height: "auto" }}>
            <p
              style={{
                fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                fontSize: "16px",
                color: "#636366",
                marginTop: "16px",
                maxWidth: "460px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Start with a 3-store pilot. Zero hardware cost upfront.
            </p>
          </FadeUp>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0",
            alignItems: "stretch",
          }}
          className="pricing-grid"
        >
          {PLANS.map((plan, i) => {
            const isPro  = plan.name === "Pro";
            const isDark = plan.dark;
            const isLite = plan.name === "Lite";
            const isBrand = plan.name === "Brand";

            return (
              <FadeUp key={plan.name} delay={0.08 * i}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: isPro ? "40px 32px" : "32px 28px",
                    background: isDark ? "#2C2C2E" : "#FFFFFF",
                    border: isPro
                      ? "2px solid #F5A623"
                      : isDark
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid rgba(0,0,0,0.07)",
                    borderRadius: isPro ? "20px" : "16px",
                    boxShadow: isPro
                      ? "0 8px 48px rgba(245,166,35,0.22)"
                      : isDark
                      ? "none"
                      : "0 2px 16px rgba(0,0,0,0.05)",
                    position: "relative",
                    marginTop: isPro ? "-16px" : "0",
                    marginBottom: isPro ? "-16px" : "0",
                    zIndex: isPro ? 2 : 1,
                    ...(isLite ? { borderRight: "none", borderRadius: "16px 0 0 16px" } : {}),
                    ...(isBrand ? { borderLeft: "none", borderRadius: "0 16px 16px 0" } : {}),
                  }}
                  className="pricing-card-responsive"
                >
                  {/* Badge */}
                  {plan.badge ? (
                    <div style={{ marginBottom: "16px" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          background: "#F5A623",
                          color: "#1C1C1E",
                          fontSize: "11px",
                          fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                          fontWeight: 700,
                          padding: "4px 12px",
                          borderRadius: "999px",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {plan.badge}
                      </span>
                    </div>
                  ) : (
                    <div style={{ marginBottom: "16px", height: "26px" }} />
                  )}

                  {/* Plan name */}
                  <div style={{ marginBottom: "24px" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                        fontWeight: 700,
                        fontSize: "22px",
                        color: isDark ? "#FFFFFF" : "#1C1C1E",
                        marginBottom: "6px",
                      }}
                    >
                      {plan.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                        fontSize: "14px",
                        color: "#636366",
                        margin: 0,
                      }}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: "6px",
                      marginBottom: "28px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                        fontWeight: 700,
                        fontSize: "2.5rem",
                        lineHeight: 1,
                        color: isDark ? "#FFFFFF" : "#1C1C1E",
                      }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        style={{
                          fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                          fontSize: "14px",
                          color: "#636366",
                          paddingBottom: "4px",
                        }}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
                      marginBottom: "24px",
                    }}
                  />

                  {/* Features */}
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                      flex: 1,
                      marginBottom: "28px",
                      listStyle: "none",
                      padding: 0,
                    }}
                  >
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                        }}
                      >
                        <CheckIcon dark={isDark} />
                        <span
                          style={{
                            fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                            fontSize: "14px",
                            lineHeight: 1.6,
                            color: isDark ? "rgba(255,255,255,0.8)" : "#2C2C2E",
                          }}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={plan.href}
                    className={`btn ${isPro ? "btn-primary" : isDark ? "btn-white" : "btn-dark"}`}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Bottom note */}
        <FadeUp delay={0.3} style={{ height: "auto" }}>
          <p
            style={{
              textAlign: "center",
              fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
              fontSize: "13px",
              color: "#636366",
              marginTop: "40px",
            }}
          >
            All plans include device setup + onboarding support.{" "}
            <Link
              href="/login"
              style={{ color: "#F5A623", textDecoration: "none" }}
            >
              Talk to us
            </Link>{" "}
            about multi-store pricing.
          </p>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .pricing-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .pricing-card-responsive {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            border-radius: 16px !important;
            border: 1px solid rgba(0,0,0,0.08) !important;
          }
        }
      `}</style>
    </section>
  );
}
