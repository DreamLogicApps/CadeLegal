"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-32 lg:pt-48 lg:pb-48 border-b border-border/40">
      {/* Sophisticated subtle background pattern/mesh */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_800px_at_100%_200px,var(--color-primary)_0%,transparent_100%)] opacity-10" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_800px_at_0%_300px,var(--color-gold)_0%,transparent_100%)] opacity-5" />
      
      <StaggerContainer className="container relative z-10 mx-auto px-4 text-center max-w-4xl" staggerChildren={0.15}>
        <StaggerItem>
          <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-sm font-medium text-gold mb-8 uppercase tracking-widest backdrop-blur-sm">
            Excellence in U.S. Immigration Law
          </div>
        </StaggerItem>
        
        <StaggerItem>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Your Path to the United States <br className="hidden md:block"/>
            <span className="font-serif italic text-gold font-normal tracking-normal">Starts Here.</span>
          </h1>
        </StaggerItem>
        
        <StaggerItem>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Strategic immigration counsel for families, professionals, entrepreneurs, and investors navigating the complex U.S. immigration system.
          </p>
        </StaggerItem>
        
        <StaggerItem>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full text-lg px-8 py-6 w-full sm:w-auto shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 w-full sm:w-auto border-border/60 hover:border-gold/50 hover:bg-gold/5 transition-all">
              <Link href="/immigration">Explore Services</Link>
            </Button>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
