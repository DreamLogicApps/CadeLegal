"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Understand Your Goals",
      description: "We begin by listening. In our initial consultation, we review your background, timeline, and long-term objectives in the United States.",
    },
    {
      number: "02",
      title: "Explore Your Options",
      description: "Immigration law is rarely straightforward. We analyze the available pathways and provide a clear assessment of risks, timelines, and requirements.",
    },
    {
      number: "03",
      title: "Build Your Strategy",
      description: "Once a path is chosen, we meticulously prepare your petition, gathering the necessary evidence and crafting the strongest possible case.",
    },
    {
      number: "04",
      title: "Move Forward",
      description: "We handle the filings, communicate with immigration agencies, and prepare you for any required interviews until a decision is reached.",
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            A Clearer Path Forward
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Our systematic approach is designed to reduce anxiety and provide absolute clarity at every step of your immigration journey.
          </p>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-border -translate-y-1/2 z-0" />
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10" staggerChildren={0.2}>
            {steps.map((step, index) => (
              <StaggerItem key={step.number} className="flex flex-col relative group">
                <div className="flex flex-col md:items-center">
                  <div className="w-24 h-24 rounded-full bg-background border border-border flex flex-col items-center justify-center text-primary mb-8 shadow-sm group-hover:border-gold group-hover:shadow-md transition-all duration-500 relative bg-clip-padding">
                    <span className="font-serif text-3xl font-light italic text-muted-foreground group-hover:text-gold transition-colors duration-500">
                      {step.number}
                    </span>
                    {/* Inner elegant ring on hover */}
                    <div className="absolute inset-2 rounded-full border border-gold/0 group-hover:border-gold/20 transition-all duration-500" />
                  </div>
                  
                  <div className="md:text-center pr-8 md:pr-0">
                    <h3 className="font-heading text-xl font-bold mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
