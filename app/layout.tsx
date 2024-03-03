import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import config from '@/config/config.json'
import '@/config/base.scss'

const inter = Inter({ subsets: ['latin'] })

const icon = require(`@/config/images/${
  config.metadata.icon ?? 'leaf.svg'
}`).default
const appleIcon = require(`@/config/images/${
  config.metadata.appleIconPNG ?? 'leaf.png'
}`).default

export const metadata: Metadata = {
  ...config.metadata,
  icons: {
    icon: {
      url: icon.src,
    },
    apple: {
      url: appleIcon.src,
    },
  },
}

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
