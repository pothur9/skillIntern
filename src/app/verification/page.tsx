"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaShieldAlt, FaSearch, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function VerificationPage() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState<null | { valid: boolean; name?: string; course?: string; issueDate?: string }>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;

    // Sample verification lookup mock
    if (certId.toUpperCase().startsWith("CE-") || certId.length >= 6) {
      setResult({
        valid: true,
        name: "Verified Learner",
        course: "Full Stack Web Development & Real-World Capstone",
        issueDate: "2025-08-15"
      });
    } else {
      setResult({ valid: false });
    }
  };

  return (
    <main>
      <Navbar />

      <section style={{ paddingTop: "9rem", paddingBottom: "6rem", minHeight: "80vh" }}>
        <div className="container" style={{ maxWidth: "700px", textAlign: "center" }}>
          <div className="section-badge" style={{ margin: "0 auto 1.5rem" }}>
            <span>Digital Credential Verification</span>
          </div>

          <h1 className="section-title">
            Verify <span className="gradient-text">Pioneer Technologies Certificate</span>
          </h1>

          <p className="section-subtitle" style={{ margin: "0 auto 3rem" }}>
            Enter the unique Certificate ID printed on your Pioneer Technologies credential to verify authenticity.
          </p>

          {/* Search Box */}
          <form onSubmit={handleVerify} className="glass-card" style={{ padding: "2rem", borderRadius: "1.5rem", marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
              <input
                type="text"
                placeholder="Enter Certificate ID (e.g. CE-987654)"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: "240px",
                  padding: "0.85rem 1.2rem",
                  borderRadius: "0.75rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  fontSize: "0.95rem",
                  outline: "none"
                }}
              />

              <button type="submit" className="btn-primary" style={{ padding: "0.85rem 1.8rem" }}>
                Verify Credentials <FaSearch />
              </button>
            </div>
          </form>

          {/* Verification Result Display */}
          {result && (
            <div className="glass-card" style={{
              padding: "2rem",
              borderRadius: "1.5rem",
              textAlign: "left",
              border: result.valid ? "1px solid rgba(52, 211, 153, 0.4)" : "1px solid rgba(239, 68, 68, 0.4)"
            }}>
              {result.valid ? (
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#34d399", fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>
                    <FaCheckCircle /> Certificate Verified &amp; Authentic
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.92rem", color: "var(--text-muted)" }}>
                    <div><strong style={{ color: "#fff" }}>Certificate ID:</strong> {certId.toUpperCase()}</div>
                    <div><strong style={{ color: "#fff" }}>Program:</strong> {result.course}</div>
                    <div><strong style={{ color: "#fff" }}>Issued Date:</strong> {result.issueDate}</div>
                    <div><strong style={{ color: "#fff" }}>Status:</strong> Active &amp; Employer Recognized</div>
                  </div>
                </div>
              ) : (
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#f87171", fontSize: "1rem", fontWeight: 600 }}>
                  <FaExclamationCircle /> No certificate record found for ID &ldquo;{certId}&rdquo;. Please check the ID and try again.
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
