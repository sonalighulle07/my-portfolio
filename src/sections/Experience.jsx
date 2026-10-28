import { Briefcase, Sparkles } from 'lucide-react'
import { experience } from '../data/profile'
import { SectionHeading } from '../components/ui'
import { useReveal } from '../hooks'

export default function Experience() {
  const headingRef = useReveal()
  const listRef = useReveal()

  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="container-page">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Experience"
            title="Work Experience"
            description="My current role, my internship, and the work I did in them."
          />
        </div>

        <div ref={listRef} className="reveal relative mt-12">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-brand-500/60 via-line-strong to-transparent md:left-[9px]"
          />
          <div className="space-y-8">
            {experience.map((job) => (
              <TimelineItem key={job.role} {...job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ role, company, period, points, stack }) {
  return (
    <article className="relative pl-9 md:pl-12">
      <span
        aria-hidden
        className="absolute top-1.5 left-0 grid h-4 w-4 place-items-center rounded-full border-2 border-brand-500 bg-bg md:h-[18px] md:w-[18px]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
      </span>

      <div className="group rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/45 hover:shadow-lift sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div>
            <h3 className="font-display text-base font-semibold text-ink sm:text-[17px]">{role}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-brand-fg">
              <Briefcase className="h-3.5 w-3.5" strokeWidth={1.9} />
              {company}
            </p>
          </div>
          <span className="shrink-0 rounded-lg border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-ink-muted">
            {period}
          </span>
        </div>

        <ul className="mt-4 space-y-2.5">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
              <span className="text-sm leading-relaxed text-ink-soft text-pretty">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 font-mono text-[11px] text-ink-muted"
            >
              <Sparkles className="h-3 w-3 text-brand-500/70" strokeWidth={2.2} />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
