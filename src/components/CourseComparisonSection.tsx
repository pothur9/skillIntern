"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { COURSES, Course } from "@/data/courseData";
import { FaCheckCircle, FaBriefcase, FaCode, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";

export default function CourseComparisonSection() {
  const [selectedId, setSelectedId] = useState<string>(COURSES[0].id);
  const activeCourse = COURSES.find(c => c.id === selectedId) || COURSES[0];

  return (
    <>
    <style>{`
      @media (max-width: 768px) {
        .cc-card { padding: 1.5rem !important; }
        .cc-tabs { overflow-x: auto; flex-wrap: nowrap !important; justify-content: flex-start !important; padding-bottom: 0.5rem; }
        .cc-tabs > button { flex-shrink: 0; font-size: 0.82rem !important; padding: 0.5rem 1rem !important; }
      }
    `}</style>
    <section
      className="section relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)",
        color: "#0f172a",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0"
      }}
    >
      {/* Background Subtle Dot Pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.15) 1px, transparent 0)",
        backgroundSize: "28px 28px"
      }} />

      <div className="container relative z-10">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
            border: "1px solid #c7d2fe",
            marginBottom: "1rem"
          }}>
            ✦ Career Matrix
          </div>
          <h2 style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: "0.8rem"
          }}>
            Compare Our <span style={{ color: "#4f46e5", background: "rgba(238, 242, 255, 0.8)", padding: "0 0.5rem", borderRadius: "0.5rem" }}>5 Flagship Courses</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "#475569", maxWidth: "600px", margin: "0 auto" }}>
            Analyze skills, salary outcomes, industry tools, and career prospects for each program to pick your ideal path.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="cc-tabs" style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.8rem",
          marginBottom: "3rem"
        }}>
          {COURSES.map((course) => {
            const isActive = course.id === selectedId;
            return (
              <button
                key={course.id}
                onClick={() => setSelectedId(course.id)}
                style={{
                  padding: "0.65rem 1.4rem",
                  borderRadius: "0.85rem",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  color: isActive ? "#ffffff" : "#475569",
                  background: isActive
                    ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
                    : "#ffffff",
                  border: isActive
                    ? "1px solid #4f46e5"
                    : "1px solid #e2e8f0",
                  boxShadow: isActive ? "0 8px 24px rgba(79,70,229,0.3)" : "0 2px 8px rgba(0,0,0,0.04)"
                }}
              >
                {course.title}
              </button>
            );
          })}
        </div>

        {/* Active Course Highlights Detail Card */}
        <motion.div
          key={activeCourse.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="cc-card"
          style={{
            borderRadius: "1.8rem",
            padding: "2.5rem",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.06)"
          }}
        >
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2.5rem",
            alignItems: "center"
          }}>
            {/* Left Col: Core Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <span style={{
                  padding: "0.3rem 0.8rem",
                  borderRadius: "0.5rem",
                  background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 700
                }}>
                  {activeCourse.badge || "Flagship Program"}
                </span>
                <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 500 }}>
                  Duration: {activeCourse.duration}
                </span>
              </div>

              <h3 style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.3
              }}>
                {activeCourse.title}
              </h3>

              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6 }}>
                {activeCourse.description}
              </p>

              {/* Metrics Grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginTop: "0.5rem"
              }}>
                <div style={{
                  padding: "1rem",
                  borderRadius: "1rem",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#059669", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                    <FaMoneyBillWave /> Avg. Salary Package
                  </div>
                  <div style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>
                    {activeCourse.salaryPackage || "₹6 - ₹16 LPA"}
                  </div>
                </div>

                <div style={{
                  padding: "1rem",
                  borderRadius: "1rem",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#4f46e5", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                    <FaBriefcase /> Hiring Openings
                  </div>
                  <div style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>
                    10,000+ Jobs
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Tools & Key Modules */}
            <div style={{
              padding: "1.8rem",
              borderRadius: "1.4rem",
              background: "#f8fafc",
              border: "1px solid #e2e8f0"
            }}>
              <h4 style={{ fontFamily: "var(--font-orbitron)", fontSize: "1rem", color: "#0f172a", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700 }}>
                <FaCode style={{ color: "#4f46e5" }} /> Primary Tools &amp; Technologies
              </h4>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.8rem" }}>
                {activeCourse.keyTools?.map((tool, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: "0.4rem 0.8rem",
                      borderRadius: "0.6rem",
                      background: "#eef2ff",
                      border: "1px solid #c7d2fe",
                      color: "#3730a3",
                      fontSize: "0.82rem",
                      fontWeight: 600
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <h4 style={{ fontFamily: "var(--font-orbitron)", fontSize: "1rem", color: "#0f172a", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700 }}>
                <FaCheckCircle style={{ color: "#059669" }} /> Key Curriculum Modules
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2rem" }}>
                {activeCourse.modules?.slice(0, 3).map((mod, idx) => (
                  <div key={idx} style={{ fontSize: "0.85rem", color: "#475569", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <span style={{ color: "#4f46e5", fontWeight: 700 }}>•</span>
                    <div>
                      <strong style={{ color: "#0f172a" }}>{mod.title}:</strong> {mod.topics.join(", ")}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link
                  href={`/courses/${activeCourse.id}`}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: "center", fontSize: "0.88rem" }}
                >
                  Enroll Now ({activeCourse.price}) <FaArrowRight />
                </Link>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
