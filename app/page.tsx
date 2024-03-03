import Image from 'next/image'
import LinkButton from '@/app/components/LinkButton'
import LinkSection from '@/app/components/LinkSection'
import styles from '@/app/page.module.scss'
import config from '@/config/config.json'
import links from '@/config/links.json'

export default async function Home() {
  return (
    <>
      {config.profile && (
        <header className={styles.profile}>
          {config.profile.image && (
            <Image
              className={styles.profilePic}
              src={require(`@/config/images/${config.profile.image}`).default}
              alt=""
              width={96}
              height={96}
              draggable={false}
            />
          )}
          {config.profile.title && <h1>{config.profile.title}</h1>}
          {config.profile.description && <p>{config.profile.description}</p>}
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
    </>
  )
}
