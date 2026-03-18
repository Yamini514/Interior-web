import { CounterStat } from '../../components/portfolio/CounterStat'
import { SectionIntro } from '../../components/services/SectionIntro'

export function AboutStatsSection({ stats }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Studio Numbers"
        title="Measured experience, delivered across projects of different sizes and typologies."
        text="These counters add subtle motion while reinforcing the studio’s credibility."
        align="center"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <CounterStat key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  )
}
