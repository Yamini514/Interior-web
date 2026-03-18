import { CounterStat } from '../../components/portfolio/CounterStat'
import { SectionIntro } from '../../components/services/SectionIntro'

export function PortfolioStatsSection({ stats }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-[4.5rem] sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Studio Stats"
        title="Numbers that support the quality behind the finished spaces."
        text="These counters add motion without noise and reinforce the studio’s track record."
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
