import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/section";
import { Field, inputClass, selectClass, textareaClass } from "@/components/site/form-controls";
import { SITE } from "@/components/site/contact-info";
import { CallButton, ConsultButton } from "@/components/site/cta-buttons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | ABD Compassion Home Care LLC" },
      { name: "description", content: "Contact ABD Compassion Home Care LLC for in-home care across Greater Houston. Call, email, or send a message." },
      { property: "og:title", content: "Contact ABD Compassion Home Care LLC" },
      { property: "og:description", content: "We're here to answer your questions and help you explore care options." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Section tone="cream">
      <div className="max-w-3xl">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
          Contact {SITE.name}
        </h1>
        <p className="mt-5 text-foreground/80 md:text-lg">
          We're here to answer your questions and help you explore care options for
          yourself or your loved one.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <aside className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold">Get in touch</h2>
          <ul className="mt-5 space-y-3 text-sm text-foreground/85">
            <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-forest" /> {SITE.phone}</li>
            <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-forest" /> {SITE.email}</li>
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-forest" /> {SITE.address}</li>
            <li className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 text-forest" /> {SITE.hours}</li>
          </ul>
          <div className="mt-6 flex flex-col gap-2">
            <CallButton />
            <ConsultButton />
            <Link
              to="/careers"
              className="inline-flex items-center justify-center rounded-full border border-forest/30 bg-card px-6 py-3 text-sm font-semibold text-forest hover:bg-sage-soft"
            >
              Apply as a Caregiver
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Serving Houston, Katy, Cypress, Richmond, Fulshear, Pearland, and nearby communities.
          </p>
        </aside>

        <div>
          {submitted ? (
            <div className="rounded-3xl border border-sage bg-sage-soft p-8 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-forest" />
              <h2 className="mt-4 text-2xl font-semibold">Message received</h2>
              <p className="mt-3 text-foreground/80">
                Thank you for reaching out. A team member will follow up shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name" htmlFor="x-name">
                  <input id="x-name" required maxLength={100} className={inputClass} />
                </Field>
                <Field label="Phone Number" htmlFor="x-phone">
                  <input id="x-phone" type="tel" required maxLength={30} className={inputClass} />
                </Field>
                <Field label="Email" htmlFor="x-email">
                  <input id="x-email" type="email" required maxLength={255} className={inputClass} />
                </Field>
                <Field label="Reason for contacting" htmlFor="x-reason">
                  <select id="x-reason" className={selectClass} defaultValue="">
                    <option value="" disabled>Select an option</option>
                    {["Need care","Have questions","Caregiver application","Partnership inquiry","Other"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
                <div className="md:col-span-2">
                  <Field label="Message" htmlFor="x-msg">
                    <textarea id="x-msg" required maxLength={1500} className={textareaClass} />
                  </Field>
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream hover:opacity-90 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}