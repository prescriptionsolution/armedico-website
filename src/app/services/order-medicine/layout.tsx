import type { Metadata } from "next";

export const metadata: Metadata = {
  // Browser tab mein dikhega: Order Medicines Online | ARmedico
  title: "Order Medicines Online", 
  description: "Buy healthcare essentials and medicines online with ARmedico. Search for medicines or upload your prescription for quick home delivery.",
};

export default function OrderMedicineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}