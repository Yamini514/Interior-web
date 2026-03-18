import { Reveal } from './Reveal'

export function SectionIntro({ eyebrow, title, text, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <Reveal className={`max-w-3xl ${alignment} ${className}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
        {eyebrow}
      </p>
      <h2
        className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      {text ? <p className="mt-4 text-sm leading-7 text-stone-300 sm:text-base">{text}</p> : null}
    </Reveal>
  )
}
