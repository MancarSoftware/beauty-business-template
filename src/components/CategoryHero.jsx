import Breadcrumbs from './Breadcrumbs'

function CategoryHero({ business, category }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#fff7ec] px-4 pb-10 pt-[8.5rem] sm:px-8 lg:px-10 lg:pb-14 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_18%,rgba(201,134,58,0.14),transparent_30%),linear-gradient(180deg,#fffaf3,#f8f1e7)]" />

      <div className="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="motion-rise">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Especialidades', href: '/especialidades/panaderia-artesanal' },
              { label: category.breadcrumbLabel ?? category.title },
            ]}
          />
          <p className="mt-8 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
            {category.eyebrow}
          </p>
          <h1 className="font-brand-serif mt-4 text-5xl leading-[0.98] tracking-[-0.055em] text-[var(--brand-dark)] sm:text-6xl xl:text-[5.2rem]">
            {category.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--brand-coffee)]/78 sm:text-lg">
            {category.subtitle}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-2xl">
            {category.features.map((feature) => (
              <div
                key={feature}
                className="rounded-[1rem] bg-white/80 p-4 text-center text-xs font-black leading-5 text-[var(--brand-dark)] shadow-lg shadow-[var(--brand-coffee)]/8 ring-1 ring-[var(--brand-border)] backdrop-blur"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[21rem] overflow-hidden rounded-[1.4rem] shadow-2xl shadow-[var(--brand-coffee)]/18 ring-1 ring-[var(--brand-border)] sm:min-h-[30rem] lg:min-h-[33rem]">
          <img
            src={category.heroImage}
            alt={`${category.title} de ${business.name}`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,250,243,0.35),rgba(255,250,243,0.05)),linear-gradient(0deg,rgba(43,29,20,0.32),transparent_52%)]" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3 rounded-[1rem] bg-white/86 p-4 backdrop-blur-xl">
            <p className="max-w-md text-sm font-bold leading-6 text-[var(--brand-coffee)]/78">
              {category.description}
            </p>
            <span className="rounded-full bg-[var(--brand-caramel)] px-5 py-3 text-xs font-black uppercase text-white">
              Maison Miga
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryHero
