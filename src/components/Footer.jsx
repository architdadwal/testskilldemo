import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-50/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-bold text-ink">DigitalShiksha</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            A volunteer-led initiative bringing free, practical digital education to underprivileged
            children in India — one classroom, one laptop lab, one confident learner at a time.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-800">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link className="hover:text-brand-700" to="/about">
                Our story
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-700" to="/programs">
                Programs
              </Link>
            </li>
            <li>
              <Link className="hover:text-brand-700" to="/contact">
                Volunteer & partner
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-800">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>hello@digitalshiksha.org</li>
            <li>Community learning hubs — Delhi NCR, Pune, Bengaluru</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-100 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} DigitalShiksha. Built with care for India&apos;s young learners.
      </div>
    </footer>
  )
}
