import React from "react"
import type { Metadata } from 'next'
import { Fraunces, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://archie.ai'),
  title: {
    default: 'Archie — AI-Powered Renovation & Construction Guide',
    template: '%s | Archie',
  },
  description: 'Archie is your AI pocket architect. Get expert guidance on permits, budgets, contractors, and timelines for your renovation or construction project.',
  keywords: ['AI architect', 'renovation guide', 'construction project management', 'home renovation AI', 'permit navigation', 'construction budget planner', 'AI construction assistant'],
  openGraph: {
    type: 'website',
    title: 'Archie — AI-Powered Renovation & Construction Guide',
    description: 'From permits to punch lists, get expert AI guidance for your renovation or construction project.',
    siteName: 'Archie',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Archie — Your AI Pocket Architect' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archie — AI-Powered Renovation & Construction Guide',
    description: 'From permits to punch lists, get expert AI guidance for your renovation or construction project.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://archie.ai/#organization',
      name: 'Archie',
      url: 'https://archie.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://archie.ai/icon.svg',
      },
      description: 'AI-powered pocket architect helping homeowners navigate renovations and construction projects.',
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://archie.ai/#website',
      url: 'https://archie.ai',
      name: 'Archie',
      publisher: { '@id': 'https://archie.ai/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Archie',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'AI-powered renovation and construction project guide. Expert guidance on permits, budgets, contractors, and timelines.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free to start. No credit card required.',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '500',
        bestRating: '5',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${sora.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
