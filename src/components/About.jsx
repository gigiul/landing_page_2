import React from 'react'

const About = () => {
  return (
    <div name='about' className='bg-gray-400 w-full h-full pt-32'>
        <div className='flex flex-col justify-center mx-10 gap-1'>
            <h2 className='text-2xl font-bold text-center'>Trusted by developers across the world</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className='flex flex-col md:flex-row gap-2 mx-5 mt-2 text-center justify-center'>
            <div className='bg-gray-300 border rounded px-2 py-1 w-full drop-shadow-xl'>
                <p className='font-bold text-3xl text-indigo-600'>100%</p>
                <p className='italic text-xs'>Completion</p>
            </div>
            <div className='bg-gray-300 border rounded px-2 py-1 w-full drop-shadow-xl'>
                <p className='font-bold text-3xl text-indigo-600'>24/7</p>
                <p className='italic text-xs'>Delivery</p>
            </div>
            <div className='bg-gray-300 border rounded px-2 py-1 w-full drop-shadow-xl'>
                <p className='font-bold text-3xl text-indigo-600'>100K</p>
                <p className='italic text-xs'>Transaction</p>
            </div>
        </div>
    </div>
  )
}

export default About