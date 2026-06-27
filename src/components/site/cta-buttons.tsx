import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE } from "./contact-info";

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${SITE.phone}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream shadow-sm transition hover:opacity-90 md:text-base ${className}`}
    >
      <Phone className="h-4 w-4" /> Call {SITE.phone}
    </a>
  );
}

export function ConsultButton({
  className = "",
  label = "Book a Free Consultation",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Link
      to="/book-consultation"
      className={`inline-flex items-center justify-center rounded-full border border-forest/30 bg-blush px-6 py-3 text-sm font-semibold text-forest transition hover:bg-blush-soft md:text-base ${className}`}
    >
      {label}
    </Link>
  );
}