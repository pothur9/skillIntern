import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPage() {
  return (
    <main>
      <Navbar />
      <section style={{ paddingTop: "9rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 className="section-title">Refund &amp; Cancellation Policy</h1>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Last updated: August 2025</p>

          <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "1.5rem", color: "#e2e8f0", lineHeight: 1.8 }}>
            <h3 style={{ fontFamily: "var(--font-orbitron)", color: "#fff", marginBottom: "0.8rem" }}>1. 7-Day Satisfaction Guarantee</h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Pioneer Technologies offers a 7-day money-back guarantee from the course start date. If you feel the program does not meet your expectations, you may request a 100% refund.
            </p>

            <h3 style={{ fontFamily: "var(--font-orbitron)", color: "#fff", marginBottom: "0.8rem" }}>2. Refund Processing</h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Approved refunds will be processed back to your original payment method (UPI, Netbanking, Credit/Debit Card) within 5-7 business days.
            </p>

            <h3 style={{ fontFamily: "var(--font-orbitron)", color: "#fff", marginBottom: "0.8rem" }}>3. Contact Support</h3>
            <p>
              To initiate a cancellation or refund request, please email <strong>support@inspireai.in</strong> with your registered email ID and order reference.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
