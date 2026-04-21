import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { BenefitsSection } from "@/components/benefits-section";
import { ServicesLinksSection } from "@/components/services-links-section";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSection } from "@/components/process-section";
import { ContactSection } from "@/components/contact-section";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <ServicesLinksSection />
      <PricingSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
