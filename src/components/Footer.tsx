import Link from 'next/link';
import { FileText, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/Icons';
import { PROFILE } from '@/data/projects';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">{PROFILE.name}</p>
          <p className="text-sm text-muted">{PROFILE.role}</p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-muted">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <LinkedInIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PROFILE.links.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            <span>{PROFILE.links.email}</span>
          </a>
          <Link
            href="/projects"
            className="transition-colors hover:text-accent"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-accent"
          >
            Blog
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <FileText className="h-4 w-4" />
            <span>Resume</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
