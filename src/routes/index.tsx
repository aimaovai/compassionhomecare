import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartHandshake,
  Home,
  Users,
  Sparkles,
  Utensils,
  Pill,
  Brush,
  Car,
  BedDouble,
  Stethoscope,
  Brain,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-caregiver.jpg";
import familyImg from "@/assets/family-care.jpg";
import { Section, SectionHeading, Eyebrow } from "@/components/site/section";
import { CallButton, ConsultButton } from "@/components/site/cta-buttons";
import { SITE } from "@/components/site/contact-info";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABD Compassion Home Care LLC | Home Care in Greater Houston" },
      { name: "description", content: "Compassionate in-home care in Houston, Katy, Cypress, Richmond, Fulshear, and Pearland. Personalized care plans and dependable caregivers." },
      { property: "og:title", content: "ABD Compassion Home Care LLC | Home Care in Greater Houston" },
      { property: "og:description", content: "Compassionate in-home care across the Greater Houston area." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "ABD Compassion Home Care LLC",
          url: "https://compassionhomecare.lovable.app",
          telephone: "[Insert Phone Number]",
          email: "[Insert Email Address]",
          address: {
            "@type": "PostalAddress",
            streetAddress: "[Insert Office Address]",
            addressRegion: "TX",
            addressCountry: "US",
          },
          areaServed: ["Houston", "Katy", "Cypress", "Richmond", "Fulshear", "Pearland"].map((c) => ({
            "@type": "City",
            name: c,
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

const helpCards = [
  { icon: Home, title: "Support at Home", text: "Helping clients remain comfortable, safe, and supported in the place they know best." },
  { icon: HeartHandshake, title: "Relief for Families", text: "Giving family members peace of mind knowing their loved one has dependable care." },
  { icon: Users, title: "Compassionate Caregivers", text: "Matching clients with caring professionals who treat every person with dignity and respect." },
];

const services = [
  { icon: Sparkles, label: "Personal care assistance" },
  { icon: HeartHandshake, label: "Companionship" },
  { icon: Utensils, label: "Meal preparation" },
  { icon: Pill, label: "Medication reminders" },
  { icon: Brush, label: "Light housekeeping" },
  { icon: BedDouble, label: "Respite care" },
  { icon: Car, label: "Transportation & errands" },
  { icon: Stethoscope, label: "Post-hospital support" },
  { icon: Brain, label: "Dementia & Alzheimer's support" },
  { icon: Clock, label: "24-hour or live-in care" },
];

const reasons = [
  "Compassionate, respectful care",
  "Personalized support for each client",
  "Care focused on comfort, dignity, and independence",
  "Serving families across the Greater Houston area",
  "Clear communication with families",
  "Flexible care options based on individual needs",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container-narrow grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div className="fade-in-up">
            <Eyebrow>Greater Houston Home Care</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Compassionate Home Care for Families Across Greater Houston
            </h1>
            <p className="mt-5 max-w-xl text-base text-foreground/80 md:text-lg">
              {SITE.name} provides dependable, respectful, and personalized in-home
              care support for individuals and families in Houston, Katy, Cypress,
              Richmond, Fulshear, Pearland, and surrounding communities.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CallButton />
              <ConsultButton />
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Personalized care plans • Compassionate caregivers • Support for families
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-full bg-blush/70 md:block" />
            <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-full bg-sage/70 md:block" />
            <img
              src={heroImg}
              alt="Caregiver gently holding the hand of an elderly woman in a sunlit home"
              width={1600}
              height={1200}
              className="relative aspect-[5/4] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="How We Help"
          title="Care that meets your family where you are"
          subtitle="Whether you need a few hours of support or ongoing companionship, our care is built around the person — not the schedule."
          center
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {helpCards.map((c) => (
            <div key={c.title} className="rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sage-soft text-forest">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES OVERVIEW */}
      <Section tone="blush">
        <SectionHeading eyebrow="Our Services" title="Personalized in-home care support" />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {services.map((s) => (
            <div key={s.label} className="flex flex-col items-start gap-3 rounded-2xl bg-card p-5 shadow-sm">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blush text-forest">
                <s.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs italic text-muted-foreground">
          Services may vary based on client needs, care plan, and applicable licensing requirements.
        </p>
        <div className="mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:opacity-90"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* WHY FAMILIES */}
      <Section tone="sage">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why Families Choose Us"
              title="Trusted, family-centered care"
            />
            <ul className="mt-8 space-y-3">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={familyImg}
            alt="Adult daughter and senior parent sharing tea in a bright kitchen"
            width={1400}
            height={1000}
            loading="lazy"
            className="aspect-[7/5] w-full rounded-3xl object-cover shadow-md"
          />
        </div>
      </Section>

      {/* SERVICE AREAS */}
      <Section tone="cream">
        <SectionHeading eyebrow="Service Areas" title="Proudly serving Greater Houston" center />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {SITE.areas.map((a) => (
            <div key={a} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
              <p className="font-display text-lg text-forest">{a}</p>
              <p className="text-xs text-muted-foreground">TX</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 rounded-full border border-forest/30 bg-card px-6 py-3 text-sm font-semibold text-forest hover:bg-sage-soft"
          >
            See All Service Areas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* CONSULT CTA */}
      <Section tone="white">
        <div className="overflow-hidden rounded-3xl bg-forest px-6 py-12 text-cream md:px-12 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-cream md:text-4xl">
                Let's Talk About the Care Your Loved One Needs
              </h2>
              <p className="mt-4 max-w-xl text-cream/85">
                Whether you need a few hours of support each week or more consistent care,
                {" "}{SITE.name} is here to help you understand your options.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest hover:bg-blush"
              >
                Call {SITE.phone}
              </a>
              <Link
                to="/book-consultation"
                className="inline-flex items-center justify-center rounded-full border border-cream/50 px-6 py-3 text-sm font-semibold text-cream hover:bg-cream/10"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CAREGIVER RECRUITMENT */}
      <Section tone="blush">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Join Our Team</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Are You a Compassionate Caregiver?</h2>
            <p className="mt-4 text-foreground/80">
              Join a team that values kindness, dependability, patience, and respect.
              {" "}{SITE.name} is looking for caregivers who want to make a meaningful
              difference in the lives of families.
            </p>
            <Link
              to="/careers"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:opacity-90"
            >
              Apply to Become a Caregiver <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl bg-card p-6 shadow-sm md:p-8">
            <p className="font-display text-2xl text-forest">"Care that feels like family."</p>
            <p className="mt-3 text-sm text-muted-foreground">
              We support our caregivers so they can show up fully for the families they serve.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}