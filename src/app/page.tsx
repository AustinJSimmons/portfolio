import Link from 'next/link';
import {
  ArrowRight,
  ExternalLink,
  FileText,
  Layers,
  Mail,
  MapPin,
  Shield,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/Icons';
import {
  ADDITIONAL_PROJECTS,
  FEATURED_PROJECTS,
  PROFILE,
} from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16 space-y-20">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-accent-soft px-3.5 py-1 text-xs font-semibold text-accent-strong">
          <MapPin className="h-3.5 w-3.5" />
          <span>{PROFILE.location} · Open to Internships &amp; New Grad Roles</span>
        </div>

        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[54px] lg:leading-[1.1]">
            {PROFILE.role}
          </h1>
          <p className="text-lg leading-relaxed text-muted sm:text-xl">
            {PROFILE.tagline}
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                <Shield className="h-3.5 w-3.5" />
                <span>Focus Areas</span>
              </div>
              <p className="text-sm sm:text-base font-medium text-foreground">
                {PROFILE.focusSummary}
              </p>
            </div>

            <div className="no-print flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="#featured-projects"
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-slate-50"
              >
                <FileText className="h-4 w-4 text-accent" />
                <span>Resume</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-slate-50"
              >
                <span>Experience &amp; Bio</span>
              </Link>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-5 border-t border-border/80 pt-4 text-sm font-medium text-muted">
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>github.com/AustinJSimmons</span>
            </a>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PROFILE.links.email}`}
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>{PROFILE.links.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="space-y-6 scroll-mt-24">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              Selected Work
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Featured Project Overviews
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted">
            Structured around technical process, implementation challenges, personal contributions, and verified outcomes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Skills & Competencies Matrix */}
      <section className="space-y-6">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            Core Capabilities
          </span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Skills &amp; Technical Stack
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROFILE.skillGroups.map((group) => (
            <div
              key={group.category}
              className="print-break-avoid rounded-2xl border border-border bg-surface p-5"
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">
                {group.category}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Additional GitHub Projects */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              Additional Work on GitHub
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              More Projects
            </h2>
          </div>
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-strong"
          >
            <span>All Repositories</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {ADDITIONAL_PROJECTS.map((item) => (
            <a
              key={item.name}
              href={item.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="print-break-avoid group rounded-2xl border border-border bg-surface p-5 transition-all hover:border-slate-300 hover:shadow-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-accent" />
                  <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span>{item.year}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
