import React from 'react'

import ComPro from './ComPro'
import HeroSection from './HeroSection'
import Courses from './Courses'
import Footer from './Footer'
import Header from './Header'

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