"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { COURSES, Course } from "@/data/courseData";
import {
  FaStar,
  FaClock,
  FaUserGraduate,
  FaArrowRight,
  FaSearch,
  FaLaptopCode,
  FaBookOpen,
  FaChartLine,
  FaMagic,
  FaBrain,
  FaBolt,
  FaLayerGroup,
  FaThLarge,
  FaList,
  FaCode
} from "react-icons/fa";

const CATEGORIES = [
  { name: "All", icon: FaLayerGroup },
  { name: "Full Stack Web Development", icon: FaLaptopCode },
  { name: "Data Science", icon: FaBookOpen },
  { name: "Data Analytics", icon: FaChartLine },
  { name: "Artificial Intelligence", icon: FaMagic },
  { name: "Generative AI", icon: FaBrain },
  { name: "Digital Marketing", icon: FaBolt }
];

const CATEGORY_THEMES: Record<string, { badgeBg: string; borderHover: string }> = {
  "Full Stack Web Development": {
    badgeBg: "linear-gradient(135deg, #3b82f6, #6366f1)",
    borderHover: "rgba(99, 102, 241, 0.6)"
  },
  "Data Science": {
    badgeBg: "linear-gradient(135deg, #a855f7, #6366f1)",
    borderHover: "rgba(168, 85, 247, 0.6)"
  },
  "Data Analytics": {
    badgeBg: "linear-gradient(135deg, #ec4899, #a855f7)",
    borderHover: "rgba(236, 72, 153, 0.6)"
  },
  "Artificial Intelligence": {
    badgeBg: "linear-gradient(135deg, #9333ea, #c084fc)",
    borderHover: "rgba(192, 132, 252, 0.6)"
  },
  "Generative AI": {
    badgeBg: "linear-gradient(135deg, #e11d48, #f43f5e)",
    borderHover: "rgba(244, 63, 94, 0.6)"
  },
  "Digital Marketing": {
    badgeBg: "linear-gradient(135deg, #0d9488, #10b981)",
    borderHover: "rgba(16, 185, 129, 0.6)"
  }
};

export default function Courses({ limit }: { limit?: number }) {
  const [selectedCat, setSelectedCat] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const searchParams = useSearchParams();

  useEffect(() => {
    const catParam = searchParams.get("category");
    if (catParam) {
      if (catParam === "AI & ML" || catParam === "AI") {
        setSelectedCat("Artificial Intelligence");
      } else {
        const matched = CATEGORIES.find(
          (c) => c.name.toLowerCase() === catParam.toLowerCase()
        );
        if (matched) {
          setSelectedCat(matched.name);
        } else {
          setSelectedCat(catParam);
        }
      }
    }
  }, [searchParams]);

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = selectedCat === "All" || course.category === selectedCat;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedCourses = limit ? filteredCourses.slice(0, limit) : filteredCourses;

  return (
    <section
      id="courses"
      style={{
        position: "relative",
        paddingTop: limit ? "5rem" : "7.5rem",
        paddingBottom: "6rem",
        background: "radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 60%), linear-gradient(180deg, #080614 0%, #0c091e 40%, #100b28 100%)",
        color: "#ffffff",
        overflow: "hidden"
      }}
    >
      {/* Background Ambient Lighting Orbs */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "15%",
        width: "450px",
        height: "450px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
        filter: "blur(100px)",
        pointerEvents: "none"
      }} />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "2rem",
          marginBottom: "3rem"
        }}>
          <div style={{ maxWidth: "680px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1.1rem",
              borderRadius: "9999px",
              fontSize: "0.78rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#c084fc",
              background: "rgba(168, 85, 247, 0.12)",
              border: "1px solid rgba(168, 85, 247, 0.25)",
              marginBottom: "1rem"
            }}>
              <FaBolt style={{ color: "#fbbf24" }} /> Industry-Aligned Career Programs
            </div>

            <h2 style={{
              fontFamily: "var(--font-orbitron)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "0.8rem"
            }}>
              Explore Our <span className="gradient-text">Flagship Courses</span>
            </h2>

            <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.6 }}>
              Master in-demand engineering, data &amp; AI skills with live mentor guidance, hands-on capstones, and direct hiring referrals.
            </p>
          </div>

          {/* Header Stats Pill */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            padding: "1rem 1.5rem",
            borderRadius: "1.2rem",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{ textAlign: "center" }}>
              <span style={{ display: "block", fontSize: "1.4rem", fontWeight: 900, color: "#ffffff" }}>6</span>
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>Track Programs</span>
            </div>
            <div style={{ width: "1px", height: "30px", background: "rgba(255,255,255,0.1)" }} />
            <div style={{ textAlign: "center" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem", fontSize: "1.4rem", fontWeight: 900, color: "#fbbf24" }}>
                4.9 <FaStar style={{ fontSize: "1rem" }} />
              </span>
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>Rating</span>
            </div>
            <div style={{ width: "1px", height: "30px", background: "rgba(255,255,255,0.1)" }} />
            <div style={{ textAlign: "center" }}>
              <span style={{ display: "block", fontSize: "1.4rem", fontWeight: 900, color: "#34d399" }}>100%</span>
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>Live Projects</span>
            </div>
          </div>
        </div>

        {/* Filter Controls Toolbar */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "0.8rem 1rem",
          borderRadius: "1.4rem",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          marginBottom: "2.5rem"
        }}>
          {/* Category Tabs Scroll Bar */}
          <div className="tabs-scroll" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flex: 1, minWidth: "280px" }}>
            {CATEGORIES.map((cat) => {
              const isActive = selectedCat === cat.name;
              const IconComp = cat.icon;
              const count =
                cat.name === "All"
                  ? COURSES.length
                  : COURSES.filter((c) => c.category === cat.name).length;

              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCat(cat.name)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.55rem 1rem",
                    borderRadius: "0.85rem",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    background: isActive ? "linear-gradient(135deg, #7c3aed, #4f46e5)" : "rgba(255,255,255,0.04)",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.65)",
                    border: isActive ? "1px solid rgba(168, 85, 247, 0.5)" : "1px solid rgba(255,255,255,0.08)",
                    boxShadow: isActive ? "0 4px 20px rgba(124, 58, 237, 0.35)" : "none"
                  }}
                >
                  <IconComp style={{ fontSize: "0.95rem" }} />
                  {cat.name}
                  <span style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    padding: "0.15rem 0.45rem",
                    borderRadius: "999px",
                    background: isActive ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.1)",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.7)"
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box & Layout Switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", width: "auto" }}>
            <div style={{ position: "relative", width: "220px" }}>
              <FaSearch style={{ position: "absolute", left: "0.85rem", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }} />
              <input
                type="text"
                placeholder="Search course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.55rem 0.8rem 0.55rem 2.3rem",
                  borderRadius: "0.75rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  outline: "none"
                }}
              />
            </div>

            <div style={{ display: "flex", gap: "0.3rem", background: "rgba(255,255,255,0.05)", padding: "0.25rem", borderRadius: "0.75rem", border: "1px solid rgba(255,255,255,0.1)" }}>
              <button
                onClick={() => setViewMode("grid")}
                style={{
                  padding: "0.45rem 0.65rem",
                  borderRadius: "0.55rem",
                  fontSize: "0.85rem",
                  background: viewMode === "grid" ? "#7c3aed" : "transparent",
                  color: viewMode === "grid" ? "#ffffff" : "rgba(255,255,255,0.5)",
                  cursor: "pointer"
                }}
                title="Grid View"
              >
                <FaThLarge />
              </button>
              <button
                onClick={() => setViewMode("list")}
                style={{
                  padding: "0.45rem 0.65rem",
                  borderRadius: "0.55rem",
                  fontSize: "0.85rem",
                  background: viewMode === "list" ? "#7c3aed" : "transparent",
                  color: viewMode === "list" ? "#ffffff" : "rgba(255,255,255,0.5)",
                  cursor: "pointer"
                }}
                title="List View"
              >
                <FaList />
              </button>
            </div>
          </div>
        </div>

        {/* Course Cards Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCat + searchQuery + viewMode}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: viewMode === "grid" ? "repeat(auto-fill, minmax(320px, 1fr))" : "1fr",
              gap: "2rem"
            }}
          >
            {displayedCourses.length === 0 ? (
              <div style={{
                padding: "4rem 2rem",
                textAlign: "center",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "1.5rem",
                gridColumn: "1 / -1"
              }}>
                <FaBookOpen style={{ fontSize: "3rem", color: "rgba(168,85,247,0.5)", margin: "0 auto 1rem" }} />
                <h3 style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.3rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                  No Matching Courses Found
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem" }}>
                  Try resetting your category filters or typing a different search keyword.
                </p>
                <button
                  onClick={() => {
                    setSelectedCat("All");
                    setSearchQuery("");
                  }}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: "0.75rem",
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    cursor: "pointer"
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              displayedCourses.map((course: Course, idx: number) => {
                const imageSrc =
                  course.image ||
                  "/fullstack_course.png";
                const theme =
                  CATEGORY_THEMES[course.category] || CATEGORY_THEMES["Full Stack Web Development"];

                const rawPrice = parseInt(course.price.replace(/[^\d]/g, "")) || 60000;
                const rawOrig = parseInt(course.originalPrice?.replace(/[^\d]/g, "") || "") || 90000;
                const discountPct = Math.round(((rawOrig - rawPrice) / rawOrig) * 100);

  const handleCardContainerClick = (courseId: string) => (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a[download], button, a[target='_blank']")) {
      return;
    }
    window.location.href = `/courses/${courseId}`;
  };

  if (viewMode === "list") {
    return (
      <motion.div
        key={course.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: idx * 0.04 }}
        onClick={handleCardContainerClick(course.id)}
        className="glass-card course-card-hover"
        style={{
          borderRadius: "1.5rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflow: "hidden",
          background: "rgba(18, 14, 42, 0.75)",
          border: "1px solid rgba(168, 85, 247, 0.25)",
          cursor: "pointer"
        }}
      >
                      <Link
                        href={`/courses/${course.id}`}
                        style={{
                          width: "300px",
                          minHeight: "220px",
                          position: "relative",
                          overflow: "hidden",
                          display: "block",
                          flexShrink: 0
                        }}
                      >
                        <img
                          src={imageSrc}
                          alt={course.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease"
                          }}
                        />
                        <div style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to right, transparent, rgba(18, 14, 42, 0.9))"
                        }} />
                        <span style={{
                          position: "absolute",
                          top: "0.8rem",
                          left: "0.8rem",
                          padding: "0.3rem 0.8rem",
                          borderRadius: "999px",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          color: "#ffffff",
                          background: theme.badgeBg
                        }}>
                          {course.category}
                        </span>
                      </Link>

                      <div style={{ flex: 1, padding: "1.8rem", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.8rem", marginBottom: "0.6rem" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.82rem" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#fbbf24", fontWeight: 700, background: "rgba(251,191,36,0.1)", padding: "0.25rem 0.6rem", borderRadius: "0.5rem" }}>
                              <FaStar /> {course.rating} ★
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                              <FaClock style={{ color: "#c084fc" }} /> {course.duration}
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                              <FaUserGraduate style={{ color: "#34d399" }} /> {course.students}
                            </span>
                          </div>

                          {discountPct > 0 && (
                            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#34d399", background: "rgba(52,211,153,0.12)", padding: "0.25rem 0.65rem", borderRadius: "0.5rem" }}>
                              {discountPct}% OFF
                            </span>
                          )}
                        </div>

                        <Link href={`/courses/${course.id}`} style={{ textDecoration: "none" }}>
                          <h3 style={{
                            fontFamily: "var(--font-orbitron)",
                            fontSize: "1.3rem",
                            fontWeight: 800,
                            color: "#ffffff",
                            marginBottom: "0.5rem",
                            lineHeight: 1.3
                          }}>
                            {course.title}
                          </h3>
                        </Link>

                        <p style={{
                          fontSize: "0.88rem",
                          color: "rgba(255,255,255,0.65)",
                          lineHeight: 1.6,
                          marginBottom: "1.2rem",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}>
                          {course.description}
                        </p>

                        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                          <div>
                            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", display: "block" }}>Fee Structure</span>
                            <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                              <span style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.4rem", fontWeight: 900, color: "#ffffff" }}>
                                {course.price}
                              </span>
                              <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", textDecoration: "line-through" }}>
                                {course.originalPrice}
                              </span>
                            </div>
                          </div>

                          <div style={{ display: "flex", alignItems: "center" }}>
                            <Link
                              href={`/courses/${course.id}`}
                              style={{
                                padding: "0.75rem 1.6rem",
                                borderRadius: "0.75rem",
                                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                                color: "#ffffff",
                                fontWeight: 800,
                                fontSize: "0.88rem",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                textDecoration: "none",
                                boxShadow: "0 6px 20px rgba(124,58,237,0.35)"
                              }}
                            >
                              Explore Course <FaArrowRight style={{ fontSize: "0.75rem" }} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    onClick={handleCardContainerClick(course.id)}
                    className="glass-card course-card-hover"
                    style={{
                      borderRadius: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                      background: "rgba(18, 14, 42, 0.75)",
                      border: "1px solid rgba(168, 85, 247, 0.25)",
                      height: "100%",
                      cursor: "pointer"
                    }}
                  >
                    {/* Course Card Banner Image */}
                    <Link
                      href={`/courses/${course.id}`}
                      style={{
                        height: "190px",
                        width: "100%",
                        position: "relative",
                        overflow: "hidden",
                        display: "block"
                      }}
                    >
                      <img
                        src={imageSrc}
                        alt={course.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease"
                        }}
                      />
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(18, 14, 42, 0.95) 0%, transparent 60%)"
                      }} />

                      <span style={{
                        position: "absolute",
                        top: "0.8rem",
                        left: "0.8rem",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "999px",
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "#ffffff",
                        background: theme.badgeBg,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
                      }}>
                        {course.category}
                      </span>

                      {discountPct > 0 && (
                        <span style={{
                          position: "absolute",
                          bottom: "0.8rem",
                          right: "0.8rem",
                          padding: "0.25rem 0.65rem",
                          borderRadius: "0.5rem",
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          color: "#ffffff",
                          background: "#10b981",
                          boxShadow: "0 4px 10px rgba(16,185,129,0.4)"
                        }}>
                          {discountPct}% OFF
                        </span>
                      )}
                    </Link>

                    {/* Card Content Body */}
                    <div style={{ flex: 1, padding: "1.5rem", display: "flex", flexDirection: "column" }}>
                      {/* Rating & Mentees row */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.8rem" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem", fontWeight: 700, color: "#fbbf24", background: "rgba(251,191,36,0.1)", padding: "0.25rem 0.6rem", borderRadius: "0.5rem" }}>
                          <FaStar /> {course.rating} Rating
                        </span>
                        <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                          <FaUserGraduate style={{ color: "#34d399" }} /> {course.students} Enrolled
                        </span>
                      </div>

                      {/* Course Title */}
                      <Link href={`/courses/${course.id}`} style={{ textDecoration: "none" }}>
                        <h3 style={{
                          fontFamily: "var(--font-orbitron)",
                          fontSize: "1.15rem",
                          fontWeight: 800,
                          color: "#ffffff",
                          marginBottom: "0.5rem",
                          lineHeight: 1.35
                        }}>
                          {course.title}
                        </h3>
                      </Link>

                      {/* Description */}
                      <p style={{
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.55,
                        marginBottom: "1.2rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        flex: 1
                      }}>
                        {course.description}
                      </p>

                      {/* Tech Stack Pills */}
                      {course.keyTools && course.keyTools.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.4rem" }}>
                          {course.keyTools.slice(0, 3).map((tool, tIdx) => (
                            <span
                              key={tIdx}
                              style={{
                                fontSize: "0.7rem",
                                padding: "0.2rem 0.5rem",
                                borderRadius: "0.4rem",
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "#cbd5e1"
                              }}
                            >
                              {tool}
                            </span>
                          ))}
                          {course.keyTools.length > 3 && (
                            <span style={{ fontSize: "0.7rem", color: "#c084fc", padding: "0.2rem 0.3rem" }}>
                              +{course.keyTools.length - 3} more
                            </span>
                          )}
                        </div>
                      )}

                      {/* Footer Price & Action */}
                      <div style={{
                        marginTop: "auto",
                        paddingTop: "1rem",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.9rem"
                      }}>
                        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                          <div>
                            <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", display: "block" }}>Fee Structure</span>
                            <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                              <span style={{ fontFamily: "var(--font-orbitron)", fontSize: "1.35rem", fontWeight: 900, color: "#ffffff" }}>
                                {course.price}
                              </span>
                              <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", textDecoration: "line-through" }}>
                                {course.originalPrice}
                              </span>
                            </div>
                          </div>

                          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#c084fc" }}>
                            <FaClock style={{ display: "inline", marginRight: "0.3rem" }} /> {course.duration}
                          </span>
                        </div>

                        <div style={{ display: "flex", gap: "0.6rem" }}>
                          <Link
                            href={`/courses/${course.id}`}
                            style={{
                              width: "100%",
                              padding: "0.7rem",
                              borderRadius: "0.75rem",
                              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                              color: "#ffffff",
                              fontWeight: 800,
                              fontSize: "0.85rem",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "0.4rem",
                              textDecoration: "none",
                              boxShadow: "0 6px 18px rgba(124,58,237,0.3)"
                            }}
                          >
                            Explore Program <FaArrowRight style={{ fontSize: "0.75rem" }} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .course-card-hover {
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.35s ease, box-shadow 0.35s ease !important;
        }
        .course-card-hover:hover {
          transform: translateY(-8px) !important;
          border-color: rgba(168, 85, 247, 0.6) !important;
          box-shadow: 0 16px 40px rgba(124, 58, 237, 0.3) !important;
        }
        .course-card-hover:hover img {
          transform: scale(1.08) !important;
        }
      `}</style>
    </section>
  );
}
