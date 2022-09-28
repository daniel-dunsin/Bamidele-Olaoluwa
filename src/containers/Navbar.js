import React from 'react'
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return <nav className='max-w-[1200px] mx-auto md:px-3 px-4 py-3 flex flex-row justify-between items-center'>
    <Link to='/' className='text-white text-[18px] bg-black py-2 px-3'>
      <p>BAM</p>
      <p>OLA</p>
    </Link>
    <div className='text-4xl'>
      <BiMenu onClick={openSidebar}/>
    </div>
  </nav>
}

export default Navbar