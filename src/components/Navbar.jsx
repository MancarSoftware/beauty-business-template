import { useEffect, useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Favoritos', href: '#favoritos' },
  { label: 'Desayunos', href: '#desayunos' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Ubicacion', href: '#ubicacion' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar({ business }) {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  useEffect(() => {
    if (!isOpen) return undefined

    const closeMenu = () => setIsOpen(false)
    window.addEventListener('touchmove', closeMenu, { passive: true })
    window.addEventListener('scroll', closeMenu, { passive: true })

    return () => {
      window.removeEventListener('touchmove', closeMenu)
      window.removeEventListener('scroll', closeMenu)
    }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 text-[var(--brand-dark)] sm:px-5">
      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 rounded-full border border-white/70 bg-white/82 px-4 py-3 shadow-2xl shadow-[var(--brand-coffee)]/10 backdrop-blur-2xl sm:px-5 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#inicio" className="flex items-center gap-3 text-[var(--brand-dark)]">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--brand-dark)] text-sm font-black text-white">
            {business.logoInitials}
          </span>
          <span>
            <span className="block text-lg font-black uppercase leading-5">
              {business.shortName}
            </span>
            <span className="block text-[11px] font-black uppercase tracking-[0.18em] text-[var(--brand-caramel)]">
              artisan bakery
            </span>
          </span>
        </a>

        <div className="hidden items-center rounded-full bg-[var(--brand-background)] p-1 text-xs font-black uppercase text-[var(--brand-coffee)]/65 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[var(--brand-caramel)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden justify-end lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--brand-dark)] px-5 py-3 text-xs font-black uppercase text-white shadow-lg shadow-[var(--brand-coffee)]/18 transition hover:-translate-y-0.5 hover:bg-[var(--brand-caramel)] hover:text-[var(--brand-dark)]"
          >
            Pedir ahora
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setIsOpen((current) => !current)}
          className="relative h-11 w-11 rounded-full bg-[var(--brand-dark)] text-white lg:hidden"
        >
          <span
            className={`absolute left-1/2 top-[15px] h-0.5 w-4 -translate-x-1/2 rounded-full bg-current transition ${
              isOpen ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`absolute left-1/2 top-[21px] h-0.5 w-4 -translate-x-1/2 rounded-full bg-current transition ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`absolute left-1/2 top-[27px] h-0.5 w-4 -translate-x-1/2 rounded-full bg-current transition ${
              isOpen ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-[2rem] bg-white/95 shadow-2xl shadow-[var(--brand-coffee)]/10 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-[560px]' : 'max-h-0'
        }`}
      >
        <div className="grid gap-2 p-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-[var(--brand-background)] px-4 py-4 text-sm font-black uppercase text-[var(--brand-dark)]"
            >
              {item.label}
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="rounded-2xl bg-[var(--brand-dark)] px-4 py-4 text-center text-sm font-black uppercase text-white"
          >
            Pedir ahora
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
