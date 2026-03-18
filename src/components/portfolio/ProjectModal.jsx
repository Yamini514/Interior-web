import { AnimatePresence, motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AppLink } from '../AppLink'

export function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    setActiveImageIndex(0)
    setLightboxIndex(null)
  }, [project])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (lightboxIndex !== null) {
          setLightboxIndex(null)
          return
        }

        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxIndex, onClose])

  const activeImage = project.gallery[activeImageIndex]
  const lightboxImage = lightboxIndex !== null ? project.gallery[lightboxIndex] : null

  return (
    <AnimatePresence>
      <Motion.div
        className="fixed inset-0 z-40 bg-slate-950/78 px-4 py-6 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose()
          }
        }}
      >
        <Motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-h-[calc(100vh-3rem)] max-w-6xl overflow-auto rounded-[34px] border border-white/12 bg-slate-950/96 shadow-[0_30px_120px_rgba(15,23,42,0.55)]"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-slate-950/90 px-5 py-4 backdrop-blur-xl sm:px-7">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-amber-200/75">{project.category}</p>
              <h3 className="mt-2 text-2xl text-white sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                {project.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white"
              aria-label="Close project details"
            >
              ✕
            </button>
          </div>

          <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <button
                type="button"
                onClick={() => setLightboxIndex(activeImageIndex)}
                className="group relative block w-full overflow-hidden rounded-[28px] border border-white/12"
              >
                <img
                  src={activeImage.image}
                  alt={activeImage.alt}
                  className="h-[25rem] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <span className="absolute bottom-5 right-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950">
                  Open Lightbox
                </span>
              </button>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {project.gallery.map((image, index) => (
                  <button
                    key={image.image}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`overflow-hidden rounded-[20px] border ${activeImageIndex === index ? 'border-amber-200/40' : 'border-white/10'}`}
                  >
                    <img
                      src={image.image}
                      alt={image.alt}
                      loading="lazy"
                      className="h-24 w-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/6">
                  <img
                    src={project.beforeAfter.before}
                    alt={`${project.title} before`}
                    loading="lazy"
                    className="h-52 w-full object-cover"
                  />
                  <p className="px-4 py-3 text-sm font-medium text-stone-200">Before</p>
                </div>
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/6">
                  <img
                    src={project.beforeAfter.after}
                    alt={`${project.title} after`}
                    loading="lazy"
                    className="h-52 w-full object-cover"
                  />
                  <p className="px-4 py-3 text-sm font-medium text-stone-200">After</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-6">
                <p className="text-sm leading-7 text-stone-300">{project.description}</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <DetailStat label="Area Size" value={project.area} />
                  <DetailStat label="Budget" value={project.budget} />
                  <DetailStat label="Duration" value={project.duration} />
                  <DetailStat label="Location" value={project.location} />
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/6 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-200/75">Client Requirements</p>
                <div className="mt-4 space-y-3">
                  {project.requirements.map((requirement) => (
                    <div key={requirement} className="flex gap-3 text-sm leading-7 text-stone-200">
                      <span className="mt-2 inline-flex size-2 rounded-full bg-amber-200" />
                      <span>{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-amber-200/10 via-white/6 to-cyan-300/10 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-200/75">Next Step</p>
                <h4 className="mt-3 text-2xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  Want a space like this?
                </h4>
                <p className="mt-3 text-sm leading-7 text-stone-300">
                  Book a consultation and we’ll define the scope, visual direction, and execution path for your project.
                </p>
                <AppLink
                  to="/contact"
                  className="mt-6 inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  Contact Us
                </AppLink>
              </div>
            </div>
          </div>
        </Motion.div>

        <AnimatePresence>
          {lightboxImage ? (
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 grid place-items-center bg-black/90 px-4"
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  setLightboxIndex(null)
                }
              }}
            >
              <div className="relative max-w-5xl">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="absolute right-3 top-3 z-10 inline-flex size-10 items-center justify-center rounded-full bg-white text-slate-950"
                  aria-label="Close image lightbox"
                >
                  ✕
                </button>
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.alt}
                  className="max-h-[85vh] w-full rounded-[24px] object-contain"
                />
              </div>
            </Motion.div>
          ) : null}
        </AnimatePresence>
      </Motion.div>
    </AnimatePresence>
  )
}

function DetailStat({ label, value }) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-black/15 p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-stone-400">{label}</p>
      <p className="mt-2 text-base font-semibold text-white">{value}</p>
    </div>
  )
}
