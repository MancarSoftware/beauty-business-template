import { createWhatsAppUrl } from '../utils/whatsapp'

function BookingFlow({ business }) {
  const section = business.sections.process
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="reserva"
      className="bg-[#f6e8df] px-4 py-20 text-[#17342f] sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[4rem] bg-[#17342f] p-5 text-white shadow-2xl shadow-[#17342f]/16 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="w-fit rounded-full bg-white/10 px-5 py-2 text-xs font-black uppercase text-[var(--brand-accent)]">
                {section.eyebrow}
              </p>
              <h2 className="mt-5 max-w-xl font-display text-5xl leading-[1.02] md:text-7xl">
                {section.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
                {section.description}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black uppercase text-[#17342f] transition hover:bg-[var(--brand-accent)] hover:text-white"
              >
                Hablar con concierge
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {business.process.map((step, index) => (
                <article
                  key={step.title}
                  className="group rounded-[2.5rem] bg-white/8 p-5 backdrop-blur transition hover:bg-white hover:text-[#17342f]"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--brand-accent)] text-xl font-black text-white">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 font-display text-2xl leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/64 group-hover:text-[#17342f]/70">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingFlow
