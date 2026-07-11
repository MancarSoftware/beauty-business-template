function Technology({ business }) {
  const section = business.sections.technology

  return (
    <section
      id="tecnologia"
      className="overflow-hidden bg-white px-4 py-20 text-[#08111f] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="w-fit rounded-full bg-[#eefcff] px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#0c8b91]">
              {section.eyebrow}
            </p>
            <h2 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.94] md:text-7xl">
              {section.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#08111f]/62">
              {section.description}
            </p>
          </div>

          <div className="relative min-h-[620px]">
            <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eefcff]" />
            <div className="motion-spin-slow absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#08111f]/16" />
            <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#08111f] p-6 text-center text-sm font-black uppercase text-white shadow-2xl shadow-[#08111f]/20">
              metodo nova
            </div>

            {business.technology.map((item, index) => {
              const positions = [
                'left-0 top-4',
                'right-0 top-24',
                'bottom-28 left-2',
                'bottom-4 right-10',
              ]

              return (
                <article
                  key={item.title}
                  className={`absolute ${positions[index]} w-[min(80%,19rem)] rounded-[2rem] bg-white p-5 shadow-2xl shadow-[#08111f]/12 transition duration-300 hover:-translate-y-2 hover:bg-[#08111f] hover:text-white`}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--brand-accent)] text-lg font-black text-[#08111f]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-black uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-current/62">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-16 flex overflow-hidden rounded-full bg-[#08111f] py-4 text-xl font-black uppercase text-[var(--brand-accent)]">
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
