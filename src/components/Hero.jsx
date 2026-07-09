import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )
  const booking = business.hero.booking ?? {
    label: 'Reserva directa',
    value: 'Disponibilidad por WhatsApp',
    suggestedLabel: 'Servicio destacado',
    service: business.services?.[0]?.name ?? 'Servicio destacado',
    duration: 'Confirmamos horario y disponibilidad.',
    price: business.pricing?.[0]?.price ?? '',
    priceLabel: 'Desde',
  }

  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-[#130f12]"
    >
      {business.hero.image ? (
        <img
          src={business.hero.image}
          alt={`Interior de ${business.name}`}
          className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
        />
      ) : (
        <div className="absolute inset-0 bg-[#130f12]" />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,15,18,0.96)_0%,rgba(19,15,18,0.82)_38%,rgba(19,15,18,0.22)_72%,rgba(19,15,18,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,15,18,0.48)_0%,transparent_38%,rgba(19,15,18,0.92)_100%)]" />
      <div className="absolute left-0 top-0 hidden h-full w-16 border-r border-white/10 bg-white/5 backdrop-blur-sm lg:block" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-6 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-4xl pb-8 lg:pb-16">
          <div className="mb-6 flex max-w-3xl flex-wrap gap-3">
            <span className="rounded-md border border-[color:var(--brand-accent)] bg-white/10 px-3 py-2 text-sm font-semibold text-[var(--brand-accent)] backdrop-blur">
              {business.hero.eyebrow}
            </span>
            {business.hero.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-md border border-white/12 bg-white/8 px-3 py-2 text-sm text-zinc-100 backdrop-blur"
              >
                {highlight}
              </span>
            ))}
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] text-white md:text-6xl lg:text-7xl">
            {business.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-100 md:text-lg">
            {business.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-[var(--brand-accent)] px-6 py-4 text-center text-sm font-bold text-zinc-950 shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:brightness-105"
            >
              {business.hero.cta}
            </a>
            <a
              href="#galeria"
              className="rounded-md border border-white/18 bg-white/10 px-6 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16"
            >
              Ver resultados
            </a>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-lg border border-white/14 bg-[#f8edf2]/95 text-[#130f12] shadow-2xl shadow-black/30 backdrop-blur md:grid-cols-[1.1fr_1fr_0.8fr_auto]">
          <div className="border-b border-[#130f12]/10 p-5 md:border-b-0 md:border-r">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--brand-accent-dark)]">
              {booking.label}
            </p>
            <p className="mt-2 text-xl font-semibold">{booking.value}</p>
          </div>
          <div className="border-b border-[#130f12]/10 p-5 md:border-b-0 md:border-r">
            <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
              {booking.suggestedLabel}
            </p>
            <p className="mt-2 font-semibold">{booking.service}</p>
            <p className="mt-1 text-sm leading-6 text-zinc-600">
              {booking.duration}
            </p>
          </div>
          <div className="border-b border-[#130f12]/10 p-5 md:border-b-0 md:border-r">
            <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
              {booking.priceLabel}
            </p>
            <p className="mt-1 text-3xl font-semibold">{booking.price}</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-20 items-center justify-center bg-[#130f12] px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-[var(--brand-accent-dark)]"
          >
            Consultar horario
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
