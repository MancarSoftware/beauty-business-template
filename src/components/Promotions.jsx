import { createWhatsAppUrl } from '../utils/whatsapp'

function Promotions({ business }) {
  const section = business.promotions

  if (!section?.items?.length) {
    return null
  }

  return (
    <section
      id="promociones"
      className="bg-[#fff8fa] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase text-[var(--brand-accent-dark)]">
            {section.eyebrow}
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight text-[#130f12] md:text-5xl lg:text-6xl">
            {section.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-zinc-600 md:text-lg">
            {section.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {section.items.map((promotion) => {
            const message =
              promotion.whatsappMessage ??
              `Hola ${business.name}, quiero información sobre la promoción ${promotion.name}.`

            const whatsappUrl = createWhatsAppUrl(business.whatsapp, message)

            return (
              <article
                key={promotion.name}
                className={`rounded-[2rem] border p-6 shadow-lg ${
                  promotion.featured
                    ? 'border-[var(--brand-accent)] bg-[#130f12] text-white'
                    : 'border-[#ead8df] bg-white text-[#130f12]'
                }`}
              >
                {promotion.tag ? (
                  <span
                    className={`inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase ${
                      promotion.featured
                        ? 'bg-[var(--brand-accent)] text-[#130f12]'
                        : 'bg-[#f5e6ec] text-[var(--brand-accent-dark)]'
                    }`}
                  >
                    {promotion.tag}
                  </span>
                ) : null}

                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight">
                  {promotion.name}
                </h3>

                <p
                  className={`mt-4 leading-7 ${
                    promotion.featured ? 'text-zinc-200' : 'text-zinc-600'
                  }`}
                >
                  {promotion.description}
                </p>

                <div className="mt-8 flex items-end gap-3">
                  {promotion.oldPrice ? (
                    <span className="text-lg font-semibold text-zinc-400 line-through">
                      {promotion.oldPrice}
                    </span>
                  ) : null}

                  <span className="font-display text-4xl font-semibold">
                    {promotion.price}
                  </span>
                </div>

                {promotion.note ? (
                  <p
                    className={`mt-3 text-sm ${
                      promotion.featured ? 'text-zinc-300' : 'text-zinc-500'
                    }`}
                  >
                    {promotion.note}
                  </p>
                ) : null}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-4 text-sm font-bold transition ${
                    promotion.featured
                      ? 'bg-[var(--brand-accent)] text-[#130f12] hover:brightness-105'
                      : 'bg-[#130f12] text-white hover:bg-[var(--brand-accent-dark)]'
                  }`}
                >
                  Agendar esta promoción
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Promotions