import { AppLink } from './AppLink'
import { SectionHeading } from './SectionHeading'

export function HomeServicesSection({ section, services }) {
  return (
    <section className="page-section home-services">
      <SectionHeading eyebrow={section.eyebrow} title={section.title} text={section.text} wide />

      <div className="home-services__row">
        {services.map((service) => (
          <article className="home-service-tile" key={service.title}>
            <img alt={service.imageAlt} className="home-service-tile__image" loading="lazy" src={service.image} />

            <div className="home-service-tile__overlay">
              <span className="home-service-tile__eyebrow">{service.points[0]}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="home-service-tile__points">
                {service.points.slice(1).map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="section-actions">
        <AppLink className="button button-secondary" to={section.ctaTo}>
          {section.ctaLabel}
        </AppLink>
      </div>
    </section>
  )
}
