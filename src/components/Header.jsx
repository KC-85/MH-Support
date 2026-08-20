import ArrowIcon from './ArrowIcon.jsx'
import BrandMark from './BrandMark.jsx'

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-peach/95 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:gap-5 sm:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="./"
          className="flex min-h-11 items-center gap-3 rounded-full font-semibold tracking-tight hover:underline hover:decoration-2 hover:underline-offset-4"
          aria-label="MH Support home"
        >
          <BrandMark />
          <span className="whitespace-nowrap text-base sm:text-lg">MH Support</span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#approach"
            className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold hover:bg-peach-soft hover:underline hover:decoration-2 hover:underline-offset-4"
          >
            How we help
          </a>
          <a
            href="#about"
            className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold hover:bg-peach-soft hover:underline hover:decoration-2 hover:underline-offset-4"
          >
            About us
          </a>
        </div>

        <a
          href="#approach"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-cream shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-plum focus:outline-rust sm:px-5"
        >
          <span className="sm:hidden">Explore</span>
          <span className="hidden sm:inline">Explore support</span>
          <ArrowIcon />
        </a>
      </nav>
    </header>
  )
}

export default Header
