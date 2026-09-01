import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Courses from "@/components/Courses";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function CoursesPage() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen pt-28 text-center text-white">Loading Courses...</div>}>
        <Courses />
      </Suspense>
      <CTA />
      <Footer />
    </main>
  );
}
