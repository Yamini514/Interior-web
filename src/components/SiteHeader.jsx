import { AppLink } from './AppLink'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function SiteHeader({ currentPath }) {
  return (
    <header className="site-header">
      <AppLink className="brand" to="/">
        Atelier Haven
      </AppLink>

      <nav className="site-nav" aria-label="Primary">
        {navItems.map((item) => (
          <AppLink
            key={item.to}
            className={`site-nav__link ${currentPath === item.to ? 'is-active' : ''}`}
            to={item.to}
          >
            {item.label}
          </AppLink>
        ))}
      </nav>

      <AppLink className="header-cta" to="/contact">
        Book a design call
      </AppLink>
    </header>
  )
}
