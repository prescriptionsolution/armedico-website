import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Devices & Remote Patient Monitoring | ARmedico",
  description: "Connect smartwatches, glucometers, and BP monitors to your hospital system. Track patient vitals in real-time with our RPM (Remote Patient Monitoring) dashboard.",
  openGraph: {
    title: "Connected Healthcare - ARmedico",
    description: "Integrate Apple Watch, Fitbit, and medical IoT devices. Enable continuous care for chronic diseases like Diabetes and Hypertension.",
    // images: ['/images/iot-dashboard-preview.jpg'],
  },
};

export default function IoTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}