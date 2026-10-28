import { useState } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { profile, roles, stats } from '../data/profile'
import { SocialLinks } from '../components/SocialLinks'
import RotatingText from '../components/RotatingText'
import { useInView } from '../hooks'

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.15 })
  const [photoRef, photoInView] = useInView({ threshold: 0.3 })
  const [photoMissing, setPhotoMissing] = useState(!profile.photo)

  return (
    <section id="top" className="grain relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-y opacity-80" />
        <div className="absolute -top-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-brand-500/22 blur-[120px] animate-float" />
        <div className="absolute -top-24 right-0 h-[26rem] w-[26rem] rounded-full bg-accent-500/20 blur-[120px] animate-float-slow" />
        <div className="absolute top-2/3 left-1/3 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-violet-500/14 blur-[130px]" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          {/* Left column */}
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 className="text-display text-balance font-bold">
              <span className="text-ink">Hi, I&apos;m </span>
              <span className="text-gradient">{profile.name}</span>
            </h1>

            <div className="mt-6 flex min-h-[2.25rem] items-center">
              <span className="font-mono text-sm text-ink-muted sm:text-base">&gt;</span>
              <RotatingText
                phrases={roles}
                className="ml-2 font-mono text-base font-medium text-ink sm:text-lg"
              />
            </div>

            <p className="mt-6 max-w-xl text-lead leading-relaxed text-ink-soft text-pretty">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/40"
              >
                View my work
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.2}
                />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/60 hover:shadow-lift"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <SocialLinks size="sm" />
              <span className="inline-flex items-center gap-1.5 text-sm text-ink-muted">
                <MapPin className="h-4 w-4" strokeWidth={1.8} />
                {profile.location}
              </span>
            </div>
          </div>

          {/* Right column — photo */}
          <div
            ref={photoRef}
            className={`transition-all duration-1000 delay-200 ${
              photoInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-[17rem] lg:mx-0 lg:ml-auto lg:max-w-[18rem]">
              {/* Decorative glow + ring */}
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/25 via-accent-500/15 to-transparent blur-3xl"
              />
              <div
                aria-hidden
                className="absolute inset-2 -z-10 rounded-[1.5rem] border border-brand-500/25"
              />

              <div className="surface-card relative overflow-hidden rounded-[1.4rem] p-1.5">
                <div className="relative overflow-hidden rounded-[1.1rem] bg-surface-2">
                  {photoMissing ? (
                    <div
                      role="img"
                      aria-label={`${profile.name}, ${profile.role}`}
                      className="grid aspect-4/5 w-full place-items-center bg-gradient-to-br from-brand-500/15 via-accent-500/10 to-violet-500/15"
                    >
                      <span className="font-display text-7xl font-bold text-gradient">
                        {profile.initials}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={profile.photo}
                      alt={`${profile.name}, ${profile.role}`}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      onError={() => setPhotoMissing(true)}
                      className="aspect-4/5 w-full object-cover object-top"
                    />
                  )}
                  {/* Soft gradient base so the crop blends into the card */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-surface via-surface/40 to-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:mt-24 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 90} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatItem({ label, value, delay, inView }) {
  return (
    <div
      className={`bg-surface px-5 py-6 text-center transition-all duration-700 sm:py-7 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: `${400 + delay}ms` }}
    >
      <div className="font-display text-2xl font-bold text-gradient tnum sm:text-3xl">{value}</div>
      <div className="mt-2 font-mono text-micro font-medium tracking-[0.16em] text-ink-muted uppercase">
        {label}
      </div>
    </div>
  )
}