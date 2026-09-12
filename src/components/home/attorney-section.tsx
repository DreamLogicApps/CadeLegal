"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { attorneyData } from "@/content/attorney";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export function AttorneySection() {
  return (
    <section className="py-32 bg-background border-y border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-24">
          
          <FadeIn className="w-full lg:w-5/12 relative" direction="right">
            <div className="relative aspect-[4/5] z-10">
              <div className="absolute inset-0 rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden bg-muted border border-border shadow-2xl">
                {/* Fallback to placeholder if image fails or isn't available */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/30 text-secondary-foreground p-12 text-center">
                  <span className="font-heading text-2xl font-light mb-4">Nathanael Cade, Esq.</span>
                  <span className="font-sans text-sm tracking-widest uppercase text-muted-foreground">[PHOTO PLACEHOLDER]</span>
                </div>
              </div>
              
              {/* Sophisticated framing element */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/40 rounded-tl-[4rem] rounded-br-[4rem] -z-10" />
              <div className="absolute top-12 -left-12 w-24 h-24 bg-[radial-gradient(circle_at_center,var(--color-gold)_0%,transparent_70%)] opacity-20 blur-xl" />
            </div>
          </FadeIn>
          
          <div className="w-full lg:w-7/12">
            <StaggerContainer staggerChildren={0.1}>
              <StaggerItem>
                <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
                  {attorneyData.name}
                </h2>
              </StaggerItem>
              
              <StaggerItem>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-gold" />
                  <p className="text-gold font-serif italic text-2xl">
                    {attorneyData.title}
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="space-y-6 mb-12">
                  {attorneyData.fullBio.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed font-light text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="grid grid-cols-2 gap-8 mb-12 pt-8 border-t border-border/50">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 uppercase tracking-widest text-sm text-gold">Admissions</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground font-light">
                      {attorneyData.admissions.map((admission, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-gold opacity-50">•</span>
                          {admission}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 uppercase tracking-widest text-sm text-gold">Education</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground font-light">
                      {attorneyData.education.map((edu, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-gold opacity-50">•</span>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <Button asChild size="lg" className="rounded-full px-10 py-6 text-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <Link href="/about">Meet Our Attorney</Link>
                </Button>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
