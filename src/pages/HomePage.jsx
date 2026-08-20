import ArrowIcon from '../components/ArrowIcon.jsx'
import supportPathways from '../data/supportPathways.js'

function ReminderPanel() {
  return (
    <aside
      className="relative overflow-hidden rounded-4xl bg-plum p-8 text-cream shadow-[0_28px_70px_-36px_rgba(43,31,38,0.65)] sm:p-10 lg:p-12"
      aria-label="A supportive reminder"
    >
      <div
        className="absolute -right-14 -top-16 size-48 rounded-full border border-peach/30"
        aria-hidden="true"
      />
      <div
        className="absolute -right-5 -top-7 size-28 rounded-full bg-rust"
        aria-hidden="true"
      />

      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-peach">
          Take a moment
        </p>

        <blockquote className="mt-16 max-w-sm font-display text-4xl leading-[1.08] sm:text-5xl">
          “You don’t need to solve everything today.”
        </blockquote>

        <div className="mt-16 border-t border-cream/25 pt-6">
          <p className="text-sm leading-6 text-cream/75">
            Begin with one honest question
          </p>
          <p className="mt-1 text-lg font-semibold">
            What would feel helpful right now?
          </p>
        </div>
      </div>
    </aside>
  )
}

function HomePage() {
  return (
    <main id="main-content">
      <section
        className="px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-rust">
              <span className="size-2 rounded-full bg-rust" aria-hidden="true" />
              Mental health, made clearer
            </p>

            <h1
              id="hero-heading"
              className="mt-7 max-w-4xl text-[clamp(3.5rem,7vw,6.75rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-balance"
            >
              Support that feels{' '}
              <span className="font-display font-normal italic text-rust">
                within reach.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Clear, compassionate information for the moments when your mind
              feels anything but clear.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#approach"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-7 font-semibold text-cream shadow-[0_12px_30px_-16px_rgba(43,31,38,0.8)] transition-transform hover:-translate-y-0.5 hover:bg-plum focus:outline-rust"
              >
                Find your next step
                <ArrowIcon />
              </a>
              <a
                href="#about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-ink/60 px-7 font-semibold hover:bg-peach-soft hover:underline hover:decoration-2 hover:underline-offset-4"
              >
                Why MH Support?
              </a>
            </div>
          </div>

          <ReminderPanel />
        </div>
      </section>

      <section className="bg-ink px-5 text-cream sm:px-8" aria-label="Our values">
        <ul className="mx-auto grid max-w-7xl divide-y divide-cream/20 py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <li className="py-5 text-center text-sm font-semibold tracking-wide sm:px-5">
            Plain language
          </li>
          <li className="py-5 text-center text-sm font-semibold tracking-wide sm:px-5">
            Thoughtful guidance
          </li>
          <li className="py-5 text-center text-sm font-semibold tracking-wide sm:px-5">
            Trusted routes forward
          </li>
        </ul>
      </section>

      <section
        id="approach"
        className="scroll-mt-24 bg-peach-soft px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
        aria-labelledby="approach-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-rust">
              How we help
            </p>
            <div>
              <h2
                id="approach-heading"
                className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl"
              >
                No maze. No jargon. Just a clearer way forward.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Start with what feels most useful. There is no correct order and
                no pressure to do everything at once.
              </p>
            </div>
          </div>

          <ol className="mt-16 grid border-y-2 border-ink/20 lg:grid-cols-3 lg:divide-x lg:divide-ink/20">
            {supportPathways.map((pathway) => (
              <li
                className="border-b border-ink/20 py-8 last:border-b-0 lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"
                key={pathway.number}
              >
                <span className="grid size-11 place-items-center rounded-full border-2 border-ink/30 text-sm font-bold">
                  {pathway.number}
                </span>
                <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                  {pathway.title}
                </h3>
                <p className="mt-3 max-w-sm leading-7 text-muted">
                  {pathway.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 bg-rust px-5 py-20 text-cream sm:px-8 sm:py-24"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cream/80">
              About MH Support
            </p>
            <div>
              <h2
                id="about-heading"
                className="max-w-4xl font-display text-5xl leading-[1.05] text-balance sm:text-6xl"
              >
                A clearer starting point for mental health support across the
                UK.
              </h2>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-cream/90">
                MH Support is a UK-focused mental health information platform.
                We make common experiences easier to understand and help people
                find a sensible next step without unnecessary jargon, pressure
                or judgement.
              </p>
            </div>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-4xl border border-cream/30 lg:grid-cols-2">
            <article className="bg-plum p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-peach">
                Our purpose
              </p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Useful information, made genuinely approachable.
              </h3>
              <p className="mt-6 max-w-xl leading-7 text-cream/80">
                Mental health information can feel clinical, fragmented or
                difficult to act on. We bring the essentials together in plain
                English, then point towards recognised UK services and
                organisations when further support may help.
              </p>

              <ul className="mt-8 space-y-4 border-t border-cream/20 pt-7 text-cream/90">
                <li className="flex gap-3">
                  <span aria-hidden="true">—</span>
                  Clear explanations of common mental health experiences
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true">—</span>
                  Practical ideas that respect different circumstances
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true">—</span>
                  Transparent signposting to trusted routes for help
                </li>
              </ul>
            </article>

            <article className="border-t border-cream/30 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-cream/80">
                UK by design
              </p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                One country, different routes to care.
              </h3>
              <p className="mt-6 max-w-xl leading-7 text-cream/90">
                Health services and access pathways are not identical across the
                UK. We make the relevant nation and eligibility clear so people
                are not sent towards advice that does not apply to them.
              </p>

              <ul className="mt-9 grid grid-cols-2 gap-3" aria-label="UK nations covered">
                {['England', 'Scotland', 'Wales', 'Northern Ireland'].map(
                  (nation) => (
                    <li
                      className="rounded-full border border-cream/35 bg-cream/10 px-4 py-3 text-center text-sm font-semibold"
                      key={nation}
                    >
                      {nation}
                    </li>
                  ),
                )}
              </ul>
            </article>
          </div>

          <div className="mt-14 grid border-y border-cream/30 lg:grid-cols-3 lg:divide-x lg:divide-cream/30">
            <article className="border-b border-cream/30 py-8 lg:border-b-0 lg:pr-8">
              <h3 className="text-xl font-semibold">Plain language</h3>
              <p className="mt-3 leading-7 text-cream/80">
                We explain unfamiliar terms and keep sentences direct, readable
                and free from avoidable clinical language.
              </p>
            </article>
            <article className="border-b border-cream/30 py-8 lg:border-b-0 lg:px-8">
              <h3 className="text-xl font-semibold">Accessible by default</h3>
              <p className="mt-3 leading-7 text-cream/80">
                Inclusive structure, strong contrast and keyboard access are
                treated as essentials rather than optional extras.
              </p>
            </article>
            <article className="py-8 lg:pl-8">
              <h3 className="text-xl font-semibold">Honest boundaries</h3>
              <p className="mt-3 leading-7 text-cream/80">
                MH Support provides general information and signposting. It does
                not diagnose conditions, provide treatment or replace
                professional healthcare advice.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
