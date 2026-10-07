import { useEffect, useLayoutEffect } from 'react'
import { BrowserRouter, Navigate, Routes, Route, matchPath, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Videos from './pages/Videos'
import Contact from './pages/Contact'
import translations from './data/translations'
import { getLanguageRoute, localizedPath } from './utils/languageRouting'

const pages = [
  { path: '/', Component: Home },
  { path: '/services', Component: Services },
  { path: '/about', Component: About },
  { path: '/videos', Component: Videos },
  { path: '/contact', Component: Contact },
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppContent() {
  const location = useLocation()
  const navigate = useNavigate()
  // Derive translations during render, without a second language state or effect.
  const { lang, htmlLang, pagePath, hasLanguage, isLegacyLanguage } = getLanguageRoute(location.pathname)
  const t = translations[lang]
  const isHome = hasLanguage && pagePath.replace(/\/+$/, '') === ''

  useLayoutEffect(() => {
    document.documentElement.lang = htmlLang
  }, [htmlLang])

  function setLang(nextLang) {
    if (nextLang === lang) return
    navigate({
      pathname: localizedPath(location.pathname, nextLang),
      search: location.search,
      hash: location.hash,
    }, { state: location.state })
  }

  // Preserve old Cyrillic URLs and routes from before language prefixes.
  // Unknown paths retain the existing unmatched-route behaviour (navbar/footer).
  if (isLegacyLanguage || (!hasLanguage && pages.some(({ path }) => matchPath({ path, end: true }, location.pathname)))) {
    return <Navigate replace to={{ pathname: localizedPath(location.pathname, lang), search: location.search, hash: location.hash }} state={location.state} />
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar lang={lang} setLang={setLang} />

      {/* Spacer for fixed navbar (top bar + main nav) */}
      <div className="h-[72px] md:h-[108px]" />

      {/* Hero only on home page */}
      {isHome && <Hero lang={lang} t={t} />}

      <Routes>
        {pages.map(({ path, Component }) => (
          <Route key={path} path={localizedPath(path, lang)} element={<Component lang={lang} t={t} />} />
        ))}
      </Routes>

      <Footer lang={lang} />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
