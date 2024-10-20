
import React from 'react'
import PythonIntroduction from './components/PythonIntroduction'
import PythonComments from './components/PythonComments'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProVersion from './components/ProVersion'
import ComPro from '../../components/ComPro'

const page = () => {
  return (
    <div className='flex flex-col'>
      <ComPro/>
    <Header/>
    <div className='flex flex-1 '>
        <div className='w-4/12 justify-end '>
        <PythonIntroduction/>
        
        
        
        </div>
        <div className='w-8/12  '>
        <PythonComments/>
        
        </div>
        
    </div>
    <ProVersion/>
    <Footer/>
    </div>
  )
}

export default page