import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <section style={{ paddingTop: "9rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 className="section-title">Terms of Service</h1>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Last updated: August 2025</p>

          <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "1.5rem", color: "#e2e8f0", lineHeight: 1.8 }}>
            <h3 style={{ fontFamily: "var(--font-orbitron)", color: "#fff", marginBottom: "0.8rem" }}>1. Course Access &amp; License</h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Upon enrolling in an Inspire AI program, you receive a personal, non-transferable license to access course materials, live sessions, and syllabus assignments.
            </p>

            <h3 style={{ fontFamily: "var(--font-orbitron)", color: "#fff", marginBottom: "0.8rem" }}>2. Code of Conduct</h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Learners must maintain academic integrity in project submissions and treat mentors and fellow students with respect during live classes and group discussions.
            </p>

            <h3 style={{ fontFamily: "var(--font-orbitron)", color: "#fff", marginBottom: "0.8rem" }}>3. Intellectual Property</h3>
            <p>
              All video recordings, syllabus PDFs, assignments, and logos are the property of Inspire AI. Unlawful distribution is strictly prohibited.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
