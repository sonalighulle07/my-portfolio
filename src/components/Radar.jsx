import { useRef, useState } from 'react'

// Live demo of TimeTap's 50 m geofence + mock-location check.
export default function Radar() {
  const [p, setP] = useState({ x: 236, y: 112 })
  const [mock, setMock] = useState(false)
  const ref = useRef(null)
  const dragging = useRef(false)
  const clamp = (v) => Math.max(8, Math.min(312, v))

  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    const s = 320 / r.width
    setP({ x: clamp((e.clientX - r.left) * s), y: clamp((e.clientY - r.top) * s) })
  }
  const onKey = (e) => {
    const k = { ArrowLeft: [-8, 0], ArrowRight: [8, 0], ArrowUp: [0, -8], ArrowDown: [0, 8] }[e.key]
    if (k) { e.preventDefault(); setP((q) => ({ x: clamp(q.x + k[0]), y: clamp(q.y + k[1]) })) }
  }

  const d = Math.round(Math.hypot(p.x - 160, p.y - 160) / 2) // 2 px = 1 m
  const inside = d <= 50
  const ok = inside && !mock
  const msg = mock ? 'Blocked: mock location detected' : inside ? 'Punch-in allowed' : 'Blocked: outside the 50 m geofence'

  return (
    <div className="rise" style={{ animationDelay: '.35s' }}>
      <svg
        ref={ref} viewBox="0 0 320 320" role="img" tabIndex={0}
        aria-label="Geofence demo. Use arrow keys or drag to move the employee pin."
        className="w-full max-w-[400px] mx-auto block cursor-grab touch-none select-none rounded-sm"
        style={{ background: 'var(--card)', border: '2px solid var(--line)', touchAction: 'none' }}
        onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); move(e) }}
        onPointerMove={(e) => dragging.current && move(e)}
        onPointerUp={() => (dragging.current = false)}
        onKeyDown={onKey}
      >
        <g style={{ stroke: 'var(--line)', fill: 'none', strokeWidth: 1 }}>
          <circle cx="160" cy="160" r="50" /><circle cx="160" cy="160" r="150" />
          <line x1="160" y1="0" x2="160" y2="320" /><line x1="0" y1="160" x2="320" y2="160" />
        </g>
        <circle className="ping" cx="160" cy="160" r="100" style={{ fill: 'none', stroke: 'var(--acc)', strokeWidth: 2 }} />
        <circle cx="160" cy="160" r="100" style={{ fill: ok ? 'rgba(255,200,87,.18)' : 'transparent', stroke: 'var(--acct)', strokeWidth: 2, strokeDasharray: '6 5' }} />
        <rect x="153" y="153" width="14" height="14" style={{ fill: 'var(--ink)' }} />
        <text x="172" y="150" fontSize="11" style={{ fill: 'var(--mute)' }}>Office</text>
        <line x1="160" y1="160" x2={p.x} y2={p.y} style={{ stroke: ok ? 'var(--acct)' : 'var(--mute)', strokeWidth: 1.5, strokeDasharray: '3 3' }} />
        <circle cx={p.x} cy={p.y} r="10" style={{ fill: ok ? 'var(--acc)' : 'var(--card)', stroke: ok ? 'var(--ink)' : 'var(--mute)', strokeWidth: 3 }} />
      </svg>

      <div className="max-w-[400px] mx-auto mt-3 flex items-start justify-between gap-4" aria-live="polite">
        <div>
          <p className="font-d font-bold text-lg leading-tight" style={{ color: ok ? 'var(--acct)' : 'var(--ink)' }}>{msg}</p>
          <p className="text-sm text-mute mt-1">{d} m from the office. Drag the pin to test.</p>
        </div>
        <label className="text-sm text-mute flex items-center gap-2 shrink-0 cursor-pointer pt-1">
          <input type="checkbox" checked={mock} onChange={(e) => setMock(e.target.checked)} style={{ accentColor: 'var(--acc)' }} />
          Mock GPS
        </label>
      </div>
    </div>
  )
}
