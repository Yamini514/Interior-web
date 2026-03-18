import { InfoCard } from '../../components/about/InfoCard'
import { SectionIntro } from '../../components/services/SectionIntro'

export function MissionVisionSection({ items }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Mission & Vision"
        title="A clear design philosophy that keeps every project intentional."
        text="These two principles shape how we approach planning, aesthetics, and the client experience from start to finish."
        align="center"
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {items.map((item) => (
          <InfoCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
