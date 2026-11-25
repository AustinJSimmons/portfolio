import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { formatBlogDate, getAllPosts } from '@/lib/blog';
import { PROFILE } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Engineering notes and devlogs by ${PROFILE.name} on GPU architecture, systems, and data science.`,
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16 space-y-12">
      {/* EDIT [Blog (/blog) — Header]: Page eyebrow, title & subtitle; individual posts are Markdown files in content/blog/*.md */}
      <header className="space-y-3 border-b border-border pb-8">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
          Engineering Notes &amp; Devlogs
        </span>
        <h1 className="neon-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
          Blog
        </h1>
        <p className="max-w-2xl text-base text-muted">
          Write-ups on GPU simulation, low-level systems, and things I&apos;m building or breaking along the way.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-border bg-surface p-8 text-center text-muted">
          No published posts yet. Add a Markdown file in{' '}
          <code className="rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-xs text-accent">
            content/blog/
          </code>{' '}
          with <code className="font-mono text-xs">draft: false</code>.
        </div>
      ) : (
        <div className="space-y-5">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 card-neon-hover hover:border-purple-400/60 hover:bg-surface-elevated"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-purple-500/15 via-purple-400/80 to-purple-500/15 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />

              <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  {formatBlogDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  {post.readingTime}
                </span>
              </div>

              <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              {post.description && (
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-300">
                  {post.description}
                </p>
              )}

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface-elevated px-2 py-0.5 text-xs font-medium text-zinc-300 ring-1 ring-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-purple-300"
                >
                  <span>Read Post</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
