import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Link from './LocalizedLink'
import translations from '../data/translations'
import { getLanguageRoute } from '../utils/languageRouting'

const langConfig = [
  { code: 'uz', label: 'UZ' },
  { code: 'oz', label: 'Ўз' },
  { code: 'ru', label: 'РУ' },
  { code: 'en', label: 'EN' },
]

const navLinks = [
  { key: 'home', to: '/' },
  { key: 'services', to: '/services' },
  { key: 'about', to: '/about' },
  { key: 'videos', to: '/videos' },
  { key: 'contact', to: '/contact' },
]

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = translations[lang].nav
  const location = useLocation()
  const pagePath = getLanguageRoute(location.pathname).pagePath.replace(/\/+$/, '') || '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Top Bar (address + socials) ── */}
      <div className={`hidden md:block bg-[#041424] text-white/80 transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden py-0' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <a href="https://maps.google.com/?q=Chilonzor+17-kvartal+Bunyodkor+33/1+Tashkent" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 text-[#0C5ADB]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
                Chilonzor 17-kvartal, Bunyodkor sh. 33/1, Toshkent
              </a>
              <a href="mailto:info@endolor.uz" className="hidden lg:flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 text-[#0C5ADB]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                info@endolor.uz
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/50 uppercase tracking-widest text-[10px] font-bold">Bizni kuzating:</span>
              <a href="https://www.youtube.com/@shavkatlor" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-white/70 hover:text-[#FF0000] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://www.instagram.com/dr.shavkat_lor" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white/70 hover:text-[#E4405F] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://t.me/Shavkat_lor" target="_blank" rel="noreferrer" aria-label="Telegram" className="text-white/70 hover:text-[#0C5ADB] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav
        className={`transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <img src="/logo.png" alt="Klinika logosi" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.to}
                  className={`relative text-[14px] font-bold transition-colors py-2 ${
                    pagePath === link.to
                      ? 'text-[#0C5ADB]'
                      : 'text-[#041424] hover:text-[#0C5ADB]'
                  }`}
                >
                  {t[link.key]}
                  {pagePath === link.to && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-[#0C5ADB]" />
                  )}
                </Link>
              ))}
            </div>

            {/* Right: Phone + Lang */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+998903258600"
                className="flex items-center gap-2.5 text-sm font-bold text-[#041424] hover:text-[#0C5ADB] transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-[#0C5ADB] flex items-center justify-center shrink-0 shadow-md shadow-[#0C5ADB]/25">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                +998 90 325 86 00
              </a>

              {/* Language selector (pill / segment control style) */}
              <div className="flex items-center bg-[#F1F5FD] rounded-full p-[3px]">
                {langConfig.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                      lang === l.code
                        ? 'bg-[#0C5ADB] text-white shadow-md'
                        : 'text-[#5b6675] hover:text-[#0C5ADB]'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#041424] hover:text-[#0C5ADB] transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
            mobileOpen ? 'max-h-[600px] border-t border-[#e7edf5]' : 'max-h-0'
          }`}
        >
          <div className="px-5 py-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block text-[15px] font-bold py-3 border-b border-[#f1f5fd] ${
                  pagePath === link.to
                    ? 'text-[#0C5ADB]'
                    : 'text-[#041424] hover:text-[#0C5ADB]'
                }`}
              >
                {t[link.key]}
              </Link>
            ))}

            <a href="tel:+998903258600" className="flex items-center gap-2 text-sm font-bold text-[#0C5ADB] pt-3 pb-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +998 90 325 86 00
            </a>

            <div className="flex items-center bg-[#F1F5FD] rounded-full p-[3px] pt-3 mt-3">
              {langConfig.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setMobileOpen(false) }}
                  className={`flex-1 flex items-center justify-center gap-1 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    lang === l.code
                      ? 'bg-[#0C5ADB] text-white shadow-md'
                      : 'text-[#5b6675] hover:text-[#0C5ADB]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
