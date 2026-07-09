function SectionHeader({ eyebrow, title, description, inverse = false }) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[0.32fr_0.68fr] md:items-end">
      <p
        className={`text-sm font-semibold uppercase ${
          inverse ? 'text-[var(--brand-accent)]' : 'text-[var(--brand-accent-dark)]'
        }`}
      >
        {eyebrow}
      </p>
      <div>
        <h2
          className={`font-display text-4xl font-semibold leading-tight md:text-6xl ${
            inverse ? 'text-white' : 'text-[#130f12]'
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-4 max-w-3xl text-base leading-7 md:text-lg ${
              inverse ? 'text-zinc-300' : 'text-zinc-600'
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeader
