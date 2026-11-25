import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { formatBlogDate, getAllPosts, getPostBySlug } from '@/lib/blog';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-10 sm:py-14 space-y-10">
      <Link
        href="/blog"
        className="no-print inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Blog</span>
      </Link>

      <header className="space-y-4 border-b border-border pb-8">
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

        <h1 className="neon-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
          {post.title}
        </h1>

        {post.description && (
          <p className="text-lg leading-relaxed text-zinc-300">
            {post.description}
          </p>
        )}

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-surface-elevated px-2.5 py-0.5 text-xs font-medium text-zinc-300 ring-1 ring-border"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {post.heroImage && (
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.heroImage}
            alt={post.title}
            className="max-h-[420px] w-full object-cover"
          />
        </div>
      )}

      <div className="blog-prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <footer className="no-print border-t border-border pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-purple-400/50 hover:bg-surface-elevated"
        >
          <ArrowLeft className="h-4 w-4 text-accent" />
          <span>All Blog Posts</span>
        </Link>
      </footer>
    </article>
  );
}
