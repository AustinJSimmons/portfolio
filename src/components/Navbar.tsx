'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Printer, Terminal } from 'lucide-react';
import { FEATURED_PROJECTS, PROFILE } from '@/data/projects';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="no-print sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-white">
            <Terminal className="h-4 w-4" />
          </span>
          <span>{PROFILE.name}</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2 text-sm font-medium">
          <Link
            href="/"
            className={`rounded-lg px-3 py-1.5 transition-colors ${
              pathname === '/'
                ? 'bg-accent-soft text-accent-strong'
                : 'text-muted hover:bg-slate-100 hover:text-foreground'
            }`}
          >
            Overview
          </Link>

          <div className="hidden md:flex items-center gap-1 border-l border-border pl-2">
            {FEATURED_PROJECTS.map((project, idx) => {
              const href = `/projects/${project.slug}`;
              const active = pathname === href;
              return (
                <Link
                  key={project.slug}
                  href={href}
                  className={`rounded-lg px-2.5 py-1.5 transition-colors ${
                    active
                      ? 'bg-accent-soft text-accent-strong'
                      : 'text-muted hover:bg-slate-100 hover:text-foreground'
                  }`}
                >
                  {idx + 1}. {project.shortTitle}
                </Link>
              );
            })}
          </div>

          <Link
            href="/about"
            className={`rounded-lg px-3 py-1.5 transition-colors ${
              pathname === '/about'
                ? 'bg-accent-soft text-accent-strong'
                : 'text-muted hover:bg-slate-100 hover:text-foreground'
            }`}
          >
            About
          </Link>

          <button
            type="button"
            onClick={() => window.print()}
            title="Save or print a PDF backup of this page"
            className="ml-1 hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-slate-300 hover:bg-slate-50 cursor-pointer"
          >
            <Printer className="h-3.5 w-3.5 text-muted" />
            <span>PDF Backup</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
