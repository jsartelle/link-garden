import LinkButton from '@/app/components/LinkButton'
import LinkSection from '@/app/components/LinkSection'
import styles from '@/app/page.module.scss'
import links from '@/config/links.json'

export default async function Home() {
  return (
    <main className={styles.main}>
      {links.map(({ title, content }, index) => (
        <LinkSection key={index} title={title}>
          {content.map((link, index) => (
            <LinkButton key={index} {...link} />
          ))}
        </LinkSection>
      ))}
    </main>
  )
}
