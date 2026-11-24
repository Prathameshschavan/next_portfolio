import Image from "next/image";
import portrait from "@/assets/portrait.jpg";
import { CaseStudy } from "@/components/case-study";
import { CommandMenu } from "@/components/command-menu";
import { CopyEmail } from "@/components/copy-email";
import { ArrowUpRight, GitHub, LinkedIn, Lock, WhatsApp } from "@/components/icons";
import { Intro, MobileBar } from "@/components/intro";
import { Section, TagList, buttonSecondary } from "@/components/ui";
import {
  about,
  caseStudies,
  education,
  experience,
  otherProjects,
  profile,
  siteUrl,
  skills,
} from "@/content/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "Skysoft IT Services Private Limited" },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "Server-Side Rendering",
    "Frontend Performance Optimization",
    "GraphQL",
    "Node.js",
    "PostgreSQL",
    "Prisma",
  ],
  sameAs: [profile.links.github, profile.links.linkedin],
};

export default function Home() {
  const waHref = `https://wa.me/${profile.whatsapp.number}?text=${encodeURIComponent(profile.whatsapp.message)}`;

  return (
    <>
      <a
        href="#content"
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-lg bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <div id="top" className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <MobileBar />

        <div className="lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24">
          <Intro />

          <main id="content" tabIndex={-1} className="focus:outline-none lg:py-16 xl:py-20">
            {/* ---------- About ---------- */}
            <Section id="about" index={1} title="About">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                <figure className="shrink-0">
                  <Image
                    src={portrait}
                    alt={`Portrait of ${profile.name}`}
                    placeholder="blur"
                    sizes="144px"
                    priority
                    className="size-28 rounded-2xl border border-border object-cover object-[50%_20%] sm:size-36"
                  />
                </figure>
                <div className="space-y-4 text-[16px] leading-relaxed text-pretty text-muted">
                  {about.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>
            </Section>

            {/* ---------- Work ---------- */}
            <Section id="work" index={2} title="Selected work">
              <div className="space-y-8">
                {caseStudies.map((s) => (
                  <CaseStudy key={s.slug} study={s} />
                ))}
              </div>

              <h3 className="mt-14 mb-5 font-mono text-[11px] tracking-wide text-subtle uppercase">Also built</h3>
              <ul className="space-y-4">
                {otherProjects.map((p) => (
                  <li key={p.title} className="reveal rounded-xl border border-border p-5 sm:p-6">
                    <h4 className="font-semibold tracking-tight text-fg">{p.title}</h4>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-wide text-subtle uppercase">
                      <span>{p.kicker}</span>
                      {p.confidential && (
                        <span className="inline-flex items-center gap-1 text-muted">
                          <Lock width={11} height={11} /> Confidential
                        </span>
                      )}
                    </p>
                    <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
                    <div className="mt-4">
                      <TagList items={p.stack} label="Tech stack" />
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

            {/* ---------- Experience ---------- */}
            <Section id="experience" index={3} title="Experience">
              <ol className="space-y-12">
                {experience.map((job) => (
                  <li key={job.company} className="reveal grid gap-3 sm:grid-cols-[9rem_1fr] sm:gap-8">
                    <p className="font-mono text-[12px] text-subtle tabular-nums sm:pt-1">
                      <time>{job.start}</time> — <time>{job.end}</time>
                    </p>
                    <div>
                      <h3 className="font-semibold tracking-tight text-fg">
                        {job.role} <span className="text-subtle">·</span> {job.company}
                      </h3>
                      <p className="mt-0.5 text-sm text-subtle">{job.location}</p>
                      <p className="mt-4 leading-relaxed text-muted">{job.summary}</p>
                      <ul className="mt-4 space-y-2">
                        {job.points.map((pt) => (
                          <li key={pt} className="flex gap-3 leading-relaxed text-muted">
                            <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-border-strong" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5">
                        <TagList items={job.stack} label="Tech used" />
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </Section>

            {/* ---------- Skills ---------- */}
            <Section id="skills" index={4} title="Skills">
              <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {skills.map((g, i) => (
                  <div key={g.group} className="bg-bg p-5 sm:p-6">
                    <h3 className="font-medium text-fg">{g.group}</h3>
                    <p className="mt-0.5 mb-4 text-sm text-subtle">{g.note}</p>
                    <TagList items={g.items} label={g.group} tone={i === 0 ? "strong" : "default"} />
                  </div>
                ))}
              </div>
            </Section>

            {/* ---------- Education ---------- */}
            <Section id="education" index={5} title="Education">
              <ol className="divide-y divide-border">
                {education.map((e) => (
                  <li key={e.title} className="grid gap-1 py-5 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-8">
                    <p className="font-mono text-[12px] text-subtle tabular-nums sm:pt-1">
                      <time>{e.start}</time> — <time>{e.end}</time>
                    </p>
                    <div>
                      <h3 className="font-medium text-fg">{e.title}</h3>
                      <p className="mt-0.5 text-sm text-muted">
                        {e.school} <span className="text-subtle">· {e.location}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Section>

            {/* ---------- Contact ---------- */}
            <Section id="contact" index={6} title="Contact">
              <div className="reveal rounded-2xl border border-border bg-surface p-6 sm:p-10">
                <h3 className="max-w-lg text-2xl font-semibold tracking-tight text-balance text-fg sm:text-3xl">
                  Hiring for a frontend role, or need a product that loads fast? Let’s talk.
                </h3>
                <p className="mt-4 max-w-lg leading-relaxed text-muted">
                  I’m open to full-time frontend engineering roles where React, Next.js and TypeScript are at the core,
                  and to freelance work. Email is best; WhatsApp is quickest.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href={`mailto:${profile.email}`} className="inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90">
                    Send an email <ArrowUpRight />
                  </a>
                  <CopyEmail email={profile.email} />
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-6">
                  <a href={waHref} target="_blank" rel="noreferrer" className={buttonSecondary}>
                    <WhatsApp /> WhatsApp
                  </a>
                  <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={buttonSecondary}>
                    <LinkedIn /> LinkedIn
                  </a>
                  <a href={profile.links.github} target="_blank" rel="noreferrer" className={buttonSecondary}>
                    <GitHub /> GitHub
                  </a>
                  <span className="text-sm text-subtle">Typically replies within a few hours</span>
                </div>
              </div>
            </Section>

            {/* ---------- Colophon ---------- */}
            <footer className="mt-8 border-t border-border py-10 text-sm text-subtle">
              <p className="max-w-md leading-relaxed">
                Designed and built by {profile.name}. Next.js App Router, TypeScript and Tailwind CSS, statically
                prerendered. Set in Geist and Geist Mono.
              </p>
              <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[12px]">
                <span className="hidden lg:inline">Press / or ⌘K (Ctrl K) for quick actions</span>
                <a href="#top" className="transition-colors hover:text-fg">
                  Back to top ↑
                </a>
              </p>
            </footer>
          </main>
        </div>
      </div>

      <CommandMenu />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
