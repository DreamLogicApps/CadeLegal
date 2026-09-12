import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/shared/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immigration Services",
  description: "Comprehensive U.S. immigration services including family-based, employment, investor visas, and naturalization.",
};

export default function ImmigrationLandingPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl lg:text-6xl font-bold mb-6">U.S. Immigration Services</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Strategic legal representation for your journey to the United States.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.immigrationServices.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-all duration-300 flex flex-col h-full bg-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 justify-between">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button asChild variant="outline" className="w-full mt-auto">
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
