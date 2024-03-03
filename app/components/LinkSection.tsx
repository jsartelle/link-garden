import styles from './LinkSection.module.scss'

export interface LinkSectionProps {
  title: string
  children: React.ReactNode
}

export default function LinkButton({ title, children }: LinkSectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      <div className={styles.links}>{children}</div>
    </section>
  )
}
