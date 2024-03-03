'use client'

export interface ThemeSelectProps {
  themes: string[]
  defaultTheme?: string
}

export default function ThemeSelect({
  themes,
  defaultTheme,
}: ThemeSelectProps) {
  function setTheme(theme: string) {
    const themeLink = document.getElementById(
      'linkGardenSelectedTheme'
    ) as HTMLLinkElement
    themeLink.href = `/themes/${theme}`
  }

  return (
    <select
      defaultValue={defaultTheme ?? themes[0]}
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
