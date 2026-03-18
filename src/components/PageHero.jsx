export function PageHero({ eyebrow, title, description, actions, badges, visual, children, className = '' }) {
  return (
    <section className={`page-hero ${className}`.trim()}>
      <div className="page-hero__copy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p className="page-hero__text">{description}</p>

        {actions?.length ? (
          <div className="hero-actions">
            {actions.map((action) => action)}
          </div>
        ) : null}

        {badges?.length ? (
          <div className="hero-tags">
            {badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        ) : null}

        {children}
      </div>

      {visual ? <div className="page-hero__visual">{visual}</div> : null}
    </section>
  )
}
