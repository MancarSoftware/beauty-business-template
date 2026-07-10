function SectionHeader({ eyebrow, title, description, inverse = false, align = 'center' }) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} mb-12 max-w-4xl`}>
      <p
        className={`text-xs font-semibold uppercase ${
          inverse ? 'text-[#e4b4a5]' : 'text-[var(--brand-accent-dark)]'
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-4 max-w-4xl font-display text-4xl leading-[1.02] md:text-6xl ${
          centered ? 'mx-auto' : ''
        } ${inverse ? 'text-white' : 'text-[#17342f]'}`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 md:text-lg ${
            centered ? 'mx-auto' : ''
          } ${inverse ? 'text-white/68' : 'text-[#17342f]/62'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
