// import React from 'react'

// const Footer = () => {
//     return (
//         <div className="flex flex-1 flex-col bg-[#16224b] text-white px-[120px] py-[80px] font-sans">
//             <div className="flex flex-1 justify-between">
//                 <div className='flex flex-col gap-4 '>
//                     <img src="./mainLogo2.png" alt="" className='cursor-pointer w-[25vh]' />
//                     <p className='font-semibold text-xl'>Join our newsletter for the latest updates.</p>
//                     <div className='flex'>
//                         <input type="text" placeholder='Enter Email Address' className='p-4 rounded-l-md' />
//                         <button className='flex items-center p-4 uppercase rounded-r-md bg-sky-600 hover:bg-sky-700'>Join</button>
//                     </div>
//                     <div className='flex flex-col'>
//                         <img src="./google-play.png" alt="" className='w-48 -ml-3 cursor-pointer' />
//                         <img src="./app-store.png" alt="" className='w-[23vh] cursor-pointer' />
//                     </div>
//                 </div>
//                 <div className='flex flex-col gap-3'>
//                     <h2 className='font-semibold text-xl'>Tutorials</h2>
//                     <span>python 3 Tutorials</span>
//                     <span>JavaScript Tutorials</span>
//                     <span>SQL Tutorials</span>
//                     <span>HTML Tutorials</span>
//                     <span>C Tutorials</span>
//                     <span>C++ Tutorials</span>
//                     <span>Jave Tutorials</span>
//                     <span>DSA Tutorials</span>
//                     <span>Tailwind CSS Tutorials</span>
//                     <span>Swift Tutorials</span>
//                 </div>
//                 <div className='flex flex-col gap-3'>
//                     <h2 className='font-semibold text-xl'>Examples</h2>
//                     <span>Python examples</span>
//                     <span>JavaScript examples</span>
//                     <span>C examples</span>
//                     <span>Java examples</span>
//                     <span>C++ examples</span>
//                     <span>Swift examples</span>
//                 </div>
//                 <div className='flex flex-col gap-3'>
//                     <h2 className='font-semibold text-xl'>Company</h2>
//                     <span>About</span>
//                     <span>Advertising</span>
//                     <span>Privacy Policy</span>
//                     <span>Terms & Condition</span>
//                     <span>Contact</span>
//                     <span>Careers</span>
//                     <span>Youtube</span>
//                 </div>
//                 <div className='flex flex-col gap-3'>
//                     <h2 className='font-semibold text-xl'>Apps</h2>
//                     <span>Learn python</span>
//                     <span>Learn C Programming</span>
//                     <span>Learn Java</span>
//                 </div>
//             </div>
//             <div className='flex flex-col gap-1'>
//                 <hr className='mt-12' />
//                 <p>© Comestro Labs Pvt. Ltd. All rights reserved.</p>
//             </div>
//         </div>
//     )
// }


// export default Footer

import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#16224b] text-white px-4 md:px-24 py-16 font-sans">
      <div className="flex flex-col md:flex-row justify-between">
        <div className='flex flex-col gap-4 md:w-1/4'>
          <img src="./mainLogo2.png" alt="" className='cursor-pointer w-32 md:w-48' />
          <p className='font-semibold text-lg md:text-xl'>Join our newsletter for the latest updates.</p>
          <div className='flex'>
            <input type="text" placeholder='Enter Email Address' className='p-4 rounded-l-md w-full md:w-auto' />
            <button className='flex items-center p-4 uppercase rounded-r-md bg-sky-600 hover:bg-sky-700 transition duration-300'>Join</button>
          </div>
          <div className='flex flex-col'>
            <img src="./google-play.png" alt="" className='w-32 md:w-48 cursor-pointer' />
            <img src="./app-store.png" alt="" className='w-32 md:w-48 cursor-pointer' />
          </div>
        </div>
        
        <div className='flex flex-col gap-3 md:w-1/4 mt-8 md:mt-0'>
          <h2 className='font-semibold text-xl'>Tutorials</h2>
          {["Python 3", "JavaScript", "SQL", "HTML", "C", "C++", "Java", "DSA", "Tailwind CSS", "Swift"].map((tutorial) => (
            <span key={tutorial} className="hover:underline cursor-pointer">{tutorial} Tutorials</span>
          ))}
        </div>
        
        <div className='flex flex-col gap-3 md:w-1/4 mt-8 md:mt-0'>
          <h2 className='font-semibold text-xl'>Examples</h2>
          {["Python", "JavaScript", "C", "Java", "C++", "Swift"].map((example) => (
            <span key={example} className="hover:underline cursor-pointer">{example} Examples</span>
          ))}
        </div>
        
        <div className='flex flex-col gap-3 md:w-1/4 mt-8 md:mt-0'>
          <h2 className='font-semibold text-xl'>Company</h2>
          {["About", "Advertising", "Privacy Policy", "Terms & Condition", "Contact", "Careers", "YouTube"].map((company) => (
            <span key={company} className="hover:underline cursor-pointer">{company}</span>
          ))}
        </div>
        
        <div className='flex flex-col gap-3 md:w-1/4 mt-8 md:mt-0'>
          <h2 className='font-semibold text-xl'>Apps</h2>
          {["Learn Python", "Learn C Programming", "Learn Java"].map((app) => (
            <span key={app} className="hover:underline cursor-pointer">{app}</span>
          ))}
        </div>
      </div>
      
      <div className='flex flex-col items-center mt-12'>
        <hr className='w-full border-gray-600' />
        <p className='text-center mt-4'>© Comestro Labs Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
