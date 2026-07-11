function Technology({ business }) {
  const section = business.sections.technology

  return (
    <section
      id="tecnologia"
      className="bg-[#fbfaf6] px-4 py-20 text-[#111827] sm:px-6 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#227684]">
              {section.eyebrow}
            </p>
            <h2 className="mt-5 max-w-3xl text-5xl font-black uppercase leading-[0.94] md:text-7xl">
              {section.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#111827]/62">
              {section.description}
            </p>
          </div>

          <div className="border-t border-[#111827]/12">
            {business.technology.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-5 border-b border-[#111827]/12 py-7 md:grid-cols-[80px_1fr]"
              >
                <span className="text-3xl font-black text-[#227684]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-black uppercase">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#111827]/62">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 flex overflow-hidden border-y border-[#111827]/12 py-4 text-xl font-black uppercase text-[#227684]">
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
