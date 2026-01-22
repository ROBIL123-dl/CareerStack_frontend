import React from 'react'
import Navbar from '../components/layout/navbar'
import HeroSection from '../components/layout/hero'
import StatsSection from '../components/layout/stats'
const Home = () => {
  return (
    <div>
       <Navbar/>
       <HeroSection/>
       <StatsSection/>
    </div>
  )
}

export default Home
