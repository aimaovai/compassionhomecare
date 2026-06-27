import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { SITE } from "./contact-info";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-sage-soft/60">
      <div className="container-narrow grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-cream font-display">A</span>
            <span className="font-display text-lg text-forest">{SITE.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{SITE.tagline}</p>
          <div className="mt-5 space-y-2 text-sm text-foreground/80">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-forest" /> {SITE.phone}</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-forest" /> {SITE.email}</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-forest" /> {SITE.address}</p>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-forest" /> {SITE.hours}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-forest">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-forest">About Us</Link></li>
            <li><Link to="/services" className="hover:text-forest">Services</Link></li>
            <li><Link to="/book-consultation" className="hover:text-forest">Book Consultation</Link></li>
            <li><Link to="/careers" className="hover:text-forest">Careers</Link></li>
            <li><Link to="/faq" className="hover:text-forest">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-forest">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-forest">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-forest">Service Areas</h3>
          <ul className="mt-3 space-y-2 text-sm text-foreground/80">
            {SITE.areas.map((a) => (
              <li key={a}>{a}, TX</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-narrow flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 {SITE.name}. All rights reserved.</p>
          <p>Personalized home care support across Greater Houston.</p>
        </div>
      </div>
    </footer>
  );
}