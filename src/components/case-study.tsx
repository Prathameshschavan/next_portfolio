import Image from "next/image";
import type { CaseStudy as CaseStudyData } from "@/content/profile";
import { ArrowUpRight, Lock } from "./icons";
import { SsrDiagram } from "./ssr-diagram";
import { TagList } from "./ui";

export function CaseStudy({ study, priority = false }: { study: CaseStudyData; priority?: boolean }) {
  const titleId = `${study.slug}-title`;

  return (
    <article aria-labelledby={titleId} className="reveal overflow-hidden rounded-2xl border border-border bg-surface">
      {/* Visual */}
      <div className="border-b border-border bg-surface-2/50 p-5 sm:p-7">
        {study.visual === "ssr-diagram" && <SsrDiagram />}
        {study.visual === "screenshot" && study.screenshot && (
          <div className="overflow-hidden rounded-lg border border-border shadow-xl shadow-black/20">
            <Image
              src={study.screenshot.src}
              alt={study.screenshot.alt}
              placeholder="blur"
              sizes="(min-width: 1280px) 620px, (min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
              priority={priority}
            />
          </div>
        )}
      </div>

      {/* Write-up */}
      <div className="p-5 sm:p-7">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-wide text-subtle uppercase">
          <span>{study.kicker}</span>
          {study.confidential && (
            <span className="inline-flex items-center gap-1 text-muted">
              <Lock width={11} height={11} /> Confidential
            </span>
          )}
        </p>

        <h3 id={titleId} className="mt-3 text-xl font-semibold tracking-tight text-balance text-fg sm:text-2xl">
          {study.link ? (
            <a href={study.link.href} target="_blank" rel="noreferrer" className="group inline">
              {study.title}
              <ArrowUpRight className="ml-1.5 inline size-4 align-baseline text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </a>
          ) : (
            study.title
          )}
        </h3>
        <p className="mt-3 leading-relaxed text-pretty text-muted">{study.summary}</p>

        <dl className="mt-7 grid gap-x-6 gap-y-5 text-[15px] sm:grid-cols-[7.5rem_1fr]">
          <dt className="font-mono text-[11px] tracking-wide text-subtle uppercase sm:pt-1">Problem</dt>
          <dd className="leading-relaxed text-muted">{study.problem}</dd>

          <dt className="font-mono text-[11px] tracking-wide text-subtle uppercase sm:pt-1">What I did</dt>
          <dd>
            <ul className="space-y-2">
              {study.work.map((w) => (
                <li key={w} className="flex gap-3 leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-border-strong" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </dd>

          <dt className="font-mono text-[11px] tracking-wide text-subtle uppercase sm:pt-1">Outcome</dt>
          <dd>
            <ul className="flex flex-wrap gap-2">
              {study.outcomes.map((o) => (
                <li
                  key={o}
                  className="rounded-md border border-accent/30 bg-accent-soft px-2.5 py-1 text-[13px] font-medium text-accent"
                >
                  {o}
                </li>
              ))}
            </ul>
          </dd>
        </dl>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          <TagList items={study.stack} label="Tech stack" />
          {study.link && (
            <a
              href={study.link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted transition-colors hover:text-accent"
            >
              {study.link.label} <ArrowUpRight width={13} height={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
