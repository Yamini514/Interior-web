import { SectionIntro } from '../../components/services/SectionIntro'
import { Reveal } from '../../components/services/Reveal'

export function StorySection({ story }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal className="overflow-hidden rounded-[34px] border border-white/12 bg-white/8 shadow-[0_28px_90px_rgba(15,23,42,0.22)] backdrop-blur-xl">
          <div className="relative h-[32rem] overflow-hidden">
            <img src={story.image} alt="Interior design studio process" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div>
          <SectionIntro
            eyebrow="Our Story"
            title={story.heading}
            text=""
            className="max-w-none"
          />
          <div className="mt-6 space-y-5">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-8 text-stone-300 sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
