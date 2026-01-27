import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CLIQK | Twenty Years of Technology, Transformed',
  description: 'AI consulting and strategic advisory from Mark Hernandez. Two decades of translating complex technology into business results—from smart homes to Fortune 500 brand activations to AI infrastructure.',
  keywords: ['AI consulting', 'fractional CTO', 'technology strategy', 'Mark Hernandez', 'CLIQK'],
  authors: [{ name: 'Mark Hernandez' }],
  openGraph: {
    title: 'CLIQK | Twenty Years of Technology, Transformed',
    description: 'AI consulting and strategic advisory. Two decades of translating complex technology into business results.',
    url: 'https://cliqk.com',
    siteName: 'CLIQK',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
