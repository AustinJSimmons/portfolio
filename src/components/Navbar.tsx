'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PROFILE } from '@/data/projects';

// EDIT [Navbar — All Pages]: Top-right navigation button labels & routes (brand name comes from PROFILE.name)
const NAV_ITEMS = [
  { label: 'Overview', href: '/', match: (p: string) => p === '/' },
  { label: 'Projects', href: '/projects', match: (p: string) => p.startsWith('/projects') },
  { label: 'Blog', href: '/blog', match: (p: string) => p.startsWith('/blog') },
  { label: 'Resume', href: '/resume', match: (p: string) => p.startsWith('/resume') },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="no-print sticky top-0 z-40 bg-surface/90 backdrop-blur-md navbar-neon">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {PROFILE.name}
        </Link>

        <nav className="flex items-center gap-1.5 sm:gap-2 text-sm font-medium">
          {NAV_ITEMS.map((item) => {
            const active = item.match(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3.5 py-1.5 transition-colors ${
                  active
                    ? 'bg-accent-soft text-accent ring-1 ring-purple-400/35'
                    : 'text-muted hover:bg-surface-elevated hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-purple-500/25 via-purple-400/75 to-purple-500/25"
      />
    </header>
  );
}
