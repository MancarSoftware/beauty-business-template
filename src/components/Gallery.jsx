import SectionHeader from './SectionHeader'

function Gallery({ business }) {
  const section = business.sections?.gallery ?? {
    eyebrow: 'Galería',
    title: 'Trabajos realizados',
    description: 'Resultados recientes para inspirar tu próxima reserva.',
  }

  return (
    <section id="galeria" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          {business.gallery.map((item, index) => {
            const isFeatured = index === 0

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-lg border border-[#ead8df] bg-[#130f12] text-white ${
                  isFeatured ? 'min-h-[620px] lg:row-span-2' : 'min-h-[300px]'
                }`}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : null}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,15,18,0.06)_0%,rgba(19,15,18,0.18)_42%,rgba(19,15,18,0.86)_100%)]" />

                <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-5 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-white/90 px-3 py-1 text-xs font-bold uppercase text-[#130f12]">
                      {item.category}
                    </span>
                    <span className="text-sm font-semibold text-white/70">
                      {item.initials}
                    </span>
                  </div>

                  <div className="max-w-xl">
                    <p className="mb-3 w-fit rounded-md bg-[var(--brand-accent)] px-3 py-1 text-xs font-bold text-[#130f12]">
                      {item.metric}
                    </p>
                    <h3
                      className={`font-semibold leading-tight ${
                        isFeatured ? 'text-4xl md:text-6xl' : 'text-3xl'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Gallery
