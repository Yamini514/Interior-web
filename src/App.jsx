import { useEffect, useState } from 'react'
import './App.css'
import { AboutPage } from './pages/About'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { ContactPage } from './pages/Contact'
import { HomePage } from './pages/Home'
import { PortfolioPage } from './pages/Portfolio'
import { ServicesPage } from './pages/Services'

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/contact': ContactPage,
  '/portfolio': PortfolioPage,
  '/services': ServicesPage,
}

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handleRouteChange = () => {
      setPathname(window.location.pathname)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  const Page = routes[pathname] ?? HomePage

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <SiteHeader currentPath={pathname} />

      <main className="site-main">
        <Page />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
