import { AnimatePresence, motion as Motion } from 'framer-motion'

export function SuccessToast({ message }) {
  return (
    <AnimatePresence>
      {message ? (
        <Motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-1/2 z-40 w-[min(90vw,28rem)] -translate-x-1/2 rounded-[22px] border border-emerald-300/30 bg-emerald-400/95 px-5 py-4 text-sm font-medium text-slate-950 shadow-[0_24px_80px_rgba(16,185,129,0.35)]"
        >
          {message}
        </Motion.div>
      ) : null}
    </AnimatePresence>
  )
}
