import { SectionIntro } from '../../components/services/SectionIntro'
import { ServiceCard } from '../../components/services/ServiceCard'

export function ServicesGridSection({ services, onSelect }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="What We Offer"
        title="Tailored interior solutions across residential, commercial, and visualization work."
        text="Every service block is designed to feel premium, but still practical. Use the cards below to jump directly into the service details."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}
