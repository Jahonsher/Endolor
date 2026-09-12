import { Link } from 'react-router-dom'
import translations from '../data/translations'

export default function Footer({ lang }) {
  const t = translations[lang]
  const f = t.footer

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#041424] text-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0C5ADB]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0C5ADB]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1 - Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5">
              <img src="/logo.png" alt="Klinika logosi" className="h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {f.desc}
            </p>
            <div className="flex gap-3">
              <a href="https://www.youtube.com/@shavkatlor" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-10 h-10 bg-white/10 hover:bg-[#FF0000] rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://www.instagram.com/dr.shavkat_lor" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white/10 hover:bg-[#E4405F] rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://t.me/Shavkat_lor" target="_blank" rel="noreferrer" aria-label="Telegram" className="w-10 h-10 bg-white/10 hover:bg-[#0088cc] rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
              </a>
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="text-white text-sm font-extrabold uppercase tracking-widest mb-6 relative pb-3">
              {f.links}
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#0C5ADB]" />
            </h4>
            <ul className="space-y-3">
              {[
                { label: f.aboutUs, to: '/about' },
                { label: f.contactUs, to: '/contact' },
                { label: f.ourServices, to: '/services' },
                { label: f.videos, to: '/videos' },
                { label: f.doctors, to: '/about' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <svg className="w-3 h-3 text-[#0C5ADB] group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5l8 7-8 7V5z" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Contact */}
          <div>
            <h4 className="text-white text-sm font-extrabold uppercase tracking-widest mb-6 relative pb-3">
              {f.contactTitle}
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#0C5ADB]" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 shrink-0 bg-[#0C5ADB]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#0C5ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                <a href="tel:+998903258600" className="text-white/70 hover:text-white text-sm transition-colors pt-1.5">+998 90 325 86 00</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 shrink-0 bg-[#0C5ADB]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#0C5ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <a href="mailto:info@endolor.uz" className="text-white/70 hover:text-white text-sm transition-colors pt-1.5">info@endolor.uz</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 shrink-0 bg-[#0C5ADB]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#0C5ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <span className="text-white/70 text-sm leading-relaxed pt-1">{f.address}</span>
              </li>
            </ul>
          </div>

          {/* Col 4 - Hours */}
          <div>
            <h4 className="text-white text-sm font-extrabold uppercase tracking-widest mb-6 relative pb-3">
              {f.hoursTitle || 'Ish vaqti'}
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[#0C5ADB]" />
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-white/60 text-sm">{f.weekdays || 'Du — Sha'}</span>
                <span className="text-white text-sm font-bold">09:00 — 20:00</span>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-white/60 text-sm">{f.sunday || 'Yakshanba'}</span>
                <span className="text-white text-sm font-bold">10:00 — 18:00</span>
              </li>
              <li className="flex items-center justify-between py-2">
                <span className="text-white/60 text-sm">{f.emergency || 'Shoshilinch'}</span>
                <span className="text-[#0C5ADB] text-sm font-extrabold">24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-sm">
            © {currentYear} Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-4 text-white/50 text-xs">
            <Link to="/about" className="hover:text-white transition-colors">Klinika haqida</Link>
            <span className="text-white/20">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Bog'lanish</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
