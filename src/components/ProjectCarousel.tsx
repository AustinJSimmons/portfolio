'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import type { FeaturedProject } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

const AUTO_ADVANCE_MS = 5500;

export function ProjectCarousel({
  projects,
}: {
  projects: FeaturedProject[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const count = projects.length;
  const visibleCount = Math.min(3, count);

  const step = (delta: number) => {
    setActiveIndex((prev) => (prev + delta + count) % count);
  };

  useEffect(() => {
    if (isPaused || count <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [isPaused, activeIndex, count]);

  if (count === 0) return null;

  const visibleSlots = Array.from({ length: visibleCount }, (_, offset) => {
    const projectIndex = (activeIndex + offset) % count;
    return {
      project: projects[projectIndex],
      projectIndex,
      isCenterFocus: visibleCount === 3 ? offset === 1 : offset === 0,
    };
  });

  return (
    <div
      className="space-y-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Controls bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-muted">
          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:border-purple-400/50 hover:text-foreground cursor-pointer"
          >
            {isPaused ? (
              <>
                <Play className="h-3 w-3 text-accent" />
                <span>Paused</span>
              </>
            ) : (
              <>
                <Pause className="h-3 w-3 text-accent" />
                <span>Auto-scrolling</span>
              </>
            )}
          </button>
          <span className="hidden sm:inline text-zinc-500">
            · Hover or use arrows to browse manually
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous project"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:border-purple-400/60 hover:bg-surface-elevated hover:text-accent cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next project"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:border-purple-400/60 hover:bg-surface-elevated hover:text-accent cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 3-card cyclic viewport */}
      <div className="grid gap-6 lg:grid-cols-3">
        {visibleSlots.map(({ project, projectIndex, isCenterFocus }, slotIdx) => (
          <div
            key={`${project.slug}-${slotIdx}`}
            className={slotIdx === 0 ? 'flex' : 'hidden lg:flex'}
          >
            <ProjectCard
              project={project}
              index={projectIndex}
              highlighted={isCenterFocus}
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {projects.map((project, idx) => {
          const isCurrent = idx === activeIndex;
          return (
            <button
              key={project.slug}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Focus ${project.shortTitle}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                isCurrent
                  ? 'w-7 bg-accent shadow-xs shadow-purple-400/50'
                  : 'w-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
