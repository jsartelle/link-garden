import { readdirSync } from 'fs'
import { cookies } from 'next/headers'
import config from '@/config/config.json'

export default function useThemes() {
  const themes = readdirSync('./public/themes')

  const pageLoadTheme =
    cookies().get('linkGardenSelectedTheme')?.value ??
    config.app?.defaultTheme ??
    themes[0]

  return { themes, pageLoadTheme }
}
