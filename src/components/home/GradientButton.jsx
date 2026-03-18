import { AppLink } from '../AppLink'

export function GradientButton({ children, className = '', to, ...props }) {
  const sharedClassName = `inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-gradient-to-r from-amber-200 via-white to-cyan-200 px-7 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-0.5 ${className}`

  if (to) {
    return (
      <AppLink to={to} className={sharedClassName} {...props}>
        {children}
      </AppLink>
    )
  }

  return (
    <button type="button" className={sharedClassName} {...props}>
      {children}
    </button>
  )
}
