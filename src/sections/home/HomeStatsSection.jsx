import { CounterStat } from '../../components/portfolio/CounterStat'
import { SectionIntro } from '../../components/services/SectionIntro'

export function HomeStatsSection({ stats }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Studio Stats"
        title="Motion-backed numbers that reinforce the scale behind the design language."
        text="The counters animate into view to support the premium, scroll-driven direction of the homepage."
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
