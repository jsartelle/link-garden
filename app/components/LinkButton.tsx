import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import HoverCoordinates from '@/app/components/HoverCoordinates'

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
          <b className="link-button-title">{title}</b>
          {description && (
            <div className="link-button-description">{description}</div>
          )}
        </div>
      </a>
      <HoverCoordinates className="link-button-new-tab-wrapper">
        <a
          href={href}
          target="_blank"
          className="link-button-new-tab"
          aria-label={`Open ${title} in new tab`}
        >
          <ExternalLink size={24} />
        </a>
      </HoverCoordinates>
    </div>
  )
}
