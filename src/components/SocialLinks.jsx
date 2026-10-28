import { Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { socials } from '../data/profile'

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail }

export function SocialLinks({ size = 'md', className = '', variant = 'boxed' }) {
  const box = size === 'sm' ? 'h-9 w-9' : 'h-11 w-11'
  const icon = size === 'sm' ? 'h-4 w-4' : 'h-[18px] w-[18px]'
  const bare = variant === 'bare'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
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
            className={
              bare
                ? 'group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors duration-300 hover:text-brand-fg'
                : `${box} group inline-flex items-center justify-center rounded-xl border border-line bg-surface text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/60 hover:text-brand-500 hover:shadow-lift`
            }
          >
            <Icon
              className={`${bare ? 'h-4 w-4' : icon} transition-transform duration-300 ${
                bare ? '' : 'group-hover:scale-110'
              }`}
            />
            {bare && <span>{social.label}</span>}
          </a>
        )
      })}
    </div>
  )
}
