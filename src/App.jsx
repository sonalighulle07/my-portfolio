import { useEffect, useRef, useState } from 'react'
import Radar from './components/Radar.jsx'
import Project from './components/Project.jsx'
import Heading from './components/Heading.jsx'
import Magnetic from './components/Magnetic.jsx'
import Photo from './components/Photo.jsx'
import ContactForm from './components/ContactForm.jsx'
import { useScrollProgress, useFill } from './hooks.js'
import { ME, ABOUT, TECH, PROJECTS, EXPERIENCE, SKILLS, EDUCATION } from './data.js'

const wrap = 'max-w-[1080px] mx-auto px-5 md:px-8'
const outlineBtn = 'inline-block border-2 border-line px-6 py-3 rounded-sm font-medium hover:border-acc'
const solidBtn = 'inline-block bg-acc text-accon font-bold px-6 py-3 rounded-sm hover:brightness-95'

export default function App() {
  const [open, setOpen] = useState(0)
  const [theme, setTheme] = useState(null)
  const [copied, setCopied] = useState(false)
  const progress = useScrollProgress()
  const tlRef = useRef(null)
  const fill = useFill(tlRef)

  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    addEventListener('pointermove', move)
    return () => removeEventListener('pointermove', move)
  }, [])

  const flipTheme = () => {
    const current = theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const next = current === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
  }
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(ME.email); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { location.href = `mailto:${ME.email}` }
  }

  return (
    <div className="relative">
      <div className="spot" aria-hidden="true" />
      <div className="fixed left-0 top-0 h-[3px] bg-acc z-50" style={{ width: `${progress * 100}%` }} aria-hidden="true" />

      <div className="relative z-10">
        <header className={`${wrap} py-5 flex items-center justify-between`}>
          <span className="font-d font-bold text-lg">{ME.name}</span>
          <nav className="flex items-center gap-5 text-sm font-medium">
            <a className="hidden sm:inline hover:text-acct" href="#projects">Projects</a>
            <a className="hidden sm:inline hover:text-acct" href="#experience">Experience</a>
            <a className="hidden sm:inline hover:text-acct" href="#skills">Skills</a>
            <a className="hover:text-acct" href="#contact">Contact</a>
            <button onClick={flipTheme} className="border-2 border-line px-3 py-1 rounded-sm hover:border-acc" aria-label="Switch light and dark theme">Theme</button>
          </nav>
        </header>

        <main>
          <section className={`${wrap} pt-10 md:pt-16 pb-16 grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center`}>
            <div>
              <p className="rise inline-flex items-center gap-2 border-2 border-line px-3 py-1 rounded-full text-sm font-medium mb-5">
                <span className="relative flex w-2.5 h-2.5"><span className="absolute inline-flex w-full h-full rounded-full bg-acc animate-ping motion-reduce:animate-none" /><span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-acc" /></span>
                Open to full stack roles
              </p>
              <h1 className="rise font-d font-extrabold text-5xl md:text-7xl leading-[1.02] tracking-tight" style={{ animationDelay: '.1s' }}>
                Software for dockyard gates, attendance desks and streaming apps.
              </h1>
              <p className="rise mt-6 text-lg text-mute max-w-[54ch]" style={{ animationDelay: '.2s' }}>
                I’m Sonali. In 1.5 years I’ve shipped React, Node.js and MySQL products for a naval dockyard, an OTT platform and a CRM, including offline sync, OCR and RFID access control.
              </p>
              <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '.3s' }}>
                <Magnetic href="#projects" className={solidBtn}>View my projects</Magnetic>
                <Magnetic href="#contact" className={outlineBtn}>Contact me</Magnetic>
                {ME.resume && <Magnetic href={ME.resume} download className={outlineBtn}>Download resume</Magnetic>}
                {ME.github && <a href={ME.github} target="_blank" rel="noopener noreferrer" className="self-center underline underline-offset-4 font-medium hover:text-acct">GitHub</a>}
                {ME.linkedin && <a href={ME.linkedin} target="_blank" rel="noopener noreferrer" className="self-center underline underline-offset-4 font-medium hover:text-acct">LinkedIn</a>}
              </div>
            </div>
            <Radar />
          </section>

          <div className="marq-wrap border-y-2 border-line mb-24 overflow-hidden py-4" aria-label="Technologies I work with">
            <div className="marquee">
              {[0, 1].map((k) => (
                <ul key={k} className="flex items-center shrink-0" aria-hidden={k === 1}>
                  {TECH.map((t) => (
                    <li key={t} className="flex items-center font-d font-bold text-xl whitespace-nowrap">
                      <span className="px-6">{t}</span><span className="w-2 h-2 bg-acc inline-block" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <section id="about" className={`${wrap} pb-24 grid md:grid-cols-[260px_1fr] gap-x-12 gap-y-8 items-start`}>
            <Photo />
            <div>
              <Heading>About</Heading>
              <p className="text-lg max-w-[62ch] leading-relaxed">{ABOUT}</p>
            </div>
          </section>

          <section id="projects" className={`${wrap} pb-24`}>
            <Heading>Projects</Heading>
            <ul className="border-b-2 border-line">
              {PROJECTS.map((p, i) => (
                <Project key={p.name} project={p} id={`proj-${i}`} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
              ))}
            </ul>
          </section>

          <section id="experience" className={`${wrap} pb-24`}>
            <Heading>Experience</Heading>
            <div ref={tlRef} className="relative pl-8 ml-1">
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-line" />
              <span className="absolute left-0 top-0 w-[3px] bg-acc" style={{ height: `${fill * 100}%` }} />
              {EXPERIENCE.map((job) => (
                <div key={job.role} className="relative pb-10 last:pb-0">
                  <span className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 ${job.current ? 'bg-acc border-ink' : 'bg-card border-line'}`} />
                  <p className="text-sm text-mute">{job.when}</p>
                  <h3 className="font-d font-bold text-xl">{job.role}</h3>
                  <ul className="list-disc pl-5 mt-3 space-y-2 max-w-[68ch]">
                    {job.points.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className={`${wrap} pb-24`}>
            <Heading>Skills</Heading>
            <dl className="grid md:grid-cols-2 gap-x-12">
              {SKILLS.map(([k, items]) => (
                <div key={k} className="border-t-2 border-line py-5">
                  <dt className="font-d font-bold text-lg">{k}</dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {items.map((x) => <span key={x} className="border-2 border-line px-3 py-1 text-sm rounded-sm hover:border-acc transition-colors motion-reduce:transition-none">{x}</span>)}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={`${wrap} pb-24`}>
            <Heading>Education</Heading>
            <div className="grid md:grid-cols-2 gap-x-12">
              {EDUCATION.map((e) => (
                <div key={e.title} className="border-t-2 border-line py-4">
                  <p className="font-d font-bold">{e.title}</p>
                  <p className="text-mute mt-1">{e.text}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer id="contact" className="border-t-2 border-line">
          <div className={`${wrap} py-16`}>
            <h2 className="font-d font-extrabold text-4xl md:text-6xl leading-tight">Let’s build something together.</h2>
            <p className="mt-4 text-mute max-w-[50ch]">I’m open to full stack roles. Send me a message below, or find me on LinkedIn and GitHub.</p>
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <Magnetic as="button" onClick={copyEmail} className={`${solidBtn} break-all`} aria-live="polite">{copied ? 'Email copied' : ME.email}</Magnetic>
              <Magnetic href={`https://mail.google.com/mail/?view=cm&fs=1&to=${ME.email}`} target="_blank" rel="noopener noreferrer" className={outlineBtn}>Write an email</Magnetic>
              <Magnetic href={`tel:${ME.phone.replace(/[^+\d]/g, '')}`} className={outlineBtn}>{ME.phone}</Magnetic>
              {ME.github && <Magnetic href={ME.github} target="_blank" rel="noopener noreferrer" className={outlineBtn}>GitHub</Magnetic>}
              {ME.linkedin && <Magnetic href={ME.linkedin} target="_blank" rel="noopener noreferrer" className={outlineBtn}>LinkedIn</Magnetic>}
            </div>
            <h3 className="font-d font-bold text-2xl mt-14 mb-5">Or send me a message here</h3>
            <ContactForm />
            <p className="mt-12 text-sm text-mute">© 2026 {ME.name}. Built with React.js and Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}