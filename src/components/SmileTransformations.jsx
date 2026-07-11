function SmileTransformations({ business }) {
  const section = business.sections.transformations

  return (
    <section className="bg-white px-4 py-20 text-[#08111f] sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="w-fit rounded-full bg-[#eefcff] px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#0c8b91]">
              {section.eyebrow}
            </p>
            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.94] md:text-7xl">
              {section.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#08111f]/62">
            {section.description}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {business.transformations.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2.5rem] bg-[#f4fbff] p-5 shadow-xl shadow-[#08111f]/7 transition hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#08111f]/14"
            >
              <div className="relative h-72 overflow-hidden rounded-[2rem] bg-[#08111f]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_28%,rgba(255,207,90,0.32),transparent_32%),radial-gradient(circle_at_76%_70%,rgba(53,224,210,0.36),transparent_36%)]" />
                <div className="absolute inset-y-0 left-0 w-[48%] bg-white/12 backdrop-blur-sm transition duration-500 group-hover:w-[24%]" />
                <div className="absolute inset-y-0 right-0 w-[52%] bg-white/5 transition duration-500 group-hover:w-[76%]" />
                <div className="absolute left-[48%] top-0 h-full w-1 bg-white shadow-2xl transition duration-500 group-hover:left-[24%]" />

                <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black uppercase text-[#08111f]">
                  Antes
                </div>
                <div className="absolute right-5 top-5 rounded-full bg-[var(--brand-accent)] px-4 py-2 text-xs font-black uppercase text-[#08111f]">
                  Despues
                </div>

                <div className="absolute inset-x-6 bottom-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/12 p-4 text-white backdrop-blur">
                    <p className="text-xs font-black uppercase text-white/45">
                      Antes
                    </p>
                    <p className="mt-2 text-lg font-black">{item.before}</p>
                  </div>
                  <div className="rounded-2xl bg-[var(--brand-accent)] p-4 text-[#08111f]">
                    <p className="text-xs font-black uppercase text-[#08111f]/45">
                      Despues
                    </p>
                    <p className="mt-2 text-lg font-black">{item.after}</p>
                  </div>
                </div>
              </div>

              <div className="p-2 pt-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-black uppercase text-[#0c8b91]">
                    Caso 0{index + 1}
                  </p>
                  <p className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase">
                    {item.time}
                  </p>
                </div>
                <h3 className="mt-5 text-3xl font-black uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#08111f]/62">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SmileTransformations
