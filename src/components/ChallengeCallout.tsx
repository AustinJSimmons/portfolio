import { AlertTriangle, CheckCircle2, Wrench } from 'lucide-react';
import type { ChallengeItem } from '@/data/projects';

export function ChallengeCallout({
  item,
  index,
}: {
  item: ChallengeItem;
  index: number;
}) {
  return (
    <div
      className={`print-break-avoid rounded-2xl border p-5 ${
        item.isPlaceholder
          ? 'border-dashed border-amber-400 bg-amber-50/40'
          : 'border-border bg-surface'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
          Challenge #{index + 1}
        </span>
        {item.isPlaceholder && (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
            <AlertTriangle className="h-3 w-3" />
            Placeholder — Update Before Presenting
          </span>
        )}
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
            <Wrench className="h-3.5 w-3.5 text-amber-600" />
            <span>Implementation Challenge</span>
          </div>
          <p className="mt-2 text-[15px] leading-relaxed text-foreground">
            {item.challenge}
          </p>
        </div>

        <div className="rounded-xl bg-accent-soft/70 p-4 ring-1 ring-teal-700/15">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent-strong">
            <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
            <span>Engineering Solution</span>
          </div>
          <p className="mt-2 text-[15px] leading-relaxed text-foreground">
            {item.solution}
          </p>
        </div>
      </div>
    </div>
  );
}
