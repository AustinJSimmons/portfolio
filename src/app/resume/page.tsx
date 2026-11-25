import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';
import { PROFILE } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume for ${PROFILE.name} — ${PROFILE.role}.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 sm:py-14 space-y-8">
      <Link
        href="/"
        className="no-print inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Overview</span>
      </Link>

      {/* EDIT [Resume (/resume) — Header & PDF Source]: Page title/subtitle & download filename; PDF file path is PROFILE.links.resume in src/data/projects.ts (public/Austin_resume_web_version.pdf) */}
      <header className="flex flex-col gap-5 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            Curriculum Vitae
          </span>
          <h1 className="neon-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            {PROFILE.name} — Resume
          </h1>
          <p className="text-base text-muted">{PROFILE.focusSummary}</p>
        </div>

        <div className="no-print flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={PROFILE.links.resume}
            download="Austin_Simmons_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-strong px-4 py-2.5 text-sm font-semibold text-white btn-neon hover:bg-purple-400"
          >
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </a>
          <a
            href={PROFILE.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-purple-400/50 hover:bg-surface-elevated"
          >
            <ExternalLink className="h-4 w-4 text-accent" />
            <span>Open in New Tab</span>
          </a>
        </div>
      </header>

      <section className="space-y-3">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <iframe
            src={PROFILE.links.resume}
            title={`${PROFILE.name} Resume`}
            className="h-[80vh] w-full bg-zinc-900"
          />
        </div>

        <p className="flex items-center justify-center gap-2 text-center text-sm text-muted">
          <FileText className="h-4 w-4 shrink-0 text-accent" />
          <span>
            Having trouble viewing the embedded PDF?{' '}
            <a
              href={PROFILE.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline underline-offset-2 hover:text-purple-300"
            >
              Open the PDF directly
            </a>{' '}
            or download a copy above.
          </span>
        </p>
      </section>
    </div>
  );
}
