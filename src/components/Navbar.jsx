import { useEffect, useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Reserva', href: '#reserva' },
  { label: 'Paquetes', href: '#paquetes' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Ubicacion', href: '#ubicacion' },
]

function Navbar({ business }) {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const closeMenu = () => setIsOpen(false)

    window.addEventListener('touchmove', closeMenu, { passive: true })
    window.addEventListener('scroll', closeMenu, { passive: true })

    return () => {
      window.removeEventListener('touchmove', closeMenu)
      window.removeEventListener('scroll', closeMenu)
    }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#09231f]/88 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center bg-[var(--brand-accent)] text-sm font-black text-white">
            {business.logoInitials}
          </span>
          <span>
            <span className="block text-lg font-black uppercase leading-5">
              {business.shortName}
            </span>
            <span className="block text-[11px] font-black uppercase text-white/48">
              Wellness Studio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 text-xs font-black uppercase text-white/64 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--brand-accent)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden bg-white px-5 py-3 text-xs font-black uppercase text-[#09231f] transition hover:bg-[var(--brand-accent)] hover:text-white md:inline-flex"
        >
          Reservar
        </a>

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
        className={`overflow-hidden border-t border-white/10 bg-[#09231f] transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-[560px]' : 'max-h-0'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-black uppercase text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-[var(--brand-accent)] px-4 py-4 text-center text-sm font-black uppercase text-white"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
