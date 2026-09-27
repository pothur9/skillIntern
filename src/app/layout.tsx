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
    "Master in-demand skills in Full Stack Web Development, AI, Cyber Security, CAD Engineering, UI/UX Design, and Digital Marketing with Pioneer Technologies.",
  keywords: [
    "Pioneer Technologies",
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
