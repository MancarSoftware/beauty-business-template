function SectionHeader({ eyebrow, title, description, inverse = false }) {
  return (
    <div className="mx-auto mb-12 max-w-5xl text-center">
      <p
        className={`text-sm font-semibold uppercase ${
          inverse ? 'text-[var(--brand-accent)]' : 'text-[var(--brand-accent-dark)]'
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl ${
          inverse ? 'text-white' : 'text-[#130f12]'
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mx-auto mt-5 max-w-3xl text-base leading-7 md:text-lg ${
            inverse ? 'text-zinc-300' : 'text-zinc-600'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader