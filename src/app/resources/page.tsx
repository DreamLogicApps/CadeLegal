import { CTASection } from "@/components/shared/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Immigration guides, articles, and resources from Cade Legal.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl lg:text-6xl font-bold mb-6">Resource Center</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Helpful guides, answers, and updates on U.S. immigration law.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-muted p-12 rounded-2xl border border-border">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We are currently developing a comprehensive library of immigration resources, including guides on the naturalization process, employment visa updates, and family sponsorship requirements.
            </p>
            <p className="text-muted-foreground">
              Please check back later or contact us directly with any immediate questions.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
