import type { Metadata } from 'next'
import config from '@/config/config.json'
import useThemes from '@/app/util/themes'
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
  '--link-garden-google-font': config.app?.googleFont,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { pageLoadTheme } = useThemes()

  return (
    <html lang="en" style={rootStyle}>
      <head>
        {process.env.NODE_ENV !== 'development' && (
          <link
            rel="stylesheet"
            id="linkGardenSelectedTheme"
            href={`/themes/${pageLoadTheme}`}
          />
        )}
        {config.app?.googleFont && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href={`https://fonts.googleapis.com/css2?family=${config.app.googleFont}&display=swap`}
              rel="stylesheet"
            />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}
