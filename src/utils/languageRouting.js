// URL codes map to the existing translation keys (Cyrillic is stored as "oz").
const urlLanguages = {
  uz: 'uz',
  ru: 'ru',
  en: 'en',
  'Ўз': 'oz',
}

export function getLanguageRoute(pathname) {
  const segment = pathname.split('/')[1]
  let decodedSegment = segment
  try {
    // Browsers may supply Cyrillic URL characters in percent-encoded form.
    decodedSegment = decodeURIComponent(segment)
  } catch {
    // Malformed URLs retain the existing unmatched-route behaviour.
  }
  const isLegacyLanguage = decodedSegment === 'uz-Cyrl'
  const hasLanguage = isLegacyLanguage || Object.hasOwn(urlLanguages, decodedSegment)
  const urlLang = isLegacyLanguage ? 'Ўз' : hasLanguage ? decodedSegment : 'uz'
  const lang = urlLanguages[urlLang]

  return {
    lang,
    urlLang,
    htmlLang: lang === 'oz' ? 'uz-Cyrl' : lang,
    isLegacyLanguage,
    hasLanguage,
    pagePath: hasLanguage ? pathname.slice(segment.length + 1) || '/' : pathname,
  }
}

// For application page paths only; assets and external URLs keep their addresses.
export function localizedPath(pathname, lang) {
  const urlLang = Object.keys(urlLanguages).find((code) => urlLanguages[code] === lang) || 'uz'
  const { pagePath } = getLanguageRoute(pathname)
  return `/${urlLang}${pagePath === '/' ? '' : pagePath}`
}
