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

export function IconBadge({ icon, className = '', iconClassName = 'size-5' }) {
  const Icon = iconMap[icon] ?? SparkIcon

  return (
    <span
      className={`inline-flex size-12 items-center justify-center rounded-2xl border border-white/15 bg-white/12 text-white shadow-[0_20px_50px_rgba(15,23,42,0.25)] backdrop-blur-xl ${className}`}
    >
      <Icon className={iconClassName} />
    </span>
  )
}

function HomeIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M4 11.5 12 5l8 6.5" />
      <path d="M6.5 10.5V19h11v-8.5" />
      <path d="M10 19v-4.5h4V19" />
    </Svg>
  )
}

function BuildingIcon({ className }) {
  return (
    <Svg className={className}>
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
      <path d="M9 7.5h.01M15 7.5h.01M9 11.5h.01M15 11.5h.01M9 15.5h.01M15 15.5h.01" />
    </Svg>
  )
}

function KitchenIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M4.5 7.5h15" />
      <path d="M7 7.5v11" />
      <path d="M17 7.5v11" />
      <path d="M4.5 18.5h15" />
      <path d="M10 11.5h4" />
      <path d="M12 7.5v4" />
    </Svg>
  )
}

function BedIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M4 17.5V11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6.5" />
      <path d="M4 14.5h16" />
      <path d="M7 9V7.5A1.5 1.5 0 0 1 8.5 6h3A1.5 1.5 0 0 1 13 7.5V9" />
      <path d="M5.5 19.5v-2M18.5 19.5v-2" />
    </Svg>
  )
}

function OfficeIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M4.5 9.5h15" />
      <path d="M7 9.5V6.8A1.8 1.8 0 0 1 8.8 5h6.4A1.8 1.8 0 0 1 17 6.8v2.7" />
      <path d="M6 9.5v8.5h12V9.5" />
      <path d="M10.5 13.5h3" />
    </Svg>
  )
}

function CubeIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="m12 3 7 4-7 4-7-4 7-4Z" />
      <path d="m5 7 7 4 7-4" />
      <path d="M5 7v10l7 4 7-4V7" />
      <path d="M12 11v10" />
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

function MapIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="m4.5 6.5 5-2 5 2 5-2V18l-5 2-5-2-5 2Z" />
      <path d="M9.5 4.5V18M14.5 6.5V20" />
    </Svg>
  )
}

function PencilRulerIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="m4.5 19.5 5.5-5.5" />
      <path d="m9.5 6.5 8 8" />
      <path d="m13 3.5 7.5 7.5-3 3L10 6.5l3-3Z" />
      <path d="M5.5 13.5 3.5 20.5l7-2" />
    </Svg>
  )
}

function ToolsIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="m5 18 5.5-5.5" />
      <path d="m11.5 6.5 6 6" />
      <path d="m14 5 5 5" />
      <path d="M4.5 14.5 9.5 19.5" />
      <path d="M15 4.5 19.5 9" />
    </Svg>
  )
}

function CheckIcon({ className }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12 2.4 2.5 4.6-5" />
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
  residential: HomeIcon,
  commercial: BuildingIcon,
  kitchen: KitchenIcon,
  bedroom: BedIcon,
  office: OfficeIcon,
  visualization: CubeIcon,
  consultation: ChatIcon,
  planning: MapIcon,
  design: PencilRulerIcon,
  execution: ToolsIcon,
  delivery: CheckIcon,
}
