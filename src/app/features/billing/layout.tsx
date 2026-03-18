import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing & Finance Management | ARmedico",
  description: "Simplify hospital billing with GST-ready invoices. Track payments, manage insurance claims, and monitor clinic expenses in one secure platform.",
  openGraph: {
    title: "Medical Billing Software - ARmedico",
    description: "Faster payments with integrated UPI & Insurance processing. Generate professional invoices and tax reports effortlessly.",
  },
};

export default function BillingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}