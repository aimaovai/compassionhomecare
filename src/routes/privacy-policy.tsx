import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/section";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | ABD Compassion Home Care LLC" },
      { name: "description", content: "Privacy policy for ABD Compassion Home Care LLC describing how information is collected and used." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "How we collect and use information." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  { title: "Information we collect", body: "We collect information you provide when you contact us, request a consultation, or apply to become a caregiver. This may include your name, phone number, email address, city, and the details you share in a message." },
  { title: "How we use information", body: "We use the information you provide to respond to inquiries, schedule consultations, evaluate caregiver applications, and improve our services. We do not sell personal information." },
  { title: "Form submissions", body: "Submissions through our website are sent to our team for follow-up. Please do not include sensitive medical details in any form. A team member will contact you to discuss your needs privately." },
  { title: "Contact information", body: "If you have questions about this policy, please contact us using the information provided on the Contact page." },
  { title: "No sale of personal information", body: "We do not sell or rent your personal information to third parties." },
  { title: "Updates to this policy", body: "We may update this policy from time to time. The most current version will be posted on this page." },
];

function PrivacyPage() {
  return (
    <Section tone="cream">
      <div className="max-w-3xl">
        <Eyebrow>Privacy</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This page contains placeholder language and should be reviewed by the business
          owner or legal advisor before publishing.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-foreground/80">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}