import {React, useState} from 'react'
import {  Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, animateScroll as scroll, } from 'react-scroll'


const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  console.log(nav)


  return (
    <div className='bg-gray-400 w-screen z-10 h-[80px] fixed drop-shadow-lg'>
      <div className=' flex items-center px-2 justify-between w-full h-full'>
        <div className=' flex items-center'>
        <h1 className='font-bold text-3xl mr-4 sm:text-4xl'><Link to="home" smooth={true} duration={500}>BRAND</Link></h1>
        <ul className='hidden md:flex cursor-pointer'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
          <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
        </ul>
        </div>
        <div className='hidden md:flex items-center '>
          <button className='border-none text-xs mr-3 bg-transparent text-black'>Sign In</button>
          <button className='px-4 py-1'>Sign Up</button>
        </div>
        <div className='md:hidden flex items-center cursor-pointer mr-5' onClick={handleClick}>
            {!nav ? 
            (<Bars3Icon className='w-5' />) 
            : 
            (<XMarkIcon className='w-5' />)}
        </div>
    </div>
        {nav ? 
        (<ul className='bg-gray-400 w-full px-8 absolute justify-between cursor-pointer'>
        <li className='border-b-2 border-gray-500 w-full'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='border-b-2 border-gray-500 w-full'><Link onClick={handleClick} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
        <li className='border-b-2 border-gray-500 w-full'><Link onClick={handleClick} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
        <li className='border-b-2 border-gray-500 w-full'><Link onClick={handleClick} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
        <li className='border-b-2 border-gray-500 w-full'><Link onClick={handleClick} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
      <div className='flex flex-col pt-2'>
        <button className='bg-transparent md:mx-40 mx-20 text-black mb-2'>Sign In</button>
        <button className='mb-2 md:mx-40 mx-20'>Sign Up</button>
      </div>
      </ul>) 
        : 
        (<></>)}
    </div>
  )
}

export default Navbar