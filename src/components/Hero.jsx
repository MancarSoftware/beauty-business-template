import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-zinc-950"
    >
      {business.hero.image ? (
        <img
          src={business.hero.image}
          alt={`Interior de ${business.name}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-zinc-950" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/82 to-zinc-950/28" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-md border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-sm font-semibold text-amber-100">
            {business.hero.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
            {business.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-200 md:text-xl">
            {business.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-amber-300 px-6 py-4 text-center text-sm font-bold text-zinc-950 transition hover:bg-amber-200"
            >
              {business.hero.cta}
            </a>
            <a
              href="#servicios"
              className="rounded-md border border-white/20 bg-white/8 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/14"
            >
              {business.hero.secondaryCta}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {business.hero.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-md border border-white/12 bg-zinc-950/55 px-3 py-2 text-sm text-zinc-200 backdrop-blur"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {business.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/10 bg-zinc-950/60 p-4 backdrop-blur"
              >
                <strong className="block text-2xl font-semibold text-amber-200">
                  {stat.value}
                </strong>
                <span className="mt-1 block text-sm leading-5 text-zinc-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
