import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'

const ways = [
  {
    title: 'Volunteer as a mentor',
    text: 'Teach 2–4 hours a month online or in-person. We train you — tech background helps but is not required.',
  },
  {
    title: 'Donate devices',
    text: 'Working laptops, tablets, and dongles extend our mobile labs. We securely wipe all donated hardware.',
  },
  {
    title: 'Fund a cohort',
    text: 'Sponsor snacks, transport, or internet for one classroom for a full term. We share impact reports.',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: 'volunteer',
    message: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', role: 'volunteer', message: '' })
  }

  return (
    <div className="pb-16">
      <section className="mesh-bg border-b border-brand-100 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Get involved</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Help us open more doors.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              DigitalShiksha runs on people like you. Share your details below — our team responds within
              a few working days. (This demo form does not send email yet; connect a backend when ready.)
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
        <AnimatedSection className="lg:col-span-2" as="div">
          <h2 className="text-xl font-bold text-ink">Ways to contribute</h2>
          <ul className="mt-6 space-y-6">
            {ways.map(({ title, text }) => (
              <li key={title} className="rounded-2xl border border-brand-100 bg-brand-50/40 p-5">
                <h3 className="font-semibold text-brand-800">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-sm text-slate-600">
            <p className="font-semibold text-ink">Write to us</p>
            <p className="mt-1">hello@digitalshiksha.org</p>
            <p className="mt-4 font-semibold text-ink">Hub cities</p>
            <p className="mt-1">Delhi NCR · Pune · Bengaluru</p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-3" as="div" delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-xl font-bold text-ink">Send a message</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Full name
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none ring-brand-500/30 focus:border-brand-400 focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-slate-700">
              I want to
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
              >
                <option value="volunteer">Volunteer as a mentor</option>
                <option value="partner">Partner as school / NGO</option>
                <option value="donate">Donate devices or funds</option>
                <option value="other">Something else</option>
              </select>
            </label>
            <label className="mt-4 block text-sm font-medium text-slate-700">
              Message
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
                placeholder="Tell us how you'd like to help..."
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-brand-600 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:w-auto sm:px-8"
            >
              Submit
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 rounded-xl bg-brand-100 px-4 py-3 text-sm font-medium text-brand-900"
                  role="status"
                >
                  Thank you! We&apos;ve recorded your interest locally for this demo. Hook up an API or
                  email service when you&apos;re ready to go live.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </AnimatedSection>
      </div>
    </div>
  )
}
