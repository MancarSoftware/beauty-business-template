import { createWhatsAppUrl } from '../utils/whatsapp'

function BakeryFavorites({ business }) {
  const section = business.sections.favorites
  const visibleProducts = business.products.slice(0, 4)

  return (
    <section
      id="favoritos"
      className="bg-[#f8f1e7] px-4 py-16 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[18rem_1fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
            {section.eyebrow}
          </p>
          <h2 className="font-brand-serif mt-4 text-4xl leading-[1.02] tracking-[-0.05em] text-[var(--brand-dark)] sm:text-5xl">
            {section.title}
          </h2>
          <span className="mt-8 block h-px w-20 bg-[var(--brand-caramel)]" />
          <p className="mt-8 max-w-[13rem] text-base leading-7 text-[var(--brand-coffee)]/72">
            {section.description}
          </p>
          <a
            href="#especialidades"
            className="mt-8 inline-flex rounded-full border border-[var(--brand-caramel)] px-7 py-3 text-xs font-black uppercase text-[var(--brand-caramel)] transition hover:bg-[var(--brand-caramel)] hover:text-white"
          >
            Ver todos los productos
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <article
              key={product.name}
              className="group flex min-h-[25rem] flex-col overflow-hidden rounded-[0.8rem] bg-[#fffdf8] shadow-lg shadow-[var(--brand-coffee)]/8 ring-1 ring-[var(--brand-border)] transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--brand-coffee)]/14"
            >
              <div className="relative h-56 overflow-hidden bg-[#eee4d5]">
                <img
                  src={product.image}
                  alt={`${product.name} de ${business.name}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-black leading-tight">
                  {product.name}
                </h3>
                <p className="mt-3 text-xs text-[var(--brand-coffee)]/58">
                  {product.category}
                </p>
                <div className="mt-auto flex items-end justify-between gap-3 pt-8">
                  <p className="text-xl font-black text-[var(--brand-dark)]">
                    {product.price}
                  </p>
                  <a
                    href={createWhatsAppUrl(
                      business.whatsapp,
                      product.whatsappMessage,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Pedir ${product.name}`}
                    className="grid h-8 w-8 place-items-center rounded-full bg-[var(--brand-caramel)] text-lg font-black text-white transition hover:bg-[var(--brand-dark)]"
                  >
                    +
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
