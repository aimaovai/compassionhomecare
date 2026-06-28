import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/section";
import { CallButton, ConsultButton } from "@/components/site/cta-buttons";

const TITLE = "Cost of Home Care in Houston (2026 Guide) | ABD Compassion Home Care";
const DESC =
  "What does home care cost in Houston, TX? Average hourly rates, private pay vs. insurance, and the factors that change your total — 24/7 care, respite, dementia support, and more.";
const URL = "https://compassionhomecare.lovable.app/guides/home-care-costs-houston";

const faqs = [
  {
    q: "What is the average hourly cost of home care in Houston?",
    a: "Non-medical in-home care in the Houston metro typically ranges from about $28 to $38 per hour in 2026, depending on the level of care, hours per week, location within Greater Houston, and caregiver experience. Specialty care (dementia, hospice support, complex transfers) often falls at the higher end of that range.",
  },
  {
    q: "How much does 24/7 home care cost in Houston?",
    a: "Around-the-clock care is usually billed as hourly shift care (two to three caregivers rotating) or as a live-in rate. Hourly 24/7 coverage in Houston commonly runs $650 to $850 per day, while live-in arrangements (where the caregiver sleeps in the home) are often quoted at a lower flat daily rate when state rules allow.",
  },
  {
    q: "Does Medicare pay for home care in Houston?",
    a: "Traditional Medicare does not pay for ongoing non-medical home care (help with bathing, meals, companionship). It may cover short-term skilled home health after a qualifying event. Long-term custodial care is usually private pay, long-term care insurance, VA Aid & Attendance, or — for those who qualify — Texas Medicaid STAR+PLUS.",
  },
  {
    q: "What factors most affect the total cost?",
    a: "Hours per week, overnight or weekend coverage, level of care (companion vs. personal care vs. memory care), number of caregivers needed for safe transfers, and whether services are scheduled or on-call. Bundling more hours per visit usually lowers the effective hourly rate.",
  },
  {
    q: "Is there a minimum number of hours per visit?",
    a: "Most Houston agencies require a 3- or 4-hour minimum per visit so caregivers can provide meaningful, safe care. Shorter visits are sometimes available for medication reminders or wellness checks at a premium rate.",
  },
];

export const Route = createFileRoute("/guides/home-care-costs-houston")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cost of Home Care in Houston (2026 Guide)",
          description: DESC,
          mainEntityOfPage: URL,
          author: { "@type": "Organization", name: "ABD Compassion Home Care LLC" },
          publisher: { "@type": "Organization", name: "ABD Compassion Home Care LLC" },
          inLanguage: "en-US",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: CostGuidePage,
});

function CostGuidePage() {
  return (
    <>
      <Section tone="cream">
        <div className="max-w-3xl">
          <Eyebrow>Family Guide</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Cost of Home Care in Houston: A 2026 Guide for Families
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            If you're researching the cost of home care in Houston, you're not alone — it's the
            first question almost every family asks. This guide walks through average hourly
            rates, how private pay compares to insurance and benefits, and the real-world factors
            that shape your monthly total.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton />
            <ConsultButton label="Get a Personalized Quote" />
          </div>
        </div>
      </Section>

      <Section tone="white">
        <article className="prose prose-neutral max-w-3xl prose-headings:font-serif prose-headings:text-forest prose-a:text-forest">
          <h2>Average hourly rates for home care in Houston</h2>
          <p>
            In 2026, most families in Greater Houston — including Katy, Cypress, Richmond,
            Fulshear, and Pearland — pay between <strong>$28 and $38 per hour</strong> for
            non-medical in-home care. The wide range reflects how different two care plans can
            look, even on the same street.
          </p>
          <ul>
            <li><strong>Companion care</strong> (conversation, meals, errands): typically $28–$32/hr</li>
            <li><strong>Personal care</strong> (bathing, dressing, transfers): typically $30–$35/hr</li>
            <li><strong>Specialty care</strong> (dementia, post-hospital, two-person assist): typically $34–$38/hr</li>
            <li><strong>Live-in / 24-hour care</strong>: flat daily rates, often $350–$550/day for live-in or $650–$850/day for hourly shift coverage</li>
          </ul>
          <p>
            These figures track closely with Genworth's most recent Cost of Care Survey for the
            Houston-The Woodlands-Sugar Land metro, which puts the median hourly rate just above
            $30/hr. Your actual rate depends on the agency, the caregiver's skill level, and how
            consistent the schedule is.
          </p>

          <h2>Private pay vs. insurance: who actually pays the bill?</h2>
          <p>
            Most Houston families pay for home care out of pocket at first, then layer in
            benefits as they qualify. Here's how the most common funding sources compare:
          </p>
          <h3>Private pay</h3>
          <p>
            The most flexible option — you choose the hours, the caregiver, and the care plan.
            Families often draw from retirement income, home equity (HELOC or reverse mortgage),
            or pooled family contributions.
          </p>
          <h3>Long-term care insurance (LTCI)</h3>
          <p>
            If your loved one purchased an LTCI policy, it will usually reimburse a daily or
            monthly maximum for non-medical home care after an elimination period (often 90
            days). We can bill the policy directly or provide documentation for reimbursement.
          </p>
          <h3>VA Aid &amp; Attendance</h3>
          <p>
            Wartime veterans and surviving spouses may qualify for a monthly Aid &amp;
            Attendance benefit that can be applied toward in-home care. Houston has one of the
            largest veteran populations in Texas — it's worth checking eligibility.
          </p>
          <h3>Medicare and Medicaid</h3>
          <p>
            <strong>Medicare</strong> covers short-term skilled home health (nursing, physical
            therapy) after a qualifying event, but not ongoing custodial care.{" "}
            <strong>Texas Medicaid STAR+PLUS</strong> can cover in-home attendant services for
            those who meet income and functional eligibility requirements.
          </p>

          <h2>What changes the total cost of care</h2>
          <p>
            Two clients in the same Houston ZIP code can have very different monthly totals.
            These are the biggest drivers:
          </p>
          <ol>
            <li>
              <strong>Hours per week.</strong> A few morning visits look very different from
              full-day or overnight coverage. Most families start at 12–20 hours/week and adjust
              as needs change.
            </li>
            <li>
              <strong>24/7 vs. respite care.</strong> Around-the-clock care is the single biggest
              cost variable. Respite care — short breaks for a family caregiver — is usually the
              most affordable entry point.
            </li>
            <li>
              <strong>Level of care.</strong> Dementia support, two-person transfers, and
              post-surgical recovery cost more than companion-level care because they require
              additional training and, sometimes, a second caregiver.
            </li>
            <li>
              <strong>Schedule consistency.</strong> Regular, predictable shifts let agencies
              assign the same caregivers and quote lower rates. Last-minute or on-call hours
              typically carry a premium.
            </li>
            <li>
              <strong>Location within Greater Houston.</strong> Drive time matters. Service in
              Houston and Pearland is usually quoted at standard rates; outlying parts of Katy,
              Cypress, Richmond, and Fulshear may include a small mileage adjustment.
            </li>
          </ol>

          <h2>Sample monthly budgets</h2>
          <p>
            Rough budgets to anchor your planning — your real quote will depend on the
            assessment:
          </p>
          <ul>
            <li><strong>Light support</strong> (12 hrs/week, companion care): ~$1,500–$1,700/mo</li>
            <li><strong>Daily help</strong> (4 hrs/day, personal care): ~$3,800–$4,400/mo</li>
            <li><strong>Extended daytime</strong> (8 hrs/day, personal care): ~$7,500–$8,800/mo</li>
            <li><strong>24/7 hourly shift care</strong>: ~$20,000–$26,000/mo</li>
            <li><strong>Live-in care</strong> (where appropriate): ~$11,000–$17,000/mo</li>
          </ul>

          <h2>How to lower the cost without lowering the quality</h2>
          <ul>
            <li>Bundle visits into longer shifts to clear hourly minimums.</li>
            <li>Pair professional care with a family rotation for overnights.</li>
            <li>Start with a respite schedule and scale up as you see what's actually needed.</li>
            <li>Apply for VA Aid &amp; Attendance or LTCI early — approvals can take months.</li>
            <li>Ask any agency for a written care plan and rate sheet before signing.</li>
          </ul>

          <h2>Frequently asked questions</h2>
          {faqs.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}

          <h2>Get a personalized quote for your family</h2>
          <p>
            Every care plan is different, and the only way to know what your family will pay is
            a free in-home or phone assessment. We'll listen, recommend a starting schedule, and
            give you a clear, written quote — no pressure.
          </p>
          <p>
            Learn more about our <Link to="/services">in-home care services</Link>, the{" "}
            <Link to="/service-areas">Houston-area communities we serve</Link>, or{" "}
            <Link to="/book-consultation">book a free consultation</Link> today.
          </p>
        </article>

        <div className="mt-10 flex max-w-3xl flex-wrap gap-3">
          <CallButton />
          <ConsultButton />
        </div>
      </Section>
    </>
  );
}