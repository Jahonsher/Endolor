import { useState } from 'react'
import Link from '../components/LocalizedLink'
import operationsData from '../data/operations.json'
import { sendToTelegram } from '../utils/sendToTelegram'

function PageHero({ title, breadcrumbHome, breadcrumbCurrent }) {
  return (
    <section className="relative h-[320px] md:h-[400px] flex items-center justify-center text-white overflow-hidden">
      <img
        src="/images/hero/hero1.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041424]/90 via-[#041424]/80 to-[#083f8d]/60" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">{title}</h1>
        <div className="flex items-center justify-center gap-2 text-sm">
          <Link to="/" className="text-white/70 hover:text-white transition-colors">{breadcrumbHome}</Link>
          <svg className="w-4 h-4 text-[#0C5ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white font-bold">{breadcrumbCurrent}</span>
        </div>
      </div>
    </section>
  )
}

export default function Services({ lang, t }) {
  const ops = operationsData[lang]
  const m = t.modal

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)

  function openModal(service) {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const serviceName = selectedService?.name || "Ko'rsatilmagan"
    const serviceId = selectedService?.id ? `#${selectedService.id}` : ''
    const msg = `💼 <b>Xizmat uchun so'rov</b>\n\n👤 <b>Ism:</b> ${name}\n📞 <b>Telefon:</b> ${phone}\n\n🔧 <b>Tanlangan xizmat:</b> ${serviceName} ${serviceId}\n📍 <b>Manba:</b> Xizmatlar sahifasi\n🌐 <b>Sahifa:</b> /services`
    const ok = await sendToTelegram(msg)
    setLoading(false)
    if (ok) {
      setName('')
      setPhone('')
      setIsModalOpen(false)
      setSelectedService(null)
    }
  }

  return (
    <div className="bg-[#F7FAFF] min-h-screen">
      <PageHero
        title={t.nav.services}
        breadcrumbHome={t.nav.home}
        breadcrumbCurrent={t.nav.services}
      />

      <div className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#0C5ADB] mb-3">
              — {ops.badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#041424] mb-4 leading-[1.15]">
              {ops.title}
            </h2>
            <p className="text-[#5b6675] text-[15px] leading-relaxed">{ops.desc}</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ops.items.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-[24px] p-5 border border-[#e7edf5] hover:border-transparent hover:shadow-2xl hover:shadow-[#0C5ADB]/15 transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative mb-5 overflow-hidden rounded-2xl bg-[#F1F5FD]">
                  {item.img ? (
                    <img src={item.img} alt={item.name} className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-44 flex items-center justify-center bg-gradient-to-br from-[#F1F5FD] to-[#eef3ff]">
                      <svg className="w-16 h-16 text-[#0C5ADB]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 w-10 h-10 bg-[#0C5ADB] rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                    {String(item.id).padStart(2, '0')}
                  </div>
                </div>

                <h4 className="font-extrabold text-[#041424] text-[15px] mb-4 leading-snug flex-1 min-h-[44px] group-hover:text-[#0C5ADB] transition-colors">
                  {item.name}
                </h4>

                <button
                  onClick={() => openModal(item)}
                  className="inline-flex items-center gap-2 text-[#0C5ADB] text-[11px] font-extrabold uppercase tracking-widest group-hover:gap-3 transition-all mt-auto cursor-pointer"
                >
                  {ops.serviceBtn || 'Xizmatdan foydalanish'}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease]">
          <div className="absolute inset-0 bg-[#041424]/70 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white w-full max-w-[500px] rounded-[32px] p-8 md:p-10 shadow-2xl animate-[zoomIn_0.25s_ease]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F1F5FD] hover:bg-[#e7edf5] flex items-center justify-center text-[#041424] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#041424] mb-2">{m.title}</h2>

            {selectedService && (
              <div className="flex items-start gap-3 p-3 bg-[#F1F5FD] rounded-xl mb-4 border border-[#e7edf5]">
                <div className="w-9 h-9 shrink-0 bg-[#0C5ADB] rounded-lg flex items-center justify-center text-white font-extrabold text-xs">
                  {String(selectedService.id).padStart(2, '0')}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-[#0C5ADB] mb-0.5">Tanlangan xizmat</div>
                  <div className="text-[13px] font-bold text-[#041424] leading-snug">{selectedService.name}</div>
                </div>
              </div>
            )}

            <p className="text-[#5b6675] text-sm mb-6 leading-relaxed">{m.desc}</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-[#041424] uppercase tracking-widest mb-2">{m.nameLabel}</label>
                <input
                  type="text"
                  placeholder={m.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-3.5 bg-[#F7FAFF] border border-[#e7edf5] rounded-xl text-sm text-[#041424] placeholder-[#6b7280] outline-none focus:border-[#0C5ADB] focus:bg-white focus:ring-4 focus:ring-[#0C5ADB]/10 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#041424] uppercase tracking-widest mb-2">{m.phoneLabel}</label>
                <input
                  type="tel"
                  placeholder={m.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-5 py-3.5 bg-[#F7FAFF] border border-[#e7edf5] rounded-xl text-sm text-[#041424] placeholder-[#6b7280] outline-none focus:border-[#0C5ADB] focus:bg-white focus:ring-4 focus:ring-[#0C5ADB]/10 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#0C5ADB] hover:bg-[#094bbd] text-white font-bold text-[13px] uppercase tracking-widest rounded-full transition-all shadow-lg shadow-[#0C5ADB]/40 cursor-pointer disabled:opacity-60"
              >
                {loading ? 'Yuborilmoqda...' : m.submit}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
