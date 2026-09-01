"use client";

import Link from "next/link";
import { FaRocket, FaCheck } from "react-icons/fa";

export default function CTA() {
  return (
    <>
    <style>{`
      @media (max-width: 640px) {
        .cta-card { padding: 2.5rem 1.2rem !important; }
        .cta-btn-group { flex-direction: column !important; }
        .cta-btn-group a { width: 100% !important; justify-content: center !important; text-align: center !important; }
        .cta-checks { gap: 0.8rem !important; }
      }
    `}</style>
    <section className="section" style={{
      position: "relative",
      overflow: "hidden",
      background: "#f8fafc"
    }}>
      <div className="container">
        <div className="cta-card glass-card" style={{
          padding: "4rem 2rem",
          borderRadius: "2rem",
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(15, 12, 41, 0.95), rgba(18, 14, 42, 0.95))",
          border: "1px solid rgba(168, 85, 247, 0.3)",
          boxShadow: "0 0 60px rgba(168, 85, 247, 0.15)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Ambient background glow */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(168, 85, 247, 0.1)",
            filter: "blur(100px)",
            pointerEvents: "none"
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "18px",
              background: "var(--gradient-brand)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
              fontSize: "1.6rem",
              color: "#fff",
              boxShadow: "0 0 24px rgba(168, 85, 247, 0.5)"
            }}>
              <FaRocket />
            </div>

            <h2 className="section-title" style={{ maxWidth: "700px", margin: "0 auto 1rem" }}>
              Your Career Breakthrough <br />
              <span className="gradient-text">Starts Right Here</span>
            </h2>

            <p className="section-subtitle" style={{ margin: "0 auto 2.5rem", maxWidth: "600px" }}>
              Join thousands of learners who chose a guided path to career success. No matter your domain — we&apos;ve got you covered.
            </p>

            <div className="cta-btn-group" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.2rem",
              flexWrap: "wrap",
              marginBottom: "2rem"
            }}>
              <Link href="/contact" className="btn-primary" style={{ padding: "0.85rem 2.2rem", fontSize: "1rem" }}>
                Book Free Consultation
              </Link>
              
              <Link href="/courses" className="btn-outline" style={{ padding: "0.85rem 2.2rem", fontSize: "1rem" }}>
                Browse Courses
              </Link>
            </div>

            <div className="cta-checks" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.8rem",
              flexWrap: "wrap",
              fontSize: "0.85rem",
              color: "var(--text-muted)"
            }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <FaCheck style={{ color: "#34d399" }} /> No Credit Card Required
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <FaCheck style={{ color: "#34d399" }} /> 1-on-1 Mentor Session
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <FaCheck style={{ color: "#34d399" }} /> Verified Certification
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
