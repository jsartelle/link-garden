import Image from 'next/image'

export interface LinkButtonProps {
  title?: string
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
    <a href={href} className="link-button">
      {image && (
        <Image
          className="link-button-image"
          src={require(`@/config/images/${image}`).default}
          alt=""
          width={64}
          draggable={false}
        />
      )}
      <div>
        {title && <div className="link-button-title">{title}</div>}
        {description && (
          <div className="link-button-description">{description}</div>
        )}
      </div>
    </a>
  )
}
