import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

function NotFoundPage({ business }) {
  return (
    <>
      <Seo
        business={business}
        page={{
          title: 'Pagina no encontrada',
          description:
            'La pagina que buscas no esta disponible en Maison Miga.',
          image: business.hero.image,
        }}
      />
      <section className="grid min-h-screen place-items-center bg-[#fffaf3] px-4 py-32 text-center">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-caramel)]">
            404
          </p>
          <h1 className="font-brand-serif mt-4 text-5xl leading-none tracking-[-0.05em] text-[var(--brand-dark)] sm:text-6xl">
            Esta vitrina ya no esta disponible.
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--brand-coffee)]/72">
            Vuelve al inicio para explorar panes, tortas, postres y pedidos para eventos.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-[var(--brand-caramel)] px-8 py-4 text-sm font-black uppercase text-white shadow-xl shadow-[var(--brand-coffee)]/16 transition hover:-translate-y-1 hover:bg-[var(--brand-dark)]"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
