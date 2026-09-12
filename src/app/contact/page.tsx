import { siteConfig } from "@/content/site";
import { ContactForm } from "@/components/forms/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Schedule a consultation with Cade Legal for your U.S. immigration matter.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Take the first step in your immigration journey. Reach out to schedule a consultation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16">
            
            <div className="w-full lg:w-1/3 space-y-12">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you are planning to bring a family member to the U.S., exploring employment visas, or considering an EB-5 investment, we are here to provide strategic guidance.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Office Location</h4>
                      <address className="text-muted-foreground not-italic">
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday &ndash; Friday<br />
                        9:00 AM &ndash; 5:00 PM PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="bg-card border border-border shadow-sm rounded-2xl p-8 md:p-10">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Request a Consultation</h3>
                <ContactForm />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
