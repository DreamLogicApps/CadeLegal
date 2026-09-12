import { Hero } from "@/components/home/hero";
import { AudienceRouter } from "@/components/home/audience-router";
import { ServicesOverview } from "@/components/home/services-overview";
import { TrustSection } from "@/components/home/trust-section";
import { ProcessSection } from "@/components/home/process-section";
import { AttorneySection } from "@/components/home/attorney-section";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/shared/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AudienceRouter />
      <ServicesOverview />
      <TrustSection />
      <ProcessSection />
      <AttorneySection />
      <FAQSection />
      <CTASection />
    </>
  );
}
