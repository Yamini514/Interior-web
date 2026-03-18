import { PortfolioPreviewCard } from '../../components/home/PortfolioPreviewCard'
import { GradientButton } from '../../components/home/GradientButton'
import { SectionIntro } from '../../components/services/SectionIntro'

export function PortfolioPreviewSection({ items }) {
  return (
    <section id="portfolio-preview" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Portfolio Preview"
        title="Project highlights that bring the atmosphere of each interior forward."
        text="The preview grid uses hover zoom, overlay cues, and cleaner framing so visitors move from inspiration to intent faster."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <PortfolioPreviewCard key={item.title} item={item} />
        ))}
      </div>

      <div className="mt-8">
        <GradientButton to="/portfolio">Open Full Portfolio</GradientButton>
      </div>
    </section>
  )
}
