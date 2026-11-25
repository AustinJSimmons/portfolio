import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  UserCheck,
} from 'lucide-react';
import { FEATURED_PROJECTS, getFeaturedProject } from '@/data/projects';
import { StatusBadge } from '@/components/ProjectCard';
import { ChallengeCallout } from '@/components/ChallengeCallout';
import { PcosMetricsTable } from '@/components/PcosMetricsTable';
import { DiagramViewer } from '@/components/DiagramViewer';
import { DealershipPlaceholderPanel } from '@/components/DealershipPlaceholderPanel';

export function generateStaticParams() {
  return FEATURED_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getFeaturedProject(slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: project.shortTitle,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = FEATURED_PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = FEATURED_PROJECTS[projectIndex];
  const prevProject =
    projectIndex > 0 ? FEATURED_PROJECTS[projectIndex - 1] : null;
  const nextProject =
    projectIndex < FEATURED_PROJECTS.length - 1
      ? FEATURED_PROJECTS[projectIndex + 1]
      : null;

  return (
    <article className="mx-auto max-w-5xl px-6 py-10 sm:py-14 space-y-12">
      {/* Top Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="no-print inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Portfolio Overview</span>
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-5 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            Project Overview 0{projectIndex + 1} · {project.contextTag}
          </span>
          <StatusBadge status={project.status} />
          <span className="text-xs font-medium text-muted">{project.period}</span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>

        <p className="text-lg font-medium text-muted">{project.subtitle}</p>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-800"
            >
              {tag}
            </span>
          ))}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 rounded-xl bg-foreground px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <span>View GitHub Repository</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </header>

      {/* Key Metrics Strip */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="print-break-avoid rounded-2xl border border-border bg-surface p-4"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-muted">
              {metric.label}
            </div>
            <div className="mt-1 font-mono text-xl font-bold text-foreground">
              {metric.value}
            </div>
            {metric.detail && (
              <div className="mt-1 text-xs leading-snug text-slate-600">
                {metric.detail}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Overview & Audience Takeaway */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold text-foreground">
            Overview &amp; Problem Context
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            {project.overview}
          </p>
        </div>

        <div className="rounded-2xl border border-teal-700/20 bg-accent-soft/60 p-6">
          <h2 className="text-sm font-bold uppercase tracking-wide text-accent-strong">
            Why It Matters
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-800">
            {project.audienceTakeaway}
          </p>
        </div>
      </section>

      {/* Project-Specific Interactive Visuals */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Technical Artifacts &amp; Results
        </h2>
        {project.slug === 'pcos-diagnostic-dashboard' && <PcosMetricsTable />}
        {project.slug === 'sim-gpu' && <DiagramViewer />}
        {project.slug === 'dealership-workflow-automation' && (
          <DealershipPlaceholderPanel />
        )}
      </section>

      {/* Process & Technical Details */}
      <section className="space-y-5">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Process &amp; Technical Execution
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {project.processSteps.map((step) => (
            <div
              key={step.phase}
              className={`print-break-avoid rounded-2xl border p-5 ${
                step.isPlaceholder
                  ? 'border-dashed border-amber-400 bg-amber-50/40'
                  : 'border-border bg-surface'
              }`}
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                {step.phase}
              </span>
              <h3 className="mt-1.5 text-base font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Challenges & Solutions */}
      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Implementation Challenges &amp; Solutions
          </h2>
          <p className="mt-1 text-sm text-muted">
            Key engineering trade-offs, debugging decisions, and constraints navigated while building.
          </p>
        </div>

        <div className="space-y-4">
          {project.challenges.map((item, idx) => (
            <ChallengeCallout key={idx} item={item} index={idx} />
          ))}
        </div>
      </section>

      {/* Personal Contributions & Skills Demonstrated */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-bold text-foreground">
              My Contributions
            </h2>
          </div>

          <ul className="mt-4 space-y-3">
            {project.contributions.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[15px] leading-relaxed text-slate-800"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {project.contributions.placeholderNote && (
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-dashed border-amber-400 bg-amber-50/60 p-3.5 text-xs leading-relaxed text-amber-950">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
              <p>{project.contributions.placeholderNote}</p>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold text-foreground">
            Competencies Demonstrated
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.skillsDemonstrated.map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent-strong ring-1 ring-teal-700/15"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Navigation Footer */}
      <nav className="no-print flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4 text-muted" />
            <span>Prev: {prevProject.shortTitle}</span>
          </Link>
        ) : (
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4 text-muted" />
            <span>Overview</span>
          </Link>
        )}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            <span>Next: {nextProject.shortTitle}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            <span>About &amp; Experience</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </nav>
    </article>
  );
}
