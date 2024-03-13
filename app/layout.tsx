import type { Metadata } from 'next'
import config from '@/config/config.json'
import useThemes from '@/app/util/themes'
import '@/config/base.scss'
import '@/app/globals.scss'

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
  '--link-garden-font-override': config.app?.fontOverride,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { pageLoadTheme } = useThemes()

  // allows live reload during theme development
  if (config.app?.devTheme) {
    require(`@/public/themes/${config.app?.devTheme}`)
  }

  return (
    <html lang="en" style={rootStyle}>
      <head>
        <link
          rel="stylesheet"
          id="linkGardenSelectedTheme"
          href={`/themes/${pageLoadTheme}`}
        />
        {config.app?.fontOverride && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href={`https://fonts.googleapis.com/css2?family=${config.app.fontOverride}&display=swap`}
              rel="stylesheet"
            />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}
