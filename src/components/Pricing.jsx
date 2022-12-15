import React from 'react'
import {CheckIcon} from '@heroicons/react/24/outline'

const Pricing = () => {
  return (
    <div className='bg-blue-900 h-full w-full pt-16'>
        <div className=' text-center '>
            <div>
              <h3 className='text-white font-bold text-3xl'>The right price for your research.</h3>
              <p className='text-gray-300 mt-5 mx-12 '>Lore ipsum dolor, sit amet consectetur adpiscing elit. Distinctio soluta recusandae praesentium magni repregenderit voluptatibus.</p>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-3 mx-6'>
        <div className='bg-white rounded-2xl shadow-2xl text-left'>
            <div className='ml-3 mt-3'>
                <span className='text-left bg-blue-400 rounded-2xl px-1 font-bold '>STANDARD</span>
            </div>
                <div className='flex ml-3 mb-1'>
                    <h3 className='font-bold text-3xl'>$49<span className='text-sm font-bold'>/mo</span></h3>
                   
                </div>
                <div className='ml-3 text-left font-semibold'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
                <br />
                <div className='text-left ml-3'>
                    <div className='flex font-semibold'>
                        <CheckIcon className='h-5 w-5 text-green-700 mr-5' />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='flex font-semibold'>
                        <CheckIcon className='h-5 w-5 text-green-700 mr-5' />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='flex font-semibold'>
                        <CheckIcon className='h-5 w-5 text-green-700 mr-5' />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='flex font-semibold'>
                        <CheckIcon className='h-5 w-5 text-green-700 mr-5' />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='flex font-semibold'>
                        <CheckIcon className='h-5 w-5 text-green-700 mr-5' />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <button className=' mt-3 px-24 mb-3'>Get Started</button>
                </div>
            </div>
            <div className='bg-white rounded-2xl pb-3'>
                <div className='font-bold   text-left mt-3 '>
                    <span className='bg-blue-400 rounded-2xl px-1 ml-3'>ENTERPRISE</span>
                </div>
                <div className='flex ml-3 mb-1'>
                <h3 className='font-bold text-3xl'>$89<span className='text-sm font-bold'>/mo</span></h3>
                </div>
                <div className='ml-3 text-left font-semibold'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
                <br />
                <div className='text-left ml-3'>
                    <div className='flex font-semibold'>
                        <CheckIcon className='h-5 w-5 text-green-700 mr-5' />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='flex font-semibold'>
                        <CheckIcon className='h-5 w-5 text-green-700 mr-5' />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='flex font-semibold'>
                        <CheckIcon className='h-5 w-5 text-green-700 mr-5' />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='flex font-semibold'>
                        <CheckIcon className='h-5 w-5 text-green-700 mr-5' />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='flex font-semibold'>
                        <CheckIcon className='h-5 w-5 text-green-700 mr-5' />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <button className=' mt-3 px-24 mb-3'>Get Started</button>
                </div>            
                </div>
        </div>
        </div>
    </div>
  )
}

export default Pricing