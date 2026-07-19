import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'
import { getCategoryBySlug, getProductBySlug } from '../data/bakeryData'
import { createWhatsAppUrl } from '../utils/whatsapp'
import NotFoundPage from './NotFoundPage'

function ProductDetailPage({ business }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [quantity, setQuantity] = useState(1)

  const category = product ? getCategoryBySlug(product.categorySlug) : null
  const relatedProducts = useMemo(() => {
    if (!product) return []

    return business.products
      .filter(
        (item) =>
          item.categorySlug === product.categorySlug && item.slug !== product.slug,
      )
      .slice(0, 4)
  }, [business.products, product])

  if (!product || !category) {
    return <NotFoundPage business={business} />
  }

  const whatsappMessage = `${product.whatsappMessage} Cantidad: ${quantity}.`

  return (
    <>
      <Seo business={business} product={product} />

      <section className="bg-[#fffaf3] px-4 pb-14 pt-[8.5rem] sm:px-8 lg:px-10 lg:pt-32">
        <div className="mx-auto max-w-[90rem]">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: category.breadcrumbLabel, href: `/especialidades/${category.slug}` },
              { label: product.name },
            ]}
          />

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[1.2rem] bg-[#efe3d2] shadow-2xl shadow-[var(--brand-coffee)]/12 ring-1 ring-[var(--brand-border)]">
                <img
                  src={product.image}
                  alt={`${product.name} de ${business.name}`}
                  className="aspect-[1.18] w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[product.image, category.heroImage, business.hero.image].map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="overflow-hidden rounded-[0.75rem] bg-[#efe3d2] ring-1 ring-[var(--brand-border)]"
                  >
                    <img
                      src={image}
                      alt=""
                      className="aspect-[1.45] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
                {product.categoryLabel}
              </p>
              <h1 className="font-brand-serif mt-4 text-5xl leading-[0.95] tracking-[-0.055em] text-[var(--brand-dark)] sm:text-6xl">
                {product.name}
              </h1>
              <p className="mt-4 text-3xl font-black text-[var(--brand-caramel)]">
                {product.price}
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--brand-coffee)]/78">
                {product.description}
              </p>

              <div className="mt-7 grid gap-3 rounded-[1rem] bg-white p-5 shadow-xl shadow-[var(--brand-coffee)]/7 ring-1 ring-[var(--brand-border)]">
                <div className="flex items-center justify-between gap-4 border-b border-[var(--brand-border)] pb-4">
                  <span className="text-sm font-black text-[var(--brand-dark)]">
                    Porcion
                  </span>
                  <span className="text-sm font-bold text-[var(--brand-coffee)]/70">
                    {product.portion}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-[var(--brand-border)] pb-4">
                  <span className="text-sm font-black text-[var(--brand-dark)]">
                    Alergenos
                  </span>
                  <span className="text-sm font-bold text-[var(--brand-coffee)]/70">
                    {product.allergens.join(', ')}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f5ecdf] px-3 py-1 text-xs font-black text-[var(--brand-coffee)]/72"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <div className="flex h-14 w-full items-center justify-between rounded-full bg-white px-3 shadow-lg shadow-[var(--brand-coffee)]/7 ring-1 ring-[var(--brand-border)] sm:w-40">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="grid h-10 w-10 place-items-center rounded-full bg-[#f8f1e7] text-lg font-black text-[var(--brand-dark)]"
                  >
                    -
                  </button>
                  <span className="text-sm font-black">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="grid h-10 w-10 place-items-center rounded-full bg-[var(--brand-caramel)] text-lg font-black text-white"
                  >
                    +
                  </button>
                </div>
                <a
                  href={createWhatsAppUrl(business.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 flex-1 items-center justify-center rounded-full bg-[var(--brand-caramel)] px-8 text-sm font-black uppercase text-white shadow-2xl shadow-[var(--brand-coffee)]/16 transition hover:-translate-y-1 hover:bg-[var(--brand-dark)]"
                >
                  Pedir por WhatsApp
                </a>
              </div>
              <Link
                to={`/especialidades/${category.slug}`}
                className="mt-4 inline-flex text-sm font-black text-[var(--brand-caramel)] transition hover:text-[var(--brand-dark)]"
              >
                Volver a {category.breadcrumbLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f1e7] px-4 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[90rem]">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
                Tambien te puede gustar
              </p>
              <h2 className="font-brand-serif mt-3 text-4xl leading-none tracking-[-0.05em]">
                Mas de esta vitrina
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.slug} business={business} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetailPage
