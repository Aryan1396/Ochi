/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import LanddingPage from './components/LanddingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Fetures from './components/Fetures'
import Reviews from './components/Reviews'
import ReadyToStart from './components/ReadyToStart'
import Footer from './components/footer'
import LocomotiveScroll from "locomotive-scroll"

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen '>
     <Navbar/>
     <LanddingPage />
     <Marquee/>
      <About/>
      <Eyes />
      <Fetures />
      <Reviews />
      <ReadyToStart/>
      <Footer/>
    </div>
   
  )
}

export default App