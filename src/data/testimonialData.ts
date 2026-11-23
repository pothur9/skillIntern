export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  avatar: string;
  course: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Aarav Sharma",
    role: "Full Stack Developer",
    company: "TCS",
    rating: 5,
    content: "Pioneer Technologies' Complete Tech Mastery Package was a game changer for me. The live projects and 1-on-1 mentor guidance helped me crack my first tech job with ease!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    course: "Complete Tech Mastery Package"
  },
  {
    id: "3",
    name: "Rohan Verma",
    role: "AI Engineer",
    company: "Wipro",
    rating: 5,
    content: "Learning AI & Machine Learning from industry practitioners at Pioneer Technologies was incredible. The syllabus covered everything from Neural Networks to Computer Vision.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    course: "Complete Tech Mastery Package"
  }
];
