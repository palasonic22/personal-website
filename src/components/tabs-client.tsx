'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SiteHeader, Intro, TabNav } from '@/components/site-header'
import { Footer } from '@/components/footer'
import type { Frontmatter } from '@/lib/content'

type TabId = 'about' | 'writing' | 'favorites' | 'connect'

export function TabsClient({ writings, projects }: { writings: Frontmatter[]; projects: Frontmatter[] }) {
  const [activeTab, setActiveTab] = useState<TabId>('writing')

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
      <Footer />
    </>
  )
}

function AboutTab({ projects }: { projects: Frontmatter[] }) {
  return (
    <div className="space-y-6">
      <Image
        src="/about.png"
        alt="About"
        width={576}
        height={150}
        className="w-full h-[150px] object-cover object-bottom rounded-lg"
      />
      <section>
        <p className="text-[14px] leading-relaxed mb-4">
          I build and ship products from zero. Spent the last 6 years in crypto and startups across product and growth.
          Now building small tools and AI workflows to help companies move faster. Currently living in Singapore.
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
    <div className="space-y-6">
      <Image
        src="/writing.png"
        alt="Writing"
        width={576}
        height={150}
        className="w-full h-[150px] object-cover object-top rounded-lg"
      />
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

const favorites = [
  { name: 'Apple', url: 'https://apple.com', why: "Do one thing well, don't apologize for it." },
  { name: 'Muji', url: 'https://muji.com', why: 'No-brand design that feels like a deep breath.' },
  { name: 'Aesop', url: 'https://aesop.com', why: 'Sensory experience that turns routine into ritual.' },
  { name: 'Leica', url: 'https://leica-camera.com', why: 'Mechanical precision meets obsessive craftsmanship.' },
  { name: 'Patagonia', url: 'https://patagonia.com', why: 'Activism baked into the product, not bolted on.' },
  { name: 'Linear', url: 'https://linear.app', why: "The most thoughtful software interface I've ever used." },
  { name: 'Blade Runner 2049', url: 'https://imdb.com/title/tt1856101', why: 'Silence as narrative, patience as spectacle.' },
  { name: 'The Social Network', url: 'https://imdb.com/title/tt1285016', why: 'Sorkin making ambition sound like music.' },
  { name: 'Parasite', url: 'https://imdb.com/title/tt6751668', why: 'Every floor is a different universe.' },
]

function FavoritesTab() {
  return (
    <div className="space-y-6">
      <Image
        src="/favourites.png"
        alt="Favourites"
        width={576}
        height={150}
        className="w-full h-[150px] object-cover object-top rounded-lg"
      />
      <div className="space-y-3">
      {favorites.map((item) => (
        <div key={item.name} className="flex items-baseline justify-between gap-4">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline underline-offset-4"
          >
            {item.name}
          </a>
          <span className="text-zinc-400 dark:text-zinc-500 text-[14px] text-right shrink-0 ml-4">
            {item.why}
          </span>
        </div>
      ))}
      </div>
    </div>
  )
}

function ConnectTab() {
  return (
    <div className="space-y-6">
      <Image
        src="/connect.png"
        alt="Connect"
        width={576}
        height={150}
        className="w-full h-[150px] object-cover object-top rounded-lg"
      />
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
