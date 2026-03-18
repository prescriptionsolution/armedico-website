import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics & Reports | ARmedico",
  description: "Transform raw clinic data into actionable insights. Track revenue, patient footfall, and treatment trends with visual dashboards.",
  openGraph: {
    title: "Clinic Growth Analytics - ARmedico",
    description: "Visualize your hospital's performance. Real-time reports on revenue, patient demographics, and operational efficiency.",
  },
};

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}