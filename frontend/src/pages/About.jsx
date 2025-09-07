import React, { useEffect } from 'react'
import GAINHero from '../components/about/AboutHero'
import AboutSection from '../components/about/About'
import LeadershipSection from '../components/about/Leaders'
import VisionMission from '../components/about/VMission'

const About = () => {
  useEffect
(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <GAINHero/>
      <AboutSection/>
      <VisionMission/>
      <LeadershipSection/>
    </div>
  )
}

export default About
