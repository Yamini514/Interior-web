import { PricingCard } from '../../components/services/PricingCard'
import { SectionIntro } from '../../components/services/SectionIntro'

export function PricingSection({ plans }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Pricing"
        title="Transparent packages for different project scales."
        text="These starting tiers help set expectations early. Detailed quotations still adapt to site size, finishes, and execution complexity."
        align="center"
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  )
}
