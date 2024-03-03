'use client'

export interface ThemeSelectProps {
  themes: string[]
  startingTheme?: string
}

function setTheme(theme: string) {
  const themeLink = document.getElementById(
    'linkGardenSelectedTheme'
  ) as HTMLLinkElement
  themeLink.href = `/themes/${theme}`
  document.cookie = `linkGardenSelectedTheme=${theme}`
}

export default function ThemeSelect({
  themes,
  startingTheme,
}: ThemeSelectProps) {
  return (
    <select
      defaultValue={startingTheme}
      onChange={(e) => setTheme(e.target.value)}
    >
      {themes.map((theme, index) => (
        <option key={index} value={theme}>
          {theme.replace('.css', '')}
        </option>
      ))}
    </select>
  )
}
