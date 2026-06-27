import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles, HeartHandshake, Utensils, Pill, Brush, Car, BedDouble, Stethoscope, Brain, Clock,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/section";
import { CallButton, ConsultButton } from "@/components/site/cta-buttons";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Home Care Services | ABD Compassion Home Care LLC" },
      { name: "description", content: "Personal care, companionship, meal preparation, respite care, and post-hospital support across Greater Houston." },
      { property: "og:title", content: "Home Care Services" },
      { property: "og:description", content: "Personalized in-home care services across Greater Houston." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Sparkles, title: "Personal Care Assistance", text: "Support with daily activities such as bathing, grooming, dressing, toileting, mobility assistance, and other personal routines." },
  { icon: HeartHandshake, title: "Companionship", text: "Friendly conversation, emotional support, recreational activities, reading, walks, games, and social connection to reduce loneliness." },
  { icon: Utensils, title: "Meal Preparation", text: "Assistance with planning, preparing, and serving meals based on the client's preferences and dietary guidance from family or healthcare providers." },
  { icon: Pill, title: "Medication Reminders", text: "Gentle reminders to take medications on schedule. This does not include medication administration unless permitted by applicable licensing and care plan." },
  { icon: Brush, title: "Light Housekeeping", text: "Help with laundry, changing linens, dishes, organizing common areas, and keeping the home environment comfortable and safe." },
  { icon: Car, title: "Errands & Transportation", text: "Support with grocery shopping, pharmacy pickups, appointments, and other errands. [Transportation availability and policies to be confirmed.]" },
  { icon: BedDouble, title: "Respite Care", text: "Temporary relief for family caregivers who need time to rest, work, travel, or manage other responsibilities." },
  { icon: Stethoscope, title: "Post-Hospital / Recovery Support", text: "Non-medical support after a hospital stay, surgery, or rehabilitation period, including help with routines, mobility support, meals, and safety supervision." },
  { icon: Brain, title: "Dementia & Alzheimer's Support", text: "Compassionate support for clients experiencing memory-related challenges, including routine-based care, supervision, companionship, and family communication (if applicable)." },
  { icon: Clock, title: "24-Hour or Live-In Care", text: "Around-the-clock care options. [Confirm whether this service is available.]" },
];

function ServicesPage() {
  return (
    <>
      <Section tone="cream">
        <div className="max-w-3xl">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">Home Care Services</h1>
          <p className="mt-5 text-foreground/80 md:text-lg">
            ABD Compassion Home Care LLC provides compassionate in-home support designed
            to help clients maintain comfort, safety, and dignity while receiving care in
            familiar surroundings.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sage-soft text-forest">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{s.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sage">
        <SectionHeading
          title="Not sure what kind of care you need?"
          subtitle="Call us today or request a consultation — we'll listen and help you understand the options."
          center
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CallButton />
          <ConsultButton label="Request a Consultation" />
        </div>
      </Section>
    </>
  );
}