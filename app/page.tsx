import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { BenefitsSection } from "@/components/benefits-section";
import { MetaAdsSection } from "@/components/meta-ads-section";
import { GoogleAdsSection } from "@/components/google-ads-section";
import { CommunityManagerSection } from "@/components/community-manager-section";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSection } from "@/components/process-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { BackgroundWorld } from "@/components/background-world";
import { BackgroundWorld2 } from "@/components/background-word-2";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <SectionWrapper
        background={
          <BackgroundWorld
            maxWidth="600px"
            maxHeight="600px"
            right="0"
            top="50px"
            side="right"
          />
        }
      >
        <HeroSection />

        <SectionWrapper>
          <ProblemSection />
          <BenefitsSection />
        </SectionWrapper>
      </SectionWrapper>

      <MetaAdsSection />
      <GoogleAdsSection />

      <div className="relative z-[53]">
        <SectionWrapper
          background={
            <BackgroundWorld2
              maxHeight="900px"
              maxWidth="900px"
              left="0"
              top="0"
              side="right"
            />
          }
        >
          <CommunityManagerSection />
          <PricingSection />
        </SectionWrapper>

        <ProcessSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
