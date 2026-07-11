function Dentists({ business }) {
  const section = business.sections.dentists

  return (
    <section
      id="equipo"
      className="bg-[#061a2b] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="w-fit rounded-full bg-white/8 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-accent)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.96] md:text-7xl">
              {section.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/64">
            {section.description}
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {business.dentists.map((dentist, index) => (
            <article
              key={dentist.name}
              className="group overflow-hidden bg-white text-[#061a2b] shadow-2xl shadow-black/20"
            >
              <div className="relative grid h-72 place-items-center overflow-hidden bg-[#e8fbff]">
                <div className="absolute h-48 w-48 rounded-full bg-[var(--brand-accent)]/35 transition duration-500 group-hover:scale-125" />
                <div className="absolute bottom-0 h-40 w-56 rounded-t-full bg-[#061a2b]" />
                <div className="relative grid h-28 w-28 place-items-center rounded-full bg-white text-4xl font-black text-[#087f83] shadow-xl">
                  {dentist.name
                    .split(' ')
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join('')}
                </div>
                <span className="absolute right-5 top-5 text-5xl font-black text-[#061a2b]/10">
                  0{index + 1}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black uppercase">{dentist.name}</h3>
                <p className="mt-2 text-sm font-black uppercase text-[#087f83]">
                  {dentist.role}
                </p>
                <p className="mt-5 text-base leading-7 text-[#061a2b]/62">
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
