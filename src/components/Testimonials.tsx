"use client";

import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";

const REVIEWS_COL1 = [
  {
    name: "Aarav Sharma",
    role: "Full Stack Developer",
    company: "TCS",
    rating: 5,
    content: "The structured learning path gave me immense confidence. I moved from building small sites to managing enterprise applications."
  },
  {
    name: "Priya Patel",
    role: "Cyber Security Analyst",
    company: "Infosys",
    rating: 5,
    content: "The hands-on ethical hacking labs were practical and relevant. Mentor feedback helped me clear my technical interviews!"
  },
  {
    name: "Rohan Verma",
    role: "AI Engineer",
    company: "Wipro",
    rating: 5,
    content: "The AI specialization was top notch. Real projects in NLP and deep learning models made learning exciting."
  }
];

const REVIEWS_COL2 = [
  {
    name: "Ananya Reddi",
    role: "UI/UX Designer",
    company: "Accenture",
    rating: 5,
    content: "Building my portfolio during the course directly helped me land my current UI/UX position. Great mentors!"
  },
  {
    name: "Vikram Malhotra",
    role: "CAD Design Engineer",
    company: "Tata Motors",
    rating: 5,
    content: "AutoCAD & CATIA 3D modeling modules prepared me for real engineering challenges in the automotive sector."
  },
  {
    name: "Neha Gupta",
    role: "Digital Marketer",
    company: "Deloitte",
    rating: 5,
    content: "Performance ads and GA4 analytics training gave me real industry skills that got me hired quickly."
  }
];

const REVIEWS_COL3 = [
  {
    name: "Karan Singh",
    role: "Cloud Specialist",
    company: "Amazon AWS",
    rating: 5,
    content: "AWS cloud architecture and serverless projects were easy to follow. Highly recommend Inspire AI."
  },
  {
    name: "Siddharth Rao",
    role: "Python Developer",
    company: "IBM",
    rating: 5,
    content: "From core automation scripts to FastAPI endpoints — the Python track was comprehensive."
  },
  {
    name: "Divya Nair",
    role: "HR Talent Analyst",
    company: "Cognizant",
    rating: 5,
    content: "HR metrics and recruitment dashboards gave me a data-driven edge in talent acquisition."
  }
];

function VerticalColumn({ cards, speed, innerClass }: { cards: typeof REVIEWS_COL1; speed: string; innerClass?: string }) {
  const doubled = [...cards, ...cards];
  return (
    <div className={innerClass} style={{
      overflow: "hidden",
      flex: 1,
      height: "600px",
      maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"
    }}>
      <div className={speed} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {doubled.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: "#ffffff",
              borderRadius: "1.5rem",
              padding: "1.8rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              border: "1px solid #e2e8f0"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
              <div style={{ display: "flex", gap: "0.2rem", color: "#fbbf24", fontSize: "0.85rem" }}>
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <FaQuoteLeft style={{ color: "#cbd5e1", fontSize: "1.2rem" }} />
            </div>

            <p style={{ fontSize: "0.92rem", color: "#334155", lineHeight: 1.6, fontStyle: "italic", marginBottom: "1.2rem" }}>
              &ldquo;{item.content}&rdquo;
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.8rem", borderTop: "1px solid #f1f5f9" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0f172a", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  {item.name} <FaCheckCircle style={{ color: "#10b981", fontSize: "0.75rem" }} />
                </div>
                <div style={{ fontSize: "0.8rem", color: "#64748b" }}>{item.role}</div>
              </div>
              <span style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#4f46e5",
                background: "#eef2ff",
                padding: "0.25rem 0.6rem",
                borderRadius: "9999px"
              }}>
                {item.company}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
    <style>{`
      @media (max-width: 768px) {
        .testimonial-col { display: none !important; }
        .testimonial-col-1 { display: block !important; }
        .testimonial-grid { gap: 0 !important; }
        .testimonial-col-inner { height: 420px !important; }
      }
    `}</style>
    <section id="reviews" style={{
      position: "relative",
      padding: "clamp(3rem, 8vw, 6rem) 0",
      background: "#f8fafc",
      color: "#0f172a",
      overflow: "hidden"
    }}>
      {/* Background Ambient Glows */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "-10%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "rgba(199,210,254,0.4)",
        filter: "blur(120px)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        bottom: "-10%",
        right: "-5%",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "rgba(186,230,253,0.4)",
        filter: "blur(140px)",
        pointerEvents: "none"
      }} />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
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
            border: "1px solid #e0e7ff",
            marginBottom: "1rem"
          }}>
            Student Success Stories
          </div>
          <h2 style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: "1rem"
          }}>
            Hear from students like you
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#64748b", maxWidth: "600px", margin: "0 auto" }}>
            Real outcomes from real people who chose to transform their careers with our industry-leading programs.
          </p>
        </div>

        {/* 3-Column Vertical Infinite Marquee Grid */}
        <div className="testimonial-grid" style={{
          display: "flex",
          gap: "2rem",
          maxWidth: "1300px",
          margin: "0 auto"
        }}>
          <div className="testimonial-col-1" style={{ flex: 1, overflow: "hidden" }}>
            <VerticalColumn cards={REVIEWS_COL1} speed="animate-marquee-up" innerClass="testimonial-col-inner" />
          </div>
          <div className="testimonial-col" style={{ flex: 1, overflow: "hidden" }}>
            <VerticalColumn cards={REVIEWS_COL2} speed="animate-marquee-down" innerClass="testimonial-col-inner" />
          </div>
          <div className="testimonial-col" style={{ flex: 1, overflow: "hidden" }}>
            <VerticalColumn cards={REVIEWS_COL3} speed="animate-marquee-up-slow" innerClass="testimonial-col-inner" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
