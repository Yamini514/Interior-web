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

export function AboutIconBadge({ icon, className = '', iconClassName = 'size-5' }) {
  const Icon = iconMap[icon] ?? SparkIcon

  return (
    <span
      className={`inline-flex size-12 items-center justify-center rounded-2xl border border-white/15 bg-white/12 text-white shadow-[0_20px_50px_rgba(15,23,42,0.2)] backdrop-blur-xl ${className}`}
    >
      <Icon className={iconClassName} />
    </span>
  )
}

function TargetIcon({ className }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v3M21.5 12h-3M12 21.5v-3M2.5 12h3" />
    </Svg>
  )
}

function EyeIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </Svg>
  )
}

function MedalIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="m8 3.5 4 5 4-5" />
      <circle cx="12" cy="14.5" r="5" />
      <path d="m10.5 14.5 1 1 2-2.5" />
    </Svg>
  )
}

function LayersIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </Svg>
  )
}

function WalletIcon({ className }) {
  return (
    <Svg className={className}>
      <rect x="3.5" y="6.5" width="17" height="11" rx="2.5" />
      <path d="M14.5 11.5h6" />
      <path d="M16.5 11.5h.01" />
    </Svg>
  )
}

function CompassIcon({ className }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="m9 15 2-6 4 2-6 4Z" />
    </Svg>
  )
}

function GridIcon({ className }) {
  return (
    <Svg className={className}>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
    </Svg>
  )
}

function ChatIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M5 6.5h14v9H9l-4 3v-12Z" />
      <path d="M8.5 10.5h7M8.5 13.5h4.5" />
    </Svg>
  )
}

function SparkIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.5l-1.9-5.7-5.6-1.9L10.1 9 12 3.5Z" />
    </Svg>
  )
}

const iconMap = {
  mission: TargetIcon,
  vision: EyeIcon,
  experience: MedalIcon,
  custom: LayersIcon,
  budget: WalletIcon,
  endToEnd: CompassIcon,
  detail: GridIcon,
  communication: ChatIcon,
}
