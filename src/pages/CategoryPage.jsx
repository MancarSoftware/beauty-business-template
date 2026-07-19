import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryCTA from '../components/CategoryCTA'
import CategoryFilters from '../components/CategoryFilters'
import CategoryHero from '../components/CategoryHero'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'
import { getCategoryBySlug, getProductsByCategory } from '../data/bakeryData'
import NotFoundPage from './NotFoundPage'

function CategoryPage({ business }) {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)
  const [activeFilter, setActiveFilter] = useState('Todos')

  const products = useMemo(() => {
    if (!category) return []

    const categoryProducts = getProductsByCategory(category.slug)

    if (activeFilter === 'Todos') return categoryProducts

    return categoryProducts.filter((product) =>
      product.tags.some(
        (tag) => tag.toLowerCase() === activeFilter.toLowerCase(),
      ),
    )
  }, [activeFilter, category])

  if (!category) {
    return <NotFoundPage business={business} />
  }

  return (
    <>
      <Seo
        business={business}
        page={{
          title: category.title,
          description: category.subtitle,
          image: category.heroImage,
        }}
      />
      <CategoryHero business={business} category={category} />

      <section className="bg-[#fffaf3] px-4 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[90rem]">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
                Seleccion de vitrina
              </p>
              <h2 className="font-brand-serif mt-3 text-4xl leading-none tracking-[-0.05em] text-[var(--brand-dark)] sm:text-5xl">
                Elige tu favorito
              </h2>
            </div>
            <CategoryFilters
              filters={category.filters}
              activeFilter={activeFilter}
              onChange={setActiveFilter}
            />
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

      {category.services?.length && (
        <section className="bg-[#f8f1e7] px-4 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[90rem] gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
                Servicio completo
              </p>
              <h2 className="font-brand-serif mt-3 text-4xl leading-none tracking-[-0.05em] sm:text-5xl">
                Eventos pensados para verse y saber increibles.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service) => (
                <div
                  key={service}
                  className="rounded-[1rem] bg-white p-5 text-sm font-black text-[var(--brand-dark)] shadow-lg shadow-[var(--brand-coffee)]/7 ring-1 ring-[var(--brand-border)]"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CategoryCTA
        business={business}
        cta={category.cta}
        image={category.heroImage}
      />
    </>
  )
}

export default CategoryPage
