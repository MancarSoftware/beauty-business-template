import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Process from './components/Process'
import Programs from './components/Programs'
import Seo from './components/Seo'
import WhatsAppButton from './components/WhatsAppButton'
import WhyChooseUs from './components/WhyChooseUs'
import gymData from './data/gymData'

function App() {
  const business = gymData

  return (
    <div
      className="min-h-screen bg-[#f8f5ef] text-[#101010]"
      style={{
        '--brand-accent': business.theme.accent,
        '--brand-accent-dark': business.theme.accentDark ?? business.theme.accent,
      }}
    >
      <Seo business={business} />
      <Navbar business={business} />

      <main>
        <Hero business={business} />
        <Process business={business} />
        <Programs business={business} />
        <Pricing business={business} />
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