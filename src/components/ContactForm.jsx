import { useState } from 'react'
import { ME } from '../data.js'

const field = 'w-full bg-card border-2 border-line px-4 py-3 rounded-sm focus:border-acc'

// Sends through Formspree when ME.formspreeId is set; otherwise opens the visitor's email app.
export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const submit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data._gotcha) return // spam trap
    if (!ME.formspreeId) {
      const body = `${data.message}\n\n${data.name} (${data.email})`
      location.href = `mailto:${ME.email}?subject=${encodeURIComponent('Portfolio message from ' + data.name)}&body=${encodeURIComponent(body)}`
      return
    }
    setStatus('sending')
    try {
      const r = await fetch(`https://formspree.io/f/${ME.formspreeId}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data),
      })
      if (r.ok) { setStatus('sent'); form.reset() } else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <form onSubmit={submit} className="max-w-[560px] grid gap-4">
      <label className="grid gap-1 font-medium">Your name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="grid gap-1 font-medium">Your email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="grid gap-1 font-medium">Message
        <textarea name="message" required rows="5" className={field} />
      </label>
      <input name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'sending'} className="bg-acc text-accon font-bold px-6 py-3 rounded-sm hover:brightness-95 disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p role="status" className="text-sm text-mute">
          {status === 'sent' && 'Message sent. I’ll reply soon.'}
          {status === 'error' && `Couldn’t send your message. Please email me at ${ME.email}.`}
        </p>
      </div>
    </form>
  )
}
