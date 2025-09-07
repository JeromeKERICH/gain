import React, { useEffect } from 'react'
import HomeSection from '../sections/HomeHero'
import OurAdvantage from '../sections/Pillars'
import ServicesSection from '../sections/Services'
import InvestmentFrontiers from '../sections/Investment'
import InvestorsPlaybook from '../sections/Play'
import PerformanceSection from '../sections/Stats'


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HomeSection/>
      
      <OurAdvantage/>
      <ServicesSection/>
      <InvestorsPlaybook/>
      <PerformanceSection/>
      
    </div>
  )
}

export default Home
