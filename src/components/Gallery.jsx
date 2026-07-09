import SectionHeader from './SectionHeader'

function Gallery({ business }) {
  const section = business.sections?.gallery ?? {
    eyebrow: 'Galería',
    title: 'Trabajos realizados',
    description: 'Resultados recientes para inspirar tu próxima reserva.',
  }

  return (
    <section
      id="galeria"
      className="overflow-hidden bg-[#f2e7eb] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {business.gallery.map((item) => (
            <article
              key={item.title}
              className="group relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#130f12]"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              ) : null}

              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(19,15,18,0.78)_100%)]" />

              <div className="absolute left-5 top-5 rounded-full bg-[#fff8fa]/92 px-4 py-2 text-xs font-bold uppercase text-[#130f12]">
                {item.category}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-semibold text-[var(--brand-accent)]">
                  {item.metric}
                </p>

                <h3 className="mt-2 font-display text-3xl font-semibold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-100">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery