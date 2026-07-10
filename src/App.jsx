import FAQ from './components/FAQ'
import BookingFlow from './components/BookingFlow'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Packages from './components/Packages'
import Seo from './components/Seo'
import SpaExperience from './components/SpaExperience'
import Testimonials from './components/Testimonials'
import Treatments from './components/Treatments'
import WhatsAppButton from './components/WhatsAppButton'
import spaData from './data/spaData'

function App() {
  const business = spaData

  return (
    <div
      className="min-h-screen bg-[#fbf7f1] text-[#09231f]"
      style={{
        '--brand-accent': business.theme.accent,
        '--brand-accent-dark': business.theme.accentDark ?? business.theme.accent,
        '--brand-secondary': business.theme.secondary ?? business.theme.accent,
        '--brand-soft': business.theme.soft ?? '#f7f1ea',
      }}
    >
      <Seo business={business} />
      <Navbar business={business} />

      <main>
        <Hero business={business} />
        <Treatments business={business} />
        <BookingFlow business={business} />
        <Packages business={business} />
        <SpaExperience business={business} />
        <Testimonials business={business} />
        <Location business={business} />
        <FAQ business={business} />
      </main>

      <Footer business={business} />
      <WhatsAppButton business={business} />
    </div>
  )
}

export default App
