import type { Metadata } from "next";

export const metadata: Metadata = {
  // Browser tab mein dikhega: Platform Features | ARmedico
  title: "Platform Features", 
  description: "Explore ARmedico's complete digital operating system for healthcare: Advanced Prescription Builder, Hospital Administration, and Smart Patient Records.",
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}