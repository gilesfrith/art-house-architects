import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On non-home pages, always show the solid nav
  const solid = scrolled || !isHome

  return (
    <nav className={`${styles.nav} ${solid ? styles.solid : ''}`}>
      <NavLink to="/" className={styles.logo}>
        ART HOUSE architects
      </NavLink>
      <ul className={styles.links}>
        {[['/', 'Home'], ['/portfolio', 'Portfolio'], ['/about', 'About']].map(([to, label]) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
