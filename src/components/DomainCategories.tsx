"use client";

import Link from "next/link";
import { FaLaptopCode, FaArrowRight } from "react-icons/fa";

const DOMAINS_DATA = [
  {
    title: "Complete Tech Mastery Package",
    subtitle: "Data Science • Web Dev • AI/ML Combo",
    desc: "One all-in-one package bundling Full Stack Web Development, Data Science & Artificial Intelligence (AI/ML) — React, Node, Python, ML, Deep Learning & Computer Vision.",
    image: "/aiml_course.png",
    icon: <FaLaptopCode />,
    price: "₹8,000",
    originalPrice: "₹1,80,000",
    skills: ["Web Dev", "Data Science", "AI/ML"],
    href: "/courses/COMBO-001",
    gradient: "from-indigo-500 to-purple-600"
  }
];

export default function DomainCategories() {
  return (
    <section
      className="section"
      style={{
        background: "linear-gradient(135deg, #f0f7ff 0%, #eff6ff 50%, #f0f7ff 100%)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(37,99,235,0.15)",
        borderBottom: "1px solid rgba(37,99,235,0.15)"
      }}
    >
      {/* Background Ambient Lighting */}
      <div style={{
        position: "absolute",
        top: "-20%",
        right: "-10%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="section-badge" style={{ margin: "0 auto 0.8rem", background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.25)", color: "#2563eb" }}>
            <span>Complete Tech Package</span>
          </div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#0a1628" }}>
            Explore Our <span className="gradient-text">Complete Package</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "600px", color: "#475569" }}>
            Our all-in-one package bundles Full Stack Web Development, Data Science & AI/ML into a single career program built for immediate industry hiring.
          </p>
        </div>

        {/* Featured Package Card */}
        <div className="career-tracks-grid">
          {DOMAINS_DATA.map((domain, idx) => (
            <Link
              key={idx}
              href={domain.href}
              className="glass-card track-card"
              style={{
                borderRadius: "1.5rem",
                display: "flex",
                flexDirection: "row",
                overflow: "hidden",
                background: "rgba(255, 255, 255, 0.95)",
                border: "1px solid rgba(37, 99, 235, 0.2)",
                transition: "all 0.3s ease",
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer"
              }}
            >
              {/* Featured Image Side */}
              <div className="track-img-wrap" style={{
                width: "360px",
                minWidth: "360px",
                position: "relative",
                overflow: "hidden"
              }}>
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="track-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease"
                  }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, transparent 55%, rgba(255,255,255,0.55) 100%)"
                }} />

                <div style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(37, 99, 235, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2563eb",
                  fontSize: "1.2rem"
                }}>
                  {domain.icon}
                </div>

                <span style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  padding: "0.3rem 0.7rem",
                  borderRadius: "0.5rem",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(6px)",
                  color: "#2563eb",
                  border: "1px solid rgba(37, 99, 235, 0.2)"
                }}>
                  Best Value Combo
                </span>
              </div>

              {/* Content Side */}
              <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
                <div style={{
                  fontSize: "0.8rem",
                  color: "#2563eb",
                  fontWeight: 700,
                  marginBottom: "0.5rem"
                }}>
                  {domain.subtitle}
                </div>

                <h3 style={{
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                  fontWeight: 800,
                  color: "#0a1628",
                  marginBottom: "0.6rem",
                  lineHeight: 1.25
                }}>
                  {domain.title}
                </h3>

                <p style={{
                  fontSize: "0.95rem",
                  color: "#475569",
                  lineHeight: 1.6,
                  marginBottom: "1.2rem",
                  flex: 1
                }}>
                  {domain.desc}
                </p>

                {/* Skills Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.2rem" }}>
                  {domain.skills.map((s, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        padding: "0.3rem 0.8rem",
                        borderRadius: "0.5rem",
                        background: "rgba(37,99,235,0.08)",
                        border: "1px solid rgba(37,99,235,0.15)",
                        color: "#1e40af"
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Pricing + CTA Row */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                  paddingTop: "1.2rem",
                  borderTop: "1px solid rgba(37, 99, 235, 0.12)"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{
                      fontFamily: "var(--font-orbitron)",
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: "#0a1628"
                    }}>
                      {domain.price}
                    </span>
                    <span style={{
                      fontSize: "0.95rem",
                      color: "#94a3b8",
                      textDecoration: "line-through"
                    }}>
                      {domain.originalPrice}
                    </span>
                    <span style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#fff",
                      background: "#10b981",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "0.4rem"
                    }}>
                      96% OFF
                    </span>
                  </div>

                  <div
                    className="btn-secondary"
                    style={{
                      padding: "0.7rem 1.4rem",
                      fontSize: "0.9rem",
                      gap: "0.5rem",
                      borderRadius: "0.7rem"
                    }}
                  >
                    Explore Package <FaArrowRight style={{ fontSize: "0.8rem" }} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .career-tracks-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: stretch;
          max-width: 1040px;
          margin: 0 auto;
        }
        .track-card {
          flex: 1 1 100%;
          max-width: 100%;
          box-shadow: 0 10px 40px rgba(37, 99, 235, 0.12);
        }
        .track-card:hover {
          transform: translateY(-6px);
          border-color: rgba(37, 99, 235, 0.45) !important;
          box-shadow: 0 18px 50px rgba(37, 99, 235, 0.22);
        }
        .track-card:hover .track-img {
          transform: scale(1.06);
        }
        @media (max-width: 768px) {
          .track-card { flex-direction: column !important; }
          .track-img-wrap { width: 100% !important; min-width: 100% !important; height: 200px !important; }
        }
      `}</style>
    </section>
  );
}
