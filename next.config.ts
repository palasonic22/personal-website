import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
