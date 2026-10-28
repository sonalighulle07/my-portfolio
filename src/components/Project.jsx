import ProjectArt from './ProjectArt.jsx'

export default function Project({ project, id, open, onToggle }) {
  return (
    <li className="border-t-2 border-line">
      <button
        className="w-full text-left py-6 grid md:grid-cols-[220px_1fr_auto] gap-x-8 gap-y-1 items-baseline group"
        aria-expanded={open} aria-controls={id} onClick={onToggle}
      >
        <span className="font-d font-extrabold text-3xl transition-transform duration-300 group-hover:translate-x-2 motion-reduce:transition-none">{project.name}</span>
        <span>
          <span className="block font-d font-bold text-lg">{project.title}</span>
          <span className="block text-mute mt-1 max-w-[60ch]">{project.desc}</span>
        </span>
        <span className="text-acct font-medium text-sm hidden md:block">{open ? 'Hide details' : 'Show details'}</span>
      </button>
      <div id={id} className="panel" data-open={open}>
        <div>
          <div className="pb-7 md:pl-[252px] flex flex-wrap items-start gap-8">
            <div className="flex-1 min-w-[240px]">
              <ul className="list-disc pl-5 space-y-2 max-w-[62ch]">
                {project.points.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <p className="mt-4 text-sm text-mute">Built with {project.stack.join(', ')}</p>
            </div>
            {open && <ProjectArt name={project.name} />}
          </div>
        </div>
      </div>
    </li>
  )
}
