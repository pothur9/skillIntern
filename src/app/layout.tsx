import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0c091a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inspireai.in"),
  title: "Pioneer Technologies — India's Leading Career Platform",
  description:
    "Master in-demand skills with our all-in-one Complete Tech Mastery Package or individual courses — Full Stack Web Development, Data Science, Data Analytics, AI, Gen AI, and Digital Marketing — all at ₹8,000 with Pioneer Technologies.",
  keywords: [
    "Pioneer Technologies",
    "online courses",
    "full stack development",
    "data science",
    "data analytics",
    "artificial intelligence",
    "generative AI",
    "machine learning",
    "AI course",
    "web development",
    "digital marketing",
    "tech package",
    "internships",
    "certifications"
  ],
  authors: [{ name: "Pioneer Technologies" }],
  creator: "Pioneer Technologies",
  publisher: "Pioneer Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.inspireai.in",
    siteName: "Pioneer Technologies",
    title: "Pioneer Technologies — India's Leading Career Platform",
    description:
      "Master Full Stack Web Development, Data Science & AI/ML with our all-in-one Complete Tech Mastery Package.",
  },
};

import LeadCollectionModal from "@/components/LeadCollectionModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
        <LeadCollectionModal />
      </body>
    </html>
  );
}
