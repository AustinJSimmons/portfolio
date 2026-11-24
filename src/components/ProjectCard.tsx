import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, ExternalLink } from 'lucide-react';
import type { FeaturedProject } from '@/data/projects';

export function StatusBadge({ status }: { status: FeaturedProject['status'] }) {
  const isCompleted = status === 'Completed';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        isCompleted
          ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20'
          : 'bg-amber-50 text-amber-800 ring-1 ring-amber-600/25'
      }`}
    >
      {isCompleted ? (
        <CheckCircle2 className="h-3.5 w-3.5" />
      ) : (
        <Clock className="h-3.5 w-3.5" />
      )}
      {status}
    </span>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  return (
    <article className="print-break-avoid group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs font-medium text-muted">
            0{index + 1} · {project.contextTag}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        <p className="mt-1 text-sm font-medium text-muted">{project.period}</p>

        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
          {project.summary}
        </p>

        <div className="mt-4 rounded-xl bg-slate-50 px-3.5 py-2.5 font-mono text-xs font-semibold text-foreground ring-1 ring-slate-200/80">
          {project.headlineMetric}
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-border/80">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-strong transition-colors"
          >
            <span>Open Case Study</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-foreground transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="text-xs font-medium text-muted">Private / Client</span>
          )}
        </div>
      </div>
    </article>
  );
}
