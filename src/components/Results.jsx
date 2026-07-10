function Results({ business }) {
  return (
    <section className="bg-[#050505] px-4 pb-16 text-white sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl border border-white/10 bg-white/[0.04]">
        <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
          <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-8">
            <p className="text-xs font-black uppercase text-[var(--brand-accent)]">
              Pulso del gimnasio
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-5xl">
              Aqui se entrena con datos, energia y constancia.
            </h2>
          </div>

          <div className="grid md:grid-cols-3">
            {business.results.map((result) => (
              <article
                key={result.label}
                className="border-b border-white/10 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-8"
              >
                <p className="text-xs font-black uppercase text-white/45">
                  {result.label}
                </p>
                <p className="mt-5 text-5xl font-black text-[var(--brand-accent)]">
                  {result.value}
                </p>
                <p className="mt-4 text-sm leading-6 text-white/62">
                  {result.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 p-4 sm:p-6 lg:p-8">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase text-[var(--brand-punch)]">
                Clases de hoy
              </p>
              <h3 className="mt-2 text-2xl font-black uppercase">
                Reserva tu cupo por WhatsApp
              </h3>
            </div>
            <p className="text-sm text-white/50">
              Cupos limitados para mantener tecnica y control.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-4">
            {business.classSchedule.map((item) => (
              <article
                key={`${item.time}-${item.className}`}
                className="group border border-white/10 bg-[#050505] p-4 transition hover:border-[var(--brand-accent)] hover:bg-white hover:text-[#050505]"
              >
                <p className="text-3xl font-black text-[var(--brand-accent)]">
                  {item.time}
                </p>
                <h4 className="mt-3 text-base font-black uppercase">
                  {item.className}
                </h4>
                <p className="mt-2 text-xs font-bold uppercase text-white/50 group-hover:text-[#050505]/60">
                  Coach {item.coach} - {item.level}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results
