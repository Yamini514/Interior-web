import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function CounterStat({ stat }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) {
      return undefined
    }

    const controls = animate(0, stat.value, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setCount(Math.round(latest))
      },
    })

    return () => controls.stop()
  }, [isInView, stat.value])

  return (
    <div
      ref={ref}
      className="rounded-[28px] border border-white/12 bg-white/8 p-6 text-center shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl"
    >
      <p className="text-4xl text-white sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
        {count}
        {stat.suffix}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.24em] text-stone-300">{stat.label}</p>
    </div>
  )
}
