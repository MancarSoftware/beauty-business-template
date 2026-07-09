import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Seo from './components/Seo'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import WhatsAppButton from './components/WhatsAppButton'
import WhyChooseUs from './components/WhyChooseUs'
import salonData from './data/salonData'

function App() {
  const business = salonData

  return (
    <div
      className="min-h-screen bg-[#fff8fa] text-[#130f12]"
      style={{
        '--brand-accent': business.theme.accent,
        '--brand-accent-dark': business.theme.accentDark ?? business.theme.accent,
      }}
    >
      <Seo business={business} />

      <Navbar business={business} />

      <main>
        <Hero business={business} />
        <Services business={business} />
        <WhyChooseUs business={business} />
        <Gallery business={business} />
        <Pricing business={business} />
        <Testimonials business={business} />
        <Location business={business} />
        <Contact business={business} />
      </main>

      <Footer business={business} />
      <WhatsAppButton business={business} />
    </div>
  )
}

export default App