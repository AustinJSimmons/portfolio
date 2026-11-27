'use client';

import { useCallback, useEffect, useState, type CSSProperties } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import type { FeaturedProject } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

const AUTO_ADVANCE_MS = 5500;
const TRANSITION_FALLBACK_MS = 580;
const BUFFER_OFFSETS = [-1, 0, 1, 2, 3] as const;

export function ProjectCarousel({
  projects,
}: {
  projects: FeaturedProject[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shift, setShift] = useState<-1 | 0 | 1>(0);
  const [isPaused, setIsPaused] = useState(false);

  const count = projects.length;

  const startSlide = useCallback(
    (direction: -1 | 1) => {
      if (count <= 1 || shift !== 0) return;
      setShift(direction);
    },
    [count, shift]
  );

  const finalizeSlide = useCallback(() => {
    if (shift === 0) return;
    setActiveIndex((prev) => (prev - shift + count) % count);
    setShift(0);
  }, [shift, count]);

  useEffect(() => {
    if (shift === 0) return;
    const fallback = setTimeout(finalizeSlide, TRANSITION_FALLBACK_MS);
    return () => clearTimeout(fallback);
  }, [shift, finalizeSlide]);

  useEffect(() => {
    if (isPaused || count <= 1 || shift !== 0) return;
    const timer = setInterval(() => {
      setShift(-1);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [isPaused, activeIndex, count, shift]);

  if (count === 0) return null;

  if (count === 1) {
    return (
      <div className="max-w-md">
        <ProjectCard project={projects[0]} highlighted />
      </div>
    );
  }

  const handleDotClick = (targetIdx: number) => {
    if (shift !== 0 || targetIdx === activeIndex) return;
    if (targetIdx === (activeIndex + 1) % count) {
      startSlide(-1);
    } else if (targetIdx === (activeIndex - 1 + count) % count) {
      startSlide(1);
    } else {
      setActiveIndex(targetIdx);
    }
  };

  const focusSlot =
    count >= 3
      ? shift === -1
        ? 3
        : shift === 1
          ? 1
          : 2
      : shift === -1
        ? 2
        : shift === 1
          ? 0
          : 1;

  const trackStyle = {
    transform: `translate3d(calc((var(--slot-w) * -1) + (var(--slot-w) * ${shift})), 0, 0)`,
  } as CSSProperties;

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
            - Hover or use arrows to browse manually
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => startSlide(1)}
            aria-label="Previous project"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:border-purple-400/60 hover:bg-surface-elevated hover:text-accent cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => startSlide(-1)}
            aria-label="Next project"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:border-purple-400/60 hover:bg-surface-elevated hover:text-accent cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Smooth 5-slot cyclic sliding viewport */}
      <div className="-mx-3 overflow-hidden py-3">
        <div
          style={trackStyle}
          onTransitionEnd={(e) => {
            if (e.target === e.currentTarget && e.propertyName === 'transform') {
              finalizeSlide();
            }
          }}
          className={`flex w-full [--slot-w:100%] lg:[--slot-w:33.333333%] ${
            shift !== 0
              ? 'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'
              : 'transition-none'
          }`}
        >
          {BUFFER_OFFSETS.map((offset, slotIdx) => {
            const projectIndex = (activeIndex + offset + count) % count;
            const project = projects[projectIndex];
            return (
              <div key={slotIdx} className="flex w-full shrink-0 px-3 lg:w-1/3">
                <ProjectCard
                  project={project}
                  highlighted={slotIdx === focusSlot}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {projects.map((project, idx) => {
          const isCurrent = idx === activeIndex;
          return (
            <button
              key={project.slug}
              type="button"
              onClick={() => handleDotClick(idx)}
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
