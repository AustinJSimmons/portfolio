import { ArrowRight, FileSpreadsheet, ImagePlus, ShieldCheck, Workflow } from 'lucide-react';

export function DealershipPlaceholderPanel() {
  // EDIT [Project Overview (/projects/dealership-workflow-automation) — Architecture Diagram]: 3-step pipeline cards
  const stages = [
    {
      icon: FileSpreadsheet,
      title: '1. Structured Intake Form',
      detail: '[Placeholder: Staff-facing Google Form / sidebar UI fields & dropdowns]',
    },
    {
      icon: ShieldCheck,
      title: '2. Apps Script Validation',
      detail: '[Placeholder: onFormSubmit / onEdit triggers, VIN/stock formatting, LockService]',
    },
    {
      icon: Workflow,
      title: '3. Dealership Tracking Sheet',
      detail: '[Placeholder: Normalized log, protected formulas, status view & alerts]',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="print-break-avoid rounded-2xl border border-border bg-surface p-6">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
          Workflow Architecture (Template)
        </span>
        <h3 className="mt-1 text-xl font-bold text-foreground">
          End-to-End Google Sheets + Apps Script Pipeline
        </h3>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.title}
                className="relative rounded-xl border border-dashed border-amber-500/45 bg-amber-950/15 p-4"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <Icon className="h-4 w-4 text-accent" />
                  <span>{stage.title}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {stage.detail}
                </p>
                {idx < stages.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-surface text-muted" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* EDIT [Project Overview (/projects/dealership-workflow-automation) — Screenshot Slot]: Replace with <img> elements once screenshots are saved in public/images/dealership/ */}
      <div className="print-break-avoid rounded-2xl border border-dashed border-amber-500/45 bg-amber-950/15 p-6 text-center">
        <ImagePlus className="mx-auto h-8 w-8 text-amber-400" />
        <h4 className="mt-2 text-base font-bold text-foreground">
          Screenshot Slot (Sanitized Dealership UI / Sheet View)
        </h4>
        <p className="mx-auto mt-1 max-w-xl text-sm text-zinc-300">
          Save anonymized screenshots (with any customer PII or sensitive dealer figures blurred) in{' '}
          <code className="rounded bg-background px-1.5 py-0.5 font-mono text-xs text-amber-200 ring-1 ring-amber-500/35">
            public/images/dealership/
          </code>{' '}
          and update{' '}
          <code className="rounded bg-background px-1.5 py-0.5 font-mono text-xs text-amber-200 ring-1 ring-amber-500/35">
            src/data/projects.ts
          </code>.
        </p>
      </div>
    </div>
  );
}
