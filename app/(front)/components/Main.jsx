import React from 'react'
import Header from './Header'
import ComPro from './ComPro'
import HeroSection from './HeroSection'
import Courses from './Courses'
import Footer from './Footer'

const Main = () => {
  return (
    <div>
        <div className='fixed w-full -mt-24'>
          <ComPro/>
          <Header/>
        </div>
        <HeroSection/>
        <Courses/>
        <Footer/>
    </div>
  )
}

export default Main