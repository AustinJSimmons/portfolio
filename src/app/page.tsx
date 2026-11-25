import Link from 'next/link';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/Icons';
import { PROFILE } from '@/data/projects';

export default function OverviewPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16 space-y-16">
      {/* EDIT [Overview (/) — Intro / Hero]: Location, role & name come from PROFILE in src/data/projects.ts; bio paragraph & CTAs below are editable here */}
      <section className="space-y-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
          {PROFILE.location} · {PROFILE.role}
        </p>

        <h1 className="neon-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
          {PROFILE.name}
        </h1>

        {/* EDIT [Overview (/) — Intro Bio Paragraph]: Main summary paragraph */}
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
          I&apos;m a data science student who enjoys working across abstraction layers—from statistical modeling and explainable machine learning down to C++/SystemC hardware simulation, embedded systems, and practical automation. I&apos;m currently exploring security-focused engineering where low-level systems literacy and data analysis intersect.
        </p>

        <div className="no-print flex flex-wrap items-center gap-3 pt-1">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-strong px-5 py-2.5 text-sm font-semibold text-white btn-neon hover:bg-purple-400"
          >
            <span>Explore Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-purple-400/50 hover:bg-surface-elevated"
          >
            <FileText className="h-4 w-4 text-accent" />
            <span>View Resume</span>
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-2 text-sm font-medium text-muted">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PROFILE.links.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Mail className="h-4 w-4" />
            <span>{PROFILE.links.email}</span>
          </a>
        </div>
      </section>

      <hr className="border-border" />

      {/* EDIT [Overview (/) — Experience & Education]: Heading below; cards come from PROFILE.experience in src/data/projects.ts */}
      <section className="space-y-6">
        <h2 className="neon-heading text-2xl font-bold tracking-tight">
          Experience &amp; Education
        </h2>

        <div className="space-y-4">
          {PROFILE.experience.map((item) => (
            <div
              key={item.title}
              className={`print-break-avoid rounded-2xl border p-6 ${
                item.isPlaceholder
                  ? 'border-dashed border-amber-500/45 bg-amber-950/15'
                  : 'border-border bg-surface'
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-muted">
                    {item.organization}
                  </p>
                </div>
                <span className="font-mono text-xs font-semibold text-accent">
                  {item.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {item.highlights.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-[15px] text-zinc-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {item.isPlaceholder && (
                <p className="mt-4 text-xs font-medium text-amber-300">
                  Update your Embedded Systems Internship details in{' '}
                  <code className="rounded bg-background px-1.5 py-0.5 font-mono text-amber-200">
                    src/data/projects.ts
                  </code>
                  .
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="border-border" />

      {/* EDIT [Overview (/) — Core Skills]: Heading below; skill groups come from PROFILE.skillGroups in src/data/projects.ts */}
      <section className="space-y-6">
        <h2 className="neon-heading text-2xl font-bold tracking-tight">
          Core Skills
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {PROFILE.skillGroups.map((group) => (
            <div key={group.category} className="space-y-2">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-200">
                {group.category}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {group.skills.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-border" />

      {/* EDIT [Overview (/) — Bottom Direction Section]: Heading & closing summary paragraph */}
      <section className="space-y-3">
        <h2 className="neon-heading text-xl font-bold tracking-tight">
          Where Data, Systems &amp; Security Meet
        </h2>
        <p className="text-[15px] leading-relaxed text-zinc-300">
          My prior embedded internship and ongoing C++/SystemC GPU simulator give me comfort below the Python abstraction layer, while my capstone and data engineering coursework train me to validate claims statistically. Together, that combination translates directly to detection engineering, telemetry analytics, and security-minded systems development.
        </p>
      </section>
    </div>
  );
}
