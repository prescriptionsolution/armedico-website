import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Google Font import kiya
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Font configure kiya
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ARmedico - Smart Hospital Management", // Ye home page ke liye hoga
    template: "%s | ARmedico" // Baaki pages par "Page Title | ARmedico" dikhayega
  },
  description: "Advanced healthcare management platform for hospitals and clinics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* min-h-screen ensure karega ki footer hamesha bottom me rahe agar content kam ho */}
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}