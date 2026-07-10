import { useState } from 'react'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Metodo', href: '#proceso' },
  { label: 'Programas', href: '#programas' },
  { label: 'Planes', href: '#planes' },
  { label: 'Coaches', href: '#entrenadores' },
  { label: 'Ubicacion', href: '#ubicacion' },
]

function Navbar({ business }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/88 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center border border-[var(--brand-accent)] bg-[var(--brand-accent)] text-sm font-black text-[#050505]">
            {business.logoInitials}
          </span>

          <span>
            <span className="block text-lg font-black uppercase leading-5">
              {business.shortName}
            </span>
            <span className="block text-[11px] font-black uppercase tracking-[0.18em] text-white/45">
              Strength Club
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-[11px] font-black uppercase text-white/70 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2.5 transition hover:bg-white/10 hover:text-[var(--brand-accent)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center border border-white/15 bg-white/5 text-2xl font-light text-white lg:hidden"
        >
          {isOpen ? 'x' : '='}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#050505] transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-[520px]' : 'max-h-0'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-black uppercase text-white transition hover:border-[var(--brand-accent)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
