export function ContactHeroVisual({ visual, studio }) {
  return (
    <div className="contact-hero-visual" aria-label="Interior design reference imagery">
      <article className="contact-hero-media">
        <img alt={visual.altPrimary} className="contact-hero-media__image" src={visual.primaryImage} />
        <div className="contact-hero-media__overlay">
          <span>{visual.location}</span>
          <strong>{visual.caption}</strong>
          <p>Interior planning, material direction, and presentation-led consultation for premium homes.</p>
        </div>
      </article>

      <article className="contact-hero-note contact-hero-note--summary">
        <span>Studio response</span>
        <strong>From inquiry to first consultation</strong>
        <p>
          Share project details through the form, then the studio reviews scope, style direction, and
          scheduling based on your site and timeline.
        </p>
      </article>

      <article className="contact-hero-note contact-hero-note--studio">
        <img alt={visual.altSecondary} src={visual.secondaryImage} />
        <div>
          <span>{studio.name}</span>
          <strong>{studio.hours}</strong>
          <p>{studio.serviceArea}</p>
        </div>
      </article>
    </div>
  )
}
