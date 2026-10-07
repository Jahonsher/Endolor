import { Link, parsePath, useLocation } from 'react-router-dom'
import { getLanguageRoute, localizedPath } from '../utils/languageRouting'

export default function LocalizedLink({ to, ...props }) {
  const { pathname } = useLocation()
  const { lang } = getLanguageRoute(pathname)
  const target = typeof to === 'string' ? parsePath(to) : to
  const isPagePath = target.pathname?.startsWith('/') && !target.pathname.startsWith('//')

  return <Link {...props} to={isPagePath ? { ...target, pathname: localizedPath(target.pathname, lang) } : to} />
}
