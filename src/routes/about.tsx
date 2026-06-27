import { createFileRoute } from "@tanstack/react-router";
import { Heart, Shield, Sparkles, Users, HandHeart, Award } from "lucide-react";
import caregiverImg from "@/assets/caregiver-walk.jpg";
import { Section, SectionHeading, Eyebrow } from "@/components/site/section";
import { CallButton, ConsultButton } from "@/components/site/cta-buttons";
import { SITE } from "@/components/site/contact-info";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | ABD Compassion Home Care LLC" },
      { name: "description", content: "Our mission is compassionate, dependable in-home care that helps individuals feel safe, valued, and supported across Greater Houston." },
      { property: "og:title", content: "About ABD Compassion Home Care LLC" },
      { property: "og:description", content: "Compassionate, dependable in-home care across Greater Houston." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Compassion", text: "We lead with kindness in every interaction." },
  { icon: Users, title: "Respect", text: "Every client is treated as a person, not a task." },
  { icon: Shield, title: "Reliability", text: "Dependable care families can count on." },
  { icon: Sparkles, title: "Dignity", text: "Care that protects independence and pride." },
  { icon: HandHeart, title: "Family-Centered", text: "Families are part of every care plan." },
  { icon: Award, title: "Trust", text: "Clear communication and consistent follow-through." },
];

function AboutPage() {
  return (
    <>
      <Section tone="cream">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
              About {SITE.name}
            </h1>
            <p className="mt-5 text-foreground/80 md:text-lg">
              {SITE.name} was created with a simple mission: to provide compassionate,
              dependable, and respectful care that helps individuals feel safe, valued,
              and supported at home.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CallButton />
              <ConsultButton />
            </div>
          </div>
          <img
            src={caregiverImg}
            alt="Friendly caregiver walking with a senior in a garden"
            width={1400}
            height={1000}
            loading="lazy"
            className="aspect-[7/5] w-full rounded-3xl object-cover shadow-md"
          />
        </div>
      </Section>

      <Section tone="sage">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Our Mission</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold">Care rooted in dignity</h2>
            <p className="mt-4 text-foreground/85">
              To support individuals and families with compassionate in-home care that
              promotes dignity, comfort, independence, and peace of mind.
            </p>
          </div>
          <div>
            <Eyebrow>Our Approach</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold">Listen first, then care</h2>
            <p className="mt-4 text-foreground/85">
              Every family's needs are different. We listen first, understand the client's
              situation, and help create a care plan that fits their daily routines,
              preferences, and support needs.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading eyebrow="Our Values" title="The principles behind every visit" center />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blush text-forest">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
              <p className="mt-1.5 text-sm text-foreground/75">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="blush">
        <SectionHeading eyebrow="Trust & Safety" title="Licensing, Training & Safety" />
        <div className="mt-6 rounded-3xl border border-border bg-card p-6 md:p-8">
          <p className="text-foreground/80">
            [Insert information about licensing, insurance, caregiver screening,
            background checks, training, certifications, and safety practices here.]
          </p>
          <p className="mt-4 text-sm italic text-muted-foreground">
            This section is intentionally a placeholder so the business owner can add
            verified details before publishing.
          </p>
        </div>
      </Section>
    </>
  );
}