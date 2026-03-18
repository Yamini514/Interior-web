import { useEffect, useState } from 'react'
import { AppLink } from './AppLink'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function SiteHeader({ currentPath }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [currentPath])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`site-header ${isMenuOpen ? 'is-menu-open' : ''}`}>
      <div className="site-header__bar">
        <AppLink className="brand" to="/" onClick={closeMenu}>
          Atelier Haven
        </AppLink>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="site-header__toggle-line" />
          <span className="site-header__toggle-line" />
          <span className="site-header__toggle-line" />
        </button>
      </div>

      <div className="site-header__panel">
        <nav className="site-nav" id="site-navigation" aria-label="Primary">
          {navItems.map((item) => (
            <AppLink
              key={item.to}
              className={`site-nav__link ${currentPath === item.to ? 'is-active' : ''}`}
              to={item.to}
              onClick={closeMenu}
            >
              {item.label}
            </AppLink>
          ))}
        </nav>

        <AppLink className="header-cta" to="/contact" onClick={closeMenu}>
          Book a design call
        </AppLink>
      </div>
    </header>
  )
}
