export interface LinkSectionProps {
  title?: string
  children: React.ReactNode
}

export default function LinkButton({ title, children }: LinkSectionProps) {
  return (
    <section className="link-section">
      {title && <h2 className="link-section-title">{title}</h2>}
      <div className="link-section-links">{children}</div>
    </section>
  )
}
