import { readdirSync } from 'fs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import config from '@/config/config.json'
import '@/config/base.scss'
import '@/app/globals.scss'

// TODO easy font customization
const inter = Inter({ subsets: ['latin'] })

const icon = require(`@/config/images/${
  config.metadata?.icon ?? 'leaf.svg'
}`).default
const appleIcon = require(`@/config/images/${
  config.metadata?.appleIconPNG ?? 'leaf.png'
}`).default

const themes = readdirSync('./public/themes/')

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
  const theme =
    cookies().get('linkGardenSelectedTheme')?.value ?? config.metadata?.defaultTheme ?? themes[0]

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          id="linkGardenSelectedTheme"
          href={`/themes/${theme}`}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
