import { SectionIntro } from '../../components/services/SectionIntro'
import { AccordionItem } from '../../components/services/AccordionItem'

export function ServiceDetailsSection({ innerRef, services, activeServiceId, onToggle }) {
  return (
    <section ref={innerRef} className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Detailed Services"
        title="Every scope is defined with clear features, timelines, and starting investment."
        text="The active card opens here automatically, so users can move from browsing to decision-making without losing context."
      />

      <div className="mt-10 space-y-4">
        {services.map((service) => (
          <AccordionItem
            key={service.id}
            item={service}
            isOpen={activeServiceId === service.id}
            onToggle={() => onToggle(service.id)}
          />
        ))}
      </div>
    </section>
  )
}
