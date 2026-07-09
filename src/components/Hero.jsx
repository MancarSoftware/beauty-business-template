import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  const booking = business.hero.booking ?? {
    label: 'Reserva directa',
    value: 'Disponibilidad por WhatsApp',
    service: business.services?.[0]?.name ?? 'Servicio destacado',
    duration: 'Confirmamos horario y disponibilidad.',
    price: business.pricing?.[0]?.price ?? '',
    priceLabel: 'Desde',
  }

  const secondaryHref = business.hero.secondaryHref ?? '#servicios'
  const secondaryCta = business.hero.secondaryCta ?? 'Ver servicios'

  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-[#130f12]"
    >
      {business.hero.image ? (
        <img
          src={business.hero.image}
          alt={`Interior de ${business.name}`}
          className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
        />
      ) : null}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,15,18,0.42)_0%,rgba(19,15,18,0.22)_42%,rgba(19,15,18,0.90)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,248,250,0.12),transparent_34%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-4 pb-5 pt-28 sm:px-6 lg:px-8">
        <div className="hidden justify-between text-xs font-semibold uppercase text-white/70 lg:flex">
          <span>Color</span>
          <span>Corte</span>
          <span>Balayage</span>
          <span>Styling</span>
        </div>

        <div className="mx-auto max-w-5xl py-16 text-center">
          <p className="mx-auto mb-5 w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            {business.hero.eyebrow}
          </p>

          <h1 className="font-display text-6xl font-semibold leading-[0.9] text-white md:text-8xl lg:text-9xl">
            {business.hero.title}
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-zinc-100 md:text-lg">
            {business.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#fff8fa] px-7 py-4 text-center text-sm font-bold text-[#130f12] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[var(--brand-accent)]"
            >
              {business.hero.cta}
            </a>

            <a
              href={secondaryHref}
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#e7b7c8]/70 bg-[#e7b7c8] px-7 py-4 text-center text-sm font-extrabold text-[#130f12] shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-[#f4d2de]"
            >
              {secondaryCta}
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-lg border border-white/14 bg-[#fff8fa] text-[#130f12] shadow-2xl shadow-black/30 md:grid-cols-4">
          <div className="border-b border-[#ead8df] p-4 md:border-b-0 md:border-r">
            <p className="text-xs font-bold uppercase text-[var(--brand-accent-dark)]">
              {booking.label}
            </p>
            <p className="mt-1 text-lg font-semibold">{booking.value}</p>
          </div>

          <div className="border-b border-[#ead8df] p-4 md:border-b-0 md:border-r">
            <p className="text-xs font-bold uppercase text-zinc-500">
              Servicio
            </p>
            <p className="mt-1 font-semibold">{booking.service}</p>
          </div>

          <div className="border-b border-[#ead8df] p-4 md:border-b-0 md:border-r">
            <p className="text-xs font-bold uppercase text-zinc-500">
              {booking.priceLabel}
            </p>
            <p className="mt-1 text-2xl font-semibold">{booking.price}</p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-16 items-center justify-center bg-[#e7b7c8] px-4 py-4 text-center text-sm font-extrabold text-[#130f12] transition hover:bg-[#f4d2de]"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero