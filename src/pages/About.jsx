import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const values = [
  {
    title: 'Access first',
    text: 'No child is turned away for lack of money, devices, or prior experience.',
  },
  {
    title: 'Dignity & joy',
    text: 'Learning feels creative and celebratory — not charity, but partnership.',
  },
  {
    title: 'Local roots',
    text: 'Programs are co-designed with teachers and parents in each community.',
  },
  {
    title: 'Open future',
    text: 'We teach skills that lead to study, work, and civic participation online.',
  },
]

const timeline = [
  { year: '2019', event: 'Started as a weekend laptop club in a Delhi municipal school.' },
  { year: '2021', event: 'Expanded to Pune and Bengaluru with volunteer mentor networks.' },
  { year: '2023', event: 'Launched Hindi-first digital safety curriculum for ages 10–14.' },
  { year: '2025', event: 'Mobile labs and girls-in-tech cohorts across 18 partner sites.' },
]

export default function About() {
  return (
    <div className="pb-16">
      <section className="mesh-bg border-b border-brand-100 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">About us</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Shiksha that travels at the speed of the internet.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              DigitalShiksha began when a group of engineers and teachers saw the same gap: bright
              children in under-resourced schools had almost no structured path to digital skills. We
              built a free, repeatable model — community labs, volunteer mentors, and open curriculum
              — so talent is never wasted for lack of a keyboard.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-ink">Our mission</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              To ensure every underprivileged child in India can learn digital skills in a safe,
              welcoming space — and use those skills to shape their own story.
            </p>
            <h2 className="mt-10 text-2xl font-bold text-ink">Our vision</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A generation of young Indians who are not merely consumers of technology, but builders,
              artists, and informed citizens of the digital world.
            </p>
          </div>
          <div className="rounded-3xl border border-brand-100 bg-brand-50/50 p-8">
            <h3 className="text-lg font-bold text-brand-800">What makes us different</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="text-brand-600">✓</span> 100% free programs — funded by donors & partners
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600">✓</span> Bilingual facilitators and localized examples
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600">✓</span> Device lending for students without home computers
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600">✓</span> Strong focus on girls and first-generation learners
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink">Values we live by</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map(({ title, text }) => (
              <motion.div
                key={title}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-brand-100 p-6"
              >
                <h3 className="font-bold text-brand-800">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-ink">Our journey</h2>
        <div className="relative mt-10 border-l-2 border-brand-200 pl-8">
          {timeline.map(({ year, event }, i) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[2.55rem] top-1 flex h-4 w-4 rounded-full border-2 border-white bg-brand-500 ring-4 ring-brand-100" />
              <p className="text-sm font-bold text-brand-600">{year}</p>
              <p className="mt-1 text-slate-600">{event}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}
