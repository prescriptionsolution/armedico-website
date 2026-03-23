import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AR/VR Surgery & 3D Visualization | ARmedico",
  description: "Experience the future of surgery. Transform 2D scans into interactive 3D holograms for precise pre-operative planning and immersive medical training.",
  openGraph: {
    title: "AR/VR Surgical Planning - ARmedico",
    description: "Visualize patient anatomy in 3D. Compatible with Apple Vision Pro, Meta Quest, and HoloLens for next-gen healthcare.",
    // images: ['/images/ar-vr-preview.jpg'], // Optional
  },
};

export default function ARVRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}