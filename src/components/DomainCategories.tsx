"use client";

import Link from "next/link";
import { FaLaptopCode, FaBrain, FaChartBar, FaDatabase, FaBullhorn, FaArrowRight, FaStar } from "react-icons/fa";

const BUNDLE = {
  title: "Complete Tech Mastery Package",
  subtitle: "Data Science • Web Dev • AI/ML — All-in-One",
  desc: "One combo price for three flagship tracks — Full Stack Web Development, Data Science, and Artificial Intelligence (AI/ML). Master React, Node, Python, ML, Deep Learning & Computer Vision.",
  image: "/aiml_course.png",
  price: "₹8,000",
  originalPrice: "₹24,000",
  saves: "Save ₹16,000",
  skills: ["Full Stack Web Dev", "Data Science", "AI / ML"],
  href: "/courses/COMBO-001",
};

const INDIVIDUAL_COURSES = [
  {
    title: "Full Stack Web Development",
    subtitle: "React 19, Next.js & Node.js",
    desc: "Master modern web engineering, REST APIs, databases & cloud deployment.",
    image: "/fullstack_course.png",
    icon: <FaLaptopCode />,
    price: "₹8,000",
    originalPrice: "₹60,000",
    skills: ["React & Next.js", "Node & MongoDB"],
    href: "/courses/FULLSTACK-001",
    accentColor: "#3b82f6",
  },
  {
    title: "Data Science",
    subtitle: "Python, ML & Predictive Models",
    desc: "Transform raw data into predictive intelligence with Python & Pandas.",
    image: "/datascience_course.png",
    icon: <FaDatabase />,
    price: "₹8,000",
    originalPrice: "₹60,000",
    skills: ["Python & Pandas", "Machine Learning"],
    href: "/courses/DATASCI-002",
    accentColor: "#a855f7",
  },
  {
    title: "Data Analytics",
    subtitle: "SQL, Power BI & Tableau",
    desc: "Analyze business metrics and build interactive executive dashboards.",
    image: "/dataanalytics_course.png",
    icon: <FaChartBar />,
    price: "₹8,000",
    originalPrice: "₹60,000",
    skills: ["SQL & Power BI", "Advanced Excel"],
    href: "/courses/DATAANALYTICS-003",
    accentColor: "#ec4899",
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Deep Learning, PyTorch & Vision",
    desc: "Build AI apps with PyTorch, Neural Networks, Computer Vision & NLP.",
    image: "/aiml_course.png",
    icon: <FaBrain />,
    price: "₹8,000",
    originalPrice: "₹60,000",
    skills: ["PyTorch & Vision", "Neural Networks"],
    href: "/courses/AI-004",
    accentColor: "#8b5cf6",
  },
  {
    title: "Generative AI (Gen AI)",
    subtitle: "LLMs, RAG, Prompt Engineering & Agents",
    desc: "Build enterprise Gen AI apps with LangChain, OpenAI APIs & Vector DBs.",
    image: "/genai_course.png",
    icon: <FaBrain />,
    price: "₹8,000",
    originalPrice: "₹60,000",
    skills: ["LangChain & RAG", "LLMs & Agents"],
    href: "/courses/GENAI-005",
    accentColor: "#f43f5e",
  },
  {
    title: "Digital Marketing",
    subtitle: "SEO, Meta Ads & Growth",
    desc: "Scale brand revenues with paid performance ads & GA4 conversion funnels.",
    image: "/digitalmarketing_course.png",
    icon: <FaBullhorn />,
    price: "₹8,000",
    originalPrice: "₹60,000",
    skills: ["Google & Meta Ads", "SEO & GA4"],
    href: "/courses/DIGITALMKTG-006",
    accentColor: "#10b981",
  },
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
        borderBottom: "1px solid rgba(37,99,235,0.15)",
      }}
    >
      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-badge" style={{ margin: "0 auto 0.8rem", background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.25)", color: "#2563eb" }}>
            <span>7 Programs Available</span>
          </div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#0a1628" }}>
            Explore Our <span style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Career Programs</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "620px", color: "#475569" }}>
            Choose an individual course or save big with our all-in-one bundle — every program is priced at ₹8,000.
          </p>
        </div>

        {/* ── COMBO BUNDLE — wide featured card ── */}
        <Link
          href={BUNDLE.href}
          className="bundle-card"
          style={{
            display: "flex",
            flexDirection: "row",
            borderRadius: "1.5rem",
            overflow: "hidden",
            background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
            border: "1px solid rgba(129,140,248,0.4)",
            boxShadow: "0 16px 48px rgba(79,70,229,0.25)",
            marginBottom: "2.5rem",
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          {/* Image side */}
          <div className="bundle-img-wrap" style={{ width: "380px", minWidth: "380px", position: "relative", overflow: "hidden" }}>
            <img
              src={BUNDLE.image}
              alt={BUNDLE.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
              className="bundle-img"
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 50%, rgba(30,27,75,0.85) 100%)" }} />
            <span style={{
              position: "absolute", top: "1rem", left: "1rem",
              fontSize: "0.72rem", fontWeight: 800, padding: "0.35rem 0.9rem",
              borderRadius: "9999px", background: "linear-gradient(135deg,#f59e0b,#d97706)",
              color: "#ffffff", letterSpacing: "0.05em"
            }}>
              ★ BEST VALUE
            </span>
          </div>

          {/* Content side */}
          <div style={{ flex: 1, padding: "2.2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#a5b4fc", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
              {BUNDLE.subtitle}
            </p>
            <h3 style={{ fontFamily: "var(--font-orbitron)", fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.2, marginBottom: "0.7rem" }}>
              {BUNDLE.title}
            </h3>
            <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.65, marginBottom: "1.2rem" }}>
              {BUNDLE.desc}
            </p>

            {/* Skill pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {BUNDLE.skills.map((s, i) => (
                <span key={i} style={{ fontSize: "0.78rem", fontWeight: 600, padding: "0.3rem 0.9rem", borderRadius: "0.5rem", background: "rgba(165,180,252,0.15)", border: "1px solid rgba(165,180,252,0.3)", color: "#c7d2fe" }}>
                  {s}
                </span>
              ))}
            </div>

            {/* Price + CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
                <span style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.9rem", fontWeight: 900, color: "#ffffff" }}>
                  {BUNDLE.price}
                </span>
                <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", textDecoration: "line-through" }}>
                  {BUNDLE.originalPrice}
                </span>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ffffff", background: "#10b981", padding: "0.2rem 0.6rem", borderRadius: "0.4rem" }}>
                  {BUNDLE.saves}
                </span>
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.75rem 1.6rem", borderRadius: "0.85rem",
                background: "linear-gradient(135deg,#4f46e5,#7c3aed)",
                color: "#ffffff", fontWeight: 700, fontSize: "0.9rem",
                boxShadow: "0 6px 20px rgba(79,70,229,0.4)"
              }}>
                Enroll in Bundle <FaArrowRight style={{ fontSize: "0.75rem" }} />
              </div>
            </div>
          </div>
        </Link>

        {/* ── Divider ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(37,99,235,0.15)" }} />
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
            Or choose an individual course
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(37,99,235,0.15)" }} />
        </div>

        {/* ── 6 Individual Course Cards ── */}
        <div className="individual-grid">
          {INDIVIDUAL_COURSES.map((course, idx) => (
            <Link
              key={idx}
              href={course.href}
              className="ind-card glass-card"
              style={{
                borderRadius: "1.25rem",
                padding: "1.4rem",
                display: "flex",
                flexDirection: "column",
                background: "rgba(255,255,255,0.97)",
                border: "1px solid rgba(37,99,235,0.15)",
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {/* Image */}
              <div style={{ height: "130px", borderRadius: "0.85rem", overflow: "hidden", position: "relative", marginBottom: "1rem" }}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="ind-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                />
                <div style={{ position: "absolute", top: "0.6rem", left: "0.6rem", width: "34px", height: "34px", borderRadius: "9px", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", color: course.accentColor, fontSize: "1rem" }}>
                  {course.icon}
                </div>
                <span style={{ position: "absolute", top: "0.6rem", right: "0.6rem", fontSize: "0.65rem", fontWeight: 700, padding: "0.2rem 0.5rem", borderRadius: "0.4rem", background: "rgba(255,255,255,0.92)", color: "#0a1628" }}>
                  Track 0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: "var(--font-orbitron)", fontSize: "0.98rem", fontWeight: 700, color: "#0a1628", marginBottom: "0.2rem", lineHeight: 1.3 }}>
                {course.title}
              </h3>
              <p style={{ fontSize: "0.74rem", color: course.accentColor, fontWeight: 600, marginBottom: "0.6rem" }}>
                {course.subtitle}
              </p>
              <p style={{ fontSize: "0.82rem", color: "#475569", lineHeight: 1.5, marginBottom: "0.9rem", flex: 1 }}>
                {course.desc}
              </p>

              {/* Skills */}
              <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "0.9rem" }}>
                {course.skills.map((s, i) => (
                  <span key={i} style={{ fontSize: "0.68rem", fontWeight: 600, padding: "0.2rem 0.5rem", borderRadius: "0.4rem", background: `${course.accentColor}12`, border: `1px solid ${course.accentColor}30`, color: course.accentColor }}>
                    {s}
                  </span>
                ))}
              </div>

              {/* Price row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.8rem", borderTop: "1px solid rgba(37,99,235,0.1)" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                  <span style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.15rem", fontWeight: 800, color: "#0a1628" }}>
                    {course.price}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8", textDecoration: "line-through" }}>
                    {course.originalPrice}
                  </span>
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.78rem", fontWeight: 700, color: course.accentColor }}>
                  Explore <FaArrowRight style={{ fontSize: "0.65rem" }} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* Bundle card hover */
        .bundle-card:hover { transform: translateY(-5px); box-shadow: 0 24px 60px rgba(79,70,229,0.35) !important; }
        .bundle-card:hover .bundle-img { transform: scale(1.05); }
        @media (max-width: 768px) {
          .bundle-card { flex-direction: column !important; }
          .bundle-img-wrap { width: 100% !important; min-width: 100% !important; height: 200px !important; }
        }

        /* Individual grid */
        .individual-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .individual-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .individual-grid { grid-template-columns: 1fr; }
        }

        /* Individual card hover */
        .ind-card:hover { transform: translateY(-5px); border-color: rgba(37,99,235,0.35) !important; box-shadow: 0 12px 32px rgba(37,99,235,0.15) !important; }
        .ind-card:hover .ind-img { transform: scale(1.07); }
      `}</style>
    </section>
  );
}
