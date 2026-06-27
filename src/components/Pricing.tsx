"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const PLANS = [
  {
    name: "90-Day Pilot Program",
    price: "₹15,000",
    period: "/store/month",
    description: "Perfect for proving ROI in 3 to 10 store locations",
    payback: "Payback in ~18 days driven by trials. Zero capex.",
    features: [
      "3 to 10 MUZU Halo devices included",
      "Full physical setup & installation",
      "Custom voice training & persona tuning",
      "Real-time analytics dashboard access",
      "Automated email morning reports",
      "Standard WhatsApp QR integration",
    ],
    cta: "Start 90-Day Pilot",
    href: "/login",
    highlighted: true,
    badge: "Recommended Pilot",
    dark: false,
  },
  {
    name: "Enterprise Deployment",
    price: "Custom",
    period: "",
    description: "For brand-wide rollouts across multi-store retail footprints",
    payback: "Custom volume deployment payback models.",
    features: [
      "Bulk hardware deployment pricing",
      "Custom SLAs & next-day hardware swap",
      "Fully white-labeled dashboard option",
      "Secure API access for internal CRM sync",
      "Dedicated retail category managers",
      "Continuous prompt tuning & custom features",
    ],
    cta: "Request Enterprise Quote",
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
            <span className="section-eyebrow">Onboarding Plans</span>
          </FadeUp>
          <FadeUp delay={0.08} style={{ height: "auto" }}>
            <h2 className="section-heading section-heading-dark">
              Simple Pricing. Guaranteed ROI.
            </h2>
          </FadeUp>
          <FadeUp delay={0.16} style={{ height: "auto" }}>
            <p
              style={{
                fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                fontSize: "16px",
                color: "#636366",
                marginTop: "16px",
                maxWidth: "520px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Start small with a pilot trial, evaluate conversion metrics, and scale seamlessly across your entire store distribution network.
            </p>
          </FadeUp>
        </div>

        {/* Cards Wrapper */}
        <div
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            alignItems: "stretch",
          }}
          className="pricing-grid"
        >
          {PLANS.map((plan, i) => {
            const isHighlighted = plan.highlighted;
            const isDark = plan.dark;

            return (
              <FadeUp key={plan.name} delay={0.08 * i}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: "40px 32px",
                    background: isDark ? "#2C2C2E" : "#FFFFFF",
                    border: isHighlighted
                      ? "3.5px solid #F5A623"
                      : isDark
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid rgba(0,0,0,0.07)",
                    borderRadius: "20px",
                    boxShadow: isHighlighted
                      ? "0 24px 64px rgba(245,166,35,0.22)"
                      : "0 2px 16px rgba(0,0,0,0.05)",
                    position: "relative",
                    transform: isHighlighted ? "scale(1.04)" : "scale(1)",
                    zIndex: isHighlighted ? 2 : 1,
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
                        color: isDark ? "rgba(255,255,255,0.5)" : "#636366",
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block with ROI Payback */}
                  <div style={{ marginBottom: "28px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                          fontWeight: 800,
                          fontSize: "3rem",
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
                            color: isDark ? "rgba(255,255,255,0.4)" : "#636366",
                            paddingBottom: "4px",
                          }}
                        >
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-nunito, 'Nunito', sans-serif)",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: isHighlighted ? "#E28B00" : isDark ? "rgba(255,255,255,0.4)" : "#636366",
                        marginTop: "8px",
                        margin: "8px 0 0 0",
                        lineHeight: 1.4,
                      }}
                    >
                      {plan.payback}
                    </p>
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
                      marginBottom: "36px",
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
                            fontSize: "14.5px",
                            lineHeight: 1.5,
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
                    className={`btn ${isHighlighted ? "btn-primary" : isDark ? "btn-white" : "btn-dark"}`}
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
            All pilot programs include full device setup + custom onboarding support.{" "}
            <Link
              href="/login"
              style={{ color: "#F5A623", textDecoration: "none" }}
            >
              Talk to a pilot specialist
            </Link>{" "}
            for custom integration requirements.
          </p>
        </FadeUp>
      </div>
      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
          gap: 28px;
        }
        @media (max-width: 767px) {
          #pricing {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
        }
        @media (max-width: 480px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
          .pricing-card-responsive {
            padding: 24px 16px !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
