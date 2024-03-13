import { readdirSync } from 'fs'
import { cookies } from 'next/headers'
import config from '@/config/config.json'

export default function useThemes() {
  const themes = readdirSync('./public/themes')

  const devTheme =
    process.env.NODE_ENV === 'development' && config.app?.devTheme
  const cookieTheme = cookies().get('linkGardenSelectedTheme')?.value
  const defaultTheme = config.app?.defaultTheme

  const pageLoadTheme =
    (devTheme && themes.includes(devTheme) && devTheme) ||
    (themes.includes(cookieTheme!) && cookieTheme) ||
    (themes.includes(defaultTheme) && defaultTheme) ||
    themes[0]

  return { themes, pageLoadTheme, devTheme }
}
