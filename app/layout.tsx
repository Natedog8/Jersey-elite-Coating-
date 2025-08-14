import type { Metadata } from 'next'
import { Inter, Gelasio } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const gelasio = Gelasio({ 
  subsets: ['latin'],
  variable: '--font-gelasio',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Jersey Elite Coatings - Professional Epoxy Flooring Services',
  description: 'Transform your space with professional epoxy flooring services in North Jersey. Residential and commercial solutions with lifetime warranty.',
  keywords: 'epoxy flooring, garage floors, basement coating, commercial flooring, North Jersey, Jersey Elite Coatings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${gelasio.variable} font-inter`}>
        {children}
      </body>
    </html>
  )
}
