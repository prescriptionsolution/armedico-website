import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Portal & Mobile App | ARmedico",
  description: "Give your patients a VIP experience. Allow them to book appointments, access lab reports, and consult via video call directly from a branded mobile app.",
  openGraph: {
    title: "Your Clinic in Their Pocket - ARmedico App",
    description: "Secure patient login, medication reminders, and instant tele-consultation. Reduce front-desk workload with self-service features.",
    // images: ['/images/patient-app-preview.jpg'],
  },
};

export default function PatientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}