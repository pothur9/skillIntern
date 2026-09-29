"use client";

import Link from "next/link";
import { FaRocket, FaLock, FaEnvelope } from "react-icons/fa";

export default function LoginPage() {
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
        maxWidth: "420px",
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

        <h2 style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.3rem", color: "#0f0a1e", marginBottom: "0.4rem" }}>
          Welcome Back
        </h2>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
          Log in to access your student dashboard &amp; courses
        </p>

        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "1.2rem", textAlign: "left" }}>
          <div>
            <label style={{ fontSize: "0.82rem", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>
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
                  background: "#ffffff",
                  border: "1px solid rgba(124,58,237,0.2)",
                  color: "#0f0a1e",
                  outline: "none"
                }}
              />
              <FaEnvelope style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-subtle)" }} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: "0.82rem", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem" }}>
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
                  background: "#ffffff",
                  border: "1px solid rgba(124,58,237,0.2)",
                  color: "#0f0a1e",
                  outline: "none"
                }}
              />
              <FaLock style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-subtle)" }} />
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ padding: "0.85rem", justifyContent: "center", marginTop: "0.5rem" }}>
            Login to Dashboard
          </button>
        </form>

        <div style={{ marginTop: "1.8rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Don&apos;t have an account?{" "}
          <Link href="/signup" style={{ color: "#7c3aed", fontWeight: 600 }}>
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
