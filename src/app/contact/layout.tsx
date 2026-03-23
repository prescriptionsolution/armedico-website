import type { Metadata } from "next";

export const metadata: Metadata = {
  // Browser tab mein dikhega: Contact Us | ARmedico
  title: "Contact Us", 
  description: "Ready to digitalize your healthcare facility? Contact the ARmedico team for demos, support, or any inquiries about our hospital management software.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}