
import React from 'react'
import PythonIntroduction from './components/PythonIntroduction'
import PythonComments from './components/PythonComments'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const page = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-1'>
        <div className='w-4/12 justify-end bg-slate-50'>
        <PythonIntroduction/>
        
        
        
        </div>
        <div className='w-8/12  '>
        <PythonComments/>
        
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page