import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/shared/cta-section";
import { CheckCircle2 } from "lucide-react";

interface ServiceProps {
  content: {
    title: string;
    description: string;
    overview: string;
    whoIsThisFor: string;
    howWeHelp: string;
    process: { step: string; title: string; description: string; }[];
  };
}

export function ServiceTemplate({ content }: ServiceProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">{content.title}</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full text-lg px-8 py-6">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{content.overview}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">Who This May Be Relevant To</h2>
                <div className="bg-muted/50 p-6 rounded-2xl border border-border">
                  <p className="text-muted-foreground leading-relaxed">{content.whoIsThisFor}</p>
                </div>
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">How Cade Legal Can Help</h2>
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                  <p className="text-muted-foreground leading-relaxed">{content.howWeHelp}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-bold mb-8 text-foreground text-center">Our Process</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.process.map((step) => (
                  <Card key={step.step} className="bg-card border-border shadow-sm">
                    <CardContent className="p-6">
                      <div className="text-primary font-heading font-bold text-2xl mb-4">{step.step}</div>
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions & Final CTA */}
      <FAQSection />
      <CTASection />
    </>
  );
}
