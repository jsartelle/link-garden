import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
export { default as metadata } from '@/config/metadata.json'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
