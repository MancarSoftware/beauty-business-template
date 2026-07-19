import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'
import { getCategoryBySlug, getProductBySlug } from '../data/bakeryData'
import { createWhatsAppUrl } from '../utils/whatsapp'
import NotFoundPage from './NotFoundPage'

function FeatureIcon({ index }) {
  const paths = [
    'M16 28V5M16 11c-5 0-8 3-8 7 5 0 8-3 8-7ZM16 16c5 0 8 3 8 7-5 0-8-3-8-7Z',
    'M8 17c7-10 13-10 16 0M9 18c3 6 11 8 15 0M10 10c2-3 5-4 8-2M19 9c3-1 6 0 8 3',
    'M16 6v10l7 4M6 16a10 10 0 1 0 20 0 10 10 0 0 0-20 0Z',
    'M16 27s-9-5.6-9-13a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 7.4-9 13-9 13Z',
  ]

  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="mx-auto h-8 w-8 text-[var(--brand-caramel)]"
    >
      <path
        d={paths[index] ?? paths[0]}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="m6 12 4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  )
}

function ProductDetailPage({ business }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const category = product ? getCategoryBySlug(product.categorySlug) : null

  if (!product || !category) {
    return <NotFoundPage business={business} />
  }

  return (
    <ProductDetailContent
      key={product.slug}
      business={business}
      category={category}
      product={product}
    />
  )
}

function ProductDetailContent({ business, category, product }) {
  const gallery = product.gallery?.length ? product.gallery : [product.image]
  const [selectedImage, setSelectedImage] = useState(gallery[0])
  const [quantity, setQuantity] = useState(1)

  const relatedProducts = business.products
    .filter(
      (item) =>
        item.categorySlug === product.categorySlug && item.slug !== product.slug,
    )
    .slice(0, 5)

  const selectedIndex = Math.max(gallery.indexOf(selectedImage), 0)
  const whatsappMessage = `Hola Maison Miga, quiero ordenar ${quantity} ${product.portion.toLowerCase()} de ${product.name}.`

  const moveGallery = (direction) => {
    const nextIndex =
      (selectedIndex + direction + gallery.length) % gallery.length
    setSelectedImage(gallery[nextIndex])
  }

  return (
    <>
      <Seo business={business} product={product} />

      <section className="relative isolate overflow-hidden bg-[#fffaf3] px-4 pb-16 pt-[8.5rem] sm:px-8 lg:px-10 lg:pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_18%,rgba(201,134,58,0.14),transparent_27%),linear-gradient(180deg,#fffaf3,#f8f1e7)]" />

        <div className="mx-auto max-w-[90rem]">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              {
                label: category.breadcrumbLabel,
                href: `/especialidades/${category.slug}`,
              },
              { label: product.name },
            ]}
          />

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(24rem,0.88fr)] lg:items-start">
            <div>
              <div className="grid gap-4 md:grid-cols-[6.5rem_minmax(0,1fr)]">
                <div className="order-2 flex gap-3 overflow-x-auto pb-1 md:order-1 md:grid md:max-h-[32rem] md:overflow-y-auto md:overflow-x-hidden md:pr-1">
                  {gallery.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      aria-label={`Ver imagen ${index + 1} de ${product.name}`}
                      className={`h-24 w-24 shrink-0 overflow-hidden rounded-[0.85rem] bg-[#efe3d2] ring-2 transition md:h-[6.25rem] md:w-full ${
                        image === selectedImage
                          ? 'ring-[var(--brand-caramel)]'
                          : 'ring-transparent hover:ring-[var(--brand-border)]'
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="eager"
                      />
                    </button>
                  ))}
                </div>

                <div className="order-1 md:order-2">
                  <div className="relative overflow-hidden rounded-[1.2rem] bg-[#efe3d2] shadow-2xl shadow-[var(--brand-coffee)]/14 ring-1 ring-[var(--brand-border)]">
                    <img
                      src={selectedImage}
                      alt={`${product.name} de ${business.name}`}
                      className="aspect-[1.12] w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_56%,rgba(43,29,20,0.12))]" />

                    {gallery.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => moveGallery(-1)}
                          aria-label="Imagen anterior"
                          className="absolute bottom-5 left-5 grid h-11 w-11 place-items-center rounded-full bg-white text-xl font-black text-[var(--brand-dark)] shadow-lg shadow-[var(--brand-coffee)]/14 transition hover:-translate-y-0.5 hover:bg-[var(--brand-caramel)] hover:text-white"
                        >
                          {'<'}
                        </button>
                        <button
                          type="button"
                          onClick={() => moveGallery(1)}
                          aria-label="Imagen siguiente"
                          className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white text-xl font-black text-[var(--brand-dark)] shadow-lg shadow-[var(--brand-coffee)]/14 transition hover:-translate-y-0.5 hover:bg-[var(--brand-caramel)] hover:text-white"
                        >
                          {'>'}
                        </button>
                      </>
                    )}

                    <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">
                      {gallery.map((image, index) => (
                        <button
                          key={`dot-${image}-${index}`}
                          type="button"
                          onClick={() => setSelectedImage(image)}
                          aria-label={`Ir a imagen ${index + 1}`}
                          className={`h-2.5 rounded-full transition ${
                            image === selectedImage
                              ? 'w-7 bg-[var(--brand-caramel)]'
                              : 'w-2.5 bg-white/70 hover:bg-white'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-0 rounded-[1rem] bg-white/55 shadow-xl shadow-[var(--brand-coffee)]/7 ring-1 ring-[var(--brand-border)] backdrop-blur sm:grid-cols-4">
                {product.features.slice(0, 4).map((feature, index) => (
                  <div
                    key={feature}
                    className="border-b border-[var(--brand-border)] p-5 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  >
                    <FeatureIcon index={index} />
                    <p className="mt-2 text-sm font-black leading-5 text-[var(--brand-dark)]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:sticky lg:top-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
                {product.categoryLabel}
              </p>
              <h1 className="font-brand-serif mt-4 text-5xl leading-[0.95] tracking-[-0.055em] text-[var(--brand-dark)] sm:text-6xl">
                {product.name}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--brand-coffee)]/78">
                {product.shortDescription}
              </p>

              <div className="mt-7">
                <p className="font-brand-serif text-5xl leading-none tracking-[-0.05em] text-[var(--brand-dark)]">
                  {product.price}
                </p>
                <p className="mt-2 text-sm font-bold text-[var(--brand-caramel)]">
                  Precio por {product.portion.toLowerCase()}
                </p>
              </div>

              <div className="mt-7 rounded-[1rem] bg-white/70 p-5 shadow-lg shadow-[var(--brand-coffee)]/7 ring-1 ring-[var(--brand-border)] backdrop-blur">
                <div className="flex items-start gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-50 text-sm font-black text-emerald-700 ring-1 ring-emerald-200">
                    {product.available ? <CheckIcon /> : '--'}
                  </span>
                  <div>
                    <p className="font-black text-emerald-800">
                      {product.available ? 'Disponible' : 'Consultar disponibilidad'}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--brand-coffee)]/70">
                      {product.available
                        ? 'Producto fresco preparado segun disponibilidad del dia.'
                        : 'Escribenos para confirmar el proximo lote disponible.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <p className="text-sm font-black text-[var(--brand-dark)]">
                  Cantidad
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  <div className="flex h-14 w-52 items-center justify-between rounded-[0.7rem] bg-white px-3 shadow-lg shadow-[var(--brand-coffee)]/7 ring-1 ring-[var(--brand-border)]">
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                      className="grid h-10 w-10 place-items-center rounded-full text-xl font-black text-[var(--brand-coffee)] transition hover:bg-[#f8f1e7]"
                    >
                      -
                    </button>
                    <span className="text-base font-black">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => current + 1)}
                      className="grid h-10 w-10 place-items-center rounded-full text-xl font-black text-[var(--brand-caramel)] transition hover:bg-[#f8f1e7]"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm font-bold text-[var(--brand-coffee)]/80">
                    {product.portion}
                  </span>
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                <a
                  href={createWhatsAppUrl(business.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center justify-center rounded-full bg-[var(--brand-caramel)] px-8 text-sm font-black uppercase text-white shadow-2xl shadow-[var(--brand-coffee)]/16 transition hover:-translate-y-1 hover:bg-[var(--brand-dark)]"
                >
                  Pedir por WhatsApp
                </a>
                <button
                  type="button"
                  className="flex min-h-14 items-center justify-center rounded-full border border-[var(--brand-caramel)] bg-white/60 px-8 text-sm font-black uppercase text-[var(--brand-caramel)] shadow-sm transition hover:-translate-y-1 hover:bg-white"
                >
                  Agregar a favoritos
                </button>
              </div>

              <p className="mt-5 text-xs font-bold leading-6 text-[var(--brand-coffee)]/62">
                Tus datos estan protegidos. La confirmacion del pedido se realiza directamente por WhatsApp.
              </p>
            </aside>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-[1rem] bg-white/55 shadow-xl shadow-[var(--brand-coffee)]/7 ring-1 ring-[var(--brand-border)] backdrop-blur lg:grid-cols-3">
            <article className="border-b border-[var(--brand-border)] p-7 lg:border-b-0 lg:border-r">
              <h2 className="font-brand-serif text-2xl tracking-[-0.03em] text-[var(--brand-dark)]">
                Descripcion
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--brand-coffee)]/78">
                {product.description}
              </p>
            </article>
            <article className="border-b border-[var(--brand-border)] p-7 lg:border-b-0 lg:border-r">
              <h2 className="font-brand-serif text-2xl tracking-[-0.03em] text-[var(--brand-dark)]">
                Ingredientes
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--brand-coffee)]/78">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <p className="mt-5 rounded-[0.8rem] bg-[#f8f1e7] p-4 text-xs font-bold leading-6 text-[var(--brand-coffee)]/70">
                Sin conservantes ni mejorantes artificiales.
              </p>
            </article>
            <article className="p-7">
              <h2 className="font-brand-serif text-2xl tracking-[-0.03em] text-[var(--brand-dark)]">
                Alergenos
              </h2>
              <p className="mt-4 text-sm font-bold leading-7 text-[var(--brand-coffee)]/78">
                {product.allergens.length
                  ? `Contiene: ${product.allergens.join(', ')}.`
                  : 'No contiene alergenos principales declarados.'}
              </p>
              <p className="mt-5 text-sm leading-7 text-[var(--brand-coffee)]/70">
                Puede contener trazas de sesamo, nueces o lacteos segun el area de produccion.
              </p>
            </article>
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
            <Link
              to={`/especialidades/${category.slug}`}
              className="hidden text-sm font-black text-[var(--brand-caramel)] transition hover:text-[var(--brand-dark)] sm:inline-flex"
            >
              Ver todos {'>'}
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
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
