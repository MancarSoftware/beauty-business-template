import SectionHeader from './SectionHeader'

function Gallery({ business }) {
  return (
    <section id="galeria" className="bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Trabajos realizados"
          title="Elige tu próximo corte viendo nuestros acabados"
          description="Fades, barba definida, textura y perfilado hechos en BarberPro Studio para clientes que buscan un resultado limpio y moderno."
          inverse
        />

        <div className="grid auto-rows-[310px] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {business.gallery.map((item, index) => {
            const isFeatured = index === 0

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-lg border border-white/10 text-white shadow-2xl shadow-black/30 ${
                  isFeatured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{ background: item.image ? undefined : item.background }}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover grayscale saturate-75 transition duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:saturate-125"
                  />
                ) : null}
                <div className="absolute inset-0 bg-zinc-950/34 transition duration-500 group-hover:bg-zinc-950/8" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,168,90,0.24),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0,transparent_34%,rgba(0,0,0,0.32)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                <div className="absolute right-5 top-5 h-16 w-16 rounded-lg border border-white/15 bg-white/10 backdrop-blur transition group-hover:scale-105 group-hover:border-amber-300/45" />

                <div className="relative flex h-full flex-col justify-between p-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-md border border-white/20 bg-zinc-950/45 px-3 py-1 text-xs font-semibold backdrop-blur">
                      {item.category}
                    </span>
                    <span className="text-sm font-semibold text-white/55">
                      {item.initials}
                    </span>
                  </div>

                  <div>
                    <span className="mb-3 inline-flex rounded-md bg-amber-300 px-3 py-1 text-xs font-bold text-zinc-950">
                      {item.metric}
                    </span>
                    <h3
                      className={`font-semibold ${
                        isFeatured ? 'text-4xl md:text-5xl' : 'text-2xl'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-zinc-100">
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
