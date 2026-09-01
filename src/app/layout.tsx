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
  title: "Inspire AI — India's Leading Career Platform",
  description:
    "Master in-demand skills in Full Stack Web Development, AI, Cyber Security, CAD Engineering, UI/UX Design, and Digital Marketing with Inspire AI.",
  keywords: [
    "Inspire AI",
    "online courses",
    "full stack development",
    "cyber security",
    "ethical hacking",
    "data analytics",
    "AI course",
    "CAD engineering",
    "UI UX design",
    "digital marketing",
    "internships",
    "certifications"
  ],
  authors: [{ name: "Inspire AI" }],
  creator: "Inspire AI",
  publisher: "Inspire AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.inspireai.in",
    siteName: "Inspire AI",
    title: "Inspire AI — India's Leading Career Platform",
    description:
      "Master in-demand skills in tech, CAD, design, and business with industry-ready certification programs.",
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
