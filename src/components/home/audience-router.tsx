"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, TrendingUp, Flag } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/fade-in";

export function AudienceRouter() {
  const audiences = [
    {
      title: "Family Immigration",
      description: "I want to bring my family to the U.S.",
      href: "/immigration/family-based",
      icon: Users,
    },
    {
      title: "Employment Immigration",
      description: "I am exploring a work visa.",
      href: "/immigration/employment-based",
      icon: Briefcase,
    },
    {
      title: "Investor Immigration",
      description: "I am an entrepreneur or investor.",
      href: "/immigration/eb5",
      icon: TrendingUp,
    },
    {
      title: "Naturalization",
      description: "I want to become a U.S. citizen.",
      href: "/immigration/naturalization",
      icon: Flag,
    },
  ];

  return (
    <section className="py-24 bg-muted/20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            What brings you here?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Select the path that best describes your goals.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" staggerChildren={0.1}>
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <StaggerItem key={audience.title}>
                <Link href={audience.href} className="group block h-full">
                  <Card className="h-full transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1.5 border-border/50 hover:border-gold/30 bg-card rounded-2xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-gold/80 transition-colors duration-500" />
                    
                    <CardHeader className="text-center pb-4 pt-10">
                      <div className="mx-auto bg-muted w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
                        <Icon className="w-8 h-8 text-foreground/60 group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
                      </div>
                      <CardTitle className="font-heading text-2xl font-bold tracking-tight">
                        {audience.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="text-center pb-10">
                      <p className="text-muted-foreground text-base mb-6 px-4">{audience.description}</p>
                      <span className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-primary group-hover:text-gold transition-colors duration-300">
                        Explore Options
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
