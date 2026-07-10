import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function BookingFlow({ business }) {
  const section = business.sections.process
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="reserva"
      className="bg-[#09231f] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
              inverse
              align="left"
            />

            <div className="border border-white/12 bg-white/[0.05] p-5">
              <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
                Recomendacion Serena
              </p>
              <p className="mt-3 text-2xl font-black uppercase">
                Reserva con 24 horas de anticipacion para asegurar cabina y terapeuta.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {business.process.map((step, index) => (
              <article
                key={step.title}
                className="group grid gap-5 border border-white/12 bg-white/[0.04] p-6 transition duration-300 hover:border-[var(--brand-accent)] hover:bg-[var(--brand-accent)] hover:text-[#09231f] sm:grid-cols-[84px_1fr]"
              >
                <span className="grid h-16 w-16 place-items-center bg-white text-xl font-black text-[#09231f] group-hover:bg-[#09231f] group-hover:text-white">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-black uppercase leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/64 group-hover:text-[#09231f]/72">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center bg-white px-7 py-5 text-sm font-black uppercase text-[#09231f] transition hover:bg-[var(--brand-accent)] hover:text-white"
            >
              Reservar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingFlow
