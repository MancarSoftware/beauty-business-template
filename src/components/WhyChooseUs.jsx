function WhyChooseUs({ business }) {
  return (
    <section id="beneficios" className="bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="mb-3 text-sm font-semibold uppercase text-amber-200">
            Método BarberPro
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            Te atendemos a tiempo, con diagnóstico y acabado final
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Antes de empezar revisamos tu tipo de cabello, la forma del rostro
            y el estilo que quieres mantener. Así cada corte sale limpio,
            cómodo y fácil de peinar.
          </p>
          <div className="mt-8 rounded-lg border border-amber-300/20 bg-amber-300/10 p-5">
            <p className="text-sm font-semibold text-amber-100">
              Así trabajamos tu cita
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Confirmamos tu reserva por WhatsApp, preparamos la estación y
              cerramos cada servicio con producto y recomendación de
              mantenimiento.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {business.benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-lg border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/8"
            >
              <span className="mb-7 flex h-11 w-11 items-center justify-center rounded-md bg-amber-300 text-sm font-bold text-zinc-950">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
