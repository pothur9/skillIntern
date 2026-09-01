import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandsMarquee from "@/components/BrandsMarquee";
import DomainCategories from "@/components/DomainCategories";
import CourseComparisonSection from "@/components/CourseComparisonSection";
import ProjectsShowcaseSection from "@/components/ProjectsShowcaseSection";
import LearningRoadmapSection from "@/components/LearningRoadmapSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import LearningPaths from "@/components/LearningPaths";
import DashboardPreview from "@/components/DashboardPreview";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandsMarquee />
      <DomainCategories />
      <CourseComparisonSection />
      <ProjectsShowcaseSection />
      <LearningRoadmapSection />
      <WhyChooseUs />
      <LearningPaths />
      <DashboardPreview />
      <Testimonials />
      <FaqSection />
      <Footer />
    </main>
  );
}
