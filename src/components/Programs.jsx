import { createWhatsAppUrl } from '../utils/whatsapp'
import SectionHeader from './SectionHeader'

function Programs({ business }) {
  const section = business.sections?.programs
  const featuredProgram = business.programs[0]

  return (
    <section
      id="programas"
      className="bg-[#050505] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          inverse
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="relative min-h-[560px] overflow-hidden border border-white/10 bg-white/[0.04]">
            <img
              src={featuredProgram.image}
              alt={featuredProgram.name}
              className="absolute inset-0 h-full w-full object-cover opacity-55 grayscale"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.12)_0%,#050505_100%)]" />

            <div className="relative flex h-full min-h-[560px] flex-col justify-end p-6 sm:p-8">
              <span className="mb-5 w-fit bg-[var(--brand-accent)] px-4 py-2 text-xs font-black uppercase text-[#050505]">
                Ruta destacada
              </span>
              <h3 className="max-w-lg text-5xl font-black uppercase leading-none">
                {featuredProgram.name}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
                {featuredProgram.description}
              </p>
            </div>
          </article>

          <div className="grid gap-4">
            {business.programs.map((program) => (
              <article
                key={program.name}
                className="group grid overflow-hidden border border-white/10 bg-white/[0.04] transition duration-300 hover:border-[var(--brand-accent)] hover:bg-[var(--brand-accent)] hover:text-[#050505] md:grid-cols-[180px_1fr]"
              >
                <div className="relative min-h-[190px] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="h-full w-full object-cover opacity-70 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
                  />
                  <span className="absolute left-4 top-4 bg-[#050505] px-3 py-2 text-xs font-black text-[var(--brand-accent)]">
                    {program.icon}
                  </span>
                </div>

                <div className="flex flex-col justify-between p-5">
                  <div>
                    <div className="mb-4 flex flex-wrap gap-2 text-[11px] font-black uppercase">
                      <span className="border border-white/15 px-3 py-1 text-white/55 group-hover:border-[#050505]/20 group-hover:text-[#050505]/65">
                        {program.schedule}
                      </span>
                      <span className="border border-white/15 px-3 py-1 text-white/55 group-hover:border-[#050505]/20 group-hover:text-[#050505]/65">
                        {program.intensity}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black uppercase leading-tight">
                      {program.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/62 group-hover:text-[#050505]/72">
                      {program.description}
                    </p>
                  </div>

                  <a
                    href={createWhatsAppUrl(
                      business.whatsapp,
                      program.whatsappMessage,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 w-fit border border-white/20 px-5 py-3 text-xs font-black uppercase text-white transition group-hover:border-[#050505] group-hover:bg-[#050505] group-hover:text-white"
                  >
                    Quiero esta ruta
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs
