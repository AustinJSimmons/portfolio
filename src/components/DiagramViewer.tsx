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

  return (
    <div className="space-y-6">
      <div className="print-break-avoid rounded-2xl border border-border bg-surface p-6 shadow-xs">
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
            className="no-print inline-flex items-center gap-1.5 self-start rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-slate-50 cursor-pointer"
          >
            <Maximize2 className="h-3.5 w-3.5 text-muted" />
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
                    ? 'bg-foreground text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {diagram.title}
              </button>
            );
          })}
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-border bg-white p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.src}
            alt={active.title}
            className="mx-auto max-h-[460px] w-full object-contain"
          />
        </div>

        <p className="mt-3 text-sm text-muted">
          <span className="font-mono text-xs font-semibold uppercase text-foreground">
            [{active.category}]
          </span>{' '}
          {active.caption}
        </p>
      </div>

      {/* SystemC Roadmap & Functional Testing Checklist */}
      <div className="print-break-avoid rounded-2xl border border-border bg-surface p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-foreground">
            SystemC Implementation &amp; Verification Roadmap
          </h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-semibold text-foreground">
            {completedCount} / {SIM_GPU_MILESTONES.length} Milestones Verified
          </span>
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {SIM_GPU_MILESTONES.map((item) => (
            <div
              key={item.label}
              className={`flex items-start gap-2.5 rounded-xl border p-3 text-sm ${
                item.done
                  ? 'border-emerald-200 bg-emerald-50/50 text-slate-900'
                  : 'border-border bg-slate-50/60 text-slate-600'
              }`}
            >
              {item.done ? (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              ) : (
                <Circle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-xs"
          onClick={() => setZoomed(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-auto rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-lg font-bold text-foreground">{active.title}</h4>
              <button
                type="button"
                onClick={() => setZoomed(false)}
                className="rounded-lg border border-border p-1.5 text-muted hover:bg-slate-100 hover:text-foreground cursor-pointer"
                aria-label="Close expanded diagram"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.title}
              className="mx-auto w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
