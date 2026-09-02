"use client";

import Link from "next/link";
import { FaLaptopCode, FaBrain, FaChartBar, FaDatabase, FaBullhorn, FaArrowRight } from "react-icons/fa";

const DOMAINS_DATA = [
  {
    title: "Full Stack Web Development",
    subtitle: "React 19, Next.js & Node.js",
    desc: "Master modern web engineering, REST APIs, databases & cloud deployment.",
    image: "/fullstack_course.png",
    icon: <FaLaptopCode />,
    price: "₹60,000",
    originalPrice: "₹90,000",
    skills: ["React & Next.js", "Node & MongoDB"],
    href: "/courses/FULLSTACK-001",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Data Science",
    subtitle: "Python, ML & Predictive Models",
    desc: "Transform raw data into predictive intelligence with Python & Pandas.",
    image: "/datascience_course.png",
    icon: <FaDatabase />,
    price: "₹60,000",
    originalPrice: "₹90,000",
    skills: ["Python & Pandas", "Machine Learning"],
    href: "/courses/DATASCI-002",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    title: "Data Analytics",
    subtitle: "SQL, Power BI & Tableau",
    desc: "Analyze business metrics and build interactive executive dashboards.",
    image: "/dataanalytics_course.png",
    icon: <FaChartBar />,
    price: "₹60,000",
    originalPrice: "₹90,000",
    skills: ["SQL & Power BI", "Advanced Excel"],
    href: "/courses/DATAANALYTICS-003",
    gradient: "from-pink-500 to-purple-600"
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Deep Learning, PyTorch & Vision",
    desc: "Build AI applications with PyTorch, Neural Networks, Computer Vision & NLP.",
    image: "/aiml_course.png",
    icon: <FaBrain />,
    price: "₹60,000",
    originalPrice: "₹90,000",
    skills: ["PyTorch & Vision", "Neural Networks"],
    href: "/courses/AI-004",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Generative AI (Gen AI)",
    subtitle: "LLMs, RAG, Prompt Engineering & Agents",
    desc: "Build enterprise Gen AI apps with LangChain, OpenAI APIs, Vector DBs & LLMs.",
    image: "/genai_course.png",
    icon: <FaBrain />,
    price: "₹60,000",
    originalPrice: "₹90,000",
    skills: ["LangChain & RAG", "LLMs & Vector DBs"],
    href: "/courses/GENAI-005",
    gradient: "from-rose-600 to-pink-600"
  },
  {
    title: "Digital Marketing",
    subtitle: "SEO, Meta Ads & Growth",
    desc: "Scale brand revenues with paid performance ads & GA4 conversion funnels.",
    image: "/digitalmarketing_course.png",
    icon: <FaBullhorn />,
    price: "₹40,000",
    originalPrice: "₹60,000",
    skills: ["Google & Meta Ads", "SEO & GA4"],
    href: "/courses/DIGITALMKTG-006",
    gradient: "from-teal-500 to-emerald-600"
  }
];

export default function DomainCategories() {
  return (
    <section
      className="section"
      style={{
        background: "linear-gradient(135deg, #180d3d 0%, #251254 50%, #150b33 100%)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(168, 85, 247, 0.15)",
        borderBottom: "1px solid rgba(168, 85, 247, 0.15)"
      }}
    >
      {/* Background Ambient Lighting */}
      <div style={{
        position: "absolute",
        top: "-20%",
        right: "-10%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="section-badge" style={{ margin: "0 auto 0.8rem", background: "rgba(168,85,247,0.2)", border: "1px solid rgba(168,85,247,0.4)", color: "#e9d5ff" }}>
            <span>6 Flagship Tracks</span>
          </div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
            Explore Our <span className="gradient-text">Career Tracks</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "600px" }}>
            Pick your specialization from our 6 high-demand career programs designed for immediate industry hiring.
          </p>
        </div>

        {/* 5 Cards Container: 1 Row on Large Screens, 2 Rows on Medium Screens */}
        <div className="career-tracks-grid">
          {DOMAINS_DATA.map((domain, idx) => (
            <Link
              key={idx}
              href={domain.href}
              className="glass-card track-card"
              style={{
                borderRadius: "1.25rem",
                padding: "1.3rem",
                display: "flex",
                flexDirection: "column",
                background: "rgba(22, 14, 52, 0.7)",
                border: "1px solid rgba(168, 85, 247, 0.25)",
                transition: "all 0.3s ease",
                height: "100%",
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer"
              }}
            >
              {/* Course Featured Image Header */}
              <div style={{
                height: "120px",
                width: "100%",
                borderRadius: "0.85rem",
                overflow: "hidden",
                position: "relative",
                marginBottom: "1rem"
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
                  background: "linear-gradient(to top, rgba(18, 11, 44, 0.9) 0%, transparent 60%)"
                }} />

                <div style={{
                  position: "absolute",
                  top: "0.5rem",
                  left: "0.5rem",
                  width: "34px",
                  height: "34px",
                  borderRadius: "10px",
                  background: "rgba(124, 58, 237, 0.4)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "1rem"
                }}>
                  {domain.icon}
                </div>

                <span style={{
                  position: "absolute",
                  top: "0.5rem",
                  right: "0.5rem",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  padding: "0.2rem 0.5rem",
                  borderRadius: "0.4rem",
                  background: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(6px)",
                  color: "#c084fc",
                  border: "1px solid rgba(255, 255, 255, 0.15)"
                }}>
                  Track 0{idx + 1}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "0.25rem",
                lineHeight: 1.3
              }}>
                {domain.title}
              </h3>

              <div style={{
                fontSize: "0.78rem",
                color: "#c084fc",
                fontWeight: 600,
                marginBottom: "0.75rem"
              }}>
                {domain.subtitle}
              </div>

              <p style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                lineHeight: 1.5,
                marginBottom: "0.8rem",
                flex: 1
              }}>
                {domain.desc}
              </p>

              {/* Pricing Row */}
              <div style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.5rem",
                marginBottom: "0.8rem",
                padding: "0.4rem 0.7rem",
                borderRadius: "0.6rem",
                background: "rgba(124, 58, 237, 0.12)",
                border: "1px solid rgba(124, 58, 237, 0.25)"
              }}>
                <span style={{
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "#34d399"
                }}>
                  {domain.price}
                </span>
                <span style={{
                  fontSize: "0.78rem",
                  color: "#94a3b8",
                  textDecoration: "line-through"
                }}>
                  {domain.originalPrice}
                </span>
                <span style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: "#c084fc",
                  marginLeft: "auto"
                }}>
                  33% OFF
                </span>
              </div>

              {/* Skills Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.2rem" }}>
                {domain.skills.map((s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "0.7rem",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "0.4rem",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#cbd5e1"
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div
                className="btn-secondary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "0.55rem 0.8rem",
                  fontSize: "0.8rem",
                  gap: "0.4rem",
                  borderRadius: "0.6rem"
                }}
              >
                Explore Track <FaArrowRight style={{ fontSize: "0.75rem" }} />
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
          gap: 1.5rem;
          max-width: 1180px;
          margin: 0 auto;
        }
        .track-card {
          flex: 1 1 100%;
          max-width: 360px;
        }
        @media (min-width: 640px) {
          .track-card {
            flex: 0 1 calc(50% - 1rem);
          }
        }
        @media (min-width: 1024px) {
          .track-card {
            flex: 0 1 calc(33.333% - 1.25rem);
          }
        }
        .track-card:hover {
          transform: translateY(-6px);
          border-color: rgba(168, 85, 247, 0.5) !important;
          box-shadow: 0 12px 32px rgba(124, 58, 237, 0.3);
        }
        .track-card:hover .track-img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
