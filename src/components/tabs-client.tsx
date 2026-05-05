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
      <SiteHeader onContactClick={() => setActiveTab('connect')} />
      <Intro />
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="min-h-[300px]">
        {activeTab === 'about' && <AboutTab />}
        {activeTab === 'writing' && <WritingTab writings={writings} />}
        {activeTab === 'favorites' && <FavoritesTab />}
        {activeTab === 'connect' && <ConnectTab />}
      </div>
      <Footer />
    </>
  )
}

function AboutTab() {
  return (
    <div className="space-y-6">
      <Image
        src="/about.png"
        alt="About"
        width={576}
        height={150}
        className="w-full h-[150px] object-cover object-bottom rounded-lg"
      />
      <section className="space-y-4">
        <p className="text-[14px] leading-relaxed">
          Hey, Ezekiel here from Singapore.
        </p>
        <p className="text-[14px] leading-relaxed">
          I like taking messy ideas and turning them into real things people use.
        </p>
        <p className="text-[14px] leading-relaxed">
          I’ve spent the last 6 years in crypto and startups, working across product and growth.
          Most of it was chaotic, with unclear problems, fast timelines, and needing to just ship
          something that works.
        </p>
        <p className="text-[14px] leading-relaxed">
          Right now I’m at Bitget Wallet, working on crypto payments. I care a lot about what makes
          something click — and how it actually spreads.
        </p>
        <p className="text-[14px] leading-relaxed">
          Before that, I was building trading products on Solana, focused on NFTs and memecoins.
          It was a crash course in distribution — capturing attention, driving user behavior, and
          turning that into real outcomes, including millions in trading fees and capital raised.
        </p>
        <p className="text-[14px] leading-relaxed">
          Over time, I realised I’m most drawn to 0→1 work — getting close to the problem, moving
          fast, and doing whatever it takes to get something out.
        </p>
        <p className="text-[14px] leading-relaxed">
          Lately I’ve been building smaller tools with AI, end-to-end. Mostly to help friends and
          businesses save time and improve workflows.
        </p>
        <p className="text-[14px] leading-relaxed">
          I care about simple things that work.
        </p>
        <p className="text-[14px] leading-relaxed">
          Still figuring things out, but mostly just building. Outside of work, I’m with my wife,
          usually thinking about the next football game or when I can get out to surf.
        </p>
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          Timeline
        </h2>
        <div className="space-y-6 mt-4">
          <div>
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-zinc-400 dark:text-zinc-500 text-sm">2024 — Present</span>
            </div>
            <div className="font-medium">Bitget Wallet</div>
            <div className="text-zinc-400 dark:text-zinc-500 text-sm mb-2">Product, Growth &amp; Operations</div>
            <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Building and scaling 0→1 consumer crypto products to millions of users, across payments and user-facing systems.
            </p>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-zinc-400 dark:text-zinc-500 text-sm">2022 — 2024</span>
            </div>
            <div className="font-medium">Web3.0 Projects on Solana</div>
            <div className="text-zinc-400 dark:text-zinc-500 text-sm mb-2">Product Builder</div>
            <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Built and shipped on-chain products across NFTs and trading, focusing on user behavior, onboarding, and growth systems.
            </p>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-zinc-400 dark:text-zinc-500 text-sm">2021 — 2022</span>
            </div>
            <div className="font-medium">Prop.ly</div>
            <div className="text-zinc-400 dark:text-zinc-500 text-sm mb-2">Product Manager</div>
            <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Worked on product and user experience in a real estate technology startup.
            </p>
          </div>
        </div>
      </section>
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
      {writings.length > 0 ? (
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
        </div>
      ) : (
        <p className="text-zinc-400 dark:text-zinc-500 text-[14px]">
          Coming soon.
        </p>
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

const favorites = [
  { name: 'How to Get Rich (Without Getting Lucky) · Naval Ravikant', url: 'https://twitter.com/naval/status/1002103364653776896', why: 'Naval explains how to get rich (long term) in this legendary Twitter thread. Wealth through leverage and judgment, not luck.' },
  { name: 'Your Life in Weeks · Tim Urban', url: 'https://waitbutwhy.com/2014/05/life-weeks.html', why: 'Tim Urban talks about how life is truly short and why we should view our life in matter of weeks.' },
  { name: 'How to Be Useful · Derek Sivers', url: 'https://sive.rs/useful', why: 'Derek Sivers shares 4 ways to be useful to others.' },
  { name: 'Life Advice (Reddit Comment) · Ryans01', url: 'https://www.reddit.com/r/NonZeroDay/comments/1qbxvz/the_gospel_of_uryans01_helpful_advice_for_anyone/', why: 'One of the best life advice I\'ve ever found — in a Reddit comment.' },
  { name: 'Most People Won\'t · Bryce.vc', url: 'https://bryce.vc/post/64889707700/most-people-wont', why: 'Story of an Uber designer. Most people won\'t do what it takes.' },
  { name: 'Life Outside the Lines · Bobby Hundreds', url: 'https://bobbyhundreds.substack.com/p/life-outside-the-lines', why: 'Bobby Hundreds is an idol of mine — a lot of my life has been influenced by him. This post is about his 20 years in streetwear and how after he joined Disney, all roads led to this. Like Steve Jobs said, you can\'t connect the dots forward, only backwards.' },
  { name: 'Tim Ferriss Show · Chris Bosh', url: 'https://tim.blog/podcast/chris-bosh/', why: 'Chris Bosh on championships, adaptability, and winning.' },
  { name: 'What Are You Doing With Your Life? · Kurzgesagt', url: 'https://www.youtube.com/watch?v=lzL24vTqr0E', why: 'Kurzgesagt on existential questions, beautifully animated.' },
  { name: 'Eden Hazard on Retirement', url: 'https://youtube.com/shorts/Djp6SxWyj6g?si=wBEtoxmBKFz347N1', why: 'He\'s happy, doesn\'t miss football at all. For a pro athlete, always thought they\'d yearn for the game after retirement — but his alignment and family are just right.' },
  { name: 'Character Beats Talent · Johan "N0tail" Sundstein', url: 'https://www.amazon.com/CHARACTER-BEATS-TALENT-Bertheussen-ebook/dp/B08CVXQX8V', why: 'A duo together for a decade, then a sudden betrayal before The International. N0tail rebuilt a team from scratch after his best friend left and still won the whole tournament.' },
  { name: 'Tyler the Creator\'s Email to Labels', url: 'https://www.reddit.com/r/tylerthecreator/s/ZVVwyv3h10', why: 'Shows the conviction he had early on. He was very confident about his work and it just took the whole world some time to realize him. He really believed in himself. One of the greatest influencers in my life — Tyler the Creator.' },
  { name: 'The Big Lie About Competition', url: 'https://x.com/aaaycube/status/1939352717157372384', why: 'A lot of times you think the whole world is competing with you, but in fact only a handful truly are.' },
  { name: 'Life Satisfaction & Personality · NTFabiano', url: 'https://x.com/NTFabiano/status/1963202446831858051', why: 'Research showing that life satisfaction is highly consistent with your personality. There are things for you to keep doing to increase it.' },
  { name: 'Richard Feynman\'s Letter to His Wife', url: 'https://www.youtube.com/shorts/l44jBn6R1A4', why: 'An amazing letter that Feynman wrote to his wife after she passed.' },
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
      <blockquote className="text-[14px] italic text-zinc-400 dark:text-zinc-500 border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">
        "Your influences are all worth sharing because they clue people in to who you are and what you do—sometimes even more than your own work."
        <footer className="text-zinc-500 dark:text-zinc-400 mt-2 not-italic">— Austin Kleon</footer>
      </blockquote>
      <p className="text-[14px] text-zinc-400 dark:text-zinc-500">
        Here's a list of my favourite links that have influenced me.
      </p>
      <div className="space-y-6">
        {favorites.map((item) => (
          <div key={item.name} className="space-y-1">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline underline-offset-4"
            >
              {item.name}
            </a>
            <p className="text-zinc-400 dark:text-zinc-500 text-[14px] leading-relaxed">
              {item.why}
            </p>
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
        I'm always open to interesting conversations. Reach out if you want to talk AI, products,
        building, or startups. I also play 11-a-side football around Singapore. If you have a game,
        feel free to reach out.
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
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ezekiellyf', external: true },
  { label: 'Twitter', href: 'https://x.com/send_eze', external: true },
]

function ExternalArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-foreground transition-colors">
      <path d="M7 17l9.2-9.2M17 17V7H7" />
    </svg>
  )
}
