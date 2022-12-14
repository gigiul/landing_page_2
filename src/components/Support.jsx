import React from 'react'
import SupportJ from '../assets/support.jpg'
import {PhoneIcon, GlobeAltIcon, CpuChipIcon} from '@heroicons/react/24/outline'

const Support = () => {
  return (
    <div>
        <div className='w-full pt-32 md:pb-16 pb-1 bg-gray-400'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay'
                    src={SupportJ} alt='support'/>
            </div>
            <div className='text-white relative max-w-[1240px] mx-auto'>
                <div className='px-4 py-12'>
                    <h2 className='text-2xl text-center justify-center text-gray-300'>SUPPORT</h2>
                    <h3 className='text-4xl text-center font-bold mt-1'>Finding the right team</h3>
                    <p className='text-center mt-2 mx-12 italic'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.  </p>
                </div>
                {/*Three columns*/}
                <div className='grid lg:grid-cols-3 grid-cols-1 relative gap-12 text-center mx-16 my-16'>
                    <div className='bg-gray-300 rounded-3xl shadow-2xl '>
                        <div className='p-4'>
                            <PhoneIcon className='w-16 p-4 text-white bg-blue-600 rounded-md mt-[-3rem]'/>
                            <h3 className='font-bold text-left ml-5 mt-3 text-black'>Sales</h3>
                            <p className='text-left mx-5 my-2 text-gray-800 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className='bg-gray-200 rounded-b-3xl p-3 text-left'>
                            <a className='text-left text-blue-600 font-bold ml-5'
                                href='mailto:luigidalleaste@gmail.com'>
                                Contact Us ➡️
                            </a>
                        </div>
                    </div>
                    <div className='bg-gray-300 rounded-3xl shadow-2xl '>
                        <div className='p-4'>
                            <GlobeAltIcon className='w-16 p-4 text-white bg-blue-600 rounded-md mt-[-3rem]'/>
                            <h3 className='font-bold text-left ml-5 mt-3 text-black'>Tecnical Support</h3>
                            <p className='text-left mx-5 my-2 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className='bg-gray-200  rounded-b-3xl p-3 text-left'>
                            <a className='text-left text-blue-600 font-bold ml-5'
                                href='mailto:luigidalleaste@gmail.com'>
                                Contact Us ➡️
                            </a>
                        </div>
                    </div>
                    <div className='bg-gray-300 rounded-3xl shadow-2xl'>
                        <div className='p-4'>
                            <CpuChipIcon className='w-16 p-4 text-white bg-blue-600 rounded-md mt-[-3rem] '/>
                            <h3 className='font-bold text-left ml-5 mt-3 text-black'>Media Inquiries</h3>
                            <p className='text-left mx-5 my-2 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className='bg-gray-200 rounded-b-3xl p-3 text-left'>
                            <a className='text-left text-blue-600 font-bold ml-5'
                                href='mailto:luigidalleaste@gmail.com'>
                                Contact Us ➡️
                            </a>
                        </div>
                    </div>
            </div>
        </div>    
        </div>
    </div>
  )
}

export default Support