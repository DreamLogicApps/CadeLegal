import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
};

export default function DisclaimerPage() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-8 pb-4 border-b">Legal Disclaimer</h1>
        
        <div className="prose prose-lg text-muted-foreground max-w-none">
          <p>
            The information contained on this website is provided for general informational purposes only and should not be construed as legal advice on any subject matter.
          </p>
          
          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">No Attorney-Client Relationship</h2>
          <p>
            Transmission and receipt of information on this website does not create an attorney-client relationship. You should not send confidential information to us until you speak with one of our attorneys and receive authorization to send that information to us. 
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">No Guarantee of Results</h2>
          <p>
            U.S. immigration law is complex, and specific case outcomes rely on many factors. Any information regarding past results or case summaries on this site does not guarantee or predict a similar outcome with respect to any future matter.
          </p>
          
          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Links to Third-Party Resources</h2>
          <p>
            Third-party resources that can be accessed with hypertext links from this website are not under the control of Cade Legal. Cade Legal is not responsible for the contents of any of these third-party resources.
          </p>
          
          <div className="mt-12 p-4 bg-muted/50 rounded-lg text-sm">
            <p><strong>[ATTORNEY TO REVIEW AND CONFIRM DISCLAIMER LANGUAGE]</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}
