import type { Metadata } from 'next';
import { ExternalLink, Layers } from 'lucide-react';
import {
  ADDITIONAL_PROJECTS,
  FEATURED_PROJECTS,
  PROFILE,
} from '@/data/projects';
import { ProjectCarousel } from '@/components/ProjectCarousel';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Featured project overviews and additional engineering work by ${PROFILE.name}.`,
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16 space-y-20">
      {/* EDIT [Projects (/projects) — Featured Carousel]: Header text below; carousel cards come from FEATURED_PROJECTS in src/data/projects.ts */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Selected Work
          </span>
          <h1 className="neon-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Featured Project Overviews
          </h1>
          <p className="max-w-2xl text-base text-muted">
            Detailed breakdowns covering architecture, implementation challenges, personal contributions, and verified results.
          </p>
        </div>

        <ProjectCarousel projects={FEATURED_PROJECTS} />
      </section>

      <hr className="border-border" />

      {/* EDIT [Projects (/projects) — More Projects Grid]: Header text below; repo cards come from ADDITIONAL_PROJECTS in src/data/projects.ts */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Additional Work
            </span>
            <h2 className="neon-heading mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              More Projects on GitHub
            </h2>
          </div>

          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-purple-300"
          >
            <span>All Repositories</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {ADDITIONAL_PROJECTS.map((item) => (
            <a
              key={item.name}
              href={item.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="print-break-avoid group rounded-2xl border border-border bg-surface p-5 card-neon-hover hover:border-purple-500/45 hover:bg-surface-elevated"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-accent" />
                  <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-accent">
                    {item.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-muted">
                  <span>{item.year}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </div>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface-elevated px-2 py-0.5 text-xs font-medium text-zinc-300 ring-1 ring-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
