import React from 'react'
import SupportJ from '../assets/support.jpg'
import {PhoneIcon} from '@heroicons/react/24/outline'

const Support = () => {
  return (
    <div>
        <div className='w-full h-full pt-32 bg-gray-400'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay'
                    src={SupportJ} alt='support'/>
            </div>
            <div>
                <h2 className='text-2xl text-center justify-center text-gray-300'>SUPPORT</h2>
            </div>
            <div>
                <h3 className='text-3xl text-center font-bold mt-1'>Finding the right team</h3>
                <p className='text-left mt-2 mx-12'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-3 text-center mx-16 my-16'>
                <div className='bg-gray-300 rounded-3xl'>
                    <div>
                        <PhoneIcon width={32} className='text-white bg-blue-600 rounded-md '/>
                        <h3 className='font-bold text-left ml-5 mt-3'>Sales</h3>
                        <p className='text-left mx-5 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div>
                        <a className='text-left text-blue-600 font-bold bg-gray-400'
                            href='mailto:luigidalleaste@gmail.com'>
                            
                            Contact Us ➡️
                        </a>
                    </div>
                </div>
                <div className='bg-gray-300 rounded-3xl'>
                    <div>
                        <PhoneIcon width={32} className='text-white bg-blue-600 rounded-md '/>
                        <h3 className='font-bold text-left ml-5 mt-3'>Sales</h3>
                        <p className='text-left mx-5 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                <div className='bg-gray-300 rounded-3xl'>
                    <div>
                        <PhoneIcon width={32} className='text-white bg-blue-600 rounded-md '/>
                        <h3 className='font-bold text-left ml-5 mt-3'>Sales</h3>
                        <p className='text-left mx-5 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Support