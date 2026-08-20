import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main id="main-content" tabIndex="-1" className="focus:outline-none">
      <title>Page Not Found | MH Support</title>
      <meta name="robots" content="noindex" />

      <section className="bg-peach px-5 py-24 sm:px-8 lg:py-32" aria-labelledby="not-found-heading">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-rust">
            Error 404
          </p>
          <h1
            id="not-found-heading"
            className="mt-6 font-display text-6xl leading-none text-balance sm:text-7xl"
          >
            This page isn’t here.
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-muted">
            The link may be out of date, or the page may have moved. You can
            return home or go straight to our UK support resources.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 font-semibold text-cream hover:bg-plum hover:underline hover:decoration-2 hover:underline-offset-4 focus:outline-rust"
            >
              Return home
            </Link>
            <Link
              to="/resources"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-ink/60 px-7 font-semibold hover:bg-peach-soft hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              Browse resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
