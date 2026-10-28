import { useEffect, useRef, useState } from 'react'

export function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const f = () => { const h = document.documentElement; setP(h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) }
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return p
}

export function useInView() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold: 0.4 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return [ref, seen]
}

// 0 to 1 as the element scrolls through the viewport (drives the timeline fill)
export function useFill(ref) {
  const [f, setF] = useState(0)
  useEffect(() => {
    const u = () => { const r = ref.current.getBoundingClientRect(); setF(Math.max(0, Math.min(1, (innerHeight * 0.65 - r.top) / r.height))) }
    u(); addEventListener('scroll', u, { passive: true }); addEventListener('resize', u)
    return () => { removeEventListener('scroll', u); removeEventListener('resize', u) }
  }, [ref])
  return f
}
