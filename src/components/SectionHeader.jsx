function SectionHeader({ eyebrow, title, description, inverse = false, align = 'center' }) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} mb-12 max-w-5xl`}>
      <p
        className={`text-xs font-black uppercase ${
          inverse ? 'text-[var(--brand-accent)]' : 'text-[var(--brand-punch)]'
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.96] md:text-5xl lg:text-6xl ${
          centered ? 'mx-auto' : ''
        } ${inverse ? 'text-white' : 'text-[#050505]'}`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 max-w-3xl text-base leading-7 md:text-lg ${
            centered ? 'mx-auto' : ''
          } ${inverse ? 'text-white/64' : 'text-zinc-600'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
