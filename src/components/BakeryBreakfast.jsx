import { createWhatsAppUrl } from '../utils/whatsapp'

function BakeryBreakfast({ business }) {
  const section = business.sections.breakfast

  return (
    <section
      id="desayunos"
      className="overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] bg-[var(--brand-dark)] p-5 text-white shadow-2xl shadow-[var(--brand-coffee)]/18 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src={business.breakfast.image}
            alt="Desayuno con cafe y pan fresco"
            className="h-[420px] w-full object-cover lg:h-full"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/75 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
            {business.breakfast.combos.map((combo) => (
              <article
                key={combo.name}
                className="rounded-[1.25rem] bg-white/90 p-4 text-[var(--brand-dark)] backdrop-blur"
              >
                <p className="text-xs font-black uppercase text-[var(--brand-caramel)]">
                  {combo.price}
                </p>
                <h3 className="mt-1 font-black">{combo.name}</h3>
                <p className="mt-1 text-xs font-semibold text-[var(--brand-coffee)]/65">
                  {combo.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center p-2 lg:p-8">
          <p className="w-fit rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
            {section.eyebrow}
          </p>
          <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
            {section.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-white/70">
            {section.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {business.breakfast.items.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-black uppercase text-white/82"
              >
                {item}
              </div>
            ))}
          </div>

          <a
            href={createWhatsAppUrl(
              business.whatsapp,
              business.breakfast.whatsappMessage,
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-9 w-full rounded-full bg-[var(--brand-caramel)] px-8 py-4 text-center text-sm font-black uppercase text-[var(--brand-dark)] transition hover:bg-white sm:w-fit"
          >
            {business.breakfast.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

export default BakeryBreakfast
