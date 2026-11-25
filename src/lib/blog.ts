import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  heroImage?: string;
  readingTime: string;
  draft: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function estimateReadingTime(markdown: string): string {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

function parsePostFile(fileName: string): BlogPost | null {
  const slug = fileName.replace(/\.mdx?$/, '');
  const fullPath = path.join(BLOG_DIR, fileName);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);

  const draft = Boolean(data.draft);
  const rawDate = data.date ?? data.pubDate ?? '';
  const parsedDate = rawDate ? new Date(String(rawDate)) : new Date(0);
  const isoDate = Number.isNaN(parsedDate.getTime())
    ? String(rawDate)
    : parsedDate.toISOString().slice(0, 10);

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ''),
    date: isoDate,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    heroImage: data.heroImage ? String(data.heroImage) : undefined,
    readingTime: estimateReadingTime(content),
    draft,
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));

  return files
    .map((file) => parsePostFile(file))
    .filter((post): post is BlogPost => post !== null && !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content: _content, ...meta }) => {
      void _content;
      return meta;
    });
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;

  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const fileName = fs.existsSync(mdPath)
    ? `${slug}.md`
    : fs.existsSync(mdxPath)
      ? `${slug}.mdx`
      : null;

  if (!fileName) return null;

  const post = parsePostFile(fileName);
  if (!post || post.draft) return null;
  return post;
}

export function formatBlogDate(dateStr: string): string {
  const parsed = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
