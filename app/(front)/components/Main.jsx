import React from 'react'

import ComPro from './ComPro'
import HeroSection from './HeroSection'
import Courses from './Courses'
import Footer from './Footer'
import Header from './Header'
import EnrollCourse from './EnrollCourse'
import Compiler from './Compiler'
import ComestroBenifits from './ComestroBenifits'
import Review from './Review'

const Main = () => {
  return (
    <div>
        <div className='fixed w-full -mt-24'>
          <ComPro/>
          <Header/>
        </div>
        <HeroSection/>
        <Courses/>
        <EnrollCourse/>
        <Compiler/>
        <ComestroBenifits/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default Main