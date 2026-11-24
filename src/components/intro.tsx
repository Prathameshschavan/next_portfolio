import type { CSSProperties } from "react";
import { metrics, profile, sections } from "@/content/profile";
import { CommandMenuTrigger } from "./command-menu";
import { ArrowRight, Download, GitHub, LinkedIn, Mail } from "./icons";
import { LocalTime } from "./local-time";
import { SectionNav } from "./section-nav";
import { ThemeToggle } from "./theme-toggle";
import { buttonPrimary, buttonSecondary, iconButton } from "./ui";

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

/** The left column on desktop (sticky), the hero on mobile. */
export function Intro() {
  return (
    <header className="pt-10 pb-16 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-between lg:overflow-y-auto lg:py-12 lg:[scrollbar-width:none] xl:py-16 lg:short:py-7">
      <div>
        {profile.available && (
          <p className="enter inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[12px] text-muted" style={stagger(0)}>
            <span className="pulse relative size-1.5 rounded-full bg-success" aria-hidden="true" />
            {profile.availability}
          </p>
        )}

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:short:mt-5">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg text-fg">
          {profile.role}
          <span className="text-subtle"> · {profile.stack.join(", ")}</span>
        </p>
        <p className="mt-5 max-w-sm leading-relaxed text-pretty text-muted">
          {profile.tagline}
        </p>

        <dl className="enter mt-8 grid max-w-md grid-cols-3 gap-5 border-t border-border pt-6 lg:short:mt-6 lg:short:pt-5" style={stagger(1)}>
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col-reverse gap-1">
              <dt className="text-[12px] leading-snug text-subtle">{m.label}</dt>
              <dd className="font-mono text-2xl font-medium tracking-tight text-fg tabular-nums">{m.value}</dd>
            </div>
          ))}
        </dl>

        <div className="enter mt-8 flex flex-wrap gap-3 lg:short:mt-6" style={stagger(2)}>
          <a href="#contact" className={buttonPrimary}>
            Get in touch <ArrowRight />
          </a>
          <a href={profile.resume} download className={buttonSecondary}>
            <Download /> Résumé
          </a>
        </div>

        <div className="enter mt-12 hidden lg:block lg:short:mt-7" style={stagger(3)}>
          <SectionNav items={sections} />
        </div>
      </div>

      <div className="enter mt-12 flex flex-col gap-4 lg:mt-8 lg:short:mt-6" style={stagger(4)}>
        <div className="flex flex-wrap items-center gap-2">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconButton}>
            <GitHub />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconButton}>
            <LinkedIn />
          </a>
          <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} className={iconButton}>
            <Mail />
          </a>
          {/* On mobile these live in the sticky top bar instead */}
          <span className="hidden items-center gap-2 lg:inline-flex">
            <span aria-hidden="true" className="mx-1 h-5 w-px bg-border" />
            <ThemeToggle />
            <span className="ml-1 inline-flex">
              <CommandMenuTrigger />
            </span>
          </span>
        </div>
        <p className="font-mono text-[12px] text-subtle">
          <LocalTime timeZone={profile.timeZone} label={profile.location} />
        </p>
      </div>
    </header>
  );
}

/** Compact sticky bar for small screens, where the sidebar nav is hidden. */
export function MobileBar() {
  return (
    <div className="sticky top-0 z-30 -mx-6 flex items-center justify-between border-b border-border bg-bg/80 px-6 py-3 backdrop-blur-md sm:-mx-10 sm:px-10 lg:hidden">
      <a href="#top" className="text-sm font-medium tracking-tight text-fg">
        {profile.name}
        <span className="text-accent">.</span>
      </a>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <CommandMenuTrigger variant="compact" />
      </div>
    </div>
  );
}
