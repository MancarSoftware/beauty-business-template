import { createWhatsAppUrl } from '../utils/whatsapp'

function BakeryEvents({ business }) {
  const section = business.sections.events

  return (
    <section
      id="eventos"
      className="relative isolate overflow-hidden px-4 py-20 text-white sm:px-8 lg:px-10 lg:py-28"
    >
      <img
        src={business.eventImage}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(43,29,20,0.95)_0%,rgba(43,29,20,0.82)_34%,rgba(43,29,20,0.22)_72%)]" />

      <div className="mx-auto max-w-[90rem]">
        <div className="max-w-[34rem]">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
            {section.eyebrow}
          </p>
          <h2 className="font-brand-serif mt-5 text-4xl leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            {section.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-white/82">
            {section.description}
          </p>

          <a
            href={createWhatsAppUrl(
              business.whatsapp,
              business.eventWhatsappMessage,
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-[var(--brand-caramel)] px-8 py-4 text-sm font-black uppercase text-white shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:bg-white hover:text-[var(--brand-dark)]"
          >
            Cotizar mi evento
          </a>
        </div>
      </div>
    </section>
  )
}

export default BakeryEvents
