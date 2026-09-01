"use client";

import { FaDesktop, FaVideo, FaTasks, FaChartPie, FaCheckCircle, FaFire, FaPlay } from "react-icons/fa";

const DASHBOARD_FEATURES = [
  {
    icon: <FaDesktop />,
    title: "Personal Dashboard",
    desc: "Track progress, manage courses, and view your learning analytics — all in one place.",
    color: "#a78bfa"
  },
  {
    icon: <FaVideo />,
    title: "Live & Recorded Sessions",
    desc: "Attend live classes or revisit recorded lectures anytime at your own pace.",
    color: "#60a5fa"
  },
  {
    icon: <FaTasks />,
    title: "Projects & Assessments",
    desc: "Submit assignments, complete projects, and get feedback from expert mentors.",
    color: "#34d399"
  },
  {
    icon: <FaChartPie />,
    title: "Progress Tracking",
    desc: "Visual analytics showing your skill growth, completion rates, and milestones.",
    color: "#fbbf24"
  }
];

export default function DashboardPreview() {
  return (
    <section className="section" style={{
      background: "linear-gradient(135deg, #130a2e 0%, #1f1046 100%)",
      position: "relative",
      borderTop: "1px solid rgba(168, 85, 247, 0.2)",
      borderBottom: "1px solid rgba(168, 85, 247, 0.2)"
    }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-badge" style={{ margin: "0 auto 1rem" }}>
            <span>Your Learning Hub</span>
          </div>
          <h2 className="section-title">
            One Platform. <span className="gradient-text">Complete Guidance.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Your learning happens on a dedicated platform built for focus and results. No distractions — just a clean, powerful dashboard.
          </p>
        </div>

        {/* 2-Column Grid: Left Feature List + Right Dashboard UI Card */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem",
          alignItems: "center",
          maxWidth: "1100px",
          margin: "0 auto"
        }}>
          {/* Left Feature List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {DASHBOARD_FEATURES.map((item, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  borderRadius: "1.2rem",
                  display: "flex",
                  gap: "1.2rem",
                  alignItems: "flex-start"
                }}
              >
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: `${item.color}20`,
                  color: item.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", marginBottom: "0.3rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Dashboard UI Card */}
          <div className="glass-card" style={{
            padding: "1.8rem",
            borderRadius: "1.8rem",
            border: "1px solid rgba(168, 85, 247, 0.3)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.6)"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "1rem",
              marginBottom: "1.5rem",
              borderBottom: "1px solid rgba(255,255,255,0.08)"
            }}>
              <div style={{ display: "flex", gap: "0.4rem" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#eab308" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e" }} />
              </div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-subtle)" }}>lms.inspireai.in</span>
            </div>

            <div style={{ background: "rgba(18,14,42,0.9)", padding: "1.2rem", borderRadius: "1rem", marginBottom: "1rem" }}>
              <div style={{ fontSize: "0.75rem", color: "#c084fc", fontWeight: 700, marginBottom: "0.3rem" }}>ACTIVE COURSE</div>
              <div style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "0.8rem" }}>
                Full Stack Web Development
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                <span>Overall Completion</span>
                <span style={{ color: "#34d399", fontWeight: 700 }}>78%</span>
              </div>
              <div style={{ height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "9999px" }}>
                <div style={{ height: "100%", width: "78%", background: "linear-gradient(to right, #a855f7, #34d399)", borderRadius: "9999px" }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: "0.8rem", textAlign: "center" }}>
                <FaFire style={{ color: "#f97316", fontSize: "1.5rem", marginBottom: "0.3rem" }} />
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff" }}>14 Days</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-subtle)" }}>Current Streak</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: "0.8rem", textAlign: "center" }}>
                <FaCheckCircle style={{ color: "#34d399", fontSize: "1.5rem", marginBottom: "0.3rem" }} />
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff" }}>12/12</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-subtle)" }}>Projects Verified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
