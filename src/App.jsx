import ContactForm from './components/ContactForm'
import Dentists from './components/Dentists'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Plans from './components/Plans'
import Seo from './components/Seo'
import Services from './components/Services'
import Technology from './components/Technology'
import Testimonials from './components/Testimonials'
import WhatsAppButton from './components/WhatsAppButton'
import dentalData from './data/dentalData'

function App() {
  const business = dentalData

  return (
    <div
      className="min-h-screen bg-[#f4fbff] text-[#08111f]"
      style={{
        '--brand-accent': '#35e0d2',
        '--brand-accent-dark': '#0c8b91',
        '--brand-secondary': '#ffcf5a',
        '--brand-soft': '#f4fbff',
        '--brand-dark': '#08111f',
      }}
    >
      <Seo business={business} />
      <Navbar business={business} />

      <main>
        <Hero business={business} />
        <Services business={business} />
        <Technology business={business} />
        <Dentists business={business} />
        <Plans business={business} />
        <Testimonials business={business} />
        <ContactForm business={business} />
        <Location business={business} />
        <FAQ business={business} />
      </main>

      <Footer business={business} />
      <WhatsAppButton business={business} />
    </div>
  )
}

export default App
