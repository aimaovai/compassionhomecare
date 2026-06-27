import { Phone } from "lucide-react";
import { SITE } from "./contact-info";

export function StickyCall() {
  return (
    <a
      href={`tel:${SITE.phone}`}
      className="fixed bottom-4 left-4 right-4 z-30 flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3.5 text-sm font-semibold text-cream shadow-lg md:hidden"
      aria-label="Call now"
    >
      <Phone className="h-4 w-4" /> Call Now — {SITE.phone}
    </a>
  );
}