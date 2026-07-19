function CategoryFilters({ filters = [], activeFilter, onChange }) {
  if (!filters.length) return null

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2">
      {filters.map((filter) => {
        const isActive = filter === activeFilter

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-black transition duration-300 ${
              isActive
                ? 'bg-[var(--brand-caramel)] text-white shadow-lg shadow-[var(--brand-coffee)]/15'
                : 'bg-white/80 text-[var(--brand-coffee)] ring-1 ring-[var(--brand-border)] hover:-translate-y-0.5 hover:bg-[var(--brand-dark)] hover:text-white'
            }`}
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilters
