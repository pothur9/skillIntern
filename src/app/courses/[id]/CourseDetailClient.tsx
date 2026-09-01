"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Course } from "@/data/courseData";
import {
  FaStar,
  FaClock,
  FaBookOpen,
  FaUserGraduate,
  FaCheck,
  FaArrowLeft,
  FaPaperPlane,
  FaTimes,
  FaCheckCircle,
  FaUser,
  FaPhoneAlt,
  FaChevronDown,
  FaChevronUp,
  FaBriefcase,
  FaMoneyBillWave,
  FaCode,
  FaGraduationCap,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";

export default function CourseDetailClient({ course }: { course: Course }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [fieldErrors, setFieldErrors] = useState({ name: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [openModuleIdx, setOpenModuleIdx] = useState<number | null>(0);

  const validateName = (val: string) =>
    val.trim().length < 2 ? "Name must be at least 2 characters." : "";

  const validatePhone = (val: string) =>
    /^\d{10}$/.test(val.trim()) ? "" : "Phone number must be exactly 10 digits.";

  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);

    if (nameErr || phoneErr) {
      setFieldErrors({ name: nameErr, phone: phoneErr });
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          course: course.title
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to process enrollment request.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setSubmitted(false);
    setError("");
    setName("");
    setPhone("");
    setFieldErrors({ name: "", phone: "" });
  };

  const rawPrice = parseInt(course.price.replace(/[^\d]/g, "")) || 60000;
  const rawOrig = parseInt(course.originalPrice?.replace(/[^\d]/g, "") || "") || 90000;
  const discountPct = Math.round(((rawOrig - rawPrice) / rawOrig) * 100);

  return (
    <>
      {/* Detail Page Hero Banner */}
      <section style={{
        paddingTop: "clamp(6.5rem, 10vw, 9rem)",
        paddingBottom: "4.5rem",
        background: "radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.22) 0%, transparent 65%), linear-gradient(180deg, #090617 0%, #0d0922 50%, #120d30 100%)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background Grid Pattern */}
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "36px 36px",
          pointerEvents: "none"
        }} />

        <div className="container relative z-10">
          <Link
            href="/courses"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#c084fc",
              fontSize: "0.88rem",
              fontWeight: 600,
              marginBottom: "2rem",
              textDecoration: "none"
            }}
          >
            <FaArrowLeft /> Back to All Programs
          </Link>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "flex-start"
          }}>
            {/* Left Content Header */}
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", alignItems: "center", marginBottom: "1.2rem" }}>
                <span className="section-badge" style={{ margin: 0, background: "rgba(168,85,247,0.15)", color: "#c084fc", border: "1px solid rgba(168,85,247,0.3)" }}>
                  {course.category}
                </span>

                {course.bestseller && (
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "#fbbf24",
                    background: "rgba(251, 191, 36, 0.12)",
                    border: "1px solid rgba(251, 191, 36, 0.3)",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "9999px"
                  }}>
                    ✦ Bestseller Program
                  </span>
                )}

                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#fbbf24",
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "9999px"
                }}>
                  <FaStar style={{ color: "#fbbf24" }} /> {course.rating} Rating
                </span>
              </div>

              <h1 style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "1.2rem",
                letterSpacing: "-0.02em"
              }}>
                {course.title}
              </h1>

              <p style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
                marginBottom: "2rem"
              }}>
                {course.description}
              </p>

              {/* Quick Info Badges Bar */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "1rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1.2rem",
                padding: "1.2rem",
                marginBottom: "2.5rem"
              }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.2rem" }}>Duration</span>
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <FaClock style={{ color: "#c084fc" }} /> {course.duration}
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.2rem" }}>Curriculum</span>
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <FaBookOpen style={{ color: "#818cf8" }} /> {course.lessons} Modules
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.2rem" }}>Mentees Enrolled</span>
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <FaUserGraduate style={{ color: "#34d399" }} /> {course.students} Students
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "0.2rem" }}>Salary Potential</span>
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#34d399", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <FaMoneyBillWave /> {course.salaryPackage || "₹6 - ₹18 LPA"}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", alignItems: "center" }}>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-shimmer"
                  style={{
                    padding: "0.95rem 2.5rem",
                    borderRadius: "1rem",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    boxShadow: "0 8px 30px rgba(124, 58, 237, 0.4)",
                    transition: "transform 0.2s ease"
                  }}
                >
                  <FaRocket /> Enroll Now ({course.price})
                </button>

              </div>
            </div>

            {/* Right Sticky Enrollment Card */}
            <div className="glass-card" style={{
              padding: "2.2rem",
              borderRadius: "2rem",
              border: "1px solid rgba(168, 85, 247, 0.35)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              background: "rgba(18, 14, 42, 0.85)"
            }}>
              {/* Course Image Header */}
              {course.image && (
                <div style={{
                  height: "170px",
                  borderRadius: "1.2rem",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                  position: "relative"
                }}>
                  <img src={course.image} alt={course.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,9,26,0.8) 0%, transparent 60%)" }} />
                </div>
              )}

              <div style={{ display: "flex", alignItems: "baseline", gap: "0.8rem", marginBottom: "0.4rem" }}>
                <span style={{
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "#ffffff"
                }}>
                  {course.price}
                </span>
                <span style={{
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "line-through"
                }}>
                  {course.originalPrice}
                </span>
              </div>

              {discountPct > 0 && (
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  color: "#34d399",
                  background: "rgba(52, 211, 153, 0.12)",
                  border: "1px solid rgba(52, 211, 153, 0.25)",
                  padding: "0.35rem 0.8rem",
                  borderRadius: "0.6rem",
                  marginBottom: "1.8rem"
                }}>
                  ✓ {discountPct}% Limited-Time Scholarship Discount Applied
                </div>
              )}

              {/* Feature Checklist */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <FaCheckCircle style={{ color: "#c084fc", fontSize: "1rem", flexShrink: 0 }} /> Full Lifetime Course Access &amp; LMS Portal
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <FaCheckCircle style={{ color: "#c084fc", fontSize: "1rem", flexShrink: 0 }} /> 1-on-1 Dedicated Mentor Doubt Clearing
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <FaCheckCircle style={{ color: "#c084fc", fontSize: "1rem", flexShrink: 0 }} /> Real-World Capstone Industry Projects
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <FaCheckCircle style={{ color: "#c084fc", fontSize: "1rem", flexShrink: 0 }} /> Verified Digital Certificate of Completion
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <FaCheckCircle style={{ color: "#c084fc", fontSize: "1rem", flexShrink: 0 }} /> 50+ Partner Company Hiring Referrals
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "1rem",
                  background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  color: "#ffffff",
                  border: "none",
                  fontSize: "1rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  boxShadow: "0 8px 24px rgba(124, 58, 237, 0.4)",
                  transition: "transform 0.2s ease"
                }}
              >
                Enroll Now <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Tools Mastered Section */}
      {course.keyTools && course.keyTools.length > 0 && (
        <section style={{
          padding: "3rem 0",
          background: "#0c091a",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)"
        }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#c084fc" }}>
                <FaCode style={{ display: "inline", marginRight: "0.4rem" }} /> Primary Tools Mastered:
              </span>
              {course.keyTools.map((tool, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: "0.75rem",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontSize: "0.88rem",
                    fontWeight: 600
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Course Curriculum & Syllabus Breakdown Section */}
      <section className="section" style={{ background: "linear-gradient(180deg, #0c091a 0%, #120e2a 100%)" }}>
        <div className="container" style={{ maxWidth: "920px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge" style={{ margin: "0 auto 1rem" }}>
              <span>Structured Syllabus</span>
            </div>
            <h2 className="section-title">
              Curriculum <span className="gradient-text">Modules</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Explore the step-by-step module breakdown designed by industry veterans.
            </p>
          </div>

          {course.modules && course.modules.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {course.modules.map((mod, idx) => {
                const isOpen = openModuleIdx === idx;
                return (
                  <div
                    key={idx}
                    className="glass-card"
                    style={{
                      borderRadius: "1.2rem",
                      overflow: "hidden",
                      border: isOpen ? "1px solid rgba(168, 85, 247, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <button
                      onClick={() => setOpenModuleIdx(isOpen ? null : idx)}
                      style={{
                        width: "100%",
                        padding: "1.4rem 1.8rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        textAlign: "left",
                        color: isOpen ? "#c084fc" : "#ffffff",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer"
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                        <span style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          background: isOpen ? "rgba(192,132,252,0.2)" : "rgba(255,255,255,0.06)",
                          color: isOpen ? "#c084fc" : "#94a3b8",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.85rem",
                          fontWeight: 800
                        }}>
                          0{idx + 1}
                        </span>
                        {mod.title}
                      </span>
                      <span style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: "0 1.8rem 1.6rem 3.8rem",
                        borderTop: "1px solid rgba(255,255,255,0.04)"
                      }}>
                        <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.8rem" }}>
                          Topics Covered &amp; Hands-On Labs:
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                          {mod.topics.map((topic, j) => (
                            <span
                              key={j}
                              style={{
                                fontSize: "0.85rem",
                                padding: "0.4rem 0.9rem",
                                borderRadius: "0.6rem",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                color: "#e2e8f0"
                              }}
                            >
                              ✦ {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p style={{ textAlign: "center", color: "#94a3b8" }}>Contact us for complete detailed module syllabus breakdown.</p>
          )}
        </div>
      </section>

      {/* Floating Bottom Bar on Mobile Devices */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: "rgba(12, 9, 26, 0.95)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.15)",
        padding: "0.8rem 1.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem"
      }} className="hide-desktop">
        <div>
          <span style={{ fontSize: "0.72rem", color: "#94a3b8", display: "block" }}>Fee Structure</span>
          <span style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>
            {course.price}
          </span>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            padding: "0.75rem 1.6rem",
            borderRadius: "0.75rem",
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            color: "#ffffff",
            border: "none",
            fontSize: "0.9rem",
            fontWeight: 800,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}
        >
          Enroll Now <FaPaperPlane />
        </button>
      </div>

      {/* Interactive Instant Enrollment Lead Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem"
            }}
          >
            {/* Overlay Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetModal}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(15, 23, 42, 0.75)",
                backdropFilter: "blur(8px)"
              }}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "440px",
                background: "#ffffff",
                borderRadius: "1.8rem",
                padding: "2.2rem 2rem",
                border: "1px solid #e2e8f0",
                boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.25)",
                zIndex: 10
              }}
            >
              {/* Close Button */}
              <button
                onClick={resetModal}
                style={{
                  position: "absolute",
                  top: "1.2rem",
                  right: "1.2rem",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#f1f5f9",
                  border: "1px solid #e2e8f0",
                  color: "#64748b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <FaTimes />
              </button>

              {submitted ? (
                <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                  <div style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "#ecfdf5",
                    border: "1px solid #a7f3d0",
                    color: "#10b981",
                    fontSize: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.2rem"
                  }}>
                    <FaCheckCircle />
                  </div>

                  <h3 style={{
                    fontFamily: "var(--font-orbitron)",
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "#0f172a",
                    marginBottom: "0.6rem"
                  }}>
                    Enrollment Request Received!
                  </h3>

                  <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.5, marginBottom: "1.5rem" }}>
                    Thank you, <strong style={{ color: "#0f172a" }}>{name}</strong>! Your seat inquiry for <strong style={{ color: "#4f46e5" }}>{course.title}</strong> has been submitted. Our admissions mentor will call you at <strong style={{ color: "#0f172a" }}>+91 {phone}</strong> shortly.
                  </p>

                  <button
                    onClick={resetModal}
                    style={{
                      padding: "0.75rem 1.8rem",
                      borderRadius: "0.75rem",
                      background: "#0f172a",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div>
                  <div style={{ textAlign: "center", marginBottom: "1.8rem" }}>
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.35rem 0.9rem",
                      borderRadius: "999px",
                      background: "#eef2ff",
                      border: "1px solid #c7d2fe",
                      color: "#4f46e5",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      marginBottom: "0.8rem"
                    }}>
                      <FaGraduationCap /> Course Admission Inquiry
                    </div>

                    <h3 style={{
                      fontFamily: "var(--font-orbitron)",
                      fontSize: "1.35rem",
                      fontWeight: 800,
                      color: "#0f172a",
                      lineHeight: 1.3,
                      marginBottom: "0.4rem"
                    }}>
                      Enroll in <span style={{ color: "#4f46e5" }}>{course.title}</span>
                    </h3>

                    <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
                      Fill in your details below for instant fee breakdown &amp; admissions counseling.
                    </p>
                  </div>

                  <form onSubmit={handleEnrollSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                    <div>
                      <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "0.4rem" }}>
                        Full Name
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Aarav Sharma"
                          value={name}
                          onChange={(e) => {
                            const val = e.target.value;
                            setName(val);
                            setFieldErrors((prev) => ({ ...prev, name: validateName(val) }));
                          }}
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem 0.75rem 2.6rem",
                            borderRadius: "0.75rem",
                            background: "#f8fafc",
                            border: `1px solid ${fieldErrors.name ? "#ef4444" : "#cbd5e1"}`,
                            color: "#0f172a",
                            fontSize: "0.9rem",
                            outline: "none",
                            fontWeight: 500
                          }}
                        />
                        <FaUser style={{
                          position: "absolute",
                          left: "0.9rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: fieldErrors.name ? "#ef4444" : "#4f46e5",
                          fontSize: "0.9rem"
                        }} />
                      </div>
                      {fieldErrors.name && (
                        <p style={{ marginTop: "0.3rem", fontSize: "0.76rem", color: "#ef4444", fontWeight: 600 }}>
                          ⚠️ {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "#334155", display: "block", marginBottom: "0.4rem" }}>
                        Phone Number (10 Digits)
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          placeholder="e.g. 9876543210"
                          value={phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                            setPhone(val);
                            setFieldErrors((prev) => ({ ...prev, phone: validatePhone(val) }));
                          }}
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem 0.75rem 2.6rem",
                            borderRadius: "0.75rem",
                            background: "#f8fafc",
                            border: `1px solid ${fieldErrors.phone ? "#ef4444" : "#cbd5e1"}`,
                            color: "#0f172a",
                            fontSize: "0.9rem",
                            outline: "none",
                            fontWeight: 500
                          }}
                        />
                        <FaPhoneAlt style={{
                          position: "absolute",
                          left: "0.9rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: fieldErrors.phone ? "#ef4444" : "#059669",
                          fontSize: "0.9rem"
                        }} />
                      </div>
                      {fieldErrors.phone && (
                        <p style={{ marginTop: "0.3rem", fontSize: "0.76rem", color: "#ef4444", fontWeight: 600 }}>
                          ⚠️ {fieldErrors.phone}
                        </p>
                      )}
                    </div>

                    {error && (
                      <div style={{
                        padding: "0.65rem 1rem",
                        borderRadius: "0.6rem",
                        background: "#fef2f2",
                        border: "1px solid #fecaca",
                        color: "#dc2626",
                        fontSize: "0.82rem",
                        fontWeight: 600
                      }}>
                        ⚠️ {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      style={{
                        marginTop: "0.6rem",
                        width: "100%",
                        padding: "0.85rem",
                        borderRadius: "0.75rem",
                        background: isLoading
                          ? "linear-gradient(135deg, #a5b4fc 0%, #c4b5fd 100%)"
                          : "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                        color: "#ffffff",
                        border: "none",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        cursor: isLoading ? "not-allowed" : "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        boxShadow: "0 8px 20px rgba(79, 70, 229, 0.3)",
                        transition: "all 0.25s ease"
                      }}
                    >
                      {isLoading ? "Submitting..." : (<>Submit Enrollment Request <FaPaperPlane /></>)}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
