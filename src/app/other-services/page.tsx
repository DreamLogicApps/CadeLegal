import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/shared/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Legal Services",
  description: "Cade Legal provides representation in construction disputes, business litigation, real estate, and employment law.",
};

export default function OtherServicesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Additional Legal Services</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            In addition to our primary focus on U.S. immigration law, Cade Legal maintains a robust practice in litigation and business law.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.otherServices.map((service) => (
              <Card key={service.title} className="bg-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Our firm provides rigorous advocacy and strategic counsel in {service.title.toLowerCase()} matters. We bring the same level of dedication and personalized attention to these areas as we do to our immigration practice.
                  </p>
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
