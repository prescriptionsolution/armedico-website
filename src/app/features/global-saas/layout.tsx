import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global SaaS & International Compliance | ARmedico",
  description: "Manage clinics worldwide with our borderless healthcare platform. Fully compliant with HIPAA (USA), GDPR (EU), ABDM (India), and DHA (UAE).",
  openGraph: {
    title: "International Hospital Management - ARmedico",
    description: "Multi-language support, multi-currency billing, and local data sovereignty. Built for India, ready for the world.",
  },
};

export default function GlobalSaaSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}