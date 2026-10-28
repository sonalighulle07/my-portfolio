import { useDispatch, useSelector } from 'react-redux'
import { Check, ExternalLink, Folder, Layers3, Star } from 'lucide-react'
import { Github } from '../components/BrandIcons'
import { socials } from '../data/profile'
import { SectionHeading } from '../components/ui'
import { useReveal } from '../hooks'
import { selectProjects, toggleProject } from '../store/projectsSlice'

export default function Projects() {
  const projects = useSelector(selectProjects)
  const headingRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="container-page">
        <div ref={headingRef} className="reveal">
          <SectionHeading eyebrow="Portfolio" title="My Projects" />
        </div>

        <div ref={gridRef} className="reveal mt-12 space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const dispatch = useDispatch()
  const open = project.open
  const githubHref = socials.find((s) => s.icon === 'github')?.href
  const repoHref = project.links?.repo ?? githubHref
  const repoLabel = 'View on GitHub'

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:border-brand-400/45 hover:shadow-lift">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: summary */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-fg uppercase">
                <Star className="h-3 w-3" strokeWidth={2.5} />
                Featured
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-3 py-1 text-[11px] font-medium text-ink-muted">
              <Folder className="h-3 w-3" strokeWidth={2.2} />
              {project.category}
            </span>
          </div>

          <h3 className="mt-4 font-display text-xl font-bold text-ink sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-1.5 font-mono text-xs text-brand-fg">{project.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft text-pretty">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 font-mono text-[11px] font-medium text-ink-soft"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              onClick={() => dispatch(toggleProject(project.name))}
              aria-expanded={open}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-fg transition-colors hover:text-brand-700 dark:hover:text-brand-300"
            >
              {open ? 'Hide details' : 'Show details'}
              <span
                className={`inline-block transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              >
                ▾
              </span>
            </button>

            {repoHref && (
              <a
                href={repoHref}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                <Github className="h-4 w-4" strokeWidth={1.9} />
                {repoLabel}
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            )}
          </div>
        </div>

        {/* Right: highlights */}
        <div className="relative border-t border-line bg-surface-2/40 p-6 sm:p-8 lg:border-t-0 lg:border-l">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,color-mix(in_oklab,var(--color-brand-500)_10%,transparent),transparent_60%)]"
          />
          <div className="relative">
            <h4 className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.18em] text-ink-muted uppercase">
              <Layers3 className="h-3.5 w-3.5" strokeWidth={2.2} />
              Highlights
            </h4>

            <ul
              className={`mt-5 space-y-3.5 transition-all duration-500 ${
                open ? 'max-h-[32rem] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
              }`}
            >
              {project.highlights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-brand-500/15">
                    <Check className="h-3 w-3 text-brand-500" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-soft text-pretty">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}