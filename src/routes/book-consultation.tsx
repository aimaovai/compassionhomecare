import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/section";
import { Field, inputClass, selectClass, textareaClass } from "@/components/site/form-controls";
import { SITE } from "@/components/site/contact-info";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book a Care Consultation | ABD Compassion Home Care LLC" },
      { name: "description", content: "Request a free in-home care consultation in Houston, Katy, Cypress, Richmond, Fulshear, or Pearland." },
      { property: "og:title", content: "Book a Care Consultation" },
      { property: "og:description", content: "Tell us about your loved one and we'll help you understand the right care options." },
      { property: "og:url", content: "/book-consultation" },
    ],
    links: [{ rel: "canonical", href: "/book-consultation" }],
  }),
  component: BookConsultationPage,
});

function BookConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Section tone="cream">
      <div className="max-w-3xl">
        <Eyebrow>Consultation</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
          Book a Care Consultation
        </h1>
        <p className="mt-5 text-foreground/80 md:text-lg">
          Choosing care for yourself or a loved one is an important decision.
          {" "}{SITE.name} is here to listen, answer your questions, and help you
          understand the type of support that may be right for your family.
        </p>
      </div>

      {submitted ? (
        <div className="mt-10 rounded-3xl border border-sage bg-sage-soft p-8 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-forest" />
          <h2 className="mt-4 text-2xl font-semibold">Thank you for contacting us</h2>
          <p className="mt-3 text-foreground/80">
            We have received your inquiry and will follow up soon.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            For immediate assistance, please call{" "}
            <a href={`tel:${SITE.phone}`} className="font-semibold text-forest underline">
              {SITE.phone}
            </a>
            .
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full Name" htmlFor="name">
              <input id="name" name="name" required maxLength={100} className={inputClass} />
            </Field>
            <Field label="Phone Number" htmlFor="phone">
              <input id="phone" name="phone" type="tel" required maxLength={30} className={inputClass} />
            </Field>
            <Field label="Email Address" htmlFor="email">
              <input id="email" name="email" type="email" required maxLength={255} className={inputClass} />
            </Field>
            <Field label="City / Service Area" htmlFor="city">
              <select id="city" name="city" required className={selectClass} defaultValue="">
                <option value="" disabled>Select a city</option>
                {SITE.areas.map((a) => <option key={a} value={a}>{a}</option>)}
                <option value="Other">Other</option>
              </select>
            </Field>
            <Field label="Who needs care?" htmlFor="for">
              <select id="for" name="for" required className={selectClass} defaultValue="">
                <option value="" disabled>Select an option</option>
                {["Myself", "Parent", "Spouse", "Relative", "Friend", "Other"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field label="Type of care needed" htmlFor="type">
              <select id="type" name="type" className={selectClass} defaultValue="">
                <option value="" disabled>Select an option</option>
                {["Personal care","Companionship","Respite care","Post-hospital support","Dementia support","Not sure yet","Other"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field label="When is care needed?" htmlFor="when">
              <select id="when" name="when" className={selectClass} defaultValue="">
                <option value="" disabled>Select an option</option>
                {["Immediately","Within 1 week","Within 30 days","Planning ahead"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field label="Preferred contact method" htmlFor="contact">
              <select id="contact" name="contact" className={selectClass} defaultValue="">
                <option value="" disabled>Select an option</option>
                {["Phone","Email","Text"].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </Field>
            <div className="md:col-span-2">
              <Field label="Message / Additional details" htmlFor="message">
                <textarea id="message" name="message" maxLength={1000} className={textareaClass} />
              </Field>
            </div>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            Please do not submit sensitive medical details through this form. A member of
            our team will contact you to discuss your needs privately.
          </p>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream hover:opacity-90 sm:w-auto"
          >
            Request Consultation
          </button>
        </form>
      )}
    </Section>
  );
}