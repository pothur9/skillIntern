"use client";

import Link from "next/link";
import { FaRocket, FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";

export default function SignupPage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(ellipse at 50% 30%, rgba(124, 58, 237, 0.08), #f5f3ff 70%)",
      padding: "2rem 1.5rem"
    }}>
      <div className="glass-card" style={{
        maxWidth: "440px",
        width: "100%",
        padding: "2.5rem",
        borderRadius: "1.8rem",
        textAlign: "center",
        border: "1px solid rgba(168, 85, 247, 0.3)"
      }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", marginBottom: "1.5rem" }}>
          <div style={{
            height: "54px",
            borderRadius: "12px",
            overflow: "hidden",
            background: "#ffffff",
            padding: "3px 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 18px rgba(124,58,237,0.45)"
          }}>
            <img src="/logos/logo.png" alt="Pioneer Technologies" style={{ height: "48px", width: "auto", objectFit: "contain", display: "block" }} />
          </div>
        </Link>

        <h2 style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.3rem", color: "#fff", marginBottom: "0.4rem" }}>
          Create Student Account
        </h2>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.8rem" }}>
          Start your career journey with Pioneer Technologies programs
        </p>

        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "1.1rem", textAlign: "left" }}>
          <div>
            <label style={{ fontSize: "0.82rem", color: "var(--text-muted)", display: "block", marginBottom: "0.3rem" }}>
              Full Name
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Aarav Sharma"
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem 0.75rem 2.5rem",
                  borderRadius: "0.6rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  outline: "none"
                }}
              />
              <FaUser style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-subtle)" }} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: "0.82rem", color: "var(--text-muted)", display: "block", marginBottom: "0.3rem" }}>
              Email Address
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="email"
                placeholder="student@inspireai.in"
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem 0.75rem 2.5rem",
                  borderRadius: "0.6rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  outline: "none"
                }}
              />
              <FaEnvelope style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-subtle)" }} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: "0.82rem", color: "var(--text-muted)", display: "block", marginBottom: "0.3rem" }}>
              Phone Number
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem 0.75rem 2.5rem",
                  borderRadius: "0.6rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  outline: "none"
                }}
              />
              <FaPhone style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-subtle)" }} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: "0.82rem", color: "var(--text-muted)", display: "block", marginBottom: "0.3rem" }}>
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="password"
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem 0.75rem 2.5rem",
                  borderRadius: "0.6rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  outline: "none"
                }}
              />
              <FaLock style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-subtle)" }} />
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ padding: "0.85rem", justifyContent: "center", marginTop: "0.5rem" }}>
            Register Now
          </button>
        </form>

        <div style={{ marginTop: "1.6rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Already registered?{" "}
          <Link href="/login" style={{ color: "#c084fc", fontWeight: 600 }}>
            Login Here
          </Link>
        </div>
      </div>
    </main>
  );
}
