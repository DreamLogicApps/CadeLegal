import Image from "next/image";
import { attorneyData } from "@/content/attorney";
import { CTASection } from "@/components/shared/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Nathanael Cade, Esq. and Cade Legal.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">About Cade Legal</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Strategic legal representation built on a foundation of rigorous analysis and dedicated advocacy.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            <div className="w-full lg:w-1/3 relative lg:sticky lg:top-32">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-muted border border-border">
                {/* Fallback to placeholder if image fails or isn't available */}
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 text-secondary-foreground p-8 text-center">
                  <span className="font-heading text-xl">[ATTORNEY PHOTO — CLIENT TO PROVIDE]</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-2">
                {attorneyData.name}
              </h2>
              <p className="text-primary font-medium text-xl mb-8 pb-8 border-b border-border">
                {attorneyData.title}
              </p>
              
              <div className="space-y-6 mb-12">
                {attorneyData.fullBio.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-border">
                <div>
                  <h4 className="font-heading text-2xl font-bold text-foreground mb-4">Admissions</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {attorneyData.admissions.map((admission, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {admission}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-2xl font-bold text-foreground mb-4">Education</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {attorneyData.education.map((edu, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
                {attorneyData.memberships.length > 0 && (
                  <div className="sm:col-span-2">
                    <h4 className="font-heading text-2xl font-bold text-foreground mb-4">Professional Memberships</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {attorneyData.memberships.map((membership, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {membership}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
