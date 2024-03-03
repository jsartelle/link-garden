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
          src={require(`@/config/images/${image}`).default}
          alt=""
          width={64}
          className={styles.icon}
          draggable={false}
        />
      )}
      <div>
        {title && <div>{title}</div>}
        {description && <div>{description}</div>}
      </div>
    </a>
  )
}
