# Sonali Ghulle: Portfolio (React.js + Tailwind CSS)

## Run locally
```bash
npm install
npm run dev        # opens http://localhost:5173
```

## Edit your content
Open `src/data.js`: email, phone, GitHub, LinkedIn, projects, experience, skills, education.

## Build for production
```bash
npm run build      # creates the dist/ folder
```

## Deploy free (get the link for your resume)
**Netlify:** `npm run build`, then drag the `dist` folder to https://app.netlify.com/drop
**Vercel:** push to GitHub, import the repo at vercel.com, click Deploy (build: `npm run build`, output: `dist`)
**GitHub Pages:** use the `gh-pages` package or a GitHub Action to publish `dist`

## Personalise (all in `src/data.js`, top `ME` block)
- `email`, `phone`: your contact details (shown in the hero button, footer and contact form fallback).
- `github`, `linkedin`: full profile URLs. Buttons appear automatically.
- `resume`: copy your PDF into `public/`, then set `resume: '/Sonali_Ghulle_Resume.pdf'`.
- `photo`: copy your photo into `public/`, then set `photo: '/photo.jpg'`.
- `formspreeId`: create a free form at formspree.io, paste the ID (the part after `/f/`).
