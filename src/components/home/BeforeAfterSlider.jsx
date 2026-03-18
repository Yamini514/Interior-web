import { useId, useState } from 'react'

export function BeforeAfterSlider({ content }) {
  const [position, setPosition] = useState(52)
  const sliderId = useId()

  return (
    <div className="relative overflow-hidden rounded-[34px] border border-white/12 bg-white/8 shadow-[0_28px_90px_rgba(15,23,42,0.22)] backdrop-blur-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={content.afterImage}
          alt="Interior after transformation"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img
            src={content.beforeImage}
            alt="Interior before transformation"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-y-0" style={{ left: `${position}%` }}>
          <div className="absolute inset-y-0 w-px -translate-x-1/2 bg-white" />
          <div className="absolute left-1/2 top-1/2 inline-flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/75 text-white backdrop-blur-xl">
            ↔
          </div>
        </div>

        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-white">
          Before
        </div>
        <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-white">
          After
        </div>
      </div>

      <label htmlFor={sliderId} className="sr-only">
        Adjust before and after image comparison
      </label>
      <input
        id={sliderId}
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-x-0 top-0 z-10 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  )
}
