// Edit your details here. GitHub / LinkedIn buttons appear automatically once you add links.
export const ME = {
  name: 'Sonali Ghulle',
  email: 'sonali.ghulle01@gmail.com',
  phone: '+91-9322698494',
  github: 'https://github.com/sonalighulle07', 
  linkedin: '', // e.g. 'https://linkedin.com/in/yourname'
  resume: '/SonaliGhulle_Resume.pdf', 
  photo: 'photo.jpg', 
  formspreeId: 'xnppdeye', // e.g. 'xyzabcde' (from formspree.io), makes the contact form send messages to your email
}

export const PROJECTS = [
  { name: 'QCDNDV', title: 'Naval dockyard quality control',
    desc: 'Inspection and quality-control system that keeps working offline on tablets and syncs to a PC over USB.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'OCR', 'ADB'],
    points: ['Quality-control requests, inspection records and IIR reports, with Excel import/export and document management.', 'Offline tablet-to-PC sync over USB/ADB that stores inspection data, photos and signatures.'] },
  { name: 'TimeTap', title: 'Employee attendance',
    desc: 'Attendance app that only lets people punch in within 50 metres of the office. Try it in the demo at the top.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    points: ['Punch-in/out with a 50 m geofence and mock-location detection.', 'Admin dashboard, work-from-home scheduling, attendance history and working-hours tracking.'] },
  { name: 'TapOTT', title: 'OTT streaming backend With Admin Panel',
    desc: 'Backend APIs that manage movies and thumbnails for a streaming platform.',
    stack: ['Node.js', 'Express.js', 'MySQL', 'AWS S3'],
    points: ['Content-management APIs with movie and thumbnail uploads to AWS S3.', 'Diagnosed and fixed file-handling and storage issues.'] },
  { name: 'TapCRM', title: 'Marketing CRM',
    desc: 'CRM that sends WhatsApp messages and reacts to Meta webhooks.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Meta APIs'],
    points: ['CRM features and backend APIs.', 'Meta API and WhatsApp messaging, notification and webhook workflows.'] },
  { name: 'NDVRFID', title: 'Dockyard access control',
    desc: 'Gate system that reads an RFID card and decides who may enter, then drives the turnstile.',
    stack: ['Node.js', 'PostgreSQL', 'USB RFID Reader'],
    points: ['USB RFID card-reader workflow that validates personnel, role-based and vehicle access.', 'Turnstile entry and exit handling.'] },
  { name: 'TapChat', title: 'Team collaboration',
    desc: 'A Microsoft Teams-style platform for team chat and collaboration.',
    stack: ['React.js', 'Node.js', 'Express.js'],
    points: ['Responsive UI and backend APIs.'] },
]

export const EXPERIENCE = [
  { when: 'Jan 2026 to present', role: 'Full Stack Developer, Tapsoft Tech Labs Pvt. Ltd., Pune', current: true,
    points: ['Develop and maintain web applications, admin panels and backend services using React.js, Node.js, Express.js and MySQL.', 'Build RESTful APIs and implement business logic across OTT, CRM, team collaboration, attendance and inspection management projects.', 'Integrate AWS S3 file uploads, third-party APIs and data import/export workflows.', 'Contribute to offline Android tablet-to-PC data sync (USB/ADB) with OCR-based inspection data processing.', 'Use Git/GitLab for version control and AI coding tools (Cursor, Claude, Codex) for coding, debugging and code analysis.'] },
  { when: 'Jun 2025 to Dec 2025', role: 'React.js Developer Intern, Tapsoft Tech Labs Pvt. Ltd., Pune', current: false,
    points: ['Developed responsive user interfaces using React.js, JavaScript, HTML and CSS.', 'Built reusable UI components and integrated frontend features with backend APIs.', 'Assisted in feature implementation, debugging, testing, bug fixing and ongoing application maintenance.'] },
]

export const SKILLS = [
  ['Languages', ['Java', 'C++', 'JavaScript (ES6+)', 'SQL']],
  ['Frontend', ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive web design']],
  ['Backend', ['Node.js', 'Express.js', 'Spring Boot', 'RESTful APIs', 'Middleware']],
  ['Databases', ['MySQL', 'PostgreSQL', 'SQLite', 'Firebase']],
  ['Cloud and integrations', ['AWS S3', 'Meta APIs', 'WhatsApp API', 'Webhooks', 'OCR integration']],
  ['DSA and core concepts', ['Data structures and algorithms', 'Object-oriented programming']],
  ['AI', ['AI-assisted development', 'Cursor', 'Claude', 'OpenCode', 'Codex', 'Debugging and code analysis with AI']],
  ['Tools and version control', ['Git', 'GitLab', 'GitHub', 'Jira', 'Postman', 'npm', 'Visual Studio Code']],
  ['Additional', ['USB data import/export', 'ADB tablet–PC sync', 'Environment config (.env)', 'API debugging']],
]

export const EDUCATION = [
  { title: 'Java Full Stack Development Course', text: 'Giris Tech Hub Pvt. Ltd., Pune. Jul 2024 to Jun 2025. Coursework: Core Java, Advanced Java, JavaScript (ES6+), React.js, Tailwind CSS, Node.js, Express.js, MySQL, Spring Boot, GitHub, Jira, HTML5, CSS3, Bootstrap, Git.' },
  { title: 'Bachelor of Science (Computer Applications)', text: 'Shivraj College, Gadhinglaj, Maharashtra. Shivaji University, Kolhapur. 2020 to 2023.' },
]

export const ABOUT = `Full stack developer with 1.5 years of experience, including a 7-month internship, building scalable web applications and REST APIs with React.js, Node.js, Express.js and MySQL. I’ve delivered production systems for OTT, CRM, attendance and defence-sector inspection and access control, with AWS S3, OCR and offline tablet-to-PC sync along the way. My base is Java, Spring Boot and DSA, and I use Cursor, Claude, OpenCode and Codex every day to write, debug and review code faster.`

export const TECH = ['Java', 'C++', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'AWS S3', 'Spring Boot', 'Tailwind CSS', 'WhatsApp API', 'Meta APIs', 'OCR', 'ADB sync', 'USB RFID', 'Firebase', 'Git and GitLab', 'Postman']
