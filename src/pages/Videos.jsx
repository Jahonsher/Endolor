import { useState } from 'react'
import videoDataAll from '../data/videos.json'

export default function Videos({ lang = 'uz', t }) {
  const currentContent = videoDataAll[lang] || videoDataAll['uz']
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeVideoId, setActiveVideoId] = useState(null)

  const filteredVideos =
    activeFilter === 'all'
      ? currentContent.items
      : currentContent.items.filter((v) => v.category === activeFilter)

  return (
    <div className="bg-[#F7FAFF] min-h-screen">
      {/* HERO */}
      <section className="relative h-[320px] md:h-[400px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="/images/hero/hero2.webp"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Videos hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041424]/90 via-[#041424]/80 to-[#041424]/60" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase mb-4 text-[#0C5ADB] font-extrabold">
            {currentContent.heroSubtitle}
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            {currentContent.heroTitle}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="/" className="text-white/70 hover:text-white transition-colors">{t.nav.home}</a>
            <svg className="w-4 h-4 text-[#0C5ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0C5ADB] font-bold">{t.nav.videos}</span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-14">
          <div className="max-w-xl">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#0C5ADB] mb-3">
              — {currentContent.filterBadge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#041424] mb-4 leading-[1.15]">
              {currentContent.filterTitle}
            </h2>
            <p className="text-[#5b6675] text-[15px] leading-relaxed">{currentContent.filterDesc}</p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-2xl justify-start lg:justify-end">
            {Object.keys(currentContent.categories).map((catKey) => (
              <button
                key={catKey}
                onClick={() => {
                  setActiveFilter(catKey)
                  setActiveVideoId(null)
                }}
                className={`px-5 py-2.5 rounded-full text-[11px] font-extrabold transition-all border uppercase tracking-widest cursor-pointer ${
                  activeFilter === catKey
                    ? 'bg-[#0C5ADB] text-white border-[#0C5ADB] shadow-lg shadow-[#0C5ADB]/30'
                    : 'bg-white text-[#5b6675] border-[#e7edf5] hover:border-[#0C5ADB] hover:text-[#0C5ADB]'
                }`}
              >
                {currentContent.categories[catKey]}
              </button>
            ))}
          </div>
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredVideos.map((video) => (
            <div key={video.id} className="flex flex-col group">
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-md border border-[#e7edf5] bg-[#041424] group-hover:shadow-2xl group-hover:shadow-[#0C5ADB]/20 transition-all duration-500">
                {activeVideoId === video.id ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full cursor-pointer" onClick={() => setActiveVideoId(video.id)}>
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041424]/70 via-transparent to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-[#0C5ADB] ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 bg-white/95 text-[#041424] text-[10px] px-3 py-1.5 rounded-full font-extrabold uppercase tracking-widest">
                      {currentContent.categories[video.category]}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-5 px-1">
                <h3 className="text-[#041424] font-bold text-[15px] mb-2 leading-snug line-clamp-2 h-11 group-hover:text-[#0C5ADB] transition-colors">
                  {video.title}
                </h3>
                <button
                  onClick={() => setActiveVideoId(activeVideoId === video.id ? null : video.id)}
                  className="text-[#0C5ADB] text-[11px] font-extrabold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
                >
                  {activeVideoId === video.id ? 'STOP' : currentContent.playBtn}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-20 text-[#6b7280] font-medium text-lg">
            Hozircha bu bo'limda videolar yo'q.
          </div>
        )}
      </section>
    </div>
  )
}
