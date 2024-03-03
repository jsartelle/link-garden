import Image from 'next/image'
import ExternalLink from '@/app/images/external-link.svg'

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
    <div className="link-button">
      <a href={href} className="link-button-link" aria-label={title}>
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
          <div className="link-button-title">{title}</div>
          {description && (
            <div className="link-button-description">{description}</div>
          )}
        </div>
      </a>
      <a
        href={href}
        target="_blank"
        className="link-button-new-tab"
        aria-label={`Open ${title} in new tab`}
      >
        <Image
          className="link-button-new-tab-image"
          src={ExternalLink}
          alt=""
          width={24}
          draggable={false}
        />
      </a>
    </div>
  )
}
