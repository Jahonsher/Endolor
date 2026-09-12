import { useState } from 'react'
import { Link } from 'react-router-dom'
import operationsData from '../data/operations.json'
import videosData from '../data/videos.json'
import { sendToTelegram } from '../utils/sendToTelegram'

// ===============================
// Intro / "Biz haqimizda" Section
// ===============================
function IntroSection({ t, onOpenModal }) {
  const about = t.home.about

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Images */}
          <div className="relative order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-[24px] overflow-hidden shadow-xl">
                  <img src="/images/about/about-1.webp" alt="Klinika" className="w-full h-56 object-cover" />
                </div>
                <div className="rounded-[24px] overflow-hidden shadow-xl">
                  <img src="/images/about/clinic-1.jpg" alt="Klinika" className="w-full h-44 object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="rounded-[24px] overflow-hidden shadow-xl">
                  <img src="/images/about/clinic-2.jpg" alt="Klinika" className="w-full h-44 object-cover" />
                </div>
                <div className="rounded-[24px] overflow-hidden shadow-xl">
                  <img src="/images/about/about-4.webp" alt="Klinika" className="w-full h-56 object-cover" />
                </div>
              </div>
            </div>

            {/* Floating experience badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-[#0C5ADB] rounded-2xl shadow-2xl shadow-[#0C5ADB]/40 p-5 text-white">
              <div className="text-3xl md:text-4xl font-extrabold leading-none">15+</div>
              <div className="text-[11px] uppercase tracking-widest mt-1 font-bold text-white/85">Yillik tajriba</div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="order-1 md:order-2">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#0C5ADB] mb-4">
              — {about.badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#041424] mb-6 leading-[1.15]">
              {about.title}
            </h2>

            <p className="text-[#5b6675] text-[15px] leading-relaxed mb-8">
              {about.desc}
            </p>

            <div className="space-y-3 mb-10">
              {about.symptoms.slice(0, 5).map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 bg-[#F1F5FD] rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-[#0C5ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#041424] text-[15px] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onOpenModal('Bosh sahifa - Konsultatsiyaga yozilish')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0C5ADB] hover:bg-[#094bbd] text-white font-bold text-[13px] uppercase tracking-widest rounded-full transition-all shadow-lg shadow-[#0C5ADB]/40 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                {about.btn}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#0C5ADB] text-[#0C5ADB] hover:bg-[#0C5ADB] hover:text-white font-bold text-[13px] uppercase tracking-widest rounded-full transition-all"
              >
                Batafsil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===============================
// Operations Section
// ===============================
function OperationsSection({ lang, onOpenModal }) {
  const ops = operationsData[lang]

  return (
    <section className="py-20 md:py-28 bg-[#F7FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#0C5ADB] mb-3">
              — {ops.badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#041424] leading-[1.15]">
              {ops.title}
            </h2>
            <p className="text-[#5b6675] text-[15px] leading-relaxed mt-4">{ops.desc}</p>
          </div>
          <Link
            to="/services"
            className="hidden md:inline-flex items-center gap-2 px-7 py-3.5 bg-[#0C5ADB] hover:bg-[#094bbd] text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg shadow-[#0C5ADB]/40 shrink-0"
          >
            {ops.allBtn || 'Barcha xizmatlar'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ops.items.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-[24px] p-5 border border-[#e7edf5] hover:border-transparent hover:shadow-2xl hover:shadow-[#0C5ADB]/15 transition-all duration-500 hover:-translate-y-1"
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

              <h4 className="font-extrabold text-[#041424] text-[15px] mb-4 leading-snug line-clamp-2 min-h-[44px] group-hover:text-[#0C5ADB] transition-colors">
                {item.name}
              </h4>

              <button
                onClick={() => onOpenModal(`Bosh sahifa / Operatsiya: ${item.name}`)}
                className="inline-flex items-center gap-2 text-[#0C5ADB] text-[11px] font-extrabold uppercase tracking-widest group-hover:gap-3 transition-all cursor-pointer"
              >
                {ops.btn || 'Batafsil'}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0C5ADB] hover:bg-[#094bbd] text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg shadow-[#0C5ADB]/40"
          >
            {ops.allBtn || 'Barcha xizmatlar'}
          </Link>
        </div>
      </div>
    </section>
  )
}

// ===============================
// Features Section
// ===============================
function FeaturesSection() {
  const features = {
    left: [
      { icon: 'equipment', title: 'Zamonaviy uskunalar', desc: "So'nggi rusumdagi endoskopik va lazer tizimlari bilan jihozlangan." },
      { icon: 'invasive', title: 'Minimal invaziv usullar', desc: "Kichik kesim, tez tiklanish va oz og'riqli protseduralar." },
    ],
    right: [
      { icon: 'doctor', title: 'Tajribali jarrohlar', desc: "15+ yillik amaliyot, minglab muvaffaqiyatli operatsiyalar." },
      { icon: 'clock', title: '24/7 xizmat', desc: "Dam olish kunlarisiz shifokor qabuli va shoshilinch yordam." },
      { icon: 'family', title: 'Barcha yosh guruhlari', desc: "Bolalar va kattalar uchun maxsus yondashuv va tayyorlangan xonalar." },
    ],
  }

  const iconMap = {
    equipment: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    invasive: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />,
    doctor: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    clock: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    family: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#0C5ADB] mb-3">
            — Siz uchun yanada yaxshi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#041424] leading-[1.15]">
            Eng yaxshi tibbiy tajriba
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left features */}
          <div className="space-y-6">
            {features.left.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-[#e7edf5]">
                <div className="w-12 h-12 rounded-xl bg-[#F1F5FD] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0C5ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    {iconMap[f.icon]}
                  </svg>
                </div>
                <h4 className="text-[#041424] font-extrabold text-lg mb-2">{f.title}</h4>
                <p className="text-[#5b6675] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-[#0C5ADB]/20">
              <img src="/images/about/lab.jpg" alt="Klinika" className="w-full h-[500px] object-cover" />
            </div>
          </div>

          {/* Right features */}
          <div className="space-y-6">
            {features.right.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-[#e7edf5]">
                <div className="w-12 h-12 rounded-xl bg-[#F1F5FD] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0C5ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    {iconMap[f.icon]}
                  </svg>
                </div>
                <h4 className="text-[#041424] font-extrabold text-lg mb-2">{f.title}</h4>
                <p className="text-[#5b6675] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ===============================
// Case Studies / Stats Section
// ===============================
function StatsSection({ t }) {
  const statIcons = [
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  ]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#041424]" />
      <img
        src="/images/about/lab.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041424] via-[#041424]/95 to-[#083f8d]/90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#0C5ADB] mb-3">
            — Amaliy holatlar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.15]">
            Bemorlarga qaytarilgan sog'liq
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mt-4">
            Har bir bemor uchun individual yondashuv, aniq tashxis va zamonaviy davolash usullari.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {t.home.stats.map((stat, i) => (
            <div key={i} className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center transition-all hover:-translate-y-1 cursor-default">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#0C5ADB] flex items-center justify-center shadow-lg shadow-[#0C5ADB]/40 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  {statIcons[i]}
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 leading-none">
                {stat.number}
                <span className="text-[#0C5ADB]">+</span>
              </div>
              <div className="text-[11px] uppercase tracking-widest text-white/60 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===============================
// Contact Form Section
// ===============================
function ContactFormSection({ t, formState, setField, onSubmit, loading }) {
  const c = t.home.contact

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#0C5ADB] mb-3">
              — {c.badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#041424] leading-[1.15] mb-6">
              {c.title}
            </h2>
            <p className="text-[#5b6675] text-[15px] leading-relaxed mb-8">
              {c.formTitle}
            </p>
            <div className="rounded-[32px] overflow-hidden shadow-2xl shadow-[#0C5ADB]/15">
              <img src="/images/about/contact.webp" alt="Bog'lanish" className="w-full h-[360px] object-cover" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F7FAFF] to-white rounded-[32px] p-8 md:p-10 shadow-xl border border-[#e7edf5]">
            <h3 className="text-2xl font-extrabold text-[#041424] mb-8">{c.formTitle}</h3>
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#041424] uppercase tracking-widest mb-2">{c.name} *</label>
                <input
                  type="text"
                  placeholder={c.namePlaceholder}
                  value={formState.name}
                  onChange={(e) => setField('name', e.target.value)}
                  className="w-full px-5 py-3.5 bg-white border border-[#e7edf5] rounded-xl text-sm text-[#041424] placeholder-[#6b7280] outline-none focus:border-[#0C5ADB] focus:ring-4 focus:ring-[#0C5ADB]/10 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#041424] uppercase tracking-widest mb-2">{c.phone} *</label>
                <input
                  type="tel"
                  placeholder={c.phonePlaceholder}
                  value={formState.phone}
                  onChange={(e) => setField('phone', e.target.value)}
                  className="w-full px-5 py-3.5 bg-white border border-[#e7edf5] rounded-xl text-sm text-[#041424] placeholder-[#6b7280] outline-none focus:border-[#0C5ADB] focus:ring-4 focus:ring-[#0C5ADB]/10 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#041424] uppercase tracking-widest mb-2">{c.message} *</label>
                <textarea
                  rows="4"
                  placeholder={c.messagePlaceholder}
                  value={formState.msg}
                  onChange={(e) => setField('msg', e.target.value)}
                  className="w-full px-5 py-3.5 bg-white border border-[#e7edf5] rounded-xl text-sm text-[#041424] placeholder-[#6b7280] outline-none focus:border-[#0C5ADB] focus:ring-4 focus:ring-[#0C5ADB]/10 transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#0C5ADB] hover:bg-[#094bbd] text-white font-bold text-[13px] uppercase tracking-widest rounded-full transition-all shadow-lg shadow-[#0C5ADB]/40 hover:shadow-xl cursor-pointer disabled:opacity-60"
              >
                {loading ? 'Yuborilmoqda...' : c.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===============================
// Videos Preview Section
// ===============================
function VideosPreviewSection({ lang }) {
  const videos = videosData[lang]?.items?.slice(0, 4) || []

  return (
    <section className="py-20 md:py-28 bg-[#F7FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#0C5ADB] mb-3">
              — Video namunalar
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#041424] leading-[1.15]">
              Bemorlar bo'yicha so'nggi videolar
            </h2>
          </div>
          <Link
            to="/videos"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border-2 border-[#0C5ADB] text-[#0C5ADB] hover:bg-[#0C5ADB] hover:text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shrink-0"
          >
            Hammasini ko'rish
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1 bg-[#041424]">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041424]/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-[#0C5ADB] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-bold text-[13px] leading-snug line-clamp-2">
                    {video.title}
                  </h4>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===============================
// Modal
// ===============================
function BookingModal({ isOpen, onClose, m, name, setName, phone, setPhone, onSubmit, loading, source }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease]">
      <div className="absolute inset-0 bg-[#041424]/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-[500px] rounded-[32px] p-8 md:p-10 shadow-2xl animate-[zoomIn_0.25s_ease]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F1F5FD] hover:bg-[#e7edf5] flex items-center justify-center text-[#041424] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl md:text-3xl font-extrabold text-[#041424] mb-2">{m.title}</h2>
        {source && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F1F5FD] rounded-lg text-xs font-bold text-[#0C5ADB] mb-3">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {source}
          </div>
        )}
        <p className="text-[#5b6675] text-sm mb-8 leading-relaxed">{m.desc}</p>

        <form className="space-y-5" onSubmit={onSubmit}>
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
  )
}

// ===============================
// Main Home Component
// ===============================
export default function Home({ lang, t }) {
  const m = t.modal

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalSource, setModalSource] = useState('')
  const [modalName, setModalName] = useState('')
  const [modalPhone, setModalPhone] = useState('')
  const [modalLoading, setModalLoading] = useState(false)

  const [contactForm, setContactForm] = useState({ name: '', phone: '', msg: '' })
  const [contactLoading, setContactLoading] = useState(false)

  const setContactField = (key, val) => setContactForm((s) => ({ ...s, [key]: val }))

  function openModal(source) {
    setModalSource(source || 'Bosh sahifa')
    setIsModalOpen(true)
  }

  async function handleModalSubmit(e) {
    e.preventDefault()
    setModalLoading(true)
    const msg = `🏥 <b>Yangi buyurtma</b>\n\n👤 <b>Ism:</b> ${modalName}\n📞 <b>Telefon:</b> ${modalPhone}\n\n📍 <b>Manba:</b> ${modalSource}\n🌐 <b>Sahifa:</b> Bosh sahifa`
    const ok = await sendToTelegram(msg)
    setModalLoading(false)
    if (ok) {
      setModalName('')
      setModalPhone('')
      setIsModalOpen(false)
    }
  }

  async function handleContactSubmit(e) {
    e.preventDefault()
    setContactLoading(true)
    const msg = `📋 <b>Bepul baho olish so'rovi</b>\n\n👤 <b>Ism:</b> ${contactForm.name}\n📞 <b>Telefon:</b> ${contactForm.phone}\n💬 <b>Xabar:</b> ${contactForm.msg}\n\n📍 <b>Manba:</b> Bosh sahifa - Bog'lanish formasi\n🌐 <b>Sahifa:</b> Bosh sahifa`
    const ok = await sendToTelegram(msg)
    setContactLoading(false)
    if (ok) setContactForm({ name: '', phone: '', msg: '' })
  }

  return (
    <div>
      <IntroSection t={t} onOpenModal={openModal} />
      <OperationsSection lang={lang} onOpenModal={openModal} />
      <FeaturesSection />
      <StatsSection t={t} />
      <VideosPreviewSection lang={lang} />
      <ContactFormSection
        t={t}
        formState={contactForm}
        setField={setContactField}
        onSubmit={handleContactSubmit}
        loading={contactLoading}
      />
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        m={m}
        name={modalName}
        setName={setModalName}
        phone={modalPhone}
        setPhone={setModalPhone}
        onSubmit={handleModalSubmit}
        loading={modalLoading}
        source={modalSource}
      />
    </div>
  )
}
