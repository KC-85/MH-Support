function BrandMark({ inverted = false }) {
  const colourClasses = inverted
    ? 'border-cream text-cream'
    : 'border-ink text-ink'

  return (
    <span
      className={`grid size-11 shrink-0 place-items-center rounded-full border-2 ${colourClasses}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none">
        <path
          d="M4 13c2.6 0 2.8-4 5.5-4s2.7 6 5.4 6c2.4 0 2.7-3.5 5.1-3.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}

export default BrandMark
