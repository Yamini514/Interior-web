import { AnimatePresence, motion as Motion } from 'framer-motion'

export function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-white/12 bg-white/8 backdrop-blur-xl">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span className="text-base font-semibold text-white sm:text-lg">{item.question}</span>
        <Motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-black/20 text-xl text-white"
        >
          +
        </Motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="border-t border-white/10 px-5 py-5 text-sm leading-7 text-stone-300 sm:px-6">
              {item.answer}
            </p>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
