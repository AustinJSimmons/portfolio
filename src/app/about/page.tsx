import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowLeft,
  Briefcase,
  Download,
  FileText,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/Icons';
import { PROFILE } from '@/data/projects';

export const metadata: Metadata = {
  title: 'About & Experience',
  description: `Background, embedded systems experience, and contact details for ${PROFILE.name}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10 sm:py-14 space-y-12">
      <Link
        href="/"
        className="no-print inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Portfolio Overview</span>
      </Link>

      <header className="space-y-4 border-b border-border pb-8">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
          Profile &amp; Background
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          About {PROFILE.name}
        </h1>
        <p className="text-lg leading-relaxed text-slate-700">
          I&apos;m a data science student who enjoys working across abstraction layers—from statistical modeling and explainable machine learning down to C++/SystemC hardware simulation, embedded systems, and practical automation. I&apos;m currently exploring security-focused engineering where low-level systems literacy and data analysis intersect.
        </p>

        <div className="no-print flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            <FileText className="h-4 w-4" />
            <span>View Resume</span>
          </Link>
          <a
            href={PROFILE.links.resume}
            download="Austin_Simmons_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-slate-50"
          >
            <Download className="h-4 w-4 text-accent" />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </header>

      {/* Experience & Education */}
      <section className="space-y-5">
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-accent" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Experience &amp; Education
          </h2>
        </div>

        <div className="space-y-4">
          {PROFILE.experience.map((item) => (
            <div
              key={item.title}
              className={`print-break-avoid rounded-2xl border p-6 ${
                item.isPlaceholder
                  ? 'border-dashed border-amber-400 bg-amber-50/40'
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
                <span className="font-mono text-xs font-semibold text-muted">
                  {item.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {item.highlights.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-[15px] text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {item.isPlaceholder && (
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-amber-900">
                  <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                  <span>
                    Update your Embedded Systems Internship details in{' '}
                    <code className="rounded bg-white px-1 py-0.5 font-mono">
                      src/data/projects.ts
                    </code>
                    .
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Security & Systems Direction */}
      <section className="rounded-2xl border border-teal-700/20 bg-accent-soft/60 p-6 space-y-3">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent-strong">
          <ShieldCheck className="h-4 w-4" />
          <span>Direction: Where Data, Systems &amp; Security Meet</span>
        </div>
        <p className="text-[15px] leading-relaxed text-slate-800">
          My prior embedded internship and ongoing C++/SystemC GPU simulator give me comfort below the Python abstraction layer, while my capstone and data engineering coursework train me to validate claims statistically. Together, that combination translates directly to detection engineering, telemetry analytics, and security-minded systems development.
        </p>
      </section>

      {/* Contact */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Connect
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            <GitHubIcon className="h-5 w-5 text-foreground" />
            <div>
              <div className="text-xs font-semibold uppercase text-muted">GitHub</div>
              <div className="text-sm font-bold text-foreground">AustinJSimmons</div>
            </div>
          </a>

          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            <LinkedInIcon className="h-5 w-5 text-foreground" />
            <div>
              <div className="text-xs font-semibold uppercase text-muted">LinkedIn</div>
              <div className="text-sm font-bold text-foreground">Austin Simmons</div>
            </div>
          </a>

          <a
            href={`mailto:${PROFILE.links.email}`}
            className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            <Mail className="h-5 w-5 text-foreground" />
            <div>
              <div className="text-xs font-semibold uppercase text-muted">Email</div>
              <div className="text-sm font-bold text-foreground truncate">
                {PROFILE.links.email}
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
