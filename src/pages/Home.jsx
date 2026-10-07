import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

const stats = [
  { value: '2,400+', label: 'Students reached' },
  { value: '18', label: 'Community centers' },
  { value: '100%', label: 'Free for every child' },
  { value: '65+', label: 'Volunteer mentors' },
]

const steps = [
  {
    title: 'Discover',
    text: 'Children join weekend labs and after-school clubs in their neighborhoods — no fees, no barriers.',
  },
  {
    title: 'Learn by doing',
    text: 'Hands-on modules in typing, coding, design, and online safety with mentors who speak their language.',
  },
  {
    title: 'Grow with confidence',
    text: 'Certificates, showcase days, and alumni circles help learners step into higher study and first jobs.',
  },
]

const highlights = [
  {
    title: 'Computer foundations',
    tag: 'Ages 8–12',
    desc: 'Keyboard, files, browsers, and safe searching — the basics every digital citizen needs.',
  },
  {
    title: 'Code & create',
    tag: 'Ages 10–16',
    desc: 'Scratch, Python, and mini web projects that turn curiosity into real skills.',
  },
  {
    title: 'Digital livelihoods',
    tag: 'Teens',
    desc: 'Spreadsheets, presentations, and freelance-ready portfolios for older learners.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Home() {
  return (
    <>
      <section className="mesh-bg grain relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-300/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-brand-200/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
              Non-profit · India
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
              Free digital skills for{' '}
              <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                every child
              </span>{' '}
              who dreams bigger.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              DigitalShiksha partners with schools and community centers to teach coding, computer
              literacy, and creative tech — completely free for underprivileged children across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:-translate-y-0.5 hover:bg-brand-700"
              >
                View programs
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-50"
              >
                Volunteer with us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-3xl border border-brand-100 bg-white/90 p-6 shadow-xl shadow-brand-900/5 backdrop-blur sm:p-8">
              <p className="text-sm font-semibold text-brand-700">This month in our labs</p>
              <ul className="mt-4 space-y-4">
                {[
                  '142 girls completed their first Python project in Pune',
                  'New mobile lab launched in East Delhi',
                  'Alumni mentor circle started in Bengaluru',
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-slate-600">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.slice(0, 2).map(({ value, label }) => (
                  <div key={label} className="rounded-2xl bg-brand-50 px-4 py-3">
                    <p className="text-xl font-bold text-brand-800">{value}</p>
                    <p className="text-xs text-muted">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-brand-100 bg-white px-4 py-3 shadow-lg sm:block"
            >
              <p className="text-xs font-medium text-muted">Next orientation</p>
              <p className="text-sm font-bold text-ink">Saturday · 10 AM IST</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-brand-100 bg-white py-10">
        <motion.div
          className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6 lg:px-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map(({ value, label }) => (
            <motion.div key={label} variants={item} className="text-center sm:text-left">
              <p className="text-2xl font-extrabold text-brand-700 sm:text-3xl">{value}</p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <AnimatedSection className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">How DigitalShiksha works</h2>
          <p className="mt-3 text-slate-600">
            We meet children where they are — with devices, mentors, and a curriculum designed for real
            Indian classrooms, not fancy studios.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(({ title, text }, i) => (
            <motion.article
              key={title}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-brand-100 bg-brand-50/40 p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </motion.article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-brand-50/60 py-16" delay={0.05}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-ink">Featured learning paths</h2>
              <p className="mt-2 max-w-xl text-slate-600">
                Structured, age-appropriate tracks — all materials in Hindi and English where possible.
              </p>
            </div>
            <Link to="/programs" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
              See all programs →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map(({ title, tag, desc }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-100"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">{tag}</span>
                <h3 className="mt-2 text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-500 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Technology should not be a privilege.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-brand-50 sm:text-base">
            Whether you teach, donate devices, or open your community hall — you can help a child in
            India take their first confident step online.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
          >
            Join the movement
          </Link>
        </div>
      </AnimatedSection>
    </>
  )
}
