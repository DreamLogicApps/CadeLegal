"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export function ServicesOverview() {
  const immigrationServices = siteConfig.immigrationServices;

  return (
    <section className="py-32 bg-muted/20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Our Practice Areas</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground">
            Comprehensive Immigration Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            We provide strategic counsel across all major U.S. immigration categories.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.1}>
          {immigrationServices.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href} className="group block h-full">
                <Card className="h-full transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1.5 border-border/60 hover:border-gold/40 bg-card flex flex-col p-2 relative overflow-hidden rounded-2xl">
                  {/* Subtle top accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="font-heading text-2xl font-bold tracking-tight mb-2 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 flex-grow flex flex-col justify-between">
                    <CardDescription className="text-base text-muted-foreground leading-relaxed font-light mb-8">
                      {service.description}
                    </CardDescription>
                    
                    <span className="text-sm font-semibold uppercase tracking-wider text-primary group-hover:text-gold transition-colors duration-300 flex items-center">
                      Learn More
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="text-center mt-20" delay={0.4}>
          <Link 
            href="/other-services" 
            className="inline-flex items-center text-muted-foreground hover:text-gold transition-colors duration-300 font-medium tracking-wide uppercase text-sm border-b border-border hover:border-gold pb-1"
          >
            Looking for non-immigration services?
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
