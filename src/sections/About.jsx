import { Wrench } from 'lucide-react'
import { aboutIntro, aboutParagraphs, techStack } from '../data/profile'
import { SectionHeading } from '../components/ui'
import { useReveal } from '../hooks'

export default function About() {
  const headingRef = useReveal()
  const bioRef = useReveal()
  const softRef = useReveal()

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container-page">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="About"
            title="About me"
            description={aboutIntro}
          />
        </div>

        <div
          ref={bioRef}
          className="reveal mt-10 max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft text-pretty"
        >
          {aboutParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <div ref={softRef} className="reveal mt-10 max-w-3xl border-t border-line pt-6">
          <h3 className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.18em] text-ink-muted uppercase">
            <Wrench className="h-3.5 w-3.5 text-pink-500" strokeWidth={2.2} />
            Tech I work with
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {techStack.map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-soft"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
