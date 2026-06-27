import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { SITE } from "./contact-info";
import logo from "@/assets/abd-logo.png.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/careers", label: "Careers" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/90 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="ABD Compassion Home Care LLC logo" className="h-11 w-11 shrink-0 object-contain md:h-12 md:w-12" />
          <span className="truncate font-display text-base font-semibold text-forest sm:text-lg">
            ABD Compassion Home Care
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-sage-soft hover:text-forest"
              activeProps={{ className: "bg-sage-soft text-forest" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-semibold text-cream shadow-sm transition hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <Link
            to="/book-consultation"
            className="inline-flex items-center rounded-full border border-forest/30 bg-blush px-4 py-2 text-sm font-semibold text-forest transition hover:bg-blush-soft"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-forest lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-cream lg:hidden">
          <div className="container-narrow flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:bg-sage-soft"
                activeProps={{ className: "bg-sage-soft text-forest" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-4 py-3 text-sm font-semibold text-cream"
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
              <Link
                to="/book-consultation"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-forest/30 bg-blush px-4 py-3 text-sm font-semibold text-forest"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}