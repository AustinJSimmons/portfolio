'use client';

import { useState } from 'react';
import { BarChart3, Info } from 'lucide-react';
import { PCOS_MODEL_RESULTS } from '@/data/projects';

type ContextMode = 'full' | 'lowCost';

export function PcosMetricsTable() {
  const [mode, setMode] = useState<ContextMode>('full');

  const sorted = [...PCOS_MODEL_RESULTS].sort((a, b) =>
    mode === 'full' ? b.fullAuc - a.fullAuc : b.lowCostAuc - a.lowCostAuc
  );

  return (
    <div className="print-break-avoid rounded-2xl border border-border bg-surface p-6 shadow-xs">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
            <BarChart3 className="h-4 w-4" />
            <span>Interactive Benchmark · NB07 (5-Fold Stratified CV)</span>
          </div>
          <h3 className="mt-1 text-xl font-bold text-foreground">
            {mode === 'full'
              ? 'Full Clinical Panel (41 Features: Labs, Ultrasound & Symptoms)'
              : 'Low-Cost Screening Context (Non-Invasive Symptoms & Vitals Only)'}
          </h3>
        </div>

        <div className="inline-flex rounded-xl border border-border bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setMode('full')}
            className={`rounded-lg px-3.5 py-1.5 text-sm font-semibold transition-all cursor-pointer ${
              mode === 'full'
                ? 'bg-surface text-foreground shadow-xs'
                : 'text-muted hover:text-foreground'
            }`}
          >
            Full Panel
          </button>
          <button
            type="button"
            onClick={() => setMode('lowCost')}
            className={`rounded-lg px-3.5 py-1.5 text-sm font-semibold transition-all cursor-pointer ${
              mode === 'lowCost'
                ? 'bg-surface text-foreground shadow-xs'
                : 'text-muted hover:text-foreground'
            }`}
          >
            Low-Cost Screening
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {sorted.map((row, idx) => {
          const auc = mode === 'full' ? row.fullAuc : row.lowCostAuc;
          const std = mode === 'full' ? row.fullStd : row.lowCostStd;
          const widthPct = Math.max(0, Math.min(100, ((auc - 0.8) / 0.2) * 100));
          const isTop = idx === 0;

          return (
            <div
              key={row.model}
              className={`rounded-xl border p-4 transition-colors ${
                isTop
                  ? 'border-teal-600/30 bg-accent-soft/50'
                  : 'border-border/80 bg-slate-50/60'
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-foreground">
                    {row.model}
                  </span>
                  {isTop && (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-white">
                      Top Mean AUC
                    </span>
                  )}
                </div>
                <span className="font-mono text-base font-bold text-foreground">
                  {auc.toFixed(4)} <span className="text-sm font-normal text-muted">± {std.toFixed(3)}</span>
                </span>
              </div>

              <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isTop ? 'bg-accent' : 'bg-slate-600'
                  }`}
                  style={{ width: `${widthPct}%` }}
                />
              </div>

              <p className="mt-2 text-xs text-muted">{row.note}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-slate-50 px-4 py-3 text-xs leading-relaxed text-slate-700 ring-1 ring-slate-200/80">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
        <p>
          <strong>Statistical Finding:</strong> All five classifiers were evaluated on identical 5-fold stratified CV splits. Pairwise differences are statistically non-significant (Wilcoxon signed-rank test, Bonferroni-corrected), demonstrating that simpler linear models remain competitive with tree ensembles here.
        </p>
      </div>
    </div>
  );
}
