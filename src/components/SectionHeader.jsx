function SectionHeader({ eyebrow, title, description, inverse = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p
        className="mb-3 text-sm font-semibold uppercase"
        style={{ color: inverse ? 'var(--brand-accent)' : 'var(--brand-accent-dark)' }}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-semibold leading-tight md:text-5xl ${
          inverse ? 'text-white' : 'text-zinc-950'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 md:text-lg ${
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
