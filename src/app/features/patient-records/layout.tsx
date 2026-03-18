import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Records & EMR System | ARmedico",
  description: "Securely store patient history, lab reports, and vitals in one place. ABDM compliant Electronic Medical Records (EMR) with bank-grade security.",
  openGraph: {
    title: "Digital Health Records - ARmedico",
    description: "Access patient history instantly. Features include visual health timeline, document vault for X-rays/Reports, and ABHA integration.",
  },
};

export default function PatientRecordsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}