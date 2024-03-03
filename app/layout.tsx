import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import config from '@/config/config.json'
import '@/config/base.scss'

// TODO easy font customization
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
      <head>
        <link
          rel="stylesheet"
          id="linkGardenSelectedTheme"
          href={`/themes/${config.metadata.defaultTheme}`}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
