import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionHeading } from '../components/ui'
import { SocialLinks } from '../components/SocialLinks'
import { useReveal } from '../hooks'
import { resetStatus, setErrors, submitContact, updateField, validate } from '../store/contactSlice'

export default function Contact() {
  const headingRef = useReveal()
  const contentRef = useReveal()
  const dispatch = useDispatch()
  const { form, errors, status, via } = useSelector((state) => state.contact)

  // Hide the success / error banner after a few seconds.
  useEffect(() => {
    if (status !== 'sent' && status !== 'error') return
    const t = setTimeout(() => dispatch(resetStatus()), 6000)
    return () => clearTimeout(t)
  }, [status, dispatch])

  const update = (field) => (e) => dispatch(updateField({ field, value: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate(form)
    dispatch(setErrors(next))
    if (Object.keys(next).length > 0) return
    dispatch(submitContact(form))
  }

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm text-ink transition-all duration-300 placeholder:text-ink-muted/70 focus:outline-none ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-500'
        : 'border-line focus:border-brand-500 focus:ring-4 focus:ring-brand-500/12'
    }`

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_oklab,var(--color-brand-500)_9%,transparent),transparent_65%)]"
      />
      <div className="container-page">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="Contact"
            align="center"
            title="Contact Me"
            description="You can reach me by email, phone, or the form below."
          />
        </div>

        <div
          ref={contentRef}
          className="reveal mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8"
        >
          {/* Contact details */}
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50 hover:shadow-lift"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/12">
                <Mail className="h-[18px] w-[18px] text-brand-500" strokeWidth={1.9} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium tracking-wide text-ink-muted uppercase">Email</p>
                <p className="mt-0.5 truncate text-sm font-semibold text-ink">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50 hover:shadow-lift"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-500/12">
                <Phone className="h-[18px] w-[18px] text-accent-500" strokeWidth={1.9} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium tracking-wide text-ink-muted uppercase">Phone</p>
                <p className="mt-0.5 text-sm font-semibold text-ink">{profile.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-500/12">
                <MapPin className="h-[18px] w-[18px] text-violet-500" strokeWidth={1.9} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium tracking-wide text-ink-muted uppercase">
                  Based in
                </p>
                <p className="mt-0.5 text-sm font-semibold text-ink">{profile.location}</p>
              </div>
            </div>

            <div className="mt-2 rounded-2xl border border-dashed border-line-strong p-5">
              <p className="text-xs font-medium tracking-wide text-ink-muted uppercase">
                Find me online
              </p>
              <SocialLinks className="mt-4" />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-ink">Send a message</h3>
            <p className="mt-1.5 text-sm text-ink-soft">
              {profile.formspreeId
                ? 'Fill in the form and your message goes straight to my inbox.'
                : 'Fill in the form and it will open in your email app with the details filled in.'}
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" error={errors.name} htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    className={fieldClass('name')}
                  />
                </Field>
                <Field label="Email" error={errors.email} htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@company.com"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    className={fieldClass('email')}
                  />
                </Field>
              </div>

              <Field label="Subject" error={errors.subject} htmlFor="subject">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={update('subject')}
                  placeholder="Full-Stack Developer role in Pune"
                  aria-invalid={Boolean(errors.subject)}
                  className={fieldClass('subject')}
                />
              </Field>

              <Field label="Message" error={errors.message} htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell me about the role, the team, and what you are building"
                  aria-invalid={Boolean(errors.message)}
                  className={`${fieldClass('message')} resize-y`}
                />
              </Field>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/40 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.4} />
                    {profile.formspreeId ? 'Sending' : 'Preparing your email'}
                  </>
                ) : (
                  <>
                    Send message
                    <Send
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      strokeWidth={2.2}
                    />
                  </>
                )}
              </button>

              {status === 'sent' && (
                <StatusBanner tone="success">
                  {via === 'sent'
                    ? 'Thanks — your message has been sent. I’ll reply soon.'
                    : `Your email client should be open. If not, email me directly at ${profile.email}.`}
                </StatusBanner>
              )}
              {status === 'error' && (
                <StatusBanner tone="error">
                  Something went wrong. Please email me directly at {profile.email}.
                </StatusBanner>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, error, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-semibold tracking-wide text-ink-soft uppercase"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700 dark:text-red-400">
          <AlertCircle className="h-3.5 w-3.5" strokeWidth={2.2} />
          {error}
        </p>
      )}
    </div>
  )
}

function StatusBanner({ tone, children }) {
  const success = tone === 'success'
  return (
    <div
      role="status"
      className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm ${
        success
          ? 'border-brand-500/40 bg-brand-500/10 text-brand-fg'
          : 'border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-400'
      }`}
    >
      {success ? (
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.2} />
      ) : (
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.2} />
      )}
      <span className="text-pretty">{children}</span>
    </div>
  )
}
