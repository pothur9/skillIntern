"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaHome, FaBookOpen, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { openLeadModal } from "@/components/LeadCollectionModal";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/courses", label: "Courses", icon: <FaBookOpen /> },
  { href: "/about", label: "About Us", icon: <FaInfoCircle /> },
  { href: "#contact", label: "Contact", icon: <FaPhoneAlt />, isContact: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Outer Floating Bar Wrapper */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        paddingTop: scrolled ? "0.5rem" : "1rem",
        paddingBottom: "0.5rem",
        transition: "all 0.4s ease"
      }}>
        {/* Floating Nav Container */}
        <nav
          style={{
            width: "calc(100% - 2rem)",
            maxWidth: scrolled ? "960px" : "1150px",
            borderRadius: "1rem",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
            pointerEvents: "auto",
            transition: "all 0.4s ease"
          }}
          role="navigation"
          aria-label="Main navigation"
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: scrolled ? "0.5rem 1.2rem" : "0.75rem 1.5rem",
            transition: "all 0.4s ease"
          }}>
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(124,58,237,0.2)",
                  border: "1px solid rgba(124,58,237,0.3)"
                }}
              >
                <img src="/logos/inspirelogo.png" alt="Pioneer Technologies" style={{ width: "26px", height: "26px", objectFit: "contain" }} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(90deg, #c084fc, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Pioneer Technologies
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }} className="desktop-links">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = pathname === item.href;
                if (item.isContact) {
                  return (
                    <button
                      key={idx}
                      onClick={() => openLeadModal()}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.45rem 0.9rem",
                        borderRadius: "0.75rem",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        color: "#94a3b8",
                        background: "transparent",
                        border: "1px solid transparent",
                        cursor: "pointer",
                        transition: "all 0.25s ease"
                      }}
                    >
                      <span style={{ fontSize: "0.85rem", opacity: 0.7 }}>{item.icon}</span>
                      {item.label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.45rem 0.9rem",
                      borderRadius: "0.75rem",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "all 0.25s ease",
                      color: isActive ? "#ffffff" : "#94a3b8",
                      background: isActive ? "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(79,70,229,0.3))" : "transparent",
                      border: isActive ? "1px solid rgba(124,58,237,0.35)" : "1px solid transparent"
                    }}
                  >
                    <span style={{ fontSize: "0.85rem", opacity: isActive ? 1 : 0.7 }}>{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Actions: CodeEmy Rotating Border Button & Mobile Hamburger */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <div className="button_box" onClick={() => openLeadModal()}>
                <div className="rotating_border_ring" />
                <button className="buttonClass" type="button">
                  Contact
                </button>
              </div>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  color: "#ffffff",
                  fontSize: "1.4rem",
                  padding: "0.3rem"
                }}
                className="mobile-toggle-btn"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .mobile-toggle-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-toggle-btn { display: none !important; }
        }
      `}</style>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            width: "80%",
            maxWidth: "320px",
            background: "rgba(18,14,42,0.98)",
            backdropFilter: "blur(24px)",
            zIndex: 1001,
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.8rem",
            boxShadow: "-10px 0 30px rgba(0,0,0,0.8)",
            borderLeft: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.2rem", fontWeight: 800, color: "#fff" }}>
              Inspire <span className="gradient-text">AI</span>
            </span>
            <button onClick={() => setMobileOpen(false)} style={{ color: "#fff", fontSize: "1.5rem" }}>
              <HiX />
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {NAV_ITEMS.map((item, idx) => {
              if (item.isContact) {
                return (
                  <button
                    key={idx}
                    onClick={() => { setMobileOpen(false); openLeadModal(); }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.75rem",
                      color: "#e2e8f0",
                      fontSize: "0.95rem",
                      background: "rgba(255,255,255,0.03)",
                      border: "none",
                      cursor: "pointer",
                      width: "100%",
                      textAlign: "left"
                    }}
                  >
                    <span style={{ color: "#c084fc" }}>{item.icon}</span>
                    {item.label}
                  </button>
                );
              }
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.75rem",
                    color: "#e2e8f0",
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    background: "rgba(255,255,255,0.03)"
                  }}
                >
                  <span style={{ color: "#c084fc" }}>{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => { setMobileOpen(false); openLeadModal(); }}
            className="btn-primary"
            style={{ marginTop: "auto", width: "100%", justifyContent: "center" }}
          >
            Contact Us
          </button>
        </div>
      )}
    </>
  );
}
