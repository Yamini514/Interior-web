import { FeatureCard } from '../../components/about/FeatureCard'
import { SectionIntro } from '../../components/services/SectionIntro'

export function WhyChooseUsSection({ features }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Why Choose Us"
        title="Thoughtful design backed by execution awareness, clarity, and real-world practicality."
        text="The goal is not only to design beautiful spaces, but to make the entire process smoother, clearer, and more effective for clients."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  )
}
