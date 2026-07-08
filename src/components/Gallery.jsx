import SectionHeader from './SectionHeader'

function Gallery({ business }) {
  return (
    <section id="galeria" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Galería"
          title="Trabajos visuales faciles de reemplazar por fotos reales"
          description="Estos espacios funcionan como placeholders elegantes para mostrar cortes, estilos y resultados."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {business.gallery.map((item) => (
            <article
              key={item.title}
              className="group relative min-h-80 overflow-hidden rounded-lg p-5 text-white shadow-xl shadow-zinc-200/80"
              style={{ background: item.background }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_34%)]" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 to-transparent" />

              <div className="relative flex h-full min-h-72 flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="rounded-md border border-white/20 bg-white/12 px-3 py-1 text-xs font-semibold">
                    {item.category}
                  </span>
                  <span className="text-5xl font-semibold text-white/35 transition group-hover:text-white/55">
                    {item.initials}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-100">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
