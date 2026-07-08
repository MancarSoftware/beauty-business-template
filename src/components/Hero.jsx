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
  }
  const positioning = business.positioning ?? business.description

  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-zinc-950"
    >
      {business.hero.image ? (
        <img
          src={business.hero.image}
          alt={`Interior de ${business.name}`}
          className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
        />
      ) : (
        <div className="absolute inset-0 bg-zinc-950" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/88 to-zinc-950/22" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_26%,rgba(214,168,90,0.2),transparent_26%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-transparent" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-end gap-8 px-4 pb-10 pt-28 sm:px-6 md:pb-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8 xl:grid-cols-[minmax(0,1fr)_390px]">
        <div className="max-w-3xl pb-2 lg:pb-12">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-md border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-sm font-semibold text-amber-100">
              {business.hero.eyebrow}
            </p>
            <p className="inline-flex rounded-md border border-white/12 bg-white/8 px-3 py-2 text-sm font-medium text-zinc-200">
              {positioning}
            </p>
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] text-white md:text-5xl lg:text-6xl xl:text-7xl">
            {business.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
            {business.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-amber-300 px-6 py-4 text-center text-sm font-bold text-zinc-950 shadow-xl shadow-amber-950/30 transition hover:-translate-y-0.5 hover:bg-amber-200"
            >
              {business.hero.cta}
            </a>
            <a
              href="#servicios"
              className="rounded-md border border-white/18 bg-white/8 px-6 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/14"
            >
              {business.hero.secondaryCta}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {business.hero.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-md border border-white/12 bg-zinc-950/55 px-3 py-2 text-sm text-zinc-200 shadow-lg shadow-black/20 backdrop-blur"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-zinc-950/58 backdrop-blur">
            {business.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-white/10 p-4 last:border-r-0"
              >
                <strong className="block text-xl font-semibold text-amber-200 sm:text-2xl">
                  {stat.value}
                </strong>
                <span className="mt-1 block text-xs leading-5 text-zinc-300 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <aside className="mb-4 rounded-xl border border-white/12 bg-zinc-950/72 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl lg:mb-12">
          <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-4">
            <p className="text-xs font-semibold uppercase text-amber-100">
              {booking.label}
            </p>
            <p className="mt-2 text-xl font-semibold leading-tight text-white">
              {booking.value}
            </p>
          </div>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg border border-white/10 bg-white/6 p-4">
              <p className="text-xs font-semibold uppercase text-zinc-400">
                Servicio sugerido
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                {booking.service}
              </p>
              <p className="mt-1 text-sm leading-6 text-zinc-300">
                {booking.duration}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/10 bg-white/6 p-4">
                <p className="text-xs text-zinc-400">Precio ref.</p>
                <p className="mt-1 text-2xl font-semibold text-white">$12</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/6 p-4">
                <p className="text-xs text-zinc-400">Horario</p>
                <p className="mt-1 text-sm font-semibold leading-5 text-white">
                  {business.schedule}
                </p>
              </div>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block rounded-md bg-amber-300 px-5 py-4 text-center text-sm font-bold text-zinc-950 shadow-lg shadow-amber-950/30 transition hover:bg-amber-200"
          >
            Consultar por WhatsApp
          </a>
        </aside>
      </div>
    </section>
  )
}

export default Hero
