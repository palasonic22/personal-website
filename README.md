# Ezekiel Lee — Personal Website

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Themes:** next-themes (light/dark)
- **Content:** MDX + gray-matter + react-markdown

## Structure

```
src/app/page.tsx                  # Single page: header + intro + tabs + content
src/app/writing/[slug]/page.tsx   # Individual essay pages (only separate URL)
src/components/site-header.tsx    # Sticky header, intro block, tab nav
src/components/tabs-client.tsx    # Client-side tab switching + all tab content
src/lib/content.ts                # MDX parsing (writing + projects)
content/writing/                  # Writing posts (.mdx)
content/projects/                 # Project cards (.mdx)
```

## How it works

- Single page at `/` with client-side tab switching (About, Writing, Favourites, Connect)
- Only individual essays break out to `/writing/[slug]`
- Content lives in `content/` as `.mdx` files — add a file, it appears on the index
- Sticky header: avatar + name + theme toggle + "Get in touch" button

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Design

- Ultra-minimal, no UI library
- `max-w-2xl` container, 14px body text
