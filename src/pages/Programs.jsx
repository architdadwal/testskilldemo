import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

const programs = [
  {
    name: 'Digital Beginnings',
    ages: '8–12',
    duration: '8 weeks · 2 hrs/week',
    level: 'Starter',
    topics: ['Keyboard & mouse fluency', 'Files & folders', 'Safe browsing', 'Intro to Scratch'],
    blurb: 'Playful first steps for primary learners using shared lab PCs and tablets.',
  },
  {
    name: 'Young Coders Lab',
    ages: '10–14',
    duration: '12 weeks · 3 hrs/week',
    level: 'Intermediate',
    topics: ['Scratch projects', 'Python basics', 'Debugging mindset', 'Team hackathon day'],
    blurb: 'Project-based coding with peer mentors and showcase presentations for families.',
  },
  {
    name: 'Creators Studio',
    ages: '12–16',
    duration: '10 weeks · 2.5 hrs/week',
    level: 'Creative',
    topics: ['Canva & design basics', 'Short video editing', 'Digital storytelling', 'Portfolio building'],
    blurb: 'For students who express themselves through art, video, and social good campaigns.',
  },
  {
    name: 'Digital Safety & Citizenship',
    ages: '10–16',
    duration: '6 weeks · 90 min/week',
    level: 'Essential',
    topics: ['Privacy & passwords', 'Spotting misinformation', 'Kindness online', 'Knowing your rights'],
    blurb: 'Hindi-English workshops co-led with counselors — mandatory for all cohorts.',
  },
  {
    name: 'Skills for Tomorrow',
    ages: '15–18',
    duration: '14 weeks · 3 hrs/week',
    level: 'Advanced',
    topics: ['Spreadsheets & data', 'Web fundamentals', 'Interview prep', 'Freelance ethics'],
    blurb: 'Prepares older teens for internships, college applications, and first remote work.',
  },
  {
    name: 'Girls in Tech Circle',
    ages: '11–17',
    duration: 'Year-round · monthly',
    level: 'Community',
    topics: ['Role models', 'STEM confidence', 'Parent sessions', 'Alumni networking'],
    blurb: 'A supportive sisterhood addressing barriers girls often face in tech spaces.',
  },
]

const levelColors = {
  Starter: 'bg-brand-100 text-brand-800',
  Intermediate: 'bg-emerald-100 text-emerald-800',
  Creative: 'bg-teal-100 text-teal-800',
  Essential: 'bg-lime-100 text-lime-900',
  Advanced: 'bg-green-100 text-green-900',
  Community: 'bg-brand-200 text-brand-900',
}

export default function Programs() {
  return (
    <div className="pb-16">
      <section className="mesh-bg border-b border-brand-100 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Programs</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Curricula built for real Indian classrooms.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Every track is free, includes materials and snacks where needed, and ends with a
              celebration day for families. Enrollment happens through partner schools and community
              centers — no online payment, ever.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program, index) => (
            <motion.article
              key={program.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (index % 2) * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${levelColors[program.level]}`}
                >
                  {program.level}
                </span>
                <span className="text-xs text-muted">Ages {program.ages}</span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-ink">{program.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{program.blurb}</p>
              <p className="mt-3 text-xs font-medium text-brand-700">{program.duration}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {program.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-lg bg-brand-50 px-2 py-1 text-xs text-slate-600"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-brand-50/60 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-ink">Bring DigitalShiksha to your community</h2>
          <p className="mt-3 text-slate-600">
            NGOs, municipal schools, and housing societies can request a pilot lab. We provide
            curriculum, mentor training, and help sourcing refurbished devices.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Partner with us
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}
