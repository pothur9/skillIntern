"use client";

import { useState } from "react";
import { FAQS } from "@/data/faqData";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="section" style={{
      background: "linear-gradient(180deg, #160e36 0%, #0d0724 100%)",
      borderTop: "1px solid rgba(168, 85, 247, 0.2)",
      borderBottom: "1px solid rgba(168, 85, 247, 0.2)"
    }}>
      <div className="container" style={{ maxWidth: "840px" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-badge" style={{ margin: "0 auto 1rem" }}>
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Got <span className="gradient-text">Questions?</span> We Have Answers.
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Everything you need to know about Pioneer Technologies courses, certifications, and career support.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  borderRadius: "1rem",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  border: isOpen ? "1px solid rgba(168, 85, 247, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)"
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: "100%",
                    padding: "1.2rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    textAlign: "left",
                    color: isOpen ? "#c084fc" : "#fff",
                    fontWeight: 600,
                    fontSize: "1rem"
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                    <FaQuestionCircle style={{ color: "#a855f7", flexShrink: 0 }} />
                    {faq.question}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {isOpen && (
                  <div style={{
                    padding: "0 1.5rem 1.5rem 3.3rem",
                    fontSize: "0.92rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    borderTop: "1px solid rgba(255,255,255,0.04)"
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
