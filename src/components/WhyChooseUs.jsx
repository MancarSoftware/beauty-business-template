import SectionHeader from './SectionHeader'

function WhyChooseUs({ business }) {
  const section = business.sections?.benefits ?? {
    eyebrow: 'Por qué elegirnos',
    title: 'Un gimnasio diseñado para entrenar con orden',
    description: 'Espacios modernos, entrenadores preparados y seguimiento real.',
  }

  return (
    <section
      id="entrenadores"
      className="bg-white px-4 py-16 text-[#101010] sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {business.benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-[2rem] border border-black/10 bg-[#fbfaf7] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/10"
            >
              <p className="font-display text-4xl font-black text-[var(--brand-accent-dark)]">
                0{index + 1}
              </p>

              <h3 className="mt-6 text-xl font-black uppercase leading-tight text-[#101010]">
                {benefit.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-[2.5rem] bg-[#101010] p-6 text-white shadow-2xl shadow-black/20 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--brand-accent)]">
                {business.sections?.trainers?.eyebrow}
              </p>

              <h2 className="mt-4 font-display text-4xl font-black uppercase leading-tight md:text-5xl">
                {business.sections?.trainers?.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-zinc-300">
                {business.sections?.trainers?.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {business.trainers.map((trainer) => (
                <article
                  key={trainer.name}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[var(--brand-accent)]/40 bg-black/20 font-display text-3xl font-black text-[var(--brand-accent)]">
                    {trainer.initials}
                  </div>

                  <h3 className="mt-5 text-lg font-black uppercase text-white">
                    {trainer.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    {trainer.role}
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

export default WhyChooseUs