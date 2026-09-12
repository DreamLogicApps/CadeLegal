import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-8 pb-4 border-b">Privacy Policy</h1>
        
        <div className="prose prose-lg text-muted-foreground max-w-none">
          <p>
            This privacy policy describes how Cade Legal ("we," "our," or "us") collects, uses, and shares information when you use our website.
          </p>
          
          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
          <p>
            When you contact us via our consultation form or email, we may collect personal information such as your name, email address, phone number, and any details you provide regarding your legal inquiry.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">How We Use Information</h2>
          <p>
            We use the information collected solely to evaluate your legal matter, communicate with you, and schedule consultations. We do not sell or share your personal information with third parties for marketing purposes.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Analytics</h2>
          <p>
            We may use third-party analytics services to understand how visitors interact with our website. This data is collected in aggregate and does not identify individual users.
          </p>
          
          <div className="mt-12 p-4 bg-muted/50 rounded-lg text-sm">
            <p><strong>[ATTORNEY TO REVIEW AND CONFIRM PRIVACY LANGUAGE]</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}
