export function SectionHeading({ eyebrow, title, highlight, description, align = 'left' }) {
  const centered = align === 'center'
  return (
    <header className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <div className={`mb-5 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className="h-px w-6 bg-gradient-to-r from-brand-500/60 to-transparent" />
        <span className="font-mono text-micro font-semibold tracking-[0.22em] text-brand-fg uppercase">
          {eyebrow}
        </span>
        <span className="h-px w-6 bg-gradient-to-l from-brand-500/60 to-transparent" />
      </div>

      <h2 className="text-title text-balance font-bold">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>

      {description && (
        <p className="mt-4 text-lead leading-relaxed text-ink-soft text-pretty">{description}</p>
      )}
    </header>
  )
}

export function Card({ children, className = '', hover = true, as: Tag = 'div' }) {
  return (
    <Tag
      className={`group relative overflow-hidden rounded-card border border-line bg-surface p-6 transition-all duration-300 ${
        hover ? 'hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-lift' : ''
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
