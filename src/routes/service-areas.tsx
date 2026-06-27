import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/section";
import { CallButton } from "@/components/site/cta-buttons";
import { SITE } from "@/components/site/contact-info";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas | Home Care in Houston, Katy, Cypress, Richmond, Fulshear & Pearland" },
      { name: "description", content: "ABD Compassion Home Care LLC serves families in Houston, Katy, Cypress, Richmond, Fulshear, Pearland, and nearby communities." },
      { property: "og:title", content: "Service Areas — Greater Houston" },
      { property: "og:description", content: "Compassionate in-home care across Greater Houston." },
      { property: "og:url", content: "/service-areas" },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <>
      <Section tone="cream">
        <div className="max-w-3xl">
          <Eyebrow>Service Areas</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Serving Families Across Greater Houston
          </h1>
          <p className="mt-5 text-foreground/80 md:text-lg">
            ABD Compassion Home Care LLC proudly serves individuals and families across
            the Greater Houston area, including:
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SITE.areas.map((city) => (
            <article key={city} className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blush text-forest">
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">{city}, TX</h2>
              <p className="mt-2 text-sm text-foreground/75">
                Compassionate in-home care services available for families in {city} and nearby communities.
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sage">
        <div className="max-w-2xl">
          <Eyebrow>Nearby</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold">Don't See Your City Listed?</h2>
          <p className="mt-4 text-foreground/80">
            If you are located near one of our service areas, contact us to ask whether
            care may be available in your community.
          </p>
          <div className="mt-6">
            <CallButton />
          </div>
        </div>
      </Section>
    </>
  );
}