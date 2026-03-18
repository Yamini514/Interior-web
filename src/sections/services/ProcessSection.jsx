import { IconBadge } from '../../components/services/ServiceIcons'
import { SectionIntro } from '../../components/services/SectionIntro'

export function ProcessSection({ steps }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Our Process"
        title="A structured five-step workflow that keeps the project moving with clarity."
        text="The timeline stays horizontal to preserve the sense of momentum from first conversation to final delivery."
        align="center"
      />

      <div className="mt-10 overflow-x-auto pb-4">
        <div className="relative grid min-w-[900px] grid-cols-5 gap-5 before:absolute before:left-[10%] before:right-[10%] before:top-11 before:h-px before:bg-gradient-to-r before:from-white/0 before:via-white/30 before:to-white/0">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="mx-auto flex size-[5.5rem] items-center justify-center rounded-full border border-white/12 bg-slate-950/70">
                <IconBadge icon={step.icon} className="size-14 bg-white/10" />
              </div>

              <div className="mt-5 rounded-[26px] border border-white/12 bg-white/8 p-5 text-center shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200/70">Step {index + 1}</p>
                <h3 className="mt-3 text-xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
