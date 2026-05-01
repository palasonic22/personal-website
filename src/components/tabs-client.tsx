'use client'

import { useState } from 'react'
import { SiteHeader, Intro, TabNav } from '@/components/site-header'
import type { Frontmatter } from '@/lib/content'

type TabId = 'about' | 'writing' | 'favorites' | 'connect'

export function TabsClient({ writings, projects }: { writings: Frontmatter[]; projects: Frontmatter[] }) {
  const [activeTab, setActiveTab] = useState<TabId>('about')

  return (
    <>
      <SiteHeader />
      <Intro />
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="min-h-[300px]">
        {activeTab === 'about' && <AboutTab projects={projects} />}
        {activeTab === 'writing' && <WritingTab writings={writings} />}
        {activeTab === 'favorites' && <FavoritesTab />}
        {activeTab === 'connect' && <ConnectTab />}
      </div>
    </>
  )
}

function AboutTab({ projects }: { projects: Frontmatter[] }) {
  return (
    <div className="space-y-10">
      <section>
        <p className="text-[14px] leading-relaxed mb-4">
          I'm a product builder based in Singapore. I work at the intersection of product thinking,
          growth, and design — shipping things people actually use.
        </p>
        <p className="text-[14px] leading-relaxed">
          Spent the last few years in fintech and crypto, working on payments infrastructure and
          growth at scale. Now building small products independently, writing in public, and
          exploring AI workflow automation.
        </p>
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          Timeline
        </h2>
        <div className="space-y-3 mt-4">
          <div className="flex items-baseline justify-between">
            <span>Bitget Wallet — payments and growth</span>
            <span className="text-zinc-400 dark:text-zinc-500 text-sm shrink-0 ml-4">2024–2026</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span>Web3 / Solana — building on-chain</span>
            <span className="text-zinc-400 dark:text-zinc-500 text-sm shrink-0 ml-4">2022–2024</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span>Independent builder — small products, writing, AI</span>
            <span className="text-zinc-400 dark:text-zinc-500 text-sm shrink-0 ml-4">Now</span>
          </div>
        </div>
      </section>

      {projects.length > 0 && (
        <section>
          <h2 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">
            Things I've built
          </h2>
          <div className="space-y-4 mt-4">
            {projects.map((project) => (
              <div key={project.slug}>
                <a href="#" className="font-medium hover:underline underline-offset-4">
                  {project.title}
                </a>
                <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function WritingTab({ writings }: { writings: Frontmatter[] }) {
  return (
    <div className="space-y-3">
      {writings.map((post) => (
        <a
          key={post.slug}
          href={`/writing/${post.slug}`}
          className="flex items-baseline justify-between group"
        >
          <span className="group-hover:underline underline-offset-4">
            {post.title}
          </span>
          <span className="text-zinc-400 dark:text-zinc-500 text-sm shrink-0 ml-4">
            {formatDate(post.date)}
          </span>
        </a>
      ))}
      {writings.length === 0 && (
        <p className="text-zinc-400 dark:text-zinc-500">No writing yet.</p>
      )}
    </div>
  )
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function FavoritesTab() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          Brands
        </h2>
        <p className="text-[14px] leading-relaxed">
          Apple, Muji, Aesop, Leica, Patagonia, Braun. Brands that do one thing well and don't apologize for it.
        </p>
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          People I follow
        </h2>
        <p className="text-[14px] leading-relaxed">
          Paul Graham, Lenny Rachitsky, Julian Shapiro, James Clear. People who think clearly in public.
        </p>
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          Things I use
        </h2>
        <p className="text-[14px] leading-relaxed">
          MacBook Air, iPhone, Notion, Linear, Figma, VS Code. Simple tools, minimal setup.
        </p>
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          Films
        </h2>
        <p className="text-[14px] leading-relaxed">
          2001: A Space Odyssey, Blade Runner 2049, The Social Network, Ex Machina, Parasite. Films about building, systems, and the quiet violence of ambition.
        </p>
      </section>
    </div>
  )
}

function ConnectTab() {
  return (
    <div className="space-y-8">
      <p className="text-[14px] leading-relaxed">
        I'm always open to interesting conversations. Reach out if you want to talk products,
        building, or just say hi.
      </p>
      <div className="flex flex-col gap-3">
        {connectLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="group inline-flex items-center gap-2 hover:underline underline-offset-4"
          >
            {link.label}
            {link.external && <ExternalArrow />}
          </a>
        ))}
      </div>
    </div>
  )
}

const connectLinks = [
  { label: 'Email', href: 'mailto:hello@ezekiellee.com', external: false },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ezekiel-lee', external: true },
  { label: 'X / Twitter', href: 'https://x.com/ezekiel_lee', external: true },
]

function ExternalArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-foreground transition-colors">
      <path d="M7 17l9.2-9.2M17 17V7H7" />
    </svg>
  )
}
