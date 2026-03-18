const sharedProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Svg({ children, className = 'size-5' }) {
  return (
    <svg aria-hidden="true" className={className} {...sharedProps}>
      {children}
    </svg>
  )
}

export function ContactIconBadge({ icon, className = '', iconClassName = 'size-5' }) {
  const Icon = iconMap[icon] ?? PhoneIcon

  return (
    <span
      className={`inline-flex size-12 items-center justify-center rounded-2xl border border-white/15 bg-white/12 text-white shadow-[0_20px_50px_rgba(15,23,42,0.22)] backdrop-blur-xl ${className}`}
    >
      <Icon className={iconClassName} />
    </span>
  )
}

function PhoneIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M6.5 4.5h3l1.2 3-1.8 1.8a14 14 0 0 0 5.2 5.2l1.8-1.8 3 1.2v3A1.5 1.5 0 0 1 17.4 19C10.1 19 5 13.9 5 6.6A1.5 1.5 0 0 1 6.5 4.5Z" />
    </Svg>
  )
}

function EmailIcon({ className }) {
  return (
    <Svg className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m5.5 8 6.5 5 6.5-5" />
    </Svg>
  )
}

function LocationIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 20s6-5.7 6-10.2A6 6 0 1 0 6 9.8C6 14.3 12 20 12 20Z" />
      <circle cx="12" cy="9.5" r="2.2" />
    </Svg>
  )
}

const iconMap = {
  phone: PhoneIcon,
  email: EmailIcon,
  location: LocationIcon,
}
