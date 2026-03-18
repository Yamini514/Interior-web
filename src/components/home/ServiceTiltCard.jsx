import Tilt from 'react-parallax-tilt'
import { motion as Motion } from 'framer-motion'
import { IconBadge } from '../services/ServiceIcons'

export function ServiceTiltCard({ service }) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1200}
      scale={1.02}
      transitionSpeed={1200}
      gyroscope={false}
      className="h-full"
    >
      <Motion.article
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 240, damping: 22 }}
        className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/12 bg-white/8 p-6 shadow-[0_26px_90px_rgba(15,23,42,0.22)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-300/8" />
        <div className="relative">
          <IconBadge icon={service.icon} />
          <h3 className="mt-6 text-2xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-stone-300">{service.description}</p>
        </div>
      </Motion.article>
    </Tilt>
  )
}
