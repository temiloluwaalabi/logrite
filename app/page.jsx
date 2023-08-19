import Expertise from '@/components/Expertise'
import Misbox from '@/components/Misbox'
import NewProcess from '@/components/NewProcess'
import NewService from '@/components/NewService'
import Why from '@/components/Why'
import About from '@/components/about'
import Booking from '@/components/booking'
import Hero from '@/components/hero'
import Process from '@/components/process'
import Services from '@/components/services'
import Solutions from '@/components/solutions'
import StepsBox from '@/components/ui/StepsBox'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero />
      <Booking />
      <About />
      <Process />
      <Solutions />
      <Services />
      {/* <NewProcess /> */}
      <StepsBox />
    </>
  )
}

export default Home