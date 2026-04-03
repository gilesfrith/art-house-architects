import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      <ScrollToTop />
      <Nav />
      {/* Non-home pages need top padding so content clears the fixed nav */}
      <main style={{ paddingTop: isHome ? 0 : 'var(--nav-h)' }}>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about"     element={<About />} />
          {/* Catch-all: redirect unknown paths to home */}
          <Route path="*"          element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
