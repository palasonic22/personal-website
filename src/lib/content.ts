import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Frontmatter {
  title: string
  date: string
  description: string
  tags?: string[]
  slug: string
}

function readDir(dir: string): string[] {
  const fullDir = path.join(process.cwd(), dir)
  if (!fs.existsSync(fullDir)) return []
  return fs
    .readdirSync(fullDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => path.join(dir, f))
}

function parseFile(filePath: string): Frontmatter {
  const fullPath = path.join(process.cwd(), filePath)
  const raw = fs.readFileSync(fullPath, 'utf-8')
  const { data } = matter(raw)
  return {
    ...data,
    slug: path.basename(filePath, '.mdx'),
  } as Frontmatter
}

export function getSortedWriting(): Frontmatter[] {
  return readDir('content/writing')
    .map(parseFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getSortedProjects(): Frontmatter[] {
  return readDir('content/projects')
    .map(parseFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getContent(slug: string, dir: 'writing' | 'projects') {
  const fullPath = path.join(process.cwd(), `content/${dir}/${slug}.mdx`)
  const raw = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(raw)
  return { frontmatter: data as Frontmatter, content }
}
