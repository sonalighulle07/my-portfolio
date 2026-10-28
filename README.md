# Sonali Ghulle — Portfolio

React 19 · Vite · Tailwind CSS 4 · Redux Toolkit · Lucide icons

## Run
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run smoke     # render test of every section
```

## Edit your content
Everything lives in `src/data/profile.js`.
- `github`, `linkedin` — paste full URLs; the buttons appear automatically.
- `resumeUrl` — put your PDF in `public/` and set e.g. `'/Sonali_Ghulle_Resume.pdf'`.
- `photo` — put an image in `public/` and set e.g. `'/photo.jpg'` (initials show until then).
- `formspreeId` — optional; sends the contact form to your inbox via formspree.io.

## Redux store (`src/store`)
| Slice | Holds |
|---|---|
| `theme` | light / dark mode (persisted to localStorage) |
| `ui` | mobile menu, scrolled header, active nav section |
| `projects` | project cards + show/hide details state |
| `contact` | form fields, validation errors, submit status (async thunk) |
