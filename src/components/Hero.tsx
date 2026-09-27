"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaCode, FaPalette, FaDraftingCompass, FaChartLine, FaMobileAlt, FaLaptopCode, FaUsers, FaGraduationCap, FaLayerGroup } from "react-icons/fa";

const ROTATING_DOMAINS = [
  { text: "Full Stack Web Dev", color: "linear-gradient(135deg, #6366f1, #818cf8, #a78bfa)" },
  { text: "Data Science", color: "linear-gradient(135deg, #a855f7, #c084fc, #e879f9)" },
  { text: "Data Analytics", color: "linear-gradient(135deg, #ec4899, #f472b6, #fb7185)" },
  { text: "Artificial Intelligence", color: "linear-gradient(135deg, #8b5cf6, #a78bfa, #c084fc)" },
  { text: "Generative AI", color: "linear-gradient(135deg, #e11d48, #f43f5e, #fb7185)" },
  { text: "Digital Marketing", color: "linear-gradient(135deg, #10b981, #34d399, #6ee7b7)" }
];

const ORBIT_ICONS = [
  { icon: FaLaptopCode, color: "#6366f1", label: "Tech" },
  { icon: FaPalette, color: "#ec4899", label: "Design" },
  { icon: FaDraftingCompass, color: "#14b8a6", label: "CAD" },
  { icon: FaChartLine, color: "#f59e0b", label: "Business" },
  { icon: FaMobileAlt, color: "#818cf8", label: "Dev" },
  { icon: FaCode, color: "#f472b6", label: "Creative" }
];

const STATS = [
  { value: "2000+", label: "Students Enrolled", icon: <FaUsers />, gradient: "linear-gradient(135deg, #a78bfa, #7c3aed)" },
  { value: "95%", label: "Placement Rate", icon: <FaGraduationCap />, gradient: "linear-gradient(135deg, #34d399, #059669)" },
  { value: "15+", label: "Domains Covered", icon: <FaLayerGroup />, gradient: "linear-gradient(135deg, #60a5fa, #3b82f6)" }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_DOMAINS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <style>{`
      @media (max-width: 768px) {
        .hero-section { padding-top: 5.5rem !important; padding-bottom: 3rem !important; }
        .hero-flex { flex-direction: column !important; gap: 2rem !important; }
        .hero-left { flex: unset !important; max-width: 100% !important; }
        .hero-cta-group { flex-direction: column !important; width: 100% !important; }
        .hero-cta-group a, .hero-cta-group button { width: 100% !important; justify-content: center !important; }
        .hero-stats-inner { grid-template-columns: 1fr 1fr !important; padding: 0.5rem !important; }
      }
      @media (max-width: 480px) {
        .hero-stats-inner { grid-template-columns: 1fr !important; }
      }
    `}</style>
    <section
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(79,70,229,0.1) 0%, transparent 50%), linear-gradient(135deg, #0a0818 0%, #0f0c29 30%, #1a1145 60%, #13102e 100%)",
        paddingTop: "7.5rem",
        paddingBottom: "4.5rem"
      }}
    >
      {/* Background Ambient Glow Spheres */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none"
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
          pointerEvents: "none"
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <div className="hero-flex" style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3rem"
        }}>
          {/* Left Text & CTA Column */}
          <div className="hero-left" style={{ flex: "1 1 540px", maxWidth: "680px" }}>
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.5rem 1.2rem",
                borderRadius: "9999px",
                fontSize: "0.88rem",
                fontWeight: 500,
                color: "#c4b5fd",
                background: "rgba(139,92,246,0.12)",
                border: "1px solid rgba(139,92,246,0.25)",
                backdropFilter: "blur(10px)",
                marginBottom: "1.8rem"
              }}
            >
              <span style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#34d399",
                boxShadow: "0 0 10px #34d399"
              }} />
              Multi-Domain Career Platform
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "clamp(2.4rem, 5.2vw, 4.2rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.12,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em"
              }}
            >
              Shape Your Career.<br />
              <span style={{ position: "relative", display: "inline-block" }}>
                Master{" "}
                <span style={{ position: "relative", display: "inline-block", minWidth: "clamp(140px, 55vw, 260px)" }}>
                  {ROTATING_DOMAINS.map((r, c) => (
                    <motion.span
                      key={r.text}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        backgroundImage: r.color,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        whiteSpace: "nowrap"
                      }}
                      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                      animate={{
                        opacity: c === index ? 1 : 0,
                        y: c === index ? 0 : c < index ? -30 : 30,
                        filter: c === index ? "blur(0px)" : "blur(8px)"
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {r.text}
                    </motion.span>
                  ))}
                  <span style={{ visibility: "hidden" }}>Engineering</span>
                </span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.6)",
                maxWidth: "580px",
                lineHeight: 1.7,
                marginBottom: "2.5rem"
              }}
            >
              From Technology and Design to CAD Engineering and Business — explore structured learning paths that prepare you for the real world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hero-cta-group"
              style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexWrap: "wrap" }}
            >
              <Link
                href="/courses"
                className="btn-shimmer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.9rem 2.2rem",
                  borderRadius: "1rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#ffffff",
                  background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  boxShadow: "0 8px 24px rgba(124, 58, 237, 0.4)",
                  textDecoration: "none"
                }}
              >
                Explore Paths <FaArrowRight />
              </Link>

              <a
                href="#how-it-works"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  padding: "0.9rem 1.8rem",
                  borderRadius: "1rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.85)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  textDecoration: "none"
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    color: "#ffffff"
                  }}
                >
                  <FaPlay style={{ marginLeft: "2px" }} />
                </div>
                See How It Works
              </a>
            </motion.div>
          </div>

          {/* Right Orbit Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="orbit-hide-mobile"
            style={{
              flex: "1 1 340px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div style={{ position: "relative", width: "380px", height: "380px" }}>
              {/* Central Logo Mark */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 20,
                  width: "160px",
                  height: "160px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none"
                }}
              >
                <img
                  src="/logos/inspirelogo.png"
                  alt="Pioneer Technologies Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0px 4px 20px rgba(124,58,237,0.8))"
                  }}
                />
              </div>

              {/* Concentric Orbit Circles */}
              {[120, 170].map((r, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: r * 2,
                    height: r * 2,
                    borderRadius: "50%",
                    border: `1px solid rgba(139,92,246,${0.14 - idx * 0.04})`,
                    pointerEvents: "none"
                  }}
                />
              ))}

              {/* Orbiting Domain Icons */}
              {ORBIT_ICONS.map((r, c) => {
                const o = (360 / ORBIT_ICONS.length) * c;
                const m = c % 2 === 0 ? 120 : 170;
                const p = c % 2 === 0 ? 20 : 28;
                const IconComp = r.icon;
                const y = 44;

                return (
                  <motion.div
                    key={r.label}
                    style={{
                      position: "absolute",
                      width: m * 2,
                      height: m * 2,
                      top: `calc(50% - ${m}px)`,
                      left: `calc(50% - ${m}px)`,
                      pointerEvents: "none"
                    }}
                    animate={{ rotate: [o, o + 360] }}
                    transition={{ duration: p, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      style={{
                        position: "absolute",
                        width: y,
                        height: y,
                        top: `calc(50% - ${y / 2}px)`,
                        right: -y / 2,
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${r.color}, ${r.color}dd)`,
                        boxShadow: `0 4px 20px ${r.color}55`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "auto"
                      }}
                      animate={{ rotate: [-o, -o - 360] }}
                      transition={{ duration: p, repeat: Infinity, ease: "linear" }}
                    >
                      <IconComp style={{ color: "#ffffff", fontSize: "1.1rem" }} />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Key Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            marginTop: "4.5rem",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "850px",
              borderRadius: "1.5rem",
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 60px rgba(99,102,241,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              alignItems: "center",
              justifyItems: "center",
              padding: "1rem"
            }}
            className="hero-stats-inner"
          >
            {STATS.map((s, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.5rem"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: s.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "1.2rem",
                    flexShrink: 0
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-orbitron)",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      lineHeight: 1.1
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.5)",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      marginTop: "0.2rem"
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
