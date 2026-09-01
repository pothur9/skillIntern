"use client";

import { FaWhatsapp, FaHeadset } from "react-icons/fa";
import { openLeadModal } from "@/components/LeadCollectionModal";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/917483111042?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Inspire%20AI%20courses.";

  return (
    <div style={{
      position: "fixed",
      bottom: "1.8rem",
      right: "1.8rem",
      zIndex: 999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.2rem"
    }}>
      {/* WhatsApp Floating Icon Button (Positioned Top) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+91 74831 11042)"
        title="Chat on WhatsApp (+91 74831 11042)"
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.75rem",
          boxShadow: "0 8px 25px rgba(37, 211, 102, 0.45)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease",
          textDecoration: "none"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1) translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
        }}
      >
        <FaWhatsapp />
      </a>

      {/* Enquire Now Floating Icon Button (Positioned Below WhatsApp Icon) */}
      <button
        onClick={() => openLeadModal()}
        aria-label="Enquire Now"
        title="Enquire Now"
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 8px 25px rgba(124, 58, 237, 0.45)",
          cursor: "pointer",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1) translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
        }}
      >
        <FaHeadset />
      </button>
    </div>
  );
}
