import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/section";
import { CallButton, ConsultButton } from "@/components/site/cta-buttons";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | ABD Compassion Home Care LLC" },
      { name: "description", content: "Answers to common questions about home care services, areas served, and getting started." },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:description", content: "Common questions about our in-home care services." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "What areas do you serve?", a: "ABD Compassion Home Care LLC serves Houston, Katy, Cypress, Richmond, Fulshear, Pearland, and surrounding areas." },
  { q: "How do I get started?", a: "You can call us directly or complete the consultation form. We will contact you to learn more about your needs and discuss next steps." },
  { q: "Do you create personalized care plans?", a: "Yes. Care should be based on each client's routine, preferences, and support needs. [Insert details about the care assessment process.]" },
  { q: "What types of care do you provide?", a: "We provide support such as personal care assistance, companionship, meal preparation, light housekeeping, medication reminders, respite care, and other in-home support services." },
  { q: "Do you provide medical care?", a: "ABD Compassion Home Care LLC provides home care support. Skilled medical services should only be listed if the business is licensed and authorized to provide them. [Insert confirmed skilled nursing or medical service details if applicable.]" },
  { q: "Can family members be involved in the care plan?", a: "Yes. Family communication is an important part of helping clients feel supported and cared for." },
  { q: "How do I apply to become a caregiver?", a: "Visit the Careers page and complete the caregiver application form, or contact us at [Insert Hiring Email]." },
  { q: "How quickly can care begin?", a: "This depends on the client's needs, location, caregiver availability, and care plan. Contact us for current availability." },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <Section tone="cream">
        <div className="max-w-3xl">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                >
                  <span className="font-display text-base font-semibold text-forest md:text-lg">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-forest transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border px-5 py-4 text-foreground/80 md:px-6">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="sage">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Still have questions?</h2>
          <p className="mt-3 max-w-xl text-foreground/80">
            We're happy to help you understand your options.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton />
            <ConsultButton label="Request a Consultation" />
          </div>
        </div>
      </Section>
    </>
  );
}