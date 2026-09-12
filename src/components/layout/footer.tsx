import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-4">
              <Image src="/nc-logo.png" alt="Cade Legal Symbol" width={80} height={80} className="h-16 w-auto object-contain" />
              <Image src="/nc-text.png" alt="Cade Legal Text" width={240} height={80} className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {siteConfig.mainNav.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Immigration Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Immigration</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {siteConfig.immigrationServices.map((service) => (
                <li key={service.title}>
                  <Link href={service.href} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} Cade Legal. All rights reserved.
          </p>
          <p className="max-w-xl text-center md:text-right">
            The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
