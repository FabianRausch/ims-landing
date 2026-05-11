import type { Metadata } from "next";
import { DataTrackingSection } from "@/components/data-tracking-section";

export const metadata: Metadata = {
  title: "Google Analytics 4 & Data Tracking | Impulso Marketing Studio",
  description:
    "Medí visitas, conversiones y comportamiento en tu web o ecommerce con GA4, Tag Manager y Looker Studio. Dashboards y optimización de campañas con datos reales.",
};

export default function DataTrackingPage() {
  return (
    <div className="pt-16 md:pt-20">
      <DataTrackingSection />
    </div>
  );
}
