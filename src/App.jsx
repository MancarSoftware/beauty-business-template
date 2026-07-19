import BakeryBreakfast from './components/BakeryBreakfast'
import BakeryEvents from './components/BakeryEvents'
import BakeryFavorites from './components/BakeryFavorites'
import BakeryHero from './components/BakeryHero'
import BakerySpecialties from './components/BakerySpecialties'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Seo from './components/Seo'
import WhatsAppButton from './components/WhatsAppButton'
import WhyChooseUs from './components/WhyChooseUs'
import bakeryData from './data/bakeryData'

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
      <Seo business={business} />
      <Navbar business={business} />

      <main>
        <BakeryHero business={business} />
        <BakerySpecialties business={business} />
        <BakeryFavorites business={business} />
        <BakeryBreakfast business={business} />
        <BakeryEvents business={business} />
        <WhyChooseUs business={business} />
        <Location business={business} />
        <FAQ business={business} />
      </main>

      <Footer business={business} />
      <WhatsAppButton business={business} />
    </div>
  )
}

export default App
