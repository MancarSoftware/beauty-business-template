import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function BakeryFavorites({ business }) {
  const section = business.sections.favorites

  return (
    <section
      id="favoritos"
      className="bg-[var(--brand-surface)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {business.products.map((product) => (
            <article
              key={product.name}
              className="group flex min-h-[31rem] flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-[var(--brand-coffee)]/7 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--brand-coffee)]/14"
            >
              <div className="relative h-56 overflow-hidden bg-[var(--brand-background)]">
                <img
                  src={product.image}
                  alt={`${product.name} de ${business.name}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-[11px] font-black uppercase text-[var(--brand-caramel)]">
                  {product.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-black uppercase leading-tight">
                  {product.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--brand-coffee)]/70">
                  {product.description}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <p className="text-2xl font-black text-[var(--brand-dark)]">
                    {product.price}
                  </p>
                  <a
                    href={createWhatsAppUrl(
                      business.whatsapp,
                      product.whatsappMessage,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[var(--brand-dark)] px-5 py-3 text-xs font-black uppercase text-white transition hover:bg-[var(--brand-caramel)] hover:text-[var(--brand-dark)]"
                  >
                    Pedir
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BakeryFavorites
