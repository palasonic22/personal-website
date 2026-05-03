import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Ezekiel Lee — Product Builder',
    template: '%s | Ezekiel Lee',
  },
  description: 'I build and ship products from zero. Spent the last 6 years in crypto and startups across product and growth. Now building small tools and AI workflows to help companies move faster. Currently living in Singapore.',
  metadataBase: new URL('https://ezekiellee.com'),
  openGraph: {
    title: 'Ezekiel Lee — Product Builder',
    description: 'I build and ship products from zero. Spent the last 6 years in crypto and startups across product and growth. Now building small tools and AI workflows to help companies move faster. Currently living in Singapore.',
    url: 'https://ezekiellee.com',
    siteName: 'Ezekiel Lee',
    images: ['/opengraph.png'],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ezekiel Lee — Product Builder',
    description: 'I build and ship products from zero. Spent the last 6 years in crypto and startups across product and growth. Now building small tools and AI workflows to help companies move faster. Currently living in Singapore.',
    creator: '@send_eze',
    site: '@send_eze',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple_icon.png',
  },
  authors: [{ name: 'Ezekiel Lee' }],
  creator: 'Ezekiel Lee',
  publisher: 'Ezekiel Lee',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ezekiel Lee',
    url: 'https://ezekiellee.com',
    sameAs: [
      'https://linkedin.com/in/ezekielleeyf',
      'https://x.com/send_eze',
    ],
    jobTitle: 'Product Builder',
    worksFor: {
      '@type': 'Organization',
      name: 'elyf',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Singapore',
      addressCountry: 'SG',
    },
    email: 'mailto:elyfstyle@gmail.com',
    description: 'I build and ship products from zero. Spent the last 6 years in crypto and startups across product and growth.',
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased min-h-screen flex flex-col text-[14px]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
