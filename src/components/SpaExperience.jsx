import SectionHeader from './SectionHeader'

function SpaExperience({ business }) {
  const section = business.sections.experience

  return (
    <section
      id="experiencia"
      className="bg-[#09231f] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="relative min-h-[620px] overflow-hidden border border-white/12">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85"
              alt={`Ambiente de ${business.name}`}
              className="absolute inset-0 h-full w-full object-cover opacity-72"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,35,31,0.12)_0%,rgba(9,35,31,0.92)_100%)]" />

            <div className="relative flex h-full min-h-[620px] flex-col justify-end p-6 sm:p-8">
              <p className="w-fit bg-[var(--brand-accent)] px-4 py-2 text-xs font-black uppercase">
                Serena Signature
              </p>
              <h3 className="mt-5 max-w-lg text-5xl font-black uppercase leading-none">
                Calma preparada antes de que entres.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/72">
                Cada cabina se prepara con aroma, temperatura y musica segun el
                tipo de experiencia reservada.
              </p>
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
              inverse
              align="left"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {business.benefits.map((benefit, index) => (
                <article
                  key={benefit.title}
                  className="group border border-white/12 bg-white/[0.04] p-5 transition duration-300 hover:border-[var(--brand-accent)] hover:bg-white hover:text-[#09231f]"
                >
                  <p className="text-xs font-black uppercase text-[var(--brand-accent)] group-hover:text-[var(--brand-accent-dark)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 text-xl font-black uppercase leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/62 group-hover:text-[#09231f]/70">
                    {benefit.description}
                  </p>
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
