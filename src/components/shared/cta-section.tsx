import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Discuss Your Immigration Goals?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed">
          Every immigration matter is different. Speak with the firm about your specific circumstances and explore your potential options.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="rounded-full text-lg px-8 py-6 w-full sm:w-auto shadow-lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 w-full sm:w-auto text-foreground hover:text-foreground">
            <Link href="/contact">Contact Cade Legal</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
