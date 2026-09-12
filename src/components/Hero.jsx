import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slideImages = [
  '/images/hero/hero1.webp',
  '/images/hero/hero2.webp',
  '/images/about/about-1.webp',
]

export default function Hero({ lang, t }) {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slideImages.length
        setAnimKey((k) => k + 1)
        return next
      })
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  function goToSlide(index) {
    setCurrent(index)
    setAnimKey((k) => k + 1)
  }

  function prevSlide() {
    goToSlide(current === 0 ? slideImages.length - 1 : current - 1)
  }

  function nextSlide() {
    goToSlide((current + 1) % slideImages.length)
  }

  const slide = t.hero.slides[current]

  return (
    <section id="home" className="relative">
      <div className="relative h-[560px] md:h-[680px] lg:h-[720px] overflow-hidden">
        {/* Background slides */}
        {slideImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
              index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ zIndex: index === current ? 1 : 0 }}
          >
            <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#041424]/85 via-[#041424]/60 to-[#041424]/20" />
          </div>
        ))}

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Content */}
        <div className="relative z-[5] h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl" key={animKey}>
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/30 text-white text-[11px] font-extrabold uppercase tracking-[0.3em] rounded-full mb-6 animate-[fadeUp_0.6s_ease_forwards]">
                {slide.badge}
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.05] mb-6 animate-[fadeUp_0.6s_0.15s_ease_forwards]">
                {slide.title1}
                <br />
                <span className="text-[#0C5ADB]" style={{ textShadow: '0 2px 20px rgba(12,90,219,0.5)' }}>{slide.title2}</span>
              </h1>

              <p className="text-base md:text-lg text-white/85 leading-relaxed mb-9 max-w-xl animate-[fadeUp_0.6s_0.3s_ease_forwards]">
                {slide.desc}
              </p>

              <div className="flex flex-wrap gap-4 animate-[fadeUp_0.6s_0.45s_ease_forwards]">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0C5ADB] hover:bg-[#094bbd] text-white font-bold text-[13px] uppercase tracking-widest rounded-full transition-all shadow-lg shadow-[#0C5ADB]/40 hover:shadow-xl hover:-translate-y-0.5"
                >
                  {t.hero.btn}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-[13px] uppercase tracking-widest rounded-full transition-all"
                >
                  {t.hero.contactBtn || t.nav.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110 cursor-pointer border border-white/20"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110 cursor-pointer border border-white/20"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === current ? 'w-10 bg-[#0C5ADB]' : 'w-2.5 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
