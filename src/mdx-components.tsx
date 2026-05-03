import Link from 'next/link'

type MDXComponents = Record<string, React.ComponentType<any>>

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }) => (
      <Link href={href || '#'}>{children}</Link>
    ),
    ...components,
  }
}
