import urgentSupportServices from '../data/urgentSupportServices.js'

function UrgentSupportPage() {
  return (
    <main id="main-content" tabIndex="-1" className="focus:outline-none">
      <title>Urgent Mental Health Support UK | MH Support</title>
      <meta
        name="description"
        content="Find verified urgent mental health support for England, Scotland, Wales and Northern Ireland."
      />

      <section
        className="bg-peach px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
        aria-labelledby="urgent-heading"
      >
        <div className="mx-auto max-w-7xl">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-rust">
            <span className="size-2 rounded-full bg-rust" aria-hidden="true" />
            Urgent support across the UK
          </p>
          <h1
            id="urgent-heading"
            className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl"
          >
            Help is available right now.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Choose the nation you are in to find the correct urgent mental
            health service. You do not need to work out the next step alone.
          </p>
        </div>
      </section>

      <section className="bg-ink px-5 py-10 text-cream sm:px-8" aria-labelledby="emergency-heading">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-peach">
              Emergency
            </p>
            <h2 id="emergency-heading" className="mt-3 text-2xl font-semibold sm:text-3xl">
              If someone’s life is at immediate risk
            </h2>
            <p className="mt-3 leading-7 text-cream/80">
              Call 999 or go to A&amp;E now. A mental health emergency should be
              treated as seriously as a physical emergency.
            </p>
          </div>
          <a
            href="tel:999"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-cream px-7 font-bold text-ink hover:bg-peach hover:underline hover:decoration-2 hover:underline-offset-4 focus:outline-cream"
          >
            Call 999
          </a>
        </div>
      </section>

      <section
        className="bg-peach-soft px-5 py-20 sm:px-8 sm:py-24"
        aria-labelledby="nation-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-rust">
              Choose your nation
            </p>
            <div>
              <h2
                id="nation-heading"
                className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-balance sm:text-5xl"
              >
                Contact the right service where you live.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                These routes come directly from the relevant NHS, HSC or
                government health service.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {urgentSupportServices.map((service) => (
              <article
                className="flex flex-col rounded-4xl border-2 border-ink/20 bg-peach p-7 sm:p-8"
                key={service.nation}
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-rust">
                  {service.nation}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {service.service}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-muted">
                  {service.guidance}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={service.phoneHref}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 font-semibold text-cream hover:bg-plum hover:underline hover:decoration-2 hover:underline-offset-4 focus:outline-rust"
                  >
                    Call {service.phone}
                  </a>
                  <a
                    href={service.source}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-ink/50 px-6 font-semibold hover:bg-peach-soft hover:underline hover:decoration-2 hover:underline-offset-4"
                  >
                    Official guidance
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-3xl border-l-4 border-rust pl-5 leading-7 text-muted">
            MH Support provides signposting, not emergency care. Service details
            can change, so each option includes a link to its official source.
          </p>
        </div>
      </section>
    </main>
  )
}

export default UrgentSupportPage
