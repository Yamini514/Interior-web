import { motion as Motion } from 'framer-motion'
import { SectionIntro } from '../../components/services/SectionIntro'

export function FeaturedProjectsSection({ projects, onSelect }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Featured Projects"
        title="A curated set of standout spaces with stronger storytelling and larger visual weight."
        text="These featured cards now sit in a single horizontal story row so the section feels more editorial and less stacked."
      />

      <div className="mt-10 flex gap-6 overflow-x-auto pb-2">
        {projects.map((project) => (
          <Motion.article
            key={project.id}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 240, damping: 22 }}
            className="group relative min-w-[300px] flex-1 overflow-hidden rounded-[32px] border border-white/12 bg-white/8 shadow-[0_28px_90px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:min-w-[360px]"
          >
            <button type="button" onClick={() => onSelect(project)} className="block w-full text-left">
              <div className="relative h-[26rem] overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/45" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="rounded-[28px] border border-white/12 bg-slate-950/48 p-5 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.28em] text-amber-200/75">
                      {project.category}
                    </p>
                    <h3
                      className="mt-3 text-3xl text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-stone-200">
                      {project.description}
                    </p>

                    <span className="mt-5 inline-flex translate-y-4 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </Motion.article>
        ))}
      </div>
    </section>
  )
}
