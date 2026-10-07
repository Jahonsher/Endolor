import { useState } from 'react'
import Link from '../components/LocalizedLink'
import CertificatesSection from '../components/CertificatesSection'

export default function About({ lang = 'uz', t }) {
  const ap = t?.aboutPage || {}

  const [activeImg, setActiveImg] = useState(0)
  const images = [
    '/images/carousel/carousel-1.png',
    '/images/carousel/carousel-2.png',
    '/images/carousel/carousel-3.png',
    '/images/carousel/carousel-4.png',
    '/images/carousel/carousel-5.png',
  ]

  const socialLinks = [
    { name: 'YOUTUBE', url: 'https://www.youtube.com/@shavkatlor' },
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/dr.shavkat_lor' },
    { name: 'TELEGRAM', url: 'https://t.me/shavkat_lor' },
  ]

  return (
    <div className="bg-[#F7FAFF] min-h-screen">
      {/* HERO */}
      <section className="relative h-[320px] md:h-[400px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="/images/about/about-2.webp"
          className="absolute inset-0 w-full h-full object-cover"
          alt="About hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041424]/90 via-[#041424]/80 to-[#041424]/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">{ap.hero?.title || t.nav.about}</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-white/70 hover:text-white transition-colors">{t.nav.home}</Link>
            <svg className="w-4 h-4 text-[#0C5ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0C5ADB] font-bold">{t.nav.about}</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="container mx-auto px-4 lg:px-8 -mt-16 relative z-10 pb-20">
        <div className="bg-white rounded-[32px] shadow-2xl shadow-[#0C5ADB]/10 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <div className="rounded-[24px] overflow-hidden shadow-lg mb-6 aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/i1d-lO4rpeE"
                  title="Endoskopik Timpanoplastika"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <img src="/images/about/clinic-1.jpg" alt="clinic" className="rounded-2xl h-32 w-full object-cover shadow-md" />
                <img src="/images/about/clinic-2.jpg" alt="clinic" className="rounded-2xl h-32 w-full object-cover shadow-md" />
                <img src="/images/about/clinic-3.jpg" alt="clinic" className="rounded-2xl h-32 w-full object-cover shadow-md" />
              </div>

              {/* Attention Box */}
              {ap.attentionBox && (
                <div className="bg-[#fbbf24]/10 border border-[#fbbf24]/40 p-6 rounded-2xl mt-8">
                  <h4 className="text-[#b45309] font-extrabold mb-2 tracking-widest uppercase text-xs">{ap.attentionBox.title}</h4>
                  <p className="text-[#041424] font-bold mb-3 text-sm">{ap.attentionBox.subtitle}</p>
                  <ul className="space-y-2">
                    {ap.attentionBox.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#5b6675] text-sm">
                        <span className="w-2 h-2 shrink-0 mt-1.5 bg-[#f59e0b] rounded-full" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#041424] leading-tight mb-4">{ap.mainTitle}</h2>
              <p className="text-[#0C5ADB] font-extrabold text-[11px] tracking-[0.25em] mb-6 uppercase">{ap.subTitle}</p>
              <p className="text-[#5b6675] mb-4 leading-relaxed text-[15px]">{ap.desc1}</p>
              <p className="text-[#5b6675] mb-8 leading-relaxed text-[15px]">{ap.desc2}</p>

              {/* Consultation Box */}
              {ap.consultationBox && (
                <div className="bg-[#F7FAFF] border border-[#e7edf5] p-6 rounded-2xl">
                  <h4 className="text-[#041424] font-extrabold mb-2 text-lg">{ap.consultationBox.title}</h4>
                  <p className="text-[#5b6675] text-sm mb-4 leading-relaxed">{ap.consultationBox.subtitle}</p>
                  <ul className="space-y-2">
                    {ap.consultationBox.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#041424] text-sm">
                        <span className="w-2 h-2 shrink-0 mt-1.5 bg-[#0C5ADB] rounded-full" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Social Buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-[#e7edf5] rounded-full text-[11px] font-extrabold text-[#5b6675] hover:bg-[#F1F5FD] hover:text-[#0C5ADB] hover:border-[#0C5ADB] transition-all duration-300 uppercase tracking-widest"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CertificatesSection lang={lang} />

      {/* GALLERY */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#0C5ADB] mb-3">
              — {ap.gallery?.subtitle || 'Klinika galereyasi'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#041424] leading-[1.15]">
              {ap.gallery?.title || 'Zamonaviy tibbiy muhit'}
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-[32px] overflow-hidden shadow-2xl h-[400px] md:h-[500px] bg-[#F1F5FD]">
              <img src={images[activeImg]} className="w-full h-full object-cover transition-all duration-500" alt="gallery" />
            </div>

            <button
              onClick={() => setActiveImg((p) => (p === 0 ? images.length - 1 : p - 1))}
              aria-label="Previous"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 text-[#041424]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveImg((p) => (p + 1) % images.length)}
              aria-label="Next"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 text-[#041424]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center flex-wrap gap-3 mt-8">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImg(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`w-24 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImg === idx ? 'border-[#0C5ADB] scale-110 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt="thumb" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
