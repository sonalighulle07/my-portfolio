import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, X, Sun, Moon, FileText } from 'lucide-react'
import { navLinks, profile } from '../data/profile'
import { useActiveSection, useTheme } from '../hooks'
import { closeMenu, selectMenuOpen, selectScrolled, setScrolled, toggleMenu } from '../store/uiSlice'

const sectionIds = navLinks.map((l) => l.id)

export default function Header() {
  const dispatch = useDispatch()
  const scrolled = useSelector(selectScrolled)
  const open = useSelector(selectMenuOpen)
  const { theme, toggle } = useTheme()
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => dispatch(setScrolled(window.scrollY > 12))
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [dispatch])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && dispatch(closeMenu())
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [dispatch])

  const go = (id) => {
    dispatch(closeMenu())
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-line bg-bg/80 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/65'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="group"
        >
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand-fg">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                active === link.id ? 'text-brand-fg' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {link.label}
              {active === link.id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-ink-soft transition-all duration-300 hover:border-brand-400/60 hover:text-brand-500"
          >
            <Sun
              className={`h-[18px] w-[18px] transition-all duration-300 ${
                theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
              }`}
              strokeWidth={1.9}
            />
            <Moon
              className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
                theme === 'dark' ? '-rotate-90 scale-0' : 'rotate-0 scale-100'
              }`}
              strokeWidth={1.9}
            />
          </button>

          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download="Sonali_Ghulle_Resume.pdf"
              className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/30 sm:inline-flex"
            >
              <FileText className="h-4 w-4" strokeWidth={2} />
              Resume
            </a>
          )}

          <button
            onClick={() => dispatch(toggleMenu())}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-ink transition-all duration-300 md:hidden"
          >
            {open ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-line bg-bg/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? 'max-h-[26rem] border-b' : 'max-h-0'
        }`}
      >
        <div className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              style={{ transitionDelay: open ? `${i * 45}ms` : '0ms' }}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-medium transition-all duration-300 ${
                open ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'
              } ${
                active === link.id
                  ? 'bg-brand-500/10 text-brand-fg'
                  : 'text-ink-soft hover:bg-surface-2 hover:text-ink'
              }`}
            >
              {link.label}
              <span
                aria-hidden
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  active === link.id ? 'bg-brand-500 opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          ))}

          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download="Sonali_Ghulle_Resume.pdf"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-3 text-sm font-semibold text-white sm:hidden"
            >
              <FileText className="h-4 w-4" strokeWidth={2} />
              Download Resume
            </a>
          )}
        </div>
      </div>
    </header>
  )
}