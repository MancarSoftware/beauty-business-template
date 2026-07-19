import { createWhatsAppUrl } from '../utils/whatsapp'

function CategoryCTA({ business, cta, image }) {
  if (!cta) return null

  return (
    <section className="px-4 pb-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[90rem] overflow-hidden rounded-[1.15rem] bg-[#f3e3ce] shadow-xl shadow-[var(--brand-coffee)]/8 md:grid-cols-[1fr_21rem]">
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
            Pedido especial
          </p>
          <h2 className="font-brand-serif mt-3 text-4xl leading-none tracking-[-0.05em] text-[var(--brand-dark)] sm:text-5xl">
            {cta.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--brand-coffee)]/76">
            {cta.text}
          </p>
        </div>

        <div className="relative min-h-56 overflow-hidden md:min-h-full">
          {image && (
            <img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(243,227,206,0.98),rgba(243,227,206,0.25))] md:bg-[linear-gradient(90deg,rgba(243,227,206,0.65),rgba(43,29,20,0.1))]" />
          <a
            href={createWhatsAppUrl(business.whatsapp, cta.message)}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-6 left-6 right-6 rounded-full bg-[var(--brand-caramel)] px-6 py-4 text-center text-xs font-black uppercase text-white shadow-2xl shadow-[var(--brand-coffee)]/18 transition hover:-translate-y-1 hover:bg-[var(--brand-dark)]"
          >
            {cta.button}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CategoryCTA
