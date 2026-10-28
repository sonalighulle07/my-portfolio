export const profile = {
  name: 'Sonali Ghulle',
  initials: 'SG',
  role: 'Full-Stack Developer',
  tagline:
    'Full-Stack Developer with 1.5 years of experience building scalable web applications and REST APIs using React.js, Node.js, Express.js, and MySQL.',
  location: 'Pune, Maharashtra, India',
  email: 'sonali.ghulle01@gmail.com',
  phone: '+91-9322698494',
  
 resumeUrl: '/SonaliGhulle_Resume.pdf',
photo: '/photo.jpeg',
  formspreeId: 'xnppdeye',
  // Add full profile URLs — the GitHub / LinkedIn buttons appear automatically once these are filled.
  github: 'https://github.com/sonalighulle07',
  linkedin: '',
}

/** Social links shown in the hero, contact section and footer (empty ones are skipped). */
export const socials = [
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: profile.github, icon: 'github' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
].filter((s) => s.href)

export const roles = [
  'Full-Stack Developer',
  'React.js Developer',
  'Node.js & Express.js Developer',
  'REST API Developer',
]

export const stats = [
  { label: 'Years of Experience', value: '1.5+' },
  { label: 'Projects', value: '6' },
  { label: 'Months Internship', value: '7' },
  { label: 'Domains', value: '5' },
]

export const aboutIntro =
  'I’m a Full-Stack Developer with 1.5 years of experience, including a 7-month internship, building scalable web applications and REST APIs with React.js, Node.js, Express.js, and MySQL.'

export const aboutParagraphs = [
  'I’ve delivered production systems for OTT, CRM, attendance, and defence-sector inspection and access control, with AWS S3, OCR, and offline tablet-to-PC sync along the way.',
  'My base is Java, Spring Boot, and DSA, which I built through a Java Full Stack Development course at Giris Tech Hub, Pune, and a Bachelor of Science in Computer Applications from Shivaji University, Kolhapur.',
  'I use Cursor, Claude, OpenCode, and Codex every day to write, debug, and review code faster.',
]

export const techStack = [
  'Java', 'C++', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'AWS S3', 'Spring Boot',
  'Tailwind CSS', 'WhatsApp API', 'Meta APIs', 'OCR', 'ADB sync', 'USB RFID', 'Firebase',
  'Git and GitLab', 'Postman',
]

export const skillGroups = [
  { title: 'Languages', accent: 'emerald', skills: ['Java', 'C++', 'JavaScript (ES6+)', 'SQL'] },
  {
    title: 'Frontend',
    accent: 'sky',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive web design'],
  },
  {
    title: 'Backend',
    accent: 'violet',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'RESTful APIs', 'Middleware'],
  },
  { title: 'Databases', accent: 'amber', skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Firebase'] },
  {
    title: 'Cloud and integrations',
    accent: 'cyan',
    skills: ['AWS S3', 'Meta APIs', 'WhatsApp API', 'Webhooks', 'OCR integration'],
  },
  {
    title: 'DSA and core concepts',
    accent: 'pink',
    skills: ['Data structures and algorithms', 'Object-oriented programming'],
  },
  {
    title: 'AI',
    accent: 'emerald',
    skills: ['AI-assisted development', 'Cursor', 'Claude', 'OpenCode', 'Codex', 'Debugging and code analysis with AI'],
  },
  {
    title: 'Tools and version control',
    accent: 'sky',
    skills: ['Git', 'GitLab', 'GitHub', 'Jira', 'Postman', 'npm', 'Visual Studio Code'],
  },
  {
    title: 'Additional',
    accent: 'violet',
    skills: ['USB data import/export', 'ADB tablet–PC sync', 'Environment config (.env)', 'API debugging'],
  },
]

export const projects = [
  {
    name: 'QCDNDV',
    tagline: 'Naval dockyard quality control',
    description:
      'Inspection and quality-control system that keeps working offline on tablets and syncs to a PC over USB.',
    highlights: [
      'Quality-control requests, inspection records and IIR reports, with Excel import/export and document management.',
      'Offline tablet-to-PC sync over USB/ADB that stores inspection data, photos and signatures.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'OCR', 'ADB'],
    category: 'Inspection',
    featured: true,
    links: {},
  },
  {
    name: 'TimeTap',
    tagline: 'Employee attendance',
    description:
      'Attendance app that only lets people punch in within 50 metres of the office.',
    highlights: [
      'Punch-in/out with a 50 m geofence and mock-location detection.',
      'Admin dashboard, work-from-home scheduling, attendance history and working-hours tracking.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    category: 'Attendance',
    featured: true,
    links: {},
  },
  {
    name: 'TapOTT',
    tagline: 'OTT streaming backend',
    description: 'Backend APIs that manage movies and thumbnails for a streaming platform.',
    highlights: [
      'Content-management APIs with movie and thumbnail uploads to AWS S3.',
      'Diagnosed and fixed file-handling and storage issues.',
    ],
    stack: ['Node.js', 'Express.js', 'MySQL', 'AWS S3'],
    category: 'Streaming',
    featured: false,
    links: {},
  },
  {
    name: 'TapCRM',
    tagline: 'Marketing CRM',
    description: 'CRM that sends WhatsApp messages and reacts to Meta webhooks.',
    highlights: [
      'CRM features and backend APIs.',
      'Meta API and WhatsApp messaging, notification and webhook workflows.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Meta APIs'],
    category: 'CRM',
    featured: false,
    links: {},
  },
  {
    name: 'NDVRFID',
    tagline: 'Dockyard access control',
    description:
      'Gate system that reads an RFID card and decides who may enter, then drives the turnstile.',
    highlights: [
      'USB RFID card-reader workflow that validates personnel, role-based and vehicle access.',
      'Turnstile entry and exit handling.',
    ],
    stack: ['Node.js', 'PostgreSQL', 'USB RFID Reader'],
    category: 'Access Control',
    featured: false,
    links: {},
  },
  {
    name: 'TapChat',
    tagline: 'Team collaboration',
    description: 'A Microsoft Teams-style platform for team chat and collaboration.',
    highlights: ['Responsive UI and backend APIs.'],
    stack: ['React.js', 'Node.js', 'Express.js'],
    category: 'Collaboration',
    featured: false,
    links: {},
  },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Tapsoft Tech Labs Pvt. Ltd., Pune',
    period: 'Jan 2026 — Present',
    points: [
      'Develop and maintain web applications, admin panels and backend services using React.js, Node.js, Express.js and MySQL.',
      'Build RESTful APIs and implement business logic across OTT, CRM, team collaboration, attendance and inspection management projects.',
      'Integrate AWS S3 file uploads, third-party APIs and data import/export workflows.',
      'Contribute to offline Android tablet-to-PC data sync (USB/ADB) with OCR-based inspection data processing.',
      'Use Git/GitLab for version control and AI coding tools (Cursor, Claude, Codex) for coding, debugging and code analysis.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'AWS S3', 'GitLab'],
  },
  {
    role: 'React.js Developer Intern',
    company: 'Tapsoft Tech Labs Pvt. Ltd., Pune',
    period: 'Jun 2025 — Dec 2025',
    points: [
      'Developed responsive user interfaces using React.js, JavaScript, HTML and CSS.',
      'Built reusable UI components and integrated frontend features with backend APIs.',
      'Assisted in feature implementation, debugging, testing, bug fixing and ongoing application maintenance.',
    ],
    stack: ['React.js', 'JavaScript', 'HTML', 'CSS'],
  },
]

export const education = [
  {
    degree: 'Bachelor of Science (Computer Applications)',
    institution: 'Shivraj College, Gadhinglaj, Maharashtra · Shivaji University, Kolhapur',
    period: '2020 — 2023',
  },
]

/** Shown in the right-hand column of the Education section. */
export const courses = [
  {
    title: 'Java Full Stack Development Course',
    issuer: 'Giris Tech Hub Pvt. Ltd., Pune · Jul 2024 — Jun 2025',
    detail:
      'Core Java, Advanced Java, JavaScript (ES6+), React.js, Tailwind CSS, Node.js, Express.js, MySQL, Spring Boot, GitHub, Jira, HTML5, CSS3, Bootstrap, Git.',
  },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
