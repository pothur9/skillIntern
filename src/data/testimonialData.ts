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
    content: "Inspire AI's Full Stack Web Development course was a game changer for me. The live projects and 1-on-1 mentor guidance helped me crack my first tech job with ease!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    course: "Full Stack Web Development"
  },
  {
    id: "2",
    name: "Priya Patel",
    role: "Cyber Security Analyst",
    company: "Infosys",
    rating: 5,
    content: "The Ethical Hacking hands-on labs were top-notch. Understanding vulnerability testing with real tools gave me confidence during interviews.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    course: "Cyber Security & Ethical Hacking"
  },
  {
    id: "3",
    name: "Rohan Verma",
    role: "AI Engineer",
    company: "Wipro",
    rating: 5,
    content: "Learning AI & Machine Learning from industry practitioners at Inspire AI was incredible. The syllabus covered everything from Neural Networks to LLM APIs.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    course: "Artificial Intelligence (AI)"
  },
  {
    id: "4",
    name: "Ananya Reddi",
    role: "UI/UX Designer",
    company: "Accenture",
    rating: 5,
    content: "Building a real-world design portfolio during the course helped me land my dream role as a UI/UX designer. Highly recommend Inspire AI!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    course: "UI/UX Design & Prototyping"
  }
];
