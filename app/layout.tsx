import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jersey Elite Coatings - Professional Epoxy Flooring',
  description: 'Transform your space with professional epoxy flooring services in North Jersey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
