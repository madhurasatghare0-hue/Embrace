import Hero from '../components/sections/Hero'
import AboutMission from '../components/sections/AboutMission'
import ServicesGrid from '../components/sections/ServicesGrid'
import HowItWorks from '../components/sections/HowItWorks'
import BenefitsAndEmergency from '../components/sections/BenefitsAndEmergency'

function Home() {
  return (
    <div>
      <Hero />
      <AboutMission />
      <ServicesGrid />
      <HowItWorks />
      <BenefitsAndEmergency />
    </div>
  )
}

export default Home