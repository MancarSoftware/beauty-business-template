import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import bakeryData from './data/bakeryData'
import CategoryPage from './pages/CategoryPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductsPage from './pages/ProductsPage'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.hash])

  return null
}

function App() {
  const business = bakeryData

  return (
    <div
      className="min-h-screen bg-[var(--brand-background)] text-[var(--brand-dark)]"
      style={{
        '--brand-background': business.theme.background,
        '--brand-surface': business.theme.surface,
        '--brand-dark': business.theme.dark,
        '--brand-coffee': business.theme.coffee,
        '--brand-caramel': business.theme.caramel,
        '--brand-border': business.theme.border,
      }}
    >
      <ScrollManager />
      <Navbar business={business} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage business={business} />} />
          <Route
            path="/especialidades/:slug"
            element={<CategoryPage business={business} />}
          />
          <Route
            path="/productos"
            element={<ProductsPage business={business} />}
          />
          <Route
            path="/producto/:slug"
            element={<ProductDetailPage business={business} />}
          />
          <Route path="*" element={<NotFoundPage business={business} />} />
        </Routes>
      </main>

      <Footer business={business} />
      <WhatsAppButton business={business} />
    </div>
  )
}

export default App
