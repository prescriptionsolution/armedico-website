import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Hospital Management System",
  description: "Centralized control for your hospital. Manage staff roles, track revenue, monitor appointments, and view real-time analytics all in one place.",
  openGraph: {
    title: "Admin Dashboard - ARmedico",
    description: "Full control over your clinic's operations. Real-time insights and staff management.",
    // images: ['/images/admin-dashboard-preview.jpg'], // Optional: Agar aapke paas koi preview image ho
  },
};

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}