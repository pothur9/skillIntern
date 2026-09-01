"use client";

import { FaLaptopCode, FaProjectDiagram, FaUserTie, FaCertificate } from "react-icons/fa";

const PHASES = [
  {
    step: "PHASE 01",
    title: "Foundations & Core Tooling",
    duration: "Weeks 1 - 3",
    desc: "Master language syntax, development tools, foundational math/logic, and core frameworks from scratch under direct mentor supervision.",
    icon: <FaLaptopCode />,
    color: "#4f46e5"
  },
  {
    step: "PHASE 02",
    title: "Advanced Deep-Dive & Real Labs",
    duration: "Weeks 4 - 8",
    desc: "Dive into production architecture, complex data models, APIs, analytics dashboards, machine learning models, or performance advertising campaigns.",
    icon: <FaProjectDiagram />,
    color: "#7c3aed"
  },
  {
    step: "PHASE 03",
    title: "Industry Capstone & Portfolio",
    duration: "Weeks 9 - 11",
    desc: "Build a complete, end-to-end industry capstone project independently or in small teams with 1-on-1 code and design reviews.",
    icon: <FaCertificate />,
    color: "#db2777"
  },
  {
    step: "PHASE 04",
    title: "Career Prep, Referrals & Hiring",
    duration: "Week 12+",
    desc: "Optimize your resume and GitHub/LinkedIn profiles, clear mock interviews, and get direct hiring referrals across 50+ hiring partner companies.",
    icon: <FaUserTie />,
    color: "#059669"
  }
];

export default function LearningRoadmapSection() {
  return (
    <section className="section" style={{
      background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      color: "#0f172a",
      position: "relative",
      borderTop: "1px solid #e2e8f0",
      borderBottom: "1px solid #e2e8f0"
    }}>
      {/* Background Dot Matrix */}
      <div style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 0)",
        backgroundSize: "28px 28px"
      }} />

      <div className="container relative z-10">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
            color: "#4f46e5",
            background: "#eef2ff",
            border: "1px solid #c7d2fe",
            marginBottom: "1rem"
          }}>
            ✦ Proven Methodology
          </div>
          <h2 style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: "0.8rem"
          }}>
            Your 90-Day <span style={{ color: "#4f46e5", background: "rgba(238, 242, 255, 0.8)", padding: "0 0.5rem", borderRadius: "0.5rem" }}>Skill Mastery Roadmap</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "#475569", maxWidth: "600px", margin: "0 auto" }}>
            Every one of our 5 courses follows a structured 4-phase curriculum designed to take you from absolute beginner to industry-ready candidate.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          position: "relative"
        }}>
          {PHASES.map((phase, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: "1.5rem",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                border: `1px solid ${phase.color}30`,
                background: "#ffffff",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                position: "relative",
                transition: "all 0.3s ease"
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <div style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: `${phase.color}12`,
                  border: `1px solid ${phase.color}30`,
                  color: phase.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem"
                }}>
                  {phase.icon}
                </div>

                <span style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  fontFamily: "var(--font-orbitron)",
                  color: phase.color,
                  letterSpacing: "0.05em"
                }}>
                  {phase.step}
                </span>
              </div>

              <span style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600, marginBottom: "0.4rem" }}>
                {phase.duration}
              </span>

              <h3 style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: "0.8rem",
                lineHeight: 1.3
              }}>
                {phase.title}
              </h3>

              <p style={{
                fontSize: "0.88rem",
                color: "#475569",
                lineHeight: 1.6
              }}>
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
