import { readdirSync } from 'fs'
import Image from 'next/image'
import LinkButton from '@/app/components/LinkButton'
import LinkSection from '@/app/components/LinkSection'
import ThemeSelect from '@/app/components/ThemeSelect'
import config from '@/config/config.json'
import links from '@/config/links.json'

const themes = readdirSync('./public/themes/')

export default function Home() {
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
        {links.map(({ title, content }, index) => (
          <LinkSection key={index} title={title}>
            {content.map((link, index) => (
              <LinkButton key={index} {...link} />
            ))}
          </LinkSection>
        ))}
      </main>
      <footer>
        <ThemeSelect
          themes={themes}
          defaultTheme={config.metadata?.defaultTheme}
        />
      </footer>
    </>
  )
}
