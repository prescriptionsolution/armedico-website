import type { Metadata } from "next";

export const metadata: Metadata = {
  // Browser tab mein dikhega: Careers | ARmedico
  title: "Careers", 
  description: "Join ARmedico and build technology that saves lives. Explore our current job openings in engineering, design, and healthcare sales.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}