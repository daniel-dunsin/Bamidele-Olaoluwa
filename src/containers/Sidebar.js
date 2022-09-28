import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import {links} from '../assets/constants';


const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return isSidebarOpen && <aside className='fixed z-50 top-0 right-0 w-full min-h-[100vh] bg-[rgba(0,0,0,0.4)] flex justify-end'>
    <div className='md:w-[300px] w-full h-screen bg-white px-[20px] py-[15px] relative scale-up'>
      <div className='w-[40px] h-[40px] flex justify-center items-center bg-gray-100 text-black ml-auto transition hover:bg-black hover:text-white' onClick={closeSidebar}>
        <FaTimes className='text-[20px]' />
      </div>
      <ul className='mt-24 flex flex-col gap-y-4'>
        {
          links.map(link => (
            <li key={link.id} className='text-lg uppercase hover:text-lightPurple transition text-center'>
              <a href={`#${link.link}`} onClick={closeSidebar}>{link.text}</a>
            </li>
          ))
        }
      </ul>

      <div className='absolute bottom-10 text-[18px] text-lightPurple cursor-pointer font-bold w-full left-0 text-center'>
        <p>&copy; Bamidele Olaoluwa {new Date().getFullYear()}</p>
      </div>
    </div>
  </aside>
}

export default Sidebar