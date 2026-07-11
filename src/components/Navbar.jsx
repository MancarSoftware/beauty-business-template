import { useEffect, useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

const navItems = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Metodo', href: '#tecnologia' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Planes', href: '#paquetes' },
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 text-[#172033] sm:px-5">
      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 rounded-[1.75rem] border border-[#172033]/10 bg-white/88 px-4 py-3 shadow-2xl shadow-[#172033]/10 backdrop-blur-xl sm:px-5 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#inicio" className="flex items-center gap-3 text-[#172033]">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--brand-accent)] text-sm font-black">
            {business.logoInitials}
          </span>
          <span>
            <span className="block text-lg font-black uppercase leading-5">
              {business.shortName}
            </span>
            <span className="block text-[11px] font-black uppercase tracking-[0.18em] text-[#172033]/45">
              Smile studio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 text-xs font-black uppercase lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2.5 text-[#172033]/58 transition hover:bg-[#fff7ec] hover:text-[var(--brand-accent-dark)]"
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
            className="rounded-full bg-[#172033] px-5 py-3 text-xs font-black uppercase text-white transition hover:bg-[var(--brand-accent)] hover:text-[#172033]"
          >
            Agendar cita
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-2xl bg-[#172033] text-2xl font-light text-white lg:hidden"
        >
          {isOpen ? 'x' : '='}
        </button>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl shadow-[#172033]/10 transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-[560px]' : 'max-h-0'
        }`}
      >
        <div className="grid gap-2 p-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-[#fff7ec] px-4 py-4 text-sm font-black uppercase text-[#172033]"
            >
              {item.label}
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="rounded-2xl bg-[var(--brand-accent)] px-4 py-4 text-center text-sm font-black uppercase text-[#172033]"
          >
            Agendar cita
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
