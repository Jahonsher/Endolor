import { useState } from 'react'
import Link from '../components/LocalizedLink'
import { sendToTelegram } from '../utils/sendToTelegram'

export default function Contact({ lang, t }) {
  const c = t.contactPage

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const msg = `📩 <b>Kontakt formasi orqali xabar</b>\n\n👤 <b>Ism:</b> ${name}\n📧 <b>Email:</b> ${email}\n📞 <b>Telefon:</b> ${phone}\n📌 <b>Mavzu:</b> ${subject || "Ko'rsatilmagan"}\n💬 <b>Xabar:</b>\n${message}\n\n📍 <b>Manba:</b> Kontakt sahifasi - Umumiy so'rov formasi\n🌐 <b>Sahifa:</b> /contact`
    const ok = await sendToTelegram(msg)
    setLoading(false)
    if (ok) {
      setName('')
      setEmail('')
      setPhone('')
      setSubject('')
      setMessage('')
    }
  }

  return (
    <div className="bg-[#F7FAFF] min-h-screen">
      {/* HERO */}
      <section className="relative h-[320px] md:h-[400px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="/images/about/about-3.webp"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Contact hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041424]/90 via-[#041424]/80 to-[#041424]/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">{c.pageTitle || t.nav.contact}</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-white/70 hover:text-white transition-colors">{t.nav.home}</Link>
            <svg className="w-4 h-4 text-[#0C5ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0C5ADB] font-bold">{t.nav.contact}</span>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-16 md:py-20 relative -mt-16 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Location */}
            <div className="bg-white rounded-[24px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all border border-[#e7edf5]">
              <div className="w-14 h-14 bg-[#0C5ADB]/10 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#0C5ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xs font-extrabold text-[#0C5ADB] uppercase tracking-widest mb-2">{c.locationTitle || 'Manzil'}</h4>
              <p className="text-[#041424] text-[15px] font-bold leading-relaxed mb-3">{c.address}</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-[#0C5ADB] text-[11px] font-extrabold uppercase tracking-widest hover:gap-3 inline-flex items-center gap-2 transition-all">
                Manzilni ko'rish
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-[24px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all border border-[#e7edf5]">
              <div className="w-14 h-14 bg-[#0C5ADB]/10 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#0C5ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-xs font-extrabold text-[#0C5ADB] uppercase tracking-widest mb-2">{c.phoneTitle || 'Telefon'}</h4>
              <a href="tel:+998903258600" className="text-[#041424] text-[15px] font-bold leading-relaxed block mb-3 hover:text-[#0C5ADB] transition-colors">+998 90 325 86 00</a>
              <a href="tel:+998903258600" className="text-[#0C5ADB] text-[11px] font-extrabold uppercase tracking-widest hover:gap-3 inline-flex items-center gap-2 transition-all">
                Qo'ng'iroq qilish
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Telegram/Email */}
            <div className="bg-white rounded-[24px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all border border-[#e7edf5]">
              <div className="w-14 h-14 bg-[#0C5ADB]/10 rounded-2xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#0C5ADB]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <h4 className="text-xs font-extrabold text-[#0C5ADB] uppercase tracking-widest mb-2">Telegram</h4>
              <a href="https://t.me/Shavkat_lor" target="_blank" rel="noreferrer" className="text-[#041424] text-[15px] font-bold leading-relaxed block mb-3 hover:text-[#0C5ADB] transition-colors">@Shavkat_lor</a>
              <a href="https://t.me/Shavkat_lor" target="_blank" rel="noreferrer" className="text-[#0C5ADB] text-[11px] font-extrabold uppercase tracking-widest hover:gap-3 inline-flex items-center gap-2 transition-all">
                Telegram orqali bog'lanish
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + MAP */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#0C5ADB] mb-3">
              — {c.formBadge || 'Takliflarimiz'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#041424] leading-[1.15]">
              {c.formTitle || "So'rov yuborish"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl border border-[#e7edf5]">
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="text-xs font-bold text-[#041424] uppercase tracking-widest mb-2 block">{c.name || 'Ism'} *</label>
                    <input
                      type="text"
                      placeholder={c.namePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-5 py-3.5 bg-[#F7FAFF] border border-[#e7edf5] rounded-xl text-sm text-[#041424] placeholder-[#6b7280] outline-none focus:border-[#0C5ADB] focus:bg-white focus:ring-4 focus:ring-[#0C5ADB]/10 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#041424] uppercase tracking-widest mb-2 block">{c.email || 'Email'} *</label>
                    <input
                      type="email"
                      placeholder={c.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-3.5 bg-[#F7FAFF] border border-[#e7edf5] rounded-xl text-sm text-[#041424] placeholder-[#6b7280] outline-none focus:border-[#0C5ADB] focus:bg-white focus:ring-4 focus:ring-[#0C5ADB]/10 transition-all"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="text-xs font-bold text-[#041424] uppercase tracking-widest mb-2 block">{c.phone || 'Telefon'} *</label>
                    <input
                      type="tel"
                      placeholder={c.phonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-5 py-3.5 bg-[#F7FAFF] border border-[#e7edf5] rounded-xl text-sm text-[#041424] placeholder-[#6b7280] outline-none focus:border-[#0C5ADB] focus:bg-white focus:ring-4 focus:ring-[#0C5ADB]/10 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#041424] uppercase tracking-widest mb-2 block">{c.subject || 'Mavzu'}</label>
                    <input
                      type="text"
                      placeholder={c.subjectPlaceholder}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-5 py-3.5 bg-[#F7FAFF] border border-[#e7edf5] rounded-xl text-sm text-[#041424] placeholder-[#6b7280] outline-none focus:border-[#0C5ADB] focus:bg-white focus:ring-4 focus:ring-[#0C5ADB]/10 transition-all"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="text-xs font-bold text-[#041424] uppercase tracking-widest mb-2 block">{c.message || 'Xabar'} *</label>
                  <textarea
                    rows="5"
                    placeholder={c.messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-5 py-3.5 bg-[#F7FAFF] border border-[#e7edf5] rounded-xl text-sm text-[#041424] placeholder-[#6b7280] outline-none focus:border-[#0C5ADB] focus:bg-white focus:ring-4 focus:ring-[#0C5ADB]/10 transition-all resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0C5ADB] hover:bg-[#094bbd] text-white font-bold text-[13px] uppercase tracking-widest rounded-full transition-all shadow-lg shadow-[#0C5ADB]/40 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer disabled:opacity-60"
                >
                  {loading ? 'Yuborilmoqda...' : c.submit || 'Xabar yuborish'}
                  {!loading && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </button>
              </form>
            </div>

            {/* Map with marker */}
            <div className="rounded-[32px] overflow-hidden shadow-xl border border-[#e7edf5] min-h-[400px] bg-white relative">
              <iframe
                src="https://maps.google.com/maps?q=41.283611,69.203611&hl=uz&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '480px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EndoLor klinika manzili"
              />
              <a
                href="https://maps.google.com/?q=41.283611,69.203611"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 left-4 right-4 bg-white shadow-lg rounded-2xl p-4 flex items-center gap-3 hover:shadow-xl transition-shadow"
              >
                <div className="w-11 h-11 shrink-0 bg-[#0C5ADB] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-[#0C5ADB] font-extrabold">EndoLor Klinika</div>
                  <div className="text-xs text-[#041424] font-bold truncate">{c.address}</div>
                </div>
                <svg className="w-4 h-4 text-[#0C5ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
