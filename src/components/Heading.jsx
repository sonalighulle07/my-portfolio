import { useInView } from '../hooks.js'

// Section title with a blueprint underline that draws itself when it enters the screen.
export default function Heading({ children, id }) {
  const [ref, seen] = useInView()
  return (
    <h2 id={id} ref={ref} className="font-d font-extrabold text-3xl md:text-4xl mb-10 relative inline-block pb-3">
      {children}
      <span className="absolute left-0 bottom-0 h-1 w-full bg-acc origin-left transition-transform duration-700 motion-reduce:transition-none" style={{ transform: seen ? 'scaleX(1)' : 'scaleX(0)' }} />
    </h2>
  )
}
