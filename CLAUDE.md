@AGENTS.md

# Project: Personal Website (ezekiellee.com)

## What's Built
- **Next.js 16** App Router + **Tailwind CSS 4** + **TypeScript**
- **MDX** for content (`@next/mdx`, `gray-matter`) — writing and projects stored as `.mdx` files
- **next-themes** for light/dark mode (light default, toggle persisted)
- Dev server runs on `localhost:3000`

## Architecture Decisions
- **No shadcn/ui** — layout is ultra-minimal, plain Tailwind is sufficient
- **No /built route** — projects live as a section on the About page (following cleonwong.com pattern)
- **react-markdown** for rendering MDX content in writing detail pages
- **Scroll-triggered header blur** — fixed header, transparent at top, frosted glass on scroll
- **Color tokens**: `#221A06` (dark text), `#FFFFFF` (light bg), `#376D49` (forest green accent), `#1a1408` (dark bg)
- **Font**: Geist (Next.js default sans-serif)

## File Structure (key paths)
- `src/app/layout.tsx` — Root layout with ThemeProvider, Header, Footer
- `src/app/page.tsx` — Home: hero, tools, writing preview
- `src/app/writing/page.tsx` — Writing index (date + title list)
- `src/app/writing/[slug]/page.tsx` — Individual writing page
- `src/app/about/page.tsx` — Bio + timeline + projects section
- `src/app/connect/page.tsx` — Social/contact links
- `src/components/header.tsx` — Nav with blur-on-scroll
- `src/components/theme-toggle.tsx` — Dark/light switcher
- `src/lib/content.ts` — MDX parsing, sorting, frontmatter types
- `content/writing/` — Writing MDX files
- `content/projects/` — Project MDX files

## Content (placeholder)
- 2 writing posts: "Why I Left Fintech to Build Small", "What I Learned Shipping My First AI Product"
- 3 projects: MonkCard, Neatwork, Bitget Wallet Card

## What's Done
- All pages built and rendering
- MDX content layer working (add new .mdx → appears on index)
- Dark/light mode toggle with persistence
- Scroll blur header effect
- Mobile responsive (max-w-2xl container)
- 404 page

## What's Next / Needs Work
- **Real content** — replace placeholder MDX with actual writing and project details
- **Avatar image** — currently an "E" circle placeholder in header
- **Connect links** — update with real email, LinkedIn, X URLs
- **Design polish** — fine-tune colors, spacing, fonts to match taste
- **SEO** — Open Graph metadata, sitemap.xml, robots.txt, RSS feed
- **Deploy** — connect to Vercel, set up GitHub repo
