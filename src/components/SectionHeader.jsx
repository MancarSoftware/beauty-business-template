function SectionHeader({ eyebrow, title, description, inverse = false, align = 'center' }) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} mb-14 max-w-4xl`}>
      <p
        className={`text-xs font-black uppercase tracking-[0.24em] ${
          inverse ? 'text-[var(--brand-caramel)]' : 'text-[var(--brand-caramel)]'
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.94] md:text-6xl ${
          centered ? 'mx-auto' : ''
        } ${inverse ? 'text-white' : 'text-[var(--brand-dark)]'}`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 md:text-lg ${
            centered ? 'mx-auto' : ''
          } ${inverse ? 'text-white/62' : 'text-[var(--brand-coffee)]/68'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
