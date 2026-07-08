import { useEffect, useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Precios', href: '#precios' },
  { label: 'Ubicación', href: '#ubicacion' },
]

function Navbar({ business }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-zinc-950/90 shadow-2xl shadow-black/20 backdrop-blur-xl'
          : 'bg-gradient-to-b from-zinc-950/80 to-zinc-950/10 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-amber-300/35 bg-zinc-950 text-sm font-bold text-amber-200 shadow-lg shadow-black/30">
            <span className="absolute inset-1 rounded-md border border-amber-300/15" />
            <span className="relative">BP</span>
          </span>
          <span>
            <span className="block text-base font-semibold leading-5 text-white">
              {business.shortName}
            </span>
            <span className="block text-xs text-amber-100/70">
              {business.type}
            </span>
          </span>
        </a>

        <div className="hidden items-center rounded-lg border border-white/10 bg-white/6 px-2 py-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <span className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-semibold text-emerald-100">
            Reservas hoy
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-amber-300 px-4 py-2 text-sm font-bold text-zinc-950 transition hover:bg-amber-200"
          >
            Reservar
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white md:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-zinc-950/95 transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-md bg-amber-300 px-4 py-3 text-center text-sm font-semibold text-zinc-950"
          >
            Agendar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
