import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Prescription & AI Drug Interactions | ARmedico",
  description: "Prescribe medicines in 30 seconds with AI auto-fill. Features include drug interaction alerts, custom templates, and WhatsApp sharing.",
  openGraph: {
    title: "AI-Powered Doctor Prescription Pad - ARmedico",
    description: "Eliminate errors with safety checks. 20k+ medicine database, voice-to-text, and brand/generic options.",
    // images: ['/images/smart-prescription-preview.jpg'],
  },
};

export default function PrescriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}