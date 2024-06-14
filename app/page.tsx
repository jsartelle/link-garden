import Image from 'next/image'
import HoverCoordinates from '@/app/components/HoverCoordinates'
import LinkButton from '@/app/components/LinkButton'
import LinkSection from '@/app/components/LinkSection'
import ThemeSelect from '@/app/components/ThemeSelect'
import config from '@/config/config.json'
import useThemes from '@/app/util/themes'

export default function Home() {
  const { themes, pageLoadTheme } = useThemes()
  console.log('themes (in page)', themes)

  const dev = process.env.NODE_ENV === 'development'

  return (
    <>
      {/* TODO markdown support for profile & links */}
      {config.profile && (
        <header className="profile">
          {config.profile.image && (
            <Image
              className="profile-image"
              src={require(`@/config/images/${config.profile.image}`).default}
              alt=""
              width={128}
              height={128}
              priority
              draggable={false}
            />
          )}
          {config.profile.title && (
            <h1 className="profile-title">{config.profile.title}</h1>
          )}
          {config.profile.description && (
            <p className="profile-description">{config.profile.description}</p>
          )}
        </header>
      )}
      <main>
        {config.links.map(({ title, content }, index) => (
          <LinkSection key={index} title={title}>
            {content.map((link, index) => (
              <HoverCoordinates className="link-button-wrapper" key={index}>
                <LinkButton {...link} />
              </HoverCoordinates>
            ))}
          </LinkSection>
        ))}
      </main>
      {themes.length > 1 && (
        <footer>
          <h2
            id="link-garden-theme-select-header"
            className="theme-select-header"
            data-tooltip={
              dev
                ? 'Theme switching is disabled in development mode.\n\nEdit themes.js to live reload your theme during development.'
                : null
            }
          >
            Select Theme
          </h2>
          <HoverCoordinates className="theme-select-wrapper">
            <ThemeSelect themes={themes} pageLoadTheme={pageLoadTheme} />
          </HoverCoordinates>
        </footer>
      )}
    </>
  )
}
