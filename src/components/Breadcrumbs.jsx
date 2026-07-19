import { Link } from 'react-router-dom'

function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[0.7rem] font-bold text-[var(--brand-coffee)]/70">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                to={item.href}
                className="transition hover:text-[var(--brand-caramel)]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--brand-dark)]">{item.label}</span>
            )}
            {!isLast && <span className="text-[var(--brand-caramel)]">/</span>}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
