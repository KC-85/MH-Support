import { Link } from 'react-router-dom'

import BrandMark from './BrandMark.jsx'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink px-5 text-cream sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 py-12 sm:grid-cols-2 sm:items-end">
        <div>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-3 rounded-full font-semibold focus:outline-cream"
            aria-label="MH Support home"
          >
            <BrandMark inverted />
            <span className="text-lg">MH Support</span>
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-cream/75">
            Mental health information with clarity, care and respect.
          </p>
        </div>

        <div className="text-sm text-cream/75 sm:text-right">
          <nav className="mb-5 flex flex-wrap gap-x-5 gap-y-2 sm:justify-end" aria-label="Footer navigation">
            <Link className="min-h-6 hover:text-cream hover:underline" to="/resources">
              Resources
            </Link>
            <Link className="min-h-6 hover:text-cream hover:underline" to="/urgent-support">
              Urgent help
            </Link>
            <Link className="min-h-6 hover:text-cream hover:underline" to="/#about">
              About us
            </Link>
          </nav>
          <p>&copy; {currentYear} MH Support</p>
          <p className="mt-2">Built to be calm, clear and accessible.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
