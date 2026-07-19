import { Link } from 'react-router-dom'

function ProductCard({ business, product }) {
  return (
    <article className="group flex min-h-[24rem] flex-col overflow-hidden rounded-[0.85rem] bg-[#fffdf8] shadow-lg shadow-[var(--brand-coffee)]/7 ring-1 ring-[var(--brand-border)] transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--brand-coffee)]/14">
      <Link to={`/producto/${product.slug}`} className="relative h-52 overflow-hidden bg-[#efe3d2]">
        <img
          src={product.image}
          alt={`${product.name} de ${business.name}`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1.5 text-[0.65rem] font-black uppercase text-[var(--brand-caramel)] shadow-lg">
          {product.categoryLabel}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link
          to={`/producto/${product.slug}`}
          className="text-lg font-black leading-tight text-[var(--brand-dark)] transition hover:text-[var(--brand-caramel)]"
        >
          {product.name}
        </Link>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--brand-coffee)]/72">
          {product.shortDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#f5ecdf] px-3 py-1 text-[0.65rem] font-black text-[var(--brand-coffee)]/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <p className="text-xl font-black text-[var(--brand-dark)]">
            {product.price}
          </p>
          <Link
            to={`/producto/${product.slug}`}
            aria-label={`Ver detalle de ${product.name}`}
            className="grid h-9 w-9 place-items-center rounded-full bg-[var(--brand-caramel)] text-lg font-black text-white transition hover:bg-[var(--brand-dark)]"
          >
            +
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
