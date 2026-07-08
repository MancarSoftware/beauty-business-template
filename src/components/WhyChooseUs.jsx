import SectionHeader from './SectionHeader'

function WhyChooseUs({ business }) {
  return (
    <section id="beneficios" className="bg-zinc-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Por qué elegirnos"
          title="Una barbería creada para verte bien sin perder tiempo"
          description="Cada detalle está pensado para que la experiencia sea rápida, cómoda y consistente."
          inverse
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {business.benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-lg border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
            >
              <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-amber-300 text-sm font-bold text-zinc-950">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
