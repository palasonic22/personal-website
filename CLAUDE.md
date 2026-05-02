@AGENTS.md

# Project: Ezekiel Lee — Personal Website (ezekiellee.com)

## What's Built
- **Next.js 16** App Router + **Tailwind CSS 4** + **TypeScript**
- **MDX** for content (`gray-matter`, `react-markdown`) — writing and projects stored as `.mdx` files
- **next-themes** for light/dark mode (light default, toggle persisted)
- Single-page layout with client-side tab switching, modeled after cleonwong.com
- Dev server runs on `localhost:3000`

## Architecture Decisions
- **No shadcn/ui** — layout is ultra-minimal, plain Tailwind is sufficient
- **No separate routes for main pages** — /about, /writing, /connect, /favorites all render as tabs on `/`
- **Only `/writing/[slug]` has a separate URL** — individual essays navigate away from the single page
- **No frosted glass blur on header** — tested but reverted due to visible edge artifacts
- **Color tokens**: `#221A06` (dark text), `#FFFFFF` (light bg), `#376D49` (forest green accent), `#1a1408` (dark bg)
- **Font**: Geist (Next.js default sans-serif)
- **Sticky header**: only the top row (avatar + name + toggle + button) is sticky; intro, nav, and content scroll behind it
- **Body text capped at 14px** everywhere — no `text-base` or larger
- **Container width**: `max-w-2xl` centered
- **Default landing tab**: Writing (not About)

## File Structure (key paths)
- `src/app/page.tsx` — Server component: fetches MDX data, renders TabsClient
- `src/app/layout.tsx` — Minimal root layout with ThemeProvider
- `src/app/writing/[slug]/page.tsx` — Individual writing page with full header
- `src/app/not-found.tsx` — 404 page
- `src/components/site-header.tsx` — SiteHeader (sticky), Intro (Me in 10 seconds + Current AI), TabNav
- `src/components/tabs-client.tsx` — Client component: tab state + About/Writing/Favourites/Connect tab content
- `src/lib/content.ts` — MDX parsing, sorting, frontmatter types (server-only, uses `fs`)
- `content/writing/` — Writing MDX files
- `content/projects/` — Project MDX files

## Content (placeholder)
- 2 writing posts: "Why I Left Fintech to Build Small", "What I Learned Shipping My First AI Product"
- 3 projects: MonkCard, Neatwork, Bitget Wallet Card

## What's Done
- All pages built and rendering
- MDX content layer working (add new .mdx → appears on index)
- Dark/light mode toggle with persistence
- Single-page tab switching (no routing between tabs)
- Sticky header with avatar + name + toggle + "Get in touch"
- Writing detail pages have full header, aligned with home page width
- Clean minimal aesthetic, 14px body text
- README and CLAUDE.md with context

## What's Next / Needs Work
- **Real content** — replace placeholder MDX with actual writing and project details
- **Avatar image** — currently an "E" circle placeholder in header
- **Connect links** — update with real email, LinkedIn, X URLs
- **Design polish** — fine-tune colors, spacing, fonts to match taste
- **SEO** — Open Graph metadata, sitemap.xml, robots.txt, RSS feed
- **Deploy** — connect to Vercel, set up GitHub repo

## Reference Design
- Modeled after cleonwong.com — wide layout, lots of whitespace, large readable type, nav tabs with underline, section labels uppercase muted grey
