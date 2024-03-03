import Image from 'next/image'
import styles from './LinkButton.module.scss'

export interface LinkButtonProps {
  title: string
  href: string
  description?: string
  image?: string
}

export default function LinkButton({
  title,
  href,
  description,
  image,
}: LinkButtonProps) {
  return (
    <a href={href} className={styles.button}>
      {image && (
        <Image
          src={require(`@/config/images/${image}`)}
          alt=""
          width={64}
          height={64}
          className={styles.icon}
        />
      )}
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </a>
  )
}
