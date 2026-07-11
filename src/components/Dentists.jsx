function Dentists({ business }) {
  const section = business.sections.dentists

  return (
    <section
      id="equipo"
      className="bg-white px-4 py-20 text-[#172033] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <p className="w-fit rounded-full bg-[#fff7ec] px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-accent-dark)]">
            {section.eyebrow}
          </p>
          <h2 className="mt-6 text-5xl font-black uppercase leading-[0.96] md:text-7xl">
            {section.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#172033]/62">
            {section.description}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1.15fr_1fr] lg:items-end">
          {business.dentists.map((dentist, index) => (
            <article
              key={dentist.name}
              className={`group rounded-[2.5rem] p-5 transition hover:-translate-y-2 ${
                index === 1
                  ? 'bg-[#172033] text-white lg:min-h-[560px]'
                  : 'bg-[#fff7ec] text-[#172033] lg:min-h-[480px]'
              }`}
            >
              <div
                className={`grid aspect-square place-items-center rounded-[2rem] ${
                  index === 1 ? 'bg-white/10' : 'bg-white'
                }`}
              >
                <div className="relative grid h-40 w-40 place-items-center rounded-full bg-[var(--brand-accent)] text-5xl font-black text-[#172033] transition group-hover:scale-105">
                  {dentist.name
                    .split(' ')
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join('')}
                  <span className="absolute -right-4 -top-4 rounded-full bg-[var(--brand-secondary)] px-3 py-2 text-sm">
                    0{index + 1}
                  </span>
                </div>
              </div>

              <div className="p-3 pt-6">
                <h3 className="text-3xl font-black uppercase leading-tight">
                  {dentist.name}
                </h3>
                <p
                  className={`mt-3 text-sm font-black uppercase ${
                    index === 1 ? 'text-[var(--brand-accent)]' : 'text-[#d94f32]'
                  }`}
                >
                  {dentist.role}
                </p>
                <p
                  className={`mt-5 text-base leading-7 ${
                    index === 1 ? 'text-white/62' : 'text-[#172033]/62'
                  }`}
                >
                  {dentist.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Dentists
