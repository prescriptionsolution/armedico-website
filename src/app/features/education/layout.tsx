import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Hub & Medical Resources | ARmedico",
  description: "Access a vast library of patient handouts, CME video courses, and clinic templates. Join our doctor community for case discussions and live webinars.",
  openGraph: {
    title: "ARmedico Academy - Medical Knowledge Base",
    description: "Download printable patient diet charts, watch expert surgeries, and earn CME credits. Connect with specialists worldwide.",
    // images: ['/images/education-hub-preview.jpg'], // Optional
  },
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}