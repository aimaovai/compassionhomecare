import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "cream",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "sage" | "blush" | "white";
  id?: string;
}) {
  const bg = {
    cream: "bg-cream",
    sage: "bg-sage-soft",
    blush: "bg-blush-soft",
    white: "bg-card",
  }[tone];
  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="container-narrow py-16 md:py-24">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-blush px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
    </div>
  );
}