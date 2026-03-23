import type { Metadata } from "next";

export const metadata: Metadata = {
  // Browser tab mein dikhega: Terms of Service | ARmedico
  title: "Terms of Service", 
  description: "Read the ARmedico Terms of Service. This page outlines the rules, medical disclaimers, and legal responsibilities for using our hospital management platform.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}