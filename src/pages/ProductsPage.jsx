import { useMemo, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import CategoryFilters from '../components/CategoryFilters'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'

const sortOptions = {
  popular: 'Mas vendidos',
  low: 'Menor precio',
  high: 'Mayor precio',
}

function getNumericPrice(price) {
  return Number(String(price).replace(/[^0-9.]/g, '')) || 0
}

function ProductsPage({ business }) {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('popular')

  const filters = [
    'Todos',
    ...new Set(business.products.map((product) => product.categoryLabel)),
  ]

  const products = useMemo(() => {
    const query = search.trim().toLowerCase()

    return [...business.products]
      .filter((product) => {
        const matchesFilter =
          activeFilter === 'Todos' || product.categoryLabel === activeFilter
        const matchesSearch =
          !query ||
          [product.name, product.shortDescription, product.categoryLabel]
            .join(' ')
            .toLowerCase()
            .includes(query)

        return matchesFilter && matchesSearch
      })
      .sort((first, second) => {
        if (sort === 'low') return getNumericPrice(first.price) - getNumericPrice(second.price)
        if (sort === 'high') return getNumericPrice(second.price) - getNumericPrice(first.price)
        return Number(second.featured) - Number(first.featured)
      })
  }, [activeFilter, business.products, search, sort])

  return (
    <>
      <Seo
        business={business}
        page={{
          title: 'Todos los productos',
          description:
            'Catalogo completo de panes, tortas, postres, desayunos, galletas y catering de Maison Miga.',
          image: business.hero.image,
        }}
      />

      <section className="bg-[#fffaf3] px-4 pb-12 pt-[8.5rem] sm:px-8 lg:px-10 lg:pt-32">
        <div className="mx-auto max-w-[90rem]">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Productos' }]} />
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
                Desde nuestros hornos
              </p>
              <h1 className="font-brand-serif mt-4 text-5xl leading-[0.98] tracking-[-0.055em] text-[var(--brand-dark)] sm:text-6xl xl:text-[5rem]">
                Todos los productos
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--brand-coffee)]/76">
                Explora panes artesanales, tortas, postres por porcion, desayunos y opciones para compartir o regalar.
              </p>
            </div>

            <div className="min-w-0 rounded-[1rem] bg-white p-4 shadow-xl shadow-[var(--brand-coffee)]/7 ring-1 ring-[var(--brand-border)]">
              <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Buscar producto..."
                  className="min-h-12 rounded-full bg-[#f8f1e7] px-5 text-sm font-bold text-[var(--brand-dark)] outline-none ring-1 ring-transparent transition placeholder:text-[var(--brand-coffee)]/45 focus:ring-[var(--brand-caramel)]"
                />
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="min-h-12 rounded-full bg-[#f8f1e7] px-5 text-sm font-black text-[var(--brand-dark)] outline-none ring-1 ring-transparent transition focus:ring-[var(--brand-caramel)]"
                >
                  {Object.entries(sortOptions).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <CategoryFilters
                  filters={filters}
                  activeFilter={activeFilter}
                  onChange={setActiveFilter}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                business={business}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsPage
