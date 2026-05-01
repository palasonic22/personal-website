import Link from 'next/link'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }) => (
      <Link href={href || '#'}>{children}</Link>
    ),
    ...components,
  }
}
