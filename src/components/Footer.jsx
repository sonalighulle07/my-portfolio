import { ArrowUp, Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { navLinks, profile, socials } from '../data/profile'

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail }

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line">
      {/* Same hairline accent used elsewhere, kept purely as a quiet nod to
          the rest of the site rather than a decorative background. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
      />

      <div className="container-page">
        {/* Main row */}
        <div className="flex flex-col items-center gap-8 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
          {/* Brand */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              scrollToTop()
            }}
            className="group inline-flex items-center gap-2.5"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-accent-500 font-display text-sm font-bold text-white shadow-md shadow-brand-500/25 transition-transform duration-300 group-hover:scale-105">
              {profile.initials}
            </span>
            <span className="text-left">
              <span className="block font-display text-[15px] font-semibold tracking-tight text-ink">
                {profile.name}
              </span>
              <span className="block text-xs text-ink-muted">{profile.role}</span>
            </span>
          </a>

          {/* Nav links */}
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToId(link.id)}
                className="text-sm text-ink-soft transition-colors duration-300 hover:text-brand-fg"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials — plain icons, no boxes, so they stay light */}
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = iconMap[social.icon] ?? Mail
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.icon === 'mail' ? undefined : '_blank'}
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  title={social.label}
                  className="text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-brand-fg"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-center gap-3 border-t border-line py-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-ink-muted">
            © {year} {profile.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 text-xs text-ink-muted transition-colors duration-300 hover:text-brand-fg"
          >
            Back to top
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed right-5 bottom-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink-soft shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/60 hover:text-brand-fg hover:shadow-lift sm:right-6 sm:bottom-6"
      >
        <ArrowUp className="h-[18px] w-[18px]" strokeWidth={2} />
      </button>
    </footer>
  )
}