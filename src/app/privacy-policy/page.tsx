import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      <section style={{ paddingTop: "9rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 className="section-title">Privacy Policy</h1>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Last updated: August 2025</p>

          <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "1.5rem", color: "#e2e8f0", lineHeight: 1.8 }}>
            <h3 style={{ fontFamily: "var(--font-orbitron)", color: "#fff", marginBottom: "0.8rem" }}>1. Information We Collect</h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Inspire AI collects personal information such as your name, email address, phone number, and educational background when you register for a course or request a consultation.
            </p>

            <h3 style={{ fontFamily: "var(--font-orbitron)", color: "#fff", marginBottom: "0.8rem" }}>2. How We Use Information</h3>
            <p style={{ marginBottom: "1.5rem" }}>
              We use your data to provide live course access, issue verified digital certificates, assist in career placement referrals, and communicate important syllabus updates.
            </p>

            <h3 style={{ fontFamily: "var(--font-orbitron)", color: "#fff", marginBottom: "0.8rem" }}>3. Data Security &amp; Protection</h3>
            <p>
              We implement industry-standard encryption and security protocols to safeguard your personal credentials against unauthorized access.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
