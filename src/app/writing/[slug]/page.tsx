import { getContent, getSortedWriting } from '@/lib/content'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import { SiteHeader } from '@/components/site-header'

export function generateStaticParams() {
  const posts = getSortedWriting()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getContent(slug, 'writing')
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  }
}

export default async function WritingPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let post
  try {
    post = getContent(slug, 'writing')
  } catch {
    notFound()
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12">
      <SiteHeader />
      <article>
        <div className="mb-8">
          <h1 className="text-base font-semibold leading-snug mb-2">
            {post.frontmatter.title}
          </h1>
          <div className="text-zinc-400 dark:text-zinc-500 text-sm">
            {formatDate(post.frontmatter.date)}
          </div>
        </div>
        <div className="prose text-[14px] leading-relaxed">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <Link href="/" className="text-zinc-400 hover:text-foreground transition-colors text-sm">
            ← Back
          </Link>
        </div>
      </article>
    </div>
  )
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
