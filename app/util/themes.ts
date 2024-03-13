import { readdirSync } from 'fs'
import { cookies } from 'next/headers'
import config from '@/config/config.json'

export default function useThemes() {
  const themes = readdirSync('./public/themes')

  const cookieTheme = cookies().get('linkGardenSelectedTheme')?.value
  const defaultTheme = config.app?.defaultTheme

  const pageLoadTheme =
    (themes.includes(cookieTheme!) && cookieTheme) ||
    (themes.includes(defaultTheme) && defaultTheme) ||
    themes[0]

  return { themes, pageLoadTheme }
}
