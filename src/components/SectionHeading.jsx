export function SectionHeading({ eyebrow, title, text, wide = false }) {
  return (
    <div className={`section-heading ${wide ? 'section-heading-wide' : ''}`}>
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {text ? <p>{text}</p> : null}
    </div>
  )
}
