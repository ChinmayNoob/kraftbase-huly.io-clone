import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'

function Hero() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full h-full overflow-hidden">
        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        ></video>
        <div className="absolute inset-0"></div>
        <div className="relative z-10 flex flex-col w-full min-h-screen text-white">
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </div>
  )
}

export default Hero