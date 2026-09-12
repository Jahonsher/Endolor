import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Videos from './pages/Videos'
import Contact from './pages/Contact'
import translations from './data/translations'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppContent({ lang, setLang }) {
  const t = translations[lang]
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar lang={lang} setLang={setLang} />

      {/* Spacer for fixed navbar (top bar + main nav) */}
      <div className="h-[72px] md:h-[108px]" />

      {/* Hero only on home page */}
      {isHome && <Hero lang={lang} t={t} />}

      <Routes>
        <Route path="/" element={<Home lang={lang} t={t} />} />
        <Route path="/services" element={<Services lang={lang} t={t} />} />
        <Route path="/about" element={<About lang={lang} t={t} />} />
        <Route path="/videos" element={<Videos lang={lang} t={t} />} />
        <Route path="/contact" element={<Contact lang={lang} t={t} />} />
      </Routes>

      <Footer lang={lang} />
    </div>
  )
}

function App() {
  const [lang, setLang] = useState('uz')

  return (
    <BrowserRouter>
      <AppContent lang={lang} setLang={setLang} />
    </BrowserRouter>
  )
}

export default App
