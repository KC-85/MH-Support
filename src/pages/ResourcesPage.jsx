import { Link } from 'react-router-dom'

import ukHealthServices from '../data/ukHealthServices.js'

function ResourcesPage() {
  return (
    <main id="main-content" tabIndex="-1" className="focus:outline-none">
      <title>UK Mental Health Resources | MH Support</title>
      <meta
        name="description"
        content="Explore official mental health information and support resources for every UK nation."
      />

      <section
        className="bg-peach px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
        aria-labelledby="resources-heading"
      >
        <div className="mx-auto max-w-7xl">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-rust">
            <span className="size-2 rounded-full bg-rust" aria-hidden="true" />
            UK resources
          </p>
          <h1
            id="resources-heading"
            className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl"
          >
            Trusted information, without the search spiral.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Start with the official health service for your nation. Each site
            offers information about mental health, available services and ways
            to get further help.
          </p>
        </div>
      </section>

      <section
        className="bg-peach-soft px-5 py-20 sm:px-8 sm:py-24"
        aria-labelledby="official-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-rust">
              Official services
            </p>
            <h2
              id="official-heading"
              className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-balance sm:text-5xl"
            >
              Find information for your part of the UK.
            </h2>
          </div>

          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {ukHealthServices.map((service) => (
              <li key={service.nation}>
                <a
                  href={service.href}
                  className="group flex min-h-36 items-end justify-between gap-6 rounded-4xl border-2 border-ink/20 bg-peach p-7 hover:border-ink/50 hover:bg-peach/70 focus:outline-rust sm:p-8"
                >
                  <span>
                    <span className="block text-sm font-bold uppercase tracking-[0.16em] text-rust">
                      {service.nation}
                    </span>
                    <span className="mt-3 block text-2xl font-semibold tracking-tight group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                      {service.provider}
                    </span>
                  </span>
                  <span className="text-2xl" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-rust px-5 py-16 text-cream sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Need help sooner rather than later?
            </h2>
            <p className="mt-4 text-lg leading-8 text-cream/85">
              Use our nation-specific urgent support page to find the correct
              service and number.
            </p>
          </div>
          <Link
            to="/urgent-support"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-cream px-7 font-bold text-ink hover:bg-peach hover:underline hover:decoration-2 hover:underline-offset-4 focus:outline-cream"
          >
            Find urgent support
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ResourcesPage
