"use client";

import { FaBuilding, FaTrophy, FaChartLine, FaGraduationCap } from "react-icons/fa";

const ROW_1 = ["/logos/logo1.png", "/logos/logo2.png", "/logos/logo3.png", "/logos/logo4.png", "/logos/logo5.png"];
const ROW_2 = ["/logos/logo6.png", "/logos/logo7.png", "/logos/logo8.png", "/logos/logo9.png", "/logos/logo10.png"];
const ROW_3 = ["/logos/logo11.png", "/logos/logo12.png", "/logos/logo13.png", "/logos/logo14.png", "/logos/logo15.png"];

const STATS = [
  { value: "500+", label: "Hiring Partners", icon: FaBuilding, color: "#2563eb", bg: "rgba(37,99,235,0.08)" },
  { value: "12 LPA", label: "Highest Package", icon: FaTrophy, color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
  { value: "6.5 LPA", label: "Average Package", icon: FaChartLine, color: "#3b82f6", bg: "rgba(59,130,246,0.08)" },
  { value: "95%", label: "Placement Rate", icon: FaGraduationCap, color: "#10b981", bg: "rgba(16,185,129,0.08)" }
];

function MarqueeRow({ logos, reverse }: { logos: string[]; reverse?: boolean }) {
  const doubled = [...logos, ...logos, ...logos, ...logos];
  return (
    <div style={{ position: "relative", overflow: "hidden", padding: "0.25rem 0" }}>
      <div
        className={reverse ? "animate-brand-marquee-reverse" : "animate-brand-marquee"}
        style={{ gap: "1.5rem" }}
      >
        {doubled.map((logoSrc, i) => (
          <div
            key={i}
            style={{
              width: "140px",
              height: "64px",
              padding: "0.6rem 1.2rem",
              background: "#ffffff",
              border: "1px solid rgba(226,232,240,0.8)",
              borderRadius: "1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}
          >
            <img
              src={logoSrc}
              alt="Partner Logo"
              style={{
                maxHeight: "38px",
                maxWidth: "100px",
                objectFit: "contain"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandsMarquee() {
  return (
    <>
    <style>{`
      .bm-stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.2rem;
        width: 100%;
      }
      @media (max-width: 768px) {
        .bm-stats-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .bm-stat-card {
          width: 100% !important;
          justify-content: flex-start !important;
        }
      }
      @media (max-width: 400px) {
        .bm-stats-grid {
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
        }
        .bm-stat-card {
          padding: 0.7rem 0.9rem !important;
        }
        .bm-stat-value {
          font-size: 1rem !important;
        }
      }
    `}</style>
    <section style={{
      position: "relative",
      padding: "4.5rem 0",
      background: "linear-gradient(180deg, #f0f7ff 0%, #eff6ff 50%, #f0f7ff 100%)",
      color: "#0a1628",
      overflow: "hidden"
    }}>
      {/* Background Dot Matrix */}
      <div style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.18) 1px, transparent 0)",
        backgroundSize: "28px 28px"
      }} />

      {/* Glow Orbs */}
      <div style={{
        position: "absolute",
        top: "-80px",
        left: "25%",
        width: "400px",
        height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none"
      }} />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.4rem 1.2rem",
            borderRadius: "9999px",
            fontSize: "0.75rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#2563eb",
            background: "#dbeafe",
            border: "1px solid rgba(37,99,235,0.15)",
            marginBottom: "1rem"
          }}>
            ✦ Our Placement Partners
          </div>

          <h2 style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "#0a1628",
            marginBottom: "0.8rem"
          }}>
            Secure Placements with <span style={{ color: "#2563eb" }}>Top Brands</span>
          </h2>

          <p style={{ fontSize: "1rem", color: "#64748b", maxWidth: "560px", margin: "0 auto" }}>
            Our students are placed at industry-leading companies across tech, finance, and consulting.
          </p>
        </div>

        {/* 3 Scrolling Marquee Rows */}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "3rem"
        }}>
         
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, #f0f7ff, transparent)",
            zIndex: 20,
            pointerEvents: "none"
          }} />
          <div style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, #f0f7ff, transparent)",
            zIndex: 20,
            pointerEvents: "none"
          }} />

          <MarqueeRow logos={ROW_1} />
          <MarqueeRow logos={ROW_2} reverse />
          <MarqueeRow logos={ROW_3} />
        </div>

        {/* 4 Bottom Stat Pill Cards — 2×2 Grid on Mobile, 1 Row on Desktop */}
        <div className="bm-stats-grid">
          {STATS.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className="bm-stat-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.9rem",
                  padding: "0.9rem 1.2rem",
                  borderRadius: "1rem",
                  background: "#ffffff",
                  border: "1px solid rgba(226,232,240,0.8)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                }}
              >
                <div style={{
                  width: "38px",
                  height: "38px",
                  minWidth: "38px",
                  borderRadius: "10px",
                  background: s.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: s.color,
                  fontSize: "1.1rem",
                  flexShrink: 0
                }}>
                  <IconComp />
                </div>
                <div>
                  <div className="bm-stat-value" style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.1rem", fontWeight: 800, color: "#0a1628", lineHeight: 1.2 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.74rem", color: "#64748b", marginTop: "0.15rem", lineHeight: 1.3 }}>
                    {s.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}
