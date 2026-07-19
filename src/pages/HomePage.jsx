import BakeryBreakfast from '../components/BakeryBreakfast'
import BakeryEvents from '../components/BakeryEvents'
import BakeryFavorites from '../components/BakeryFavorites'
import BakeryHero from '../components/BakeryHero'
import BakerySpecialties from '../components/BakerySpecialties'
import FAQ from '../components/FAQ'
import Location from '../components/Location'
import Seo from '../components/Seo'
import WhyChooseUs from '../components/WhyChooseUs'

function HomePage({ business }) {
  return (
    <>
      <Seo business={business} />
      <BakeryHero business={business} />
      <BakerySpecialties business={business} />
      <BakeryFavorites business={business} />
      <BakeryBreakfast business={business} />
      <BakeryEvents business={business} />
      <WhyChooseUs business={business} />
      <Location business={business} />
      <FAQ business={business} />
    </>
  )
}

export default HomePage
