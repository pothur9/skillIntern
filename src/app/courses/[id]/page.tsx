import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { COURSES } from "@/data/courseData";
import { notFound } from "next/navigation";
import CourseDetailClient from "./CourseDetailClient";

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const course = COURSES.find((c) => c.id === resolvedParams.id);

  if (!course) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <CourseDetailClient course={course} />
      <CTA />
      <Footer />
    </main>
  );
}
