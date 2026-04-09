import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { BenefitsSection } from "@/components/benefits-section";
import { MetaAdsSection } from "@/components/meta-ads-section";
import { GoogleAdsSection } from "@/components/google-ads-section";
import { CommunityManagerSection } from "@/components/community-manager-section";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSection } from "@/components/process-section";
import { ContactSection } from "@/components/contact-section";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <MetaAdsSection />
      <GoogleAdsSection />
      <CommunityManagerSection />
      <PricingSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
