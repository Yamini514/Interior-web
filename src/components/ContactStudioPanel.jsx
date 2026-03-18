import { ThreeDShowcase } from './ThreeDShowcase'

export function ContactStudioPanel({ checklist, model, studio }) {
  return (
    <div className="contact-studio-panel">
      {/* <ThreeDShowcase model={model} /> */}

      <article className="contact-studio-card">
        <span>Studio contact details</span>
        <h3>{studio.name}</h3>

        <address className="studio-address">
          {studio.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </address>

        <div className="studio-meta">
          <div>
            <strong>Phone</strong>
            <a href={`tel:${studio.phone.replace(/\s+/g, '')}`}>{studio.phone}</a>
          </div>
          <div>
            <strong>Email</strong>
            <a href={`mailto:${studio.email}`}>{studio.email}</a>
          </div>
          <div>
            <strong>Hours</strong>
            <p>{studio.hours}</p>
          </div>
          <div>
            <strong>Service area</strong>
            <p>{studio.serviceArea}</p>
          </div>
        </div>

        <div className="studio-checklist">
          {checklist.slice(0, 3).map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </article>
    </div>
  )
}
