import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Open_Sans, Ubuntu } from 'next/font/google'
import './globals.css'

const body = Open_Sans({ subsets: ['latin'], variable: '--font-body' })
const display = Ubuntu({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Linz School and College | Primary to FSc & A-Levels',
  description:
    'Linz School and College offers Primary, Middle, Matriculation, O-Levels, FSc (Pre-Medical, Pre-Engineering), ICS and A-Levels. Admissions 2026 are open.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0a2c3d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
