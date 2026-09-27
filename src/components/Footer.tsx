"use client";

import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <style>{`
      @media (max-width: 640px) {
        .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
      }
      @media (max-width: 400px) {
        .footer-grid { grid-template-columns: 1fr !important; }
      }
      @media (max-width: 480px) {
        .footer-bottom { font-size: 0.75rem !important; }
      }
    `}</style>
      <footer style={{
        background: "rgba(12, 9, 26, 0.95)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        paddingTop: "4rem",
        paddingBottom: "2rem"
      }}>
        <div className="container">
          <div className="footer-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3.5rem"
          }}>
            {/* Col 1: Brand Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
                <div style={{
                  height: "50px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  background: "#ffffff",
                  padding: "3px 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 16px rgba(124,58,237,0.4)"
                }}>
                  <img src="/logos/logo.png" alt="Pioneer Technologies" style={{ height: "44px", width: "auto", objectFit: "contain", display: "block" }} />
                </div>
              </Link>

              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                India’s leading career platform empowering learners with industry-ready skills, live project mentorship, and placement opportunities.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 style={{ fontFamily: "var(--font-orbitron)", fontSize: "1rem", color: "#fff", marginBottom: "1.2rem" }}>
                Quick Navigation
              </h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.7rem", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                <li><Link href="/" style={{ transition: "color 0.2s" }}>Home</Link></li>
                <li><Link href="/courses" style={{ transition: "color 0.2s" }}>All Courses</Link></li>
                <li><Link href="/about" style={{ transition: "color 0.2s" }}>About Us</Link></li>
                <li><Link href="/verification" style={{ transition: "color 0.2s" }}>Certificate Verification</Link></li>
                <li><Link href="/contact" style={{ transition: "color 0.2s" }}>Contact Us</Link></li>
              </ul>
            </div>

            {/* Col 3: Domains */}
            <div>
              <h4 style={{ fontFamily: "var(--font-orbitron)", fontSize: "1rem", color: "#fff", marginBottom: "1.2rem" }}>
                Popular Domains
              </h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.7rem", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                <li><Link href="/courses/FULLSTACK-001">Full Stack Web Development</Link></li>
                <li><Link href="/courses/DATASCI-002">Data Science</Link></li>
                <li><Link href="/courses/DATAANALYTICS-003">Data Analytics</Link></li>
                <li><Link href="/courses/AI-004">Artificial Intelligence</Link></li>
                <li><Link href="/courses/GENAI-005">Generative AI (Gen AI)</Link></li>
                <li><Link href="/courses/DIGITALMKTG-006">Digital Marketing</Link></li>
              </ul>
            </div>

            {/* Col 4: Contact & Legal */}
            <div>
              <h4 style={{ fontFamily: "var(--font-orbitron)", fontSize: "1rem", color: "#fff", marginBottom: "1.2rem" }}>
                Contact & Legal
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1.2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <FaEnvelope style={{ color: "#c084fc" }} /> support@inspireai.in
                </div>
                <a href="tel:+917483111042" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "inherit", textDecoration: "none" }}>
                  <FaPhone style={{ color: "#818cf8" }} /> +91 74831 11042
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <FaMapMarkerAlt style={{ color: "#34d399" }} /> Bengaluru, Karnataka, India
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", fontSize: "0.78rem", color: "var(--text-subtle)" }}>
                <Link href="/privacy-policy">Privacy Policy</Link> •
                <Link href="/terms-of-service">Terms of Service</Link> •
                <Link href="/refund-policy">Refund Policy</Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom" style={{
            paddingTop: "1.8rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            textAlign: "center",
            fontSize: "0.82rem",
            color: "var(--text-subtle)"
          }}>
            © {new Date().getFullYear()} Pioneer Technologies. All rights reserved. Building India&apos;s Next Generation of Skilled Tech Professionals.
          </div>
        </div>
      </footer>
    </>
  );
}
