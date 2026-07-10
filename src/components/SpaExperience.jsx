function SpaExperience({ business }) {
  const section = business.sections.experience

  return (
    <section
      id="experiencia"
      className="bg-white px-4 py-16 text-[#09231f] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:pt-20">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85"
                alt={`Cabina de ${business.name}`}
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=85"
                alt={`Ritual corporal en ${business.name}`}
                className="h-[540px] w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between border border-[#09231f]/14 bg-[#fbf7f1] p-6 sm:p-8">
            <div>
              <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
                {section.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.98] md:text-6xl">
                {section.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#09231f]/64">
                {section.description}
              </p>
            </div>

            <div className="mt-10 border-y border-[#09231f]/12">
              {business.benefits.map((benefit, index) => (
                <article
                  key={benefit.title}
                  className="grid gap-4 border-b border-[#09231f]/12 py-5 last:border-b-0 sm:grid-cols-[70px_1fr]"
                >
                  <p className="text-3xl font-black text-[var(--brand-accent-dark)]">
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
