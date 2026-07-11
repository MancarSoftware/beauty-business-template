function Technology({ business }) {
  const section = business.sections.technology

  return (
    <section
      id="tecnologia"
      className="overflow-hidden bg-white px-4 py-20 text-[#061a2b] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="w-fit rounded-full bg-[#eefbff] px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#087f83]">
              {section.eyebrow}
            </p>
            <h2 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.96] md:text-7xl">
              {section.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#061a2b]/62">
              {section.description}
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-8 bg-[var(--brand-accent)]/20 blur-3xl" />
            <div className="relative grid gap-4 md:grid-cols-2">
              {business.technology.map((item, index) => (
                <article
                  key={item.title}
                  className={`min-h-[250px] border border-[#061a2b]/10 bg-[#f6fdff] p-6 shadow-xl shadow-[#061a2b]/5 transition hover:-translate-y-2 hover:bg-[#061a2b] hover:text-white ${
                    index % 2 === 0 ? 'md:translate-y-8' : ''
                  }`}
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--brand-accent)] text-lg font-black text-[#061a2b]">
                    {index + 1}
                  </span>
                  <h3 className="mt-8 text-2xl font-black uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-current/65">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 flex overflow-hidden border-y border-[#061a2b]/10 py-5 text-2xl font-black uppercase text-[#087f83]">
          <div className="motion-marquee flex min-w-full gap-10">
            <span>Diagnostico claro</span>
            <span>Agenda por WhatsApp</span>
            <span>Bioseguridad</span>
            <span>Odontologia estetica</span>
            <span>Urgencias dentales</span>
          </div>
          <div className="motion-marquee flex min-w-full gap-10" aria-hidden="true">
            <span>Diagnostico claro</span>
            <span>Agenda por WhatsApp</span>
            <span>Bioseguridad</span>
            <span>Odontologia estetica</span>
            <span>Urgencias dentales</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology
