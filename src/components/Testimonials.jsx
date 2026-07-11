function Testimonials({ business }) {
  const section = business.sections.testimonials

  return (
    <section className="bg-white px-4 py-20 text-[#08111f] sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="mx-auto w-fit rounded-full bg-[#eefcff] px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#0c8b91]">
            {section.eyebrow}
          </p>
          <h2 className="mt-6 text-5xl font-black uppercase leading-[0.94] md:text-7xl">
            {section.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#08111f]/62">
            {section.description}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="relative overflow-hidden rounded-[2.5rem] bg-[#08111f] p-7 text-white shadow-2xl shadow-[#08111f]/18 sm:p-10">
            <span className="absolute right-8 top-4 text-9xl font-black text-white/5">
              "
            </span>
            <p className="text-3xl font-black leading-tight md:text-5xl">
              {business.testimonials[0].quote}
            </p>
            <div className="mt-10 flex items-end justify-between gap-6 border-t border-white/12 pt-6">
              <div>
                <p className="text-xl font-black uppercase">
                  {business.testimonials[0].name}
                </p>
                <p className="mt-1 text-sm text-white/55">
                  {business.testimonials[0].role}
                </p>
              </div>
              <p className="rounded-full bg-[var(--brand-accent)] px-4 py-2 text-sm font-black text-[#08111f]">
                {business.testimonials[0].rating}
              </p>
            </div>
          </article>

          <div className="grid gap-5">
            {business.testimonials.slice(1).map((item) => (
              <article
                key={item.name}
                className="rounded-[2rem] bg-[#f4fbff] p-6 shadow-xl shadow-[#08111f]/6 transition hover:-translate-y-2"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-4xl font-black text-[#0c8b91]">"</p>
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-black">
                    {item.rating}
                  </span>
                </div>
                <p className="mt-4 text-lg leading-8 text-[#08111f]/70">
                  {item.quote}
                </p>
                <div className="mt-6 border-t border-[#08111f]/10 pt-5">
                  <p className="font-black uppercase">{item.name}</p>
                  <p className="mt-1 text-sm text-[#08111f]/55">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
