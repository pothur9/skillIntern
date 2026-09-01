"use client";

import { useState } from "react";
import Link from "next/link";
import { FaLaptopCode, FaPalette, FaDraftingCompass, FaChartLine, FaClock, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const PATHS = [
  {
    id: 0,
    courseId: "FULLSTACK-001",
    title: "Full Stack Web Development",
    subtitle: "Frontend, Backend, Databases, DevOps",
    icon: <FaLaptopCode />,
    duration: "120 Hours (12 Weeks)",
    skills: ["React 19", "Next.js", "Node.js", "MongoDB", "SQL"],
    accent: "#6366f1",
    milestones: ["HTML/CSS/JS", "React & Next.js", "Node & APIs", "Full Stack SaaS", "Hiring Referral"]
  },
  {
    id: 1,
    courseId: "DATASCI-002",
    title: "Data Science Track",
    subtitle: "Python, Machine Learning, Deep Learning",
    icon: <FaChartLine />,
    duration: "120 Hours (12 Weeks)",
    skills: ["Python", "Pandas", "Scikit-Learn", "TensorFlow", "FastAPI"],
    accent: "#a855f7",
    milestones: ["Python & Math", "Data Wrangling", "Machine Learning", "Deep Learning", "Placement"]
  },
  {
    id: 2,
    courseId: "DATAANALYTICS-003",
    title: "Data Analytics Track",
    subtitle: "SQL, Power BI, Tableau, Advanced Excel",
    icon: <FaChartLine />,
    duration: "120 Hours (12 Weeks)",
    skills: ["SQL", "Power BI", "Tableau", "Excel", "Python"],
    accent: "#ec4899",
    milestones: ["Advanced Excel", "SQL Databases", "Power BI BI", "Tableau Analytics", "Placement"]
  },
  {
    id: 3,
    courseId: "AI-004",
    title: "Artificial Intelligence Track",
    subtitle: "Neural Networks, Computer Vision, PyTorch",
    icon: <FaLaptopCode />,
    duration: "120 Hours (12 Weeks)",
    skills: ["PyTorch", "OpenCV", "Neural Networks", "Computer Vision", "Math"],
    accent: "#8b5cf6",
    milestones: ["Neural Math", "Computer Vision", "Deep Learning", "AI Models", "Placement"]
  },
  {
    id: 4,
    courseId: "GENAI-005",
    title: "Generative AI (Gen AI) Track",
    subtitle: "LLMs, RAG, Prompt Engineering & Agents",
    icon: <FaLaptopCode />,
    duration: "120 Hours (12 Weeks)",
    skills: ["LangChain", "OpenAI APIs", "Vector DBs", "RAG", "LLMs"],
    accent: "#f43f5e",
    milestones: ["Prompting", "Vector Databases", "LangChain & RAG", "AI Autonomous Agents", "Placement"]
  },
  {
    id: 5,
    courseId: "DIGITALMKTG-006",
    title: "Digital Marketing Track",
    subtitle: "SEO, Meta Ads, Google Ads, GA4 Analytics",
    icon: <FaChartLine />,
    duration: "120 Hours (12 Weeks)",
    skills: ["SEO", "Google Ads", "Meta Ads", "GA4", "Content"],
    accent: "#10b981",
    milestones: ["SEO Optimization", "PPC Ads", "Social Funnels", "GA4 Analytics", "Placement"]
  }
];

export default function LearningPaths() {
  const [activeTab, setActiveTab] = useState(0);
  const currentPath = PATHS[activeTab];

  return (
    <>
    <style>{`
      @media (max-width: 768px) {
        .lp-tabs { justify-content: flex-start !important; overflow-x: auto; flex-wrap: nowrap !important; padding-bottom: 0.5rem; }
        .lp-tabs > button { flex-shrink: 0; font-size: 0.8rem !important; padding: 0.65rem 1rem !important; }
        .lp-showcase { padding: 1.5rem !important; }
        .lp-header-row { flex-direction: column !important; align-items: flex-start !important; }
        .lp-cta-link { width: 100% !important; justify-content: center !important; }
        .lp-milestone-wrap { overflow-x: auto; padding-bottom: 0.5rem; }
        .lp-milestone-row { min-width: 500px; }
      }
    `}</style>
    <section className="section" id="how-it-works" style={{ background: "#FAFBFF", color: "#0f172a", position: "relative" }}>
      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
            marginBottom: "1rem"
          }}>
            ✦ Career Tracks
          </div>
          <h2 style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: "0.8rem"
          }}>
            Choose Your <span style={{ color: "#4f46e5", background: "rgba(238, 242, 255, 0.8)", padding: "0 0.5rem", borderRadius: "0.5rem" }}>Learning Path</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "#64748b", maxWidth: "600px", margin: "0 auto" }}>
            Follow a structured career timeline instead of random courses. Every path is carefully designed to lead directly to real-world job readiness.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="lp-tabs" style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.8rem",
          flexWrap: "wrap",
          marginBottom: "3rem"
        }}>
          {PATHS.map((path) => (
            <button
              key={path.id}
              onClick={() => setActiveTab(path.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.8rem 1.6rem",
                borderRadius: "9999px",
                fontSize: "0.92rem",
                fontWeight: 600,
                transition: "all 0.3s ease",
                background: activeTab === path.id ? "#4f46e5" : "#ffffff",
                color: activeTab === path.id ? "#ffffff" : "#475569",
                border: activeTab === path.id ? "1px solid transparent" : "1px solid #e2e8f0",
                boxShadow: activeTab === path.id ? "0 8px 20px rgba(79,70,229,0.3)" : "0 1px 3px rgba(0,0,0,0.05)"
              }}
            >
              <span style={{ fontSize: "1rem" }}>{path.icon}</span>
              {path.title.replace(" Path", "")}
            </button>
          ))}
        </div>

        {/* Active Path Showcase Box */}
        <div className="lp-showcase" style={{
          background: "#ffffff",
          borderRadius: "2rem",
          padding: "2.5rem",
          boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
          border: "1px solid #f1f5f9"
        }}>
          {/* Header Row */}
          <div className="lp-header-row" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2.5rem"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "1rem",
                background: `${currentPath.accent}15`,
                color: currentPath.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem"
              }}>
                {currentPath.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.2rem" }}>
                  {currentPath.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#64748b" }}>{currentPath.subtitle}</p>
              </div>
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              background: "#f8fafc",
              padding: "0.6rem 1.2rem",
              borderRadius: "1rem",
              border: "1px solid #e2e8f0",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#334155"
            }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <FaClock style={{ color: "#94a3b8" }} /> {currentPath.duration}
              </span>
              <span>•</span>
              <span>{currentPath.skills.length} Core Skills</span>
            </div>
          </div>

          {/* Timeline Milestones Row */}
          <div className="lp-milestone-wrap" style={{ position: "relative", marginBottom: "2.5rem" }}>
            {/* Progress Line */}
            <div style={{
              position: "absolute",
              top: "16px",
              left: "5%",
              right: "5%",
              height: "2px",
              background: "#e2e8f0",
              zIndex: 1
            }} />
            <div style={{
              position: "absolute",
              top: "16px",
              left: "5%",
              width: "90%",
              height: "2px",
              background: currentPath.accent,
              zIndex: 2
            }} />

            <div className="lp-milestone-row" style={{
              position: "relative",
              zIndex: 3,
              display: "flex",
              justifyContent: "space-between"
            }}>
              {currentPath.milestones.map((m, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem", flex: 1, textAlign: "center" }}>
                  <div style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: idx === 0 ? currentPath.accent : "#ffffff",
                    border: `2px solid ${currentPath.accent}`,
                    color: idx === 0 ? "#ffffff" : currentPath.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}>
                    {idx + 1}
                  </div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: idx === 0 ? "#0f172a" : "#64748b" }}>
                    {m}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Skills & CTA Row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            paddingTop: "1.8rem",
            borderTop: "1px solid #f1f5f9"
          }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {currentPath.skills.map((skill, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    padding: "0.4rem 1rem",
                    borderRadius: "0.6rem",
                    background: "#f1f5f9",
                    color: "#334155"
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <Link
              href={`/courses/${currentPath.courseId || "FULLSTACK-001"}`}
              className="lp-cta-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.85rem 2rem",
                borderRadius: "1rem",
                background: "#0f172a",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.95rem",
                transition: "all 0.3s ease"
              }}
            >
              Start This Path <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
