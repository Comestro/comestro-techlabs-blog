import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-1 bg-[#16224b] text-white px-[120px] py-[80px]">
            <div className="flex flex-1 justify-between">
                <div className='flex flex-col gap-3 '>
                    <h1>Comestro</h1>
                    <p>join our newsletter for the latest updates.</p>
                    <div className='flex '>
                        <input type="text" placeholder='Enter Email Address' className='p-2' />
                        <button className='flex items-center p-1 uppercase bg-sky-600 hover:bg-sky-700'>Join</button>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h2>Tutorials</h2>
                    <span>python 3 Tutorials</span>
                    <span>python 3 Tutorials</span>
                    <span>python 3 Tutorials</span>
                    <span>python 3 Tutorials</span>
                    <span>python 3 Tutorials</span>
                    <span>python 3 Tutorials</span>
                    <span>python 3 Tutorials</span>
                    <span>python 3 Tutorials</span>
                    <span>python 3 Tutorials</span>
                    <span>python 3 Tutorials</span>
                </div>
                <div className='flex flex-col'>
                    <h2>Examples</h2>
                    <span>Python examples</span>
                    <span>Python examples</span>
                    <span>Python examples</span>
                    <span>Python examples</span>
                    <span>Python examples</span>
                    <span>Python examples</span>
                    <span>Python examples</span>
                </div>
                <div className='flex flex-col'>
                    <h2>Company</h2>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                </div>
                <div className='flex flex-col'>
                    <h2>Apps</h2>
                    <span>Learn python</span>
                    <span>Learn python</span>
                    <span>Learn python</span>
                </div>
            </div>
        </div>
    )
}


export default Footer