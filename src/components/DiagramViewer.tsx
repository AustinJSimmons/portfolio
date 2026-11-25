'use client';

import { useState } from 'react';
import { CheckCircle2, Circle, Cpu, Maximize2, X } from 'lucide-react';
import { SIM_GPU_DIAGRAMS, SIM_GPU_MILESTONES } from '@/data/projects';

export function DiagramViewer() {
  const [activeId, setActiveId] = useState(SIM_GPU_DIAGRAMS[0].id);
  const [zoomed, setZoomed] = useState(false);

  const active =
    SIM_GPU_DIAGRAMS.find((d) => d.id === activeId) ?? SIM_GPU_DIAGRAMS[0];

  const completedCount = SIM_GPU_MILESTONES.filter((m) => m.done).length;
  const frameBg =
    active.canvas === 'light' ? 'bg-zinc-100' : 'bg-background';

  return (
    <div className="space-y-6">
      <div className="print-break-avoid rounded-2xl border border-border bg-surface p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
              <Cpu className="h-4 w-4" />
              <span>Interactive Architecture &amp; ISA Explorer</span>
            </div>
            <h3 className="mt-1 text-xl font-bold text-foreground">
              {active.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={() => setZoomed(true)}
            className="no-print inline-flex items-center gap-1.5 self-start rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-purple-400/50 cursor-pointer"
          >
            <Maximize2 className="h-3.5 w-3.5 text-accent" />
            <span>Expand Diagram</span>
          </button>
        </div>

        <div className="no-print mt-4 flex flex-wrap gap-2">
          {SIM_GPU_DIAGRAMS.map((diagram) => {
            const isActive = diagram.id === active.id;
            return (
              <button
                key={diagram.id}
                type="button"
                onClick={() => setActiveId(diagram.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-accent-strong text-white'
                    : 'bg-surface-elevated text-zinc-300 ring-1 ring-border hover:text-foreground'
                }`}
              >
                {diagram.title}
              </button>
            );
          })}
        </div>

        <div className={`mt-5 overflow-hidden rounded-xl border border-border p-4 ${frameBg}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.src}
            alt={active.title}
            className="mx-auto max-h-[460px] w-full object-contain"
          />
        </div>

        <p className="mt-3 text-sm text-muted">
          <span className="font-mono text-xs font-semibold uppercase text-accent">
            [{active.category}]
          </span>{' '}
          {active.caption}
        </p>
      </div>

      {/* SystemC Roadmap & Functional Testing Checklist */}
      <div className="print-break-avoid rounded-2xl border border-border bg-surface p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-foreground">
            SystemC Implementation &amp; Verification Roadmap
          </h3>
          <span className="rounded-full bg-surface-elevated px-3 py-1 font-mono text-xs font-semibold text-accent ring-1 ring-border">
            {completedCount} / {SIM_GPU_MILESTONES.length} Milestones Verified
          </span>
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {SIM_GPU_MILESTONES.map((item) => (
            <div
              key={item.label}
              className={`flex items-start gap-2.5 rounded-xl border p-3 text-sm ${
                item.done
                  ? 'border-emerald-500/30 bg-emerald-950/20 text-zinc-100'
                  : 'border-border bg-background/60 text-muted'
              }`}
            >
              {item.done ? (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              ) : (
                <Circle className="mt-0.5 h-4 w-4 shrink-0 text-zinc-600" />
              )}
              <div>
                <div className="font-mono text-[11px] font-semibold uppercase tracking-wide text-muted">
                  {item.group}
                </div>
                <div className={item.done ? 'font-medium' : ''}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
          onClick={() => setZoomed(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-auto rounded-2xl border border-border bg-surface p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-lg font-bold text-foreground">{active.title}</h4>
              <button
                type="button"
                onClick={() => setZoomed(false)}
                className="rounded-lg border border-border p-1.5 text-muted hover:bg-surface-elevated hover:text-foreground cursor-pointer"
                aria-label="Close expanded diagram"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className={`rounded-xl p-4 ${frameBg}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={active.title}
                className="mx-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
