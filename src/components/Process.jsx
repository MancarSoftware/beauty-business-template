import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Process({ business }) {
  const section = business.sections?.process
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  return (
    <section
      id="proceso"
      className="bg-[#f4f1e8] px-4 py-16 text-[#050505] sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
              align="left"
            />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex bg-[#050505] px-7 py-4 text-sm font-black uppercase !text-white transition hover:-translate-y-1 hover:bg-[var(--brand-punch)]"
            >
              Agendar evaluacion
            </a>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-[#050505]/15 md:block" />

            <div className="space-y-5">
              {business.process.map((step, index) => (
                <article
                  key={step.title}
                  className="group relative grid gap-5 border border-[#050505]/12 bg-white p-6 transition duration-300 hover:-translate-x-1 hover:border-[#050505] hover:shadow-[10px_10px_0_#050505] md:grid-cols-[80px_1fr]"
                >
                  <div className="relative z-10 grid h-16 w-16 place-items-center bg-[#050505] text-xl font-black text-[var(--brand-accent)] transition group-hover:bg-[var(--brand-accent)] group-hover:text-[#050505]">
                    0{index + 1}
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-black uppercase text-[var(--brand-punch)]">
                      Semana de inicio
                    </p>
                    <h3 className="text-2xl font-black uppercase leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
