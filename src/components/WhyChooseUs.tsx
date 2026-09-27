"use client";

import { FaExclamationTriangle, FaCheckCircle, FaRocket } from "react-icons/fa";

const PAIN_POINTS = [
  {
    num: "01",
    title: "Confused About Your Career Path?",
    desc: "With hundreds of options, choosing the right career direction feels overwhelming. Most learners waste months exploring random courses with no clear outcome.",
    color: "#7c3aed",
    lightBg: "#ede9fe"
  },
  {
    num: "02",
    title: "Learning Without Direction?",
    desc: "Scattered YouTube tutorials and free resources lack structure. Without a clear roadmap, you spend more time searching than actually learning.",
    color: "#f43f5e",
    lightBg: "#ffe4e6"
  },
  {
    num: "03",
    title: "Skills That Don't Match Industry Needs?",
    desc: "Traditional education often falls behind. Employers need practical, up-to-date skills — not outdated theory from years-old textbooks.",
    color: "#f59e0b",
    lightBg: "#fef3c7"
  }
];

const SOLUTIONS = [
  {
    title: "Structured Learning Paths",
    desc: "No more guessing. Follow a clear, domain-specific roadmap designed by industry experts — from fundamentals to job-ready skills.",
    accent: "#a78bfa",
    highlights: ["Expert-curated roadmaps", "Domain-specific tracks", "Beginner to advanced"]
  },
  {
    title: "Practical, Project-Based Learning",
    desc: "Every course includes real-world projects, case studies, and portfolio-worthy assignments — not just theory.",
    accent: "#34d399",
    highlights: ["Real-world projects", "Portfolio-ready work", "Hands-on practice"]
  },
  {
    title: "Industry-Aligned Outcomes",
    desc: "Our curriculum is co-designed with hiring companies. You learn exactly what employers want — across every domain we offer.",
    accent: "#60a5fa",
    highlights: ["Company partnerships", "Current tech stacks", "Placement support"]
  }
];

export default function WhyChooseUs() {
  return (
    <>
    <style>{`
      @media (max-width: 640px) {
        .why-header { margin-bottom: 2.5rem !important; }
      }
    `}</style>
    <section className="section" id="why-us" style={{
      background: "linear-gradient(135deg, #1f0b3d 0%, #2e1054 100%)",
      borderTop: "1px solid rgba(236, 72, 153, 0.2)",
      borderBottom: "1px solid rgba(236, 72, 153, 0.2)"
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-badge" style={{ margin: "0 auto 1rem" }}>
            <span>Familiar? vs The Solution</span>
          </div>
          <h2 className="section-title">
            The Learning Experience <span className="gradient-text">Redefined</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            These are the real challenges learners face every day — and we built our platform to solve them.
          </p>
        </div>

        {/* 2-Column Side-by-Side Comparison */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2.5rem"
        }}>
          {/* Pain Points Column */}
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              color: "#f87171",
              fontFamily: "var(--font-orbitron)",
              fontSize: "1.15rem",
              fontWeight: 700,
              marginBottom: "1.8rem"
            }}>
              <FaExclamationTriangle /> Common Student Struggles
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {PAIN_POINTS.map((p) => (
                <div
                  key={p.num}
                  style={{
                    background: "rgba(239, 68, 68, 0.04)",
                    border: "1px solid rgba(239, 68, 68, 0.15)",
                    borderRadius: "1.2rem",
                    padding: "1.5rem",
                    display: "flex",
                    gap: "1.2rem"
                  }}
                >
                  <div style={{
                    fontFamily: "var(--font-orbitron)",
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: p.color
                  }}>
                    {p.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fca5a5", marginBottom: "0.4rem" }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              color: "#c084fc",
              fontFamily: "var(--font-orbitron)",
              fontSize: "1.15rem",
              fontWeight: 700,
              marginBottom: "1.8rem"
            }}>
              <FaCheckCircle /> The Pioneer Technologies Solution
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {SOLUTIONS.map((s, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: "1.5rem",
                    borderRadius: "1.2rem",
                    border: `1px solid ${s.accent}40`,
                    boxShadow: `0 0 20px ${s.accent}15`
                  }}
                >
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", marginBottom: "0.4rem" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "0.8rem" }}>
                    {s.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {s.highlights.map((h, j) => (
                      <span key={j} style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "0.2rem 0.6rem",
                        borderRadius: "9999px",
                        background: `${s.accent}15`,
                        color: s.accent,
                        border: `1px solid ${s.accent}30`
                      }}>
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
