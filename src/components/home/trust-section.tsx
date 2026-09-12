"use client";

import { Shield, MessageSquare, Scale, Target } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export function TrustSection() {
  const features = [
    {
      title: "Personalized Legal Strategy",
      description: "We do not believe in one-size-fits-all solutions. Every immigration journey is unique, and our strategy is tailored to your specific background and goals.",
      icon: Target,
    },
    {
      title: "Clear Communication",
      description: "Immigration law is complex and stressful. We prioritize transparent, responsive communication so you always know where your case stands.",
      icon: MessageSquare,
    },
    {
      title: "Attorney-Led Guidance",
      description: "Your case is not simply handed off to paralegals. You receive direct, substantive guidance from an experienced attorney throughout the process.",
      icon: Shield,
    },
    {
      title: "Focused Representation",
      description: "With a background in complex litigation and business law, we bring a rigorous, analytical approach to preparing robust immigration petitions.",
      icon: Scale,
    },
  ];

  return (
    <section className="py-32 bg-[#0c1421] text-white relative overflow-hidden">
      {/* Background elegant gradient/texture */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(212,175,55,0.08)_0%,transparent_100%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Why Choose Cade Legal
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-8 opacity-60" />
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
            Navigating the U.S. immigration system requires more than just filling out forms. It demands strategic foresight, meticulous preparation, and a trusted advocate.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerChildren={0.15}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title} className="flex flex-col h-full">
                <div className="flex flex-col text-left p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-500 h-full backdrop-blur-sm group">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-500">
                      <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="text-white/20 font-serif text-3xl font-light italic">
                      {`0${index + 1}`}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-2xl font-semibold mb-4 tracking-tight group-hover:text-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light text-lg">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
