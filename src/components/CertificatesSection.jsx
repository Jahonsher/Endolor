import { useEffect, useRef, useState } from 'react'
import certificates from '../data/certificates.json'
import './CertificatesSection.css'

const labels = {
  uz: { badge: 'Bilim va malaka', title: 'Sertifikatlarimiz', intro: 'Xalqaro kongresslar, amaliy kurslar va malaka oshirish dasturlaridagi ishtirokimiz.', hint: 'Sertifikatni bosib, batafsil tanishing', view: 'Batafsil ko‘rish', close: 'Yopish', pause: 'Aylanishni to‘xtatish', play: 'Aylanishni davom ettirish', previous: 'Oldingi sertifikatlar', next: 'Keyingi sertifikatlar', reason: 'Sertifikat haqida', original: 'Asl PDF hujjatni ochish', page: 'Sahifa' },
  oz: { badge: 'Билим ва малака', title: 'Сертификатларимиз', intro: 'Халқаро конгресслар, амалий курслар ва малака ошириш дастурларидаги иштирокимиз.', hint: 'Сертификатни босиб, батафсил танишинг', view: 'Батафсил кўриш', close: 'Ёпиш', pause: 'Айланишни тўхтатиш', play: 'Айланишни давом эттириш', previous: 'Олдинги сертификатлар', next: 'Кейинги сертификатлар', reason: 'Сертификат ҳақида', original: 'Асл PDF ҳужжатни очиш', page: 'Саҳифа' },
  ru: { badge: 'Знания и квалификация', title: 'Наши сертификаты', intro: 'Участие в международных конгрессах, практических курсах и программах повышения квалификации.', hint: 'Нажмите на сертификат, чтобы узнать больше', view: 'Подробнее', close: 'Закрыть', pause: 'Приостановить прокрутку', play: 'Продолжить прокрутку', previous: 'Предыдущие сертификаты', next: 'Следующие сертификаты', reason: 'О сертификате', original: 'Открыть оригинал PDF', page: 'Страница' },
  en: { badge: 'Knowledge and qualifications', title: 'Our certificates', intro: 'Participation in international congresses, practical courses and professional development programmes.', hint: 'Select a certificate to learn more', view: 'View details', close: 'Close', pause: 'Pause scrolling', play: 'Resume scrolling', previous: 'Previous certificates', next: 'Next certificates', reason: 'About this certificate', original: 'Open original PDF', page: 'Page' },
}

function CertificateDialog({ certificate, lang, text, onClose }) {
  const dialogRef = useRef(null)
  const timerRef = useRef(null)
  const [closing, setClosing] = useState(false)
  const [page, setPage] = useState(0)
  const title = certificate.title[lang] || certificate.title.uz

  useEffect(() => {
    const dialog = dialogRef.current
    const previousFocus = document.activeElement
    const overflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      clearTimeout(timerRef.current)
      dialog.close()
      document.body.style.overflow = overflow
      previousFocus?.focus({ preventScroll: true })
    }
  }, [])

  function close() {
    if (closing) return
    setClosing(true)
    timerRef.current = setTimeout(onClose, 180)
  }

  return (
    <dialog ref={dialogRef} className={`certificate-dialog${closing ? ' is-closing' : ''}`} aria-labelledby="certificate-title" aria-describedby="certificate-description"
      onCancel={(event) => { event.preventDefault(); close() }}
      onClick={(event) => { if (event.target === event.currentTarget) close() }}>
      <div className="certificate-dialog-content">
        <button type="button" autoFocus className="certificate-close" aria-label={text.close} onClick={close}>×</button>
        <div className="certificate-full-image">
          <img key={page} src={certificate.images[page]} alt={`${title} — ${text.page} ${page + 1}`} />
          {certificate.images.length > 1 && (
            <div className="certificate-pages" aria-label={text.page}>
              {certificate.images.map((_, index) => (
                <button type="button" key={index} aria-label={`${text.page} ${index + 1}`} aria-pressed={page === index} onClick={() => setPage(index)}>{index + 1}</button>
              ))}
            </div>
          )}
        </div>
        <div className="certificate-details">
          <span className="certificate-eyebrow">{text.reason}</span>
          <h3 id="certificate-title">{title}</h3>
          <p className="certificate-meta">{certificate.meta}</p>
          <p id="certificate-description">{certificate.description[lang] || certificate.description.uz}</p>
          {certificate.pdf && <a href={certificate.pdf} target="_blank" rel="noreferrer">{text.original} <span aria-hidden="true">↗</span></a>}
        </div>
      </div>
    </dialog>
  )
}

export default function CertificatesSection({ lang }) {
  const text = labels[lang] || labels.uz
  const viewportRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const viewport = viewportRef.current
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame
    let previousTime = 0
    let position = viewport.scrollLeft
    function tick(time) {
      const elapsed = previousTime ? Math.min(time - previousTime, 50) : 0
      previousTime = time
      if (!paused && !hovered && !focused && !selected && !motion.matches) {
        if (Math.abs(viewport.scrollLeft - position) > 2) position = viewport.scrollLeft
        position += elapsed * 0.032
        const midpoint = viewport.scrollWidth / 2
        if (position >= midpoint) position -= midpoint
        viewport.scrollLeft = position
      } else {
        position = viewport.scrollLeft
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [paused, hovered, focused, selected])

  function move(direction) {
    setPaused(true)
    const viewport = viewportRef.current
    const midpoint = viewport.scrollWidth / 2
    if (direction < 0 && viewport.scrollLeft < 1) viewport.scrollLeft = midpoint
    if (direction > 0 && viewport.scrollLeft >= midpoint) viewport.scrollLeft -= midpoint
    viewport.scrollBy({ left: direction * Math.min(viewport.clientWidth * 0.8, 640), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }

  return (
    <section className="certificates-section" aria-labelledby="certificates-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="certificates-heading">
          <div>
            <span className="certificate-eyebrow">— {text.badge}</span>
            <h2 id="certificates-heading">{text.title}</h2>
            <p>{text.intro}</p>
          </div>
          <div className="certificate-controls">
            <button type="button" onClick={() => move(-1)} aria-label={text.previous}>←</button>
            <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? text.play : text.pause} aria-pressed={paused}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{paused ? <path d="M7 4v16l14-8z" /> : <path d="M6 4h4v16H6zm8 0h4v16h-4z" />}</svg>
            </button>
            <button type="button" onClick={() => move(1)} aria-label={text.next}>→</button>
          </div>
        </div>
        <div ref={viewportRef} className="certificates-viewport" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}
          onPointerDown={(event) => { if (event.pointerType === 'touch') setPaused(true) }}>
          <div className="certificates-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="certificates-group" aria-hidden={copy === 1 ? true : undefined}>
                {certificates.map((certificate, index) => {
                  const title = certificate.title[lang] || certificate.title.uz
                  return (
                    <button type="button" className="certificate-card" key={certificate.id} tabIndex={copy === 1 ? -1 : 0} onClick={() => setSelected(certificate)} aria-label={`${title} — ${text.view}`}>
                      <div className="certificate-thumbnail">
                        <img src={certificate.thumbnail} alt={title} loading={copy === 0 && index < 4 ? 'eager' : 'lazy'} draggable="false" width="480" height="340" />
                        <span className="certificate-expand" aria-hidden="true">↗</span>
                      </div>
                      <div className="certificate-card-text">
                        <span className="certificate-meta">{certificate.meta}</span>
                        <h3>{title}</h3>
                        <span className="certificate-view">{text.view} <span aria-hidden="true">→</span></span>
                      </div>
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
        <p className="certificate-hint">{text.hint}</p>
      </div>
      {selected && <CertificateDialog certificate={selected} lang={lang} text={text} onClose={() => setSelected(null)} />}
    </section>
  )
}
