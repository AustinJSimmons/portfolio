import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { formatBlogDate, getAllPosts, getPostBySlug } from '@/lib/blog';

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="neon-heading mt-12 mb-5 border-b border-border pb-3 text-3xl font-extrabold tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="neon-heading mt-12 mb-4 border-b border-border/60 pb-2 text-2xl font-bold tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-9 mb-3 text-xl font-bold tracking-tight text-zinc-100">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-7 mb-2 text-base font-semibold uppercase tracking-wider text-purple-300">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="my-5 text-[17px] leading-8 text-zinc-300">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-5 list-disc space-y-2.5 pl-6 text-[17px] leading-8 text-zinc-300 marker:text-accent">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 list-decimal space-y-2.5 pl-6 text-[17px] leading-8 text-zinc-300 marker:text-accent">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-zinc-200">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="font-medium text-accent underline underline-offset-4 transition-colors hover:text-purple-300"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 rounded-r-xl border-l-2 border-accent bg-surface px-5 py-3.5 italic text-zinc-200">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-xl border border-border bg-surface p-4 font-mono text-sm leading-relaxed text-zinc-100 [&>code]:border-0 [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-zinc-100">
      {children}
    </pre>
  ),
  code: ({ children }) => (
    <code className="rounded-md border border-border bg-surface-elevated px-1.5 py-0.5 font-mono text-[0.875em] text-purple-200">
      {children}
    </code>
  ),
  hr: () => <hr className="my-10 border-border" />,
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ''}
      className="my-8 mx-auto rounded-xl border border-border"
    />
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-left text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-border bg-surface text-xs font-semibold uppercase tracking-wider text-accent">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-border/70 bg-background">
      {children}
    </tbody>
  ),
  th: ({ children }) => <th className="px-4 py-3">{children}</th>,
  td: ({ children }) => (
    <td className="px-4 py-3 text-zinc-300">{children}</td>
  ),
};

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

      <div className="min-w-0">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={markdownComponents}
        >
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
