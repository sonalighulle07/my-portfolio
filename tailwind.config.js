/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)', ink: 'var(--ink)', mute: 'var(--mute)', card: 'var(--card)',
        line: 'var(--line)', acc: 'var(--acc)', acct: 'var(--acct)', accon: 'var(--accon)',
      },
      fontFamily: {
        d: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        b: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
