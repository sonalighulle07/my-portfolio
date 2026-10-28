import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme, toggleTheme } from '../store/themeSlice'
import { selectActiveSection, setActiveSection } from '../store/uiSlice'
import { syncTheme } from '../store'

/** Adds `is-visible` to children once they scroll into view. */
export function useReveal(options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -60px 0px', once = true } = options
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold, rootMargin },
    )

    node.classList.remove('is-visible')
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}

export function useTheme() {
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  useEffect(() => {
    syncTheme(theme)
  }, [theme])

  const toggle = useCallback(() => dispatch(toggleTheme()), [dispatch])

  return { theme, toggle }
}

/** Tracks which section id is currently in the viewport (stored in Redux). */
export function useActiveSection(ids) {
  const dispatch = useDispatch()
  const active = useSelector(selectActiveSection)

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) dispatch(setActiveSection(visible[0].target.id))
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.5, 1] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids, dispatch])

  return active
}

/** Returns [ref, inView] — true once the element has entered the viewport. */
export function useInView(options = {}) {
  const { threshold = 0.2, once = true } = options
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (entry.isIntersecting && once) observer.disconnect()
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, inView]
}
