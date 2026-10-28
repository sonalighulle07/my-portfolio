import { useEffect, useState } from 'react'

/**
 * Cycles through phrases with a type + delete effect.
 * Falls back to the first phrase when reduced motion is preferred.
 */
export default function RotatingText({ phrases, className = '' }) {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [index, setIndex] = useState(0)
  const [text, setText] = useState(() => (reduced ? (phrases[0] ?? '') : ''))
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return

    const full = phrases[index % phrases.length] ?? ''

    if (!deleting && text === full) {
      const hold = setTimeout(() => setDeleting(true), 1900)
      return () => clearTimeout(hold)
    }

    if (deleting && text === '') {
      const pause = setTimeout(() => {
        setDeleting(false)
        setIndex((i) => (i + 1) % phrases.length)
      }, 320)
      return () => clearTimeout(pause)
    }

    const speed = deleting ? 34 : 68
    const timer = setTimeout(() => {
      setText(full.slice(0, text.length + (deleting ? -1 : 1)))
    }, speed)

    return () => clearTimeout(timer)
  }, [text, deleting, index, phrases, reduced])

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[1.1em] w-0.5 translate-y-[0.14em] bg-brand-500 animate-blink" />
    </span>
  )
}
