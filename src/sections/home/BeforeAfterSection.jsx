import { BeforeAfterSlider } from '../../components/home/BeforeAfterSlider'
import { SectionIntro } from '../../components/services/SectionIntro'

export function BeforeAfterSection({ content }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionIntro
          eyebrow="Before / After"
          title={content.heading}
          text={content.text}
          className="max-w-none"
        />

        <BeforeAfterSlider content={content} />
      </div>
    </section>
  )
}
