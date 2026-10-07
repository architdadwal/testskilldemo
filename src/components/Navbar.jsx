import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/contact', label: 'Get Involved' },
]

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-lg font-bold text-white shadow-lg shadow-brand-500/30 transition group-hover:scale-105 group-hover:bg-brand-600">
        DS
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-base font-bold tracking-tight text-ink sm:text-lg">
          DigitalShiksha
        </span>
        <span className="hidden text-[11px] font-medium text-muted sm:block">
          Shiksha for every child
        </span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/80 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-100 text-brand-800'
                      : 'text-slate-600 hover:bg-brand-50 hover:text-brand-700'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition hover:bg-brand-700 hover:shadow-lg md:inline-flex"
        >
          Support our mission
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-100 text-brand-800 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-brand-100 bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-semibold ${
                        isActive ? 'bg-brand-100 text-brand-800' : 'text-slate-700 hover:bg-brand-50'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Support our mission
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
