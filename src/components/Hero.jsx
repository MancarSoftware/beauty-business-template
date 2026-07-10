import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#17342f] text-white">
      <img
        src={business.hero.image}
        alt={`Experiencia de bienestar en ${business.name}`}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,52,47,0.92)_0%,rgba(23,52,47,0.64)_42%,rgba(23,52,47,0.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(23,52,47,0)_0%,#fbf3ec_100%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-24 pt-40 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 w-fit rounded-full border border-white/20 bg-white/12 px-5 py-2 text-xs font-semibold uppercase text-[#f1c8b9] backdrop-blur">
            {business.hero.eyebrow}
          </p>

          <p className="mb-4 font-display text-4xl italic text-[#f1c8b9]">
            {business.hero.since}
          </p>

          <h1 className="font-display text-6xl leading-[0.92] md:text-8xl lg:text-9xl">
            {business.hero.title}
            <span className="block italic text-[#f1c8b9]">
              {business.hero.accentTitle}
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
            {business.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full bg-[#f1c8b9] px-8 py-4 text-sm font-black uppercase text-[#17342f] shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:bg-white"
            >
              {business.hero.cta}
            </a>

            <a
              href={business.hero.secondaryHref}
              className="inline-flex justify-center rounded-full border border-white/24 bg-white/10 px-8 py-4 text-sm font-black uppercase text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#17342f]"
            >
              {business.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="mt-14 grid max-w-5xl gap-3 md:grid-cols-3">
          {business.hero.highlights.map((item) => (
            <article
              key={item.label}
              className="rounded-[2rem] border border-white/16 bg-white/12 p-5 backdrop-blur-xl"
            >
              <p className="font-display text-4xl italic text-[#f1c8b9]">{item.value}</p>
              <p className="mt-2 text-xs font-black uppercase text-white/58">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="relative bg-[#fbf3ec] px-4 pb-12 text-[#17342f] sm:px-6 lg:px-8">
        <div className="mx-auto -mt-12 grid max-w-7xl gap-3 rounded-[2.5rem] bg-white p-3 shadow-2xl shadow-[#17342f]/12 md:grid-cols-4">
          {business.stats.map((stat) => (
            <article key={stat.label} className="rounded-[2rem] bg-[#fbf3ec] p-5">
              <p className="font-display text-4xl italic">{stat.value}</p>
              <p className="mt-2 text-xs font-black uppercase text-[#17342f]/50">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
