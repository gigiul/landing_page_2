import React, { useState } from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
    
    const  [message, setMessage] = useState('');

    const handleChange = event => {
      setMessage(event.target.value);
  
      //console.log('value is:', event.target.value);
      };  
  
  return (
    <div className='max-w-[1240px] h-full bg-gray-400 py-12 px-12 m-auto'>
        <div className='grid md:grid-cols-3 grid-cols-1 px-5 gap-3'>
            <div className='grid md:grid-cols-4 grid-cols-2 col-span-2 sm:gap-4 md:gap-0'>
            <div className='text-center'>
                <div className='flex flex-col'>
                    <p className='uppercase font-semibold'>Solution</p>
                    <p>Marketing</p>
                    <p>Analytics</p>
                    <p>Commerce</p>
                    <p>Data</p>
                    <p>Cloud</p>
                </div>
            </div>
            <div className='text-center'>
                <div className='flex flex-col'>
                    <p className='uppercase font-semibold'>Support</p>
                    <p>Marketing</p>
                    <p>Analytics</p>
                    <p>Commerce</p>
                    <p>Data</p>
                    <p>Cloud</p>
                </div>
            </div>
            <div className='text-center'>
                <div className='flex flex-col'>
                    <p className='uppercase font-semibold'>Company</p>
                    <p>Marketing</p>
                    <p>Analytics</p>
                    <p>Commerce</p>
                    <p>Data</p>
                    <p>Cloud</p>
                </div>
            </div>
            <div className='text-center'>
                <div className='flex flex-col'>
                    <p className='uppercase font-semibold'>Legal</p>
                    <p>Marketing</p>
                    <p>Analytics</p>
                    <p>Commerce</p>
                    <p>Data</p>
                    <p>Cloud</p>
                </div>
            </div>
            </div>
            <div className='grid col-1 sm:mt-3 md:mt-0 2sm:text-center md:text-left'>
                <p className='uppercase font-semibold'>Subscribe to our newsletter</p>
                <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row justify-center gap-2 pt-2'>
                    <input onChange={handleChange} placeholder='email' className='bg-gray-300 rounded px-6'></input>
                    <button onClick={console.log('value is:')}>Subscribe</button>
                </form>
            </div>            
        </div>
        <div className='border border-slate-500	mt-8 mx-12'></div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Workflow, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
        </div>
        </div>
    </div>
  )
}

export default Footer