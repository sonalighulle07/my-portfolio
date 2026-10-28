import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import App from '../src/App.jsx'
import { makeStore } from '../src/store'
import { navLinks } from '../src/data/profile'

const html = renderToString(
  <Provider store={makeStore()}>
    <App />
  </Provider>,
)

const checks = [
  ['Sonali Ghulle', 'name'],
  ['Full-Stack Developer', 'role'],
  ['QCDNDV', 'project 1'],
  ['TimeTap', 'project 2'],
  ['TapOTT', 'project 3'],
  ['TapCRM', 'project 4'],
  ['NDVRFID', 'project 5'],
  ['TapChat', 'project 6'],
  ['Tapsoft Tech Labs', 'experience'],
  ['React.js Developer Intern', 'internship'],
  ['Giris Tech Hub', 'course'],
  ['Shivraj College', 'education'],
  ['dshfsfhjdfsjf@gmail.com', 'email'],
  ['4989848394', 'phone'],
  ['aria-label="Switch to', 'theme toggle'],
  ['Skip to content', 'skip link'],
  ...navLinks.map((l) => [`id="${l.id}"`, `section #${l.id}`]),
]

let failed = 0
for (const [needle, label] of checks) {
  const ok = html.includes(needle)
  if (!ok) failed++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}`)
}

// Nothing from the template owner may leak into this portfolio.
for (const needle of ['Rupali', 'Gaikwad', 'TechJar', 'Django', 'Snowflake', 'rupali']) {
  const ok = !html.includes(needle)
  if (!ok) failed++
  console.log(`${ok ? 'PASS' : 'FAIL'}  no leftover "${needle}"`)
}

if (failed) {
  console.error(`\n${failed} check(s) failed`)
  process.exit(1)
}
console.log('\nAll smoke checks passed')
