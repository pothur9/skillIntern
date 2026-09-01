"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaPhoneAlt, FaGraduationCap, FaTimes, FaPaperPlane, FaCheckCircle, FaHeadset } from "react-icons/fa";

const COURSES_OPTIONS = [
  "Full Stack Web Development",
  "Data Science",
  "Data Analytics",
  "Artificial Intelligence",
  "Generative AI (Gen AI)",
  "Digital Marketing"
];

export function openLeadModal(course?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { course } }));
  }
}

export default function LeadCollectionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "Full Stack Web Development"
  });
  const [fieldErrors, setFieldErrors] = useState({ name: "", phone: "" });

  const validateName = (value: string) =>
    value.trim().length < 2 ? "Name must be at least 2 characters." : "";

  const validatePhone = (value: string) =>
    /^\d{10}$/.test(value.trim()) ? "" : "Phone number must be exactly 10 digits.";

  // Auto-open modal on page load after a brief 1.2s delay & listen to custom open events
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    const handleOpenModal = (e: Event) => {
      const customEvt = e as CustomEvent<{ course?: string }>;
      if (customEvt.detail?.course) {
        setFormData((prev) => ({ ...prev, course: customEvt.detail.course || prev.course }));
      }
      setIsOpen(true);
    };

    window.addEventListener("open-lead-modal", handleOpenModal);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-lead-modal", handleOpenModal);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameErr = validateName(formData.name);
    const phoneErr = validatePhone(formData.phone);
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
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
        setFormData({ name: "", phone: "", course: "Full Stack Web Development" });
      }, 3500);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to submit. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <style>{`
      @media (max-width: 480px) {
        .lead-modal-card { max-width: calc(100% - 1rem) !important; padding: 1.5rem 1rem !important; }
        .lead-trigger-widget { bottom: 14px !important; right: 14px !important; }
      }
    `}</style>
    <>
      {/* Floating Bottom Right Trigger Widget Icon */}
      <div
        className="lead-trigger-widget"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9990,
          display: "flex",
          alignItems: "center",
          gap: "0.6rem"
        }}
      >
        {/* Pulsing Hint Badge */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              padding: "0.5rem 0.9.rem",
              borderRadius: "999px",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
              color: "#0f172a",
              fontSize: "0.82rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem"
            }}
          >
            <span style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 8px #10b981"
            }} />
            Enquire Now
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setSubmitted(false);
          }}
          aria-label="Open Course Consultation Form"
          style={{
            width: "58px",
            height: "58px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.4rem",
            boxShadow: "0 10px 30px rgba(79, 70, 229, 0.4)",
            border: "2px solid #ffffff",
            cursor: "pointer",
            position: "relative"
          }}
        >
          {isOpen ? <FaTimes /> : <FaHeadset />}
        </motion.button>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isOpen && (
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
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(15, 23, 42, 0.65)",
                backdropFilter: "blur(6px)"
              }}
            />

            {/* White Theme Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="lead-modal-card"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "440px",
                background: "#ffffff",
                borderRadius: "1.8rem",
                padding: "2.2rem 2rem",
                border: "1px solid #e2e8f0",
                boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(79, 70, 229, 0.1)",
                zIndex: 10
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
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
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  transition: "all 0.2s ease"
                }}
              >
                <FaTimes />
              </button>

              {submitted ? (
                /* Success Feedback State - White Theme */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: "center", padding: "1.5rem 0" }}
                >
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
                    Request Submitted!
                  </h3>

                  <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.5 }}>
                    Thank you, <strong style={{ color: "#0f172a" }}>{formData.name || "Learner"}</strong>! Our senior career advisor will contact you shortly regarding the <strong style={{ color: "#4f46e5" }}>{formData.course}</strong> program.
                  </p>
                </motion.div>
              ) : (
                /* White Theme Lead Form UI */
                <div>
                  {/* Header Badge & Title */}
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
                      <FaGraduationCap /> Free Career Consultation
                    </div>

                    <h3 style={{
                      fontFamily: "var(--font-orbitron)",
                      fontSize: "1.45rem",
                      fontWeight: 800,
                      color: "#0f172a",
                      lineHeight: 1.3,
                      marginBottom: "0.4rem"
                    }}>
                      Get Course <span style={{ color: "#4f46e5" }}>Details &amp; Fees</span>
                    </h3>

                    <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
                      Fill out the form below to receive course details and speak with a career mentor.
                    </p>
                  </div>

                  {/* Form Fields */}
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                    {/* Field 1: Name */}
                    <div>
                      <label style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "#334155",
                        display: "block",
                        marginBottom: "0.4rem"
                      }}>
                        Full Name
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Aarav Sharma"
                          value={formData.name}
                          onChange={(e) => {
                            const val = e.target.value;
                            setFormData({ ...formData, name: val });
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

                    {/* Field 2: Phone Number */}
                    <div>
                      <label style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "#334155",
                        display: "block",
                        marginBottom: "0.4rem"
                      }}>
                        Phone Number
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          maxLength={10}
                          value={formData.phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                            setFormData({ ...formData, phone: val });
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

                    {/* Field 3: Select Course */}
                    <div>
                      <label style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "#334155",
                        display: "block",
                        marginBottom: "0.4rem"
                      }}>
                        Select Course
                      </label>
                      <div style={{ position: "relative" }}>
                        <select
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem 0.75rem 2.6rem",
                            borderRadius: "0.75rem",
                            background: "#f8fafc",
                            border: "1px solid #cbd5e1",
                            color: "#0f172a",
                            fontSize: "0.9rem",
                            outline: "none",
                            cursor: "pointer",
                            fontWeight: 500
                          }}
                        >
                          {COURSES_OPTIONS.map((c, i) => (
                            <option key={i} value={c} style={{ background: "#ffffff", color: "#0f172a" }}>
                              {c}
                            </option>
                          ))}
                        </select>
                        <FaGraduationCap style={{
                          position: "absolute",
                          left: "0.9rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "#d97706",
                          fontSize: "0.95rem"
                        }} />
                      </div>
                    </div>

                    {/* Error Message */}
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

                    {/* Submit Button */}
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
                      {isLoading ? "Sending..." : (<>Submit &amp; Get Consultation <FaPaperPlane /></>)}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
    </>
  );
}
