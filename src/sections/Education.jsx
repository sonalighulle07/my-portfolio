import { Award, GraduationCap, MapPin, Calendar, BadgeCheck } from 'lucide-react'
import { education, courses } from '../data/profile'
import { SectionHeading } from '../components/ui'
import { useReveal } from '../hooks'

export default function Education() {
  const headingRef = useReveal()
  const degreeRef = useReveal()
  const certRef = useReveal()

  return (
    <section id="education" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_0%,color-mix(in_oklab,var(--color-accent-500)_8%,transparent),transparent_60%)]"
      />
      <div className="container-page">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Qualifications"
            title="Education and Training"
            description="My degree and the course that built my full-stack base."
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Degrees */}
          <div ref={degreeRef} className="reveal">
            <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold text-ink">
              <GraduationCap className="h-5 w-5 text-accent-500" strokeWidth={1.8} />
              Degree
            </h3>

            <div className="relative mt-6 space-y-6">
              <div
                aria-hidden
                className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-accent-500/60 via-line-strong to-transparent md:left-[9px]"
              />
              {education.map((edu) => (
                <article key={edu.degree} className="relative pl-9 md:pl-12">
                  <span
                    aria-hidden
                    className="absolute top-1.5 left-0 grid h-4 w-4 place-items-center rounded-full border-2 border-accent-500 bg-bg md:h-[18px] md:w-[18px]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  </span>

                  <div className="group rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/50 hover:shadow-lift sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <h4 className="max-w-md font-display text-base leading-snug font-semibold text-ink text-pretty sm:text-[17px]">
                        {edu.degree}
                      </h4>
                      <span className="shrink-0 rounded-lg border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-ink-muted">
                        {edu.period}
                      </span>
                    </div>

                    <p className="mt-2 flex items-start gap-1.5 text-sm text-ink-soft text-pretty">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.9} />
                      {edu.institution}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-line pt-4">
                      {edu.score && (
                        <span className="inline-flex items-center gap-2 rounded-lg border border-brand-500/25 bg-brand-500/10 px-2.5 py-1 text-xs font-semibold text-brand-fg">
                          <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2.2} />
                          {edu.score}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-muted">
                        <Calendar className="h-3.5 w-3.5" strokeWidth={1.9} />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div ref={certRef} className="reveal">
            <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold text-ink">
              <Award className="h-5 w-5 text-amber-500" strokeWidth={1.8} />
              Courses
            </h3>

            <div className="mt-6 space-y-3">
              {courses.map((cert) => (
                <div
                  key={cert.title}
                  className="group flex items-start gap-3.5 rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/50 hover:shadow-lift"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-500/12">
                    <Award className="h-4 w-4 text-amber-500" strokeWidth={1.9} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm leading-snug font-semibold text-ink text-pretty">
                      {cert.title}
                    </p>
                    <p className="mt-1 text-xs text-ink-muted">{cert.issuer}</p>
                    {cert.detail && (
                      <p className="mt-2 text-xs leading-relaxed text-ink-soft text-pretty">{cert.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
