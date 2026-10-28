import { useRef } from 'react'

// Link/button that leans slightly toward the cursor.
export default function Magnetic({ as: Tag = 'a', className = '', children, ...rest }) {
  const ref = useRef(null)
  const move = (e) => {
    const b = ref.current.getBoundingClientRect()
    ref.current.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * 0.18}px, ${(e.clientY - b.top - b.height / 2) * 0.3}px)`
  }
  return (
    <Tag ref={ref} onPointerMove={move} onPointerLeave={() => (ref.current.style.transform = '')}
      className={`${className} transition-transform duration-200 motion-reduce:transition-none`} {...rest}>
      {children}
    </Tag>
  )
}
