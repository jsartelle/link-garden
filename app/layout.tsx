import { readdirSync } from 'fs'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import config from '@/config/config.json'
import '@/config/base.scss'
import '@/app/globals.scss'

const themes = readdirSync('./public/themes/')

const icon = require(`@/config/images/${
  config.app?.icon ?? 'leaf.svg'
}`).default
const appleIcon = require(`@/config/images/${
  config.app?.appleIconPNG ?? 'leaf.png'
}`).default

export const metadata: Metadata = {
  title: config.app?.title ?? 'Link Garden',
  description: config.app?.description ?? 'A place for all your links',
  icons: {
    icon: {
      url: icon.src,
    },
    apple: {
      url: appleIcon.src,
    },
  },
}

const rootStyle: any = {
  '--link-garden-font': config.app?.font,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme =
    cookies().get('linkGardenSelectedTheme')?.value ??
    config.app?.defaultTheme ??
    themes[0]

  return (
    <html lang="en" style={rootStyle}>
      <head>
        <link
          rel="stylesheet"
          id="linkGardenSelectedTheme"
          href={`/themes/${theme}`}
        />
        {config.app?.font && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href={`https://fonts.googleapis.com/css2?family=${config.app.font}&display=swap`}
              rel="stylesheet"
            />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}
