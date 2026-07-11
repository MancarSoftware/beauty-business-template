function Technology({ business }) {
  const section = business.sections.technology

  return (
    <section
      id="tecnologia"
      className="overflow-hidden bg-[#fff7ec] px-4 py-20 text-[#172033] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="w-fit rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-accent-dark)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.96] md:text-7xl">
              {section.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#172033]/62">
              {section.description}
            </p>
          </div>

          <div className="relative min-h-[560px]">
            <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#172033]/10" />
            <div className="absolute left-1/2 top-1/2 h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#172033]/10" />
            <div className="absolute left-1/2 top-1/2 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#172033] p-5 text-center text-sm font-black uppercase text-white shadow-2xl">
              Metodo Nova
            </div>

            {business.technology.map((item, index) => {
              const positions = [
                'left-0 top-8',
                'right-0 top-24',
                'bottom-24 left-4',
                'bottom-6 right-8',
              ]

              return (
                <article
                  key={item.title}
                  className={`absolute ${positions[index]} w-[min(78%,18rem)] rounded-[2rem] bg-white p-5 shadow-2xl shadow-[#172033]/10 transition hover:-translate-y-2`}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--brand-accent)] text-lg font-black">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-black uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#172033]/62">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-16 flex overflow-hidden rounded-full bg-white py-4 text-xl font-black uppercase text-[var(--brand-accent-dark)] shadow-xl shadow-[#172033]/6">
          <div className="motion-marquee flex min-w-full gap-10 px-5">
            <span>Diagnostico claro</span>
            <span>Agenda por WhatsApp</span>
            <span>Bioseguridad</span>
            <span>Odontologia estetica</span>
            <span>Urgencias dentales</span>
          </div>
          <div className="motion-marquee flex min-w-full gap-10 px-5" aria-hidden="true">
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
