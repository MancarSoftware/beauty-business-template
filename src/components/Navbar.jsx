import { useEffect, useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

const navItems = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Concierge', href: '#reserva' },
  { label: 'Experiencias', href: '#paquetes' },
  { label: 'Estandar', href: '#experiencia' },
  { label: 'Ubicacion', href: '#ubicacion' },
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 text-[#09231f] sm:px-5">
      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 rounded-full border border-white/70 bg-[#fffaf5]/90 px-4 py-3 shadow-2xl shadow-[#09231f]/10 backdrop-blur-xl sm:px-5 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[#09231f] text-sm font-black text-white">
            {business.logoInitials}
          </span>
          <span>
            <span className="block text-lg font-black uppercase leading-5">
              {business.shortName}
            </span>
            <span className="block text-[11px] font-black uppercase text-[#09231f]/48">
              Wellness concierge
            </span>
          </span>
        </a>

        <div className="hidden items-center rounded-full bg-[#f4ebe2] p-1 text-xs font-black uppercase text-[#09231f]/62 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2.5 transition hover:bg-white hover:text-[var(--brand-accent-dark)]"
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
            className="rounded-full bg-[var(--brand-accent)] px-5 py-3 text-xs font-black uppercase text-[#09231f] shadow-lg shadow-[var(--brand-accent)]/20 transition hover:-translate-y-0.5 hover:bg-[#09231f] hover:text-white"
          >
            Solicitar cita
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-full bg-[#09231f] text-2xl font-light text-white lg:hidden"
        >
          {isOpen ? 'x' : '='}
        </button>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-[2rem] bg-[#fffaf5] shadow-2xl shadow-[#09231f]/10 transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-[560px]' : 'max-h-0'
        }`}
      >
        <div className="grid gap-2 p-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-[#f4ebe2] px-4 py-4 text-sm font-black uppercase text-[#09231f]"
            >
              {item.label}
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-1 rounded-2xl bg-[var(--brand-accent)] px-4 py-4 text-center text-sm font-black uppercase text-[#09231f]"
          >
            Solicitar cita
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
