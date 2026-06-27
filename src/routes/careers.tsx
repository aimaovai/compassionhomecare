import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Heart, Sparkles, Clock, HandHeart, MapPin } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/section";
import { Field, inputClass, selectClass, textareaClass } from "@/components/site/form-controls";
import { SITE } from "@/components/site/contact-info";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Become a Caregiver | Careers at ABD Compassion Home Care LLC" },
      { name: "description", content: "Join a team that values kindness and dependability. Apply to become a caregiver in Greater Houston." },
      { property: "og:title", content: "Careers — Become a Caregiver" },
      { property: "og:description", content: "Apply to join our caregiving team in Greater Houston." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const why = [
  { icon: Heart, title: "Meaningful work" },
  { icon: HandHeart, title: "Supportive environment" },
  { icon: Clock, title: "Flexible opportunities" },
  { icon: Sparkles, title: "Make a difference" },
  { icon: MapPin, title: "Serve your local community" },
];

const lookingFor = [
  "Compassionate",
  "Reliable",
  "Patient",
  "Respectful",
  "Good communicators",
  "Comfortable supporting seniors and individuals who need daily assistance",
  "Able to follow care plans and safety guidelines",
];

const responsibilities = [
  "Personal care support",
  "Companionship",
  "Meal preparation",
  "Light housekeeping",
  "Medication reminders",
  "Transportation or errands (if applicable)",
  "Communicating care updates as needed",
];

function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <Section tone="cream">
        <div className="max-w-3xl">
          <Eyebrow>Careers</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">Become a Caregiver</h1>
          <p className="mt-5 text-foreground/80 md:text-lg">
            {SITE.name} is looking for compassionate, dependable caregivers who are
            committed to treating clients with kindness, patience, dignity, and respect.
          </p>
        </div>
      </Section>

      <Section tone="sage">
        <SectionHeading eyebrow="Why Join Our Team?" title="A team built on kindness" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {why.map((w) => (
            <div key={w.title} className="rounded-3xl border border-border bg-card p-5 shadow-sm">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blush text-forest">
                <w.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-medium">{w.title}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>We're Looking For</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold">Caregivers who are…</h2>
            <ul className="mt-6 space-y-3">
              {lookingFor.map((l) => (
                <li key={l} className="flex items-start gap-3 text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Possible Responsibilities</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold">What you might do</h2>
            <ul className="mt-6 space-y-3">
              {responsibilities.map((l) => (
                <li key={l} className="flex items-start gap-3 text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="blush">
        <SectionHeading eyebrow="Apply" title="Caregiver Application" />
        {submitted ? (
          <div className="mt-8 rounded-3xl border border-sage bg-sage-soft p-8 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-forest" />
            <h3 className="mt-4 text-2xl font-semibold">Application received</h3>
            <p className="mt-3 text-foreground/80">
              Thank you for your interest in joining {SITE.name}. We'll review your
              application and be in touch soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" htmlFor="c-name">
                <input id="c-name" required maxLength={100} className={inputClass} />
              </Field>
              <Field label="Phone Number" htmlFor="c-phone">
                <input id="c-phone" type="tel" required maxLength={30} className={inputClass} />
              </Field>
              <Field label="Email Address" htmlFor="c-email">
                <input id="c-email" type="email" required maxLength={255} className={inputClass} />
              </Field>
              <Field label="City" htmlFor="c-city">
                <input id="c-city" required maxLength={100} className={inputClass} />
              </Field>
              <Field label="Do you have caregiving experience?" htmlFor="c-exp">
                <select id="c-exp" className={selectClass} defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>Yes</option><option>No</option>
                </select>
              </Field>
              <Field label="Legally authorized to work in the US?" htmlFor="c-auth">
                <select id="c-auth" className={selectClass} defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>Yes</option><option>No</option>
                </select>
              </Field>
              <Field label="Reliable transportation?" htmlFor="c-trans">
                <select id="c-trans" className={selectClass} defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>Yes</option><option>No</option>
                </select>
              </Field>
              <Field label="Availability" htmlFor="c-avail">
                <select id="c-avail" className={selectClass} defaultValue="">
                  <option value="" disabled>Select</option>
                  {["Weekdays","Weekends","Overnight","Part-time","Full-time"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <div className="md:col-span-2">
                <Field label="Upload Resume (optional)" htmlFor="c-resume" hint="PDF, DOC, or DOCX">
                  <input id="c-resume" type="file" accept=".pdf,.doc,.docx" className={inputClass} />
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Message / Experience Summary" htmlFor="c-msg">
                  <textarea id="c-msg" maxLength={1500} className={textareaClass} />
                </Field>
              </div>
            </div>
            <p className="mt-5 text-xs italic text-muted-foreground">
              [Insert hiring requirements, background check requirements, certifications,
              pay range, and training details here.]
            </p>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream hover:opacity-90 sm:w-auto"
            >
              Apply Now
            </button>
          </form>
        )}
        <p className="mt-6 text-sm text-muted-foreground">
          Prefer email? Send your resume to{" "}
          <span className="font-semibold text-forest">{SITE.hiringEmail}</span>.
        </p>
      </Section>
    </>
  );
}