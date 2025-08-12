
import React from 'react'
import Hero from '../Pages/Hero'
import NavBar from '../components/NavBar'
import Splash from '../components/splash'

import AboutUs from '../Pages/AboutUs'
import Services from '../Pages/services'
import WhyUs from '../Pages/WhyUs'
import Portfolio from '../Pages/Portfolio'
import Testimonials from '../Pages/Testimonials'
import FAQ from '../Pages/FAQ'
import BannerCTA from '../Pages/BannerCTA'
import Contact from '../Pages/Contact'
import ScrollDownIndicator from '../components/ScrollDownIndicator'
import Footer from '../components/Footer'
import WhatsApp from '../components/WhatsApp'
export default function LayoutLanding() {
  return (
    <div>
  <Splash />
  <NavBar />
  <div className="relative">
    <Hero />
    <ScrollDownIndicator />
  </div>
  <AboutUs />
  <Services />
  <WhyUs />
  <Portfolio />
  <Testimonials />
  <FAQ />
  <BannerCTA />
  <Contact />
  <Footer />
  <WhatsApp />
</div>
  )
}

