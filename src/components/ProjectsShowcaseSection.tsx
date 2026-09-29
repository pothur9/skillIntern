"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket, FaCheckCircle, FaArrowRight, FaCode, FaLaptopCode } from "react-icons/fa";

const PROJECTS = [
  {
    courseId: "FULLSTACK-001",
    courseTitle: "Full Stack Web Development",
    projectTitle: "Enterprise E-Commerce SaaS & Analytics Platform",
    desc: "A production-grade full stack SaaS application featuring Next.js 19 Server Actions, Stripe subscription billing, MongoDB aggregations, and live admin analytics.",
    tools: ["React 19", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    categoryBadge: "Full Stack Web Development",
    gradient: "from-blue-600 to-indigo-600",
    metrics: "Built by 180+ Students in Week 10"
  },
  {
    courseId: "DATASCI-002",
    courseTitle: "Data Science",
    projectTitle: "Predictive Churn Engine & Automated ML Pipeline",
    desc: "An end-to-end Machine Learning pipeline analyzing enterprise customer behavioral signals to predict churn probability with 94.2% model accuracy.",
    tools: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "FastAPI"],
    categoryBadge: "Data Science",
    gradient: "from-purple-600 to-indigo-700",
    metrics: "94.2% Verified Model Accuracy"
  },
  {
    courseId: "DATAANALYTICS-003",
    courseTitle: "Data Analytics",
    projectTitle: "Executive Supply Chain & Financial BI Dashboard",
    desc: "An interactive executive dashboard aggregating multi-million row SQL databases in Power BI to monitor sales revenue, profit margins, and supply chain logistics.",
    tools: ["Power BI", "SQL", "Tableau", "Advanced Excel"],
    categoryBadge: "Data Analytics",
    gradient: "from-pink-600 to-purple-600",
    metrics: "Processed 5M+ SQL Query Records"
  },
  {
    courseId: "AI-004",
    courseTitle: "Artificial Intelligence",
    projectTitle: "Real-Time Object Detection & Neural Vision System",
    desc: "A deep learning computer vision model built with PyTorch and OpenCV capable of real-time multi-object classification and video image segmentation.",
    tools: ["PyTorch", "OpenCV", "CNNs", "CUDA", "FastAPI"],
    categoryBadge: "Artificial Intelligence",
    gradient: "from-purple-600 to-pink-600",
    metrics: "Sub-100ms Inference Latency"
  },
  {
    courseId: "GENAI-005",
    courseTitle: "Generative AI (Gen AI)",
    projectTitle: "Autonomous Multi-Agent Copilot with RAG & Vector DB",
    desc: "An enterprise Gen AI agent powered by LangChain, OpenAI APIs, and Vector DBs (Pinecone) for real-time document search and automated workflow execution.",
    tools: ["LangChain", "OpenAI APIs", "Pinecone", "RAG", "Python"],
    categoryBadge: "Generative AI (Gen AI)",
    gradient: "from-rose-600 to-pink-600",
    metrics: "10k+ Queries Vector Indexing"
  },
  {
    courseId: "DIGITALMKTG-006",
    courseTitle: "Digital Marketing",
    projectTitle: "360° Omnichannel Performance Ads & Growth Funnel",
    desc: "A high-ROI digital marketing campaign driving 4.5x ROAS across Meta & Google Ads, paired with GA4 conversion funnels, SEO landing pages, and lead tracking.",
    tools: ["Google Ads", "Meta Ads", "GA4", "SEO Semrush"],
    categoryBadge: "Digital Marketing",
    gradient: "from-teal-500 to-emerald-600",
    metrics: "4.5x Verified Return On Ad Spend"
  }
];

export default function ProjectsShowcaseSection() {
  return (
    <section
      className="section"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.1) 0%, transparent 65%), linear-gradient(180deg, #f0f7ff 0%, #ffffff 50%, #eff6ff 100%)",
        position: "relative",
        borderTop: "1px solid rgba(37, 99, 235, 0.15)",
        borderBottom: "1px solid rgba(37, 99, 235, 0.15)",
        color: "#0a1628"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-badge" style={{ margin: "0 auto 1rem", background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.25)", color: "#2563eb" }}>
            <FaLaptopCode style={{ display: "inline", marginRight: "0.4rem" }} /> Hands-on Capstone Portfolio
          </div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#0a1628" }}>
            Real-World Projects <span className="gradient-text">You Will Build</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "680px", color: "#475569" }}>
            Every one of our 6 career programs includes mandatory production-grade capstone projects so you graduate with a job-ready portfolio.
          </p>
        </div>

        {/* 6 Grid Projects Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "2rem"
        }}>
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass-card"
              style={{
                borderRadius: "1.5rem",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                background: "rgba(255, 255, 255, 0.95)",
                border: "1px solid rgba(37, 99, 235, 0.15)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Top Category Badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.2rem" }}>
                <span style={{
                  padding: "0.25rem 0.7rem",
                  borderRadius: "0.5rem",
                  background: "rgba(37, 99, 235, 0.1)",
                  border: "1px solid rgba(37, 99, 235, 0.25)",
                  color: "#2563eb",
                  fontSize: "0.75rem",
                  fontWeight: 700
                }}>
                  {proj.categoryBadge}
                </span>

                <span style={{ fontSize: "0.75rem", color: "#34d399", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <FaCheckCircle /> Capstone Project
                </span>
              </div>

              {/* Project Title */}
              <h3 style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "#0a1628",
                lineHeight: 1.35,
                marginBottom: "0.8rem"
              }}>
                {proj.projectTitle}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: "0.88rem",
                color: "#475569",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
                flex: 1
              }}>
                {proj.desc}
              </p>

              {/* Metric Highlight Box */}
              <div style={{
                padding: "0.5rem 0.8rem",
                borderRadius: "0.6rem",
                background: "rgba(37,99,235,0.05)",
                border: "1px solid rgba(37,99,235,0.12)",
                fontSize: "0.8rem",
                color: "#2563eb",
                fontWeight: 600,
                marginBottom: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>
                <FaRocket style={{ color: "#2563eb" }} /> {proj.metrics}
              </div>

              {/* Tools Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                {proj.tools.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "0.72rem",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "0.4rem",
                      background: "rgba(37,99,235,0.06)",
                      border: "1px solid rgba(37,99,235,0.12)",
                      color: "#2563eb"
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Explore Link Button */}
              <Link
                href={`/courses/${proj.courseId}`}
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "0.65rem 1rem",
                  fontSize: "0.85rem",
                  borderRadius: "0.75rem",
                  textDecoration: "none"
                }}
              >
                View Track Curriculum <FaArrowRight style={{ fontSize: "0.75rem" }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
