// Tiny looping illustration for each project. Only rendered while the project is open.
const line = 'fill-none stroke-ink'
const art = {
  QCDNDV: (<>
    <rect className={line} x="8" y="26" width="34" height="44" rx="3" strokeWidth="2" />
    <rect className={line} x="112" y="22" width="40" height="30" rx="2" strokeWidth="2" />
    <line className={line} x1="122" y1="62" x2="142" y2="62" strokeWidth="2" />
    <line className={line} x1="46" y1="48" x2="108" y2="48" strokeWidth="2" strokeDasharray="4 4" />
    <circle className="travel fill-acc" cx="50" cy="48" r="5" />
  </>),
  TimeTap: (<>
    <circle className={line} cx="80" cy="45" r="30" strokeWidth="2" strokeDasharray="5 4" />
    <circle className="pulse fill-none stroke-acc" cx="80" cy="45" r="30" strokeWidth="2" />
    <circle className="fill-acc stroke-ink" cx="80" cy="45" r="6" strokeWidth="2" />
  </>),
  TapOTT: (<>
    <rect className={line} x="20" y="10" width="120" height="52" rx="3" strokeWidth="2" />
    <path className="fill-ink" d="M72 26l20 10-20 10z" />
    <rect className="fill-line" x="20" y="72" width="120" height="6" />
    <rect className="bar fill-acc" x="20" y="72" width="120" height="6" />
  </>),
  TapCRM: (<>
    <rect className={line} x="30" y="16" width="100" height="44" rx="10" strokeWidth="2" />
    <path className={line} d="M50 60l-8 14 22-14" strokeWidth="2" />
    {[0, 1, 2].map((i) => <circle key={i} className="bob fill-acc" style={{ animationDelay: `${i * 0.15}s` }} cx={64 + i * 16} cy="38" r="5" />)}
  </>),
  NDVRFID: (<>
    <rect className={line} x="10" y="32" width="30" height="34" rx="3" strokeWidth="2" />
    <rect className="swipe fill-acc stroke-ink" x="14" y="14" width="30" height="20" rx="3" strokeWidth="2" />
    <line className={line} x1="122" y1="74" x2="122" y2="30" strokeWidth="4" />
    <line className="arm stroke-acc" x1="122" y1="36" x2="156" y2="36" strokeWidth="5" />
  </>),
  TapChat: (<>
    <rect className="msg fill-acc" x="10" y="14" width="86" height="24" rx="8" />
    <rect className="msg fill-none stroke-ink" style={{ animationDelay: '1.2s' }} x="64" y="48" width="86" height="24" rx="8" strokeWidth="2" />
  </>),
}

export default function ProjectArt({ name }) {
  return <svg viewBox="0 0 160 90" className="w-44 h-auto shrink-0" aria-hidden="true">{art[name]}</svg>
}
