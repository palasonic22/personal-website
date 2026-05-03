'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const navItems = [
  { id: 'writing' as const, label: 'Thoughts' },
  { id: 'about' as const, label: 'About' },
  { id: 'favorites' as const, label: 'Favourites' },
  { id: 'connect' as const, label: 'Connect' },
]

type TabId = (typeof navItems)[number]['id']

export function SiteHeader() {
  return (
    <header className="w-full sticky top-0 z-50 bg-background py-6 flex items-center">
      <div className="flex items-center gap-[10px]">
        <Image
          src="/pfp.png"
          alt="Ezekiel Lee"
          width={48}
          height={48}
          className="rounded-full shrink-0 pointer-events-none select-none"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
        <Link href="/" className="hit-area hit-area-3 font-medium text-[17px] hover:opacity-70 transition-opacity">
          Ezekiel Lee
        </Link>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Link
          href="mailto:hello@ezekiellee.com"
          className="hit-area hit-area-3 px-4 py-1.5 border border-zinc-300 dark:border-zinc-600 rounded-full text-[13px] hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Get in touch
        </Link>
      </div>
    </header>
  )
}

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Show placeholder during SSR to prevent layout shift
  if (!mounted) {
    return <button className="hit-area hit-area-3 p-1.5 rounded-full" aria-label="Toggle theme" disabled />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="hit-area hit-area-3 p-1.5 rounded-full text-foreground hover:bg-foreground hover:text-background dark:hover:bg-zinc-800 dark:hover:text-foreground transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}

export function Intro() {
  return (
    <div className="space-y-6 mb-8">
      <section>
        <h2 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
          Me in 10 seconds
        </h2>
        <p className="text-[14px] leading-relaxed">
          I build and ship products from zero. Spent the last 6 years in crypto and startups across product and growth.
          Now building small tools and AI workflows to help companies move faster. Currently living in Singapore.
        </p>
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
          Current AI of choice
        </h2>
        <p className="text-[14px] leading-relaxed">
          Next.js + TypeScript + Tailwind: For building.
          Sonnet 4.6: For all things writing.
        </p>
      </section>
    </div>
  )
}

export function TabNav({ activeTab, onTabChange }: { activeTab: TabId; onTabChange: (tab: TabId) => void }) {
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 pb-0 mb-8">
      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`hit-area hit-area-3 pb-2 text-sm transition-colors duration-200 ${
              activeTab === item.id
                ? 'text-foreground border-b-[3px] border-foreground -mb-px'
                : 'text-zinc-400 dark:text-zinc-500 hover:text-foreground'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
