"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      <section style={{ paddingTop: "clamp(6rem, 12vw, 9rem)", paddingBottom: "6rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge" style={{ margin: "0 auto 1rem" }}>
              <span>Get In Touch</span>
            </div>
            <h1 className="section-title">
              Contact <span className="gradient-text">Inspire AI Team</span>
            </h1>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Have questions about course admissions, fee structures, or corporate training? We are here to help.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            maxWidth: "1000px",
            margin: "0 auto"
          }}>
            {/* Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div className="glass-card" style={{ padding: "2rem", borderRadius: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.2rem", color: "#fff", marginBottom: "1.5rem" }}>
                  Admissions &amp; Support
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(168, 85, 247, 0.15)",
                      color: "#c084fc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem"
                    }}>
                      <FaEnvelope />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)" }}>Email Us</div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff" }}>support@inspireai.in</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(99, 102, 241, 0.15)",
                      color: "#818cf8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem"
                    }}>
                      <FaPhone />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)" }}>Call / WhatsApp</div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff" }}>+91 98765 43210</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(52, 211, 153, 0.15)",
                      color: "#34d399",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem"
                    }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-subtle)" }}>Headquarters</div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff" }}>Bengaluru Tech Hub, Karnataka, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "1.5rem" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{ fontSize: "3rem", color: "#34d399", marginBottom: "1rem" }}>✓</div>
                  <h3 style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.3rem", color: "#fff", marginBottom: "0.5rem" }}>
                    Message Sent Successfully!
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    Our academic counselor will reach out to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  <h3 style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.2rem", color: "#fff", marginBottom: "0.5rem" }}>
                    Send Us a Message
                  </h3>

                  <div>
                    <label style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "0.6rem",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#fff",
                        outline: "none"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="name@example.com"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "0.6rem",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#fff",
                        outline: "none"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>Program of Interest</label>
                    <select style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.6rem",
                      background: "#120e2a",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#fff",
                      outline: "none"
                    }}>
                      <option>Full Stack Web Development</option>
                      <option>Data Science</option>
                      <option>Data Analytics</option>
                      <option>Artificial Intelligence</option>
                      <option>Generative AI (Gen AI)</option>
                      <option>Digital Marketing</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your background or queries..."
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "0.6rem",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#fff",
                        outline: "none"
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ padding: "0.85rem", justifyContent: "center" }}>
                    Submit Inquiry <FaPaperPlane />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
