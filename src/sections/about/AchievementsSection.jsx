import { InfoCard } from '../../components/about/InfoCard'
import { SectionIntro } from '../../components/services/SectionIntro'

export function AchievementsSection({ achievements }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Achievements"
        title="Recognition, systems, and partnerships that strengthen the studio beyond aesthetics."
        text="These signals help communicate trust, quality, and long-term professionalism."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {achievements.map((item) => (
          <InfoCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}
