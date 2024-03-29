'use client'

export interface ThemeSelectProps {
  themes: string[]
  pageLoadTheme?: string
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
  pageLoadTheme,
}: ThemeSelectProps) {
  return (
    <select
      className="theme-select"
      aria-labelledby="link-garden-theme-select-header"
      defaultValue={pageLoadTheme}
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
