import type { Metadata } from "next";

export const metadata: Metadata = {
  // Browser tab mein dikhega: Our Services | ARmedico
  title: "Our Services", 
  description: "Explore ARmedico's digital healthcare solutions. We provide advanced hospital management systems, digital prescription tools, and clinic automation services for modern medical facilities.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}