import { createWhatsAppUrl } from '../utils/whatsapp'

function Hero({ business }) {
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#fff8f1] px-4 pt-36 text-[#09231f] sm:px-6 lg:px-8 lg:pt-44"
    >
      <div className="mx-auto grid min-h-[820px] max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="pb-8">
          <p className="mb-5 w-fit rounded-full bg-[#f2e4d8] px-5 py-2 text-xs font-black uppercase text-[var(--brand-accent-dark)]">
            {business.hero.eyebrow}
          </p>

          <p className="mb-4 font-display text-4xl italic text-[var(--brand-accent-dark)]">
            {business.hero.since}
          </p>

          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] md:text-7xl lg:text-8xl">
            {business.hero.title}
            <span className="block font-display italic normal-case text-[var(--brand-accent-dark)]">
              {business.hero.accentTitle}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#09231f]/68 md:text-xl">
            {business.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full bg-[#09231f] px-8 py-4 text-sm font-black uppercase text-white shadow-xl shadow-[#09231f]/15 transition hover:-translate-y-1 hover:bg-[var(--brand-accent)]"
            >
              {business.hero.cta}
            </a>

            <a
              href={business.hero.secondaryHref}
              className="inline-flex justify-center rounded-full bg-white px-8 py-4 text-sm font-black uppercase text-[#09231f] shadow-lg shadow-[#09231f]/10 transition hover:-translate-y-1 hover:bg-[#f2e4d8]"
            >
              {business.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative pb-20">
          <div className="absolute left-2 top-8 z-10 hidden rounded-full bg-[var(--brand-accent)] px-5 py-14 text-center text-xs font-black uppercase text-white [writing-mode:vertical-rl] lg:block">
            Agenda privada
          </div>

          <div className="relative ml-auto max-w-[720px]">
            <div className="overflow-hidden rounded-[4rem] rounded-tl-[12rem] bg-white p-3 shadow-2xl shadow-[#09231f]/14">
              <img
                src={business.hero.image}
                alt={`Experiencia de bienestar en ${business.name}`}
                className="h-[560px] w-full rounded-[3.25rem] rounded-tl-[10rem] object-cover md:h-[670px]"
              />
            </div>

            <aside className="absolute -left-2 bottom-4 grid max-w-[260px] gap-3 rounded-[2rem] bg-white/92 p-4 shadow-2xl shadow-[#09231f]/16 backdrop-blur md:-left-12">
              <p className="text-xs font-black uppercase text-[var(--brand-accent-dark)]">
                Protocolo Serena
              </p>
              {business.hero.highlights.map((item) => (
                <div key={item.label} className="rounded-2xl bg-[#fff3eb] p-4">
                  <p className="text-3xl font-black">{item.value}</p>
                  <p className="mt-1 text-xs font-black uppercase text-[#09231f]/52">
                    {item.label}
                  </p>
                </div>
              ))}
            </aside>

            <div className="absolute -bottom-14 right-0 max-w-md rounded-[2rem] bg-[#09231f] p-5 text-white shadow-2xl shadow-[#09231f]/25">
              <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
                Disponibilidad asistida
              </p>
              <p className="mt-2 text-2xl font-black uppercase leading-tight">
                Consulta cabina y terapeuta por WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-xs font-black uppercase text-[#09231f] transition hover:bg-[var(--brand-accent)] hover:text-white"
              >
                Ver cupos
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-6 pb-10 lg:mt-0">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-4">
          {business.stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[2rem] bg-white p-5 shadow-lg shadow-[#09231f]/8"
            >
              <p className="text-4xl font-black">{stat.value}</p>
              <p className="mt-2 text-xs font-black uppercase text-[#09231f]/50">
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
