function SpaExperience({ business }) {
  const section = business.sections.experience

  return (
    <section
      id="experiencia"
      className="bg-white px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative grid gap-5 md:grid-cols-2">
            <div className="md:pt-20">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85"
                alt={`Cabina de ${business.name}`}
                className="h-[420px] w-full rounded-[3.5rem] rounded-tl-[9rem] object-cover shadow-2xl shadow-[#09231f]/10"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=85"
                alt={`Ritual corporal en ${business.name}`}
                className="h-[540px] w-full rounded-[3.5rem] rounded-br-[9rem] object-cover shadow-2xl shadow-[#09231f]/10"
              />
            </div>
          </div>

          <div className="rounded-[3rem] bg-[#fff8f1] p-6 shadow-xl shadow-[#09231f]/8 sm:p-8">
            <p className="w-fit rounded-full bg-[#f2e4d8] px-5 py-2 text-xs font-black uppercase text-[var(--brand-accent-dark)]">
              {section.eyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.98] md:text-6xl">
              {section.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#09231f]/64">
              {section.description}
            </p>

            <div className="mt-10 grid gap-3">
              {business.benefits.map((benefit, index) => (
                <article
                  key={benefit.title}
                  className="grid gap-4 rounded-[2rem] bg-white p-5 shadow-lg shadow-[#09231f]/6 sm:grid-cols-[70px_1fr]"
                >
                  <p className="grid h-14 w-14 place-items-center rounded-full bg-[#f2e4d8] text-xl font-black text-[var(--brand-accent-dark)]">
                    0{index + 1}
                  </p>
                  <div>
                    <h3 className="text-lg font-black uppercase">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#09231f]/62">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpaExperience
