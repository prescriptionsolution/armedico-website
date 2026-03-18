import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offline AI & Hybrid Cloud Sync | ARmedico",
  description: "No internet? No problem. Continue your practice offline with our local-first architecture. Auto-syncs data to the cloud when connectivity returns.",
  openGraph: {
    title: "AI-Powered Offline Hospital System - ARmedico",
    description: "Experience zero latency. Smart conflict resolution, predictive diagnosis, and secure local storage for uninterrupted medical care.",
    // images: ['/images/offline-mode-preview.jpg'],
  },
};

export default function OfflineAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}