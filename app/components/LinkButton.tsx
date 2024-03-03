import Image, { StaticImageData } from 'next/image'
import styles from './LinkButton.module.scss'

export interface LinkButtonProps {
  title: string
  href: string
  description?: string
  icon?: string
}

export default function LinkButton({
  title,
  href,
  description,
  icon,
}: LinkButtonProps) {
  return (
    <a href={href} className={styles.button}>
      {icon && (
        <Image
          src={require(`@/config/icons/${icon}`)}
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
