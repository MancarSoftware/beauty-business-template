import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { createWhatsAppUrl } from '../utils/whatsapp'

function Navbar({ business }) {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappUrl = createWhatsAppUrl(
    business.whatsapp,
    business.whatsappMessage,
  )
  const navItems = business.navbarLinks ?? []

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
    <header className="absolute inset-x-0 top-0 z-50 px-4 py-5 text-[var(--brand-dark)] sm:px-8">
      <nav className="relative mx-auto grid max-w-[90rem] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[13rem_1fr]">
        <Link to="/" className="w-fit leading-none text-[var(--brand-dark)]">
          <span className="block text-center text-[0.72rem] font-semibold uppercase tracking-[0.28em]">
            Maison
          </span>
          <span className="font-brand-serif block text-4xl uppercase tracking-[-0.06em] sm:text-[3.4rem]">
            Miga
          </span>
          <span className="block text-[0.65rem] font-black uppercase tracking-[0.28em]">
            Panaderia artesanal
          </span>
        </Link>

        <div className="hidden items-center justify-center gap-4 pr-44 text-xs font-medium text-[var(--brand-dark)] lg:flex xl:gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className="border-b border-transparent py-2 transition hover:border-[var(--brand-caramel)] hover:text-[var(--brand-caramel)]"
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden justify-end lg:absolute lg:right-0 lg:top-3 lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--brand-caramel)] px-5 py-4 text-xs font-black uppercase text-white shadow-xl shadow-[var(--brand-coffee)]/18 transition hover:-translate-y-0.5 hover:bg-[var(--brand-dark)] xl:px-7"
          >
            Pedir ahora
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setIsOpen((current) => !current)}
          className="relative h-12 w-12 rounded-full bg-[var(--brand-dark)] text-white shadow-xl shadow-[var(--brand-coffee)]/20 lg:hidden"
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
        className={`mx-auto mt-4 max-w-[90rem] overflow-hidden rounded-[1.5rem] bg-white/95 shadow-2xl shadow-[var(--brand-coffee)]/10 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-[560px]' : 'max-h-0'
        }`}
      >
        <div className="grid gap-2 p-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-[var(--brand-background)] px-4 py-4 text-sm font-black uppercase text-[var(--brand-dark)]"
            >
              {item.label}
            </Link>
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
