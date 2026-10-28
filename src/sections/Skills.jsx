import { Brain, Cloud, Code2, Database, GitBranch, Layers, Puzzle, Server, Wrench } from 'lucide-react'
import { skillGroups } from '../data/profile'
import { SectionHeading } from '../components/ui'
import { useReveal } from '../hooks'

const iconMap = {
  Languages: Code2,
  Frontend: Layers,
  Backend: Server,
  Databases: Database,
  Cloud: Cloud,
  DSA: Puzzle,
  AI: Brain,
  Tools: GitBranch,
  default: Wrench,
}

const accentMap = {
  emerald: 'group-hover:border-emerald-400/50',
  sky: 'group-hover:border-sky-400/50',
  violet: 'group-hover:border-violet-400/50',
  amber: 'group-hover:border-amber-400/50',
  cyan: 'group-hover:border-cyan-400/50',
  pink: 'group-hover:border-pink-400/50',
}

const iconColorMap = {
  emerald: 'text-emerald-500',
  sky: 'text-sky-500',
  violet: 'text-violet-500',
  amber: 'text-amber-500',
  cyan: 'text-cyan-500',
  pink: 'text-pink-500',
}

function pickIcon(title) {
  const key = Object.keys(iconMap).find((k) => k !== 'default' && title.startsWith(k))
  return iconMap[key ?? 'default']
}

export default function Skills() {
  const headingRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-bg-soft to-transparent"
      />
      <div className="container-page">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Toolkit"
            title="Skills and Tools"
            description="Languages, frameworks, databases, and tools I have worked with."
          />
        </div>

        <div ref={gridRef} className="reveal mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = pickIcon(group.title)
            return (
              <article
                key={group.title}
                className={`group relative flex flex-col overflow-hidden rounded-card border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${accentMap[group.accent] ?? ''}`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface-3 ${iconColorMap[group.accent] ?? 'text-brand-500'}`}
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                  </span>
                  <h3 className="font-display text-[15px] font-semibold text-ink">{group.title}</h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 text-xs font-medium text-ink-soft transition-all duration-300 group-hover:border-line-strong group-hover:text-ink"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
