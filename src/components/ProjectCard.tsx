import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, ExternalLink } from 'lucide-react';
import type { FeaturedProject } from '@/data/projects';

export function StatusBadge({ status }: { status: FeaturedProject['status'] }) {
  const isCompleted = status === 'Completed';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        isCompleted
          ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30'
          : 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/30'
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
  highlighted = false,
}: {
  project: FeaturedProject;
  index: number;
  highlighted?: boolean;
}) {
  return (
    <article
      className={`print-break-avoid group flex w-full flex-col justify-between rounded-2xl border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-purple-400/60 hover:bg-surface-elevated ${
        highlighted
          ? 'border-purple-500/50 shadow-lg shadow-purple-500/10'
          : 'border-border'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs font-medium text-muted">
            0{index + 1} · {project.contextTag}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        <p className="mt-1 text-sm font-medium text-muted">{project.period}</p>

        <p className="mt-3 text-[15px] leading-relaxed text-zinc-300">
          {project.summary}
        </p>

        <div className="mt-4 rounded-xl bg-background/80 px-3.5 py-2.5 font-mono text-xs font-semibold text-zinc-200 ring-1 ring-border">
          {project.headlineMetric}
        </div>
      </div>

      <div className="mt-5 border-t border-border pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface-elevated px-2 py-0.5 text-xs font-medium text-zinc-300 ring-1 ring-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-purple-300"
          >
            <span>Open Project Overview</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-foreground"
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
