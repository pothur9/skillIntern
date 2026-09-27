import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import BrandsMarquee from "@/components/BrandsMarquee";
import { FaBullseye, FaLightbulb, FaAward, FaUsers } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section style={{ paddingTop: "clamp(6rem, 12vw, 9rem)", paddingBottom: "5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-badge" style={{ margin: "0 auto 1.5rem" }}>
            <span>About Pioneer Technologies</span>
          </div>

          <h1 className="section-title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
            Bridging Education &amp; <span className="gradient-text">Real-World Employability</span>
          </h1>

          <p className="section-subtitle" style={{ margin: "0 auto 4rem", fontSize: "1.1rem" }}>
            Pioneer Technologies is India’s premier career-focused EdTech platform. We empower students and working professionals with job-ready skills in Full Stack Web Development, Data Science, Data Analytics, Artificial Intelligence, Generative AI (Gen AI), and Digital Marketing.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
            marginBottom: "5rem"
          }}>
            {[
              {
                icon: <FaBullseye style={{ color: "#c084fc", fontSize: "2rem" }} />,
                title: "Our Mission",
                desc: "To deliver accessible, high-quality, practical tech education that transforms ambitious learners into top-tier industry professionals."
              },
              {
                icon: <FaLightbulb style={{ color: "#818cf8", fontSize: "2rem" }} />,
                title: "Our Vision",
                desc: "To be India’s most trusted career accelerator, closing the skill gap with structured learning paths, project building, and direct hiring networks."
              },
              {
                icon: <FaAward style={{ color: "#34d399", fontSize: "2rem" }} />,
                title: "Our Standard",
                desc: "Every course syllabus is built in collaboration with senior engineers and domain leads to ensure 100% real-world relevance."
              }
            ].map((card, i) => (
              <div key={i} className="glass-card" style={{ padding: "2.5rem 1.8rem", textAlign: "left" }}>
                <div style={{ marginBottom: "1.2rem" }}>{card.icon}</div>
                <h3 style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.2rem", color: "#fff", marginBottom: "0.6rem" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandsMarquee />
      <CTA />
      <Footer />
    </main>
  );
}
