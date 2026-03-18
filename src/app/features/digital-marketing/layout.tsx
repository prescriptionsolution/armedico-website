import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & Patient Acquisition | ARmedico",
  description: "Grow your medical practice with automated marketing tools. Run WhatsApp campaigns, manage Google reviews, and auto-post to social media from one dashboard.",
  openGraph: {
    title: "Clinic Marketing Suite - ARmedico",
    description: "Attract more patients effortlessly. Includes SMS campaigns, SEO-ready profile, and automated festival posters.",
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}