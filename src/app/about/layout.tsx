import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us", // Tab mein dikhega: About Us | ARmedico
  description: "Learn more about ARmedico and our mission to simplify healthcare management through digital innovation.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}