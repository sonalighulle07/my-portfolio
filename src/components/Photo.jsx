import { useState } from 'react'
import { ME } from '../data.js'

// Portrait with blueprint crop marks. Shows your initials until you add a photo.
export default function Photo() {
  const [missing, setMissing] = useState(!ME.photo)
  const initials = ME.name.split(' ').map((w) => w[0]).join('')
  const corners = ['top-0 left-0 border-t-4 border-l-4', 'top-0 right-0 border-t-4 border-r-4', 'bottom-0 left-0 border-b-4 border-l-4', 'bottom-0 right-0 border-b-4 border-r-4']
  return (
    <div className="relative w-full max-w-[260px] aspect-[4/5]">
      {corners.map((c) => <span key={c} className={`absolute w-8 h-8 border-acc ${c}`} />)}
      <div className="absolute inset-3 overflow-hidden bg-card border-2 border-line">
        {missing
          ? <div className="w-full h-full grid place-items-center font-d font-extrabold text-6xl text-mute" aria-hidden="true">{initials}</div>
          : <img src={ME.photo} alt={`Portrait of ${ME.name}`} className="w-full h-full object-cover" onError={() => setMissing(true)} />}
      </div>
    </div>
  )
}
