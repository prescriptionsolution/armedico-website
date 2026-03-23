import type { Metadata } from "next";

export const metadata: Metadata = {
  // Browser tab mein dikhega: Privacy Policy | ARmedico
  title: "Privacy Policy", 
  description: "Learn how ARmedico protects your medical data and privacy. Our policy details data collection, 256-bit encryption security, and how we safeguard healthcare information for hospitals and patients.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}