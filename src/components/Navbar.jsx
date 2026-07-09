import { useState } from 'react'
import { createWhatsAppUrl } from '../utils/whatsapp'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Programas', href: '#programas' },
  { label: 'Planes', href: '#planes' },
  { label: 'Entrenadores', href: '#entrenadores' },
  { label: 'Horarios', href: '#ubicacion' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar({ business }) {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappUrl = createWhatsAppUrl(business.whatsapp, business.whatsappMessage)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/95 shadow-lg shadow-black/5 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--brand-accent)] text-base font-black text-white">
            {business.logoInitials}
          </span>

          <span>
            <span className="block font-display text-xl font-black uppercase leading-5 text-[#101010]">
              {business.shortName}
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-accent-dark)]">
              Gym
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-xs font-black uppercase tracking-wide text-[#101010] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[var(--brand-accent-dark)]">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-md bg-[var(--brand-accent)] px-5 py-3 text-xs font-black uppercase text-white transition hover:bg-[var(--brand-accent-dark)] md:inline-flex"
        >
          Únete ahora
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-zinc-200 bg-white text-[#101010] md:hidden"
        >
          ☰
        </button>
      </nav>

      <div className={`overflow-hidden border-t border-zinc-200 bg-white shadow-xl shadow-black/10 transition-all duration-300 md:hidden ${isOpen ? 'max-h-[560px]' : 'max-h-0'}`}>
        <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-4 text-base font-black uppercase text-[#101010] transition hover:bg-[#fff7e8]"
            >
              {item.label}
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-xl bg-[var(--brand-accent)] px-4 py-4 text-center text-base font-black uppercase text-white"
          >
            Únete ahora
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
